import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { bandPadding, eyebrowOnDarkColor } from "../../shared/Section/index.styled";

export const Section = styled.section`
  background: ${colors.dark};
  ${bandPadding}
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Lede = styled.p`
  max-width: 36ch;
  font-size: clamp(14.5px, 0.97vw, 17px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
  text-wrap: pretty;
`;

export const StepGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;
  margin-top: clamp(36px, 3.4vw, 58px);

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Step = styled.div`
  padding: clamp(24px, 2.2vw, 32px) clamp(18px, 1.6vw, 26px) clamp(28px, 2.4vw, 36px);
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  transition: background 0.4s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const StepNumber = styled.div`
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.12em;
  color: ${eyebrowOnDarkColor};
  margin-bottom: clamp(20px, 2vw, 28px);
`;

export const StepTitle = styled.h3`
  font-size: clamp(16px, 1.15vw, 18.5px);
  font-weight: 650;
  line-height: 1.35;
  letter-spacing: -0.012em;
  color: #fff;
  min-height: 2.7em;
`;

export const StepText = styled.p`
  font-size: clamp(13.5px, 0.92vw, 15px);
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.62);
  margin-top: 12px;
  text-wrap: pretty;
`;

export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: clamp(18px, 2.2vw, 36px) clamp(24px, 3vw, 56px);
  margin-top: clamp(40px, 4vw, 64px);
  padding-top: clamp(28px, 2.8vw, 44px);
  border-top: 1px solid rgba(255, 255, 255, 0.14);
`;

export const StatValue = styled.div`
  font-size: clamp(38px, 4.4vw, 62px);
  font-weight: 750;
  letter-spacing: -0.025em;
  line-height: 1;
  color: #fff;

  span {
    color: inherit;
  }
`;

export const StatLabel = styled.div`
  font-size: clamp(10.5px, 0.8vw, 12.5px);
  font-weight: 650;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
  margin-top: 10px;
`;
