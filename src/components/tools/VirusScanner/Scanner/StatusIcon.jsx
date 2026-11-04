import React from "react";

const PATHS = {
  clean: "m3.5 8.4 3 3 6-6.6",
  alert: "M8 2.5 1.8 13.5h12.4L8 2.5ZM8 6.8v3M8 11.9h.01",
  neutral: "M4 8h8",
};

/**
 * The small icon before an engine's status: a check when clear, a warning
 * when it found something, a dash when it didn't run.
 *
 * @param {{ tone: import("../scanReport").Tone }} props
 */
const StatusIcon = ({ tone }) => {
  const path = tone === "clean" ? PATHS.clean : tone === "neutral" ? PATHS.neutral : PATHS.alert;
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
};

export default StatusIcon;
