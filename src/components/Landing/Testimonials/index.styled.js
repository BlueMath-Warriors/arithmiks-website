import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

export const Section = styled.section`
  position: relative;
  padding: clamp(56px, 6.25vw, 122px) 0;
  background: ${colors.dark};
  overflow: hidden;
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
`;

export const Eyebrow = styled.span`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8fa9ff;
`;

export const Heading = styled.h2`
  max-width: 22ch;
  font-size: clamp(28px, 3.03vw, 52px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #fff;

  span {
    background: linear-gradient(100deg, #7fa6ff 0%, #9e9be8 46%, #c77fd6 72%, #f56bb0 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #9e9be8;
  }
`;

export const Body = styled.div`
  display: flex;
  align-items: stretch;
  gap: clamp(18px, 2.13vw, 39px);
  margin-top: clamp(38px, 4.43vw, 73px);
`;

export const TrackView = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  /* Clip horizontally only (this is the carousel viewport). Must be "clip",
     not "hidden" — pairing "hidden" on one axis with "visible" on the other
     makes the UA silently recompute "visible" to "auto" (CSS Overflow spec),
     which still clips. "clip" is exempt from that rule, so the y-axis stays
     genuinely visible and a card's hover lift/glow isn't cut off at the top. */
  overflow-x: clip;
  overflow-y: visible;
`;

export const Track = styled.div`
  display: flex;
  align-items: stretch;
  gap: clamp(18px, 2.13vw, 39px);
  transform: translateX(${(p) => p.$page * -100}%);
  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
`;

// Decorative hover layers ported from the design's data-vgrid/data-vglow/
// data-vedge spans — a grid mesh and brand glow both pool around the
// pointer (position set imperatively in index.jsx, since CSS alone can't
// read the cursor), and a gradient edge lights along the top.
export const VGrid = styled.span`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  background-image: linear-gradient(rgba(255, 255, 255, 0.16) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.16) 1px, transparent 1px);
  background-size: 37px 37px;
`;

export const VGlow = styled.span`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.45s ease;
`;

export const VEdge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 1;
  pointer-events: none;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
  background: linear-gradient(
    90deg,
    rgba(19, 85, 255, 0) 0%,
    #1355ff 22%,
    #a96fc8 58%,
    #ec4a9e 88%,
    rgba(236, 74, 158, 0) 100%
  );
`;

export const CompanyLogo = styled.img`
  height: clamp(26px, 1.9vw, 32px);
  max-width: 100%;
  width: auto;
  object-fit: contain;
  filter: grayscale(1) brightness(0) invert(1);
  opacity: 0.82;
  transition: opacity 0.35s ease;
  position: relative;
  z-index: 1;
`;

export const CompanyLogoRaw = styled.img`
  height: clamp(26px, 1.9vw, 32px);
  max-width: 100%;
  width: auto;
  object-fit: contain;
  opacity: 0.9;
  transition: opacity 0.35s ease;
`;

// Absolutely-positioned true-colour copy of the same logo, faded in over
// the grayscale default on hover — matches the design's data-vlogodark.
export const CompanyLogoDark = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  height: clamp(26px, 1.9vw, 32px);
  max-width: 100%;
  width: auto;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
`;

export const Card = styled.figure`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  flex: 0 0 calc((100% - clamp(18px, 2.13vw, 39px)) / 2);
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: clamp(26px, 2.3vw, 38px);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 20px;
  background: linear-gradient(
    160deg,
    rgba(255, 255, 255, 0.07) 0%,
    rgba(255, 255, 255, 0.03) 62%,
    rgba(255, 255, 255, 0.015) 100%
  );
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease,
    box-shadow 0.45s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.28);
    box-shadow: 0 22px 44px -26px rgba(19, 85, 255, 0.6);
  }
  &:hover ${VGrid},
  &:hover ${VGlow} {
    opacity: 1;
  }
  &:hover ${VEdge} {
    transform: scaleX(1);
  }
  &:hover ${CompanyLogo} {
    opacity: 0;
  }
  &:hover ${CompanyLogoDark} {
    opacity: 1;
  }

  @media (max-width: 900px) {
    flex: 0 0 100%;
  }
`;

export const VoiceHead = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: stretch;
  gap: clamp(18px, 1.7vw, 28px);
`;

export const Portrait = styled.img`
  flex: 0 0 clamp(122px, 32%, 178px);
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  overflow: hidden;
  object-fit: cover;
  object-position: center 18%;
  background: rgba(255, 255, 255, 0.06);
`;

export const LogoWrap = styled.span`
  position: relative;
  align-self: flex-start;
  display: inline-flex;
  max-width: 100%;
`;

export const CompanyName = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
`;

export const Info = styled.figcaption`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(13px, 1.1vw, 17px);
`;

export const NameRole = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const Name = styled.span`
  font-size: clamp(15.5px, 1.09vw, 18.5px);
  font-weight: 650;
  letter-spacing: -0.012em;
  color: #fff;
`;

export const Role = styled.div`
  font-size: 13.5px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.58);
`;

export const Quote = styled.blockquote`
  position: relative;
  z-index: 2;
  flex: 1 1 auto;
  margin: clamp(24px, 2.1vw, 32px) 0 0;
  max-width: 42ch;
  font-size: clamp(16.5px, 1.36vw, 23px);
  font-weight: 500;
  letter-spacing: -0.014em;
  line-height: 1.5;
  color: #fff;
`;

export const StatsRow = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 18px clamp(16px, 1.5vw, 26px);
  margin-top: clamp(24px, 2.1vw, 32px);
  padding-top: clamp(20px, 1.8vw, 28px);
  border-top: 1px solid rgba(255, 255, 255, 0.14);
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: clamp(19px, 1.45vw, 26px);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1;
    color: #fff;
  }
`;

export const StatLabel = styled.span`
  margin-top: 7px;
  font-size: 12px;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.62);
`;

export const CaseLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  flex: none;
  font-size: 13.5px;
  font-weight: 550;
  color: #fff;
  white-space: nowrap;
  padding: 11px 20px;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: #fff;
  }
`;

export const Dots = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const Dot = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  background: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${(p) => (p.$active ? "#fff" : "rgba(255,255,255,.4)")};
    transition: background 0.3s ease;
  }
`;
