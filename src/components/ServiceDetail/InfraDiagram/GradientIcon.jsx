import React, { useId } from "react";

const DEFAULT_STOPS = ["#5C8CFF", "#1355FF", "#A96FC8"];

/**
 * A 24px-grid line icon stroked with a three-stop diagonal gradient.
 *
 * @param {{ path: string, size?: number, stops?: [string, string, string] }} props
 */
const GradientIcon = ({ path, size = 30, stops = DEFAULT_STOPS }) => {
  const id = `grad-${useId().replace(/:/g, "")}`;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={`url(#${id})`}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="3" y1="3" x2="21" y2="21">
          <stop offset="0" stopColor={stops[0]} />
          <stop offset=".55" stopColor={stops[1]} />
          <stop offset="1" stopColor={stops[2]} />
        </linearGradient>
      </defs>
      <path d={path} />
    </svg>
  );
};

export default GradientIcon;
