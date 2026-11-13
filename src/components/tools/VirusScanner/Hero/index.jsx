import React from "react";
import { EyebrowBar } from "../../../shared/Band/index.styled";
import HeadingText from "../../../shared/Band/HeadingText";
import { HERO } from "../content";
import HeroShield from "./HeroShield";
import {
  Section,
  Glows,
  GlowBlue,
  GlowPink,
  Shell,
  Layout,
  Copy,
  EyebrowRow,
  EyebrowText,
  Heading,
  Intro,
  Badges,
  Badge,
} from "./index.styled";

const BadgeCheck = () => (
  <svg
    viewBox="0 0 16 16"
    width="13"
    height="13"
    fill="none"
    stroke="#8FA9FF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m3.5 8.4 3 3 6-6.6" />
  </svg>
);

/** The scanner page's dark hero: the pitch, trust badges and the shield art. */
const Hero = () => (
  <Section id="top">
    <Glows aria-hidden="true">
      <GlowBlue />
      <GlowPink />
    </Glows>
    <Shell>
      <Layout>
        <Copy data-reveal="">
          <EyebrowRow>
            <EyebrowBar aria-hidden="true" />
            <EyebrowText>{HERO.eyebrow}</EyebrowText>
          </EyebrowRow>
          <Heading>
            <HeadingText parts={HERO.title} onDark />
          </Heading>
          <Intro>{HERO.intro}</Intro>
          <Badges>
            {HERO.badges.map((badge) => (
              <Badge key={badge}>
                <BadgeCheck />
                {badge}
              </Badge>
            ))}
          </Badges>
        </Copy>
        <HeroShield />
      </Layout>
    </Shell>
  </Section>
);

export default Hero;
