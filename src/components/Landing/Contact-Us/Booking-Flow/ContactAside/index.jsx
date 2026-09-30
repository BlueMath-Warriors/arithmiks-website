import React from "react";
import upworkRank from "../../../../../images/homepage/upwork-rank.webp";
import TestimonialRotator from "./TestimonialRotator";
import {
  Aside,
  Info,
  Label,
  Badges,
  Divider,
  Details,
  DetailLink,
  DetailText,
  Socials,
  SocialLink,
} from "./index.styled";

/** Recognition, contact details and a rotating client quote on the blue half of the card. */
const ContactAside = () => (
  <Aside>
    <Info>
      <Label $tight>Recognition</Label>
      <Badges>
        <img src="/homepage/upwork-top-rated.svg" alt="Upwork Top Rated Plus" />
        <img src={upworkRank} alt="UpworkRank — #146 in Web Development, top 0.87%" />
      </Badges>
      <Divider aria-hidden="true" />
      <Details>
        <div>
          <Label>New business</Label>
          <DetailLink href="mailto:services@arithmiks.com">services@arithmiks.com</DetailLink>
        </div>
        <div>
          <Label>Office</Label>
          <DetailText>Lahore, Pakistan</DetailText>
        </div>
      </Details>
      <Socials>
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
      </Socials>
    </Info>
    <TestimonialRotator />
  </Aside>
);

export default ContactAside;
