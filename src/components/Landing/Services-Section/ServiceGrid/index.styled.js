import styled from "styled-components";
import { Link } from "gatsby";
import { colors, shellMaxWidth, shellPadding } from "../../../../styles/tokens";
import { brandGradient, designShellGutters } from "../../../shared/Section/index.styled";

const FLAGSHIP_BORDER = "#C9D6FF";

export const Section = styled.section`
  padding: clamp(72px, 6.76vw, 130px) 0;
  background: #fff;

  @media (max-width: 768px) {
    padding-top: 56px;
    padding-bottom: 56px;
  }

  @media (max-width: 640px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
  ${designShellGutters}
`;

export const Eyebrow = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-bottom: 20px;
`;

export const Heading = styled.h2`
  max-width: 29ch;
  font-size: clamp(28px, 3.23vw, 50px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${colors.text};
  text-wrap: balance;

  span {
    background: ${brandGradient};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    max-width: none;
    text-wrap: wrap;
  }
`;

// The design breaks "ship / with AI" onto its own line on phones only.
export const MobileBreak = styled.br`
  display: none;

  @media (max-width: 768px) {
    display: inline;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: clamp(40px, 3.4vw, 68px);

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: clamp(28px, 2.4vw, 44px) clamp(24px, 2.2vw, 40px) clamp(24px, 2vw, 36px);
  border-radius: clamp(20px, 1.7vw, 30px);
  border: 1px solid ${(p) => (p.$flagship ? FLAGSHIP_BORDER : colors.border)};
  background: ${(p) =>
    p.$flagship
      ? "linear-gradient(170deg, #EAF0FF 0%, #F5F1FF 54%, #FFF6FB 100%)"
      : colors.surface};
`;

export const CardTop = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const IconTile = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: clamp(46px, 3.4vw, 62px);
  height: clamp(46px, 3.4vw, 62px);
  border-radius: clamp(14px, 1.1vw, 19px);
  background: #fff;
  border: 1px solid ${FLAGSHIP_BORDER};
`;

export const FlagshipBadge = styled.span`
  flex: none;
  font-family: ui-monospace, Menlo, monospace;
  font-size: clamp(10.5px, 0.82vw, 13.5px);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
  background: #fff;
  border: 1px solid ${FLAGSHIP_BORDER};
  border-radius: 8px;
  padding: 5px 10px;
`;

export const CardTitle = styled.h3`
  margin: clamp(20px, 1.7vw, 30px) 0 0;
  font-size: clamp(20px, 1.6vw, 26px);
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.2;
  color: ${colors.text};
`;

export const CardBlurb = styled.p`
  margin: 10px 0 0;
  font-size: clamp(14px, 1vw, 16.5px);
  line-height: 1.55;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: clamp(18px, 1.6vw, 28px) 0 0;
  padding: 0;
  list-style: none;
`;

export const ItemArrow = styled.span`
  flex: none;
  color: ${colors.primary};
`;

export const ItemLink = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 9px;
  padding: clamp(9px, 0.75vw, 13px) 0;
  font-size: clamp(14.5px, 1.02vw, 17px);
  font-weight: 450;
  line-height: 1.4;
  color: ${colors.text};
  text-decoration: none;
  border-bottom: 1px solid rgba(19, 85, 255, 0.12);
  transition: color 0.25s ease;

  &:hover,
  &:focus-visible {
    color: ${colors.primary};
  }
`;
