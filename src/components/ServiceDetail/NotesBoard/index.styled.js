import styled, { css } from "styled-components";
import { colors, shellPadding } from "../../../styles/tokens";

// Phones and reduced motion get the notes as a static, wrapped board.
export const STATIC_QUERY = "(max-width: 700px)";

export const Section = styled.section`
  position: relative;
  height: calc(100svh + 1600px);
  background: ${colors.surface};
  color: ${colors.text};

  ${({ $static }) =>
    $static &&
    css`
      height: auto;
    `}

  @media (max-width: 640px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

export const Stage = styled.div`
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${({ $static }) =>
    $static &&
    css`
      position: relative;
      height: auto;
      overflow: visible;
      padding-bottom: 72px;
    `}
`;

export const DotGrid = styled.span`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(rgba(10, 15, 31, 0.07) 1px, transparent 1.4px);
  background-size: 24px 24px;
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, #000 18%, #000 88%, transparent 100%);
  mask-image: linear-gradient(180deg, transparent 0%, #000 18%, #000 88%, transparent 100%);
`;

export const Glow = styled.span`
  position: absolute;
  top: -18%;
  right: -8%;
  width: 620px;
  height: 620px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(19, 85, 255, 0.1), transparent 68%);
  pointer-events: none;
`;

export const Head = styled.div`
  position: relative;
  z-index: 1;
  padding-top: clamp(92px, 12vh, 132px);
  text-align: center;
`;

export const Board = styled.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  align-items: center;

  ${({ $static }) =>
    $static &&
    css`
      display: block;
    `}
`;

export const Track = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(44px, 4.4vw, 76px);
  padding: 28px max(${shellPadding}, calc((100vw - 1500px) / 2)) 36px;
  will-change: transform;

  ${({ $static }) =>
    $static &&
    css`
      flex-wrap: wrap;
      justify-content: center;
      gap: 44px 28px;
      padding: 56px 20px 8px;
      transform: none;
    `}
`;

export const Note = styled.article`
  position: relative;
  flex: none;
  width: ${({ $static }) => ($static ? "min(100%, 340px)" : "clamp(272px, 23vw, 340px)")};
  /* Static boards lay the notes flat, as the design does. */
  transform: ${({ $tilt, $static }) => ($static ? "none" : `rotate(${$tilt}deg)`)};
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Paper = styled.div`
  position: relative;
  min-height: clamp(250px, 21vw, 314px);
  display: flex;
  flex-direction: column;
  padding: clamp(26px, 2.2vw, 32px) clamp(22px, 1.9vw, 28px) clamp(20px, 1.7vw, 24px);
  background: ${({ $paper }) => $paper};
  border-radius: 2px 2px 4px 14px / 2px 2px 4px 10px;
  box-shadow: 0 1px 2px rgba(10, 15, 31, 0.05), 0 16px 32px -20px rgba(10, 15, 31, 0.22);
  overflow: hidden;
  transition: box-shadow 0.5s ease;
`;

export const PaperTint = styled.span`
  position: absolute;
  inset: 0 0 auto 0;
  height: 30px;
  background: linear-gradient(180deg, rgba(10, 15, 31, 0.035), transparent);
  pointer-events: none;
`;

export const PaperCurl = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 70%;
  height: 46%;
  background: linear-gradient(to top left, rgba(10, 15, 31, 0.07) 0%, transparent 55%);
  pointer-events: none;
`;

export const Meta = styled.span`
  position: relative;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;

export const NoteNumber = styled.span`
  font-size: 13px;
  font-weight: 650;
  letter-spacing: 0.06em;
  color: ${colors.primary};
  font-variant-numeric: tabular-nums;
`;

export const Duration = styled.span`
  font-size: 12.5px;
  font-weight: 550;
  color: rgba(10, 15, 31, 0.55);
`;

export const Title = styled.h3`
  position: relative;
  margin: 14px 0 0;
  font-size: clamp(18px, 1.4vw, 22px);
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.22;
  color: ${colors.text};
  text-wrap: balance;
`;

export const Body = styled.p`
  position: relative;
  margin: 10px 0 0;
  font-size: clamp(13.5px, 0.95vw, 15px);
  line-height: 1.55;
  color: rgba(10, 15, 31, 0.72);
  text-wrap: pretty;
`;

export const Tags = styled.span`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding-top: 14px;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 100px;
  border: 1px solid rgba(10, 15, 31, 0.16);
  font-size: 12px;
  font-weight: 550;
  color: rgba(10, 15, 31, 0.78);
  white-space: nowrap;
`;

export const Pin = styled.span`
  position: absolute;
  top: -7px;
  left: 50%;
  width: 14px;
  height: 14px;
  margin-left: -7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #5c8cff 0%, #1355ff 50%, #a96fc8 100%);
  box-shadow: 0 0 0 3px #fff, 0 3px 8px rgba(19, 85, 255, 0.35);
`;

export const Connector = styled.svg`
  position: absolute;
  top: 50%;
  left: 100%;
  width: clamp(44px, 4.4vw, 76px);
  height: 20px;
  margin-top: -10px;
  transform: rotate(${({ $tilt }) => -$tilt}deg);
`;

export const Progress = styled.div`
  position: relative;
  z-index: 1;
  align-self: center;
  flex: none;
  width: 160px;
  height: 3px;
  margin: 0 0 clamp(22px, 4vh, 40px);
  border-radius: 3px;
  background: rgba(10, 15, 31, 0.1);
  overflow: hidden;

  span {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, #1355ff 0%, #a96fc8 62%, #ec4a9e 100%);
    transform-origin: left center;
    transform: scaleX(0);
  }
`;
