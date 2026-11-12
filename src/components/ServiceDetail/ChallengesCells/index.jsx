import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { useCountUp } from "../../../hooks/useCountUp";
import {
  Section,
  Wash,
  Head,
  Stats,
  Cell,
  Figure,
  Claim,
  Source,
  Closing,
  ClosingText,
  ClosingLead,
} from "./index.styled";

const StatCell = ({ stat, stackOnPhone, stackOnTablet, claimMaxWidth, openLastCell }) => {
  const countRef = useCountUp(stat.value, { duration: 1.1, ease: "power3.out" });
  return (
    <Cell
      data-reveal=""
      $stackOnPhone={stackOnPhone}
      $stackOnTablet={stackOnTablet}
      $openLastCell={openLastCell}
    >
      <Figure $stackOnPhone={stackOnPhone}>
        {/* useCountUp writes the number; the literal is the no-JS value. */}
        <span ref={countRef}>{stat.value}</span>
        {stat.suffix ?? "%"}
      </Figure>
      <Claim $stackOnPhone={stackOnPhone} $maxWidth={claimMaxWidth}>
        {stat.claim}
      </Claim>
      <Source
        href={stat.url}
        target="_blank"
        rel="noopener noreferrer"
        $stackOnPhone={stackOnPhone}
      >
        <strong>{stat.source}</strong>
        {stat.date} <span aria-hidden="true">↗</span>
      </Source>
    </Cell>
  );
};

/**
 * "Why now", cell layout: the title above a row of large statistics, with the
 * paragraphs some pages close the band with underneath.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   stats: { value: number, suffix?: string, claim: string, source: string, date: string,
 *     url: string }[],
 *   closing?: [string, string], stackOnPhone?: boolean, claimMaxWidth?: string,
 *   openLastCell?: boolean, stackOnTablet?: boolean, headMaxWidth?: string }} props
 *   stats[].suffix: what follows the figure, "%" unless set;
 *   closing: the question the numbers raise, then the answer, the second set larger;
 *   stackOnPhone: the design's one-column phone treatment with horizontal rules;
 *   claimMaxWidth: overrides the 290px claim measure for pages that set it wider;
 *   openLastCell: drop the divider after the last statistic;
 *   stackOnTablet: one statistic per row from 900px down;
 *   headMaxWidth: the heading's measure, which the designs vary per page.
 */
const ChallengesCells = ({
  eyebrow,
  title,
  stats,
  closing,
  stackOnPhone = false,
  claimMaxWidth,
  openLastCell = false,
  stackOnTablet = false,
  headMaxWidth,
}) => (
  <Section id="challenges" aria-labelledby="challenges-h">
    <Wash aria-hidden="true" />
    <BandShell>
      <Head data-reveal="" $maxWidth={headMaxWidth}>
        <Eyebrow $tone="onBlue">{eyebrow}</Eyebrow>
        <Title id="challenges-h" $onDark $balance>
          <HeadingText parts={title} onDark />
        </Title>
      </Head>
      <Stats $stackOnPhone={stackOnPhone} $stackOnTablet={stackOnTablet}>
        {stats.map((stat) => (
          <StatCell
            key={stat.claim}
            stat={stat}
            stackOnPhone={stackOnPhone}
            claimMaxWidth={claimMaxWidth}
            openLastCell={openLastCell}
            stackOnTablet={stackOnTablet}
          />
        ))}
      </Stats>
      {closing && (
        <Closing data-reveal="">
          <ClosingText>{closing[0]}</ClosingText>
          <ClosingLead>{closing[1]}</ClosingLead>
        </Closing>
      )}
    </BandShell>
  </Section>
);

export default ChallengesCells;
