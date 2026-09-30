import {
  ATTACHMENT_EXTENSIONS,
  ATTACHMENT_MAX_BYTES,
  MIN_BRIEF_LENGTH,
} from "./constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MEGABYTE = 1024 * 1024;

/** @returns {{ name?: string; email?: string; brief?: string }} messages keyed by field; empty when valid */
export const validateContact = ({ name, email, brief }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Please tell us your name.";
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = "Enter a valid work email address.";
  if (brief.trim().length < MIN_BRIEF_LENGTH) {
    errors.brief = "A sentence or two about what you are building.";
  }
  return errors;
};

export const fileExtension = (file) => (file.name.split(".").pop() || "").toLowerCase();

/** @returns {string} an error message, or "" when the file is acceptable */
export const validateAttachment = (file) => {
  if (!ATTACHMENT_EXTENSIONS.includes(fileExtension(file))) {
    return "That file type isn’t supported. Use PDF, DOC, DOCX or PPT.";
  }
  if (file.size > ATTACHMENT_MAX_BYTES) {
    return `That file is over ${ATTACHMENT_MAX_BYTES / MEGABYTE} MB. Try a smaller export or a link in the brief.`;
  }
  return "";
};
