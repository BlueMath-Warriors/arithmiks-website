import React from "react";
import { navigate } from "gatsby";
import {
  SmallTxt,
  Header,
  Left,
  Right,
  HeaderText,
  DescriptionText,
  ViewButton,
  BtnIcon,
  CaseStudiesGrid,
  NewCaseStudyCard,
  CaseStudyImgWrapper,
  LogoAndTagWrapper,
  CompanyLogo,
  CaseStudyTitle,
  CaseStudyDescription,
  CaseStudyTag,
} from "./index.styled";
import CollaboratedWith from "./Collaborated-With";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowCricleRight from "../../../images/arrow-right-circle-black.svg";
import { caseStudies } from "./caseStudies";

const CaseStudy = ({ landing = false }) => {
  const handleCardClick = (slug, hasDetailPage) => {
    if (hasDetailPage) {
      navigate(`/case-studies/${slug}`);
    }
  };

  return (
    <section className={containerStyles.case_study}>
      <Header>
        <Left>
          <SmallTxt>CASE STUDIES</SmallTxt>
          <HeaderText>Our Case Studies</HeaderText>
          <DescriptionText>
            Problems are guidelines, not 'Stop' signs. Check our success stories in custom software.
          </DescriptionText>
        </Left>
        <Right show={landing}>
          <ViewButton onClick={() => navigate("/case-studies")}>
            {"View All"}
            <ArrowCricleRight />
          </ViewButton>
        </Right>
      </Header>

      {!landing && <CollaboratedWith />}

      <CaseStudiesGrid>
        {(landing ? caseStudies.slice(0, 3) : caseStudies).map((study, index) => {
          const DashboardImg = study.dashboardImg;
          return (
            <NewCaseStudyCard
              key={study.slug}
              onClick={() => handleCardClick(study.slug, study.hasDetailPage)}
              clickable={study.hasDetailPage}
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
            </NewCaseStudyCard>
          );
        })}
      </CaseStudiesGrid>
    </section>
  );
};

export default CaseStudy;
