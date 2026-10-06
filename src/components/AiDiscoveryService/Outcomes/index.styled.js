import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { bandPadding } from "../index.styled";

export const OutcomesSection = styled.section`
  ${bandPadding}
  padding-bottom: 0 !important;
  background: #fff;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 56px;
  border-top: 1px solid ${colors.border};
  border-left: 1px solid ${colors.border};
`;

export const Cell = styled.div`
  padding: 32px 30px 34px;
  background: #fff;
  border-bottom: 1px solid ${colors.border};
  border-right: 1px solid ${colors.border};
  transition: background 0.4s ease;

  &:hover {
    background: #fafbff;
  }
`;

export const CellNumber = styled.div`
  margin-bottom: 22px;
  font-size: 11.5px;
  font-weight: 650;
  letter-spacing: 0.1em;
  color: ${colors.primary};
`;

export const CellTitle = styled.h3`
  margin: 0;
  font-size: clamp(17px, 1.5vw, 20px);
  font-weight: 550;
  letter-spacing: -0.013em;
  line-height: 1.3;
  color: ${colors.text};
  text-wrap: balance;
`;

// The CTA takes the grid's last slot without a cell frame of its own; its
// content hangs from the top so the row height is set by the outcome cells.
export const CtaCell = styled.div`
  position: relative;
  align-self: stretch;
`;

export const CtaInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  padding: 22px 30px 34px;

  @media (max-width: 900px) {
    position: static;
    padding: 28px 0 0;

    br {
      display: none;
    }
  }
`;

export const CtaLine = styled.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: ${colors.textFaint};
`;

export const Closing = styled.p`
  margin-top: 36px;
  font-size: 15.5px;
  line-height: 1.7;
  color: ${colors.textFaint};
  text-wrap: pretty;
`;

export const ValueSection = styled.section`
  padding: 72px 0 104px;
  background: #fff;

  @media (max-width: 640px) {
    padding: 48px 0 64px;
  }
`;

export const ValueCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px 64px;
  align-items: flex-start;
  padding: clamp(28px, 3vw, 44px);
  border-radius: 24px;
  background: ${colors.surface};
  border: 1px solid ${colors.border};
`;

export const ValueCopy = styled.div`
  flex: 1 1 300px;
  min-width: 0;
`;

export const ValueTitle = styled.h2`
  font-size: clamp(22px, 2.2vw, 30px);
  font-weight: 550;
  letter-spacing: -0.018em;
  line-height: 1.2;
  color: ${colors.text};
  text-wrap: balance;
`;

export const ValueText = styled.p`
  margin-top: 14px;
  max-width: 400px;
  font-size: 15px;
  line-height: 1.7;
  color: ${colors.textFaint};
  text-wrap: pretty;
`;

export const ValueChips = styled.div`
  flex: 1 1 480px;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: flex-start;
`;

export const ValueChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 100px;
  background: #fff;
  border: 1px solid ${colors.border};
  font-size: 14.5px;
  font-weight: 550;
  letter-spacing: -0.01em;
  color: ${colors.text};

  svg {
    flex: none;
    fill: none;
    stroke: ${colors.primary};
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;
