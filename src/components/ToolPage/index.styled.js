import { styled } from "styled-components";
import { breakpoints } from "../Landing/index.styled";

/** Unified page canvas — hero and alt sections end here so no harsh seam */
const pageBg = "#f1f4f9";
/** Slightly deeper at top of hero for subtle depth (same hue family as pageBg) */
const heroTop = "#e6ecf6";

const siteFontFeatures = `
  font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
`;

export const ToolShell = styled.main`
  background: ${pageBg};
  color: #061237;
  font-family: Poppins, system-ui, sans-serif;
  ${siteFontFeatures}
  -webkit-font-smoothing: antialiased;
`;

export const ToolHero = styled.section`
  position: relative;
  background:
    radial-gradient(
      1100px 420px at 50% -10%,
      rgba(19, 85, 255, 0.12) 0%,
      rgba(19, 85, 255, 0) 60%
    ),
    linear-gradient(180deg, ${heroTop} 0%, ${pageBg} 58%, ${pageBg} 100%);
  padding: 128px 24px 56px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.large}) {
    padding: 112px 24px 48px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 96px 20px 36px;
  }
`;

export const ToolHeroInner = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Eyebrow = styled.p`
  color: #1355ff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin: 0;
  font-variant-numeric: stacked-fractions;
  ${siteFontFeatures}
`;

export const ToolH1 = styled.h1`
  color: #061237;
  font-family: Poppins;
  font-size: 56px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: -0.84px;
  margin: 0;
  max-width: 880px;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'cpsp' on, 'cv06' on, 'cv09' on, 'cv04' on, 'cv03' on, 'case' on, 'ss03' on;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 44px;
    line-height: 56px;
    letter-spacing: -0.66px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.48px;
  }
  @media screen and (max-width: ${breakpoints.xsmall}) {
    font-size: 26px;
    line-height: 34px;
  }
`;

export const ToolIntro = styled.p`
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 150.5%;
  max-width: 780px;
  margin: 0;
  ${siteFontFeatures}

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 16px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 15px;
    line-height: 150%;
  }
`;

export const TrustRow = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TrustBadge = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #ffffff;
  border: 1px solid #e7eaee;
  color: #061237;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.09px;
  box-shadow: 0 1px 2px rgba(6, 18, 55, 0.04);
  ${siteFontFeatures}

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #1355ff;
    box-shadow: 0 0 0 3px rgba(19, 85, 255, 0.15);
  }
`;

export const ToolBody = styled.section`
  background: transparent;
  padding: 12px 24px 96px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 8px 16px 64px;
  }
`;

export const ToolBodyInner = styled.div`
  max-width: 1120px;
  width: 100%;
`;

export const Section = styled.section`
  padding: 88px 24px;
  display: flex;
  justify-content: center;
  background: ${(p) => (p.alt ? pageBg : "#ffffff")};

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 56px 20px;
  }
`;

export const SectionInner = styled.div`
  max-width: 1120px;
  width: 100%;
`;

export const SectionHead = styled.div`
  margin-bottom: 40px;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 28px;
  }
`;

export const SectionEyebrow = styled(Eyebrow)`
  margin-bottom: 8px;
`;

export const SectionHeading = styled.h2`
  color: #061237;
  font-family: Poppins;
  font-size: 44px;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.66px;
  margin: 0 0 16px;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'cpsp' on, 'cv06' on, 'cv09' on, 'cv04' on, 'cv03' on, 'case' on, 'ss03' on;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.48px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 26px;
    line-height: 34px;
    letter-spacing: -0.42px;
  }
`;

export const SectionSub = styled.p`
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin: 0;
  max-width: 640px;
  ${siteFontFeatures}
`;

export const FaqGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FaqItem = styled.details`
  background: #ffffff;
  border: 1px solid #e7eaee;
  border-radius: 14px;
  padding: 20px 24px;
  transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #c7d2ff;
    background: #fafbff;
  }

  &[open] {
    border-color: #1355ff;
    box-shadow: 0 8px 28px rgba(19, 85, 255, 0.08);
    background: #ffffff;
  }

  summary {
    list-style: none;
    cursor: pointer;
    font-family: Poppins;
    font-size: 17px;
    font-weight: 600;
    line-height: 28px;
    color: #061237;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    ${siteFontFeatures}
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "";
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #f5f7fa;
    color: #1355ff;
    font-size: 18px;
    font-weight: 400;
    display: grid;
    place-items: center;
    transition: background 0.2s ease, transform 0.3s ease;
  }

  summary::before {
    content: "";
    position: absolute;
  }

  /* Plus / minus glyph drawn via mask so open animation is smooth */
  summary {
    position: relative;
  }

  summary::after {
    background-image: linear-gradient(#1355ff, #1355ff),
      linear-gradient(#1355ff, #1355ff);
    background-size: 12px 2px, 2px 12px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #eef3ff;
    content: "";
    transition: background-size 0.25s ease, background-color 0.25s ease,
      transform 0.3s ease;
  }

  &[open] summary::after {
    background-size: 12px 2px, 0 0;
    background-color: #1355ff;
    background-image: linear-gradient(#ffffff, #ffffff),
      linear-gradient(#ffffff, #ffffff);
  }

  p {
    margin: 14px 0 0;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
    color: #5c5c5c;
    ${siteFontFeatures}
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 18px 20px;

    summary {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  width: 100%;

  & > *:only-child {
    max-width: 460px;
    width: 100%;
    justify-self: center;
    grid-column: 1 / -1;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const RelatedCard = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border-radius: 18px;
  border: 1px solid #e7eaee;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(6, 18, 55, 0.04);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: inherit;
  min-height: 172px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(19, 85, 255, 0) 0%, rgba(19, 85, 255, 0.04) 100%);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }

  &[href]:hover,
  &[href]:focus-visible {
    transform: translateY(-3px);
    border-color: #1355ff;
    background: #f5f7fa;
    box-shadow: 0 10px 30px rgba(19, 85, 255, 0.18);
    outline: none;
  }

  &[href]:hover::before,
  &[href]:focus-visible::before {
    opacity: 1;
  }

  &[aria-disabled="true"] {
    opacity: 0.82;
  }

  .cardTop {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
  }

  .cardIcon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: linear-gradient(135deg, #eef3ff 0%, #dde7ff 100%);
    color: #1355ff;
    display: grid;
    place-items: center;
    flex-shrink: 0;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  h3 {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.2px;
    color: #061237;
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    ${siteFontFeatures}
  }

  p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #5c5c5c;
    margin: 0;
    ${siteFontFeatures}
  }

  .cardCta {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #1355ff;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.09px;
    ${siteFontFeatures}

    svg {
      width: 16px;
      height: 16px;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &[href]:hover .cardCta svg,
  &[href]:focus-visible .cardCta svg {
    transform: translateX(3px);
  }
`;

export const ComingSoonPill = styled.span`
  display: inline-block;
  font-family: Poppins;
  font-size: 11px;
  font-weight: 600;
  color: #9a6b00;
  background: #fff5d6;
  padding: 3px 10px;
  border-radius: 999px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`;
