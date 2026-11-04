import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { brandGradient } from "../../shared/Section/index.styled";
import { CHAPTER_BAR_HEIGHT } from "../ChapterNav/index.styled";

export const Section = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  /* Top clears the fixed header; bottom leaves room for the chapter bar,
     which overlaps the hero's last strip until it pins. */
  padding: var(--header-offset, 88px) 0 ${CHAPTER_BAR_HEIGHT}px;
  background: #fff;
  overflow-x: clip;

  /* The chapter bar is hidden on phones, so nothing overlaps the hero. */
  @media (max-width: 640px) {
    padding-bottom: 0;
  }

  @media (max-height: 600px) and (min-width: 961px) {
    min-height: 0;
    padding-top: 120px;
  }
`;

// The design's art box; the image inside overhangs it by half on every side
// because the rendered file carries the halo's margin (60 of 120 units).
export const Art = styled.div`
  position: absolute;
  top: 50%;
  right: max(-5%, calc((100% - 1500px) / 2 - 193px));
  transform: translateY(calc(-50% + (clamp(112px, 13vh, 152px) - clamp(56px, 7vh, 92px)) / 2));
  width: clamp(360px, 44vw, 700px);
  aspect-ratio: 1;
  pointer-events: none;

  img {
    position: absolute;
    inset: -50%;
    display: block;
    width: 200%;
    height: 200%;
    max-width: none;
  }

  /* Once the copy runs full width the art steps back behind the heading,
     placed as the UI/UX design places it (its width stays 360px). */
  @media (max-width: 700px) {
    top: calc(50% - 360px);
    right: calc(-34% + 20px);
    transform: none;
    opacity: 0.32;
    z-index: 0;
  }
`;

export const Body = styled.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Copy = styled.div`
  margin-top: -15px;
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 26px;
`;

export const EyebrowText = styled.span`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const Heading = styled.h1`
  font-size: clamp(32px, 5.02vw, 83px);
  font-weight: 550;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: ${colors.text};
  max-width: 24ch;

  @media (max-width: 700px) {
    position: relative;
    z-index: 1;
  }
`;

export const HeadingAccent = styled.span`
  font-weight: 750;
  background: ${brandGradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${colors.primary};
`;

export const Intro = styled.p`
  margin-top: ${({ $tight }) => ($tight ? "16px" : "32px")};
  max-width: ${({ $maxWidth }) => $maxWidth || "640px"};
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.textFaint};
  text-wrap: pretty;

  /* A page-specific cap releases once the copy runs full width. */
  @media (max-width: 760px) {
    max-width: ${({ $maxWidth }) => ($maxWidth ? "none" : "640px")};
  }
`;

// Some pages stack their hero buttons on phones (the design's [data-herocta]).
export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: ${({ $gap }) => $gap || "42px"};

  ${({ $stackOnMobile }) =>
    $stackOnMobile &&
    `
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
      margin-top: 32px;

      > a {
        justify-content: center;
      }
    }
  `}
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 12px 24px;
  border-radius: 100px;
  border: 1.5px solid ${colors.primary};
  color: ${colors.primary};
  font-size: 15px;
  font-weight: 550;
  white-space: nowrap;
  transition:
    background 0.25s ease,
    color 0.25s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }

  span {
    color: inherit;
  }
`;
