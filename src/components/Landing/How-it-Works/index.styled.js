import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../../styles/tokens";

export const Section = styled.section`
  position: relative;
  padding: 110px 0;
  background: ${colors.surface};
  overflow: clip;
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 64px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`;

export const Left = styled.div`
  position: sticky;
  top: 104px;
  align-self: start;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    position: static;
  }
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
  font-size: clamp(28px, 3.2vw, 53px);
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

export const Intro = styled.p`
  margin-top: 18px;
  max-width: 40ch;
  font-size: clamp(16px, 1.02vw, 17.5px);
  line-height: 1.6;
  color: ${colors.textMuted};
`;

export const Rail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 34px;
`;

export const RailDot = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: -0.01em;
  transition: background 0.35s ease, color 0.35s ease, box-shadow 0.35s ease,
    border-color 0.35s ease;

  ${(p) => {
    if (p.$state === "active") {
      return `background: linear-gradient(135deg,#1E5BFF 0%,#8B4FC4 100%); color:#fff; border:0; box-shadow: 0 0 0 5px rgba(19,85,255,.14);`;
    }
    if (p.$state === "done") {
      return `background: linear-gradient(135deg,#1E5BFF 0%,#8B4FC4 100%); color:#fff; border:0;`;
    }
    return `background:#fff; color:${colors.textFaint}; border:1px solid #D5DCEA;`;
  }}
`;

export const RailLine = styled.span`
  width: 2px;
  flex: 1 1 auto;
  min-height: 30px;
  margin: 5px 0;
  background: ${(p) => (p.$done ? "linear-gradient(135deg,#1E5BFF 0%,#8B4FC4 100%)" : colors.border)};
  transition: background 0.35s ease;
`;

export const RailLabel = styled.span`
  padding: 6px 0 20px;
  font-size: clamp(15px, 0.96vw, 16.5px);
  font-weight: ${(p) => (p.$active ? 650 : 550)};
  line-height: 1.35;
  color: ${(p) => (p.$active ? colors.text : colors.textFaint)};
  transition: color 0.35s ease, font-weight 0.35s ease;
`;

export const CtaLink = styled.a`
  margin-top: 29px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  font-size: clamp(15px, 0.96vw, 16.5px);
  font-weight: 550;
  color: ${colors.primary};
  background: transparent;
  border: 1.5px solid ${colors.primary};
  padding: 12px 22px;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;

  &:hover {
    background: ${colors.primary};
    color: #fff;
    transform: translateY(-2px);
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: clamp(30px, 3.03vw, 52px);
  border-radius: 22px;
  transition: background 0.45s ease, color 0.45s ease, box-shadow 0.45s ease,
    border-color 0.45s ease;
  background: ${(p) => (p.$active ? "linear-gradient(135deg,#1E5BFF 0%,#0B3AD1 100%)" : "#fff")};
  color: ${(p) => (p.$active ? "#fff" : colors.text)};
  border: 1px solid ${(p) => (p.$active ? "transparent" : colors.border)};
  box-shadow: ${(p) =>
    p.$active ? "0 30px 60px -26px rgba(11,58,209,.62)" : "0 8px 24px rgba(10,15,31,.06)"};
`;

export const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const CardChip = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 54px;
  height: 54px;
  border-radius: 16px;
  background: ${(p) => (p.$active ? "rgba(255,255,255,.16)" : "#EAF0FF")};
  transition: background 0.45s ease;
`;

export const CardNumber = styled.span`
  font-size: clamp(48px, 4.43vw, 86.5px);
  font-weight: 750;
  letter-spacing: -0.04em;
  line-height: 0.8;
  ${(p) =>
    p.$active
      ? `color: rgba(255,255,255,.92);`
      : `background: linear-gradient(135deg,#1355FF 0%,#A96FC8 62%,#EC4A9E 100%); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;`}
`;

export const CardTitle = styled.h3`
  margin-top: 8px;
  font-size: clamp(21px, 1.87vw, 30px);
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.2;
  color: ${(p) => (p.$active ? "#fff" : colors.text)};
`;

export const CardBody = styled.p`
  font-size: clamp(15px, 1.02vw, 18.5px);
  line-height: 1.62;
  color: ${(p) => (p.$active ? "rgba(255,255,255,.86)" : colors.textMuted)};
`;
