import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

export const FooterEl = styled.footer`
  background: ${colors.dark};
  color: #fff;
  padding: clamp(60px, 5.34vw, 101px) 0 32px;
  // The design leaves most footer text at the default line-height, which in
  // its Aspekta is 1.43 — the fallback stack's 1.175 collapsed every link row
  // by 4-5px. Set once here so each rule that already declares its own
  // line-height (ColumnLink, BrandBlurb) still wins.
  line-height: 1.43;
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const ServiceMap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: space-between;
  gap: 40px 34px;
  padding: 0 0 46px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-content: stretch;
  }
`;

export const ServiceColumn = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

// The services nav band. Its group headings and its links carry different
// line-heights in the design (1.35 vs 1.45), so both live here rather than
// sharing one value.
export const ColumnLink = styled.a`
  display: block;
  font-size: ${(p) => (p.$heading ? "16.5px" : "clamp(15.5px, .98vw, 17px)")};
  font-weight: ${(p) => (p.$heading ? 650 : 400)};
  letter-spacing: ${(p) => (p.$heading ? "-.01em" : "normal")};
  line-height: ${(p) => (p.$heading ? "1.35" : "1.45")};
  color: ${(p) => (p.$heading ? "#fff" : "rgba(255,255,255,.68)")};
  text-decoration: none;
  transition: color 0.25s ease;
  margin-bottom: ${(p) => (p.$heading ? "5px" : 0)};

  &:hover {
    color: ${(p) => (p.$heading ? "#8FA9FF" : "#fff")};
  }
`;

// The lower Company/Work/Resources/Engagement band. Same size and colour as a
// services link, but the design leaves its line-height at the default.
export const ExtraColumnLink = styled.a`
  display: block;
  font-size: clamp(15.5px, 0.98vw, 17px);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.68);
  text-decoration: none;
  transition: color 0.25s ease;

  &:hover {
    color: #fff;
  }
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 56px 72px;
  padding: 46px 0 52px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;

  // Same 189x222 mark as the header — width auto keeps its proportions.
  img {
    height: 43px;
    width: auto;
    display: block;
  }
`;

export const BrandName = styled.span`
  font-size: 33px;
  font-weight: 650;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const BrandBlurb = styled.p`
  font-size: clamp(15px, 0.96vw, 16.5px);
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
  max-width: 46ch;
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: clamp(17px, 1.12vw, 19px);
    text-decoration: none;
  }

  svg {
    flex: none;
  }

  /* The primary address leads; the careers address sits back a step. */
  a:first-child {
    font-weight: 550;
    color: #fff;

    &:hover {
      color: #8fa9ff;
    }
  }

  a:last-child {
    font-weight: 450;
    color: rgba(255, 255, 255, 0.78);

    &:hover {
      color: #fff;
    }
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 6px;

  img {
    height: 96px;
    width: auto;
    display: block;
  }
`;

export const SocialColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: flex-start;
  padding-left: 120px;
  padding-right: 120px;

  @media (max-width: 900px) {
    padding-left: 0;
    padding-right: 0;
  }

  > span:first-child {
    font-size: 13px;
    font-weight: 650;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 11px;
    color: #fff;
    transition: background 0.25s ease, border-color 0.25s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.13);
      border-color: #fff;
    }
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const OfficeBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  span:first-child {
    font-size: 13px;
    font-weight: 650;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.55);
  }
  span:last-child {
    font-size: clamp(17px, 1.12vw, 19px);
    font-weight: 550;
    color: #fff;
  }
`;

export const ExtraCols = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  justify-content: space-between;
  gap: 24px 34px;
  padding: 36px 0 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-content: stretch;
  }
`;

export const ExtraColumn = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ColumnTitle = styled.h2`
  font-size: 13px;
  font-weight: 650;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
`;

export const BottomBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px 30px;
  padding-top: 24px;
`;

export const Copyright = styled.span`
  font-size: clamp(15px, 0.96vw, 16.5px);
  color: rgba(255, 255, 255, 0.6);
`;

export const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;

  a {
    font-size: clamp(15px, 0.96vw, 16.5px);
    color: rgba(255, 255, 255, 0.72);
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;
