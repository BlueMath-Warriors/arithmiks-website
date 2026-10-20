import React from "react";
import { MarqueeMask, MarqueeRow, MarqueeCell } from "./index.styled";

/**
 * Infinite horizontal logo scroll. Renders `items` twice back-to-back so the
 * CSS animation loops with no visible seam — see index.styled.js for the
 * `translateX(-50%)` keyframe this depends on.
 *
 * Cell metrics and the mobile breakpoint are props because two callers need
 * different ones: the homepage Hero spaces bare logos with a gap and shifts at
 * 768px, while the /services trust row uses fixed-width cells and shifts at
 * 900px. The defaults are the Hero's original values.
 *
 * @param {{
 *   items: { key: string, node: React.ReactNode }[];
 *   durationSeconds?: number; durationSecondsMobile?: number;
 *   mobileBreakpoint?: number;
 *   gap?: number; gapMobile?: number;
 *   cellWidth?: number; cellWidthMd?: number; cellWidthSm?: number;
 *   cellHeight?: number; cellHeightMd?: number; cellHeightSm?: number;
 *   cellBreakpointMd?: number; cellBreakpointSm?: number;
 * }} props
 */
const Marquee = ({
  items,
  durationSeconds = 52,
  durationSecondsMobile = 38,
  mobileBreakpoint = 768,
  gap = 86,
  gapMobile = 58,
  cellWidth,
  cellWidthMd,
  cellWidthSm,
  cellHeight = 64,
  cellHeightMd = 48,
  cellHeightSm = 48,
  cellBreakpointMd = 768,
  cellBreakpointSm = 640,
}) => (
  <MarqueeMask>
    <MarqueeRow
      $duration={durationSeconds}
      $durationMobile={durationSecondsMobile}
      $mobileBreakpoint={mobileBreakpoint}
      $gap={gap}
      $gapMobile={gapMobile}
    >
      {[...items, ...items].map((item, i) => (
        <MarqueeCell
          key={`${item.key}-${i}`}
          $cellWidth={cellWidth}
          $cellWidthMd={cellWidthMd ?? cellWidth}
          $cellWidthSm={cellWidthSm ?? cellWidthMd ?? cellWidth}
          $cellHeight={cellHeight}
          $cellHeightMd={cellHeightMd}
          $cellHeightSm={cellHeightSm}
          $bpMd={cellBreakpointMd}
          $bpSm={cellBreakpointSm}
        >
          {item.node}
        </MarqueeCell>
      ))}
    </MarqueeRow>
  </MarqueeMask>
);

export default Marquee;
