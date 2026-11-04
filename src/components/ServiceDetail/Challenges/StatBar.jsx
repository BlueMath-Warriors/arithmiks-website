import React from "react";
import { useCountUp } from "../../../hooks/useCountUp";
import { useInViewOnce } from "../../../hooks/useInViewOnce";
import { Row, Claim, Figure, Meta, Track, Fill, Source } from "./index.styled";

// The design's counter: 1.1s with a cubic ease-out.
const COUNT_OPTIONS = { duration: 1.1, ease: "power2.out" };

/**
 * One statistic row: the claim, its figure counting up, and a bar filling to
 * the same share, with the cited source.
 *
 * @param {{ stat: { claim: string, value: number, label: string, bar?: number,
 *   source: string, date: string, url: string }, wrapSourceOnPhone?: boolean }} props
 */
const StatBar = ({ stat, wrapSourceOnPhone = true }) => {
  const figureRef = useCountUp(stat.value, {
    ...COUNT_OPTIONS,
    format: (n, done) => (done ? stat.label : `${Math.round(n)}%`),
  });
  const [trackRef, filled] = useInViewOnce(0.4);
  const hasBar = typeof stat.bar === "number";

  return (
    <Row data-reveal="">
      <Claim>{stat.claim}</Claim>
      <Figure ref={figureRef}>{stat.label}</Figure>
      <Meta>
        {hasBar && (
          <Track ref={trackRef} aria-hidden="true">
            <Fill $width={filled ? stat.bar : 0} />
          </Track>
        )}
        <Source $wrapOnPhone={wrapSourceOnPhone} href={stat.url} target="_blank" rel="noopener noreferrer">
          <span>{stat.source}</span>
          {stat.date} <span aria-hidden="true">↗</span>
        </Source>
      </Meta>
    </Row>
  );
};

export default StatBar;
