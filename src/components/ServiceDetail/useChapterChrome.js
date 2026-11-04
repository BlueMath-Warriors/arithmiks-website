import { useEffect, useRef, useState } from "react";
import { PIN_MIN_WIDTH } from "./Offers/index.styled";

// A section is current while it straddles this line; the line never sits
// above the bottom of the pinned chrome.
const ACTIVE_LINE_RATIO = 0.3;
const ACTIVE_LINE_MIN_GAP = 30;
// Breathing room between the pinned chrome and a section after an anchor jump.
const ANCHOR_GAP = 6;
// Scroll jitter below this many pixels doesn't count as a direction change.
const DIRECTION_THRESHOLD = 2;
// The header retracts while the offers rail is at least this far up the screen.
const OFFERS_ZONE_RATIO = 0.5;
const HEADER_SLIDE = "transform 0.3s ease";

/**
 * Page chrome for a service page: which chapter is being read, whether the
 * chapter bar has pinned under the header, and — as in the design — the
 * header retracting while you scroll down (or ride the pinned offers rail)
 * so the bar takes its place, returning on any upward scroll.
 *
 * Sticky offsets are measured, never hardcoded: the header's height changes
 * across breakpoints and the bar is hidden on phones.
 *
 * @param {{ id: string }[]} chapters
 */
export const useChapterChrome = (chapters) => {
  const rootRef = useRef(null);
  const barRef = useRef(null);
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const root = rootRef.current;
    const header = document.querySelector("header");
    let frame = 0;
    let chrome = 0;
    let headerHeight = 0;
    let headerHidden = false;
    let lastY = window.scrollY;

    // Added to the header's own colour transitions rather than replacing them.
    if (header) {
      const own = window.getComputedStyle(header).transition;
      header.style.transition = own && own !== "all 0s ease 0s" ? `${own}, ${HEADER_SLIDE}` : HEADER_SLIDE;
    }

    const setHeaderHidden = (hidden) => {
      if (hidden === headerHidden || !header) return;
      headerHidden = hidden;
      header.style.transform = hidden ? "translateY(-100%)" : "";
      root.style.setProperty("--header-height", `${hidden ? 0 : headerHeight}px`);
    };

    const syncChrome = () => {
      const bar = barRef.current;
      headerHeight = header ? Math.round(header.getBoundingClientRect().height) : 0;
      const barVisible = bar && window.getComputedStyle(bar).display !== "none";
      const barHeight = barVisible ? bar.offsetHeight : 0;
      chrome = headerHeight + barHeight;
      root.style.setProperty("--header-height", `${headerHidden ? 0 : headerHeight}px`);
      // The hero clears the header at its real height, whether or not it's retracted.
      root.style.setProperty("--header-offset", `${headerHeight}px`);
      root.style.setProperty("--chrome-offset", `${chrome + ANCHOR_GAP}px`);
    };

    const updateHeader = (pinned) => {
      const bar = barRef.current;
      const barVisible = bar && window.getComputedStyle(bar).display !== "none";
      if (!barVisible || !pinned) {
        setHeaderHidden(false);
        return;
      }
      const y = window.scrollY;
      const dy = y - lastY;
      if (Math.abs(dy) > DIRECTION_THRESHOLD) lastY = y;
      const offers = window.innerWidth >= PIN_MIN_WIDTH && document.querySelector("[data-offer-track]");
      const offersBox = offers && offers.getBoundingClientRect();
      const inOffers =
        !!offersBox && offersBox.top < window.innerHeight * OFFERS_ZONE_RATIO && offersBox.bottom > 0;
      if (inOffers || dy > DIRECTION_THRESHOLD) setHeaderHidden(true);
      else if (dy < -DIRECTION_THRESHOLD) setHeaderHidden(false);
    };

    const measure = () => {
      frame = 0;
      const bar = barRef.current;
      const pinned = bar ? bar.getBoundingClientRect().top <= (headerHidden ? 0 : headerHeight) + 0.5 : false;
      setStuck(pinned);
      updateHeader(pinned);

      const sections = chapters.map((c) => document.getElementById(c.id)).filter(Boolean);
      if (!sections.length) return;
      const line = Math.max(chrome + ACTIVE_LINE_MIN_GAP, window.innerHeight * ACTIVE_LINE_RATIO);

      let next = null;
      sections.forEach((section) => {
        const r = section.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) next = section.id;
      });
      if (!next) {
        // Bands between chapters hold the last chapter passed.
        next = "";
        for (let k = sections.length - 1; k >= 0; k -= 1) {
          if (sections[k].getBoundingClientRect().top <= line) {
            next = sections[k].id;
            break;
          }
        }
      }
      // Once the last chapter has scrolled fully past, nothing is current.
      if (sections[sections.length - 1].getBoundingClientRect().bottom <= line) next = "";
      setActiveId((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    const onResize = () => {
      syncChrome();
      onScroll();
    };

    syncChrome();
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
      if (header) {
        header.style.transform = "";
        header.style.transition = "";
      }
    };
  }, [chapters]);

  return { rootRef, barRef, activeId, stuck };
};

export default useChapterChrome;
