import React from "react";
import StatCounter from "./StatCounter";
import { Shell, Eyebrow, SectionTitle, GradientText } from "../../shared/Section/index.styled";
import { Section, Header, Lede, StepGrid, Step, StepNumber, StepTitle, StepText, Stats } from "./index.styled";

const STEPS = [
  { number: "01", title: "Introductory Meeting", text: "All the stakeholders attend the meeting to brainstorm the idea." },
  { number: "02", title: "Highlight Scope & Requirements", text: "Our team will prepare SRS document and highlight the product scope." },
  { number: "03", title: "Choose Engagement Model", text: "You will choose an engagement model which suits you." },
  { number: "04", title: "Project Plan & Prototyping", text: "We will plan product roadmap and create a rapid clickable prototype for you." },
  { number: "05", title: "Development & launch", text: "We will design, develop and test your application to ensure a smooth launch." },
];

const STATS = [
  { value: 10, suffix: "+", label: "Products shipped" },
  { value: 4, label: "Industries served" },
  { value: 100, suffix: "%", label: "Customer-centric delivery" },
  { value: 12, label: "Team members · 6 yrs" },
];

const Process = () => (
  <Section id="process" aria-labelledby="process-h">
    <Shell data-shell="">
      <Header data-reveal="">
        <div>
          <Eyebrow $onDark>Process</Eyebrow>
          <SectionTitle id="process-h" $onDark>
            How it <GradientText $onDark>works</GradientText>
          </SectionTitle>
        </div>
        <Lede>Our foolproof process ensures you receive a reliable solution.</Lede>
      </Header>

      <StepGrid>
        {STEPS.map((step) => (
          <Step key={step.number} data-reveal="">
            <StepNumber>{step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepText>{step.text}</StepText>
          </Step>
        ))}
      </StepGrid>

      <Stats>
        {STATS.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </Stats>
    </Shell>
  </Section>
);

export default Process;
