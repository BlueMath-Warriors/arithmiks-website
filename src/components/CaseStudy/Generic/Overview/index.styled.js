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

export const GapOutline = styled.span`
  position: absolute;
  inset: 0;
  border-radius: 0 999px 999px 0;
  background: linear-gradient(
    to top left,
    #bc4e9b 0%,
    ${GAP_BOX_BLUE} 44.5%,
    ${GAP_BOX_BLUE} 100%
  );
`;

export const GapFill = styled.span`
  position: absolute;
  top: 2px;
  right: 3px;
  bottom: 0;
  left: 0;
  border-radius: 0 999px 999px 0;
  background: linear-gradient(90deg, #f2f7ff 0%, #fbfcff 100%);
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

// Screenshots get a card with a border and shadow; mockup images already
// carry their own backdrop and are shown as is.
export const Screenshot = styled.div`
  width: ${SCREENSHOT_BLEED_RATIO};
  // Caps every case study's image to ClauseLens's own height (1800/1125 =
  // 1.6, at the same bled width) without cropping or re-encoding the
  // source — object-fit: contain scales the whole image down to fit,
  // letterboxing on the sides if its own ratio is taller than 1.6, rather
  // than cutting into it the way object-fit: cover would.
  aspect-ratio: 1.6;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  // GatsbyImage's wrapper otherwise sizes itself from the source image's
  // own intrinsic ratio (via an internal padding-box), which would fight
  // the aspect-ratio set here — stretching it to fill this box instead
  // lets its own inner img (styled above) do the contain-fit.
  .gatsby-image-wrapper {
    width: 100%;
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

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
