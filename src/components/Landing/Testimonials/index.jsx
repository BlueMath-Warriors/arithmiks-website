import React, { useCallback } from "react";
import { VOICES } from "../../../constants/voices";
import { track } from "../../../utils/analytics";
import { useVoiceRail } from "./useVoiceRail";
import {
  Section,
  Glow,
  Shell,
  Header,
  Eyebrow,
  Heading,
  Body,
  TrackView,
  Track,
  CarouselCard,
  Bars,
  Bar,
} from "./index.styled";

const Testimonials = () => {
  const onIndexChange = useCallback(({ method, from, to }) => {
    track("testimonial_interact", {
      method,
      direction: to > from ? "next" : "previous",
      page: to + 1,
    });
  }, []);

  const { viewRef, trackRef, activeIndex, goTo } = useVoiceRail(VOICES.length, onIndexChange);

  return (
    <Section id="voices" aria-labelledby="voices-h">
      <Glow aria-hidden="true" />
      <Shell>
        <Header>
          <Eyebrow>In their words</Eyebrow>
          <Heading id="voices-h">
            What it&apos;s like to <span>build with us</span>
          </Heading>
        </Header>
        <Body>
          <TrackView ref={viewRef}>
            <Track ref={trackRef}>
              {VOICES.map((voice) => (
                <CarouselCard key={voice.slug} voice={voice} />
              ))}
            </Track>
          </TrackView>
          <Bars role="group" aria-label="Testimonials">
            {VOICES.map((voice, index) => (
              <Bar
                key={voice.slug}
                type="button"
                $active={index === activeIndex}
                aria-current={index === activeIndex ? "true" : "false"}
                aria-label={`Show testimonial ${index + 1} of ${VOICES.length}`}
                onClick={() => goTo(index)}
              />
            ))}
          </Bars>
        </Body>
      </Shell>
    </Section>
  );
};

export default Testimonials;
