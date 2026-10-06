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
  padding: 88px 0 ${CHAPTER_BAR_HEIGHT}px;
  background: #fff;
  overflow-x: clip;

  @media (max-width: 640px) {
    min-height: 0;
    padding: 120px 0 56px;
  }

  @media (max-height: 600px) and (min-width: 961px) {
    min-height: 0;
    padding-top: 120px;
  }
`;

export const Spark = styled.div`
  position: absolute;
  top: 50%;
  right: -5%;
  transform: translateY(calc(-50% + (clamp(112px, 13vh, 152px) - clamp(56px, 7vh, 92px)) / 2));
  width: clamp(360px, 44vw, 700px);
  aspect-ratio: 1;
  pointer-events: none;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* Once the copy runs full width the sparkle would sit behind the text. */
  @media (max-width: 900px) {
    top: auto;
    bottom: -40px;
    right: -18%;
    transform: none;
    width: 300px;
    opacity: 0.45;
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
  max-width: 900px;
  margin-top: -15px;
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 26px;
`;

export const EyebrowBar = styled.span`
  flex: none;
  width: 3px;
  height: 19px;
  border-radius: 2px;
  background: linear-gradient(180deg, #5c8cff 0%, #1355ff 45%, #a96fc8 100%);
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
  max-width: 640px;
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.textFaint};
  text-wrap: pretty;
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 42px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;

    a {
      justify-content: center;
      min-height: 52px;
    }
  }
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
  transition: background 0.25s ease, color 0.25s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }

  span {
    color: inherit;
  }
`;
