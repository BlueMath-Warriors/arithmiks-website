import { useEffect } from "react";

/**
 * The hero panel scrolls with the page until its bottom meets the viewport's,
 * then holds there for the same distance so the gallery marquee stays in view
 * a little longer. The section's min-height is grown to make room for that
 * hold. Only runs while the panel is actually sticky (CSS switches it to
 * static on small screens and for reduced motion).
 */
export const useStickyDwell = (sectionRef, panelRef, leftColumnRef) => {
  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    if (!section || !panel) return undefined;

    let frame = 0;
    const paint = () => {
      frame = 0;
      if (getComputedStyle(panel).position !== "sticky") {
        section.style.minHeight = "";
        panel.style.top = "";
        return;
      }
      const sectionStyle = getComputedStyle(section);
      const lockTop = parseFloat(sectionStyle.paddingTop) || 0;
      const panelHeight = panel.offsetHeight;
      const drift = Math.max(0, panelHeight + lockTop - window.innerHeight);
      const needed = panelHeight + drift + lockTop + (parseFloat(sectionStyle.paddingBottom) || 0);
      section.style.minHeight = `${Math.ceil(needed)}px`;

      const scrolled = Math.max(0, -section.getBoundingClientRect().top);
      panel.style.top = `${Math.round(Math.max(lockTop - drift, lockTop - scrolled))}px`;
      if (leftColumnRef.current) {
        leftColumnRef.current.style.position = scrolled <= 0 ? "static" : "sticky";
      }
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
  }, [sectionRef, panelRef, leftColumnRef]);
};

export default useStickyDwell;
