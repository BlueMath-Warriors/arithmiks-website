import styled, { keyframes } from "styled-components";
import { colors } from "../../../../styles/tokens";
import { Shell, glowOrb } from "../../../shared/Section/index.styled";

const HERO_IMAGE_MAX_WIDTH = "1180px";
const FRAME_RADIUS = "clamp(16px, 1.35vw, 22px)";
const IMAGE_RADIUS = "clamp(10px, 0.85vw, 14px)";
const FRAME_PADDING = "clamp(6px, 0.62vw, 11px)";

export const HeroSection = styled.section`
  position: relative;
  z-index: 2;
  padding: clamp(128px, 15vh, 170px) 0 0;
  background: #fff;

  @media (max-width: 900px) {
    padding-top: 110px;
    // Was 48px — that left a visible gap above TechStackSection's fixed
    // -5px tuck, which only cancels a 0px desktop bottom padding. Zero here
    // keeps the blue band flush against the image on mobile too.
    padding-bottom: 0;
  }
`;

export const MeshClip = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow-x: clip;
`;

export const Mesh = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50vh - 330px);
  height: 760px;
`;

export const BlueOrb = styled.div`
  ${glowOrb("19, 85, 255", 0.2, "65%", "A", 17)}
  left: -6%;
  top: -46%;
  width: 52vw;
  height: 52vw;
  max-width: 820px;
  max-height: 820px;
`;

export const PinkOrb = styled.div`
  ${glowOrb("236, 74, 158", 0.12, "62%", "B", 21)}
  right: -8%;
  top: 42%;
  width: 46vw;
  height: 46vw;
  max-width: 760px;
  max-height: 760px;
`;

export const HeroShell = styled(Shell)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const enter = keyframes`
  from { opacity: 0; transform: translate3d(0, 26px, 0); }
  to { opacity: 1; transform: none; }
`;

// The eyebrow, logo, headline, copy and buttons rise in together, as in the design.
export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${enter} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 260ms both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const EyebrowLabel = styled.span`
  white-space: nowrap;
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const ProductLogo = styled.img`
  height: ${({ $height }) => $height || "clamp(44px, 3.4vw, 62px)"};
  width: auto;
  display: block;
  margin-top: clamp(22px, 2.4vw, 30px);
`;

export const Headline = styled.h1`
  margin-top: clamp(18px, 2vw, 26px);
  font-size: clamp(30px, 4vw, 64px);
  font-weight: 750;
  letter-spacing: -0.025em;
  line-height: 1.06;
  color: ${colors.text};
  max-width: 20ch;
  text-wrap: balance;
`;

export const Subtitle = styled.p`
  margin-top: clamp(16px, 1.8vw, 22px);
  max-width: 54ch;
  font-size: clamp(15px, 1.05vw, 18px);
  line-height: 1.65;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: clamp(26px, 2.6vw, 36px);

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const pill = `
  white-space: nowrap;
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 26px;
  border-radius: 100px;
  font-size: 15px;
  font-weight: 600;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const PrimaryCta = styled.a`
  ${pill}
  background: ${colors.primary};
  border: 1.5px solid ${colors.primary};
  color: #fff;
  transition:
    transform 0.25s ease,
    background 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${colors.primaryHover};
    color: #fff;
  }
`;

export const SecondaryCta = styled.a`
  ${pill}
  border: 1.5px solid ${colors.primary};
  color: ${colors.primary};
  transition:
    background 0.25s ease,
    color 0.25s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const CtaGlyph = styled.span`
  color: inherit;
`;

// Every hero image sits in a framed panel with a top-only radius. The tone is
// the frame's colour: cool blue by default, warm beige for products whose app
// UI is cream-coloured. A plain screenshot is also rounded and ringed; a
// mockup already has its own shape and shadow, so it is left untouched.
const FRAME_TONES = {
  blue: {
    background:
      "linear-gradient(135deg, #eef1fb 0%, #e9edfa 45%, #f1ecf8 100%)",
    border: "#dfe4f2",
    shadow:
      "0 -10px 60px -30px rgba(10, 15, 31, 0.28), 0 2px 6px rgba(10, 15, 31, 0.04)",
  },
  warm: {
    background:
      "linear-gradient(135deg, #f4efe7 0%, #efe8dd 50%, #f3ece4 100%)",
    border: "#e4dacb",
    shadow:
      "0 -10px 60px -30px rgba(60, 40, 20, 0.28), 0 2px 6px rgba(60, 40, 20, 0.05)",
  },
};

// Every hero image gets the height of a 1800×1125 screenshot, so pages line up.
const HERO_IMAGE_RATIO = "1800 / 1125";

export const Frame = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${HERO_IMAGE_MAX_WIDTH};
  margin: clamp(44px, 5vw, 72px) 0 0;
  padding: ${FRAME_PADDING} ${FRAME_PADDING} 0;
  background: ${({ $tone }) => FRAME_TONES[$tone].background};
  border: 1px solid ${({ $tone }) => FRAME_TONES[$tone].border};
  border-bottom: 0;
  border-radius: ${FRAME_RADIUS} ${FRAME_RADIUS} 0 0;
  box-shadow: ${({ $tone }) => FRAME_TONES[$tone].shadow};
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: ${IMAGE_RADIUS} ${IMAGE_RADIUS} 0 0;
    box-shadow: 0 0 0 1px rgba(10, 15, 31, 0.06);
  }

  .gatsby-image-wrapper {
    aspect-ratio: ${HERO_IMAGE_RATIO};
    border-radius: ${IMAGE_RADIUS} ${IMAGE_RADIUS} 0 0;
    box-shadow: 0 0 0 1px rgba(10, 15, 31, 0.06);
  }

  .gatsby-image-wrapper > div[aria-hidden="true"] {
    display: none;
  }
`;
