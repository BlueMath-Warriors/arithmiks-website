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

// Matches CarouselCard's own max-width:900px breakpoint, where it drops to
// one card per view — the dot count has to follow the same split or a
// mobile visitor can never reach the testimonials past PAGE_COUNT.
const MOBILE_QUERY = "(max-width: 900px)";

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(0);
  const trackViewRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const perPage = isMobile ? 1 : 2;
  const pageCount = Math.ceil(VOICES.length / perPage);

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
        // The view has side padding for the glow, so its width isn't the page step.
        const pageStep =
          cardRefs.current[perPage].offsetLeft - cardRefs.current[0].offsetLeft;
        // The last page holds a single card, so its snap offset lies past the
        // maximum scroll; reaching the end of the track is what selects it.
        const isAtEnd =
          view.scrollLeft + view.clientWidth >= view.scrollWidth - 1;
        const nearest = isAtEnd
          ? pageCount - 1
          : Math.round(view.scrollLeft / pageStep);
        setPage(Math.min(pageCount - 1, Math.max(0, nearest)));
      });
    };
    view.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      view.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [perPage, pageCount]);

  const goToPage = (i) => {
    cardRefs.current[i * perPage]?.scrollIntoView({
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
            {Array.from({ length: pageCount }, (_, i) => (
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
