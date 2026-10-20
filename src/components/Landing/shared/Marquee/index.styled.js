import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

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
  gap: ${(p) => p.$gap}px;
  animation: ${scroll} ${(p) => p.$duration}s linear infinite;

  @media (max-width: ${(p) => p.$mobileBreakpoint}px) {
    animation-duration: ${(p) => p.$durationMobile}s;
    gap: ${(p) => p.$gapMobile}px;
  }
`;

export const MarqueeCell = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  height: ${(p) => p.$cellHeight}px;
  ${(p) => (p.$cellWidth ? `width: ${p.$cellWidth}px;` : "")}

  @media (max-width: ${(p) => p.$bpMd}px) {
    height: ${(p) => p.$cellHeightMd}px;
    ${(p) => (p.$cellWidthMd ? `width: ${p.$cellWidthMd}px;` : "")}
  }

  @media (max-width: ${(p) => p.$bpSm}px) {
    height: ${(p) => p.$cellHeightSm}px;
    ${(p) => (p.$cellWidthSm ? `width: ${p.$cellWidthSm}px;` : "")}
  }
`;
