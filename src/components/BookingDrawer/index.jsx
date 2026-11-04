import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import BookingPanel from "../Landing/Contact-Us/Booking-Flow/BookingPanel";
import { useBookingForm } from "../Landing/Contact-Us/Booking-Flow/useBookingForm";
import { getSnapshot, requestCloseDrawer, subscribe } from "./bookingDrawerStore";
import { useDrawerBehavior } from "./useDrawerBehavior";
import { useSheetDrag } from "./useSheetDrag";
import { Scrim, CloseButton, Panel, Grab } from "./index.styled";

// Matches the panel's .5s slide, so it is removed once it has left the screen.
const SLIDE_OUT_MS = 520;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The booking sidebar: the contact card's form in a panel that slides in from
 * the right (a bottom sheet on phones). Mounted once, in its own React root,
 * the first time a booking CTA is clicked (see utils/bookingTriggers.js).
 * The form state lives here, so closing and reopening keeps what was typed.
 */
const BookingDrawer = () => {
  const { isOpen, trigger } = useSyncExternalStore(subscribe, getSnapshot);
  const form = useBookingForm();
  // `rendered` keeps the panel in the DOM through the slide-out; `shown` drives the slide.
  const [rendered, setRendered] = useState(false);
  const [shown, setShown] = useState(false);
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const grabRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setRendered(true);
      // Two frames: the panel must paint off-screen first, or it would appear without sliding.
      let secondFrame = 0;
      const firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => setShown(true));
      });
      return () => {
        window.cancelAnimationFrame(firstFrame);
        window.cancelAnimationFrame(secondFrame);
      };
    }

    setShown(false);
    if (prefersReducedMotion()) {
      setRendered(false);
      return undefined;
    }
    const timer = window.setTimeout(() => setRendered(false), SLIDE_OUT_MS);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (shown) panelRef.current?.focus({ preventScroll: true });
  }, [shown]);

  useDrawerBehavior({ active: rendered, panelRef, closeRef, trigger });
  useSheetDrag({ active: rendered, grabRef, panelRef });

  return (
    <div data-booking-drawer="">
      <Scrim $open={shown} aria-hidden="true" onClick={requestCloseDrawer} />
      <CloseButton
        ref={closeRef}
        type="button"
        $open={shown}
        aria-label="Close booking form"
        onClick={requestCloseDrawer}
      >
        <svg
          viewBox="0 0 16 16"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M3 3l10 10M13 3 3 13" />
        </svg>
      </CloseButton>
      {rendered && (
        <Panel
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Book a free consultation"
          tabIndex={-1}
          $open={shown}
        >
          <Grab ref={grabRef} aria-hidden="true">
            <span />
          </Grab>
          <BookingPanel form={form} idPrefix="book" />
        </Panel>
      )}
    </div>
  );
};

export default BookingDrawer;
