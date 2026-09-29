import React from "react";
import {
  CaseCardLink,
  CaseImageFrame,
  CaseBody,
  CaseMeta,
  ClientName,
  Timeframe,
  MetricRow,
  Metric,
  MetricLabel,
  BeforeAfter,
  CaseCta,
  CardArrow,
} from "./index.styled";

// All case screenshots share this aspect ratio, so the card holds its height
// while the image loads.
const IMAGE_WIDTH = 522;
const IMAGE_HEIGHT = 424;

const CaseCard = ({ caseStudy }) => (
  <CaseCardLink to={caseStudy.casePath}>
    <CaseImageFrame>
      <img
        src={caseStudy.image}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        alt={`${caseStudy.client} product screens`}
        loading="lazy"
        decoding="async"
      />
    </CaseImageFrame>
    <CaseBody>
      <CaseMeta>
        {caseStudy.logo ? (
          <img src={caseStudy.logo} alt={caseStudy.client} />
        ) : (
          <ClientName>{caseStudy.client}</ClientName>
        )}
        <Timeframe>{caseStudy.timeframe}</Timeframe>
      </CaseMeta>
      <MetricRow>
        <Metric>{caseStudy.metric}</Metric>
        <MetricLabel>{caseStudy.metricLabel}</MetricLabel>
      </MetricRow>
      <BeforeAfter>{caseStudy.beforeAfter}</BeforeAfter>
      <CaseCta>
        Read the {caseStudy.client} case study
        <CardArrow aria-hidden="true">→</CardArrow>
      </CaseCta>
    </CaseBody>
  </CaseCardLink>
);

export default CaseCard;
