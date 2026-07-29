import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "gatsby";
import {
  SmallTxt,
  Header,
  Left,
  HeaderText,
  DescriptionText,
  CaseStudiesGrid,
  CaseStudyCardLink,
  CaseStudyImgWrapper,
  LogoAndTagWrapper,
  CompanyLogo,
  CaseStudyTitle,
  CaseStudyDescription,
  CaseStudyTag,
  ButtonRow,
  ViewMoreButtonLink,
  CategoryTabs,
  CategoryTab,
  EmptyCategoryMessage,
} from "./index.styled";
import CollaboratedWith from "./Collaborated-With";
import * as containerStyles from "../../../styles/global.module.css";
import { caseStudies } from "./caseStudies";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../../../utils/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = [
  { slug: "all", label: "All" },
  { slug: "fintech", label: "FinTech" },
  { slug: "saas-software", label: "SaaS Software" },
  { slug: "contech", label: "ConTech" },
];

const getInitialCategory = () => {
  if (typeof window === "undefined") return "all";
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("category");
  return CATEGORIES.some((c) => c.slug === requested) ? requested : "all";
};

/**
 * @param {{ landing?: boolean; titleAs?: "h1" | "h2" }} props
 */
const CaseStudy = ({ landing = false, titleAs = "h2" }) => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(landing ? "all" : getInitialCategory);

  const visibleCaseStudies = useMemo(() => {
    if (landing) return caseStudies.slice(0, 4);
    if (activeCategory === "all") return caseStudies;
    return caseStudies.filter((study) => study.category === activeCategory);
  }, [landing, activeCategory]);

  const handleCategoryClick = (slug) => {
    setActiveCategory(slug);
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (slug === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", slug);
    }
    window.history.replaceState({}, "", url);
  };

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
          <HeaderText as={titleAs}>Our Case Studies</HeaderText>
          <DescriptionText>
            Problems are guidelines, not 'Stop' signs. Check our success stories in custom software.
          </DescriptionText>
        </Left>
      </Header>

      {!landing && <CollaboratedWith />}

      {!landing && (
        <CategoryTabs role="group" aria-label="Filter case studies by category">
          {CATEGORIES.map((category) => (
            <CategoryTab
              key={category.slug}
              type="button"
              $active={activeCategory === category.slug}
              aria-pressed={activeCategory === category.slug}
              onClick={() => handleCategoryClick(category.slug)}
            >
              {category.label}
            </CategoryTab>
          ))}
        </CategoryTabs>
      )}

      {!landing && visibleCaseStudies.length === 0 && (
        <EmptyCategoryMessage>
          No case studies in this category yet — check back soon.
        </EmptyCategoryMessage>
      )}

      <CaseStudiesGrid className="cs-grid">
        {visibleCaseStudies.map((study, index) => {
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

      {landing && (
        <ButtonRow>
          <ViewMoreButtonLink to="/case-studies">
            View More Case Studies
          </ViewMoreButtonLink>
        </ButtonRow>
      )}
    </section>
  );
};

export default CaseStudy;
