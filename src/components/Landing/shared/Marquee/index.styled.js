import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const cssWidth = (width) => (width === "auto" ? "auto" : `${width}px`);

export const MarqueeMask = styled.div`
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 5%, #000 95%, transparent);
`;

export const MarqueeRow = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  animation: ${scroll} ${(p) => p.$duration}s linear infinite;

  @media (max-width: ${(p) => p.$mobileBreakpoint}px) {
    animation-duration: ${(p) => p.$durationMobile}s;
  }
`;

// The spacing is a trailing margin on every cell, not a flex `gap`: a gap has
// no trailing space after the last cell, so the row's -50% loop distance would
// fall half a gap short of one full set and the loop would jump at the seam.
export const MarqueeCell = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  height: ${(p) => p.$cellHeight}px;
  margin-right: ${(p) => p.$gap}px;
  ${(p) => (p.$cellWidth ? `width: ${cssWidth(p.$cellWidth)};` : "")}

  @media (max-width: ${(p) => p.$mobileBreakpoint}px) {
    margin-right: ${(p) => p.$gapMobile}px;
  }

  @media (max-width: ${(p) => p.$bpMd}px) {
    height: ${(p) => p.$cellHeightMd}px;
    ${(p) => (p.$cellWidthMd ? `width: ${cssWidth(p.$cellWidthMd)};` : "")}
  }

  @media (max-width: ${(p) => p.$bpSm}px) {
    height: ${(p) => p.$cellHeightSm}px;
    ${(p) => (p.$cellWidthSm ? `width: ${cssWidth(p.$cellWidthSm)};` : "")}
  }
`;
