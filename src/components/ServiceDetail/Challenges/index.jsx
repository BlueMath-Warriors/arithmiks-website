import React from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import StatBar from "./StatBar";
import StaticStat from "./StaticStat";
import { Wash } from "./split.styled";
import { Section, Split, Left, Body, Rows } from "./index.styled";

/**
 * "Why it matters": the case for the service on the left, sourced statistics
 * with filling bars on the right.
 *
 * @param {{
 *   eyebrow: string,
 *   title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   body: string,
 *   conclusion: string,
 *   stats: object[],
 *   extraStat?: { claim: string, figure: string, source: { name: string, date: string, url: string } },
 *   deep?: boolean,
 *   wrapSourcesOnPhone?: boolean,
 * }} props
 *   extraStat: a closing statistic with no bar; deep: the darker band treatment;
 *   wrapSourcesOnPhone: most pages let a long citation wrap under 600px.
 */
const Challenges = ({
  eyebrow,
  title,
  body,
  conclusion,
  stats,
  extraStat,
  deep = false,
  wrapSourcesOnPhone = true,
}) => (
  <Section id="challenges" aria-labelledby="challenges-h" $deep={deep}>
    {deep && <Wash aria-hidden="true" />}
    <BandShell>
      <Split $deep={deep}>
        <Left data-reveal="">
          <Eyebrow $tone="onBlue">{eyebrow}</Eyebrow>
          <Title id="challenges-h" $onDark $balance>
            <HeadingText parts={title} onDark />
          </Title>
          <Body $first>{body}</Body>
          <Body $strong>{conclusion}</Body>
        </Left>
        <Rows $closed={Boolean(extraStat)}>
          {stats.map((stat) => (
            <StatBar key={stat.source} stat={stat} wrapSourceOnPhone={wrapSourcesOnPhone} />
          ))}
          {extraStat && <StaticStat stat={extraStat} wrapSourceOnPhone={wrapSourcesOnPhone} />}
        </Rows>
      </Split>
    </BandShell>
  </Section>
);

export default Challenges;
