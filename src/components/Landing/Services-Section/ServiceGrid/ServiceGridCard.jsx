import React from "react";
import {
  Card,
  CardTop,
  IconTile,
  FlagshipBadge,
  CardTitle,
  CardBlurb,
  ItemList,
  ItemLink,
  ItemArrow,
} from "./index.styled";

const CategoryIcon = ({ path }) => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="#1355FF"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={path} />
  </svg>
);

/**
 * One service group on the homepage "What we do" grid.
 * @param {{ category: (typeof import("../../../../constants/serviceNavGroups").SERVICE_NAV_GROUPS)[number] }} props
 */
const ServiceGridCard = ({ category }) => (
  <Card data-reveal="" $flagship={category.flagship}>
    <CardTop>
      <IconTile>
        <CategoryIcon path={category.icon} />
      </IconTile>
      {category.flagship && <FlagshipBadge>Flagship</FlagshipBadge>}
    </CardTop>
    <CardTitle>{category.title}</CardTitle>
    <CardBlurb>{category.blurb}</CardBlurb>
    <ItemList>
      {category.items.map((svc) => (
        <li key={svc.slug}>
          {svc.hasPage ? (
            <ItemLink to={svc.url}>
              <ItemArrow aria-hidden="true">→</ItemArrow>
              {svc.label}
            </ItemLink>
          ) : (
            <ItemLink as="a" href="#">
              <ItemArrow aria-hidden="true">→</ItemArrow>
              {svc.label}
            </ItemLink>
          )}
        </li>
      ))}
    </ItemList>
  </Card>
);

export default ServiceGridCard;
