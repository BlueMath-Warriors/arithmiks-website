import styled from "styled-components";
import { colors } from "../../../../styles/tokens";
import { BandShell } from "../../../shared/Band/index.styled";

// How far the scan card rides up over the dark hero.
const OVERLAP = "clamp(110px, 10vw, 160px)";

export const Section = styled.section`
  position: relative;
  z-index: 2;
  margin-top: calc(-1 * ${OVERLAP});
  padding: 0 0 clamp(64px, 6vw, 104px);
  background: linear-gradient(180deg, transparent 0, transparent ${OVERLAP}, #fff ${OVERLAP});
`;

export const Shell = styled(BandShell)`
  z-index: 1;
`;

export const Threats = styled.div`
  max-width: 1080px;
  margin: clamp(64px, 6vw, 104px) auto 0;
`;

// Shrinks the heading to its text, so its balanced lines match the design.
export const ThreatsHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px 48px;
`;

export const ThreatGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: clamp(24px, 3vw, 48px);
  margin: clamp(28px, 3vw, 40px) 0 0;
  padding: 0;
  list-style: none;

  @media (min-width: 901px) and (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Threat = styled.li`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 22px 0;
  border-top: 1px solid ${colors.border};

  svg {
    flex: none;
    margin-top: 2px;
  }
`;

export const ThreatText = styled.div`
  min-width: 0;
`;

export const ThreatName = styled.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 650;
  letter-spacing: -0.01em;
  color: ${colors.text};
`;

export const ThreatNote = styled.p`
  margin: 5px 0 0;
  font-size: 14.5px;
  line-height: 1.6;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;
