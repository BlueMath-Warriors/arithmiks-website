import React from "react";
import { Row, Claim, Figure, Meta, Source } from "./index.styled";

/**
 * A closing statistic shown as-is: no counter and no bar (the figure isn't a
 * share), its source aligned right, and the list's closing rule beneath it.
 *
 * @param {{ stat: { claim: string, figure: string, source: { name: string, date: string, url: string } },
 *   wrapSourceOnPhone?: boolean }} props
 */
const StaticStat = ({ stat, wrapSourceOnPhone = true }) => (
  <Row data-reveal="" $last>
    <Claim>{stat.claim}</Claim>
    <Figure>{stat.figure}</Figure>
    <Meta $end>
      <Source $wrapOnPhone={wrapSourceOnPhone} href={stat.source.url} target="_blank" rel="noopener noreferrer">
        <span>{stat.source.name}</span>
        {stat.source.date} <span aria-hidden="true">↗</span>
      </Source>
    </Meta>
  </Row>
);

export default StaticStat;
