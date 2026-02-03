import React, { useMemo } from "react";
import { caseStudies } from "../../../Landing/Case-Study/caseStudies";

import {
  Section,
  Container,
  HeadingRow,
  DividerLine,
  Heading,
  CardsGrid,
  CardLink,
  CaseStudyImgWrapper,
  LogoAndTagWrapper,
  CompanyLogo,
  CaseStudyTag,
  CaseStudyTitle,
  CaseStudyDescription,
  ButtonRow,
  ViewMoreButtonLink,
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
            return (
              <CardLink
                key={study.slug}
                to={`/case-studies/${study.slug}`}
              >
                <CaseStudyImgWrapper>
                  <img 
                    src={study.dashboardImg} 
                    alt={`${study.logoAlt} dashboard preview`}
                    width={500}
                    height={300}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </CaseStudyImgWrapper>
                <LogoAndTagWrapper>
                  <CompanyLogo src={study.logo} alt={study.logoAlt} width={40} height={40} />
                  <CaseStudyTag>{study.tag}</CaseStudyTag>
                </LogoAndTagWrapper>
                <CaseStudyTitle>{study.title}</CaseStudyTitle>
                <CaseStudyDescription>{study.description}</CaseStudyDescription>
              </CardLink>
            );
          })}
        </CardsGrid>

        <ButtonRow>
          <ViewMoreButtonLink to="/case-studies">
            View More Case Studies
          </ViewMoreButtonLink>
        </ButtonRow>
      </Container>
    </Section>
  );
};

export default MoreCaseStudies;
