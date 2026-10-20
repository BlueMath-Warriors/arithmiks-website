import React from "react";
import { Shell, Eyebrow, SectionTitle, GradientText } from "../../shared/Section/index.styled";
import { LOOP_STEPS } from "../../../constants/industries";
import {
  Section,
  Backdrop,
  Header,
  Lede,
  Flow,
  FlowRule,
  Steps,
  Step,
  StepNumber,
  StepTitle,
  StepText,
  ReviewTag,
} from "./index.styled";

const Approach = () => (
  <Section id="approach" aria-labelledby="loop-h">
    <Backdrop aria-hidden="true" />
    <Shell data-shell="">
      <Header data-reveal="">
        <div>
          <Eyebrow $onDark>How AI fits in</Eyebrow>
          <SectionTitle id="loop-h" $onDark>
            One careful loop, <GradientText $onDark>for every industry</GradientText>
          </SectionTitle>
        </div>
        <Lede>
          Every system we ship follows the same five steps, and your team signs off before anything
          reaches a customer.
        </Lede>
      </Header>

      <Flow>
        <FlowRule aria-hidden="true" />
        <Steps>
          {LOOP_STEPS.map((step, index) => (
            <Step key={step.title} data-reveal="">
              <StepNumber>{`0${index + 1}`}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepText>{step.description}</StepText>
              {step.isHumanInTheLoop && <ReviewTag>Human in the loop</ReviewTag>}
            </Step>
          ))}
        </Steps>
      </Flow>
    </Shell>
  </Section>
);

export default Approach;
