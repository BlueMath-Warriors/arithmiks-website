import React from "react";
import BookingStep from "./BookingStep";
import Step1Form from "./Step1Form";

/**
 * The contact card's white panel content: the "describe your idea" form, then
 * the call-time picker once it's submitted.
 *
 * @param {{ form: ReturnType<typeof import("./useBookingForm").useBookingForm>,
 *   headingAs?: "h1" | "h2", idPrefix?: string }} props
 *   idPrefix: keeps element ids unique when the form is on the page twice
 *   (the inline card and the booking sidebar).
 */
const BookingPanel = ({ form, headingAs = "h2", idPrefix = "contact" }) => {
  if (form.step === 2) {
    const name = form.values.name.trim();
    const detailsSummary = `${[name, form.values.email.trim(), form.values.company.trim()]
      .filter(Boolean)
      .join("  ·  ")} — we have your details.`;
    return (
      <BookingStep
        firstName={name.split(" ")[0]}
        name={name}
        email={form.values.email.trim()}
        detailsSummary={detailsSummary}
        onBack={() => form.setStep(1)}
      />
    );
  }

  return (
    <Step1Form
      headingAs={headingAs}
      idPrefix={idPrefix}
      values={form.values}
      onChange={form.setField}
      countryIso={form.countryIso}
      onCountryChange={form.setCountryIso}
      file={form.file}
      fileError={form.fileError}
      onPickFile={form.pickFile}
      onClearFile={form.clearFile}
      errors={form.errors}
      submitError={form.submitError}
      submitting={form.submitting}
      onSubmit={form.submit}
    />
  );
};

export default BookingPanel;
