import React from "react";
import { HowItWorksGrid, HowCard } from "./index.styled";
import { SectionHeading } from "../ToolPage/index.styled";

/**
 * @param {{ steps: { name: string; text: string }[] }} props
 */
const HowItWorks = ({ steps }) => {
  if (!steps || steps.length === 0) return null;
  return (
    <div style={{ marginTop: 48 }}>
      <SectionHeading>How the virus scanner works</SectionHeading>
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
    </div>
  );
};

export default HowItWorks;
