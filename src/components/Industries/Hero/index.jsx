import React from "react";
import { Link } from "gatsby";
import HeroMosaic from "./HeroMosaic";
import {
  Section,
  Glow,
  BlueOrb,
  PinkOrb,
  SoftPinkOrb,
  HeroShell,
  Grid,
  Copy,
  EyebrowRow,
  EyebrowBar,
  EyebrowLabel,
  Title,
  TitleLine,
  AiWord,
  Intro,
  Actions,
  PrimaryAction,
  SecondaryAction,
} from "./index.styled";

const Hero = ({ onSelectIndustry }) => (
  <Section id="top" aria-labelledby="ind-h">
    <Glow aria-hidden="true">
      <BlueOrb />
      <PinkOrb />
      <SoftPinkOrb />
    </Glow>
    <HeroShell data-shell="">
      <Grid>
        <Copy>
          <EyebrowRow>
            <EyebrowBar aria-hidden="true" />
            <EyebrowLabel>Industries</EyebrowLabel>
          </EyebrowRow>
          <Title id="ind-h">
            <TitleLine>
              <AiWord>AI</AiWord> that understands
            </TitleLine>
            <br />
            <TitleLine>how your industry</TitleLine>
            <br />
            works.
          </Title>
          <Intro>
            We&apos;ve built AI products for lenders, dealers, retailers, legal teams, SaaS platforms,
            agencies, broadcasters and fabricators. Each one started from the industry&apos;s real
            constraints, and each one is measured by what it changed.
          </Intro>
          <Actions>
            <PrimaryAction as={Link} to="/contact">
              Find my AI solution <span aria-hidden="true">→</span>
            </PrimaryAction>
            <SecondaryAction href="#industries">
              Browse all industries <span aria-hidden="true">↓</span>
            </SecondaryAction>
          </Actions>
        </Copy>
        <HeroMosaic onSelectIndustry={onSelectIndustry} />
      </Grid>
    </HeroShell>
  </Section>
);

export default Hero;
