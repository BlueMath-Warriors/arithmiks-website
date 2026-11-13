import React from "react";
import GradientMark from "../../../shared/GradientMark";
import { SHIELD_MARK } from "../shieldMark";
import { Shield, Ring, Sweep, MarkWrap, Threat, ThreatPulse } from "./index.styled";

// Threats around the shield: a virus and a bug being caught (they pulse), and
// a file already cleared.
const THREATS = [
  {
    color: "#F87171",
    line: "rgba(248,113,113,.45)",
    position: { left: "6%", top: "16%" },
    pulseDelay: "0s",
    icon: "M12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4ZM12 3.5v4.8M12 15.7v4.8M3.5 12h4.8M15.7 12h4.8M6 6l3.4 3.4M14.6 14.6 18 18M18 6l-3.4 3.4M9.4 14.6 6 18",
  },
  {
    color: "#FBBF24",
    line: "rgba(251,191,36,.45)",
    position: { right: "2%", top: "42%" },
    pulseDelay: "1.2s",
    icon: "M8.5 9.5a3.5 3.5 0 0 1 7 0v4.5a3.5 3.5 0 0 1-7 0ZM12 9.5V18M8.5 12.5H5M19 12.5h-3.5M9.5 6.5 8 5M14.5 6.5 16 5M8.7 16.5 6.5 18.5M15.3 16.5l2.2 2M8.7 9.8 6.5 8.5M15.3 9.8l2.2-1.3",
  },
  {
    color: "#4ADE80",
    line: "rgba(74,222,128,.45)",
    position: { left: "16%", bottom: "6%" },
    pulseDelay: null,
    icon: "M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10zM14 3.5v5h5M9 14.2l2 2 4-4.2",
  },
];

/** The hero's decorative scanner: radar rings, a sweep and the shield. */
const HeroShield = () => (
  <Shield aria-hidden="true">
    <Ring $inset="0" $line="rgba(143,169,255,.18)" />
    <Ring $inset="12%" $line="rgba(143,169,255,.24)" />
    <Ring
      $inset="26%"
      $line="rgba(143,169,255,.3)"
      $fill="radial-gradient(circle, rgba(126,123,214,.22), rgba(126,123,214,0) 70%)"
    />
    <Sweep />
    <MarkWrap>
      <GradientMark id="hero-shield" rib={SHIELD_MARK.rib} sol={SHIELD_MARK.sol} roundSolCaps />
    </MarkWrap>
    {THREATS.map((threat) => (
      <Threat key={threat.color} $line={threat.line} style={threat.position}>
        {threat.pulseDelay && <ThreatPulse $color={threat.color} $delay={threat.pulseDelay} />}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={threat.color}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={threat.icon} />
        </svg>
      </Threat>
    ))}
  </Shield>
);

export default HeroShield;
