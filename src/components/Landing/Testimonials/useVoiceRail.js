import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../../utils/animations";

// Fraction of the remaining distance covered per frame — the design's easing.
const EASE_PER_FRAME = 0.14;
// Below this the rail is treated as arrived, so the loop can stop.
const SETTLE_PX = 0.3;
// Horizontal travel before a press becomes a drag (smaller is just a click).
const DRAG_THRESHOLD_PX = 6;

const clamp = (value, max) => Math.max(0, Math.min(value, max));

/**
 * Drives the testimonial rail: the track is translated (not scrolled) so cards
 * past the content edge stay visible out to the viewport, as in the design.
 * Each bar maps to an evenly spaced stop across the rail's full travel.
 *
 * @param {number} count number of testimonials (one bar each)
 * @param {(event: { method: "dot" | "swipe", from: number, to: number }) => void} onIndexChange
 *   fired when the active bar changes through a user action
 * @returns {{ viewRef, trackRef, activeIndex: number, goTo: (index: number) => void }}
 */
export const useVoiceRail = (count, onIndexChange) => {
  const viewRef = useRef(null);
  const trackRef = useRef(null);
  const positionRef = useRef(0);
  const goalRef = useRef(0);
  const frameRef = useRef(0);
  const activeRef = useRef(0);
  // While a bar click is still travelling, the bars it passes aren't swipes.
  const barTargetRef = useRef(null);
  const onIndexChangeRef = useRef(onIndexChange);
  const [activeIndex, setActiveIndex] = useState(0);

  onIndexChangeRef.current = onIndexChange;

  const maxTravel = useCallback(() => {
    const view = viewRef.current;
    const track = trackRef.current;
    if (!view || !track) return 0;
    const styles = getComputedStyle(view);
    const contentWidth =
      view.clientWidth - (parseFloat(styles.paddingLeft) || 0) - (parseFloat(styles.paddingRight) || 0);
    return Math.max(0, track.scrollWidth - contentWidth);
  }, []);

  const paint = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(-${positionRef.current.toFixed(1)}px,0,0)`;

    const max = maxTravel();
    const next =
      max > 0 && count > 1
        ? clamp(Math.round((positionRef.current / max) * (count - 1)), count - 1)
        : 0;
    if (next === activeRef.current) return;

    const previous = activeRef.current;
    activeRef.current = next;
    setActiveIndex(next);
    if (barTargetRef.current === null) {
      onIndexChangeRef.current?.({ method: "swipe", from: previous, to: next });
    } else if (barTargetRef.current === next) {
      barTargetRef.current = null;
    }
  }, [count, maxTravel]);

  const tick = useCallback(() => {
    frameRef.current = 0;
    const goal = clamp(goalRef.current, maxTravel());
    const current = positionRef.current;
    const stepped = prefersReducedMotion() ? goal : current + (goal - current) * EASE_PER_FRAME;
    positionRef.current = Math.abs(goal - stepped) < SETTLE_PX ? goal : stepped;
    paint();
    if (positionRef.current !== goal) frameRef.current = requestAnimationFrame(tick);
  }, [maxTravel, paint]);

  const moveTo = useCallback(
    (goal) => {
      goalRef.current = clamp(goal, maxTravel());
      if (!frameRef.current) frameRef.current = requestAnimationFrame(tick);
    },
    [maxTravel, tick]
  );

  const goTo = useCallback(
    (index) => {
      if (index < 0 || index >= count) return;
      if (index !== activeRef.current) {
        onIndexChangeRef.current?.({ method: "dot", from: activeRef.current, to: index });
        barTargetRef.current = index;
      }
      moveTo(count > 1 ? (maxTravel() * index) / (count - 1) : 0);
    },
    [count, maxTravel, moveTo]
  );

  // A resize can leave the rail past its new end.
  useEffect(() => {
    const onResize = () => {
      const max = maxTravel();
      positionRef.current = clamp(positionRef.current, max);
      goalRef.current = clamp(goalRef.current, max);
      paint();
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [maxTravel, paint]);

  useEffect(() => {
    const view = viewRef.current;
    if (!view) return undefined;

    const onWheel = (event) => {
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      const dx = horizontal ? event.deltaX : event.shiftKey ? event.deltaY : 0;
      if (!dx) return;
      const goal = goalRef.current;
      // Hand the gesture back to the page once the rail is at either end.
      if ((dx < 0 && goal <= 0) || (dx > 0 && goal >= maxTravel())) return;
      event.preventDefault();
      barTargetRef.current = null;
      moveTo(goal + dx);
    };

    let startX = null;
    let startY = 0;
    let startGoal = 0;
    let dragging = false;

    const onPointerDown = (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      startX = event.clientX;
      startY = event.clientY;
      startGoal = goalRef.current;
      dragging = false;
    };
    const onPointerMove = (event) => {
      if (startX === null) return;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (!dragging) {
        if (Math.abs(dx) < DRAG_THRESHOLD_PX || Math.abs(dx) < Math.abs(dy)) return;
        dragging = true;
        barTargetRef.current = null;
        view.setPointerCapture?.(event.pointerId);
      }
      moveTo(startGoal - dx);
    };
    const onPointerEnd = () => {
      startX = null;
      // Cleared after the click that ends a drag has been swallowed below.
      setTimeout(() => {
        dragging = false;
      }, 0);
    };
    const onClickCapture = (event) => {
      if (!dragging) return;
      event.preventDefault();
      event.stopPropagation();
    };
    // Keyboard users tabbing into an off-screen card bring it into view.
    const onFocusIn = (event) => {
      const track = trackRef.current;
      let card = event.target;
      while (card && card.parentElement !== track) card = card.parentElement;
      if (!card || !track) return;
      const styles = getComputedStyle(view);
      const contentWidth =
        view.clientWidth - (parseFloat(styles.paddingLeft) || 0) - (parseFloat(styles.paddingRight) || 0);
      const left = card.offsetLeft;
      const right = left + card.offsetWidth;
      const goal = goalRef.current;
      if (left < goal) moveTo(left);
      else if (right > goal + contentWidth) moveTo(right - contentWidth);
    };

    view.addEventListener("wheel", onWheel, { passive: false });
    view.addEventListener("pointerdown", onPointerDown);
    view.addEventListener("pointermove", onPointerMove);
    view.addEventListener("pointerup", onPointerEnd);
    view.addEventListener("pointercancel", onPointerEnd);
    view.addEventListener("click", onClickCapture, true);
    view.addEventListener("focusin", onFocusIn);

    return () => {
      view.removeEventListener("wheel", onWheel);
      view.removeEventListener("pointerdown", onPointerDown);
      view.removeEventListener("pointermove", onPointerMove);
      view.removeEventListener("pointerup", onPointerEnd);
      view.removeEventListener("pointercancel", onPointerEnd);
      view.removeEventListener("click", onClickCapture, true);
      view.removeEventListener("focusin", onFocusIn);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };
  }, [maxTravel, moveTo]);

  return { viewRef, trackRef, activeIndex, goTo };
};

export default useVoiceRail;
