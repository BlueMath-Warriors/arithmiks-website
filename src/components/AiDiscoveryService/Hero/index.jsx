import React from "react";
import MeshHeroBackground from "../../shared/MeshHeroBackground";
import { Shell } from "../../shared/Section/index.styled";
import { PrimaryButton } from "../index.styled";
import {
  Section,
  Spark,
  Body,
  Copy,
  EyebrowRow,
  EyebrowBar,
  EyebrowText,
  Heading,
  HeadingAccent,
  Intro,
  CtaRow,
  SecondaryButton,
} from "./index.styled";

// The gradient AI sparkle on the right, pre-rendered from the design's SVG.
// Drawn live, its four stacked blur filters and masks took ~1.4s to paint the
// first frame on a throttled phone; as a WebP it's a plain image decode.
export const SPARK_SRC_SET = [400, 540, 700, 1000, 1400]
  .map((width) => `/ai-discovery/hero-spark-${width}.webp ${width}w`)
  .join(", ");
// Matches the Spark box: clamp(360px, 44vw, 700px), and 300px once stacked.
export const SPARK_SIZES = "(max-width: 900px) 300px, min(700px, 44vw)";

const Hero = () => (
  <Section id="top">
    <MeshHeroBackground />
    <Spark aria-hidden="true">
      <img
        src="/ai-discovery/hero-spark-700.webp"
        srcSet={SPARK_SRC_SET}
        sizes={SPARK_SIZES}
        width="700"
        height="700"
        alt=""
        fetchpriority="high"
        decoding="async"
      />
    </Spark>

    <Body>
      <Shell>
        <Copy>
          <EyebrowRow>
            <EyebrowBar aria-hidden="true" />
            <EyebrowText>AI Discovery, Strategy &amp; Roadmap</EyebrowText>
          </EyebrowRow>
          <Heading>
            Find where AI can create
            <br />
            <HeadingAccent>real business value</HeadingAccent>
          </Heading>
          <Intro>
            AI can automate tasks, improve decision-making, and help teams work more efficiently.
            But choosing an AI tool isn't the hard part. The real challenge is knowing where AI makes
            sense for your business, and where it doesn't.
          </Intro>
          <Intro $tight>
            Our AI Discovery, Strategy &amp; Roadmap helps you identify high-value opportunities,
            assess what it will take to implement them, and create a clear path from business
            problems to a practical AI solution.
          </Intro>
          <CtaRow>
            <PrimaryButton href="#contact">
              Book a Free AI Consultation <span aria-hidden="true">→</span>
            </PrimaryButton>
            <SecondaryButton href="#process">
              How it works <span aria-hidden="true">↓</span>
            </SecondaryButton>
          </CtaRow>
        </Copy>
      </Shell>
    </Body>
  </Section>
);

export default Hero;
