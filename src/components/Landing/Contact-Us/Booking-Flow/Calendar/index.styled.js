import styled from "styled-components";
import { colors } from "../../../../../styles/tokens";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: clamp(17px, 1.51vw, 22.5px);
    font-weight: 750;
    letter-spacing: -0.02em;
    line-height: 1.3;

    span {
      color: ${colors.primary};
    }
  }

  > button {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-top: 12px;
    align-self: flex-start;
    font-size: 14px;
    font-weight: 550;
    color: ${colors.primary};
    background: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
  }
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 20px;
  padding: 16px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  background: #fafbfe;

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  span:first-child {
    font-size: 11.5px;
    color: ${colors.textFaint};
  }
  span:last-child {
    font-size: 13.5px;
    font-weight: 500;
    color: ${colors.text};
    word-break: break-word;
  }
`;

export const MonthHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
`;

export const MonthLabel = styled.span`
  font-size: 13.5px;
  font-weight: 650;
  letter-spacing: -0.01em;
  white-space: nowrap;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 6px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 7px;
    background: #fff;
    border: 1px solid ${colors.border};
    color: ${colors.primary};
    cursor: pointer;
    font-size: 15px;
    line-height: 1;

    &:hover:not(:disabled) {
      background: #eaf0ff;
    }
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;

export const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 4px;
  margin-top: 16px;

  span {
    text-align: center;
    font-size: 10px;
    font-weight: 650;
    text-transform: uppercase;
    color: ${colors.textFaint};
  }
`;

export const DayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 4px;
  margin-top: 8px;
`;

export const DayCell = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 8px;
  border: 0;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  ${(p) =>
    p.disabled
      ? `background:transparent; color:#C2C7D4; font-weight:450; cursor:default;`
      : p.$selected
        ? `background:${colors.primary}; color:#fff;`
        : `background:#EAF0FF; color:${colors.primary};`}

  &:hover:not(:disabled) {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const SlotPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${colors.border};

  > span:first-child {
    font-size: 12.5px;
    font-weight: 650;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${colors.textFaint};
  }
`;

export const SlotButton = styled.button`
  padding: 9px 6px;
  border-radius: 8px;
  background: ${(p) => (p.$selected ? colors.primary : "#fff")};
  color: ${(p) => (p.$selected ? "#fff" : colors.primary)};
  border: 1px solid #c9d6ff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 6px;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const ConfirmBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 16px;
  padding: 16px 20px;
  border-top: 1px solid ${colors.border};
  background: #eaf0ff;
  border-radius: 0 0 12px 12px;

  > span:first-child {
    font-size: clamp(14.5px, 0.93vw, 15.5px);
    font-weight: 650;
    color: #0b3ad1;
  }
  p {
    font-size: 13.5px;
    line-height: 1.6;
    color: ${colors.textMuted};
  }
`;

export const ConfirmButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  background: ${colors.primary};
  color: #fff;
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  font-weight: 600;
  padding: 12px 26px;
  white-space: nowrap;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.primaryHover};
  }
`;

export const DoneState = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 30px 24px;
  border: 1px solid #c9d6ff;
  border-radius: 16px;
  background: #fafbfe;
  text-align: center;

  h3 {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }
  p {
    font-size: clamp(15px, 0.96vw, 16.5px);
    line-height: 1.6;
    color: ${colors.textMuted};
    max-width: 44ch;
  }
`;
