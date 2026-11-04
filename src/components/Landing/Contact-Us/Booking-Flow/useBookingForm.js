import { useRef, useState } from "react";
import { currentPath, track } from "../../../../utils/analytics";
import { DEFAULT_COUNTRY_ISO, DIAL_CODES } from "./constants";
import { validateAttachment, validateContact } from "./validation";

const INITIAL_VALUES = { name: "", company: "", email: "", phone: "", role: "", brief: "" };
// The step-2 panel keeps step 1's height so the card doesn't jump between steps.
const MIN_PINNED_HEIGHT = 320;
const SUBMIT_FAILED_MESSAGE =
  "Something went wrong sending your details. Please try again or email services@arithmiks.com directly.";

// Shared by every form on the page (the inline card and the sidebar), so the
// "started" event still fires once per page load rather than once per form.
let formStartTracked = false;

const dialCodeFor = (isoCode) => DIAL_CODES.find(([iso]) => iso === isoCode)[1];

const buildSubmission = (values, countryIso, file) => {
  const formData = new FormData();
  formData.append("full_name", values.name.trim());
  formData.append("sender_email", values.email.trim());
  formData.append("organization", values.company.trim());
  formData.append("role", values.role);
  formData.append(
    "phone_number",
    values.phone.trim() ? `${dialCodeFor(countryIso)} ${values.phone.trim()}` : "",
  );
  formData.append("message", values.brief.trim());
  if (file) formData.append("attachment", file);
  return formData;
};

/**
 * State and submit logic of the contact card's two steps (describe the idea,
 * then pick a call time), shared by the inline card and the booking sidebar.
 */
export const useBookingForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [countryIso, setCountryIso] = useState(DEFAULT_COUNTRY_ISO);
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [pinnedHeight, setPinnedHeight] = useState(0);
  const panelRef = useRef(null);

  const setField = (field, value) => {
    // Compared with generate_lead it gives the form's drop-off.
    if (!formStartTracked) {
      formStartTracked = true;
      track("contact_form_start", { form_location: currentPath(), first_field: field });
    }
    setValues((current) => ({ ...current, [field]: value }));
  };

  const pickFile = (picked) => {
    const problem = validateAttachment(picked);
    setFileError(problem);
    setFile(problem ? null : picked);
    if (problem) {
      track("contact_form_error", {
        error_type: "attachment_invalid",
        fields: "attachment",
        form_location: currentPath(),
      });
    }
  };

  const clearFile = () => {
    setFile(null);
    setFileError("");
  };

  const submit = async () => {
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      track("contact_form_error", {
        error_type: "validation",
        fields: Object.keys(found).join(","),
        form_location: currentPath(),
      });
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/form-submission", {
        method: "POST",
        body: buildSubmission(values, countryIso, file),
      });
      if (!response.ok) throw new Error("Submission failed");
      // Never the field values themselves: GA's terms forbid PII.
      track("generate_lead", {
        form_location: currentPath(),
        lead_role: values.role,
        has_brief: values.brief.trim() !== "",
        has_attachment: Boolean(file),
        has_phone: values.phone.trim() !== "",
      });
      const height = Math.round(panelRef.current?.getBoundingClientRect().height || 0);
      if (height >= MIN_PINNED_HEIGHT) setPinnedHeight(height);
      setStep(2);
    } catch (error) {
      setSubmitError(SUBMIT_FAILED_MESSAGE);
      track("contact_form_error", {
        error_type: "submit_failed",
        fields: "",
        form_location: currentPath(),
      });
    } finally {
      setSubmitting(false);
    }
  };

  return {
    step,
    values,
    countryIso,
    file,
    fileError,
    errors,
    submitting,
    submitError,
    pinnedHeight,
    panelRef,
    setStep,
    setField,
    setCountryIso,
    pickFile,
    clearFile,
    submit,
  };
};
