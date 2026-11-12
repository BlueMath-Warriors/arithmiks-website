import styled, { css } from "styled-components";
import { colors } from "../../../styles/tokens";

// The design's only use of this grey; every other muted tone on the page is a
// token. Kept local rather than widening the palette for one link.
const linkGrey = "#8A93A6";

const base = css`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  color: ${linkGrey};
  transition: color 0.3s ease;

  /* The site colours spans globally; the label follows the link instead. Only
     the direct child, so the "AI agent?" prefix inside keeps its own tone. */
  > span {
    color: inherit;
  }

  &:hover,
  &:focus-visible {
    color: ${colors.primary};
  }
`;

/** In the chapter bar: pushed to the far right of the link row. */
export const BarLink = styled.a`
  ${base}
  flex: none;
  margin-left: auto;
  padding: 16px 0 14px 16px;
  white-space: nowrap;

  /* Below this the centred variant in the hero takes over; between 701px and
     1140px the design shows neither, so the bar simply has no link. */
  @media (max-width: 1140px) {
    display: none;
  }
`;

/** Centred under the hero on phones, where the chapter bar has no room. */
export const MobileLink = styled.a`
  ${base}
  text-align: center;
`;

export const Prefix = styled.span`
  color: ${colors.textFaint};
  margin-right: 0.35em;
`;
