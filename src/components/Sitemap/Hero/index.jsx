import React, { useRef } from "react";
import { Shell, GradientText } from "../../shared/Section/index.styled";
import { GlowClip, Glow } from "../../LegalPage/index.styled";
import { useHeroScrollFade } from "../../LegalPage/useHeroScrollFade";
import { Section, Content, TitleSlot, Title } from "./index.styled";

const Hero = () => {
  const contentRef = useRef(null);
  useHeroScrollFade(contentRef);

  return (
    <Section id="top" aria-labelledby="sm-h">
      <GlowClip aria-hidden="true">
        <Glow />
      </GlowClip>
      <Shell data-shell="">
        <Content ref={contentRef} data-hero-enter="">
          <TitleSlot>
            <Title id="sm-h">
              Arithmiks <GradientText>Sitemap</GradientText>
            </Title>
          </TitleSlot>
        </Content>
      </Shell>
    </Section>
  );
};

export default Hero;
