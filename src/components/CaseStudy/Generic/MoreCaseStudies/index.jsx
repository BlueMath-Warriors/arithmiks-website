import React, { useMemo } from "react";
import { navigate } from "gatsby";
import { caseStudies } from "../../../Landing/Case-Study/caseStudies";

import {
  Section,
  Container,
  HeadingRow,
  DividerLine,
  Heading,
  CardsGrid,
  Card,
  CaseStudyImgWrapper,
  LogoAndTagWrapper,
  CompanyLogo,
  CaseStudyTag,
  CaseStudyTitle,
  CaseStudyDescription,
  ButtonRow,
  ViewMoreButton,
} from "./index.styled";

const getNextTwoCaseStudies = (currentSlug) => {
  const detailCaseStudies = (caseStudies || []).filter((s) => s.hasDetailPage);
  const len = detailCaseStudies.length;

  if (len === 0) return [];
  if (len <= 2) return detailCaseStudies.filter((s) => s.slug !== currentSlug);

  const currentIndex = detailCaseStudies.findIndex((s) => s.slug === currentSlug);
  if (currentIndex === -1) return detailCaseStudies.slice(0, 2);

  const first = detailCaseStudies[(currentIndex + 1) % len];
  const second = detailCaseStudies[(currentIndex + 2) % len];
  const nextTwo = [first, second].filter((s) => s.slug !== currentSlug);

  if (nextTwo.length === 2) return nextTwo;
  return detailCaseStudies.filter((s) => s.slug !== currentSlug).slice(0, 2);
};

const MoreCaseStudies = ({ currentSlug }) => {
  const nextTwo = useMemo(() => getNextTwoCaseStudies(currentSlug), [currentSlug]);

  if (!nextTwo || nextTwo.length === 0) return null;

  return (
    <Section>
      <Container>
        <HeadingRow>
          <DividerLine />
          <Heading>MORE CASE STUDIES</Heading>
          <DividerLine />
        </HeadingRow>

        <CardsGrid>
          {nextTwo.map((study) => {
            const DashboardImg = study.dashboardImg;
            return (
              <Card
                key={study.slug}
                onClick={() => navigate(`/case-studies/${study.slug}`)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(`/case-studies/${study.slug}`);
                  }
                }}
              >
                <CaseStudyImgWrapper>
                  <DashboardImg />
                </CaseStudyImgWrapper>
                <LogoAndTagWrapper>
                  <CompanyLogo src={study.logo} alt={study.logoAlt} />
                  <CaseStudyTag>{study.tag}</CaseStudyTag>
                </LogoAndTagWrapper>
                <CaseStudyTitle>{study.title}</CaseStudyTitle>
                <CaseStudyDescription>{study.description}</CaseStudyDescription>
              </Card>
            );
          })}
        </CardsGrid>

        <ButtonRow>
          <ViewMoreButton onClick={() => navigate("/case-studies")}>
            View More Case Studies
          </ViewMoreButton>
        </ButtonRow>
      </Container>
    </Section>
  );
};

export default MoreCaseStudies;
