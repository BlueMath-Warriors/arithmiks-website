import styled from "styled-components";
import { colors } from "../../../../../styles/tokens";

const HAIRLINE = "#e9ecf4";
const SOFT_SURFACE = "#fafbfe";
const CALENDAR_INK = "#c2c7d4";

export const StepWrap = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
  flex-direction: column;
`;

export const Heading = styled.h2`
  font-size: clamp(17px, 1.51vw, 22.5px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: ${colors.text};
`;

export const BackButton = styled.button`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 550;
  white-space: nowrap;
  color: ${colors.primary};
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;

  span {
    color: inherit;
  }
`;

export const Scheduler = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 156px;
  align-content: start;
  margin-top: 14px;
  border: 1px solid ${colors.border};
  border-radius: 16px;
  overflow: hidden;
  background: #fff;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const CalendarColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 20px 20px;
  min-width: 0;
`;

export const MeetingHeader = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${HAIRLINE};
`;

export const MeetingTitle = styled.span`
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  font-weight: 700;
  letter-spacing: -0.015em;
  color: ${colors.text};
`;

export const MeetingMeta = styled.span`
  font-size: 12.5px;
  color: ${colors.textFaint};
`;

export const DetailsLine = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: -4px 0 14px;
  font-size: 12.5px;
  line-height: 1.5;
  color: ${colors.textFaint};
  word-break: break-word;

  svg {
    flex: none;
  }

  span {
    color: inherit;
  }
`;

export const MonthRow = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const MonthLabel = styled.span`
  font-size: 13.5px;
  font-weight: 650;
  letter-spacing: -0.01em;
  white-space: nowrap;
  color: ${colors.text};
`;

export const MonthButtons = styled.span`
  display: flex;
  gap: 6px;
`;

export const MonthButton = styled.button`
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
  transition: background 0.2s ease;

  svg,
  svg * {
    color: inherit;
  }

  &:hover {
    background: #eaf0ff;
  }
`;

export const WeekdayRow = styled.span`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 4px;
  margin-top: 16px;
`;

export const Weekday = styled.span`
  text-align: center;
  font-size: 10px;
  font-weight: 650;
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${colors.textFaint};
  overflow: hidden;
`;

export const DayGrid = styled.span`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 4px;
  margin-top: 8px;
`;

export const DayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 8px;
  background: ${({ $selected }) => ($selected ? colors.primary : "#eaf0ff")};
  border: 0;
  font-size: 13px;
  font-weight: 600;
  color: ${({ $selected }) => ($selected ? "#fff" : colors.primary)};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }

  @media (max-width: 768px) {
    min-height: 44px;
    font-size: 14px;
  }

  @media (max-width: 420px) {
    font-size: 13px;
  }
`;

export const ClosedDay = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: 13px;
  font-weight: 450;
  color: ${CALENDAR_INK};

  @media (max-width: 768px) {
    min-height: 44px;
    font-size: 14px;
  }

  @media (max-width: 420px) {
    font-size: 13px;
  }
`;

export const SlotsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 16px;
  border-left: 1px solid ${colors.border};
  background: ${SOFT_SURFACE};
  min-width: 0;

  @media (max-width: 900px) {
    border-left: 0;
    border-top: 1px solid ${colors.border};
  }
`;

export const Hint = styled.span`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13.5px;
  line-height: 1.55;
  color: ${colors.textFaint};
`;

export const SlotList = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SlotDate = styled.span`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${colors.textFaint};
`;

export const Slots = styled.span`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 6px;
`;

export const SlotButton = styled.button`
  padding: 9px 6px;
  border-radius: 8px;
  background: ${({ $selected }) => ($selected ? colors.primary : "#fff")};
  border: 1px solid #c9d6ff;
  font-size: 13px;
  font-weight: 600;
  color: ${({ $selected }) => ($selected ? "#fff" : colors.primary)};
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const ConfirmBar = styled.span`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 20px;
  border-top: 1px solid ${colors.border};
  background: #eaf0ff;
`;

export const ConfirmTitle = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  font-weight: 650;
  color: ${colors.primaryHover};
`;

export const ConfirmText = styled.span`
  font-size: 13.5px;
  line-height: 1.6;
  color: ${colors.textMuted};
`;

export const ConfirmButton = styled.button`
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  background: ${colors.primary};
  color: #fff;
  font-size: clamp(14.5px, 0.93vw, 15.5px);
  font-weight: 600;
  line-height: 1.2;
  padding: 12px 26px;
  white-space: nowrap;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease;

  span {
    color: inherit;
  }

  &:hover {
    background: ${colors.primaryHover};
  }
`;

export const Booked = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(28px, 3vw, 44px) clamp(20px, 2.4vw, 36px);
  border: 1px solid #dce4f7;
  border-radius: 16px;
  background: ${SOFT_SURFACE};
  text-align: center;
`;

export const BookedIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #e6f6ee;
`;

export const BookedTitle = styled.h3`
  margin-top: 18px;
  font-size: clamp(20px, 1.5vw, 24px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${colors.text};
`;

export const BookedText = styled.p`
  margin-top: 6px;
  font-size: 14.5px;
  line-height: 1.5;
  color: ${colors.textFaint};
`;

export const BookedCard = styled.div`
  width: 100%;
  max-width: 360px;
  margin-top: clamp(20px, 2vw, 28px);
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid ${colors.border};
  border-radius: 14px;
  box-shadow: 0 10px 28px -20px rgba(10, 15, 31, 0.3);
  text-align: left;
`;

export const BookedRow = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  ${({ $divided }) => ($divided ? "border-bottom: 1px solid #eef1f6;" : "")}
`;

export const RowIcon = styled.span`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #eaf0ff;
`;

export const When = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.text};
`;

export const Meeting = styled.span`
  font-size: 14.5px;
  color: ${colors.textMuted};
`;

export const NextBlock = styled.div`
  width: 100%;
  margin-top: clamp(24px, 2.4vw, 34px);
`;

export const NextLabel = styled.div`
  font-size: 11.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8a93a6;
  margin-bottom: 16px;
`;

export const NextList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(12px, 1vw, 16px);
  text-align: center;
`;

export const NextItem = styled.span`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 12px;
  font-size: clamp(14.5px, 0.96vw, 16px);
  line-height: 1.6;
  color: ${colors.textMuted};

  svg {
    flex: none;
    transform: translateY(2px);
  }
`;

