import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { useCountUp } from "../../../hooks/useCountUp";
import { Section, Wash, Figure, Claim, Source } from "../ChallengesCells/index.styled";
import { Head, Row, StatCell, Aside, AsideLead, AsideText } from "./index.styled";

/**
 * "Why it matters", feature layout: one large statistic beside the argument
 * it supports — a lead sentence over a supporting paragraph.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   stat: { value: number, claim: string, source: string, date: string, url: string },
 *   aside: [string, string], headMaxWidth?: string }} props
 *   aside: the lead sentence, then the supporting paragraph;
 *   headMaxWidth: the heading's measure, which the designs vary per page.
 */
const ChallengesFeature = ({ eyebrow, title, stat, aside, headMaxWidth = "720px" }) => {
  const countRef = useCountUp(stat.value, { duration: 1.1, ease: "power3.out" });

  return (
    <Section id="challenges" aria-labelledby="challenges-h">
      <Wash aria-hidden="true" />
      <BandShell>
        <Head data-reveal="" $maxWidth={headMaxWidth}>
          <Eyebrow $tone="onBlue">{eyebrow}</Eyebrow>
          <Title id="challenges-h" $onDark $balance>
            <HeadingText parts={title} onDark />
          </Title>
        </Head>
        <Row>
          <StatCell data-reveal="">
            <Figure $stackOnPhone>
              {/* useCountUp writes the number; the literal is the no-JS value. */}
              <span ref={countRef}>{stat.value}</span>%
            </Figure>
            <Claim $stackOnPhone $maxWidth="380px">
              {stat.claim}
            </Claim>
            <Source href={stat.url} target="_blank" rel="noopener noreferrer" $stackOnPhone>
              <strong>{stat.source}</strong>
              {stat.date} <span aria-hidden="true">↗</span>
            </Source>
          </StatCell>
          <Aside data-reveal="">
            <AsideLead>{aside[0]}</AsideLead>
            <AsideText>{aside[1]}</AsideText>
          </Aside>
        </Row>
      </BandShell>
    </Section>
  );
};

export default ChallengesFeature;
