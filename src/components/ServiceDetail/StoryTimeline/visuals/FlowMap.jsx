import React from "react";

/**
 * Step 2 art: a sign-in flow with the chosen path travelling through it.
 * Decorative, ported verbatim from the design (inline styles, as in the case
 * study flow diagrams); its keyframes live in StoryTimeline's styles.
 */
const FlowMap = () => (
  <svg
    viewBox="0 0 400 300"
    width="82%"
    fill="none"
    aria-hidden="true"
    style={{ overflow: "visible" }}
  >
    <defs>
      <linearGradient id="uxFlowG" x1="0" x2="1">
        <stop offset="0" stopColor="#1355FF" />
        <stop offset=".6" stopColor="#A96FC8" />
        <stop offset="1" stopColor="#EC4A9E" />
      </linearGradient>
    </defs>
    <path
      d="M70 60 H200 M200 60 V150 M200 150 H330 M200 150 V240 H330 M70 60 V240 H140"
      stroke="#CBD2E1"
      strokeWidth="2"
    />
    <path
      data-anim=""
      d="M70 60 H200 V150 H330"
      stroke="url(#uxFlowG)"
      strokeWidth="2.5"
      strokeDasharray="8 10"
      style={{ animation: "uxDash 2.4s linear infinite" }}
    />
    <g fontFamily="inherit" fontSize="12" fontWeight="600" fill="#0A0F1F">
      <rect x="20" y="40" width="100" height="40" rx="10" fill="#fff" stroke="#E4E8F0" />
      <text x="70" y="64" textAnchor="middle">
        Sign in
      </text>
      <rect x="150" y="40" width="100" height="40" rx="10" fill="#fff" stroke="#E4E8F0" />
      <text x="200" y="64" textAnchor="middle">
        Dashboard
      </text>
      <path d="M200 125 l28 25 -28 25 -28 -25z" fill="#EAF0FF" stroke="#1355FF" strokeWidth="1.5" />
      <text x="200" y="154" textAnchor="middle" fontSize="10" fill="#1355FF">
        Plan?
      </text>
      <rect x="280" y="130" width="100" height="40" rx="10" fill="#1355FF" stroke="#1355FF" />
      <text x="330" y="154" textAnchor="middle" fill="#fff">
        Upgrade
      </text>
      <rect x="280" y="220" width="100" height="40" rx="10" fill="#fff" stroke="#E4E8F0" />
      <text x="330" y="244" textAnchor="middle">
        Continue
      </text>
      <rect
        x="90"
        y="220"
        width="100"
        height="40"
        rx="10"
        fill="#fff"
        stroke="#E4E8F0"
        strokeDasharray="4 4"
      />
      <text x="140" y="244" textAnchor="middle" fill="#8A93A6">
        Forgot?
      </text>
    </g>
    <circle
      data-anim=""
      r="6"
      fill="#1355FF"
      style={{
        offsetPath: "path('M70 60 H200 V150 H330')",
        animation: "uxTravel 4s ease-in-out infinite",
      }}
    />
  </svg>
);

export default FlowMap;
