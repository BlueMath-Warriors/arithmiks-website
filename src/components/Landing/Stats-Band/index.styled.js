import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

export const Section = styled.section`
  position: relative;
  padding: clamp(56px, 6.25vw, 122px) 0;
  background: ${colors.dark};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #0b3ad1 0%, #1355ff 55%, #0a2aa0 100%);
    opacity: 0.96;
  }
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
  gap: 28px clamp(32px, 3.97vw, 90.5px);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled.h2`
  font-size: clamp(26px, 3.03vw, 52px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.12;
  color: #fff;
  max-width: 18ch;
`;

export const Description = styled.p`
  font-size: clamp(15px, 1.07vw, 20.5px);
  line-height: 1.62;
  color: rgba(255, 255, 255, 0.88);
`;

export const StatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(18px, 2.13vw, 41px);
  margin-top: clamp(34px, 4.43vw, 73px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StatCell = styled.div`
  min-width: 0;
  padding-left: clamp(16px, 1.78vw, 37px);
  padding-right: clamp(8px, 1.2vw, 20px);
  border-left: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 900px) {
    border-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-left: 0;
    padding-top: 26px;
  }

  > div:first-child {
    display: flex;
    align-items: flex-start;
    gap: 3px;
    color: #fff;
  }
`;

export const StatNumber = styled.span`
  font-size: clamp(40px, 5.02vw, 90.5px);
  font-weight: 750;
  letter-spacing: -0.024em;
  line-height: 1;
  color: #fff;
`;

export const StatSuffix = styled.span`
  color: #fff;
  font-size: clamp(16px, 1.87vw, 35px);
  font-weight: 650;
  line-height: 1.2;
  padding-top: 0.15em;
`;

export const StatLabel = styled.div`
  margin-top: 14px;
  font-family: ui-monospace, "JetBrains Mono", Menlo, monospace;
  font-size: clamp(10.5px, 0.9vw, 16px);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.88);
`;
