import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../utils/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Counts a number up from 0 to `end` once the element scrolls into view. */
export const useCountUp = (end, { duration = 1.4 } = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current) return undefined;
    if (prefersReducedMotion()) {
      elementRef.current.textContent = String(end);
      return undefined;
    }
    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: end,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (elementRef.current) elementRef.current.textContent = String(Math.round(counter.n));
      },
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
    return () => tween.kill();
  }, [end, duration]);

  return elementRef;
};
