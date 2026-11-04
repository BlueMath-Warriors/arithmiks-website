import { useEffect } from "react";
import { requestCloseDrawer } from "./bookingDrawerStore";

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]):not([type=hidden]),select,textarea,[tabindex]:not([tabindex="-1"])';
const SCROLL_EDGE_TOLERANCE = 1;

// Not offsetParent: that is always null for the fixed-position Close button.
const isVisible = (element) =>
  Boolean(element) &&
  element.getClientRects().length > 0 &&
  window.getComputedStyle(element).visibility !== "hidden";

/**
 * Modal behaviour for the open sidebar: Esc closes, Tab stays inside, page
 * scrolling is locked (the panel itself still scrolls), focus moves in on open
 * and back to the CTA on close, and the page is left where it was.
 *
 * Scroll is blocked by cancelling wheel/touch input outside the panel rather
 * than with `overflow: hidden`, so the page doesn't shift when the scrollbar
 * disappears.
 *
 * @param {{ active: boolean, panelRef: React.RefObject<HTMLElement>,
 *   closeRef: React.RefObject<HTMLElement>, trigger: Element | null }} props
 *   active: true from the moment the panel is rendered until it has slid away.
 */
export const useDrawerBehavior = ({ active, panelRef, closeRef, trigger }) => {
  useEffect(() => {
    if (!active) return undefined;
    const panel = panelRef.current;
    const scrollY = window.scrollY;
    if (!panel) return undefined;

    panel.scrollTop = 0;

    const blockScroll = (event) => {
      if (!panel.contains(event.target)) {
        event.preventDefault();
        return;
      }
      if (event.type !== "wheel") return;
      const scrollingUp = event.deltaY < 0;
      const atTop = panel.scrollTop <= 0;
      const atEnd =
        panel.scrollTop + panel.clientHeight >= panel.scrollHeight - SCROLL_EDGE_TOLERANCE;
      // Stops the page behind the panel from taking over at either end.
      if ((scrollingUp && atTop) || (!scrollingUp && atEnd)) event.preventDefault();
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        requestCloseDrawer();
        return;
      }
      if (event.key !== "Tab") return;

      const close = closeRef.current;
      const focusable = [close, ...panel.querySelectorAll(FOCUSABLE)].filter(isVisible);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && (current === first || current === panel)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      } else if (!panel.contains(current) && current !== close) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("wheel", blockScroll, { passive: false });
    window.addEventListener("touchmove", blockScroll, { passive: false });
    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", blockScroll);
      window.removeEventListener("touchmove", blockScroll);
      document.removeEventListener("keydown", onKeyDown);
      if (Math.abs(window.scrollY - scrollY) > 2) window.scrollTo(0, scrollY);
      if (trigger && trigger.focus) trigger.focus({ preventScroll: true });
    };
  }, [active, panelRef, closeRef, trigger]);
};
