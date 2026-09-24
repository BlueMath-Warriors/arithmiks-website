import React, { useRef } from "react";
import { useTimelineProgress } from "./useTimelineProgress";
import { Shell, Eyebrow, SectionTitle, GradientText } from "../../shared/Section/index.styled";
import {
  Section,
  CornerGlow,
  Header,
  Timeline,
  RailTrack,
  RailFill,
  Item,
  Node,
  Body,
  ItemTitle,
  Reveal,
  ItemBody,
} from "./index.styled";

// Items alternate sides of the rail, starting on the right.
const PILLARS = [
  {
    title: "Vision",
    side: "right",
    icon: "M12 3.5a5.5 5.5 0 0 0-3.2 10c.5.4.7.9.7 1.5v.5h5v-.5c0-.6.2-1.1.7-1.5a5.5 5.5 0 0 0-3.2-10ZM9.5 19.5h5",
    body: "A world where any team, whatever its size, can put intelligence to work on its own data — safely, transparently, and on its own terms.",
  },
  {
    title: "Mission",
    side: "left",
    icon: "M6 20.5V4M6 4.5h10.6l-1.7 3.3 1.7 3.3H6",
    body: "To take businesses from idea to production with AI-first software that is honest about feasibility, built to be owned by the client, and shipped by senior hands.",
  },
  {
    title: "Values",
    side: "right",
    icon: "M12 3.2 4.8 6v5.4c0 4.3 3 7.2 7.2 8.4 4.2-1.2 7.2-4.1 7.2-8.4V6L12 3.2Zm-3 8.6 2.1 2.1 3.9-3.9",
    body: "Honesty before the quote. Effort you can inspect. Ownership that stays with you. A team kept deliberately small, so the people who scope the work are the ones who build it.",
  },
];

const VisionMission = () => {
  const timelineRef = useRef(null);
  const fillRef = useRef(null);
  const active = useTimelineProgress(timelineRef, fillRef, PILLARS.length);

  return (
    <Section id="beliefs" aria-labelledby="vmv-h">
      <CornerGlow aria-hidden="true" />
      <Shell data-shell="">
        <Header data-reveal="">
          <Eyebrow>What drives us</Eyebrow>
          <SectionTitle id="vmv-h">
            Our vision, mission and <GradientText>values</GradientText>
          </SectionTitle>
        </Header>

        <Timeline ref={timelineRef}>
          <RailTrack aria-hidden="true" />
          <RailFill ref={fillRef} aria-hidden="true" />
          {PILLARS.map((pillar, index) => (
            <Item key={pillar.title}>
              <Node data-timeline-node="" $active={active[index]} aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={pillar.icon} />
                </svg>
              </Node>
              <Body $side={pillar.side}>
                <ItemTitle $side={pillar.side} $active={active[index]}>
                  {pillar.title}
                </ItemTitle>
                <Reveal $active={active[index]}>
                  <ItemBody>{pillar.body}</ItemBody>
                </Reveal>
              </Body>
            </Item>
          ))}
        </Timeline>
      </Shell>
    </Section>
  );
};

export default VisionMission;
