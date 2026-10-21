import React, { useEffect, useRef, useState } from "react";
import { currentPath, track } from "../../../../../utils/analytics";
import { CALENDLY_URL } from "../constants";
import { StepWrap, Heading, BackButton, DetailsLine, CalendlyFrame } from "./index.styled";

const SUCCESS_GREEN = "#12B76A";
const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_ORIGIN = "https://calendly.com";

// One script for the whole session: the step mounts again every time someone
// goes back to edit and resubmits.
let calendlyScript = null;
const loadCalendly = () => {
  if (!calendlyScript) {
    calendlyScript = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve(window.Calendly);
      script.onerror = () => {
        calendlyScript = null;
        reject(new Error("Calendly failed to load"));
      };
      document.body.appendChild(script);
    });
  }
  return calendlyScript;
};

const CheckIcon = () => (
  <svg
    viewBox="0 0 20 20"
    width="15"
    height="15"
    fill="none"
    stroke={SUCCESS_GREEN}
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m4 10.4 4 4L16 6" />
  </svg>
);

/**
 * "Pick a time" step: Calendly's inline widget, prefilled with the name and
 * email from step 1 so the visitor doesn't type them twice.
 *
 * @param {{ firstName: string; name: string; email: string; detailsSummary: string; onBack: () => void }} props
 */
const BookingStep = ({ firstName, name, email, detailsSummary, onBack }) => {
  const frameRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const frame = frameRef.current;

    loadCalendly()
      .then((Calendly) => {
        if (cancelled || !frame || !Calendly) return;
        // Prefill goes in the URL: initInlineWidget's `prefill` option doesn't
        // reach the iframe with this widget.js. encodeURIComponent, not
        // URLSearchParams: Calendly shows a "+" for a space literally.
        const query = [["name", name], ["email", email]]
          .filter(([, value]) => value)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join("&");
        Calendly.initInlineWidget({
          url: query ? `${CALENDLY_URL}?${query}` : CALENDLY_URL,
          parentElement: frame,
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      // The widget's iframe is Calendly's, not React's, so it is removed by hand.
      if (frame) frame.innerHTML = "";
    };
  }, [name, email]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== CALENDLY_ORIGIN) return;
      if (event.data?.event === "calendly.event_scheduled") {
        track("book_call", { form_location: currentPath() });
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <StepWrap>
      <Heading>Thanks{firstName ? `, ${firstName}` : ""}! Pick a time that works for you.</Heading>
      <BackButton type="button" onClick={onBack}>
        <span aria-hidden="true">←</span> Back to edit
      </BackButton>
      <DetailsLine>
        <CheckIcon />
        <span>{detailsSummary}</span>
      </DetailsLine>
      {failed ? (
        <DetailsLine>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Open the booking calendar
          </a>
        </DetailsLine>
      ) : (
        <CalendlyFrame ref={frameRef} />
      )}
    </StepWrap>
  );
};

export default BookingStep;
