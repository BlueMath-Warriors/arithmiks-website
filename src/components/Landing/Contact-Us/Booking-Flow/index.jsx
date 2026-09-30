import React, { useRef, useState } from "react";
import { LOGO_MARK_SRC } from "../../../../constants/brand";
import useReveal from "../../../../hooks/useReveal";
import BookingStep from "./BookingStep";
import ContactAside from "./ContactAside";
import Step1Form from "./Step1Form";
import { DEFAULT_COUNTRY_ISO, DIAL_CODES } from "./constants";
import { validateAttachment, validateContact } from "./validation";
import { Section, Shell, Card, Wash, WatermarkMark, Columns, FormPanel } from "./index.styled";

const INITIAL_VALUES = { name: "", company: "", email: "", phone: "", role: "", brief: "" };
// The step-2 panel keeps step 1's height so the card doesn't jump between steps.
const MIN_PINNED_HEIGHT = 320;
const SUBMIT_FAILED_MESSAGE =
  "Something went wrong sending your details. Please try again or email services@arithmiks.com directly.";

const dialCodeFor = (isoCode) => DIAL_CODES.find(([iso]) => iso === isoCode)[1];

const buildSubmission = (values, countryIso, file) => {
  const formData = new FormData();
  formData.append("full_name", values.name.trim());
  formData.append("sender_email", values.email.trim());
  formData.append("organization", values.company.trim());
  formData.append("role", values.role);
  formData.append(
    "phone_number",
    values.phone.trim() ? `${dialCodeFor(countryIso)} ${values.phone.trim()}` : ""
  );
  formData.append("message", values.brief.trim());
  if (file) formData.append("attachment", file);
  return formData;
};

/**
 * The shared contact card: describe the idea, then pick a call time.
 *
 * @param {{ headingAs?: "h1" | "h2" }} props Defaults to "h2" — every page this
 * renders on already has its own page-level <h1> elsewhere, except /contact,
 * which has none of its own and passes "h1" so the built page still has
 * exactly one (see scripts/check-heading-h1-count.mjs).
 */
const BookingFlow = ({ headingAs = "h2" }) => {
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
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  const setField = (field, value) => setValues((current) => ({ ...current, [field]: value }));

  const pickFile = (picked) => {
    const problem = validateAttachment(picked);
    setFileError(problem);
    setFile(problem ? null : picked);
  };

  const clearFile = () => {
    setFile(null);
    setFileError("");
  };

  const handleSubmit = async () => {
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    setSubmitError("");
    try {
      const response = await fetch("/api/form-submission", {
        method: "POST",
        body: buildSubmission(values, countryIso, file),
      });
      if (!response.ok) throw new Error("Submission failed");
      const height = Math.round(panelRef.current?.getBoundingClientRect().height || 0);
      if (height >= MIN_PINNED_HEIGHT) setPinnedHeight(height);
      setStep(2);
    } catch (error) {
      setSubmitError(SUBMIT_FAILED_MESSAGE);
    } finally {
      setSubmitting(false);
    }
  };

  const detailsSummary = `${[values.name.trim(), values.email.trim(), values.company.trim()]
    .filter(Boolean)
    .join("  ·  ")} — we have your brief.`;

  return (
    <Section id="contact" aria-labelledby="contact-h" ref={sectionRef}>
      <Shell>
        <Card data-reveal="">
          <Wash aria-hidden="true" />
          <WatermarkMark src={LOGO_MARK_SRC} alt="" aria-hidden="true" />
          <Columns>
            <FormPanel ref={panelRef} $minHeight={pinnedHeight}>
              {step === 1 ? (
                <Step1Form
                  headingAs={headingAs}
                  values={values}
                  onChange={setField}
                  countryIso={countryIso}
                  onCountryChange={setCountryIso}
                  file={file}
                  fileError={fileError}
                  onPickFile={pickFile}
                  onClearFile={clearFile}
                  errors={errors}
                  submitError={submitError}
                  submitting={submitting}
                  onSubmit={handleSubmit}
                />
              ) : (
                <BookingStep
                  firstName={values.name.trim().split(" ")[0]}
                  detailsSummary={detailsSummary}
                  onBack={() => setStep(1)}
                />
              )}
            </FormPanel>
            <ContactAside />
          </Columns>
        </Card>
      </Shell>
    </Section>
  );
};

export default BookingFlow;
