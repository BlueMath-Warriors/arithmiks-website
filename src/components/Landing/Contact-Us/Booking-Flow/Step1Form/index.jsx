import React, { useEffect, useRef } from "react";
import { GradientText } from "../../../../shared/Section/index.styled";
import DialCodeSelect from "../DialCodeSelect";
import AttachField from "./AttachField";
import RoleChips from "./RoleChips";
import {
  Heading,
  Intro,
  Form,
  FieldPair,
  Field,
  TextInput,
  TextArea,
  ErrorMessage,
  PhoneField,
  PhoneInput,
  SubmitButton,
} from "./index.styled";

const FieldError = ({ id, message }) =>
  message ? <ErrorMessage id={id}>{`⚠ ${message}`}</ErrorMessage> : null;

/**
 * "Describe your idea" step: the visitor's details and brief.
 *
 * @param {Object} props
 * @param {"h1" | "h2"} props.headingAs
 * @param {{ name: string; company: string; email: string; phone: string; role: string; brief: string }} props.values
 * @param {(field: string, value: string) => void} props.onChange
 * @param {string} props.countryIso
 * @param {(isoCode: string) => void} props.onCountryChange
 * @param {File | null} props.file
 * @param {string} props.fileError
 * @param {(file: File) => void} props.onPickFile
 * @param {() => void} props.onClearFile
 * @param {Record<string, string>} props.errors
 * @param {string} props.submitError
 * @param {boolean} props.submitting
 * @param {() => void} props.onSubmit
 */
const Step1Form = ({
  headingAs = "h2",
  values,
  onChange,
  countryIso,
  onCountryChange,
  file,
  fileError,
  onPickFile,
  onClearFile,
  errors,
  submitError,
  submitting,
  onSubmit,
}) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (Object.keys(errors).length === 0) return;
    formRef.current?.querySelector('[aria-invalid="true"]')?.focus();
  }, [errors]);

  const bind = (field) => ({
    value: values[field],
    onChange: (event) => onChange(field, event.target.value),
  });

  return (
    <div>
      <Heading as={headingAs} id="contact-h">
        Describe your <GradientText>idea</GradientText>
      </Heading>
      <Intro>
        Tell us what you&apos;re building. We&apos;ll read it before the call, so the 30 minutes go
        on your problem rather than introductions.
      </Intro>
      <Form
        ref={formRef}
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <FieldPair>
          <Field>
            <TextInput
              name="name"
              type="text"
              autoComplete="name"
              aria-label="Full name"
              aria-describedby="contact-error-name"
              aria-invalid={Boolean(errors.name)}
              $invalid={Boolean(errors.name)}
              placeholder="Full name *"
              {...bind("name")}
            />
            <FieldError id="contact-error-name" message={errors.name} />
          </Field>
          <Field>
            <TextInput
              name="company"
              type="text"
              autoComplete="organization"
              aria-label="Company name (optional)"
              placeholder="Company name"
              {...bind("company")}
            />
          </Field>
        </FieldPair>
        <FieldPair>
          <Field>
            <TextInput
              name="email"
              type="email"
              autoComplete="email"
              aria-label="Work email"
              aria-describedby="contact-error-email"
              aria-invalid={Boolean(errors.email)}
              $invalid={Boolean(errors.email)}
              placeholder="Work email *"
              {...bind("email")}
            />
            <FieldError id="contact-error-email" message={errors.email} />
          </Field>
          <PhoneField>
            <DialCodeSelect isoCode={countryIso} onChange={onCountryChange} />
            <PhoneInput
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-label="Phone number (optional)"
              placeholder="Phone"
              {...bind("phone")}
            />
          </PhoneField>
        </FieldPair>
        <RoleChips value={values.role} onChange={(role) => onChange("role", role)} />
        <Field>
          <TextArea
            name="brief"
            rows={4}
            aria-label="What are you building?"
            aria-describedby="contact-error-brief"
            aria-invalid={Boolean(errors.brief)}
            $invalid={Boolean(errors.brief)}
            placeholder="Describe your idea, challenge, or how we can help..."
            {...bind("brief")}
          />
          <FieldError id="contact-error-brief" message={errors.brief} />
        </Field>
        <AttachField file={file} error={fileError} onPick={onPickFile} onClear={onClearFile} />
        {submitError && <ErrorMessage role="alert">{`⚠ ${submitError}`}</ErrorMessage>}
        <SubmitButton type="submit" disabled={submitting}>
          {submitting ? (
            "Sending…"
          ) : (
            <>
              Next: Book a call <span aria-hidden="true">→</span>
            </>
          )}
        </SubmitButton>
      </Form>
    </div>
  );
};

export default Step1Form;
