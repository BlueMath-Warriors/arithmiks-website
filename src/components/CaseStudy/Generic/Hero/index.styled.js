import styled from "styled-components";
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
    padding-bottom: 48px;
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

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: clamp(44px, 3.4vw, 62px);
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
  transition: transform 0.25s ease, background 0.25s ease;

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
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }
`;

export const CtaGlyph = styled.span`
  color: inherit;
`;

// Every hero image sits in the same warm frame with a top-only radius. A plain
// screenshot is also rounded and ringed; a mockup already has its own shape
// and shadow, so it is left untouched.
export const Frame = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: ${HERO_IMAGE_MAX_WIDTH};
  margin: clamp(44px, 5vw, 72px) 0 0;
  padding: ${FRAME_PADDING} ${FRAME_PADDING} 0;
  background: linear-gradient(135deg, #f4efe7 0%, #efe8dd 50%, #f3ece4 100%);
  border: 1px solid #e4dacb;
  border-bottom: 0;
  border-radius: ${FRAME_RADIUS} ${FRAME_RADIUS} 0 0;
  box-shadow: 0 -10px 60px -30px rgba(60, 40, 20, 0.28), 0 2px 6px rgba(60, 40, 20, 0.05);
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: auto;
    ${({ $screenshot }) =>
      $screenshot &&
      `
      border-radius: ${IMAGE_RADIUS} ${IMAGE_RADIUS} 0 0;
      box-shadow: 0 0 0 1px rgba(10, 15, 31, 0.06);
    `}
  }
`;
