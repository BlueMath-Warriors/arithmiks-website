import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import Calendar from "./Calendar";
import Input from "./Input";
import {
  Section,
  Shell,
  Grid,
  Card,
  ProgressBar,
  ProgressFill,
  ProgressLabels,
  Step1,
  Heading,
  Intro,
  Form,
  FieldPair,
  ErrorText,
  SubmitButton,
  Aside,
  NextUpList,
  NextUpItem,
  ContactBlock,
  SocialRow,
  SocialLink,
  BadgeRow,
  PhoneField,
  DialCodeLabel,
  DialChevron,
} from "./index.styled";
import upworkRank from "../../../../images/homepage/upwork-rank.png";

const SERVICE_OPTIONS = [
  "AI Engineering & Data",
  "Web App Development",
  "Mobile App Development",
  "Custom Software Development",
  "UI/UX Design",
  "Cloud & DevOps",
  "Product Engineering",
  "Other",
];

const NEXT_UP = [
  "We read your brief before the call — no repeating yourself.",
  "A 30-minute conversation about feasibility, not a sales pitch.",
  "You leave with an honest answer on scope and sequence.",
];

const BookingFlow = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({ name: "", email: "", phone: "", service: "", brief: "" });
  // Seeded to match the PhoneInput's own default country="pk" below. Used
  // both to render DialCodeLabel and to rebuild the full phone number on
  // submit — disableCountryCode (below) strips the dial code out of
  // values.phone itself, not just what's displayed.
  const [dialCode, setDialCode] = useState("92");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const errorTimeoutRef = useRef(null);

  // Field errors only ever get (re)computed on submit, so without this they
  // sit on screen indefinitely even after the user fixes the field —
  // auto-dismissed after 5s instead.
  useEffect(() => {
    return () => clearTimeout(errorTimeoutRef.current);
  }, []);

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "This field is required";
    if (!values.email.trim()) next.email = "This field is required";
    if (!values.service) next.service = "This field is required";
    if (!values.brief.trim()) next.brief = "This field is required";
    setErrors(next);

    clearTimeout(errorTimeoutRef.current);
    if (Object.keys(next).length > 0) {
      errorTimeoutRef.current = setTimeout(() => setErrors({}), 5000);
    }
    return Object.keys(next).length === 0;
  };

  // Same required set as validate() above — phone stays optional.
  const isStep1Complete =
    values.name.trim() && values.email.trim() && values.service && values.brief.trim();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError("");
    try {
      const formData = new FormData();
      formData.append("full_name", values.name);
      formData.append("sender_email", values.email);
      formData.append("category", values.service);
      // disableCountryCode (on PhoneInput below) strips the dial code from
      // both the display AND values.phone itself, not just what's shown —
      // reassembled here so the submitted format matches what the backend
      // always received.
      formData.append("phone_number", values.phone ? `+${dialCode}${values.phone}` : "");
      formData.append("message", values.brief);

      const apiEndpoint = process.env.GATSBY_API_ENDPOINT;
      const response = await fetch(`${apiEndpoint}form-submission`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Submission failed");
      setStep(2);
    } catch (error) {
      setSubmitError(
        "Something went wrong sending your details. Please try again or email services@arithmiks.com directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="contact" aria-labelledby="contact-h">
      <Shell>
        <Grid>
          <Card>
            <ProgressBar>
              <ProgressFill $percent={step === 2 ? 100 : 50} />
            </ProgressBar>
            <ProgressLabels>
              <span>Step {step}/2</span>
              <span>{step === 2 ? "Pick a time" : "Describe your idea"}</span>
            </ProgressLabels>

            {step === 1 ? (
              <Step1>
                <Heading id="contact-h">
                  Describe your <span>idea</span>
                </Heading>
                <Intro>
                  Tell us what you&apos;re building. We&apos;ll read it before the call, so the
                  30 minutes go on your problem rather than introductions.
                </Intro>
                <Form onSubmit={handleSubmit} noValidate>
                  <FieldPair>
                    <Input
                      type="text"
                      label="Full name"
                      placeholder="Full name *"
                      value={values.name}
                      onChange={(v) => setValues((s) => ({ ...s, name: v }))}
                      error={errors.name}
                    />
                    <Input
                      type="email"
                      label="Work email"
                      placeholder="Work email *"
                      value={values.email}
                      onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                      error={errors.email}
                    />
                  </FieldPair>
                  <FieldPair>
                    <PhoneField>
                      <PhoneInput
                        country="pk"
                        inputProps={{ placeholder: "Phone", "aria-label": "Phone number" }}
                        disableCountryCode
                        // Without disableCountryCode, the number typed always
                        // starts after the dial-code prefix the user can see,
                        // so the library's typed-digit country auto-guess only
                        // ever matches on that prefix. With it hidden, the
                        // guess runs against the visible (local-only) digits
                        // instead and can silently swap the selected country
                        // mid-type — e.g. typing 3001234567 matches Greece's
                        // "30" dial code. Disabled since the flag is now only
                        // ever changed deliberately, via the dropdown.
                        disableCountryGuess
                        enableSearch
                        value={values.phone}
                        onChange={(phone, country) => {
                          setValues((v) => ({ ...v, phone }));
                          setDialCode(country.dialCode);
                        }}
                      />
                      <DialCodeLabel aria-hidden="true">+{dialCode}</DialCodeLabel>
                      <DialChevron
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        width="15"
                        height="15"
                        fill="none"
                        stroke="#5C6478"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 6.5 8 10.5l4-4" />
                      </DialChevron>
                    </PhoneField>
                    <Input
                      type="dropdown"
                      label="Service or technology"
                      placeholder="Select a service *"
                      value={values.service}
                      onChange={(v) => setValues((s) => ({ ...s, service: v }))}
                      options={SERVICE_OPTIONS}
                      error={errors.service}
                    />
                  </FieldPair>
                  <Input
                    type="textarea"
                    label="What are you building?"
                    placeholder="Describe your idea, challenge, or how we can help..."
                    value={values.brief}
                    onChange={(v) => setValues((s) => ({ ...s, brief: v }))}
                    error={errors.brief}
                  />
                  {submitError && <ErrorText>{submitError}</ErrorText>}
                  <SubmitButton type="submit" disabled={submitting || !isStep1Complete}>
                    {submitting ? "Sending…" : "Next: Book a call"}
                  </SubmitButton>
                </Form>
              </Step1>
            ) : (
              <Calendar
                name={values.name}
                email={values.email}
                phone={values.phone}
                service={values.service}
                brief={values.brief}
                onBack={() => setStep(1)}
              />
            )}
          </Card>

          <Aside>
            <div>
              <h3>What happens next</h3>
              <NextUpList>
                {NEXT_UP.map((line) => (
                  <NextUpItem key={line}>{line}</NextUpItem>
                ))}
              </NextUpList>
            </div>
            <ContactBlock>
              <BadgeRow>
                <img src="/homepage/upwork-top-rated.svg" alt="Upwork Top Rated Plus" height={86} />
                <img
                  src={upworkRank}
                  alt="UpworkRank — #146 in Web Development, top 0.87%"
                  height={86}
                />
              </BadgeRow>
              <div>
                <span>New business</span>
                <a href="mailto:services@arithmiks.com">services@arithmiks.com</a>
              </div>
              <div>
                <span>Careers</span>
                <a href="mailto:hr@arithmiks.com">hr@arithmiks.com</a>
              </div>
              <div>
                <span>Office</span>
                <span>Lahore, Pakistan</span>
              </div>
              <SocialRow>
                <SocialLink href="https://www.linkedin.com/company/arithmiks/" aria-label="Arithmiks on LinkedIn">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
                  </svg>
                </SocialLink>
                <SocialLink href="https://www.instagram.com/arithmiks/" aria-label="Arithmiks on Instagram">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
                    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
                    <circle cx="12" cy="12" r="4.1" />
                    <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" stroke="none" />
                  </svg>
                </SocialLink>
                <SocialLink href="https://x.com/arithmiks" aria-label="Arithmiks on X">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M17.53 3h3.2l-6.99 7.99L21.6 21h-5.5l-4.3-5.63L6.83 21H3.62l7.27-8.3L2.7 3h5.63l4.02 5.31Zm-1.13 16h1.77L7.24 4.82H5.34Z" />
                  </svg>
                </SocialLink>
              </SocialRow>
            </ContactBlock>
          </Aside>
        </Grid>
      </Shell>
    </Section>
  );
};

export default BookingFlow;
