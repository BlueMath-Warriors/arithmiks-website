import { useCallback, useMemo, useState } from "react";
import { MAX_MONTHS_AHEAD, MONTH_NAMES, WEEKDAY_NAMES } from "../constants";

const MONDAY_FIRST_OFFSET = 6;
const SATURDAY = 6;
const SUNDAY = 0;

// A month grid starting on Monday. Weekends and past days are closed; leading
// blanks are inert cells so day 1 lands in the right column.
const buildMonth = (monthOffset) => {
  const first = new Date();
  first.setDate(1);
  first.setMonth(first.getMonth() + monthOffset);
  const year = first.getFullYear();
  const month = first.getMonth();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const leadingBlanks = (new Date(year, month, 1).getDay() + MONDAY_FIRST_OFFSET) % 7;
  const lastDay = new Date(year, month + 1, 0).getDate();
  const cells = Array.from({ length: leadingBlanks }, (_, index) => ({
    key: `blank-${index}`,
    label: "",
    isOpen: false,
  }));

  for (let dayOfMonth = 1; dayOfMonth <= lastDay; dayOfMonth += 1) {
    const date = new Date(year, month, dayOfMonth);
    const weekday = date.getDay();
    cells.push({
      key: `day-${dayOfMonth}`,
      label: String(dayOfMonth),
      isOpen: date >= today && weekday !== SUNDAY && weekday !== SATURDAY,
      id: `${WEEKDAY_NAMES[(weekday + MONDAY_FIRST_OFFSET) % 7]}, ${MONTH_NAMES[month].slice(0, 3)} ${dayOfMonth}`,
    });
  }
  return { label: `${MONTH_NAMES[month].slice(0, 3)} ${year}`, cells };
};

/** Month browsing plus the picked day and time for the booking panel. */
export const useCalendar = () => {
  const [monthOffset, setMonthOffset] = useState(0);
  const [day, setDay] = useState(null);
  const [slot, setSlot] = useState(null);
  const month = useMemo(() => buildMonth(monthOffset), [monthOffset]);

  const shiftMonth = useCallback(
    (direction) => {
      const next = monthOffset + direction;
      if (next < 0 || next > MAX_MONTHS_AHEAD) return;
      setMonthOffset(next);
      setDay(null);
      setSlot(null);
    },
    [monthOffset]
  );

  const pickDay = useCallback((id) => {
    setDay(id);
    setSlot(null);
  }, []);

  return { month, day, slot, shiftMonth, pickDay, pickSlot: setSlot };
};

export default useCalendar;
