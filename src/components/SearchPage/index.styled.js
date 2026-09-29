import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../styles/tokens";

export const Section = styled.section`
  min-height: 70vh;
  padding: clamp(110px, 12vw, 160px) 0 clamp(56px, 6vw, 96px);
  background: #fff;
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Eyebrow = styled.div`
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11px;
  font-weight: 650;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.textFaint};
  margin-bottom: 14px;
`;

export const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
  font-size: clamp(26px, 2.4vw, 36px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin-bottom: 8px;
`;

export const Count = styled.span`
  font-family: ui-monospace, Menlo, monospace;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  color: ${colors.primary};
`;

export const Results = styled.div`
  margin-top: 8px;
`;

export const Hint = styled.p`
  padding: 24px 0;
  font-size: 15.5px;
  line-height: 1.6;
  color: ${colors.textMuted};
`;

export const FieldBox = styled.div`
  max-width: 780px;
`;
