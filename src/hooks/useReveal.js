import { useEffect } from "react";
import { prefersReducedMotion } from "../utils/animations";

const REVEAL_EASE = "cubic-bezier(.16,1,.3,1)";
const STAGGER_STEP_MS = 110;
const MAX_STAGGER_INDEX = 5;

const hiddenTransform = (mode, index) => {
  if (mode === "alt") return `translate3d(${index % 2 ? "44px" : "-44px"},18px,0)`;
  if (mode === "scale") return "scale(.9) translate3d(0,14px,0)";
  if (mode === "up") return "translate3d(0,30px,0)";
  return "translate3d(0,16px,0)";
};

const showImmediately = (elements) => {
  elements.forEach((element) => {
    element.style.opacity = "1";
  });
};

/**
 * Fades/rises every `[data-reveal]` descendant of `rootRef` into place the
 * first time it enters the viewport. A `[data-stagger="up|alt|scale"]`
 * ancestor sets the entry direction and a per-child delay so a grid arrives
 * as one choreographed group. Targets are pre-hidden by a global CSS rule
 * (html[data-motion], see gatsby-ssr.js) so they never flash visible first;
 * this hook always ends with them shown, including when it can't animate.
 */
export const useReveal = (rootRef) => {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const elements = [...root.querySelectorAll("[data-reveal]")];

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      showImmediately(elements);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    const groupIndex = (element) => {
      const group = element.closest("[data-stagger]");
      return group
        ? { group, index: Math.max(0, Array.prototype.indexOf.call(group.children, element)) }
        : { group: null, index: 0 };
    };

    elements.forEach((element) => {
      const { group, index } = groupIndex(element);
      element.style.transition = "none";
      element.style.opacity = "0";
      element.style.transform = hiddenTransform(group && group.getAttribute("data-stagger"), index);
    });
    // Commit the hidden state first, so elements already in view still animate in.
    void root.offsetHeight;
    elements.forEach((element) => {
      const { group, index } = groupIndex(element);
      element.style.transition = `opacity .65s ${REVEAL_EASE},transform .65s ${REVEAL_EASE}`;
      if (group) element.style.transitionDelay = `${Math.min(index, MAX_STAGGER_INDEX) * STAGGER_STEP_MS}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [rootRef]);
};

export default useReveal;
