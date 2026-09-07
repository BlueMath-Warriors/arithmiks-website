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
  gap: 86px;
  animation: ${scroll} ${(p) => p.$duration}s linear infinite;

  @media (max-width: 768px) {
    animation-duration: 38s;
    gap: 58px;
  }
`;

export const MarqueeCell = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  height: 64px;

  @media (max-width: 768px) {
    height: 48px;
  }
`;
