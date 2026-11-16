import { EMAIL_PATTERN, fileExtension } from "../../Landing/Contact-Us/Booking-Flow/validation";
import {
  COVER_LETTER_MAX_LENGTH,
  FULL_NAME_MAX_LENGTH,
  LINK_MAX_LENGTH,
  LINK_PATTERN,
  MAX_LINKS,
  PHONE_ALLOWED_PATTERN,
  PHONE_MAX_LENGTH,
  PHONE_MIN_DIGITS,
  PHONE_MIN_LENGTH,
  RESUME_EXTENSIONS,
  RESUME_MAX_BYTES,
  RESUME_MAX_MEGABYTES,
} from "./applicationFields";

const countDigits = (text) => (text.match(/\d/g) || []).length;

/** The phone value Abacus receives: dial code and number, or "" when no number was typed. */
export const formatPhone = (dialCode, number) => {
  const local = number.trim();
  return local ? `${dialCode} ${local}` : "";
};

/** @returns {string} an error message, or "" when the resume is acceptable */
export const validateResume = (file) => {
  if (!file) return "Attach your resume.";
  if (!RESUME_EXTENSIONS.includes(fileExtension(file))) {
    return "That file type isn’t supported. Use PDF, DOC or DOCX.";
  }
  if (file.size === 0) return "That file is empty. Choose your resume again.";
  if (file.size > RESUME_MAX_BYTES) {
    return `That file is over ${RESUME_MAX_MEGABYTES} MB. Try a smaller export.`;
  }
  return "";
};

const validatePhone = (phone) => {
  if (!phone) return "Enter your phone number.";
  if (
    phone.length < PHONE_MIN_LENGTH ||
    phone.length > PHONE_MAX_LENGTH ||
    !PHONE_ALLOWED_PATTERN.test(phone) ||
    countDigits(phone) < PHONE_MIN_DIGITS
  ) {
    return `Enter a valid phone number (at least ${PHONE_MIN_DIGITS} digits).`;
  }
  return "";
};

const validateLinks = (links) => {
  if (links.length > MAX_LINKS) return `Add up to ${MAX_LINKS} links.`;
  if (links.some((link) => !LINK_PATTERN.test(link))) {
    return "Each link must start with http:// or https://.";
  }
  if (links.some((link) => link.length > LINK_MAX_LENGTH)) {
    return `Each link can be up to ${LINK_MAX_LENGTH} characters.`;
  }
  return "";
};

/**
 * Checks an application against Abacus's rules. Keys are Abacus's own field
 * names, so its 422 `fields` map onto the same inputs.
 *
 * @param {{ fullName: string, email: string, phone: string, coverLetter: string, links: string[] }} values
 *   `phone` is the combined value from `formatPhone`; blank link inputs are ignored.
 * @param {{ name: string, size: number } | null} resume
 * @returns {Record<string, string>} messages keyed by field; empty when valid
 */
export const validateApplication = (values, resume) => {
  const errors = {};
  const fullName = values.fullName.trim();

  if (!fullName) errors.full_name = "Please tell us your name.";
  else if (fullName.length > FULL_NAME_MAX_LENGTH) {
    errors.full_name = `Your name can be up to ${FULL_NAME_MAX_LENGTH} characters.`;
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Enter a valid email address.";

  const phoneError = validatePhone(values.phone);
  if (phoneError) errors.phone = phoneError;

  const resumeError = validateResume(resume);
  if (resumeError) errors.resume = resumeError;

  if (values.coverLetter.trim().length > COVER_LETTER_MAX_LENGTH) {
    errors.cover_letter = `Your cover letter can be up to ${COVER_LETTER_MAX_LENGTH} characters.`;
  }

  const linksError = validateLinks(values.links.map((link) => link.trim()).filter(Boolean));
  if (linksError) errors.links = linksError;

  return errors;
};
