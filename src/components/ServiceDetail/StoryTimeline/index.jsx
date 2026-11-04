import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import InterviewNotes from "./visuals/InterviewNotes";
import FlowMap from "./visuals/FlowMap";
import DesignTokens from "./visuals/DesignTokens";
import ScreenPreview from "./visuals/ScreenPreview";
import { useStepReveal } from "./useStepReveal";
import {
  Section,
  Head,
  List,
  Spine,
  Step,
  Dot,
  StepText,
  StepLabel,
  StepTitle,
  StepBody,
  StepVisual,
  VisualFrame,
} from "./index.styled";

// Content refers to each step's art by name.
const VISUALS = {
  interview: InterviewNotes,
  flow: FlowMap,
  tokens: DesignTokens,
  screens: ScreenPreview,
};

/**
 * "The design process": steps down a centre spine, alternating sides, each
 * with an animated illustration. Steps slide in as they reach the viewport.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   steps: { title: string, text: string, visual: keyof typeof VISUALS }[] }} props
 */
const StoryTimeline = ({ eyebrow, title, steps }) => {
  const { listRef, isWaiting } = useStepReveal(steps.length);

  return (
    <Section id="story" aria-labelledby="st-h">
      <BandShell>
        <Head data-reveal="">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Title id="st-h" $balance>
              <HeadingText parts={title} />
            </Title>
          </div>
        </Head>
        <List ref={listRef}>
          <Spine aria-hidden="true" />
          {steps.map((step, index) => {
            const Visual = VISUALS[step.visual];
            if (!Visual) throw new Error(`StoryTimeline: unknown visual "${step.visual}"`);
            return (
              <Step key={step.title} data-step={index} $flip={index % 2 === 1} $waiting={isWaiting(index)}>
                <Dot aria-hidden="true" />
                <StepText>
                  <StepLabel>Step {String(index + 1).padStart(2, "0")}</StepLabel>
                  <StepTitle>{step.title}</StepTitle>
                  <StepBody>{step.text}</StepBody>
                </StepText>
                <StepVisual aria-hidden="true">
                  <VisualFrame>
                    <Visual />
                  </VisualFrame>
                </StepVisual>
              </Step>
            );
          })}
        </List>
      </BandShell>
    </Section>
  );
};

export default StoryTimeline;
