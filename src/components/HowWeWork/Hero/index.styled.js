import styled, { css, keyframes } from "styled-components";
import { colors, shellPadding } from "../../../styles/tokens";
import { Shell, glowOrb, brandGradient } from "../../shared/Section/index.styled";

// Below these the story unpins and every stage stacks as ordinary content.
export const UNPINNED = "(max-width: 900px), (max-height: 560px), (prefers-reduced-motion: reduce)";
const SLIDE_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const MONO = "ui-monospace, 'JetBrains Mono', Menlo, monospace";
const SLIDE_OFFSET_PX = 44;

const scrollCue = keyframes`
  0%, 100% { transform: translateY(0); opacity: 0.45; }
  50% { transform: translateY(7px); opacity: 1; }
`;

export const Section = styled.section`
  position: relative;
  background: #fff;

  @media (max-width: 900px) {
    padding-top: 110px;
    padding-bottom: 48px;
  }

  @media (max-width: 640px) {
    padding-top: 48px;
  }
`;

export const Pin = styled.div`
  position: sticky;
  top: 0;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(120px, 13vh, 168px) 0 clamp(56px, 7vh, 96px);
  overflow: clip;
  overflow-clip-margin: 620px;

  @media ${UNPINNED} {
    position: static;
    min-height: 0;
    overflow: visible;
  }
`;

export const Glow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.35s ease;
`;

export const GlowField = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 330px);
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

export const SoftPinkOrb = styled.div`
  ${glowOrb("236, 74, 158", 0.1, "64%", "B", 19)}
  left: 8%;
  top: -8%;
  width: 34vw;
  height: 34vw;
  max-width: 520px;
  max-height: 520px;
`;

export const GridMesh = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.8s ease;
  background-image: linear-gradient(rgba(10, 15, 31, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10, 15, 31, 0.06) 1px, transparent 1px);
  background-size: 64px 64px;
  -webkit-mask-image: radial-gradient(72% 62% at 50% 45%, #000, transparent 78%);
  mask-image: radial-gradient(72% 62% at 50% 45%, #000, transparent 78%);
`;

export const Intro = styled.div`
  transition: opacity 0.6s ${SLIDE_EASE}, transform 0.6s ${SLIDE_EASE};

  @media ${UNPINNED} {
    opacity: 1 !important;
    transform: none !important;
  }
`;

const eyebrowText = css`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const IntroEyebrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: clamp(18px, 2.2vh, 26px);
  ${eyebrowText}
`;

export const Title = styled.h1`
  font-size: clamp(28px, 4.1vw, 66px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: ${colors.text};
  max-width: 26ch;
  margin: 0 auto;
  text-align: center;
  text-wrap: balance;
`;

export const Lede = styled.p`
  margin: clamp(18px, 2.4vh, 28px) auto 0;
  max-width: 58ch;
  text-align: center;
  font-size: clamp(15px, 1.09vw, 21px);
  line-height: 1.6;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Cue = styled.span`
  display: flex;
  justify-content: center;
  margin-top: clamp(30px, 4vh, 52px);
  transition: opacity 0.4s ease;

  @media ${UNPINNED} {
    display: none;
  }
`;

export const CueLabel = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 10.5px;
  font-weight: 650;
  letter-spacing: 0.2em;
  color: ${colors.textFaint};

  svg {
    color: inherit;
    animation: ${scrollCue} 2.2s ease-in-out infinite;
  }

  svg * {
    color: inherit;
  }
`;

export const StageStack = styled.div`
  position: absolute;
  left: ${shellPadding};
  right: ${shellPadding};
  top: calc(50% - 40px);
  transform: translateY(-50%);
  pointer-events: none;

  @media ${UNPINNED} {
    position: static;
    transform: none;
    pointer-events: auto;
    margin-top: clamp(40px, 6vh, 72px);
  }
`;

export const FloatingEyebrow = styled.div`
  position: absolute;
  left: 0;
  top: -220px;
  transform: translate3d(0, -100%, 0);
  display: flex;
  align-items: center;
  gap: 14px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease, top 0.62s ${SLIDE_EASE};
  ${eyebrowText}

  @media ${UNPINNED} {
    display: none;
  }
`;

const slideTransform = ({ $position }) => {
  if ($position === "active") return "translate3d(0, -50%, 0)";
  const offset = $position === "past" ? -SLIDE_OFFSET_PX : SLIDE_OFFSET_PX;
  return `translate3d(0, calc(-50% + ${offset}px), 0)`;
};

export const Slide = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  gap: clamp(24px, 3.4vw, 72px);
  align-items: center;
  opacity: ${({ $position }) => ($position === "active" ? 1 : 0)};
  transform: ${slideTransform};
  transition: opacity 0.62s ${SLIDE_EASE}, transform 0.62s ${SLIDE_EASE};

  @media ${UNPINNED} {
    position: static;
    opacity: 1;
    transform: none;
    padding: clamp(24px, 4vh, 40px) 0;
    /* Invisible on white, but the design's 1px rule is part of the stacked rhythm. */
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const StageNumber = styled.span`
  font-size: clamp(26px, 2.8vw, 46px);
  font-weight: 750;
  letter-spacing: -0.03em;
  line-height: 1;
  padding: 0.06em 0.1em 0.06em 0.02em;
  margin: -0.06em -0.1em -0.06em -0.02em;
  background: ${brandGradient.replace("100deg", "160deg")};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${colors.primary};
`;

export const StageCopy = styled.span`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.5vh, 20px);
  min-width: 0;
  max-width: 60ch;
`;

export const When = styled.span`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 9px;
  font-family: ${MONO};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${colors.primary};
  background: #eaf0ff;
  border: 1px solid rgba(19, 85, 255, 0.18);
  padding: 7px 13px;
  border-radius: 100px;
  white-space: nowrap;
`;

export const StageTitle = styled.h2`
  font-size: clamp(26px, 3.4vw, 54px);
  font-weight: 750;
  letter-spacing: -0.022em;
  line-height: 1.06;
  color: ${colors.text};
  text-wrap: balance;
`;

export const StageBody = styled.p`
  font-size: clamp(14.5px, 1.05vw, 19px);
  line-height: 1.62;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Art = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(180px, 20vw, 320px);
  height: clamp(180px, 20vw, 320px);
  flex: none;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $active }) => ($active ? "none" : "scale(0.9)")};
  transition: opacity 0.7s ${SLIDE_EASE} 0.12s, transform 0.7s ${SLIDE_EASE} 0.12s;

  img {
    position: relative;
    width: 74%;
    height: auto;
    display: block;
  }

  @media ${UNPINNED} {
    opacity: 1;
    transform: none;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Rail = styled(Shell)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: clamp(26px, 4vh, 48px);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "none" : "translateY(10px)")};
  transition: opacity 0.5s ease, transform 0.5s ease;

  @media ${UNPINNED} {
    display: none;
  }
`;

export const Ticks = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(10px, 1.2vw, 18px);
`;

export const Tick = styled.button`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  text-align: left;
`;

export const TickBar = styled.span`
  display: block;
  height: 2px;
  border-radius: 2px;
  background: rgba(10, 15, 31, 0.12);
  overflow: hidden;
`;

export const TickFill = styled.span`
  display: block;
  height: 100%;
  width: 0;
  border-radius: 2px;
  background: linear-gradient(90deg, #5c8cff 0%, #a96fc8 58%, #ec4a9e 100%);
  background-repeat: no-repeat;
  transition: width 0.5s ${SLIDE_EASE};
`;

const tickLabelColor = ({ $state }) => {
  if ($state === "active") return colors.primary;
  if ($state === "past") return colors.textMuted;
  return colors.textFaint;
};

export const TickLabel = styled.span`
  font-family: ${MONO};
  font-size: 10.5px;
  font-weight: ${({ $state }) => ($state === "active" ? 650 : 500)};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${tickLabelColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.4s ease;
`;

export const Runway = styled.div`
  height: 480svh;

  @media ${UNPINNED} {
    display: none;
  }
`;
