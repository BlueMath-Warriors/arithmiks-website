import styled from "styled-components";
import { colors } from "../../../styles/tokens";
import { Shell, glowOrb } from "../../shared/Section/index.styled";

const UNPINNED = "(max-width: 760px), (max-height: 560px), (prefers-reduced-motion: reduce)";
const HERO_TOP_PADDING = "clamp(140px, 16vh, 200px)";

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${HERO_TOP_PADDING} 0 clamp(64px, 5.9vw, 109px);
  background: #fff;
  overflow-x: clip;

  @media ${UNPINNED} {
    display: block;
    min-height: 0 !important;
  }

  /* Clears the fixed header; the design's 64px band padding would sit under it. */
  @media (max-width: 900px) {
    padding-top: 110px;
    padding-bottom: 64px;
  }

  @media (max-width: 640px) {
    padding-bottom: 48px;
  }
`;

export const Panel = styled(Shell)`
  position: sticky;
  top: 86px;
  isolation: isolate;
  padding-bottom: clamp(24px, 3.4vh, 52px);

  @media ${UNPINNED} {
    position: static;
    padding-bottom: 0;
  }
`;

export const GlowClip = styled.div`
  position: absolute;
  top: calc(-1 * ${HERO_TOP_PADDING});
  bottom: 0;
  left: calc(50% - 50vw);
  right: calc(50% - 50vw);
  pointer-events: none;
  z-index: -1;
`;

export const GlowField = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 330px);
  height: 760px;
`;

export const BlueOrb = styled.div`
  ${glowOrb("19, 85, 255", 0.2, "65%", "A", 17)}
  left: -6%;
  top: -46%;
  width: 52vw;
  height: 52vw;
  max-width: 820px;
  max-height: 820px;
`;

export const PinkOrb = styled.div`
  ${glowOrb("236, 74, 158", 0.12, "62%", "B", 21)}
  right: -8%;
  top: -40%;
  width: 46vw;
  height: 46vw;
  max-width: 760px;
  max-height: 760px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(40px, 4.6vw, 90px);
  align-items: start;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const LeftColumn = styled.div`
  position: sticky;
  top: 120px;
  align-self: start;

  @media (max-width: 1000px) {
    position: static !important;
  }
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
`;

export const EyebrowBar = styled.span`
  width: 3px;
  height: 19px;
  border-radius: 2px;
  background: linear-gradient(180deg, #5c8cff 0%, #1355ff 45%, #a96fc8 100%);
`;

export const EyebrowLabel = styled.span`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const Title = styled.h1`
  font-size: clamp(28px, 3.28vw, 51px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  max-width: 16ch;
  text-wrap: balance;
  color: ${colors.text};
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(18px, 1.8vw, 28px);
  padding-top: clamp(4px, 1vw, 14px);
`;

export const Paragraph = styled.p`
  font-size: clamp(15px, 1.04vw, 18px);
  line-height: 1.7;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;
`;

export const Chip = styled.span`
  font-size: clamp(12.5px, 0.95vw, 15px);
  font-weight: 550;
  color: ${colors.primary};
  background: #eaf0ff;
  padding: 8px 16px;
  border-radius: 100px;
  white-space: nowrap;
`;
