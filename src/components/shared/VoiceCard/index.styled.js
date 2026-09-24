import styled from "styled-components";

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
`;

export const VoiceHead = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: stretch;
  gap: clamp(18px, 1.7vw, 28px);

  @media (max-width: 430px) {
    gap: 16px;
  }
`;

export const Portrait = styled.img`
  flex: 0 0 clamp(122px, 32%, 178px);
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  overflow: hidden;
  object-fit: cover;
  object-position: center 18%;
  background: rgba(255, 255, 255, 0.06);

  @media (max-width: 430px) {
    flex: 0 0 108px;
    width: 108px;
  }
`;

// EASY-BAR's wordmark is very wide, so the design caps its height lower.
export const LogoWrap = styled.span`
  position: relative;
  align-self: flex-start;
  display: inline-flex;
  max-width: 100%;

  ${({ $compact }) => $compact && "img { height: clamp(15px, 1.1vw, 18px); }"}
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
  text-wrap: pretty;
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

const STAT_SPACING = "clamp(16px, 1.5vw, 28px)";

// Delivery and outcome figures sit together, split by a hairline, with the
// case-study link pushed to the far end of the row.
export const StatGroup = styled.div`
  display: flex;
  gap: ${STAT_SPACING};
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    padding-left: ${STAT_SPACING};
    border-left: 1px solid rgba(255, 255, 255, 0.22);
  }

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

  /* global.module.css's "* { color: #000 }" directly matches this span, so
     the white it would otherwise inherit from the link loses — needs its
     own explicit color to win. */
  span {
    color: inherit;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: #fff;
  }
`;
