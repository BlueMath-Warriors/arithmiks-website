import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { useCountUp } from "../../../hooks/useCountUp";
import { Section, Wash, Head, Stats, Cell, Figure, Claim, Source } from "./index.styled";

const StatCell = ({ stat }) => {
  const countRef = useCountUp(stat.value, { duration: 1.1, ease: "power3.out" });
  return (
    <Cell data-reveal="">
      <Figure>
        {/* useCountUp writes the number; the literal is the no-JS value. */}
        <span ref={countRef}>{stat.value}</span>%
      </Figure>
      <Claim>{stat.claim}</Claim>
      <Source href={stat.url} target="_blank" rel="noopener noreferrer">
        <strong>{stat.source}</strong>
        {stat.date} <span aria-hidden="true">↗</span>
      </Source>
    </Cell>
  );
};

/**
 * "Why now", cell layout: the title above a row of large statistics.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   stats: { value: number, claim: string, source: string, date: string, url: string }[] }} props
 */
const ChallengesCells = ({ eyebrow, title, stats }) => (
  <Section id="challenges" aria-labelledby="challenges-h">
    <Wash aria-hidden="true" />
    <BandShell>
      <Head data-reveal="">
        <Eyebrow $tone="onBlue">{eyebrow}</Eyebrow>
        <Title id="challenges-h" $onDark $balance>
          <HeadingText parts={title} onDark />
        </Title>
      </Head>
      <Stats>
        {stats.map((stat) => (
          <StatCell key={stat.claim} stat={stat} />
        ))}
      </Stats>
    </BandShell>
  </Section>
);

export default ChallengesCells;
