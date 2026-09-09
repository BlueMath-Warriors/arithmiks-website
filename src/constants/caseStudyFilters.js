import { caseStudies } from "../components/Landing/Case-Study/caseStudies";

/**
 * The Industry and Service filter options shown on /case-studies.
 *
 * Derived from the case-study data rather than hardcoded, so adding a case
 * study with a new industry or service can never leave it unreachable by the
 * filters.
 */
const uniqueSorted = (values) =>
  [...new Set(values)].sort((a, b) => a.localeCompare(b));

export const CASE_STUDY_INDUSTRIES = uniqueSorted(
  caseStudies.map((study) => study.industry).filter(Boolean)
);

export const CASE_STUDY_SERVICES = uniqueSorted(
  caseStudies.flatMap((study) => study.services || [])
);
