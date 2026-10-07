import styled from "styled-components";
import { colors } from "../../../../styles/tokens";
import { bandPadding } from "../layout.styled";

const GAP_BOX_BLUE = "rgba(9, 87, 222, 0.7)";
// designs/ClauseLens Page.html's own data-ovshot element uses this exact
// ratio (width:calc(100% * 2036/1300), height:auto on the img) — every case
// study shares this Overview component, so matching it here applies the
// same sizing everywhere, not just ClauseLens.
const SCREENSHOT_BLEED_RATIO = "calc(100% * 2036 / 1300)";

export const OverviewSection = styled.section`
  ${bandPadding}
  background: #fff;
  overflow-x: clip;
`;

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: clamp(36px, 5vw, 96px);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const TextColumn = styled.div`
  min-width: 0;
`;

export const Lead = styled.p`
  margin-top: clamp(16px, 1.6vw, 22px);
  font-size: clamp(15px, 1.05vw, 18px);
  line-height: 1.65;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const GapBox = styled.div`
  position: relative;
  margin-top: clamp(30px, 3vw, 44px);
  padding: clamp(28px, 2.6vw, 40px) clamp(44px, 4.8vw, 84px)
    clamp(28px, 2.6vw, 40px) 0;
  // The interior fill GapFill used to provide before the border became a
  // masked ring instead of a layered fill.
  background: linear-gradient(90deg, #f2f7ff 0%, #fbfcff 100%);
  border-radius: 0 999px 999px 0;
`;

// The box bleeds to the viewport's left edge as a tinted band and ends in a
// gradient-outlined pill on the right; three stacked layers build that outline.
export const GapBand = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100vw;
  right: 100%;
  background: #f2f7ff;
  // No border here — GapOutline/GapFill already draw the full border as a
  // single curved gradient across the whole box (0 to 100%). A border-top on
  // this layer too used to bleed its own flat 2px line all the way to
  // -100vw, showing up as a stray horizontal rule past the card's left edge.
`;

// A gradient border ring via padding + mask-composite, not a layered
// fill trick — "to top left" is corner-relative, so its angle (and the
// visible band where color is mid-transition) shifted with the box's own
// aspect ratio; on the much taller/narrower mobile box that transition
// band showed as a diagonal line cutting across the middle instead of
// staying confined to the curved edge. A masked ring is always exactly
// as thick as its padding, on every box shape, so there's no interior
// to leak through regardless of ratio.
export const GapOutline = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 0 999px 999px 0;
  padding: 2px;
  background: linear-gradient(
    135deg,
    #bc4e9b 0%,
    ${GAP_BOX_BLUE} 44.5%,
    ${GAP_BOX_BLUE} 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
`;

export const GapTitle = styled.h3`
  position: relative;
  font-size: clamp(17px, 1.3vw, 21px);
  font-weight: 750;
  letter-spacing: -0.014em;
  color: ${colors.text};
`;

export const GapText = styled.p`
  position: relative;
  margin-top: 10px;
  font-size: clamp(14.5px, 1vw, 16.5px);
  line-height: 1.68;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const ScreenshotColumn = styled.div`
  min-width: 0;
`;

// An invisible slot sized like ClauseLens's own image (same bled width,
// 1.6 aspect ratio) so every case study renders at the same height — but
// it has no background of its own, so a narrower image doesn't leave a
// visible white rectangle around it. Right-aligned so the image still
// bleeds to the slot's right edge, matching the original design.
export const Screenshot = styled.div`
  width: ${SCREENSHOT_BLEED_RATIO};
  aspect-ratio: 1.6;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
  }
`;

// The actual visible card: shrink-wrapped to the image's own rendered
// width at the slot's height (height: 100%; width: auto on the img below),
// so the border/shadow/background only ever cover the image itself.
export const ScreenshotCard = styled.div`
  height: 100%;
  overflow: hidden;

  img,
  .gatsby-image-wrapper {
    display: block;
    width: auto;
    height: 100%;
  }

  ${({ $framed }) =>
    $framed &&
    `
    background: #fff;
    border: 1px solid ${colors.border};
    border-radius: clamp(14px, 1.2vw, 20px);
    box-shadow: 0 30px 70px -34px rgba(10, 15, 31, 0.38), 0 2px 6px rgba(10, 15, 31, 0.04);
  `}
`;
