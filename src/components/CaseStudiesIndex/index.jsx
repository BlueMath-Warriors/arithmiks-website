import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
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
  PillsGroup,
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
  gsap.registerPlugin(ScrollTrigger, Flip);
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


  const [displayedStudies, setDisplayedStudies] = useState(caseStudies);
  const [flipTrigger, setFlipTrigger] = useState(0);
  const pendingFlipStateRef = useRef(null);
  const pendingLeavingRectsRef = useRef(null);
  const leavingTweenRef = useRef(null);

  const visibleSlugs = useMemo(
    () => new Set(visibleCaseStudies.map((study) => study.slug)),
    [visibleCaseStudies]
  );

  useEffect(() => {
    if (typeof window === "undefined" || !gridRef.current) return undefined;
    if (prefersReducedMotion()) return undefined;

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
            // Otherwise the reveal leaves an inline transform on the card, which
            // outranks the styled-component's `:hover` rule and permanently kills
            // the hover lift once the card has scrolled into view.
            onComplete: () => gsap.set(card, { clearProps: "transform" }),
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const currentSlugs = new Set(displayedStudies.map((study) => study.slug));
    const sameSet =
      displayedStudies.length === visibleSlugs.size &&
      displayedStudies.every((study) => visibleSlugs.has(study.slug));
    if (sameSet) return;

    if (typeof window === "undefined" || !gridRef.current || prefersReducedMotion()) {
      setDisplayedStudies(visibleCaseStudies);
      return;
    }

    const grid = gridRef.current;
    const cards = Array.from(grid.querySelectorAll(".cs-card"));
    const stayingOrEntering = cards.filter((el) => visibleSlugs.has(el.dataset.slug));
    pendingFlipStateRef.current = Flip.getState(stayingOrEntering);

    const gridRect = grid.getBoundingClientRect();
    const leavingRects = new Map();
    cards
      .filter((el) => !visibleSlugs.has(el.dataset.slug))
      .forEach((el) => {
        const rect = el.getBoundingClientRect();
        leavingRects.set(el.dataset.slug, {
          top: rect.top - gridRect.top,
          left: rect.left - gridRect.left,
          width: rect.width,
          height: rect.height,
        });
      });
    pendingLeavingRectsRef.current = leavingRects;

    const entering = visibleCaseStudies.filter((study) => !currentSlugs.has(study.slug));
    setDisplayedStudies([...displayedStudies, ...entering]);
    setFlipTrigger((t) => t + 1);
  }, [visibleSlugs]);


  useLayoutEffect(() => {
    const state = pendingFlipStateRef.current;
    const leavingRects = pendingLeavingRectsRef.current;
    if (!state || !gridRef.current) return undefined;
    pendingFlipStateRef.current = null;
    pendingLeavingRectsRef.current = null;

    const grid = gridRef.current;
    const allCards = Array.from(grid.querySelectorAll(".cs-card"));

    gsap.set(allCards, { transition: "none" });
    gsap.set(grid, { minHeight: grid.getBoundingClientRect().height });
    let pendingCompletions = 0;
    const onOneComplete = () => {
      pendingCompletions -= 1;
      if (pendingCompletions <= 0) gsap.set(grid, { clearProps: "minHeight" });
    };

    const leavingElements = Array.from(grid.querySelectorAll(".cs-card")).filter((el) =>
      leavingRects.has(el.dataset.slug)
    );
    leavingElements.forEach((el) => {
      const rect = leavingRects.get(el.dataset.slug);
      gsap.set(el, { position: "absolute", ...rect, margin: 0 });
    });

    leavingTweenRef.current?.kill();
    if (leavingElements.length) {
      pendingCompletions += 1;
      leavingTweenRef.current = gsap.to(leavingElements, {
        opacity: 0,
        scale: 0.85,
        duration: 0.22,
        ease: "power1.in",
        onComplete: () => {
          setDisplayedStudies((current) =>
            current.filter((study) => visibleSlugs.has(study.slug))
          );
          onOneComplete();
        },
      });
    }

    const targets = Array.from(grid.querySelectorAll(".cs-card")).filter((el) =>
      visibleSlugs.has(el.dataset.slug)
    );
    pendingCompletions += 1;
    const flip = Flip.from(state, {
      targets,
      duration: 0.5,
      ease: "power2.inOut",
      absolute: true,
      scale: true,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.25, ease: "power1.out" }
        ),

      onComplete: () => {
        gsap.set(targets, { transform: "none", opacity: 1 });
        gsap.set(targets, { clearProps: "all" });
        onOneComplete();
      },
    });

    return () => {
      flip.kill();
      leavingTweenRef.current?.kill();
    };
    // Deliberately keyed on flipTrigger alone, not displayedStudies/visibleSlugs
    // — see flipTrigger's own comment above for why.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flipTrigger]);

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
            <PillsGroup>
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
            </PillsGroup>
          </FilterRow>

          {displayedStudies.length > 0 ? (
            <Grid ref={gridRef}>
              {displayedStudies.map((study) => (
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
