import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CollaboratedWith from "./CollaboratedWith";
import FilterDropdown from "./FilterDropdown";
import {
  Shell,
  HeroSection,
  HeroInner,
  Eyebrow,
  HeroTitle,
  HeroIntro,
  WorkSection,
  VisuallyHiddenHeading,
  FilterRow,
  ClearAllButton,
  Grid,
  GridCard,
  EmptyMessage,
} from "./index.styled";
import { caseStudies } from "../Landing/Case-Study/caseStudies";
import {
  CASE_STUDY_INDUSTRIES,
  CASE_STUDY_SERVICES,
} from "../../constants/caseStudyFilters";
import { prefersReducedMotion } from "../../utils/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INDUSTRY = "industry";
const SERVICE = "service";

const toggleValue = (list, value) =>
  list.includes(value) ? list.filter((item) => item !== value) : [...list, value];

const CaseStudiesIndex = () => {
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [openFilter, setOpenFilter] = useState(null);
  const gridRef = useRef(null);

  // An empty facet means "any". Within a facet the values union; the two
  // facets intersect.
  const visibleCaseStudies = useMemo(
    () =>
      caseStudies.filter((study) => {
        const industryMatches =
          !selectedIndustries.length || selectedIndustries.includes(study.industry);
        const serviceMatches =
          !selectedServices.length ||
          selectedServices.some((service) => (study.services || []).includes(service));
        return industryMatches && serviceMatches;
      }),
    [selectedIndustries, selectedServices]
  );

  const hasFilters = selectedIndustries.length > 0 || selectedServices.length > 0;
  const closeFilters = useCallback(() => setOpenFilter(null), []);

  const clearAll = () => {
    setSelectedIndustries([]);
    setSelectedServices([]);
    closeFilters();
  };

  // Keyed on what is currently rendered so the reveal re-runs after filtering;
  // ctx.revert() kills the previous tweens and their ScrollTriggers first.
  const visibleKey = visibleCaseStudies.map((study) => study.slug).join("|");

  useEffect(() => {
    if (typeof window === "undefined" || !gridRef.current) return undefined;
    if (prefersReducedMotion()) return undefined;

    // Each card carries its own trigger, matching the design's per-element
    // reveal — one trigger on the whole grid would fire the 13 cards together
    // while most of them are still thousands of pixels below the fold.
    const ctx = gsap.context((self) => {
      self.selector(".cs-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power1.out",
            scrollTrigger: { trigger: card, start: "top 92%" },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, [visibleKey]);

  return (
    <>
      <HeroSection>
        <Shell>
          <HeroInner>
            <Eyebrow>Case studies</Eyebrow>
            <HeroTitle>
              Our Case <span>Studies</span>
            </HeroTitle>
            <HeroIntro>
              Problems are guidelines, not &apos;Stop&apos; signs. Check our success
              stories in custom software.
            </HeroIntro>
          </HeroInner>
        </Shell>
      </HeroSection>

      <CollaboratedWith />

      <WorkSection aria-labelledby="cases-h">
        <Shell>
          <VisuallyHiddenHeading id="cases-h">All case studies</VisuallyHiddenHeading>

          <FilterRow role="group" aria-label="Filter case studies">
            <FilterDropdown
              label="Industry"
              options={CASE_STUDY_INDUSTRIES}
              selected={selectedIndustries}
              open={openFilter === INDUSTRY}
              onToggleOpen={() =>
                setOpenFilter((current) => (current === INDUSTRY ? null : INDUSTRY))
              }
              onClose={closeFilters}
              onToggleOption={(value) =>
                setSelectedIndustries((current) => toggleValue(current, value))
              }
              onClear={() => {
                setSelectedIndustries([]);
                closeFilters();
              }}
            />
            <FilterDropdown
              label="Service"
              options={CASE_STUDY_SERVICES}
              selected={selectedServices}
              open={openFilter === SERVICE}
              onToggleOpen={() =>
                setOpenFilter((current) => (current === SERVICE ? null : SERVICE))
              }
              onClose={closeFilters}
              onToggleOption={(value) =>
                setSelectedServices((current) => toggleValue(current, value))
              }
              onClear={() => {
                setSelectedServices([]);
                closeFilters();
              }}
            />
            {hasFilters && (
              <ClearAllButton type="button" onClick={clearAll}>
                <svg
                  viewBox="0 0 16 16"
                  width="13"
                  height="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
                Clear filters
              </ClearAllButton>
            )}
          </FilterRow>

          {visibleCaseStudies.length > 0 ? (
            <Grid ref={gridRef}>
              {visibleCaseStudies.map((study) => (
                <GridCard key={study.slug} study={study} className="cs-card" />
              ))}
            </Grid>
          ) : (
            <EmptyMessage>
              No case studies in this category yet.{" "}
              <a href="#contact">Tell us what you are looking for.</a>
            </EmptyMessage>
          )}
        </Shell>
      </WorkSection>
    </>
  );
};

export default CaseStudiesIndex;
