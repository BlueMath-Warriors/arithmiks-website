import React from "react";
import { Shell } from "../../shared/Section/index.styled";
import { Eyebrow, Title, Grad } from "../index.styled";
import { Section, Wash, Head, Body, Stats, Cell, Figure, Claim, Source } from "./index.styled";
import { useCountUp } from "../../../hooks/useCountUp";
import { STATS } from "../content";

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

const WhyNow = () => (
  <Section id="challenges" aria-labelledby="why-now-h">
    <Wash aria-hidden="true" />
    <Shell>
      <Head data-reveal="">
        <Eyebrow $tone="onBlue">Why now</Eyebrow>
        <Title id="why-now-h" $onDark>
          <Grad $onDark>AI is everywhere.</Grad>
          <br />
          But knowing where to start is a different story.
        </Title>
        <Body>
          AI has moved beyond experimentation to become a serious business priority. The challenge
          is no longer simply adopting AI but it's more like turning it into a meaningful business
          impact.
        </Body>
      </Head>
      <Stats>
        {STATS.map((stat) => (
          <StatCell key={stat.value} stat={stat} />
        ))}
      </Stats>
    </Shell>
  </Section>
);

export default WhyNow;
