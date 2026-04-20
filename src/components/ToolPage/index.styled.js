import { styled } from "styled-components";
import { breakpoints } from "../Landing/index.styled";

/** Unified page canvas — hero and alt sections end here so no harsh seam */
const pageBg = "#f1f4f9";
/** Slightly deeper at top of hero for subtle depth (same hue family as pageBg) */
const heroTop = "#e6ecf6";

export const ToolShell = styled.main`
  background: ${pageBg};
  color: #111;
  font-family: Poppins, system-ui, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
`;

export const ToolHero = styled.section`
  background: linear-gradient(180deg, ${heroTop} 0%, ${pageBg} 52%, ${pageBg} 100%);
  padding: 104px 24px 32px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 92px 20px 28px;
  }
`;

export const ToolHeroInner = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ToolH1 = styled.h1`
  font-family: Poppins;
  font-size: 44px;
  font-weight: 700;
  line-height: 1.15;
  color: #111;
  margin: 0;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 36px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 28px;
  }
`;

export const ToolIntro = styled.p`
  font-family: Poppins;
  font-size: 18px;
  line-height: 1.55;
  color: #3a3a3a;
  max-width: 760px;
  margin: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 16px;
  }
`;

export const TrustRow = styled.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TrustBadge = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  background: #eef3ff;
  color: #1355ff;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 500;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #1355ff;
  }
`;

export const ToolBody = styled.section`
  background: transparent;
  padding: 24px 24px 80px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 16px 16px 56px;
  }
`;

export const ToolBodyInner = styled.div`
  max-width: 1120px;
  width: 100%;
`;

export const Section = styled.section`
  padding: 64px 24px;
  display: flex;
  justify-content: center;
  background: ${(p) => (p.alt ? pageBg : "#ffffff")};

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 48px 20px;
  }
`;

export const SectionInner = styled.div`
  max-width: 1120px;
  width: 100%;
`;

export const SectionHeading = styled.h2`
  font-family: Poppins;
  font-size: 28px;
  font-weight: 700;
  color: #111;
  margin: 0 0 20px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 22px;
  }
`;

export const FaqItem = styled.details`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 12px;
  transition: border-color 0.2s ease;

  &[open] {
    border-color: #1355ff;
  }

  summary {
    list-style: none;
    cursor: pointer;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    color: #111;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: "+";
    font-size: 22px;
    font-weight: 400;
    color: #1355ff;
    transition: transform 0.2s ease;
  }

  &[open] summary::after {
    content: "–";
  }

  p {
    margin: 12px 0 0;
    font-family: Poppins;
    font-size: 15px;
    line-height: 1.6;
    color: #3a3a3a;
  }
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  width: 100%;

  & > *:only-child {
    max-width: 420px;
    width: 100%;
    justify-self: center;
    grid-column: 1 / -1;
  }
`;

export const RelatedCard = styled.a`
  display: block;
  padding: 20px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 2px 8px rgba(17, 24, 39, 0.06);
  transition: transform 0.2s ease, border-color 0.2s ease,
    box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-2px);
    border-color: #1355ff;
    box-shadow: 0 8px 24px rgba(19, 85, 255, 0.12);
  }

  h3 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    color: #111;
    margin: 0 0 8px;
  }

  p {
    font-family: Poppins;
    font-size: 14px;
    line-height: 1.5;
    color: #5c5c5c;
    margin: 0;
  }
`;

export const ComingSoonPill = styled.span`
  display: inline-block;
  font-family: Poppins;
  font-size: 11px;
  font-weight: 600;
  color: #9a6b00;
  background: #fff5d6;
  padding: 2px 8px;
  border-radius: 999px;
  margin-left: 8px;
`;
