import React, { useEffect, useRef } from "react";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../../../utils/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CaseStudy = ({ landing = false }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cs-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".cs-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".cs-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={containerStyles.case_study} ref={sectionRef}>
      <Header className="cs-header">
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

      <CaseStudiesGrid className="cs-grid">
        {(landing ? caseStudies.slice(0, 3) : caseStudies).map((study, index) => {
          if (study.hasDetailPage) {
            return (
              <CaseStudyCardLink
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                className="cs-card"
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
              className="cs-card"
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
