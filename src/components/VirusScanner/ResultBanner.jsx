import React from "react";
import { Banner, BannerIcon } from "./index.styled";
import { verdictCopy } from "../../utils/scanFormat";

/**
 * @param {{ verdict: "clean"|"suspicious"|"infected"; filename?: string }} props
 */
const ResultBanner = ({ verdict, filename }) => {
  const copy = verdictCopy(verdict);
  const icon = verdict === "infected" ? "!" : verdict === "suspicious" ? "⚠" : "✓";
  return (
    <Banner
      role="status"
      aria-live="polite"
      $bg={copy.bg}
      $border={copy.border}
      $color={copy.color}
    >
      <BannerIcon $color={copy.color} aria-hidden="true">
        {icon}
      </BannerIcon>
      <div>
        <h2>{copy.heading}</h2>
        <p>
          {filename ? `${filename} — ` : ""}
          {copy.sub}
        </p>
      </div>
    </Banner>
  );
};

export default ResultBanner;
