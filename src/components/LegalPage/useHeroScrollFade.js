import { useEffect } from "react";
import { prefersReducedMotion } from "../../utils/animations";

const ENTER_EASE = "cubic-bezier(.16,1,.3,1)";
const ENTER_DELAY_MS = 260;
const ENTER_RISE_PX = 26;
// Over the first 90% of a viewport of scroll the intro dims to 45% and lifts 34px.
const FADE_DISTANCE_SHARE = 0.9;
const FADE_AMOUNT = 0.55;
const LIFT_PX = 34;

/**
 * Rises the hero block into place on load, then gently dims and lifts it as
 * the page scrolls away. The element starts hidden via the global
 * html[data-motion] [data-hero-enter] rule, so it never flashes first.
 */
export const useHeroScrollFade = (elementRef) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;
    if (prefersReducedMotion()) {
      element.style.opacity = "1";
      return undefined;
    }

    element.style.transition = "none";
    element.style.opacity = "0";
    element.style.transform = `translate3d(0,${ENTER_RISE_PX}px,0)`;
    void element.offsetHeight;
    element.style.transition = `opacity .8s ${ENTER_EASE},transform .8s ${ENTER_EASE}`;
    element.style.transitionDelay = `${ENTER_DELAY_MS}ms`;

    let frame = 0;
    const paint = () => {
      frame = 0;
      const progress = Math.min(1, window.scrollY / (window.innerHeight * FADE_DISTANCE_SHARE));
      element.style.opacity = String(1 - progress * FADE_AMOUNT);
      element.style.transform = `translate3d(0,${progress * -LIFT_PX}px,0)`;
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [elementRef]);
};

export default useHeroScrollFade;
