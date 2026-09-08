import { useEffect, useRef } from "react";

/**
 * Desktop-only pinned horizontal scroll for the case-study card rail: the
 * section becomes a tall runway with a sticky inner panel, and scroll
 * progress through that runway drives a translateX on the card track until
 * every card has passed. Below 901px this is a no-op — the rail is a plain
 * scroll-snap row instead (see Landing-Grid/index.styled.js).
 */
export const usePinnedCaseRail = () => {
  const stageRef = useRef(null);
  const panelRef = useRef(null);
  const viewRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const paint = () => {
      const stage = stageRef.current;
      const panel = panelRef.current;
      const view = viewRef.current;
      const track = trackRef.current;
      if (!stage || !panel || !view || !track) return;

      if (!window.matchMedia("(min-width: 901px)").matches) {
        stage.style.height = "";
        track.style.transform = "";
        return;
      }

      const overflow = Math.max(0, track.scrollWidth - view.clientWidth);
      const pinTop = 104;
      const padTop = parseFloat(getComputedStyle(stage).paddingTop) || 0;
      stage.style.height = `${padTop + panel.offsetHeight + pinTop + overflow}px`;

      const rect = stage.getBoundingClientRect();
      const span = Math.max(0, stage.offsetHeight - padTop - panel.offsetHeight - pinTop);
      const progress = span > 0 ? Math.min(1, Math.max(0, (-rect.top - padTop) / span)) : 0;
      track.style.transform = `translate3d(${-progress * overflow}px,0,0)`;
    };

    paint();
    window.addEventListener("scroll", paint, { passive: true });
    window.addEventListener("resize", paint, { passive: true });
    return () => {
      window.removeEventListener("scroll", paint);
      window.removeEventListener("resize", paint);
    };
  }, []);

  return { stageRef, panelRef, viewRef, trackRef };
};
