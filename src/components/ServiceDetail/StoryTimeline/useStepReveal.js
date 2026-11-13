import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../../utils/animations";

/**
 * Which timeline steps have scrolled into view. Steps only start hidden once
 * this has mounted and can observe them, so the timeline is never invisible
 * without script, and reduced-motion visitors see every step immediately.
 *
 * @param {number} count number of steps
 * @returns {{ listRef: React.RefObject<HTMLElement>, isWaiting: (index: number) => boolean }}
 */
export const useStepReveal = (count) => {
  const listRef = useRef(null);
  const [animating, setAnimating] = useState(false);
  const [shown, setShown] = useState(() => new Set());

  useEffect(() => {
    const list = listRef.current;
    if (!list || prefersReducedMotion() || typeof IntersectionObserver === "undefined") return undefined;
    setAnimating(true);
    const steps = [...list.children].filter((child) => child.dataset.step !== undefined);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(entry.target.dataset.step);
          setShown((current) => new Set(current).add(index));
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.15 }
    );
    steps.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, [count]);

  return { listRef, isWaiting: (index) => animating && !shown.has(index) };
};

export default useStepReveal;
