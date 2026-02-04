import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const animationPresets = {
  fadeUp: {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
  },
  
  fadeDown: {
    from: { opacity: 0, y: -60 },
    to: { opacity: 1, y: 0 },
  },
  
  slideLeft: {
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
  },
  
  slideRight: {
    from: { opacity: 0, x: 100 },
    to: { opacity: 1, x: 0 },
  },
  
  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
  },
  
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  
  rotateIn: {
    from: { opacity: 0, rotation: -10, y: 30 },
    to: { opacity: 1, rotation: 0, y: 0 },
  },
};

export const defaultSettings = {
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.1,
};

export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const createScrollAnimation = (element, options = {}) => {
  if (typeof window === "undefined" || !element) return null;
  
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, clearProps: "all" });
    return null;
  }

  const {
    preset = "fadeUp",
    duration = defaultSettings.duration,
    ease = defaultSettings.ease,
    delay = 0,
    stagger = 0,
    start = "top 85%",
    end = "bottom 15%",
    toggleActions = "play none none none",
    markers = false,
    onComplete,
  } = options;

  const animation = animationPresets[preset] || animationPresets.fadeUp;

  return gsap.fromTo(
    element,
    animation.from,
    {
      ...animation.to,
      duration,
      ease,
      delay,
      stagger,
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions,
        markers,
      },
      onComplete,
    }
  );
};

export const createStaggerAnimation = (parent, childSelector, options = {}) => {
  if (typeof window === "undefined" || !parent) return null;
  
  if (prefersReducedMotion()) {
    const children = parent.querySelectorAll(childSelector);
    gsap.set(children, { opacity: 1, clearProps: "all" });
    return null;
  }

  const {
    preset = "fadeUp",
    duration = defaultSettings.duration,
    ease = defaultSettings.ease,
    stagger = defaultSettings.stagger,
    start = "top 85%",
    delay = 0,
  } = options;

  const animation = animationPresets[preset] || animationPresets.fadeUp;
  const children = parent.querySelectorAll(childSelector);

  return gsap.fromTo(
    children,
    animation.from,
    {
      ...animation.to,
      duration,
      ease,
      stagger,
      delay,
      scrollTrigger: {
        trigger: parent,
        start,
        toggleActions: "play none none none",
      },
    }
  );
};

export const createHeroAnimation = (elements, options = {}) => {
  if (typeof window === "undefined") return null;
  
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, clearProps: "all" });
    return null;
  }

  const {
    duration = 1,
    ease = "power4.out",
    stagger = 0.15,
    delay = 0.2,
  } = options;

  const tl = gsap.timeline({ delay });

  tl.fromTo(
    elements,
    { opacity: 0, y: 80, clipPath: "inset(100% 0% 0% 0%)" },
    {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      duration,
      ease,
      stagger,
    }
  );

  return tl;
};

export const createParallax = (element, options = {}) => {
  if (typeof window === "undefined" || !element) return null;
  
  if (prefersReducedMotion()) return null;

  const { speed = 0.5, direction = "y" } = options;

  return gsap.to(element, {
    [direction]: () => speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const createCounterAnimation = (element, options = {}) => {
  if (typeof window === "undefined" || !element) return null;
  
  const { endValue = 100, duration = 2, suffix = "", prefix = "" } = options;

  if (prefersReducedMotion()) {
    element.textContent = `${prefix}${endValue}${suffix}`;
    return null;
  }

  const obj = { value: 0 };

  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      element.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
    },
  });
};

export const cleanupScrollTriggers = () => {
  if (typeof window === "undefined") return;
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

export const refreshScrollTrigger = () => {
  if (typeof window === "undefined") return;
  ScrollTrigger.refresh();
};

export { gsap, ScrollTrigger };
