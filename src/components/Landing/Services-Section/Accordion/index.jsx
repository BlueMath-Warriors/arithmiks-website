import React, { useState } from "react";
import { SERVICE_NAV_GROUPS } from "../../../../constants/serviceNavGroups";
import {
  Section,
  Shell,
  Eyebrow,
  Heading,
  Row,
  Panel,
  PanelClosed,
  PanelIcon,
  PanelLabel,
  PanelCount,
  PanelOpen,
  PanelOpenTop,
  FlagshipBadge,
  PanelBlurb,
  PanelItems,
  PanelItemLink,
  ItemArrow,
} from "./index.styled";

const isDesktop = () =>
  typeof window !== "undefined" && window.matchMedia("(min-width: 1151px)").matches;

// Icon paths and blurb copy ported verbatim from the source design's
// PANELS/SVC_GROUPS data, keyed by the matching SERVICE_NAV_GROUPS slug.
const PANEL_META = {
  "ai-engineering-data": {
    icon: "M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 5c0 1.7 3.6 3 8 3s8-1.3 8-3M4 17c0 1.7 3.6 3 8 3s8-1.3 8-3M4 7v10m16-10v10",
    blurb: "Readiness audit through to a production pipeline your team owns.",
    flagship: true,
  },
  "software-development": {
    icon: "M9 7 5 11l4 4M15 7l4 4-4 4",
    blurb: "Web, mobile and custom builds, shipped by senior engineers.",
    flagship: false,
  },
  solutions: {
    icon: "M12 4 4 8l8 4 8-4-8-4Zm-8 8 8 4 8-4",
    blurb: "Cloud, commerce and intelligence that plug into what you run.",
    flagship: false,
  },
  "product-engineering": {
    icon: "M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 5.7a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z",
    blurb: "Discovery through modernisation, for products that keep evolving.",
    flagship: false,
  },
};

const CategoryIcon = ({ path }) => (
  <svg
    viewBox="0 0 24 24"
    width="60%"
    height="60%"
    fill="none"
    stroke="#1355FF"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
);

const Accordion = () => {
  const [active, setActive] = useState(0);

  const activate = (index) => setActive(index);

  return (
    <Section id="services" aria-labelledby="svc-h">
      <Shell>
        <Eyebrow>What we do</Eyebrow>
        <Heading id="svc-h">
          Everything you need to design, build, and ship with <span>AI</span>
        </Heading>
        <Row>
          {SERVICE_NAV_GROUPS.map((category, index) => {
            const open = index === active;
            const meta = PANEL_META[category.slug];
            return (
              <Panel
                key={category.slug}
                type="button"
                $open={open}
                aria-expanded={open}
                onMouseEnter={() => isDesktop() && activate(index)}
                onFocus={() => activate(index)}
                onClick={() => !isDesktop() && activate(open ? active : index)}
              >
                <PanelClosed $visible={!open}>
                  <PanelIcon>
                    <CategoryIcon path={meta.icon} />
                  </PanelIcon>
                  <PanelLabel>{category.title}</PanelLabel>
                  <PanelCount>{category.items.length} services</PanelCount>
                </PanelClosed>
                <PanelOpen $visible={open} aria-hidden={!open}>
                  <PanelOpenTop>
                    <PanelIcon $open>
                      <CategoryIcon path={meta.icon} />
                    </PanelIcon>
                    {meta.flagship && <FlagshipBadge>Flagship</FlagshipBadge>}
                  </PanelOpenTop>
                  <h3>{category.title}</h3>
                  <PanelBlurb>{meta.blurb}</PanelBlurb>
                  <PanelItems>
                    {category.items.map((svc) =>
                      svc.hasPage ? (
                        <PanelItemLink key={svc.slug} to={svc.url}>
                          <ItemArrow aria-hidden="true">→</ItemArrow>
                          {svc.label}
                        </PanelItemLink>
                      ) : (
                        <PanelItemLink key={svc.slug} as="a" href="#">
                          <ItemArrow aria-hidden="true">→</ItemArrow>
                          {svc.label}
                        </PanelItemLink>
                      )
                    )}
                  </PanelItems>
                </PanelOpen>
              </Panel>
            );
          })}
        </Row>
      </Shell>
    </Section>
  );
};

export default Accordion;
