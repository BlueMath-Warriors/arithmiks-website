import { useEffect, useRef, useState } from "react";

/**
 * True from the first time the element is at least `threshold` visible. Falls
 * back to true where IntersectionObserver is unavailable, so content that
 * animates in never stays hidden.
 *
 * @param {number} [threshold]
 * @returns {[React.RefObject<HTMLElement>, boolean]}
 */
export const useInViewOnce = (threshold = 0.4) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, inView]);

  return [ref, inView];
};

export default useInViewOnce;
