import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { bandPadding } from "../../shared/Band/index.styled";

export const Section = styled.section`
  ${bandPadding}
  position: relative;
  background: ${colors.surface};
  overflow: clip;
`;

export const Glow = styled.div`
  position: absolute;
  top: -8%;
  left: -6%;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(19, 85, 255, 0.12), transparent 68%);
  pointer-events: none;
`;

// A second, softer glow some pages add at the band's lower right.
export const GlowLow = styled.div`
  position: absolute;
  right: 6%;
  bottom: 2%;
  width: min(520px, 42vw);
  height: min(400px, 32vw);
  border-radius: 50%;
  background: radial-gradient(
    closest-side,
    rgba(169, 111, 200, 0.07),
    rgba(236, 74, 158, 0.03) 55%,
    transparent
  );
  filter: blur(16px);
  pointer-events: none;
`;

export const Head = styled.div`
  margin-bottom: clamp(34px, 4vw, 52px);
`;

export const HeadRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px 64px;
`;

export const HeadIntro = styled.p`
  flex: 0 1 420px;
  max-width: 420px;
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.textMuted};
  text-align: left;
  text-wrap: pretty;
`;

export const Bento = styled.div`
  display: grid;
  grid-template-columns: 1.06fr 1fr 1fr;
  grid-auto-rows: minmax(0, auto);
  gap: 20px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Lead = styled.div`
  grid-row: span 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  overflow: hidden;
  padding: clamp(30px, 3vw, 42px);
  border-radius: 24px;
  background: linear-gradient(155deg, #0b3ad1 0%, #1355ff 46%, #5b37c4 100%);
  color: #fff;

  @media (max-width: 1100px) {
    grid-row: auto;
    grid-column: span 2;
  }

  @media (max-width: 640px) {
    grid-column: span 1;
  }
`;

export const LeadGlow = styled.span`
  position: absolute;
  right: -56px;
  bottom: -96px;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(236, 74, 158, 0.34), transparent 70%);
  pointer-events: none;
`;

export const LeadTop = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const LeadIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.16);
`;

export const LeadLabel = styled.span`
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.78);
`;

export const LeadBody = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const LeadQuestion = styled.span`
  font-size: clamp(23px, 2.5vw, 32px);
  font-weight: 750;
  letter-spacing: -0.022em;
  line-height: 1.15;
  color: #fff;
  text-wrap: balance;
`;

export const LeadText = styled.span`
  max-width: 38ch;
  font-size: 15.5px;
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.86);
  text-wrap: pretty;
`;

export const LeadCta = styled.a`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  padding: 12px 22px;
  font-size: 15px;
  font-weight: 550;
  color: ${colors.primary};
  background: #fff;
  border-radius: 100px;
  transition: transform 0.25s ease;

  &:hover {
    color: ${colors.primary};
    transform: translateY(-2px);
  }

  span {
    color: inherit;
  }
`;

export const Tile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: clamp(26px, 2.6vw, 34px);
  background: #fff;
  border: 1px solid ${colors.border};
  border-radius: 24px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 24px 48px -30px rgba(10, 15, 31, 0.4);
    border-color: #c9d6ff;
  }

  ${({ $wide }) =>
    $wide &&
    `
    grid-column: span 2;

    @media (max-width: 640px) {
      grid-column: span 1;
    }
  `}
`;

export const TileNumber = styled.span`
  position: absolute;
  top: clamp(20px, 2.4vw, 28px);
  right: clamp(22px, 2.6vw, 32px);
  font-size: clamp(38px, 4vw, 58px);
  font-weight: 750;
  letter-spacing: -0.04em;
  line-height: 0.8;
  background: linear-gradient(135deg, #dde5f7 0%, #efe6f6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TileIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: #eaf0ff;
`;

export const TileTitle = styled.span`
  margin-top: 6px;
  max-width: 26ch;
  font-size: clamp(17px, 1.7vw, 20px);
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: ${colors.text};
  text-wrap: balance;
`;

export const TileText = styled.span`
  font-size: 14.5px;
  line-height: 1.62;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const TileSource = styled.a`
  display: inline-flex;
  align-items: baseline;
  gap: 7px;
  margin-top: auto;
  padding-top: 10px;
  font-size: 12.5px;
  color: ${colors.textFaint};

  &:hover {
    color: ${colors.primary};
  }

  span {
    color: inherit;
  }

  span:first-child {
    font-weight: 550;
    color: ${colors.primary};
  }

  @media (max-width: 600px) {
    padding: 10px 0;
  }
`;
