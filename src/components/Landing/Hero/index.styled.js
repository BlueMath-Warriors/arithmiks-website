import styled, { keyframes } from "styled-components";
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

// Centers the headline block within whatever vertical space is left above
// the trusted-by/marquee row, which stays pinned to the bottom of the hero
// (auto margins on both sides absorb the remaining space evenly).
export const HeroMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
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

// The word "AI" gets a gradient treatment wherever it appears in a slide
// (see markAI in index.jsx) — same gradient as the testimonials heading.
export const GradientAI = styled.span`
  background: linear-gradient(100deg, #7fa6ff 0%, #9e9be8 46%, #c77fd6 72%, #f56bb0 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #9e9be8;
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: clamp(18px, 3vh, 34px);
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

export const ScrollCue = styled.div`
  display: none;
  font-size: 10.5px;
  font-weight: 650;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.62);

  @media (min-width: 769px) {
    display: block;
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

/** The source's two marquee logo treatments: `raw` keeps natural color at
 * reduced opacity, everything else is grayscale + inverted to white (the
 * default for a dark hero) at higher opacity, both brightening on hover. */
export const ClientLogo = styled.img`
  max-width: 150px;
  width: auto;
  object-fit: contain;
  display: block;
  transition: opacity 0.3s ease;
  ${(p) =>
    p.$raw
      ? `opacity: .86; &:hover { opacity: 1; }`
      : `filter: grayscale(1) brightness(0) invert(1); opacity: .72; &:hover { opacity: 1; }`}
`;
