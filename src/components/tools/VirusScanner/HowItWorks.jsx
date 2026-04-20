import React from "react";
import {
  HowItWorksWrap,
  HowHeader,
  HowEyebrow,
  HowHeading,
  HowItWorksGrid,
  HowCard,
} from "./index.styled";

/**
 * @param {{ steps: { name: string; text: string }[] }} props
 */
const HowItWorks = ({ steps }) => {
  if (!steps || steps.length === 0) return null;
  return (
    <HowItWorksWrap>
      <HowHeader>
        <HowEyebrow>How it works</HowEyebrow>
        <HowHeading>Three detection layers, one clear verdict</HowHeading>
      </HowHeader>
      <HowItWorksGrid>
        {steps.map((s, i) => (
          <HowCard key={s.name}>
            <div className="num" aria-hidden="true">
              {i + 1}
            </div>
            <h3>{s.name}</h3>
            <p>{s.text}</p>
          </HowCard>
        ))}
      </HowItWorksGrid>
    </HowItWorksWrap>
  );
};

export default HowItWorks;
