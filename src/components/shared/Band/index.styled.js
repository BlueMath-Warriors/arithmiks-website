/**
 * Primitives shared by the service-page and tool-page designs (the "band"
 * family): full-width bands with a 104px rhythm, a centred shell, eyebrows,
 * section titles with a gradient run, and the pill buttons.
 */
import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";
import { brandGradient, brandGradientOnDark } from "../Section/index.styled";

export const Page = styled.div`
  /* Anchor jumps clear the fixed header plus the pinned chapter bar; the
     page measures both and writes the sum into --chrome-offset. */
  section[id] {
    scroll-margin-top: var(--chrome-offset, 140px);
  }
`;

// The design's [data-shell] for this page family: wider gutters step in at
// 960px and 640px (the homepage family steps at 900/640/420 instead).
export const BandShell = styled.div`
  position: relative;
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};

  @media (max-width: 960px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: 640px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

// Vertical rhythm of every full-width band ([data-band]).
export const bandPadding = `
  padding-top: 104px;
  padding-bottom: 104px;

  @media (max-width: 640px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

// The short gradient rule in front of a hero eyebrow.
export const EyebrowBar = styled.span`
  flex: none;
  width: 3px;
  height: 19px;
  border-radius: 2px;
  background: linear-gradient(180deg, #5c8cff 0%, #1355ff 45%, #a96fc8 100%);
`;

const EYEBROW_TONES = {
  onBlue: "rgba(255,255,255,.78)",
  onDark: "#8FA9FF",
};

export const Eyebrow = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $tone }) => EYEBROW_TONES[$tone] || colors.primary};
  margin-bottom: ${({ $gap }) => $gap || "22px"};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: clamp(30px, 3.6vw, 52px);
  font-weight: 550;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ $onDark }) => ($onDark ? "#fff" : colors.text)};
  /* Only some band titles balance their lines in the design. */
  text-wrap: ${({ $balance }) => ($balance ? "balance" : "wrap")};
`;

// global.module.css forces `color: #000` on every element, so the fallback
// colour matters wherever background-clip:text is unsupported.
export const Grad = styled.span`
  font-weight: 750;
  letter-spacing: -0.02em;
  background: ${({ $onDark }) => ($onDark ? brandGradientOnDark : brandGradient)};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${({ $onDark }) => ($onDark ? "#9E9BE8" : colors.primary)};

  ${({ $keepAbove }) =>
    $keepAbove &&
    `
    @media (min-width: ${$keepAbove + 1}px) {
      white-space: nowrap;
    }
  `}
`;

// A heading run kept on one line above a width, where balanced wrapping would
// otherwise split a short phrase.
// Without an `above` width it simply never wraps.
export const KeepLine = styled.span`
  color: inherit;

  ${({ $above }) =>
    $above
      ? `
    @media (min-width: ${$above + 1}px) {
      white-space: nowrap;
    }
  `
      : "white-space: nowrap;"}
`;

export const Lead = styled.p`
  margin-top: 22px;
  font-size: 15.5px;
  line-height: 1.7;
  color: ${({ $onDark }) => ($onDark ? "rgba(255,255,255,.62)" : colors.textFaint)};
  text-wrap: pretty;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 100px;
  border: 1.5px solid ${colors.primary};
  background: ${colors.primary};
  color: #fff;
  font-size: 15px;
  font-weight: 550;
  white-space: nowrap;
  transition: transform 0.25s ease;

  &:hover {
    color: #fff;
    transform: translateY(-2px);
  }

  span {
    color: inherit;
  }
`;
