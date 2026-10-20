import React, { useEffect, useRef, useState } from "react";
import StageSlide from "./StageSlide";
import StageRail from "./StageRail";
import { STAGES } from "./stages";
import { useStageScroll, stageProgress, STAGE_HERO_DONE } from "./useStageScroll";
import { Shell, GradientText } from "../../shared/Section/index.styled";
import {
  Section,
  Pin,
  Glow,
  GlowField,
  BlueOrb,
  PinkOrb,
  SoftPinkOrb,
  GridMesh,
  Intro,
  IntroEyebrow,
  Title,
  Lede,
  Cue,
  CueLabel,
  StageStack,
  FloatingEyebrow,
  Runway,
} from "./index.styled";

const EYEBROW_GAP_MIN = 26;
const EYEBROW_GAP_MAX = 44;
const EYEBROW_GAP_VIEWPORT_SHARE = 0.04;
const INITIAL_EYEBROW_TOP = -220;

const HERO_SELECTOR = "[data-stage-hero]";
const PIN_SELECTOR = "[data-stage-pin]";

/** Header predicate: true while the pinned stage story still owns the viewport. */
export const isStageHeroActive = () => {
  const stage = document.querySelector(HERO_SELECTOR);
  const progress = stageProgress(stage, stage && stage.querySelector(PIN_SELECTOR));
  return progress !== null && progress <= STAGE_HERO_DONE;
};

const slidePosition = (index, activeIndex) => {
  if (index === activeIndex) return "active";
  return index < activeIndex ? "past" : "upcoming";
};

const Hero = () => {
  const stageRef = useRef(null);
  const pinRef = useRef(null);
  const introRef = useRef(null);
  const cueRef = useRef(null);
  const glowRef = useRef(null);
  const railRef = useRef(null);
  const slideRefs = useRef([]);
  const [eyebrowTop, setEyebrowTop] = useState(INITIAL_EYEBROW_TOP);

  const { activeIndex, jumpTo } = useStageScroll({
    stageRef,
    pinRef,
    introRef,
    cueRef,
    glowRef,
    railRef,
    stageCount: STAGES.length,
  });

  // The eyebrow sits a fixed gap above whichever slide is showing, so the
  // section label travels with the stage content.
  useEffect(() => {
    const slide = slideRefs.current[Math.max(0, activeIndex)];
    if (!slide) return;
    const gap = Math.round(
      Math.min(EYEBROW_GAP_MAX, Math.max(EYEBROW_GAP_MIN, window.innerHeight * EYEBROW_GAP_VIEWPORT_SHARE))
    );
    setEyebrowTop(-(slide.offsetHeight / 2) - gap);
  }, [activeIndex]);

  return (
    <Section id="top" ref={stageRef} data-stage-hero="" aria-labelledby="hww-h">
      <Pin ref={pinRef} data-stage-pin="">
        <Glow ref={glowRef} aria-hidden="true">
          <GlowField>
            <BlueOrb />
            <PinkOrb />
            <SoftPinkOrb />
          </GlowField>
        </Glow>
        <GridMesh $visible={activeIndex >= 0} aria-hidden="true" />

        <Shell data-shell="">
          <Intro ref={introRef}>
            <IntroEyebrow>How we work</IntroEyebrow>
            <Title id="hww-h">
              From first call to production, <GradientText>without the guesswork.</GradientText>
            </Title>
            <Lede>
              Five stages, one senior team, and a working artefact at the end of every one — so you
              always know where the project stands and what it will take to finish.
            </Lede>
            <Cue ref={cueRef} aria-hidden="true">
              <CueLabel>
                SCROLL
                <svg
                  viewBox="0 0 16 16"
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3v9M4.5 8.5 8 12l3.5-3.5" />
                </svg>
              </CueLabel>
            </Cue>
          </Intro>

          <StageStack>
            <FloatingEyebrow $visible={activeIndex >= 0} style={{ top: `${eyebrowTop}px` }} aria-hidden="true">
              How we work
            </FloatingEyebrow>
            {STAGES.map((stage, index) => (
              <StageSlide
                key={stage.number}
                ref={(node) => {
                  slideRefs.current[index] = node;
                }}
                stage={stage}
                position={slidePosition(index, activeIndex)}
              />
            ))}
          </StageStack>
        </Shell>

        <StageRail ref={railRef} stages={STAGES} activeIndex={activeIndex} onSelect={jumpTo} />
      </Pin>
      <Runway aria-hidden="true" />
    </Section>
  );
};

export default Hero;
