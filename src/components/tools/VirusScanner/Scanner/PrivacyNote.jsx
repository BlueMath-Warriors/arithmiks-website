import React from "react";
import { colors } from "../../../../styles/tokens";
import { Privacy } from "./index.styled";

/** The privacy promise under every state of the scan card. */
const PrivacyNote = () => (
  <Privacy>
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke={colors.primary}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      <rect x="5" y="11" width="14" height="9.5" rx="2.2" />
    </svg>
    <span>
      <strong>Private by design.</strong> Files are processed in memory and deleted the moment your
      report is ready. Never stored, shared or used for training.
    </span>
  </Privacy>
);

export default PrivacyNote;
