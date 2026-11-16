import React, { useEffect, useRef } from "react";
import DialCodeSelect from "../../Landing/Contact-Us/Booking-Flow/DialCodeSelect";
import {
  Form,
  FieldPair,
  TextInput,
  TextArea,
  ErrorMessage,
  PhoneField,
  PhoneInput,
  SubmitButton,
} from "../../Landing/Contact-Us/Booking-Flow/Step1Form/index.styled";
import { COVER_LETTER_MAX_LENGTH, FULL_NAME_MAX_LENGTH } from "./applicationFields";
import FieldError from "./FieldError";
import LinksField from "./LinksField";
import ResumeField from "./ResumeField";
import { Counter, FieldGroup, FieldLabel, Honeypot, OptionalNote } from "./index.styled";

const INVALID_FIELD_SELECTOR = '[aria-invalid="true"],[data-invalid="true"]';

const Required = () => <span aria-hidden="true"> *</span>;

/**
 * The application fields. All state and submit logic come from
 * `useApplicationForm`, so this component only lays out and binds inputs.
 *
 * @param {{ idPrefix: string, form: ReturnType<typeof import("./useApplicationForm").useApplicationForm> }} props
 */
const ApplicationForm = ({ idPrefix, form }) => {
  const formRef = useRef(null);
  const { values, errors, errorFocusToken } = form;

  useEffect(() => {
    if (errorFocusToken === 0) return;
    formRef.current?.querySelector(INVALID_FIELD_SELECTOR)?.focus();
    // Depends on the token alone: `errors` changes as the candidate types and must not move focus.
  }, [errorFocusToken]);

  const id = (field) => `${idPrefix}-${field}`;
  const bind = (field) => ({
    value: values[field],
    onChange: (event) => form.setField(field, event.target.value),
  });

  return (
    <Form
      ref={formRef}
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        form.submit();
      }}
    >
      <FieldPair>
        <FieldGroup>
          <FieldLabel htmlFor={id("fullName")}>
            Full name
            <Required />
          </FieldLabel>
          <TextInput
            id={id("fullName")}
            name="full_name"
            type="text"
            autoComplete="name"
            maxLength={FULL_NAME_MAX_LENGTH}
            aria-required="true"
            aria-describedby={id("fullName-error")}
            aria-invalid={Boolean(errors.full_name)}
            $invalid={Boolean(errors.full_name)}
            {...bind("fullName")}
          />
          <FieldError id={id("fullName-error")} message={errors.full_name} />
        </FieldGroup>
        <FieldGroup>
          <FieldLabel htmlFor={id("email")}>
            Email
            <Required />
          </FieldLabel>
          <TextInput
            id={id("email")}
            name="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-describedby={id("email-error")}
            aria-invalid={Boolean(errors.email)}
            $invalid={Boolean(errors.email)}
            {...bind("email")}
          />
          <FieldError id={id("email-error")} message={errors.email} />
        </FieldGroup>
      </FieldPair>

      <FieldGroup>
        <FieldLabel htmlFor={id("phone")}>
          Phone
          <Required />
        </FieldLabel>
        <PhoneField>
          <DialCodeSelect isoCode={form.countryIso} onChange={form.setCountryIso} />
          <PhoneInput
            id={id("phone")}
            name="phone"
            type="tel"
            autoComplete="tel-national"
            aria-required="true"
            aria-describedby={id("phone-error")}
            aria-invalid={Boolean(errors.phone)}
            {...bind("phoneNumber")}
          />
        </PhoneField>
        <FieldError id={id("phone-error")} message={errors.phone} />
      </FieldGroup>

      <ResumeField
        id={id("resume")}
        file={form.resume}
        error={errors.resume}
        onPick={form.pickResume}
        onClear={form.clearResume}
      />

      <FieldGroup>
        <FieldLabel htmlFor={id("coverLetter")}>
          Cover letter <OptionalNote>(optional)</OptionalNote>
        </FieldLabel>
        <TextArea
          id={id("coverLetter")}
          name="cover_letter"
          rows={5}
          maxLength={COVER_LETTER_MAX_LENGTH}
          aria-describedby={id("coverLetter-error")}
          aria-invalid={Boolean(errors.cover_letter)}
          $invalid={Boolean(errors.cover_letter)}
          {...bind("coverLetter")}
        />
        <Counter $over={values.coverLetter.length > COVER_LETTER_MAX_LENGTH}>
          {values.coverLetter.length} / {COVER_LETTER_MAX_LENGTH}
        </Counter>
        <FieldError id={id("coverLetter-error")} message={errors.cover_letter} />
      </FieldGroup>

      <LinksField
        idPrefix={idPrefix}
        links={form.links}
        error={errors.links}
        onChange={form.setLink}
        onAdd={form.addLink}
        onRemove={form.removeLink}
      />

      <Honeypot aria-hidden="true">
        <label htmlFor={id("nickname")}>Leave this field empty</label>
        <input
          id={id("nickname")}
          name="nickname"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...bind("nickname")}
        />
      </Honeypot>

      {form.formError && <ErrorMessage role="alert">{`⚠ ${form.formError}`}</ErrorMessage>}
      <SubmitButton type="submit" disabled={form.submitting}>
        {form.submitting ? "Sending…" : "Submit application"}
      </SubmitButton>
    </Form>
  );
};

export default ApplicationForm;
