import styled from "styled-components";

/** Blue → purple gradient used by both the Careers ContactCTA banner and the Job Detail hero. */
export const careersGradient = "linear-gradient(135deg, #0b3ad1 0%, #1355ff 46%, #5b37c4 100%)";

/**
 * global.module.css's `* { color: #000 }` directly targets every element —
 * SVG icons using fill/stroke="currentColor" and their path/circle/rect
 * children included — which beats whatever color the element would
 * otherwise inherit from its styled-component ancestor (direct always wins
 * over inherited, regardless of specificity). This mixin restores that
 * inheritance for any wrapper whose own `color` is already set correctly.
 * Same gotcha already documented on Booking-Flow's SocialLink and the
 * homepage Hero's ScrollCueIcon/HeadlineText.
 */
export const inheritIconColor = `
  svg,
  svg * {
    color: inherit;
  }
`;

/**
 * Same gotcha as inheritIconColor, for a styled component that IS the SVG
 * itself (its class lands directly on <svg>, e.g. `styled(SomeIconComponent)`)
 * rather than a wrapper around one — the element itself needs `color`
 * restored, not just descendants reached via a `svg` selector.
 */
export const inheritSelfIconColor = `
  color: inherit;

  * {
    color: inherit;
  }
`;

/**
 * Bare inline glyph (an arrow, a breadcrumb separator) that must inherit its
 * parent's color instead of being hit by the reset above. `display: inline-block`
 * + the transform transition matter for arrow usages — a hover nudge on the
 * glyph alone, not the whole link — but are inert (no-op) elsewhere.
 */
export const Glyph = styled.span`
  display: inline-block;
  color: inherit;
  transition: transform 0.25s;
`;
