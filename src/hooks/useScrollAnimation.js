import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  animationPresets,
  defaultSettings,
  prefersReducedMotion,
} from "../utils/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * @param {Object} options 
 * @returns {Object}
 */
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  const {
    preset = "fadeUp",
    duration = defaultSettings.duration,
    ease = defaultSettings.ease,
    delay = 0,
    start = "top 85%",
    toggleActions = "play none none none",
    once = true,
    disabled = false,
  } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (disabled || !elementRef.current) return;

    if (prefersReducedMotion()) {
      gsap.set(elementRef.current, { opacity: 1, clearProps: "all" });
      return;
    }

    const animation = animationPresets[preset] || animationPresets.fadeUp;

    gsap.set(elementRef.current, animation.from);

    animationRef.current = gsap.to(elementRef.current, {
      ...animation.to,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: elementRef.current,
        start,
        toggleActions: once ? "play none none none" : toggleActions,
      },
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [preset, duration, ease, delay, start, toggleActions, once, disabled]);

  return elementRef;
};

/**
 * @param {string} childSelector 
 * @param {Object} options 
 * @returns {Object} 
 */
export const useStaggerAnimation = (childSelector, options = {}) => {
  const parentRef = useRef(null);
  const animationRef = useRef(null);

  const {
    preset = "fadeUp",
    duration = defaultSettings.duration,
    ease = defaultSettings.ease,
    stagger = defaultSettings.stagger,
    delay = 0,
    start = "top 85%",
    disabled = false,
  } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (disabled || !parentRef.current) return;

    const children = parentRef.current.querySelectorAll(childSelector);
    if (!children.length) return;

    if (prefersReducedMotion()) {
      gsap.set(children, { opacity: 1, clearProps: "all" });
      return;
    }

    const animation = animationPresets[preset] || animationPresets.fadeUp;

    gsap.set(children, animation.from);

    animationRef.current = gsap.to(children, {
      ...animation.to,
      duration,
      ease,
      stagger,
      delay,
      scrollTrigger: {
        trigger: parentRef.current,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [childSelector, preset, duration, ease, stagger, delay, start, disabled]);

  return parentRef;
};

/**
 * @param {Object} options 
 * @returns {Object} 
 */
export const useParallax = (options = {}) => {
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  const { speed = 0.3, direction = "y", disabled = false } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (disabled || !elementRef.current) return;
    if (prefersReducedMotion()) return;

    animationRef.current = gsap.to(elementRef.current, {
      [direction]: () => speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [speed, direction, disabled]);

  return elementRef;
};

/**
 * @param {Object} options 
 * @returns {Object}
 */
export const useHeroAnimation = (options = {}) => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  const {
    childSelector = ".hero-animate",
    duration = 1,
    ease = "power4.out",
    stagger = 0.15,
    delay = 0.3,
    disabled = false,
  } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (disabled || !containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(childSelector);
    if (!elements.length) return;

    if (prefersReducedMotion()) {
      gsap.set(elements, { opacity: 1, clearProps: "all" });
      return;
    }

    gsap.set(elements, {
      opacity: 0,
      y: 60,
    });

    timelineRef.current = gsap.timeline({ delay });

    timelineRef.current.to(elements, {
      opacity: 1,
      y: 0,
      duration,
      ease,
      stagger,
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [childSelector, duration, ease, stagger, delay, disabled]);

  return containerRef;
};

/**
 * @param {Object} options 
 * @returns {Object} 
 */
export const useFadeIn = (options = {}) => {
  const elementRef = useRef(null);

  const {
    duration = 0.6,
    ease = "power2.out",
    delay = 0,
    disabled = false,
  } = options;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (disabled || !elementRef.current) return;

    if (prefersReducedMotion()) {
      gsap.set(elementRef.current, { opacity: 1 });
      return;
    }

    gsap.fromTo(
      elementRef.current,
      { opacity: 0 },
      { opacity: 1, duration, ease, delay }
    );
  }, [duration, ease, delay, disabled]);

  return elementRef;
};

export default useScrollAnimation;
