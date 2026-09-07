import React, { useMemo, useState } from "react";
import {
  Wrap,
  Summary,
  MonthHeader,
  MonthLabel,
  NavButtons,
  WeekRow,
  DayGrid,
  DayCell,
  SlotPanel,
  SlotButton,
  ConfirmBar,
  ConfirmButton,
  DoneState,
} from "./index.styled";

const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const SLOTS = ["9:00am", "9:30am", "10:00am", "11:00am", "1:00pm", "2:00pm", "3:30pm", "4:00pm"];

/** Monday-first month grid; past days and weekends are unselectable. Pure
 * function so it's easy to reason about/verify independent of React state. */
const buildMonth = (monthOffset) => {
  const base = new Date();
  base.setDate(1);
  base.setMonth(base.getMonth() + monthOffset);
  const year = base.getFullYear();
  const month = base.getMonth();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const leadDays = (new Date(year, month, 1).getDay() + 6) % 7;
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = Array.from({ length: leadDays }, (_, i) => ({ blank: true, key: `blank-${i}` }));
  for (let d = 1; d <= totalDays; d += 1) {
    const date = new Date(year, month, d);
    const weekday = date.getDay();
    const selectable = date >= today && weekday !== 0 && weekday !== 6;
    days.push({ key: `d-${d}`, day: d, date, selectable });
  }
  return { label: `${MONTHS[month].slice(0, 3)} ${year}`, days };
};

// Date/time selection here is local UI state only — no scheduling backend
// exists yet (the source design's own comment: "No live scheduling account
// yet, so step 2 is a working Calendly-style scheduler rendered in-page...
// Swap in the hosted embed once the real event link exists"). The Step 1
// lead data is already sent via the real email endpoint before this screen
// ever shows, so nothing about a real lead is lost here.
const Calendar = ({ name, email, phone, service, brief, onBack }) => {
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const month = useMemo(() => buildMonth(monthOffset), [monthOffset]);

  const pickDay = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const shiftMonth = (dir) => {
    const next = monthOffset + dir;
    if (next < 0 || next > 3) return; // no browsing into the past, capped a quarter ahead
    setMonthOffset(next);
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  if (confirmed) {
    return (
      <DoneState>
        <h3>You&apos;re booked</h3>
        <p>
          {selectedDate?.toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}{" "}
          at {selectedSlot}
        </p>
        <p>A team member will follow up by email to confirm and share the meeting link.</p>
      </DoneState>
    );
  }

  return (
    <Wrap>
      <h2>
        <span>Thanks!</span> Pick a time that works for you.
      </h2>
      <button type="button" onClick={onBack}>
        ← Back to edit
      </button>

      <Summary>
        <div>
          <span>Name</span>
          <span>{name}</span>
        </div>
        <div>
          <span>Email</span>
          <span>{email}</span>
        </div>
        {phone && (
          <div>
            <span>Phone</span>
            <span>{phone}</span>
          </div>
        )}
        <div>
          <span>Service</span>
          <span>{service}</span>
        </div>
        <div>
          <span>Project</span>
          <span>{brief.length > 76 ? `${brief.slice(0, 76)}…` : brief}</span>
        </div>
      </Summary>

      <MonthHeader>
        <MonthLabel>{month.label}</MonthLabel>
        <NavButtons>
          <button
            type="button"
            aria-label="Previous month"
            disabled={monthOffset === 0}
            onClick={() => shiftMonth(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next month"
            disabled={monthOffset === 3}
            onClick={() => shiftMonth(1)}
          >
            ›
          </button>
        </NavButtons>
      </MonthHeader>

      <WeekRow>
        {WEEKDAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </WeekRow>
      <DayGrid>
        {month.days.map((d) =>
          d.blank ? (
            <span key={d.key} />
          ) : (
            <DayCell
              key={d.key}
              type="button"
              disabled={!d.selectable}
              $selected={selectedDate?.getTime() === d.date.getTime()}
              onClick={() => pickDay(d.date)}
            >
              {d.day}
            </DayCell>
          )
        )}
      </DayGrid>

      {selectedDate && (
        <SlotPanel>
          <span>
            {selectedDate.toLocaleDateString(undefined, {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </span>
          <div>
            {SLOTS.map((slot) => (
              <SlotButton
                key={slot}
                type="button"
                $selected={slot === selectedSlot}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </SlotButton>
            ))}
          </div>
        </SlotPanel>
      )}

      {selectedSlot && (
        <ConfirmBar>
          <span>
            {selectedDate.toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}{" "}
            · {selectedSlot}
          </span>
          <p>A team member will follow up by email to confirm this time.</p>
          <ConfirmButton type="button" onClick={() => setConfirmed(true)}>
            Confirm booking
          </ConfirmButton>
        </ConfirmBar>
      )}
    </Wrap>
  );
};

export default Calendar;
