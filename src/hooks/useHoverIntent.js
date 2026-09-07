import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Open-on-hover-with-delay for the header's mega-menus, matching the source
 * design's behavior: hover or focus opens immediately, leaving closes after
 * a short delay (so the cursor can cross the gap to the panel), Escape
 * closes and returns focus to the trigger, and a click outside both the
 * trigger and the panel closes it too.
 */
export const useHoverIntent = ({ closeDelayMs = 180 } = {}) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);

  const openNow = useCallback(() => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  }, []);

  const closeAfterDelay = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), closeDelayMs);
  }, [closeDelayMs]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const handleClick = (event) => {
      if (
        triggerRef.current?.contains(event.target) ||
        panelRef.current?.contains(event.target)
      ) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return { open, setOpen, openNow, closeAfterDelay, triggerRef, panelRef };
};
