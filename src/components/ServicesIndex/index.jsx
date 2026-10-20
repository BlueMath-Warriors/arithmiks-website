import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Hero from "./Hero";
import JumpRail from "./JumpRail";
import CapabilityRow from "./CapabilityRow";
import TrustedBy from "./TrustedBy";
import SelectedWork from "./SelectedWork";
import {
  Page,
  Shell,
  CapabilitiesSection,
  CapHead,
  CapHeadTitle,
  CapHeadRule,
  CapHeadHint,
  CapSplit,
  CapColumn,
  GroupSection,
  GroupSpine,
} from "./index.styled";
import {
  SERVICE_CATEGORIES,
  SERVICE_CAPABILITY_COUNT,
} from "../../constants/serviceCategories";
import { caseStudies } from "../Landing/Case-Study/caseStudies";

// The design activates the group whose box straddles a line 34% down the
// viewport, which keeps the highlight stable while a long group scrolls past.
const SPY_LINE_RATIO = 0.34;

const CASE_STUDY_BY_SLUG = new Map(caseStudies.map((study) => [study.slug, study]));

const ServicesIndex = () => {
  const [activeSlug, setActiveSlug] = useState(SERVICE_CATEGORIES[0].slug);
  const [openCapability, setOpenCapability] = useState(null);
  const groupRefs = useRef(new Map());

  // Running 01..18 across all four groups, matching the design's numbering.
  const numberBySlug = useMemo(() => {
    const map = new Map();
    let n = 0;
    SERVICE_CATEGORIES.forEach((group) => {
      group.items.forEach((item) => {
        n += 1;
        map.set(item.slug, String(n).padStart(2, "0"));
      });
    });
    return map;
  }, []);

  const registerGroup = useCallback((slug, node) => {
    if (node) groupRefs.current.set(slug, node);
    else groupRefs.current.delete(slug);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const line = window.innerHeight * SPY_LINE_RATIO;
      let next = null;

      SERVICE_CATEGORIES.forEach((group) => {
        const node = groupRefs.current.get(group.slug);
        if (!node) return;
        const rect = node.getBoundingClientRect();
        if (rect.top <= line && rect.bottom > line) next = group.slug;
      });

      if (!next) {
        // Above the first group, or past the last one — clamp to whichever end.
        const first = groupRefs.current.get(SERVICE_CATEGORIES[0].slug);
        const last = SERVICE_CATEGORIES[SERVICE_CATEGORIES.length - 1].slug;
        next =
          first && first.getBoundingClientRect().top > line
            ? SERVICE_CATEGORIES[0].slug
            : last;
      }

      setActiveSlug((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    measure();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Page>
      <Hero groups={SERVICE_CATEGORIES} capabilityCount={SERVICE_CAPABILITY_COUNT} />

      <CapabilitiesSection id="capabilities">
        <Shell>
          <CapHead>
            <CapHeadTitle>CAPABILITIES</CapHeadTitle>
            <CapHeadRule aria-hidden="true" />
            <CapHeadHint>Open any row for detail, or go straight to its page</CapHeadHint>
          </CapHead>
        </Shell>

        <Shell>
          <CapSplit>
            <JumpRail groups={SERVICE_CATEGORIES} activeSlug={activeSlug} />

            <CapColumn>
              {SERVICE_CATEGORIES.map((group) => (
                <GroupSection
                  key={group.slug}
                  id={group.slug}
                  aria-label={group.title}
                  ref={(node) => registerGroup(group.slug, node)}
                >
                  <GroupSpine aria-hidden="true" $active={group.slug === activeSlug} />

                  {group.items.map((capability) => {
                    const related = CASE_STUDY_BY_SLUG.get(capability.relatedCaseStudy);
                    return (
                      <CapabilityRow
                        key={capability.slug}
                        capability={capability}
                        number={numberBySlug.get(capability.slug)}
                        open={openCapability === capability.slug}
                        activeGroup={group.slug === activeSlug}
                        onToggle={() =>
                          setOpenCapability((current) =>
                            current === capability.slug ? null : capability.slug
                          )
                        }
                        relatedCaseStudy={
                          related ? { slug: related.slug, label: related.logoAlt } : null
                        }
                      />
                    );
                  })}
                </GroupSection>
              ))}
            </CapColumn>
          </CapSplit>
        </Shell>
      </CapabilitiesSection>

      <TrustedBy />
      <SelectedWork />
    </Page>
  );
};

export default ServicesIndex;
