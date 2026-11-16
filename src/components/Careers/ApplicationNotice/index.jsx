import React, { useEffect } from "react";
import { Notice, Message, DismissButton } from "./index.styled";

const AUTO_DISMISS_MS = 8000;

/**
 * Confirmation shown after the application dialog closes on success. A live
 * region, so screen readers announce it without moving focus.
 *
 * @param {{ onDismiss: () => void }} props
 */
const ApplicationNotice = ({ onDismiss }) => {
  useEffect(() => {
    const timer = window.setTimeout(onDismiss, AUTO_DISMISS_MS);
    return () => window.clearTimeout(timer);
  }, [onDismiss]);

  return (
    <Notice role="status">
      <Message>Thanks, we received your application.</Message>
      <DismissButton type="button" aria-label="Dismiss message" onClick={onDismiss}>
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M3 3l10 10M13 3 3 13" />
        </svg>
      </DismissButton>
    </Notice>
  );
};

export default ApplicationNotice;
