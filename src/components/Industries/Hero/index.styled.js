import styled, { keyframes } from "styled-components";
import { colors } from "../../../styles/tokens";
import { Shell, GradientText, glowOrb } from "../../shared/Section/index.styled";

const MARQUEE_STACKED = "(max-width: 700px)";
const GLOW_SPILL_PX = 620;

const verticalMarquee = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(0, -50%, 0); }
`;

const horizontalMarquee = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
`;

export const Section = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  padding: clamp(96px, 13vh, 168px) 0 clamp(24px, 4vh, 56px);
  background: #fff;
  overflow: clip;
  overflow-clip-margin: ${GLOW_SPILL_PX}px;

  @media (max-width: 900px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  @media ${MARQUEE_STACKED} {
    height: auto;
    padding-top: 104px;
    padding-bottom: 32px;
  }
`;

export const Glow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

export const BlueOrb = styled.div`
  ${glowOrb("19, 85, 255", 0.2, "65%", "A", 17)}
  left: -6%;
  top: -18%;
  width: 52vw;
  height: 52vw;
  max-width: 820px;
  max-height: 820px;
`;

export const PinkOrb = styled.div`
  ${glowOrb("236, 74, 158", 0.12, "62%", "B", 21)}
  right: -8%;
  top: 30%;
  width: 46vw;
  height: 46vw;
  max-width: 760px;
  max-height: 760px;
`;

export const SoftPinkOrb = styled.div`
  ${glowOrb("236, 74, 158", 0.1, "64%", "B", 19)}
  left: 8%;
  top: -4%;
  width: 34vw;
  height: 34vw;
  max-width: 520px;
  max-height: 520px;
`;

export const HeroShell = styled(Shell)`
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: clamp(32px, 4.4vw, 88px);
  align-items: center;

  @media ${MARQUEE_STACKED} {
    grid-template-columns: 1fr;
    gap: 28px;
    align-content: center;
  }
`;

export const Copy = styled.div`
  min-width: 0;
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: clamp(18px, 2.2vh, 26px);
`;

export const EyebrowBar = styled.span`
  flex: none;
  width: 3px;
  height: 19px;
  border-radius: 2px;
  background: linear-gradient(180deg, #5c8cff 0%, #1355ff 45%, #a96fc8 100%);
`;

export const EyebrowLabel = styled.span`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const Title = styled.h1`
  font-size: clamp(30px, 4.4vw, 72px);
  font-weight: 750;
  letter-spacing: -0.025em;
  line-height: 1.04;
  color: ${colors.text};
`;

export const TitleLine = styled.span`
  white-space: nowrap;
  color: ${colors.text};

  @media ${MARQUEE_STACKED} {
    white-space: normal;
  }
`;

export const AiWord = styled(GradientText)`
  padding-right: 0.04em;
`;

export const Intro = styled.p`
  margin-top: clamp(18px, 2.4vh, 28px);
  max-width: 52ch;
  font-size: clamp(15px, 1.09vw, 20px);
  line-height: 1.6;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: clamp(26px, 3.4vh, 40px);
`;

export const PrimaryAction = styled.a`
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 100px;
  background: ${colors.primary};
  border: 1.5px solid ${colors.primary};
  color: #fff;
  font-size: 15px;
  font-weight: 550;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  span {
    color: inherit;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px -14px rgba(19, 85, 255, 0.7);
    color: #fff;
  }
`;

export const SecondaryAction = styled.a`
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 100px;
  background: transparent;
  border: 1.5px solid ${colors.primary};
  color: ${colors.primary};
  font-size: 15px;
  font-weight: 550;
  transition: background 0.25s ease;

  span {
    color: inherit;
  }

  &:hover {
    background: #eaf0ff;
    color: ${colors.primary};
  }
`;

export const Mosaic = styled.div`
  position: relative;
  min-width: 0;
  width: 100%;
  max-width: clamp(360px, 36vw, 600px);
  justify-self: end;
  height: clamp(380px, 64vh, 660px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(12px, 1.1vw, 18px);
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, transparent 0, #000 14%, #000 86%, transparent 100%);
  mask-image: linear-gradient(180deg, transparent 0, #000 14%, #000 86%, transparent 100%);

  @media ${MARQUEE_STACKED} {
    max-width: none;
    margin: 0 -24px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  }
`;

export const MosaicColumn = styled.div`
  min-width: 0;
  overflow: hidden;
`;

export const MosaicTrack = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${verticalMarquee} ${({ $isReversed }) => ($isReversed ? 52 : 46)}s linear infinite
    ${({ $isReversed }) => ($isReversed ? "reverse" : "normal")};
  animation-delay: ${({ $isReversed }) => ($isReversed ? "-18s" : "0s")};

  ${Mosaic}:hover &,
  ${Mosaic}:focus-within & {
    animation-play-state: paused;
  }

  @media ${MARQUEE_STACKED} {
    flex-direction: row;
    width: max-content;
    animation-name: ${horizontalMarquee};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Tile = styled.button`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  margin: 0 0 clamp(12px, 1.1vw, 18px);
  padding: 0;
  border: 1px solid ${colors.border};
  border-radius: 18px;
  overflow: hidden;
  background: #eef1f6;
  cursor: pointer;
  box-shadow: 0 18px 40px -30px rgba(10, 15, 31, 0.35);
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 26px 50px -28px rgba(19, 85, 255, 0.45);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media ${MARQUEE_STACKED} {
    flex: none;
    width: 200px;
    margin: 0 10px 0 0;
  }
`;

export const TileShade = styled.span`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 15, 31, 0) 45%, rgba(10, 15, 31, 0.5) 100%);
`;

export const TileLabel = styled.span`
  position: absolute;
  left: 8px;
  bottom: 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: calc(100% - 16px);
  padding: 4px 9px 4px 7px;
  border-radius: 100px;
  background: #fff;
  font-size: clamp(10.5px, 0.95vw, 12.5px);
  font-weight: 600;
  line-height: 1.25;
  white-space: nowrap;
  color: ${colors.text};
  box-shadow: 0 6px 16px -8px rgba(10, 15, 31, 0.35);
`;

export const TileLabelText = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.text};
`;
