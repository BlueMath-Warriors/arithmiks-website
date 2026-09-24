import styled, { css, keyframes } from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

const floatA = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-3%, 4%, 0) scale(1.08); }
`;

const floatB = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1.05); }
  50% { transform: translate3d(4%, -3%, 0) scale(0.96); }
`;

// Soft drifting colour orb behind a hero; each page positions its own.
export const glowOrb = (rgb, alpha, fadeStop, animation, seconds) => css`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(${rgb}, ${alpha}), rgba(${rgb}, 0) ${fadeStop});
  filter: blur(10px);
  animation: ${animation === "A" ? floatA : floatB} ${seconds}s ease-in-out infinite;
`;

export const brandGradient = "linear-gradient(100deg, #1355ff 0%, #a96fc8 62%, #ec4a9e 100%)";
export const brandGradientOnDark =
  "linear-gradient(100deg, #7fa6ff 0%, #9e9be8 46%, #c77fd6 72%, #f56bb0 100%)";
export const eyebrowOnDarkColor = "#8FA9FF";

export const Shell = styled.div`
  position: relative;
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};

  @media (max-width: 900px) {
    padding-left: 24px;
    padding-right: 24px;
  }

  @media (max-width: 640px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

// Vertical rhythm shared by every full-width band in the design ([data-band]).
export const bandPadding = `
  padding-top: clamp(64px, 5.9vw, 109px);
  padding-bottom: clamp(64px, 5.9vw, 109px);

  @media (max-width: 900px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media (max-width: 640px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

export const Eyebrow = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $onDark }) => ($onDark ? eyebrowOnDarkColor : colors.primary)};
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(28px, 3.28vw, 51px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ $onDark }) => ($onDark ? "#fff" : colors.text)};
  text-wrap: balance;
`;

// global.module.css forces `color: #000` on every element, so the fallback
// color here matters wherever background-clip:text is unsupported.
export const GradientText = styled.span`
  background: ${({ $onDark }) => ($onDark ? brandGradientOnDark : brandGradient)};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${({ $onDark }) => ($onDark ? "#9E9BE8" : colors.primary)};
`;

export const ArrowGlyph = styled.span`
  display: inline-block;
  color: inherit;
  transition: transform 0.25s ease;
`;
