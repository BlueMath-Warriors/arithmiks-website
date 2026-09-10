import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

export const Section = styled.section`
  position: relative;
  padding: clamp(120px, 13vh, 168px) 0 clamp(64px, 5.9vw, 109px);
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
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${colors.textFaint};
  margin-bottom: 14px;
`;

export const Heading = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 12px;
  font-size: clamp(24px, 2.2vw, 34px);
  font-weight: 750;
  letter-spacing: -0.018em;
  line-height: 1.25;
`;

export const Count = styled.span`
  font-family: ui-monospace, Menlo, monospace;
  font-size: clamp(14px, 1.2vw, 17px);
  font-weight: 500;
  letter-spacing: 0;
  color: ${colors.textFaint};
`;

export const SearchWrap = styled.div`
  margin-top: clamp(20px, 2.4vw, 28px);
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: clamp(26px, 2.8vw, 38px);
  border-top: 1px solid ${colors.border};
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 44px 0 20px;
  max-width: 52ch;
`;

export const EmptyTitle = styled.span`
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.018em;
`;

export const EmptyText = styled.span`
  font-size: 15.5px;
  line-height: 1.65;
  color: ${colors.textMuted};
`;

export const EmptyClearButton = styled.button`
  align-self: flex-start;
  margin-top: 6px;
  padding: 11px 22px;
  font-size: 14.5px;
  font-weight: 600;
  color: ${colors.primary};
  background: transparent;
  border: 1.5px solid ${colors.primary};
  border-radius: 100px;
  cursor: pointer;
  transition: background 0.25s, color 0.25s;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;
