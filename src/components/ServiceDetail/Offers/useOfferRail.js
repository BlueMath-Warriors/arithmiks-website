import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../../utils/animations";
import { PIN_MIN_WIDTH, PANEL_GAP } from "./index.styled";

// Scroll distance (as a share of the viewport) that advances one stage, and
// the lead-in/lead-out before the first move and after the last.
const STEP_RATIO = 0.6;
const PAD_RATIO = 0.2;
// Fraction of the remaining distance the rail covers per frame.
const EASE_PER_FRAME = 0.16;
const SETTLE_PX = 0.3;
// A card counts as the current stage once this much of it is in view.
const ACTIVE_VISIBLE_SHARE = 0.7;
// The pinned stage parks this far under the chapter bar (tighter on short screens).
const SHORT_VIEWPORT = 860;
const STAGE_GAP_SHORT = 23;
const STAGE_GAP = 28;
const CHAPTER_BAR_FALLBACK = 53;

const isPinned = () => window.innerWidth >= PIN_MIN_WIDTH;

/**
 * Drives the offers rail. Wide screens pin the stage and translate the rail
 * as the page scrolls past (one stage per 60% of the viewport); narrow
 * screens get a native scroll-snap deck. Either way, `activeIndex` follows
 * the card that is mostly in view.
 *
 * @param {number} count number of offer stages
 */
export const useOfferRail = (count) => {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const railRef = useRef(null);
  const panelRefs = useRef([]);
  const geometry = useRef(null);
  const positionRef = useRef(null);
  const goalRef = useRef(0);
  const frameRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const pickActive = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const visibleArea = rail.parentElement.getBoundingClientRect();
    let best = -1;
    let bestShare = -1;
    panelRefs.current.forEach((panel, index) => {
      if (!panel) return;
      const r = panel.getBoundingClientRect();
      const visible = Math.max(0, Math.min(r.right, visibleArea.right) - Math.max(r.left, visibleArea.left));
      const share = visible / (r.width || 1);
      if (share >= ACTIVE_VISIBLE_SHARE && share > bestShare) {
        bestShare = share;
        best = index;
      }
    });
    if (best >= 0) setActiveIndex((current) => (current === best ? current : best));
  }, []);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const rail = railRef.current;
    if (!track || !stage || !rail) return;

    if (!isPinned()) {
      geometry.current = null;
      track.style.height = "";
      stage.style.height = "";
      stage.style.top = "";
      rail.style.transform = "";
      return;
    }

    const chapterBar = document.querySelector("[data-chapter-bar]");
    const barHeight = chapterBar && chapterBar.offsetHeight ? chapterBar.offsetHeight : CHAPTER_BAR_FALLBACK;
    const top = barHeight + (window.innerHeight <= SHORT_VIEWPORT ? STAGE_GAP_SHORT : STAGE_GAP);
    stage.style.top = `${top}px`;

    // Hold the stage at its natural height so the page length never changes.
    stage.style.height = "";
    const stageHeight = stage.offsetHeight;
    stage.style.height = `${stageHeight}px`;

    const panels = panelRefs.current.filter(Boolean);
    const cardWidth = panels.length ? panels[0].offsetWidth : 0;
    const windowWidth = rail.parentElement.clientWidth;
    const stops = panels.map((_, k) =>
      k >= panels.length - 1
        ? -(panels.length * cardWidth + (panels.length - 1) * PANEL_GAP - windowWidth)
        : -k * (cardWidth + PANEL_GAP)
    );
    const step = Math.round(window.innerHeight * STEP_RATIO);
    const pad = Math.round(window.innerHeight * PAD_RATIO);
    track.style.height = `${stageHeight + step * (panels.length - 1) + pad * 2}px`;
    geometry.current = { top, stops, step, pad };
  }, []);

  const tick = useCallback(() => {
    frameRef.current = 0;
    const rail = railRef.current;
    if (!rail || !geometry.current) return;
    const goal = goalRef.current;
    const current = positionRef.current == null ? goal : positionRef.current;
    const next = prefersReducedMotion() ? goal : current + (goal - current) * EASE_PER_FRAME;
    positionRef.current = Math.abs(goal - next) < SETTLE_PX ? goal : next;
    rail.style.transform = `translate3d(${positionRef.current.toFixed(1)}px,0,0)`;
    pickActive();
    if (positionRef.current !== goal) frameRef.current = requestAnimationFrame(tick);
  }, [pickActive]);

  const follow = useCallback(() => {
    const g = geometry.current;
    const track = trackRef.current;
    if (!g || !track || g.stops.length < 2) return;
    const scrolled = g.top - track.getBoundingClientRect().top;
    const last = g.stops.length - 1;
    const t = Math.min(last, Math.max(0, (scrolled - g.pad) / g.step));
    const k = Math.min(last - 1, Math.floor(t));
    goalRef.current = g.stops[k] + (g.stops[k + 1] - g.stops[k]) * (t - k);
    if (!frameRef.current) frameRef.current = requestAnimationFrame(tick);
  }, [tick]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    const onResize = () => {
      measure();
      positionRef.current = null;
      if (isPinned()) follow();
      else pickActive();
    };
    const onScroll = () => {
      if (isPinned()) follow();
    };
    const onRailScroll = () => {
      if (!isPinned()) pickActive();
    };

    onResize();
    // Web fonts can change the stage's natural height after first paint.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(onResize);
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    rail.addEventListener("scroll", onRailScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      rail.removeEventListener("scroll", onRailScroll);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };
  }, [measure, follow, pickActive]);

  /** Brings a stage into view: by scrolling the page when pinned, the deck otherwise. */
  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= count) return;
      const behavior = prefersReducedMotion() ? "auto" : "smooth";
      const g = geometry.current;
      const track = trackRef.current;
      if (isPinned() && g && track) {
        const target = window.scrollY + track.getBoundingClientRect().top - g.top + g.pad + g.step * index;
        window.scrollTo({ top: target, behavior });
        return;
      }
      const rail = railRef.current;
      const panel = panelRefs.current[index];
      if (!rail || !panel) return;
      const inset = parseFloat(getComputedStyle(rail).paddingLeft) || 0;
      rail.scrollTo({ left: panel.offsetLeft - inset, behavior });
    },
    [count]
  );

  return { trackRef, stageRef, railRef, panelRefs, activeIndex, goTo };
};

export default useOfferRail;
