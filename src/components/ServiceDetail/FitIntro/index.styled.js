import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px clamp(40px, 5vw, 72px);
  margin-bottom: clamp(34px, 4vw, 52px);
`;

export const TitleColumn = styled.div`
  flex: 1 1 380px;
  min-width: 0;
  max-width: 760px;
`;

export const IntroColumn = styled.div`
  flex: 1 1 420px;
  min-width: 0;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  line-height: 1.7;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const IntroLead = styled.p`
  margin: 0;
  font-size: clamp(17px, 1.5vw, 20px);
  font-weight: 550;
  letter-spacing: -0.012em;
  line-height: 1.45;
  color: ${colors.text};
`;

export const IntroBody = styled.p`
  margin: 0;
  color: ${colors.textMuted};
`;
