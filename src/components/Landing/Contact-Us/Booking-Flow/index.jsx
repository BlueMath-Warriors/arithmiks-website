import React, { useState } from "react";
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
  BadgeRow,
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
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "This field is required";
    if (!values.email.trim()) next.email = "This field is required";
    if (!values.service) next.service = "This field is required";
    if (!values.brief.trim()) next.brief = "This field is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

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
      formData.append("phone_number", values.phone);
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
                    <PhoneInput
                      country="pk"
                      inputProps={{ placeholder: "Phone", "aria-label": "Phone number" }}
                      countryCodeEditable
                      enableSearch
                      value={values.phone}
                      onChange={(phone) => setValues((v) => ({ ...v, phone }))}
                    />
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
                  <SubmitButton type="submit" disabled={submitting}>
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
            </ContactBlock>
          </Aside>
        </Grid>
      </Shell>
    </Section>
  );
};

export default BookingFlow;
