import styled from "styled-components";
import { colors } from "../../../styles/tokens";

// "Compact" grids (most pages) pair cells up and tighten them on phones;
// otherwise the grid simply drops to one column below 560px.
const PHONE = "(max-width: 600px)";

export const Section = styled.section`
  padding: 104px 0 0;
  background: #fff;

  @media (max-width: 640px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0;
  margin-top: 56px;
  border-top: 1px solid ${colors.border};
  border-left: 1px solid ${colors.border};

  ${({ $compact }) =>
    $compact
      ? `
    @media ${PHONE} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  `
      : `
    @media (max-width: 560px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Cell = styled.div`
  background: #fff;
  padding: 32px 30px 34px;
  border-bottom: 1px solid ${colors.border};
  border-right: 1px solid ${colors.border};
  transition: background 0.4s ease;

  &:hover {
    background: #fafbff;
  }

  h3 {
    margin: 0;
    font-size: clamp(17px, 1.5vw, 20px);
    font-weight: 550;
    letter-spacing: -0.013em;
    line-height: 1.3;
    color: ${colors.text};
    text-wrap: balance;
  }

  ${({ $compact }) =>
    $compact &&
    `
    @media ${PHONE} {
      padding: 20px 16px 22px;

      h3 {
        font-size: 16px;
        line-height: 1.3;
      }
    }
  `}
`;

export const CellNumber = styled.div`
  font-size: 11.5px;
  font-weight: 650;
  letter-spacing: 0.1em;
  color: ${colors.primary};
  margin-bottom: 22px;

  ${({ $compact }) =>
    $compact &&
    `
    @media ${PHONE} {
      margin-bottom: 12px;
    }
  `}
`;

// The CTA hangs from the top of the last grid slot so it never stretches the
// row; once the grid narrows it drops back into normal flow.
export const CtaCell = styled.div`
  position: relative;
  align-self: stretch;
  overflow: visible;
  padding: 0;

  ${({ $compact }) =>
    $compact &&
    `
    @media ${PHONE} {
      grid-column: 1 / -1;
      padding: 20px 16px 22px;
    }
  `}
`;

export const CtaInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  padding: 22px 30px 34px;

  @media (max-width: 900px) {
    position: static;
    padding: 28px 0 0;
  }

  /* The design's compact cell rule ("> * > div:first-child") reaches this wrapper too. */
  ${({ $compact }) =>
    $compact &&
    `
    @media ${PHONE} {
      margin-bottom: 12px;
    }
  `}
`;

export const CtaText = styled.p`
  margin: 0;
  font-size: 15.5px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.7;
  color: ${colors.textFaint};

  span {
    white-space: nowrap;
    color: inherit;

    ${({ $compact }) =>
      $compact &&
      `
      @media (max-width: 900px) {
        white-space: normal;
      }
    `}
  }
`;

export const CtaButton = styled.a`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
  gap: 11px;
  background: ${colors.primary};
  color: #fff;
  font-size: 15px;
  font-weight: 550;
  padding: 12px 24px;
  border-radius: 100px;
  white-space: nowrap;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }

  span {
    color: inherit;
  }
`;
