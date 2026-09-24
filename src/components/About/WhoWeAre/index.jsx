import React, { useRef } from "react";
import TeamGallery from "../TeamGallery";
import { useStickyDwell } from "./useStickyDwell";
import { GradientText } from "../../shared/Section/index.styled";
import {
  Section,
  Panel,
  GlowClip,
  GlowField,
  BlueOrb,
  PinkOrb,
  Grid,
  LeftColumn,
  EyebrowRow,
  EyebrowBar,
  EyebrowLabel,
  Title,
  Copy,
  Paragraph,
  ChipRow,
  Chip,
} from "./index.styled";

const INDUSTRIES = ["FinTech", "SaaS", "ConTech", "E-Commerce"];

const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const leftColumnRef = useRef(null);
  useStickyDwell(sectionRef, panelRef, leftColumnRef);

  return (
    <Section id="top" ref={sectionRef} aria-labelledby="who-h">
      <Panel ref={panelRef} data-shell="">
        <GlowClip aria-hidden="true">
          <GlowField>
            <BlueOrb />
            <PinkOrb />
          </GlowField>
        </GlowClip>
        <Grid>
          <LeftColumn ref={leftColumnRef}>
            <EyebrowRow>
              <EyebrowBar aria-hidden="true" />
              <EyebrowLabel>Who we are</EyebrowLabel>
            </EyebrowRow>
            <Title id="who-h">
              The team between your <GradientText>idea</GradientText> and production
            </Title>
          </LeftColumn>
          <Copy data-stagger="up">
            <Paragraph data-reveal="">
              We started Arithmiks to be the studio that says it. Every engagement opens with an
              honest answer about feasibility — before the quote, not after three months of build.
              From there we combine AI and custom software development to turn ideas into smart,
              scalable products users rely on.
            </Paragraph>
            <Paragraph data-reveal="">
              We&apos;ve stayed deliberately small: a senior team with no account layers between you
              and the engineers, working across FinTech, SaaS, ConTech and e-commerce from Lahore
              for clients worldwide.
            </Paragraph>
            <ChipRow data-reveal="">
              {INDUSTRIES.map((industry) => (
                <Chip key={industry}>{industry}</Chip>
              ))}
            </ChipRow>
          </Copy>
        </Grid>
        <TeamGallery />
      </Panel>
    </Section>
  );
};

export default WhoWeAre;
