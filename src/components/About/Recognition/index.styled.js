import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const Section = styled.section`
  padding: clamp(64px, 5.9vw, 109px) 0 clamp(56px, 5vw, 92px);
  background: #fff;

  @media (max-width: 900px) {
    padding: 64px 0;
  }

  @media (max-width: 640px) {
    padding: 48px 0;
  }
`;

export const Split = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: clamp(36px, 4vw, 84px);
  align-items: start;

  h2 {
    max-width: 16ch;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Lede = styled.p`
  margin-top: 18px;
  max-width: 48ch;
  font-size: clamp(14.5px, 0.97vw, 17px);
  line-height: 1.65;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Awards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: clamp(24px, 2.4vw, 40px);
`;

export const Award = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: clamp(18px, 1.8vw, 28px) 0;
  border-top: 1px solid ${colors.border};

  &:last-child {
    border-bottom: 1px solid ${colors.border};
  }

  svg {
    flex: none;
    margin-top: 2px;
  }
`;

export const AwardText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AwardName = styled.span`
  font-size: clamp(16px, 1.15vw, 19px);
  font-weight: 700;
  letter-spacing: -0.012em;
  color: ${colors.text};
`;

export const AwardNote = styled.span`
  font-size: clamp(13.5px, 0.92vw, 15.5px);
  line-height: 1.55;
  color: ${colors.textMuted};
`;

export const BadgeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 2vw, 30px);
  align-items: center;
  justify-content: center;
  padding: clamp(30px, 3vw, 56px);
  border-radius: clamp(18px, 1.5vw, 26px);
  background: linear-gradient(170deg, #eaf0ff 0%, #f5f1ff 54%, #fff6fb 100%);
  border: 1px solid #c9d6ff;
`;

export const BadgeKicker = styled.span`
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.textFaint};
`;

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: clamp(18px, 2vw, 32px);

  img {
    height: clamp(96px, 8.5vw, 140px);
    width: auto;
    display: block;
  }
`;

export const BadgeCaption = styled.span`
  max-width: 34ch;
  text-align: center;
  font-size: clamp(13px, 0.9vw, 15px);
  line-height: 1.6;
  color: ${colors.textMuted};
`;
