import React from "react";
import {
  CardRoot,
  CardImage,
  CardBody,
  CardTopRow,
  CardChip,
  CardLogo,
  CardClientName,
  CardTitle,
  CardOutcome,
  CardReadMore,
  CardReadMoreArrow,
} from "./index.styled";

/**
 * The case-study card shared by the homepage rail and the /case-studies grid.
 *
 * `className` is forwarded so callers can extend the root with
 * `styled(CaseStudyCard)` — the rail uses that to add its own flex sizing and
 * scroll-snap without duplicating the card's visuals. `data-slug` is set from
 * `study.slug` so a caller can identify/select a specific rendered card by DOM
 * query (CaseStudiesIndex's Flip-based filter transition does this) without
 * needing its own prop-forwarding path.
 *
 * @param {{ study: object; className?: string }} props
 */
const CaseStudyCard = ({ study, className }) => (
  <CardRoot
    to={`/case-studies/${study.slug}`}
    className={className}
    data-slug={study.slug}
  >
    <CardImage
      src={study.dashboardImg}
      alt={`${study.title} — product interface`}
      loading="lazy"
    />
    <CardBody>
      <CardTopRow>
        <CardChip>{study.tag}</CardChip>
        {study.logo ? (
          <CardLogo src={study.logo} alt={study.logoAlt} />
        ) : (
          <CardClientName>{study.logoAlt}</CardClientName>
        )}
      </CardTopRow>
      <CardTitle>{study.title}</CardTitle>
      <CardOutcome>{study.description}</CardOutcome>
      <CardReadMore>
        Read case study
        <CardReadMoreArrow aria-hidden="true">→</CardReadMoreArrow>
      </CardReadMore>
    </CardBody>
  </CardRoot>
);

export default CaseStudyCard;
