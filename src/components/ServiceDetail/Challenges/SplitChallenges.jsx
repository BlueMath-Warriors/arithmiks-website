import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { useCountUp } from "../../../hooks/useCountUp";
import {
  Section,
  Wash,
  Head,
  HeadCopy,
  TopStats,
  Divider,
  TopStat,
  TopFigure,
  TopClaim,
  TopSource,
  Close,
  CloseStat,
  CloseLabel,
  CloseFigure,
  CloseClaim,
  CloseSource,
  CloseCopy,
  CloseText,
  CloseLead,
  CloseConclusion,
  CompactTitle,
} from "./split.styled";

const COUNT_OPTIONS = { duration: 1.1, ease: "power2.out" };
// The two head statistics sit in grid columns 1 and 3, either side of the rule.
const STAT_COLUMNS = [1, 3];

const SourceContent = ({ source }) => (
  <>
    <span>{source.name}</span>
    {source.date} <span aria-hidden="true">↗</span>
  </>
);

const HeadStat = ({ stat, column, wrapSource }) => {
  const figureRef = useCountUp(stat.value, {
    ...COUNT_OPTIONS,
    format: (n, done) => (done ? stat.label : `${Math.round(n)}%`),
  });
  return (
    <TopStat $column={column}>
      <TopFigure ref={figureRef}>{stat.label}</TopFigure>
      <TopClaim>{stat.claim}</TopClaim>
      <TopSource
        $wrapOnPhone={wrapSource}
        href={stat.source.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SourceContent source={stat.source} />
      </TopSource>
    </TopStat>
  );
};

/**
 * "Why it matters", split layout: the title beside two headline statistics,
 * then a closing statistic with the argument that follows from it.
 *
 * @param {{
 *   eyebrow: string,
 *   title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   stats: { value: number, label: string, claim: string, source: { name: string, date: string, url: string } }[],
 *   close: { label: string, figure: string, claim: string, source: { name: string, date: string, url: string },
 *     lead: string, paragraphs: string[], conclusion: string },
 *   headRowGap?: string,
 *   compactTitle?: boolean,
 *   statsTopGap?: string,
 *   wrapSourcesOnPhone?: boolean,
 * }} props
 */
const SplitChallenges = ({
  eyebrow,
  title,
  stats,
  close,
  headRowGap = "40px",
  compactTitle = false,
  statsTopGap,
  wrapSourcesOnPhone = true,
}) => {
  const Heading = compactTitle ? CompactTitle : Title;
  return (
    <Section id="challenges" aria-labelledby="challenges-h">
      <Wash aria-hidden="true" />
      <BandShell>
        <Head $rowGap={headRowGap}>
          <HeadCopy data-reveal="">
            <Eyebrow $tone="onBlue">{eyebrow}</Eyebrow>
            <Heading id="challenges-h" $onDark $balance>
              <HeadingText parts={title} onDark />
            </Heading>
          </HeadCopy>
          <TopStats data-reveal="" $topGap={statsTopGap}>
            <Divider aria-hidden="true" />
            {stats.map((stat, index) => (
              <HeadStat
                key={stat.source.name}
                stat={stat}
                column={STAT_COLUMNS[index]}
                wrapSource={wrapSourcesOnPhone}
              />
            ))}
          </TopStats>
        </Head>

        <Close data-reveal="">
          <CloseStat>
            <CloseLabel>{close.label}</CloseLabel>
            <CloseFigure>{close.figure}</CloseFigure>
            <CloseClaim>{close.claim}</CloseClaim>
            <CloseSource
              $wrapOnPhone={wrapSourcesOnPhone}
              href={close.source.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SourceContent source={close.source} />
            </CloseSource>
          </CloseStat>
          <CloseCopy>
            <CloseLead>{close.lead}</CloseLead>
            {close.paragraphs.map((paragraph) => (
              <CloseText key={paragraph}>{paragraph}</CloseText>
            ))}
            <CloseConclusion>{close.conclusion}</CloseConclusion>
          </CloseCopy>
        </Close>
      </BandShell>
    </Section>
  );
};

export default SplitChallenges;
