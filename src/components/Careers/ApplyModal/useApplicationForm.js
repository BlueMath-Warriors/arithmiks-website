import { useRef, useState } from "react";
import { track } from "../../../utils/analytics";
import { DEFAULT_COUNTRY_ISO, DIAL_CODES } from "../../Landing/Contact-Us/Booking-Flow/constants";
import { HR_EMAIL, MAX_LINKS } from "./applicationFields";
import { SUBMIT_RESULT, submitApplication } from "./submitApplication";
import { formatPhone, validateApplication, validateResume } from "./validation";

// Inlined by Gatsby at build time: a public URL, never a secret.
const ABACUS_API_URL = process.env.GATSBY_ABACUS_API_URL;

const RATE_LIMITED_MESSAGE = "Too many applications from this connection. Please try again later.";
const SUBMIT_FAILED_MESSAGE = `We couldn’t send your application. Please try again in a few minutes, or email it to ${HR_EMAIL}.`;
const INITIAL_VALUES = { fullName: "", email: "", phoneNumber: "", coverLetter: "", nickname: "" };
// Our input names differ from Abacus's field names, which key the error map.
const ERROR_KEY_BY_FIELD = {
  fullName: "full_name",
  email: "email",
  phoneNumber: "phone",
  coverLetter: "cover_letter",
};
// Abacus fields that have no input of their own in the form.
const FORM_LEVEL_FIELDS = ["job_title"];

const dialCodeFor = (isoCode) => DIAL_CODES.find(([iso]) => iso === isoCode)[1];

let nextLinkId = 0;
const newLink = () => ({ id: (nextLinkId += 1), value: "" });

const trackFailure = (job, errorType, fields = []) =>
  track("job_application_error", { job_title: job.title, error_type: errorType, fields: fields.join(",") });

/**
 * State and submit logic of the job application form.
 *
 * @param {{ job: { title: string }, onSuccess: () => void }} options
 */
export const useApplicationForm = ({ job, onSuccess }) => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [countryIso, setCountryIso] = useState(DEFAULT_COUNTRY_ISO);
  const [links, setLinks] = useState(() => [newLink()]);
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  // Bumped on each rejected submit so the form moves focus to the first invalid
  // field then, but not when a message clears as the candidate types.
  const [errorFocusToken, setErrorFocusToken] = useState(0);
  // State lags a render behind, so a fast double-click would still pass `submitting`.
  const inFlight = useRef(false);

  const clearError = (field) =>
    setErrors((current) => {
      if (!(field in current)) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });

  const setField = (field, value) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (ERROR_KEY_BY_FIELD[field]) clearError(ERROR_KEY_BY_FIELD[field]);
  };

  const setLink = (id, value) => {
    setLinks((current) => current.map((link) => (link.id === id ? { ...link, value } : link)));
    clearError("links");
  };

  const addLink = () => setLinks((current) => (current.length < MAX_LINKS ? [...current, newLink()] : current));

  const removeLink = (id) => {
    setLinks((current) => (current.length > 1 ? current.filter((link) => link.id !== id) : [newLink()]));
    clearError("links");
  };

  const pickResume = (file) => {
    const problem = validateResume(file);
    if (problem) {
      setResume(null);
      setErrors((current) => ({ ...current, resume: problem }));
      return;
    }
    setResume(file);
    clearError("resume");
  };

  const clearResume = () => {
    setResume(null);
    clearError("resume");
  };

  const reset = () => {
    setValues(INITIAL_VALUES);
    setCountryIso(DEFAULT_COUNTRY_ISO);
    setLinks([newLink()]);
    setResume(null);
    setErrors({});
    setFormError("");
  };

  const applyServerFailure = (result) => {
    if (result.status === SUBMIT_RESULT.INVALID) {
      const formLevel = FORM_LEVEL_FIELDS.map((field) => result.fields[field]).filter(Boolean);
      setErrors(result.fields);
      setFormError(formLevel.join(" "));
      setErrorFocusToken((token) => token + 1);
      trackFailure(job, "server_invalid", Object.keys(result.fields));
      return;
    }
    if (result.status === SUBMIT_RESULT.RATE_LIMITED) {
      setFormError(RATE_LIMITED_MESSAGE);
      trackFailure(job, "rate_limited");
      return;
    }
    // A refused origin is a setup problem for the developers, not something a candidate can fix.
    setFormError(SUBMIT_FAILED_MESSAGE);
    trackFailure(job, result.status === SUBMIT_RESULT.ORIGIN_NOT_ALLOWED ? "origin_not_allowed" : "failed");
  };

  const submit = async () => {
    if (inFlight.current) return;

    const phone = formatPhone(dialCodeFor(countryIso), values.phoneNumber);
    const linkValues = links.map((link) => link.value.trim()).filter(Boolean);
    const found = validateApplication({ ...values, phone, links: linkValues }, resume);
    setErrors(found);
    setFormError("");
    if (Object.keys(found).length > 0) {
      trackFailure(job, "validation", Object.keys(found));
      setErrorFocusToken((token) => token + 1);
      return;
    }

    inFlight.current = true;
    setSubmitting(true);
    const result = await submitApplication({
      apiUrl: ABACUS_API_URL,
      jobTitle: job.title,
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      phone,
      resume,
      coverLetter: values.coverLetter.trim(),
      links: linkValues,
      nickname: values.nickname,
    });
    inFlight.current = false;
    setSubmitting(false);

    if (result.status === SUBMIT_RESULT.SUCCESS) {
      // Never the candidate's details: GA's terms forbid PII.
      track("job_application_submit", {
        job_title: job.title,
        has_cover_letter: values.coverLetter.trim() !== "",
        link_count: linkValues.length,
      });
      reset();
      onSuccess();
      return;
    }
    applyServerFailure(result);
  };

  return {
    values,
    countryIso,
    links,
    resume,
    errors,
    formError,
    submitting,
    errorFocusToken,
    setField,
    setCountryIso,
    setLink,
    addLink,
    removeLink,
    pickResume,
    clearResume,
    submit,
  };
};
