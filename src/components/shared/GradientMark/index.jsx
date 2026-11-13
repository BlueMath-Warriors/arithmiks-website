import React from "react";
import styled from "styled-components";

const MARK_STOPS = [
  ["0", "#3F74DC"],
  [".32", "#7E7BD6"],
  [".58", "#A96FC8"],
  [".8", "#D95BAC"],
  ["1", "#EC4A9E"],
];

const Svg = styled.svg`
  display: block;
  overflow: visible;
`;

/**
 * A gradient line icon on a 48-unit grid, as the tool designs draw them: the
 * `rib` path becomes a hollow ribbon (a wide white stroke masked by a narrower
 * black one) and `sol` a plain gradient stroke. Either path may be empty.
 * Size it with width/height or by styling the component.
 *
 * @param {{ id: string, rib?: string, sol?: string, roundSolCaps?: boolean,
 *   size?: number, className?: string }} props
 *   id: unique on the page; it prefixes the gradient and mask ids.
 */
const GradientMark = ({ id, rib = "", sol = "", roundSolCaps = false, size = 40, className }) => {
  const gradientId = `${id}-grad`;
  const maskId = `${id}-mask`;
  return (
    <Svg
      className={className}
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="44"
          y1="20"
          x2="2"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          {MARK_STOPS.map(([offset, color]) => (
            <stop key={offset} offset={offset} stopColor={color} />
          ))}
        </linearGradient>
        {rib && (
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
            <path
              d={rib}
              stroke="#fff"
              strokeWidth="6.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={rib}
              stroke="#000"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </mask>
        )}
      </defs>
      {rib && <rect width="48" height="48" fill={`url(#${gradientId})`} mask={`url(#${maskId})`} />}
      {sol && (
        <path
          d={sol}
          stroke={`url(#${gradientId})`}
          strokeWidth="1.8"
          strokeLinecap={roundSolCaps ? "round" : undefined}
          strokeLinejoin="round"
        />
      )}
    </Svg>
  );
};

export default GradientMark;
