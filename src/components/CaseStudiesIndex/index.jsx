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

  // What's actually rendered, as distinct from visibleCaseStudies (what the
  // current filters say *should* be shown). A card leaving the filtered set
  // stays in this list — and mounted — until its exit tween finishes; see
  // the two effects below. Starts equal to the (unfiltered) initial
  // visibleCaseStudies.
  const [displayedStudies, setDisplayedStudies] = useState(caseStudies);
  // Bumped only when a *new* filter change captures a pending Flip — not
  // when displayedStudies later shrinks because a leaving card's own fade
  // finished. The layout effect keys on this instead of displayedStudies
  // directly: that shrink is itself a displayedStudies update, and if the
  // effect re-ran on every displayedStudies change, that self-triggered
  // re-run would kill the *staying* cards' Flip animation mid-flight the
  // moment the leaving cards finished fading (confirmed via logging — the
  // reposition tween was being interrupted at ~350ms of its 500ms duration).
  const [flipTrigger, setFlipTrigger] = useState(0);
  // Set by the filter-diff effect when a Flip-worthy change happened; read
  // and cleared by the layout effect once the union has painted.
  const pendingFlipStateRef = useRef(null);
  // Old (pre-union) rect, relative to the grid, for each card that's leaving
  // — captured alongside pendingFlipStateRef so the layout effect can pull
  // each one out of grid flow at exactly the spot it used to occupy.
  const pendingLeavingRectsRef = useRef(null);
  // The in-flight leaving-cards tween, if any — killed before starting a new
  // one so a filter change mid-transition can't leave two tweens fighting
  // over the same card's opacity/scale.
  const leavingTweenRef = useRef(null);

  const visibleSlugs = useMemo(
    () => new Set(visibleCaseStudies.map((study) => study.slug)),
    [visibleCaseStudies]
  );

  useEffect(() => {
    if (typeof window === "undefined" || !gridRef.current) return undefined;
    if (prefersReducedMotion()) return undefined;

    // Each card carries its own trigger, matching the design's per-element
    // reveal — one trigger on the whole grid would fire the 13 cards together
    // while most of them are still thousands of pixels below the fold. This
    // only ever runs once, for the page's first paint — filter-driven
    // changes are owned by the Flip effects below instead.
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

  // Reacts to filter changes. Flip's own state only ever covers the cards
  // that stay targeted (staying + entering) — the leaving cards are handled
  // entirely by hand below, rather than relying on Flip's targets-vs-state
  // diff to classify still-mounted-but-excluded elements as "leaving": that
  // behavior depends on internals this component shouldn't have to assume,
  // whereas capturing each leaving card's own rect and animating it directly
  // is unambiguous. Order matters here: read the old layout (getState +
  // leaving rects) before the union render below changes it.
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

    // These reads (Flip.getState, getBoundingClientRect) and the ref writes
    // below must not live inside a setState updater — React is free to
    // invoke an updater function more than once, which would capture layout
    // state twice and step on itself. Doing them here, directly in the
    // effect body, guarantees exactly one read per real filter change.
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
    // visibleCaseStudies/displayedStudies are read as of this render, same
    // as visibleSlugs — re-running on visibleSlugs alone (stable per filter
    // combo) avoids this firing on every render for an unrelated reason.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSlugs]);

  // Applies the animation once the union above has actually painted: pulls
  // each leaving card out of grid flow at its captured old spot (so the
  // staying/entering cards' Flip-computed end position is correct) and fades
  // it out directly, while Flip handles the staying/entering cards' own
  // reposition and fade-in.
  useLayoutEffect(() => {
    const state = pendingFlipStateRef.current;
    const leavingRects = pendingLeavingRectsRef.current;
    if (!state || !gridRef.current) return undefined;
    pendingFlipStateRef.current = null;
    pendingLeavingRectsRef.current = null;

    const grid = gridRef.current;
    const allCards = Array.from(grid.querySelectorAll(".cs-card"));

    // CardRoot has its own CSS transition on `transform` (for the hover
    // lift) that is active at all times, not just on :hover. Left alone, it
    // catches any transform change GSAP makes on these cards as a second,
    // CSS-driven animation riding on top of the real one — most visibly
    // when clearProps removes a still-nonzero transform at the very end
    // (confirmed by inspecting a card mid-transition: an entering card's
    // Flip-applied transform never actually animates to identity — it has
    // no "before" state to interpolate from — so clearing it abruptly was
    // exactly the kind of jump this transition rule animates on its own).
    // Suppressed for the whole transition and only handed back to CSS once
    // each card's transform is already at its final, natural value.
    gsap.set(allCards, { transition: "none" });

    // Reserve the grid's current (pre-transition) height for as long as
    // anything is still animating. Pulling leaving cards to position:
    // absolute below removes them from the grid's own layout immediately,
    // so without this the grid collapses to fit only the staying cards
    // right away — while the leaving cards are still fading out below that
    // now-shorter box — and everything after the grid (BookingFlow,
    // Footer) snaps up early, overlapping them.
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
    // A card already fading out from a previous, interrupted filter change
    // can end up captured as "leaving" again here — kill its old tween
    // first so the two don't fight over the same opacity/scale.
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
      // absolute: true leaves these cards pinned in place with inline
      // position/top/left/width/height/grid-area permanently otherwise —
      // Flip has no way to know it's safe to hand them back to the grid.
      // With every card absolutely positioned, the grid itself has no
      // in-flow content left to size itself by and collapses to ~0 height,
      // so the (still full-size) cards spill over whatever renders after
      // the grid in the DOM.
      //
      // Handed back in two steps rather than one blanket clearProps:"all":
      // first pin transform/opacity to their known-correct final values —
      // transition is still "none" here, so this is an instant, invisible
      // snap, and it sidesteps having to enumerate every property name GSAP
      // tracks internally (transform alone previously missed opacity,
      // which Flip also manipulates — that's what left a card stuck
      // invisible). Only then does clearProps:"all" sweep every inline
      // style at once (transition included) — nothing's *value* actually
      // changes in that step, so CardRoot's transition rule has nothing to
      // catch when it regains control.
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
