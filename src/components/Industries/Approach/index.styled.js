import styled from "styled-components";
import { bandPadding } from "../../shared/Section/index.styled";

const SINGLE_COLUMN = "(max-width: 700px)";
const THREE_COLUMNS = "(max-width: 1100px) and (min-width: 701px)";

export const Section = styled.section`
  position: relative;
  background: #070b18;
  color: #fff;
  overflow: hidden;
  ${bandPadding}
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(38% 48% at 80% 8%, rgba(19, 85, 255, 0.24), rgba(19, 85, 255, 0) 72%),
    radial-gradient(30% 40% at 8% 42%, rgba(169, 111, 200, 0.12), rgba(169, 111, 200, 0) 72%);
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Lede = styled.p`
  max-width: 40ch;
  font-size: clamp(14.5px, 0.97vw, 17px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
  text-wrap: pretty;
`;

export const Flow = styled.div`
  position: relative;
  margin-top: clamp(36px, 3.4vw, 58px);
`;

export const FlowRule = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, #5c8cff 0%, #1355ff 30%, #a96fc8 70%, #ec4a9e 100%);
`;

export const Steps = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media ${THREE_COLUMNS} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 8px;
  }

  @media ${SINGLE_COLUMN} {
    grid-template-columns: 1fr;
  }
`;

export const Step = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: clamp(24px, 2.2vw, 32px) clamp(18px, 1.6vw, 26px) clamp(28px, 2.4vw, 36px);
  transition: background 0.4s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  @media ${SINGLE_COLUMN} {
    padding-left: 0;
    padding-right: 0;

    &:not(:first-child) {
      border-top: 1px solid rgba(255, 255, 255, 0.14);
    }
  }
`;

export const StepNumber = styled.span`
  display: block;
  margin-bottom: clamp(20px, 2vw, 28px);
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.12em;
  color: #8fa9ff;
`;

export const StepTitle = styled.h3`
  margin: 0;
  font-size: clamp(16px, 1.15vw, 18.5px);
  font-weight: 650;
  line-height: 1.35;
  letter-spacing: -0.012em;
  color: #fff;
`;

export const StepText = styled.p`
  margin-top: 12px;
  font-size: clamp(13.5px, 0.92vw, 15px);
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.62);
  text-wrap: pretty;
`;

export const ReviewTag = styled.span`
  align-self: flex-start;
  margin-top: 16px;
  white-space: nowrap;
  font-size: 10.5px;
  font-weight: 650;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  padding: 4px 10px;
`;
