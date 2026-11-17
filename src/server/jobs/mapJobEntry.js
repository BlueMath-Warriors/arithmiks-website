import { DEFAULT_ABOUT_US } from "../../constants/jobs.js";

export const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;

const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const ISO_DATE_LENGTH = 10;
const LINE_BREAK = /\r?\n/;

// Ids exactly as they exist on the "page - Job" content type in Contentful —
// including the lowercase "p" in `stateprovince` and `zippostalCode`.
const FIELD = Object.freeze({
  slug: "slug",
  title: "title",
  department: "department",
  location: "location",
  employmentType: "employmentType",
  summary: "summary",
  datePosted: "datePosted",
  industry: "industry",
  salary: "salary",
  workExperience: "workExperience",
  stateProvince: "stateprovince",
  country: "country",
  zipCode: "zippostalCode",
  aboutUs: "aboutUs",
  description: "jobDescription",
  requirements: "requirements",
});

const readText = (fields, fieldId) => {
  const value = fields?.[fieldId];
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed === "" ? null : trimmed;
};

const toParagraphs = (text) =>
  (text ?? "")
    .split(LINE_BREAK)
    .map((line) => line.trim())
    .filter(Boolean);

/**
 * Converts a published "page - Job" Delivery API entry into the `Job` shape the
 * Careers UI renders.
 *
 * Never throws: an entry that cannot be shown safely (for example one with a
 * malformed slug) comes back with `job: null` and the reasons, so one bad entry
 * can be skipped without taking the whole careers page down.
 *
 * @param {{ sys?: object, fields?: object }} entry
 * @returns {{ job: import("../../constants/jobs").Job | null, problems: string[] }}
 */
export const mapJobEntry = (entry) => {
  const fields = entry?.fields;
  const problems = [];

  const requiredText = (fieldId) => {
    const value = readText(fields, fieldId);
    if (value === null) problems.push(`"${fieldId}" is missing.`);
    return value;
  };

  const slug = requiredText(FIELD.slug);
  if (slug !== null && !SLUG_PATTERN.test(slug)) {
    problems.push(`"${FIELD.slug}" must be lowercase letters, digits and single hyphens.`);
  }

  const datePosted = readText(fields, FIELD.datePosted)?.slice(0, ISO_DATE_LENGTH) ?? null;
  if (datePosted === null || !ISO_DATE_PATTERN.test(datePosted)) {
    problems.push(`"${FIELD.datePosted}" is missing or not a date.`);
  }

  const title = requiredText(FIELD.title);
  const department = requiredText(FIELD.department);
  const location = requiredText(FIELD.location);
  const employmentType = requiredText(FIELD.employmentType);
  const summary = requiredText(FIELD.summary);
  const industry = requiredText(FIELD.industry);
  const salary = requiredText(FIELD.salary);
  const workExperience = requiredText(FIELD.workExperience);
  const stateProvince = requiredText(FIELD.stateProvince);
  const country = requiredText(FIELD.country);
  const zipCode = requiredText(FIELD.zipCode);

  const description = toParagraphs(readText(fields, FIELD.description));
  if (description.length === 0) problems.push(`"${FIELD.description}" is missing.`);
  const requirements = toParagraphs(readText(fields, FIELD.requirements));
  if (requirements.length === 0) problems.push(`"${FIELD.requirements}" is missing.`);

  if (problems.length > 0) return { job: null, problems };

  return {
    job: {
      slug,
      title,
      department,
      location,
      employmentType,
      summary,
      datePosted,
      aboutUs: readText(fields, FIELD.aboutUs) ?? DEFAULT_ABOUT_US,
      jobInfo: { industry, salary, workExperience, stateProvince, country, zipCode },
      description,
      requirements,
    },
    problems,
  };
};
