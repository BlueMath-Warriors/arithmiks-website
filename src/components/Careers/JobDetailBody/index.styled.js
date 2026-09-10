import styled from "styled-components";
import { Link } from "gatsby";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

export const Section = styled.section`
  background: #fff;
`;

export const BreadcrumbShell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: clamp(28px, 3vw, 44px) ${shellPadding} 0;
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(13.5px, 0.95vw, 15.5px);
  color: ${colors.textFaint};
`;

export const BreadcrumbLink = styled(Link)`
  color: ${colors.textFaint};

  &:hover {
    color: ${colors.text};
  }
`;

export const BreadcrumbCurrent = styled.span`
  color: ${colors.text};
`;

export const GridShell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding} clamp(56px, 5.4vw, 96px);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 0.75fr);
  gap: clamp(32px, 4vw, 80px);
  margin-top: clamp(26px, 2.6vw, 40px);
  padding-top: clamp(26px, 2.6vw, 40px);
  border-top: 1px solid ${colors.border};

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.div`
  min-width: 0;
`;

export const Heading = styled.h2`
  font-size: clamp(19px, 1.4vw, 24px);
  font-weight: 700;
  letter-spacing: -0.016em;
  line-height: 1.3;
  margin-top: ${(p) => (p.$first ? "0" : "clamp(34px, 3.4vw, 52px)")};
`;

export const AboutText = styled.p`
  margin-top: 18px;
  max-width: 62ch;
  font-size: clamp(15px, 1.02vw, 17px);
  font-weight: 600;
  line-height: 1.7;
  color: ${colors.text};
  text-wrap: pretty;
`;

export const ParagraphList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 18px;
  max-width: 62ch;

  p {
    font-size: clamp(14.5px, 1vw, 16.5px);
    line-height: 1.7;
    color: ${colors.textMuted};
    text-wrap: pretty;
  }
`;

export const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: clamp(34px, 3.4vw, 52px);
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: ${colors.primary};
  border-radius: 100px;
  white-space: nowrap;
  transition: background 0.25s;

  &:hover {
    background: ${colors.primaryHover};
  }
`;

export const Aside = styled.aside`
  min-width: 0;
  padding-left: clamp(0px, 2.4vw, 44px);
  border-left: 1px solid ${colors.border};

  @media (max-width: 800px) {
    padding-left: 0;
    border-left: 0;
    padding-top: clamp(26px, 2.6vw, 40px);
    border-top: 1px solid ${colors.border};
  }
`;

export const InfoList = styled.dl`
  margin: 18px 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InfoLabel = styled.dt`
  font-family: ui-monospace, Menlo, monospace;
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8a93a6;
`;

export const InfoValue = styled.dd`
  margin: 0;
  font-size: clamp(14.5px, 1vw, 16.5px);
  font-weight: 600;
  line-height: 1.45;
  color: ${colors.text};
`;
