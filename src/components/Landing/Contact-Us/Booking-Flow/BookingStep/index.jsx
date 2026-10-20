import React, { useState } from "react";
import { NEXT_UP, TIME_SLOTS, WEEKDAY_INITIALS } from "../constants";
import useCalendar from "./useCalendar";
import {
  StepWrap,
  Heading,
  BackButton,
  Scheduler,
  CalendarColumn,
  MeetingHeader,
  MeetingTitle,
  MeetingMeta,
  DetailsLine,
  MonthRow,
  MonthLabel,
  MonthButtons,
  MonthButton,
  WeekdayRow,
  Weekday,
  DayGrid,
  DayButton,
  ClosedDay,
  SlotsColumn,
  Hint,
  SlotList,
  SlotDate,
  Slots,
  SlotButton,
  ConfirmBar,
  ConfirmTitle,
  ConfirmText,
  ConfirmButton,
  Booked,
  BookedIcon,
  BookedTitle,
  BookedText,
  BookedCard,
  BookedRow,
  RowIcon,
  When,
  Meeting,
  NextBlock,
  NextLabel,
  NextList,
  NextItem,
} from "./index.styled";

const SUCCESS_GREEN = "#12B76A";
const BRAND_BLUE = "#1355FF";

const Icon = ({ size = 16, stroke = "currentColor", strokeWidth = 1.8, viewBox = "0 0 20 20", children }) => (
  <svg
    viewBox={viewBox}
    width={size}
    height={size}
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const CheckIcon = ({ size, strokeWidth }) => (
  <Icon size={size} stroke={SUCCESS_GREEN} strokeWidth={strokeWidth}>
    <path d="m4 10.4 4 4L16 6" />
  </Icon>
);

/**
 * "Pick a time" step. The calendar is a front-end placeholder until a booking
 * provider is connected: it keeps the chosen day and slot in memory only.
 *
 * @param {{ firstName: string; detailsSummary: string; onBack: () => void }} props
 */
const BookingStep = ({ firstName, detailsSummary, onBack }) => {
  const { month, day, slot, shiftMonth, pickDay, pickSlot } = useCalendar();
  const [isBooked, setIsBooked] = useState(false);

  if (isBooked) {
    return (
      <StepWrap>
        <Booked>
          <BookedIcon>
            <CheckIcon size={24} strokeWidth={2.2} />
          </BookedIcon>
          <BookedTitle>You&apos;re booked{firstName ? `, ${firstName}` : ""}</BookedTitle>
          <BookedText>Invite sent to your inbox.</BookedText>
          <BookedCard>
            <BookedRow $divided>
              <RowIcon>
                <Icon size={17} stroke={BRAND_BLUE}>
                  <rect x="3" y="4.5" width="14" height="12.5" rx="2.2" />
                  <path d="M3 8.5h14M7 2.8v3.4M13 2.8v3.4" />
                </Icon>
              </RowIcon>
              <When>{`${day} · ${slot}`}</When>
            </BookedRow>
            <BookedRow>
              <RowIcon>
                <Icon size={17} stroke={BRAND_BLUE}>
                  <rect x="2.5" y="5" width="10.5" height="10" rx="2" />
                  <path d="m13 8.6 4.5-2.6v8l-4.5-2.6" />
                </Icon>
              </RowIcon>
              <Meeting>30 min · Google Meet</Meeting>
            </BookedRow>
          </BookedCard>
          <NextBlock>
            <NextLabel>What happens next</NextLabel>
            <NextList>
              {NEXT_UP.map((line) => (
                <NextItem key={line}>
                  <Icon size={15} stroke={SUCCESS_GREEN} strokeWidth={1.9} viewBox="0 0 16 16">
                    <path d="m3 8.4 3.2 3.2L13 4.8" />
                  </Icon>
                  {line}
                </NextItem>
              ))}
            </NextList>
          </NextBlock>
        </Booked>
      </StepWrap>
    );
  }

  return (
    <StepWrap>
      <Heading>Thanks{firstName ? `, ${firstName}` : ""}! Pick a time that works for you.</Heading>
      <BackButton type="button" onClick={onBack}>
        <span aria-hidden="true">←</span> Back to edit
      </BackButton>
      <Scheduler>
        <CalendarColumn>
          <MeetingHeader>
            <MeetingTitle>30 Minute Meeting</MeetingTitle>
            <MeetingMeta>30 min</MeetingMeta>
            <MeetingMeta>Google Meet</MeetingMeta>
          </MeetingHeader>
          <DetailsLine>
            <CheckIcon size={15} strokeWidth={1.9} />
            <span>{detailsSummary}</span>
          </DetailsLine>
          <MonthRow>
            <MonthLabel>{month.label}</MonthLabel>
            <MonthButtons>
              <MonthButton type="button" aria-label="Previous month" onClick={() => shiftMonth(-1)}>
                <Icon size={16}>
                  <path d="M12 4 6 10l6 6" />
                </Icon>
              </MonthButton>
              <MonthButton type="button" aria-label="Next month" onClick={() => shiftMonth(1)}>
                <Icon size={16}>
                  <path d="M8 4l6 6-6 6" />
                </Icon>
              </MonthButton>
            </MonthButtons>
          </MonthRow>
          <WeekdayRow>
            {WEEKDAY_INITIALS.map((initial) => (
              <Weekday key={initial}>{initial}</Weekday>
            ))}
          </WeekdayRow>
          <DayGrid>
            {month.cells.map((cell) =>
              cell.isOpen ? (
                <DayButton
                  key={cell.key}
                  type="button"
                  $selected={cell.id === day}
                  aria-pressed={cell.id === day}
                  onClick={() => pickDay(cell.id)}
                >
                  {cell.label}
                </DayButton>
              ) : (
                <ClosedDay key={cell.key}>{cell.label}</ClosedDay>
              )
            )}
          </DayGrid>
        </CalendarColumn>
        <SlotsColumn>
          {day ? (
            <SlotList>
              <SlotDate>{day}</SlotDate>
              <Slots>
                {TIME_SLOTS.map((time) => (
                  <SlotButton
                    key={time}
                    type="button"
                    $selected={time === slot}
                    aria-pressed={time === slot}
                    onClick={() => pickSlot(time)}
                  >
                    {time}
                  </SlotButton>
                ))}
              </Slots>
            </SlotList>
          ) : (
            <Hint>
              <svg viewBox="0 0 20 20" width="20" height="20" fill="none" stroke="#C2C7D4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2.8" y="4.2" width="14.4" height="13" rx="2.4" />
                <path d="M2.8 8.2h14.4M7 2.8v2.8M13 2.8v2.8" />
              </svg>
              Pick a day to see the times available.
            </Hint>
          )}
        </SlotsColumn>
        {day && slot && (
          <ConfirmBar>
            <ConfirmTitle>
              <CheckIcon size={18} strokeWidth={2} />
              <span>{`${day} at ${slot}`}</span>
            </ConfirmTitle>
            <ConfirmText>Confirm and we&apos;ll send a calendar invite with the meeting link.</ConfirmText>
            <ConfirmButton type="button" onClick={() => setIsBooked(true)}>
              Confirm booking <span aria-hidden="true">→</span>
            </ConfirmButton>
          </ConfirmBar>
        )}
      </Scheduler>
    </StepWrap>
  );
};

export default BookingStep;
