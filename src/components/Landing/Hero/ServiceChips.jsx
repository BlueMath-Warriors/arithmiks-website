import React from "react";
import { getServiceBySlug, servicePath } from "../../../constants/serviceRoutes";
import { ChipRow, Chip, ChipLabel, ChipArrow } from "./index.styled";

const FEATURED_SERVICE_SLUGS = [
  "ai-discovery-strategy-roadmap",
  "ai-mvp-development",
  "ai-agents-workflows",
  "ai-automation",
];

export const FEATURED_SERVICE_COUNT = FEATURED_SERVICE_SLUGS.length;

// Resolved from the routes rather than the nav: two of these are live pages
// the V2 nav no longer lists, but the hero still features them.
const featuredServices = FEATURED_SERVICE_SLUGS.map(getServiceBySlug)
  .filter(Boolean)
  .map((route) => ({ slug: route.slug, label: route.label, url: servicePath(route.slug) }));

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
