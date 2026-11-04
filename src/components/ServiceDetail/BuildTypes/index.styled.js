import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { bandPadding } from "../../shared/Band/index.styled";

export const Section = styled.section`
  ${bandPadding}
  background: #fff;
`;

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 90px;
  align-items: center;
`;

export const Intro = styled.div`
  flex: 1 1 320px;
  min-width: 0;
`;

export const Lines = styled.div`
  margin-top: 24px;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: clamp(17px, 1.5vw, 20px);
  line-height: 1.45;
  letter-spacing: -0.01em;
`;

export const Line = styled.p`
  color: ${colors.text};
  font-weight: ${({ $strong }) => ($strong ? 550 : 400)};
`;

export const Types = styled.div`
  flex: 1 1 520px;
  min-width: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 clamp(24px, 2.4vw, 40px);
  border-top: 1px solid ${colors.border};

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const Type = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 24px 24px 24px 0;
  border-bottom: 1px solid ${colors.border};
`;

export const TypeIcon = styled.span`
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #eaf0ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TypeName = styled.span`
  font-size: clamp(16px, 1.35vw, 18.5px);
  font-weight: 550;
  letter-spacing: -0.013em;
  line-height: 1.4;
  color: ${colors.text};
  text-wrap: pretty;
`;

export const Note = styled.p`
  margin-top: 30px;
  font-size: 16px;
  line-height: 1.7;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;
