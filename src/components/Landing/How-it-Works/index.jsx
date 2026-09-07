import React, { useEffect, useRef, useState } from "react";
import {
  Section,
  Shell,
  Grid,
  Left,
  Eyebrow,
  Heading,
  Intro,
  Rail,
  RailDot,
  RailLine,
  RailLabel,
  CtaLink,
  Cards,
  Card,
  CardTop,
  CardChip,
  CardNumber,
  CardTitle,
  CardBody,
} from "./index.styled";

// Icon paths ported verbatim from the source design's STEPS data.
const STEPS = [
  {
    title: "Free Consultation",
    body: "Tell us your idea in a quick, no-obligation call. We listen, ask the sharp questions, and tell you honestly whether it is worth building.",
    icon: "M20 12.5c0 3.9-3.6 7-8 7-1 0-2-.2-2.9-.5L5 20.5l1.6-3.4A6.6 6.6 0 0 1 4 12.5c0-3.9 3.6-7 8-7s8 3.1 8 7Z",
  },
  {
    title: "AI Audit & SaaS Proof of Concept",
    body: "We validate feasibility against your real data and build a working proof of concept — so you see it run before committing a full budget.",
    icon: "M12 3.5a5.5 5.5 0 0 0-3.2 10c.5.4.7.9.7 1.5v.5h5v-.5c0-.6.2-1.1.7-1.5A5.5 5.5 0 0 0 12 3.5ZM9.5 19.5h5",
  },
  {
    title: "Build",
    body: "We design, develop, and ship your production product, then hand over something your team can own and keep evolving without us.",
    icon: "M12 3.5c3.2 2 5 5.4 5 9.2l-2.4 2.4H9.4L7 12.7c0-3.8 1.8-7.2 5-9.2ZM9.4 15.1 7.6 19l2.6-.9m4.4-3 1.8 3.9-2.6-.9",
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.45;
      let best = Infinity;
      let nextActive = 0;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - line);
        if (distance < best) {
          best = distance;
          nextActive = i;
        }
      });
      setActive(nextActive);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Section id="how" aria-labelledby="how-h">
      <Shell>
        <Grid>
          <Left>
            <Eyebrow>How we start</Eyebrow>
            <Heading id="how-h">
              Have an idea? Book a <span>free consultation</span>
            </Heading>
            <Intro>
              Three steps from a conversation to a product in production. You can stop
              after any one of them.
            </Intro>
            <Rail>
              {STEPS.map((step, i) => (
                <div key={step.title} style={{ display: "flex", gap: 16 }}>
                  <span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <RailDot $state={i < active ? "done" : i === active ? "active" : "todo"}>
                      {String(i + 1).padStart(2, "0")}
                    </RailDot>
                    {i < STEPS.length - 1 && <RailLine $done={i < active} />}
                  </span>
                  <RailLabel $active={i === active}>{step.title}</RailLabel>
                </div>
              ))}
            </Rail>
            <CtaLink href="#contact">Book Free Consultation</CtaLink>
          </Left>
          <Cards>
            {STEPS.map((step, i) => (
              <Card
                key={step.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                $active={i === active}
              >
                <CardTop>
                  <CardChip $active={i === active}>
                    <svg
                      viewBox="0 0 24 24"
                      width="27"
                      height="27"
                      fill="none"
                      stroke={i === active ? "#fff" : "#1355FF"}
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={step.icon} />
                    </svg>
                  </CardChip>
                  <CardNumber $active={i === active}>{String(i + 1).padStart(2, "0")}</CardNumber>
                </CardTop>
                <CardTitle $active={i === active}>{step.title}</CardTitle>
                <CardBody $active={i === active}>{step.body}</CardBody>
              </Card>
            ))}
          </Cards>
        </Grid>
      </Shell>
    </Section>
  );
};

export default HowItWorks;
