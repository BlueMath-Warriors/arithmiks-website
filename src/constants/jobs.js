/**
 * Display helpers for the Careers flow (/careers, /careers/jobs,
 * /careers/jobs/:slug). The roles themselves are published in Contentful and
 * loaded on the server (see src/server/jobs); every consumer receives them as
 * `Job` objects.
 *
 * @typedef {object} Job
 * @property {string} slug
 * @property {string} title
 * @property {string} department
 * @property {string} location
 * @property {string} employmentType
 * @property {string} summary
 * @property {string} datePosted ISO date, "YYYY-MM-DD".
 * @property {string} aboutUs
 * @property {{ industry: string, salary: string, workExperience: string,
 *   stateProvince: string, country: string, zipCode: string }} jobInfo
 * @property {string[]} description One entry per paragraph.
 * @property {string[]} requirements One entry per paragraph.
 */

/** Shown on a job whose editor left the "About us" field empty. */
export const DEFAULT_ABOUT_US =
  "Arithmiks is an AI-first software engineering studio in Lahore. We combine AI and custom software development to turn ideas into smart, scalable products, working across FinTech, SaaS, ConTech and e-commerce for clients worldwide.";

const uniqueValues = (jobs, field) => [...new Set(jobs.map((job) => job[field]))];

/** Feeds the "All teams" filter from the roles that actually exist. */
export const getDepartmentOptions = (jobs) => uniqueValues(jobs, "department");

/** Feeds the "All locations" filter from the roles that actually exist. */
export const getLocationOptions = (jobs) => uniqueValues(jobs, "location");

/** "06/22/2026", matching the Job Detail design's "Posted on {date}" format. */
export const formatPostedDate = (isoDate) => {
  const [year, month, day] = isoDate.split("-");
  return `${month}/${day}/${year}`;
};

/**
 * The design itself is inconsistent about this: role tags/cards read
 * "Full-time" (hyphenated), but the Job Detail hero meta line and its Job
 * Information panel both read "Full time" (space). Reproduced faithfully —
 * `employmentType` stays hyphenated as the one stored value (matching the
 * tags, which appear far more often), this only reformats it for the two
 * spots that render it differently.
 */
export const formatEmploymentTypeForJobDetail = (employmentType) => employmentType.replace("-", " ");
