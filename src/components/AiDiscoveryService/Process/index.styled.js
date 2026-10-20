import styled from "styled-components";
import { brandGradientOnDark } from "../../shared/Section/index.styled";
import { bandPadding } from "../index.styled";

const MONO = "ui-monospace, 'JetBrains Mono', Menlo, monospace";
const RULE = "rgba(255,255,255,.14)";

export const Section = styled.section`
  ${bandPadding}
  background: #070b18;
`;

export const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 35fr) minmax(0, 65fr);
  column-gap: clamp(18px, 6.25vw, 120px);
  margin-top: clamp(40px, 4vw, 64px);
  border-top: 1px solid ${RULE};
  border-bottom: 1px solid ${RULE};

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const Viz = styled.div`
  position: sticky;
  top: 160px;
  align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(22px, 2.2vw, 36px);
  min-height: clamp(320px, 46vh, 460px);
  padding: clamp(34px, 3.4vw, 56px) 0;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const VizIcon = styled.svg`
  flex: none;
  display: block;
  width: clamp(64px, 5.8vw, 100px);
  height: clamp(64px, 5.8vw, 100px);
  margin-left: -2px;
  fill: none;
  stroke: #a9beff;
  stroke-width: 1.3;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

export const VizLabel = styled.span`
  display: flex;
  align-items: baseline;
  gap: clamp(12px, 1.1vw, 18px);
  min-width: 0;
`;

const gradientText = `
  background: ${brandGradientOnDark};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #9e9be8;
`;

export const VizNumber = styled.span`
  flex: none;
  font-size: clamp(26px, 2.9vw, 43px);
  font-weight: 750;
  letter-spacing: -0.03em;
  line-height: 1.08;
  ${gradientText}
`;

export const VizTitle = styled.span`
  font-size: clamp(26px, 2.9vw, 43px);
  font-weight: 550;
  letter-spacing: -0.02em;
  line-height: 1.08;
  color: #fff;
  text-wrap: balance;
`;

export const List = styled.div``;

export const Row = styled.article`
  position: relative;
  border-bottom: 1px solid ${RULE};
  background: ${({ $active }) => ($active ? "rgba(255,255,255,.04)" : "transparent")};
  opacity: ${({ $active }) => ($active ? 1 : 0.62)};
  transition: background 0.45s ease, opacity 0.45s ease;

  &:last-child {
    border-bottom: 0;
  }

  /* Without the pinned panel every stage is read in turn — none is dimmed. */
  @media (max-width: 960px) {
    background: transparent;
    opacity: 1;
  }
`;

export const Edge = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: ${RULE};
  transition: background 0.4s ease;

  @media (max-width: 960px) {
    background: ${RULE} !important;
  }
`;

export const RowBody = styled.div`
  padding: clamp(30px, 2.9vw, 44px) clamp(18px, 1.8vw, 30px) clamp(34px, 3.3vw, 50px);
`;

export const RowStage = styled.h3`
  display: none;
  margin-bottom: 14px;
  font-size: 24px;
  font-weight: 550;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #fff;

  span {
    font-weight: 750;
    ${gradientText}
  }

  @media (max-width: 960px) {
    display: block;
  }
`;

export const Tagline = styled.p`
  font-size: clamp(19px, 1.7vw, 26px);
  font-weight: 550;
  letter-spacing: -0.014em;
  line-height: 1.3;
  color: #fff;
  text-wrap: balance;
`;

export const Description = styled.p`
  margin-top: 14px;
  font-size: clamp(16px, 1.12vw, 19.5px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
  text-wrap: pretty;
`;

export const MonoLabel = styled.div`
  font-family: ${MONO};
  font-size: clamp(11.5px, 0.8vw, 13px);
  font-weight: 550;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 9px 16px;
  border-radius: 8px;
  background: rgba(143, 169, 255, 0.14);
  color: #c7d4ff;
  font-size: clamp(14.5px, 1vw, 17px);
  font-weight: 450;
  letter-spacing: -0.01em;
`;

export const Duration = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  align-items: baseline;
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: clamp(15px, 1.04vw, 18px);
  line-height: 1.55;

  strong {
    font-weight: 550;
    color: #fff;
  }

  span {
    color: rgba(255, 255, 255, 0.72);
  }
`;

export const Deliverables = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 15px;
`;

export const Deliverable = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: baseline;
  font-size: clamp(15.5px, 1.08vw, 19px);
  line-height: 1.55;

  strong {
    font-weight: 550;
    color: #fff;
  }

  span span {
    color: rgba(255, 255, 255, 0.66);
  }
`;

export const Bullet = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #5c7bff;
  transform: translateY(-2px);
`;
