import React, { useEffect, useState } from "react";
import { VOICES } from "../../../../../constants/voices";
import { prefersReducedMotion } from "../../../../../utils/animations";
import { TESTIMONIAL_INTERVAL_MS } from "../constants";
import {
  Testimonial,
  QuoteMark,
  Stack,
  Slide,
  Quote,
  Author,
  AuthorText,
  AuthorName,
  AuthorRole,
} from "./index.styled";

// Some roles already name the company ("GoAgents Founder & CEO"); don't repeat it.
const authorLine = ({ companyName, role }) =>
  role.toLowerCase().includes(companyName.toLowerCase()) ? role : `${companyName} ${role}`;

/** Client quotes that cross-fade every few seconds; static under reduced motion. */
const TestimonialRotator = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const timer = setTimeout(
      () => setActive((index) => (index + 1) % VOICES.length),
      TESTIMONIAL_INTERVAL_MS
    );
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <Testimonial aria-roledescription="carousel" aria-label="Client testimonials">
      <QuoteMark viewBox="0 0 31 24" width="32" height="25" aria-hidden="true" shapeRendering="geometricPrecision">
        <defs>
          <linearGradient id="contact-quote-gradient" x1="0" y1="0" x2="31" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F3D6FF" />
          </linearGradient>
        </defs>
        <path
          fill="url(#contact-quote-gradient)"
          d="M6.5 24C2.9 24 0 21.1 0 17.5 0 10.3 3.9 4.2 10.6.6c.9-.5 2 0 2.3.9.3.8-.1 1.7-.8 2.1C8.4 5.8 6.2 8.6 5.5 11.1c.3 0 .7-.1 1-.1 3.6 0 6.5 2.9 6.5 6.5S10.1 24 6.5 24Z"
        />
        <path
          fill="url(#contact-quote-gradient)"
          transform="translate(18 0)"
          d="M6.5 24C2.9 24 0 21.1 0 17.5 0 10.3 3.9 4.2 10.6.6c.9-.5 2 0 2.3.9.3.8-.1 1.7-.8 2.1C8.4 5.8 6.2 8.6 5.5 11.1c.3 0 .7-.1 1-.1 3.6 0 6.5 2.9 6.5 6.5S10.1 24 6.5 24Z"
        />
      </QuoteMark>
      <Stack aria-live="polite">
        {VOICES.map((voice, index) => (
          <Slide key={voice.slug} $active={index === active} aria-hidden={index !== active}>
            <Quote>{voice.quote}</Quote>
            <Author>
              <img src={voice.avatar} alt="" loading="lazy" />
              <AuthorText>
                <AuthorName>{voice.name}</AuthorName>
                <AuthorRole>{authorLine(voice)}</AuthorRole>
              </AuthorText>
            </Author>
          </Slide>
        ))}
      </Stack>
    </Testimonial>
  );
};

export default TestimonialRotator;
