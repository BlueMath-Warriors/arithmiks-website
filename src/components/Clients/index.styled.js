import styled from "styled-components";
import { colors } from "../../styles/tokens";
import { driftingGlow } from "../shared/Section/index.styled";

export const Section = styled.section`
  position: relative;
  padding: clamp(140px, 16vh, 190px) 0 clamp(64px, 6.25vw, 122px);
  background: ${colors.dark};
  overflow: hidden;

  @media (max-width: 900px) {
    padding: 110px 0 64px;
  }

  @media (max-width: 640px) {
    padding-bottom: 48px;
  }
`;

export const GlowClip = styled.span`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

export const Glow = styled.span`
  ${driftingGlow(
    "radial-gradient(42% 60% at 22% 20%, rgba(19, 85, 255, 0.26), transparent 70%), radial-gradient(38% 54% at 84% 8%, rgba(169, 111, 200, 0.16), transparent 72%)"
  )}
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
`;

export const EyebrowBar = styled.span`
  width: 3px;
  height: 19px;
  border-radius: 2px;
  background: linear-gradient(180deg, #5c8cff 0%, #1355ff 45%, #a96fc8 100%);
`;

export const EyebrowLabel = styled.span`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8fa9ff;
`;

export const Title = styled.h1`
  font-size: clamp(30px, 3.6vw, 52px);
  font-weight: 550;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #fff;
  max-width: 20ch;
  text-wrap: balance;

  span {
    font-weight: 750;
  }
`;

export const Intro = styled.p`
  margin-top: 22px;
  max-width: 86ch;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.72);
  text-wrap: pretty;
`;

// Equal rows keep every card as tall as the tallest one, like the design.
export const Grid = styled.div`
  margin-top: clamp(38px, 4.43vw, 73px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  gap: clamp(18px, 2.13vw, 39px);

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;
