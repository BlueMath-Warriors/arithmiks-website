import React from "react";
import { Link } from "gatsby";
import {
  SmallTxt,
  Header,
  Left,
  Right,
  HeaderText,
  DescriptionText,
  ViewButtonLink,
  BtnIcon,
  CaseStudiesGrid,
  CaseStudyCardLink,
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
          <ViewButtonLink to="/case-studies">
            {"View All"}
            <ArrowCricleRight />
          </ViewButtonLink>
        </Right>
      </Header>

      {!landing && <CollaboratedWith />}

      <CaseStudiesGrid>
        {(landing ? caseStudies.slice(0, 3) : caseStudies).map((study, index) => {
          if (study.hasDetailPage) {
            return (
              <CaseStudyCardLink
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
              </CaseStudyCardLink>
            );
          }
          
          return (
            <div
              key={study.slug}
              style={{ cursor: 'default' }}
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
            </div>
          );
        })}
      </CaseStudiesGrid>
    </section>
  );
};

export default CaseStudy;
