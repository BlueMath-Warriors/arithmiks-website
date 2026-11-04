import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { bandPadding } from "../../shared/Band/index.styled";

export const Section = styled.section`
  ${bandPadding}
  background: ${colors.surface};
  overflow-x: clip;
`;

export const Head = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  background: ${colors.border};

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: clamp(28px, 2.6vw, 40px) clamp(20px, 2vw, 32px) clamp(30px, 2.8vw, 44px);
  background: ${colors.surface};

  /* Phones: the icon takes its own column beside the tag and title. */
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    column-gap: 16px;
    align-items: center;
    padding: 24px 20px;
  }
`;

export const Icon = styled.span`
  flex: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eaf0ff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    grid-row: 1 / span 2;
  }
`;

export const Tag = styled.span`
  margin-top: 24px;
  font-size: 13.5px;
  font-weight: 550;
  line-height: 1.4;
  color: ${colors.primary};

  @media (max-width: 600px) {
    margin-top: 0;
    align-self: end;
  }
`;

export const Name = styled.h3`
  margin: 8px 0 0;
  font-size: clamp(19px, 1.5vw, 22px);
  font-weight: 650;
  letter-spacing: -0.016em;
  line-height: 1.25;
  color: ${colors.text};

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const Description = styled.p`
  margin: 12px 0 0;
  font-size: 15px;
  line-height: 1.6;
  color: ${colors.textFaint};
  text-wrap: pretty;

  @media (max-width: 600px) {
    grid-column: 1 / -1;
    margin-top: 14px;
  }
`;
