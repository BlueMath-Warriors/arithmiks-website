import React, { useEffect, useRef, useState } from "react";
import { VOICES } from "../../../constants/voices";
import {
  Section,
  Shell,
  Header,
  Eyebrow,
  Heading,
  Body,
  TrackView,
  Track,
  CarouselCard,
  Dots,
  Dot,
} from "./index.styled";

const PER_PAGE = 2;
const PAGE_COUNT = Math.ceil(VOICES.length / PER_PAGE);

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const trackViewRef = useRef(null);
  const cardRefs = useRef([]);

  // Scroll-snap reports its own position — this just keeps the dots in
  // sync with whatever page a drag/swipe/trackpad gesture lands on.
  useEffect(() => {
    const view = trackViewRef.current;
    if (!view) return undefined;
    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const nearest = Math.round(view.scrollLeft / view.clientWidth);
        setPage(Math.min(PAGE_COUNT - 1, Math.max(0, nearest)));
      });
    };
    view.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      view.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const goToPage = (i) => {
    cardRefs.current[i * PER_PAGE]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <Section id="voices" aria-labelledby="voices-h">
      <Shell>
        <Header>
          <Eyebrow>In their words</Eyebrow>
          <Heading id="voices-h">
            What it&apos;s like to <span>build with us</span>
          </Heading>
        </Header>
        <Body>
          <TrackView ref={trackViewRef}>
            <Track>
              {VOICES.map((v, i) => (
                <CarouselCard
                  key={v.slug}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  voice={v}
                />
              ))}
            </Track>
          </TrackView>
          <Dots role="group" aria-label="Testimonial pages">
            {Array.from({ length: PAGE_COUNT }, (_, i) => (
              <Dot
                key={i}
                type="button"
                $active={i === page}
                aria-label={`Show testimonial page ${i + 1}`}
                onClick={() => goToPage(i)}
              />
            ))}
          </Dots>
        </Body>
      </Shell>
    </Section>
  );
};

export default Testimonials;
