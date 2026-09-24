import { useCallback, useEffect, useRef, useState } from "react";

const FALLBACK_HEADER_HEIGHT = 80;
// The reading line sits this far below the header's bottom edge.
const READING_LINE_OFFSET = 40;
// Section anchors land this far below the header when jumped to.
const ANCHOR_GAP = 28;
// Hold a clicked item's highlight while the smooth scroll is still travelling.
const CLICK_LOCK_MS = 700;

/**
 * Tracks which section owns the reading line just below the fixed header —
 * not merely the topmost one on screen — so a short section still registers
 * as you pass through it. Also keeps each section's scroll-margin matched to
 * the header's real height so anchor jumps land clear of it.
 *
 * @param {string[]} sectionIds element ids of the sections, in page order
 * @returns {[string, (id: string) => void]} active id, and a setter for clicks
 */
export const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const lockedUntil = useRef(0);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    let frame = 0;
    let lastHeaderHeight = 0;
    const paint = () => {
      frame = 0;
      const header = document.querySelector("header");
      const headerHeight = header ? Math.round(header.getBoundingClientRect().height) : FALLBACK_HEADER_HEIGHT;
      if (headerHeight !== lastHeaderHeight) {
        lastHeaderHeight = headerHeight;
        sections.forEach((section) => {
          section.style.scrollMarginTop = `${headerHeight + ANCHOR_GAP}px`;
        });
      }
      if (Date.now() < lockedUntil.current) return;

      const line = headerHeight + READING_LINE_OFFSET;
      let next = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > line) next = section.id;
      });
      if (!next) {
        const above = sections.filter((section) => section.getBoundingClientRect().top <= line);
        next = above.length ? above[above.length - 1].id : sections[0].id;
      }
      setActiveId(next);
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
  }, [sectionIds]);

  const markActive = useCallback((id) => {
    lockedUntil.current = Date.now() + CLICK_LOCK_MS;
    setActiveId(id);
  }, []);

  return [activeId, markActive];
};

export default useActiveSection;
