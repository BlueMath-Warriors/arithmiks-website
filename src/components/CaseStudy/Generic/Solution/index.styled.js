import styled from "styled-components";
import { bandPadding } from "../layout.styled";

const RELIABLE_BLUE = "#8fa9ff";

export const TrustSection = styled.section`
  position: relative;
  ${bandPadding}
  background: #070b18;
  color: #fff;
  overflow: hidden;
`;

export const Glow = styled.div`
  position: absolute;
  inset: -30% -10% auto auto;
  width: 60%;
  height: 120%;
  background: radial-gradient(closest-side, rgba(19, 85, 255, 0.28), transparent 70%);
  pointer-events: none;
`;

export const TrustHead = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
  gap: 20px clamp(36px, 5vw, 96px);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Description = styled.p`
  font-size: clamp(15px, 1.05vw, 18px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);

  strong {
    color: #fff;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(18px, 1.8vw, 28px);
  margin-top: clamp(36px, 3.6vw, 56px);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: clamp(24px, 2.4vw, 36px);
  border-radius: clamp(14px, 1.2vw, 20px);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(143, 169, 255, 0.5);
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const IconTile = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(19, 85, 255, 0.18);

  svg {
    stroke: ${RELIABLE_BLUE};
  }
`;

// Pages whose icon is a ready-made round badge image keep it as is.
export const IconImage = styled.img`
  width: 48px;
  height: 48px;
  display: block;
`;

export const CardTitle = styled.h3`
  margin-top: 6px;
  font-size: clamp(17px, 1.35vw, 21px);
  font-weight: 750;
  letter-spacing: -0.014em;
  line-height: 1.25;
  color: #fff;
`;

export const CardText = styled.p`
  font-size: clamp(14.5px, 1vw, 16px);
  line-height: 1.66;
  color: rgba(255, 255, 255, 0.66);
  text-wrap: pretty;
`;

export const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-between;
  gap: 0 clamp(18px, 1.8vw, 28px);
  margin-top: clamp(40px, 4vw, 64px);
  border-top: 1px solid rgba(255, 255, 255, 0.14);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 8px;
  }
`;

export const Stat = styled.div`
  padding-top: clamp(22px, 2.2vw, 32px);
  min-width: 0;
`;

export const StatValue = styled.div`
  font-size: clamp(34px, 3.4vw, 54px);
  font-weight: 750;
  letter-spacing: -0.03em;
  line-height: 1;
  color: #fff;
`;

export const StatLabel = styled.div`
  margin-top: 10px;
  font-size: clamp(14px, 0.95vw, 15.5px);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.66);
  white-space: nowrap;

  @media (max-width: 1100px) {
    white-space: normal;
    text-wrap: pretty;
  }
`;
