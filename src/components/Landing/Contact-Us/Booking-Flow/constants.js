export { DIAL_CODES } from "./dialCodes";

export const DEFAULT_COUNTRY_ISO = "PK";

export const ROLE_OPTIONS = [
  "Founder / CEO",
  "CTO / Tech lead",
  "Product manager",
  "Operations",
  "Other",
];

export const ATTACHMENT_EXTENSIONS = ["pdf", "doc", "docx", "ppt", "pptx"];
export const ATTACHMENT_MAX_BYTES = 10 * 1024 * 1024;
export const MIN_BRIEF_LENGTH = 12;

export const NEXT_UP = [
  "We read your brief before the call — no repeating yourself.",
  "A 30-minute conversation about feasibility, not a sales pitch.",
  "You leave with an honest answer on scope and sequence.",
];

export const TESTIMONIAL_INTERVAL_MS = 7000;

export const WEEKDAY_INITIALS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
export const WEEKDAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const TIME_SLOTS = [
  "9:00am",
  "9:30am",
  "10:00am",
  "11:00am",
  "1:00pm",
  "2:00pm",
  "3:30pm",
  "4:00pm",
];
// No browsing into the past, and a quarter ahead is plenty.
export const MAX_MONTHS_AHEAD = 3;
