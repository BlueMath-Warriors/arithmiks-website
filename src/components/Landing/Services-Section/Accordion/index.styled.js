import styled from "styled-components";
import { Link } from "gatsby";
import { colors, shellMaxWidth, shellPadding } from "../../../../styles/tokens";

export const Section = styled.section`
  padding: clamp(72px, 6.76vw, 130px) 0;
  background: #fff;
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
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

  span {
    background: linear-gradient(100deg, #1355ff 0%, #a96fc8 62%, #ec4a9e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${colors.primary};
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 14px;
  min-height: clamp(452px, 33.9vw, 543px);
  margin-top: clamp(40px, 3.4vw, 68px);

  @media (max-width: 900px) {
    flex-direction: column;
    min-height: 0;
  }
`;

export const Panel = styled.button`
  position: relative;
  flex: ${(p) => (p.$open ? "5.15 1 0" : "1 1 0")};
  min-width: 0;
  border: 1px solid ${(p) => (p.$open ? "#C9D6FF" : colors.border)};
  border-radius: clamp(20px, 1.7vw, 30px);
  overflow: hidden;
  background: ${(p) =>
    p.$open
      ? "linear-gradient(170deg, #EAF0FF 0%, #F5F1FF 54%, #FFF6FB 100%)"
      : "#F5F7FB"};
  cursor: pointer;
  padding: 0;
  text-align: left;
  transition: flex-grow 0.55s cubic-bezier(0.4, 0, 0.2, 1), background 0.45s ease,
    border-color 0.45s ease;

  @media (max-width: 900px) {
    flex: none;
    min-height: ${(p) => (p.$open ? "auto" : "64px")};
  }
`;

export const PanelClosed = styled.div`
  display: ${(p) => (p.$visible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: clamp(26px, 2vw, 38px) 0 clamp(30px, 2.2vw, 42px);
  height: 100%;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 14px;
    padding: 18px 20px;
  }
`;

export const PanelIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(46px, 3.4vw, 62px);
  height: clamp(46px, 3.4vw, 62px);
  flex: none;
  border-radius: clamp(14px, 1.1vw, 19px);
  background: #fff;
  border: 1px solid ${(p) => (p.$open ? "#C9D6FF" : colors.border)};
`;

export const PanelLabel = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: clamp(17px, 1.12vw, 19px);
  font-weight: 700;
  letter-spacing: -0.014em;
  color: ${colors.text};
  white-space: nowrap;

  @media (max-width: 900px) {
    writing-mode: horizontal-tb;
    transform: none;
    flex: 1 1 auto;
  }
`;

export const PanelCount = styled.span`
  font-size: clamp(12.5px, 0.95vw, 16px);
  font-weight: 600;
  letter-spacing: -0.01em;
  color: ${colors.textFaint};
  white-space: nowrap;
`;

export const PanelOpen = styled.div`
  display: ${(p) => (p.$visible ? "flex" : "none")};
  flex-direction: column;
  padding: clamp(32px, 2.6vw, 48px) clamp(34px, 2.8vw, 52px) clamp(30px, 2.4vw, 46px);
  height: 100%;

  h3 {
    margin-top: clamp(20px, 1.7vw, 30px);
    font-size: clamp(20px, 1.78vw, 28.5px);
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.2;
  }
`;

export const PanelOpenTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
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
  border: 1px solid #c9d6ff;
  border-radius: 8px;
  padding: 5px 10px;
`;

export const PanelBlurb = styled.p`
  margin-top: 10px;
  max-width: 52ch;
  font-size: clamp(14px, 1.02vw, 17.5px);
  line-height: 1.55;
  color: ${colors.textMuted};
`;

export const PanelItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 clamp(26px, 2.2vw, 44px);
  margin-top: clamp(18px, 1.6vw, 30px);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemArrow = styled.span`
  flex: none;
  color: ${colors.primary};
  transition: transform 0.25s ease;
`;

export const PanelItemLink = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 9px;
  padding: clamp(8px, 0.7vw, 12px) 0;
  font-size: clamp(14px, 1.05vw, 18px);
  font-weight: 450;
  line-height: 1.4;
  color: ${colors.text};
  text-decoration: none;
  border-bottom: 1px solid rgba(19, 85, 255, 0.12);
  transition: color 0.25s ease;

  &:hover {
    color: ${colors.primary};
  }
  &:hover ${ItemArrow} {
    transform: translateX(4px);
  }
`;
