import React from "react";
import { Banner, BannerIcon } from "./index.styled";
import { verdictCopy } from "./scanFormat";

const CheckGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
    <path d="m5 12 4 4 10-10" />
  </svg>
);

const WarnGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
    <path d="M12 5 3 20h18L12 5Z" />
    <path d="M12 11v4" />
    <path d="M12 18h.01" />
  </svg>
);

const DangerGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v6" />
    <path d="M12 17h.01" />
  </svg>
);

/**
 * @param {{ verdict: "clean"|"suspicious"|"infected"; filename?: string; title?: string }} props
 */
const ResultBanner = ({ verdict, filename, title }) => {
  const copy = verdictCopy(verdict);
  const heading =
    typeof title === "string" && title.trim() ? title.trim() : copy.heading;
  const Icon =
    verdict === "infected"
      ? DangerGlyph
      : verdict === "suspicious"
      ? WarnGlyph
      : CheckGlyph;
  return (
    <Banner
      role="status"
      aria-live="polite"
      $bg={copy.bg}
      $border={copy.border}
      $color={copy.color}
    >
      <BannerIcon $color={copy.color} aria-hidden="true">
        <Icon />
      </BannerIcon>
      <div>
        <h2>{heading}</h2>
        <p>
          {filename ? `${filename} — ` : ""}
          {copy.sub}
        </p>
      </div>
    </Banner>
  );
};

export default ResultBanner;
