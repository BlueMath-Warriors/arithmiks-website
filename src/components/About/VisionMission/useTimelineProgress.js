import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../../../utils/animations";

// Fraction of the viewport height at which the rail "reads" — a node lights
// once its centre passes this line.
const READING_LINE = 0.55;
const TAIL_ALLOWANCE = 0.2;

/**
 * Drives the centre rail: its fill scales with scroll, and each item becomes
 * active once the fill reaches its node. Starts fully active so the
 * server-rendered markup is complete without JavaScript.
 */
export const useTimelineProgress = (timelineRef, fillRef, itemCount) => {
  const [active, setActive] = useState(() => Array(itemCount).fill(true));

  useEffect(() => {
    const timeline = timelineRef.current;
    const fill = fillRef.current;
    if (!timeline || !fill) return undefined;

    if (prefersReducedMotion()) {
      fill.style.transform = "scaleY(1)";
      return undefined;
    }

    let frame = 0;
    const paint = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const line = viewportHeight * READING_LINE;
      const box = timeline.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (line - box.top) / Math.max(1, box.height - viewportHeight * TAIL_ALLOWANCE))
      );
      fill.style.transform = `scaleY(${progress.toFixed(4)})`;

      const nodes = timeline.querySelectorAll("[data-timeline-node]");
      const next = Array.from(nodes, (node) => {
        const rect = node.getBoundingClientRect();
        return rect.top + rect.height / 2 < line;
      });
      setActive((previous) =>
        previous.length === next.length && previous.every((value, index) => value === next[index])
          ? previous
          : next
      );
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
  }, [timelineRef, fillRef]);

  return active;
};

export default useTimelineProgress;
