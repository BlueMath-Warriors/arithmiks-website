import styled from "styled-components";
import { colors, shellMaxWidth, shellPadding } from "../../styles/tokens";

// The design is set in Aspekta, whose default line-height is 1.43; the
// fallback stack's is 1.175, which collapses every row the design leaves at
// `normal` by ~4px. Set once for the whole page so rules that declare their
// own line-height still win, exactly as the Footer does.
export const Page = styled.div`
  line-height: 1.43;
`;

export const Shell = styled.div`
  max-width: ${shellMaxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${shellPadding};
`;

/* ── Capabilities ─────────────────────────────────────────────────────── */

export const CapabilitiesSection = styled.section`
  position: relative;
  padding: 56px 0 0;
  background: transparent;
`;

export const CapHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 22px;

  @media (max-width: 768px) {
    gap: 8px 18px;
  }
`;

export const CapHeadTitle = styled.h2`
  margin: 0;
  font-size: 11.5px;
  font-weight: 650;
  letter-spacing: 0.17em;
  color: ${colors.primary};
`;

export const CapHeadRule = styled.span`
  flex: 1 1 60px;
  height: 1px;
  background: ${colors.border};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CapHeadHint = styled.span`
  font-size: 13px;
  color: ${colors.textFaint};
`;

// The rail takes the left column only once the row is wide enough for both;
// the flex-basis trick collapses it to full width below ~760px of row space.
export const CapSplit = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 70px;
  align-items: flex-start;
  padding-top: 46px;

  @media (max-width: 900px) {
    gap: 0;
    padding-top: 34px;
  }
`;

export const CapColumn = styled.div`
  flex: 1 1 394px;
  min-width: 0;
`;

/* ── One service group ────────────────────────────────────────────────── */

export const GroupSection = styled.section`
  position: relative;
  scroll-margin-top: 74px;
  padding: 2px 0 72px;
`;

export const GroupSpine = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 72px;
  width: 3px;
  border-radius: 3px;
  background: ${(p) => (p.$active ? colors.primary : colors.border)};
  transition: background 0.45s ease;
`;
