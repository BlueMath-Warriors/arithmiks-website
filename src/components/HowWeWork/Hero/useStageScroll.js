import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../../utils/animations";

// The first 4% of the runway holds the intro still before anything moves; the
// last stretch past LEAD_IN + RUN_SHARE lets the final stage settle.
const LEAD_IN = 0.04;
const RUN_SHARE = 0.9;
const INTRO_FADE_RATE = 1.5;
const INTRO_LIFT_PX = 70;
const CUE_VISIBLE_UNTIL = 0.25;
const GLOW_FADE_START = 0.88;
const GLOW_FADE_AMOUNT = 0.35;
// The glow drifts down at this fraction of scroll speed, capped at one viewport.
const GLOW_PARALLAX = 0.28;
// Past this share of the runway the header may go solid again.
export const STAGE_HERO_DONE = 0.9;

const clamp01 = (value) => Math.min(1, Math.max(0, value));

/** Scroll progress (0–1) through a pinned stage section, or null while it isn't pinned. */
export const stageProgress = (stage, pin) => {
  if (!stage || !pin || getComputedStyle(pin).position !== "sticky") return null;
  const span = stage.offsetHeight - window.innerHeight;
  return span > 0 ? clamp01(-stage.getBoundingClientRect().top / span) : 0;
};

/**
 * Pinned narrative: the intro plus one "beat" per stage share one sticky
 * viewport. Each beat owns an equal band of the runway, and the active beat
 * is derived from scroll position — so fast flicks, jumps and scrubbing back
 * all land on the right stage. Continuous values (intro fade, rail fill) are
 * written straight to the DOM each frame; only the active index is state.
 *
 * @returns {{ activeIndex: number, jumpTo: (index: number) => void }}
 *   activeIndex is -1 while the intro is showing.
 */
export const useStageScroll = ({ stageRef, pinRef, introRef, cueRef, glowRef, railRef, stageCount }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const activeRef = useRef(-1);
  const beats = stageCount + 1;

  useEffect(() => {
    const stage = stageRef.current;
    const pin = pinRef.current;
    if (!stage || !pin) return undefined;

    const parallax = !prefersReducedMotion();
    let frame = 0;
    const paint = () => {
      frame = 0;
      if (parallax && glowRef.current) {
        const drift = Math.min(window.scrollY * GLOW_PARALLAX, window.innerHeight);
        glowRef.current.style.transform = `translate3d(0,${drift}px,0)`;
      }
      const progress = stageProgress(stage, pin);
      if (progress === null) return;

      const t = Math.min(0.9999, clamp01((progress - LEAD_IN) / RUN_SHARE));
      const beat = Math.floor(t * beats);
      const within = t * beats - beat;
      const index = beat - 1;

      if (glowRef.current) {
        const tail = clamp01((progress - GLOW_FADE_START) / (1 - GLOW_FADE_START));
        glowRef.current.style.opacity = String(1 - tail * GLOW_FADE_AMOUNT);
      }
      if (introRef.current) {
        const intro = introRef.current;
        const phase = beat === 0 ? within : 1;
        intro.style.opacity = String(beat === 0 ? 1 - Math.min(1, within * INTRO_FADE_RATE) : 0);
        intro.style.transform = `translate3d(0,${-phase * INTRO_LIFT_PX}px,0)`;
      }
      if (cueRef.current) {
        cueRef.current.style.opacity = beat === 0 && within < CUE_VISIBLE_UNTIL ? "1" : "0";
      }
      if (railRef.current) {
        const fills = [...railRef.current.querySelectorAll("[data-tick-fill]")];
        if (fills.length) {
          const first = fills[0].parentElement.getBoundingClientRect();
          const last = fills[fills.length - 1].parentElement.getBoundingClientRect();
          const runWidth = last.right - first.left;
          fills.forEach((fill, i) => {
            let width = 0;
            if (i < index) width = 100;
            else if (i === index) width = Math.round(within * 100);
            fill.style.width = `${width}%`;
            // One gradient spans the whole rail, so each segment shows its own slice of it.
            if (runWidth > 0) {
              const offset = fill.parentElement.getBoundingClientRect().left - first.left;
              fill.style.backgroundSize = `${runWidth}px 100%`;
              fill.style.backgroundPosition = `-${Math.round(offset)}px 0`;
            }
          });
        }
      }
      if (index !== activeRef.current) {
        activeRef.current = index;
        setActiveIndex(index);
      }
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [stageRef, pinRef, introRef, cueRef, glowRef, railRef, beats]);

  const jumpTo = useCallback(
    (index) => {
      const stage = stageRef.current;
      if (!stage) return;
      const span = stage.offsetHeight - window.innerHeight;
      // Land in the middle of that stage's band so it isn't on a boundary.
      const progress = ((index + 1 + 0.5) / beats) * RUN_SHARE + LEAD_IN;
      const top = stage.getBoundingClientRect().top + window.scrollY + progress * span;
      window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    },
    [stageRef, beats]
  );

  return { activeIndex, jumpTo };
};

export default useStageScroll;
