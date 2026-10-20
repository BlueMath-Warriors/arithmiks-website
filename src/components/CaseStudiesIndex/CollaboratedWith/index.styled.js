import styled, { keyframes } from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

// Each row renders the logo list three times, so a third of the track is one
// full pass — this is what makes the loop seamless.
const marquee = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-33.3333%, 0, 0); }
`;

export const Section = styled.section`
  padding: clamp(24px, 2.4vw, 40px) 0 clamp(34px, 3.4vw, 56px);
  background: #fff;

  @media (max-width: 900px) {
    padding: 64px 0;
  }
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Title = styled.h2`
  text-align: center;
  font-size: clamp(15px, 1.04vw, 18px);
  font-weight: 650;
  letter-spacing: -0.01em;
  color: ${colors.text};
  margin-bottom: clamp(20px, 2vw, 32px);
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px 0;
`;

// The negative margin cancels the padding, which exists only so the cells'
// glow shadows are not clipped by the overflow:hidden that masks the track.
export const RowMask = styled.div`
  position: relative;
  overflow: hidden;
  padding: 30px 0;
  margin: -30px 0;
  mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 6%,
    #000 94%,
    transparent
  );
`;

export const Row = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  margin-left: ${(p) => (p.$reverse ? "-65px" : "0")};
  animation: ${marquee} ${(p) => p.$duration}s linear infinite
    ${(p) => (p.$reverse ? "reverse" : "normal")};
`;

export const Cell = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: clamp(150px, 10vw, 200px);
  height: clamp(76px, 5.4vw, 102px);
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.06);
  margin-right: 16px;
`;

export const Logo = styled.img`
  max-width: 82%;
  width: auto;
  object-fit: contain;
  display: block;
  opacity: 0.92;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;
