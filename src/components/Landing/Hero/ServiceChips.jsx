import React from "react";
import { SERVICE_NAV_GROUPS } from "../../../constants/serviceNavGroups";
import { ChipRow, Chip, ChipLabel, ChipArrow } from "./index.styled";

const FEATURED_SERVICE_SLUGS = [
  "ai-discovery-strategy-roadmap",
  "ai-mvp-development",
  "ai-agents-workflows",
  "ai-automation",
];

export const FEATURED_SERVICE_COUNT = FEATURED_SERVICE_SLUGS.length;

const featuredServices = FEATURED_SERVICE_SLUGS.map((slug) =>
  SERVICE_NAV_GROUPS.flatMap((category) => category.items).find((service) => service.slug === slug)
).filter(Boolean);

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
