import React, { useRef } from "react";
import { SERVICE_NAV_GROUPS } from "../../../../constants/serviceNavGroups";
import { useReveal } from "../../../../hooks/useReveal";
import ServiceGridCard from "./ServiceGridCard";
import { Section, Shell, Eyebrow, Heading, MobileBreak, Grid } from "./index.styled";

// The homepage grid puts the flagship AI group in the middle, unlike the
// nav and footer, which lead with it.
const HOMEPAGE_ORDER = ["software-development", "ai-engineering-data", "solutions"];

const homepageGroups = HOMEPAGE_ORDER.map((slug) =>
  SERVICE_NAV_GROUPS.find((group) => group.slug === slug)
).filter(Boolean);

const ServiceGrid = () => {
  const rootRef = useRef(null);
  useReveal(rootRef);

  return (
    <Section id="services" aria-labelledby="svc-h" ref={rootRef}>
      <Shell>
        <div data-reveal="">
          <Eyebrow>What we do</Eyebrow>
          <Heading id="svc-h">
            Everything you need to design, build, and ship <MobileBreak /> with <span>AI</span>
          </Heading>
        </div>
        <Grid>
          {homepageGroups.map((category) => (
            <ServiceGridCard key={category.slug} category={category} />
          ))}
        </Grid>
      </Shell>
    </Section>
  );
};

export default ServiceGrid;
