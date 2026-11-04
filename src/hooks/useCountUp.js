import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const defaultFormat = (value) => String(Math.round(value));

/**
 * Counts a number up from 0 to `end` once the element scrolls into view.
 *
 * @param {number} end
 * @param {{ duration?: number, ease?: string, format?: (value: number, done: boolean) => string }} [options]
 *   `format` renders each frame; `done` is true on the final one, so a caller
 *   can land on an exact label (e.g. "8.4%") while counting in whole numbers.
 */
export const useCountUp = (end, { duration = 1.4, ease = "power2.out", format = defaultFormat } = {}) => {
  const elementRef = useRef(null);
  // Held in a ref so an inline formatter doesn't restart the tween every render.
  const formatRef = useRef(format);
  formatRef.current = format;

  useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current) return undefined;
    if (prefersReducedMotion()) {
      elementRef.current.textContent = formatRef.current(end, true);
      return undefined;
    }
    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: end,
      duration,
      ease,
      onUpdate: () => {
        if (elementRef.current) {
          elementRef.current.textContent = formatRef.current(counter.n, counter.n === end);
        }
      },
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
    return () => tween.kill();
  }, [end, duration, ease]);

  return elementRef;
};
