import React from "react";
import { MarqueeMask, MarqueeRow, MarqueeCell } from "./index.styled";

/**
 * Infinite horizontal logo scroll. Renders `items` twice back-to-back so the
 * CSS animation loops with no visible seam — see index.styled.js for the
 * `translateX(-50%)` keyframe this depends on.
 */
const Marquee = ({ items, durationSeconds = 52 }) => (
  <MarqueeMask>
    <MarqueeRow $duration={durationSeconds}>
      {[...items, ...items].map((item, i) => (
        <MarqueeCell key={`${item.key}-${i}`}>{item.node}</MarqueeCell>
      ))}
    </MarqueeRow>
  </MarqueeMask>
);

export default Marquee;
