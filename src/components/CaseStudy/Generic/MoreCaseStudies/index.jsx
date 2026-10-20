import React, { useMemo, useRef } from "react";
import { Link } from "gatsby";
import useReveal from "../../../../hooks/useReveal";
import { caseStudies, DASHBOARD_IMAGE_SIZES } from "../../../Landing/Case-Study/caseStudies";
import { GradientText, Shell } from "../../../shared/Section/index.styled";
import { SectionEyebrow, SectionHeading } from "../layout.styled";
import {
  MoreSection,
  HeadRow,
  ViewAllLink,
  Grid,
  CardLink,
  CardImageFrame,
  CardBody,
  CardTopRow,
  CardChip,
  CardName,
  CardTitle,
  CardText,
  CardCta,
  RelatedService,
} from "./index.styled";

const MORE_COUNT = 2;

// The next case studies in the list after this one, wrapping around, so every
// page links onward to a different pair.
const getNextCaseStudies = (currentSlug, relatedSlugs) => {
  if (relatedSlugs) {
    return relatedSlugs.map((slug) => caseStudies.find((study) => study.slug === slug)).filter(Boolean);
  }
  const withPages = (caseStudies || []).filter((study) => study.hasDetailPage);
  const others = withPages.filter((study) => study.slug !== currentSlug);
  const currentIndex = withPages.findIndex((study) => study.slug === currentSlug);
  if (currentIndex === -1 || others.length <= MORE_COUNT) return others.slice(0, MORE_COUNT);
  return Array.from({ length: MORE_COUNT }, (_, step) => withPages[(currentIndex + 1 + step) % withPages.length]);
};

/**
 * @param {Object} props
 * @param {string} props.currentSlug
 * @param {string[]} [props.relatedSlugs] hand-picked studies to show instead of the next two in the list
 */
const MoreCaseStudies = ({ currentSlug, relatedSlugs }) => {
  const rootRef = useRef(null);
  useReveal(rootRef);
  const nextStudies = useMemo(
    () => getNextCaseStudies(currentSlug, relatedSlugs),
    [currentSlug, relatedSlugs]
  );
  const relatedService = useMemo(
    () => (caseStudies || []).find((study) => study.slug === currentSlug)?.relatedService,
    [currentSlug]
  );

  if (nextStudies.length === 0) return null;

  return (
    <MoreSection id="more" aria-labelledby="more-heading" ref={rootRef}>
      <Shell>
        <HeadRow data-reveal="">
          <div>
            <SectionEyebrow>More from Arithmiks</SectionEyebrow>
            <SectionHeading id="more-heading">
              Keep <GradientText>exploring</GradientText>
            </SectionHeading>
          </div>
          <ViewAllLink to="/case-studies">
            View all case studies <span aria-hidden="true">→</span>
          </ViewAllLink>
        </HeadRow>
        <Grid>
          {nextStudies.map((study) => (
            <CardLink key={study.slug} to={`/case-studies/${study.slug}`} data-reveal="">
              <CardImageFrame>
                <img
                  src={study.dashboardImg}
                  srcSet={study.dashboardSrcSet}
                  sizes={study.dashboardSrcSet ? DASHBOARD_IMAGE_SIZES : undefined}
                  alt={study.title}
                  loading="lazy"
                />
              </CardImageFrame>
              <CardBody>
                <CardTopRow>
                  {study.logo ? <img src={study.logo} alt={study.logoAlt} /> : <CardName>{study.logoAlt}</CardName>}
                  <CardChip>{study.tag}</CardChip>
                </CardTopRow>
                <CardTitle>{study.title}</CardTitle>
                <CardText>{study.description}</CardText>
                <CardCta>
                  Read case study <span aria-hidden="true">→</span>
                </CardCta>
              </CardBody>
            </CardLink>
          ))}
        </Grid>
        {relatedService && (
          <RelatedService>
            This project drew on our <Link to={`/services/${relatedService.slug}`}>{relatedService.label}</Link> service.
          </RelatedService>
        )}
      </Shell>
    </MoreSection>
  );
};

export default MoreCaseStudies;
