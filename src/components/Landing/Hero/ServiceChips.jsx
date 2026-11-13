import React from "react";
import { getServiceBySlug, servicePath } from "../../../constants/serviceRoutes";
import { ChipRow, Chip, ChipLabel, ChipArrow } from "./index.styled";

// The hero's own short names, as Homepage V2 sets them: they stay fixed even
// where the page they open carries a different name. "AI Automation" opens
// One-Problem Automation, the service that now delivers it (a product decision);
// the older /services/ai-automation page stays live, just not featured here.
const FEATURED_SERVICES = [
  { slug: "ai-discovery-strategy-roadmap", label: "AI Discovery, Strategy & Roadmap" },
  { slug: "ai-mvp-development", label: "AI MVP Development" },
  { slug: "ai-agents-workflows", label: "AI Agents & Workflows" },
  { slug: "one-problem-automation", label: "AI Automation" },
];

export const FEATURED_SERVICE_COUNT = FEATURED_SERVICES.length;

// Resolved against the routes rather than the nav, so a chip only renders for
// a page that exists.
const featuredServices = FEATURED_SERVICES.filter(({ slug }) => getServiceBySlug(slug)).map(
  ({ slug, label }) => ({ slug, label, url: servicePath(slug) })
);

/**
 * Direct links to the hero's best-selling AI services.
 * @param {{ spotlightIndex: number }} props index of the chip to softly highlight
 */
const ServiceChips = ({ spotlightIndex }) => (
  <ChipRow aria-label="Popular services">
    {featuredServices.map((service, index) => (
      <li key={service.slug}>
        <Chip to={service.url} $spotlight={index === spotlightIndex}>
          <ChipLabel>{service.label}</ChipLabel>
          <ChipArrow aria-hidden="true">→</ChipArrow>
        </Chip>
      </li>
    ))}
  </ChipRow>
);

export default ServiceChips;
