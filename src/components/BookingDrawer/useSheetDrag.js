import { useEffect } from "react";
import { requestCloseDrawer } from "./bookingDrawerStore";

const SHEET_MAX_WIDTH = 700;
// Dragging up resists: a fifth of the finger's travel.
const UPWARD_RESISTANCE = 5;
const DISMISS_FRACTION = 0.25;
const FLICK_MIN_DISTANCE = 80;
const FLICK_MIN_SPEED = 0.5;
const SNAP_BACK_MS = 340;
const DISMISS_DELAY_MS = 200;
const SNAP_TRANSITION = "transform .32s cubic-bezier(.16,1,.3,1)";

/**
 * Phone bottom sheet: drag the grab handle down to dismiss. A short pull
 * snaps back; a long pull or a quick flick closes.
 *
 * @param {{ active: boolean, grabRef: React.RefObject<HTMLElement>,
 *   panelRef: React.RefObject<HTMLElement> }} props
 */
export const useSheetDrag = ({ active, grabRef, panelRef }) => {
  useEffect(() => {
    const grab = grabRef.current;
    const panel = panelRef.current;
    if (!active || !grab || !panel) return undefined;

    let startY = 0;
    let startTime = 0;
    let offset = 0;
    let dragging = false;
    let snapTimer = 0;
    let dismissTimer = 0;

    const onPointerDown = (event) => {
      if (window.innerWidth > SHEET_MAX_WIDTH) return;
      dragging = true;
      startY = event.clientY;
      startTime = performance.now();
      offset = 0;
      try {
        grab.setPointerCapture(event.pointerId);
      } catch (error) {
        // Capture is a nicety (keeps the drag alive off the handle); dragging still works without it.
      }
      panel.style.transition = "none";
    };

    const onPointerMove = (event) => {
      if (!dragging) return;
      const travel = event.clientY - startY;
      offset = travel > 0 ? travel : travel / UPWARD_RESISTANCE;
      panel.style.transform = `translate3d(0,${offset}px,0)`;
    };

    const onPointerEnd = () => {
      if (!dragging) return;
      dragging = false;
      const speed = offset / Math.max(1, performance.now() - startTime);
      panel.style.transition = SNAP_TRANSITION;
      const dismiss =
        offset > panel.clientHeight * DISMISS_FRACTION ||
        (offset > FLICK_MIN_DISTANCE && speed > FLICK_MIN_SPEED);
      if (dismiss) {
        panel.style.transform = "translate3d(0,100%,0)";
        dismissTimer = window.setTimeout(requestCloseDrawer, DISMISS_DELAY_MS);
      } else {
        panel.style.transform = "";
        snapTimer = window.setTimeout(() => {
          if (!dragging) panel.style.transition = "";
        }, SNAP_BACK_MS);
      }
    };

    grab.addEventListener("pointerdown", onPointerDown);
    grab.addEventListener("pointermove", onPointerMove);
    grab.addEventListener("pointerup", onPointerEnd);
    grab.addEventListener("pointercancel", onPointerEnd);

    return () => {
      grab.removeEventListener("pointerdown", onPointerDown);
      grab.removeEventListener("pointermove", onPointerMove);
      grab.removeEventListener("pointerup", onPointerEnd);
      grab.removeEventListener("pointercancel", onPointerEnd);
      window.clearTimeout(snapTimer);
      window.clearTimeout(dismissTimer);
    };
  }, [active, grabRef, panelRef]);
};
