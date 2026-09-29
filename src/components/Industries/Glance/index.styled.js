import styled from "styled-components";

const RULE = "1px solid rgba(255, 255, 255, 0.2)";
const TWO_COLUMN_STATS = "(max-width: 900px)";

export const Section = styled.section`
  position: relative;
  padding-top: clamp(56px, 6.25vw, 122px);
  padding-bottom: clamp(56px, 6.25vw, 122px);
  background: #070b18;
  color: #fff;
  overflow: hidden;

  @media (max-width: 900px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media (max-width: 640px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

export const Wash = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, #0b3ad1 0%, #1355ff 55%, #0a2aa0 100%);
  opacity: 0.96;
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: 28px clamp(32px, 3.97vw, 90.5px);
  align-items: start;

  @media ${TWO_COLUMN_STATS} {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: clamp(26px, 3.03vw, 52px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: #fff;
  max-width: 18ch;
  text-wrap: balance;
`;

export const Lede = styled.p`
  font-size: clamp(15px, 1.07vw, 20.5px);
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.88);
  text-wrap: pretty;
`;

export const Stats = styled.dl`
  margin: clamp(34px, 4.43vw, 73px) 0 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(18px, 2.13vw, 41px);

  @media ${TWO_COLUMN_STATS} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 26px;
  }
`;

export const Stat = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding-left: clamp(16px, 1.78vw, 37px);
  padding-right: clamp(8px, 1.2vw, 20px);
  border-left: ${RULE};

  &:last-child {
    border-right: ${RULE};
  }

  @media ${TWO_COLUMN_STATS} {
    &:nth-child(even) {
      border-right: ${RULE};
    }
  }
`;

export const StatValue = styled.dd`
  margin: 0;
  display: flex;
  align-items: flex-start;
  gap: 3px;
  color: #fff;
`;

export const StatNumber = styled.span`
  font-size: clamp(40px, 5.02vw, 90.5px);
  font-weight: 750;
  letter-spacing: -0.024em;
  line-height: 1;
  color: #fff;
`;

export const StatUnit = styled.span`
  font-size: clamp(16px, 1.87vw, 35px);
  font-weight: 650;
  line-height: 1.2;
  padding-top: 0.15em;
  color: #fff;
`;

// Label follows the figure on screen but comes first in the DOM, so the
// term precedes its definition for assistive tech.
export const StatLabel = styled.dt`
  order: 2;
  margin-top: 14px;
  font-family: ui-monospace, "JetBrains Mono", Menlo, monospace;
  font-size: clamp(10.5px, 0.9vw, 16px);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
`;
