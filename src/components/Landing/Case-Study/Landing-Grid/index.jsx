import React from "react";
import { usePinnedCaseRail } from "../usePinnedCaseRail";
import {
  Stage,
  Pin,
  Shell,
  Header,
  Eyebrow,
  Title,
  ViewAllLink,
  View,
  Track,
  CaseCard,
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

// Matches the source's 7-card CASES list, using the real case studies this
// site already has (each card links to its own real page, not the generic
// /case-studies index the source's own placeholder data pointed at).
const LandingGrid = ({ caseStudies }) => {
  const rail = usePinnedCaseRail();
  const featured = caseStudies.slice(0, 7);

  return (
    <Stage ref={rail.stageRef} id="work">
      <Pin ref={rail.panelRef}>
        <Shell>
          <Header>
            <div>
              <Eyebrow>Case studies</Eyebrow>
              <Title>
                <span>Success stories</span> we&apos;re proud of
              </Title>
            </div>
            <ViewAllLink to="/case-studies">View all case studies</ViewAllLink>
          </Header>

          <View ref={rail.viewRef}>
            <Track ref={rail.trackRef} role="group" aria-label="Case studies carousel">
              {featured.map((study) => (
                <CaseCard key={study.slug} to={`/case-studies/${study.slug}`}>
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
                </CaseCard>
              ))}
            </Track>
          </View>
        </Shell>
      </Pin>
    </Stage>
  );
};

export default LandingGrid;
