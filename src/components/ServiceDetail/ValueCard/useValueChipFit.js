import { useEffect, useRef } from "react";
import { WIDE_QUERY } from "./index.styled";

// A paragraph taller than this many lines drops its hand-placed line break.
const MAX_LINES_WITH_BREAK = 2.5;
// The design re-fits a few times while fonts and layout settle.
const SETTLE_DELAYS_MS = [0, 300, 1200];

/**
 * Wide screens: the chip box is sized to the first `perRow` chips (and, for
 * rows of three, to the remaining chips if those run wider), and the
 * paragraph's manual line break is dropped if it would wrap past two lines.
 * Both are layout measurements CSS can't express.
 *
 * @param {number} [perRow] chips on the first row — 2 on most pages, 3 on DevOps
 */
export const useValueChipFit = (perRow = 2) => {
  const chipsRef = useRef(null);
  const breakRef = useRef(null);

  useEffect(() => {
    const fit = () => {
      const lineBreak = breakRef.current;
      if (lineBreak) {
        lineBreak.style.display = "";
        if (getComputedStyle(lineBreak).display !== "none") {
          const paragraph = lineBreak.parentElement;
          const lineHeight = parseFloat(getComputedStyle(paragraph).lineHeight) || 25;
          if (paragraph.offsetHeight > lineHeight * MAX_LINES_WITH_BREAK) lineBreak.style.display = "none";
        }
      }

      const box = chipsRef.current;
      if (!box) return;
      box.style.width = "";
      if (!window.matchMedia(WIDE_QUERY).matches) return;
      const chips = [...box.children];
      if (chips.length < 2) return;
      const gap = parseFloat(getComputedStyle(box).columnGap) || 0;
      const rowWidth = (row) => row.reduce((sum, chip, n) => sum + chip.offsetWidth + (n ? gap : 0), 0);
      const first = Math.min(perRow, chips.length);
      const width =
        perRow > 2
          ? Math.max(rowWidth(chips.slice(0, first)), rowWidth(chips.slice(first)))
          : rowWidth(chips.slice(0, first));
      box.style.width = `${Math.ceil(width + 1)}px`;
    };

    const timers = SETTLE_DELAYS_MS.map((delay) => setTimeout(fit, delay));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    window.addEventListener("resize", fit);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", fit);
    };
  }, [perRow]);

  return { chipsRef, breakRef };
};

export default useValueChipFit;
