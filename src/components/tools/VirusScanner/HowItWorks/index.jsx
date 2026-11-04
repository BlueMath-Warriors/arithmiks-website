import React from "react";
import { Eyebrow, Title } from "../../../shared/Band/index.styled";
import HeadingText from "../../../shared/Band/HeadingText";
import { HOW_IT_WORKS } from "../content";
import {
  Section,
  Glow,
  Shell,
  Inner,
  Steps,
  Step,
  StepHead,
  StepNumber,
  StepTitle,
  StepText,
} from "./index.styled";

/**
 * "How it works": the scan's steps on the dark band.
 *
 * @param {{ steps: { name: string, text: string }[] }} props
 */
const HowItWorks = ({ steps }) => (
  <Section id="how" aria-labelledby="how-h">
    <Glow aria-hidden="true" />
    <Shell>
      <Inner>
        <div data-reveal="">
          <Eyebrow $tone="onDark" $gap="20px">
            {HOW_IT_WORKS.eyebrow}
          </Eyebrow>
          <Title id="how-h" $onDark $balance>
            <HeadingText parts={HOW_IT_WORKS.title} onDark />
          </Title>
        </div>
        <Steps>
          {steps.map((step, index) => (
            <Step key={step.name} data-reveal="">
              <StepHead>
                <StepNumber aria-hidden="true">{index + 1}</StepNumber>
              </StepHead>
              <StepTitle>{step.name}</StepTitle>
              <StepText>{step.text}</StepText>
            </Step>
          ))}
        </Steps>
      </Inner>
    </Shell>
  </Section>
);

export default HowItWorks;
