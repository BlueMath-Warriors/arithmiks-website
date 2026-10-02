import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

const drift = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(-2%, 2%, 0) scale(1.06);
  }
`;

export const HeroSection = styled.section`
  position: relative;
  height: 100svh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(96px, 12vh, 150px) 0 0;
  background: ${colors.dark};
  overflow: hidden;

  @media (max-width: 768px) {
    padding-top: 88px;
    padding-bottom: 20px;
  }
`;

export const HeroBackground = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 32%;
`;

export const HeroGlow = styled.div`
  position: absolute;
  inset: -20% -10%;
  pointer-events: none;
  opacity: 0.9;
  background: radial-gradient(40% 44% at 14% 22%, rgba(19, 85, 255, 0.42), transparent 68%),
    radial-gradient(36% 40% at 86% 10%, rgba(11, 58, 209, 0.3), transparent 70%);
  animation: ${drift} 24s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(7, 11, 24, 0.72) 0%,
    rgba(7, 11, 24, 0.8) 42%,
    rgba(7, 11, 24, 0.93) 100%
  );
`;

export const HeroShell = styled.div`
  max-width: ${shellMaxWidth};
  position: relative;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding} clamp(18px, 3vh, 34px);
`;

// A flexible region filling all the space above ScrollCueRow/TrustedLabel/
// Marquee (whose heights are fixed by their own content), so HeroHeadline
// centers within that space — independent of ScrollCueRow, which sits in
// normal flow right above the trusted-by row instead of inside this
// centered block.
export const HeroMain = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroHeadline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: clamp(16px, 2.4vh, 26px);
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;

  &::before {
    content: "";
    width: 3px;
    height: 19px;
    border-radius: 2px;
    background: linear-gradient(180deg, #5c8cff 0%, #1355ff 45%, #a96fc8 100%);
  }
`;

export const Headline = styled.h1`
  min-height: 1.05em;
  font-size: clamp(32px, 5.02vw, 83px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: #fff;
  max-width: 15ch;
  margin-bottom: clamp(18px, 2.4vh, 26px);

  @media (max-width: 768px) {
    max-width: 18ch;
  }
`;

// Crossfade-and-rise on slide change, matching the design's own headline
// transition (opacity + a 14px translate, 0.45s) — Hero swaps SLIDES[slide]
// at the midpoint of this transition so it reads as one continuous motion.
export const HeadlineText = styled.span`
  display: inline-block;
  // global.module.css's "* { color: #000 }" targets this span directly (not
  // just inherited), which otherwise beats Headline's color:#fff the moment
  // this wrapper element exists — same gotcha documented on Contact-Us's
  // Booking-Flow SocialLink styled component.
  color: inherit;
  transition: opacity 0.45s, transform 0.45s;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: ${(p) => (p.$visible ? "none" : "translate3d(0, 14px, 0)")};
`;

// The word "AI" gets a gradient treatment wherever it appears in a slide
// (see markAI in index.jsx) — same gradient as the testimonials heading.
export const GradientAI = styled.span`
  background: linear-gradient(100deg, #7fa6ff 0%, #9e9be8 46%, #c77fd6 72%, #f56bb0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #9e9be8;
`;

export const ChipRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: clamp(400px, 33vw, 560px);
  max-width: 100%;
  margin: calc(clamp(22px, 3.2vh, 36px) - clamp(18px, 2.4vh, 26px)) 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: 700px) {
    width: 100%;
    gap: 6px;
  }
`;

export const ChipArrow = styled.span`
  flex: none;
  font-size: 13px;
  line-height: 1;
  color: #8fa9ff;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease;
`;

const chipHover = `
  background: linear-gradient(
    100deg,
    rgba(127, 166, 255, 0.5) 0%,
    rgba(190, 150, 232, 0.44) 60%,
    rgba(245, 120, 186, 0.42) 100%
  );
  border-color: rgba(226, 208, 255, 0.6);
`;

// `$spotlight` is the chip the hero is currently pointing at; it steps along
// with each headline so the row reads as alive without anything moving.
export const Chip = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px 7px 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color 0.7s ease, border-color 0.7s ease;

  @media (max-width: 700px) {
    gap: 6px;
    padding: 6px 10px 6px 12px;
  }

  ${(p) =>
    p.$spotlight &&
    `&:not(:hover):not(:focus-visible) {
      background-color: rgba(127, 166, 255, 0.18);
      border-color: rgba(167, 195, 255, 0.6);
    }`}

  &:hover,
  &:focus-visible {
    ${chipHover}
  }

  &:hover ${ChipArrow}, &:focus-visible ${ChipArrow} {
    transform: translateX(4px);
    color: #fff;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

// Own color on the label: global.module.css's "* { color: #000 }" matches
// this span directly, so it would not inherit the link's white.
export const ChipLabel = styled.span`
  font-size: clamp(14px, 0.95vw, 15.5px);
  font-weight: 550;
  letter-spacing: -0.01em;
  line-height: 1.2;
  color: #fff;

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const Dot = styled.button`
  width: ${(p) => (p.$active ? "38px" : "26px")};
  height: 5px;
  border-radius: 999px;
  border: 0;
  padding: 0;
  background: ${(p) => (p.$active ? "#fff" : "rgba(255,255,255,.4)")};
  cursor: pointer;
  transition: background 0.25s ease, width 0.25s ease;
`;

// Shared row for both the slide dots (left-aligned, always visible) and the
// scroll cue (absolutely centered within it, desktop-only) — matching the
// design, where both sit on the same line rather than stacked as separate
// rows.
export const ScrollCueRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 44px;
`;

export const ScrollCue = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;

  @media (min-width: 769px) {
    display: flex;
  }
`;

export const ScrollCueLabel = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 10.5px;
  font-weight: 650;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.62);
`;

const scrollCueBounce = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 0.45;
  }
  50% {
    transform: translateY(7px);
    opacity: 1;
  }
`;

export const ScrollCueIcon = styled.svg`
  // global.module.css's "* { color: #000 }" matches every element, the
  // child <path> included — stroke="currentColor" resolves against each
  // element's OWN color, not an ancestor's, so the path needs this same
  // fix as the svg itself, not just its parent. Same gotcha as HeadlineText.
  color: inherit;

  path {
    color: inherit;
  }

  animation: ${scrollCueBounce} 2.2s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const TrustedLabel = styled.div`
  margin-top: clamp(18px, 3vh, 34px);
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 6px;
`;

const logoShimmer = keyframes`
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
`;

// Both children share one grid cell so the placeholder holds the logo's slot
// until the real image is ready.
export const LogoFrame = styled.span`
  display: grid;
  align-items: center;

  > * {
    grid-area: 1 / 1;
  }
`;

export const LogoSkeleton = styled.span`
  width: ${(p) => p.$height * 4}px;
  height: ${(p) => p.$height}px;
  border-radius: 6px;
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 0.08) 30%,
    rgba(255, 255, 255, 0.22) 50%,
    rgba(255, 255, 255, 0.08) 70%
  );
  background-size: 200% 100%;
  animation: ${logoShimmer} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/** The source's two marquee logo treatments: `raw` keeps natural color at
 * reduced opacity, everything else is grayscale + inverted to white (the
 * default for a dark hero) at higher opacity, both brightening on hover. */
export const ClientLogo = styled.img`
  max-width: 150px;
  width: auto;
  object-fit: contain;
  display: block;
  transition: opacity 0.3s ease;
  ${(p) => p.$hidden && "visibility: hidden;"}
  ${(p) =>
    p.$raw
      ? `opacity: .86; &:hover { opacity: 1; }`
      : `filter: grayscale(1) brightness(0) invert(1); opacity: .72; &:hover { opacity: 1; }`}
`;
