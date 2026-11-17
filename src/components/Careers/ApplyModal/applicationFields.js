// Limits mirror what Abacus enforces on POST /api/public/job-applications, so
// the form can reject bad input before the request. Abacus stays the authority:
// its 422 messages are shown too.

export const FULL_NAME_MAX_LENGTH = 200;
export const COVER_LETTER_MAX_LENGTH = 5000;
export const LINK_MAX_LENGTH = 500;
export const MAX_LINKS = 5;

export const PHONE_MIN_LENGTH = 7;
export const PHONE_MAX_LENGTH = 20;
export const PHONE_MIN_DIGITS = 7;
export const PHONE_ALLOWED_PATTERN = /^[0-9+\-().\s]+$/;

export const LINK_PATTERN = /^https?:\/\//i;

const MEGABYTE = 1024 * 1024;
export const RESUME_EXTENSIONS = ["pdf", "doc", "docx"];
export const RESUME_MAX_MEGABYTES = 5;
export const RESUME_MAX_BYTES = RESUME_MAX_MEGABYTES * MEGABYTE;

export const APPLICATIONS_PATH = "/api/public/job-applications";

// Where a candidate is sent when the form cannot deliver their application.
export const HR_EMAIL = "hr@arithmiks.com";
