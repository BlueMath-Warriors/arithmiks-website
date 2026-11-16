import styled from "styled-components";
import { colors } from "../../../styles/tokens";

// On phones every variant of this band reads the same way: one outcome per
// row, each carrying its own left rule, and the closing CTA flush with the
// page margin beneath them.
const PHONE = "(max-width: 640px)";

export const Section = styled.section`
  padding: 104px 0 ${({ $padBottom }) => ($padBottom ? "clamp(72px, 6.4vw, 104px)" : "0")};
  background: #fff;

  @media (max-width: 640px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`;

// A spanned CTA (the AI service designs) fixes the grid at four columns so the
// CTA can fill the rest of the last row; two columns from 1000px.
const spannedGrid = `
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0;
  margin-top: 56px;
  border-top: 1px solid ${colors.border};
  border-left: 1px solid ${colors.border};

  ${({ $ctaSpan }) => $ctaSpan && spannedGrid}

  @media ${PHONE} {
    grid-template-columns: 1fr;
    border-left: 0;
  }
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

  /* The grid drops its own left rule on phones, so each outcome carries one
     and the CTA beneath them stays open. */
  @media ${PHONE} {
    border-left: 1px solid ${colors.border};
  }
`;

export const CellNumber = styled.div`
  font-size: 11.5px;
  font-weight: 650;
  letter-spacing: 0.1em;
  /* Word labels ("Risk", "Speed") are set in capitals; numbers need nothing. */
  text-transform: ${({ $named }) => ($named ? "uppercase" : "none")};
  color: ${colors.primary};
  margin-bottom: 22px;
`;

// The CTA hangs from the top of the last grid slot so it never stretches the
// row; once the grid narrows it drops back into normal flow.
export const CtaCell = styled.div`
  position: relative;
  align-self: stretch;
  overflow: visible;
  padding: 0;

  ${({ $ctaSpan }) =>
    $ctaSpan &&
    `
    grid-column: span ${$ctaSpan};

    @media (max-width: 1000px) {
      grid-column: 1 / -1;
    }
  `}

  @media ${PHONE} {
    grid-column: 1 / -1;
  }
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

  ${({ $ctaSpan }) =>
    $ctaSpan &&
    `
    position: static;
    gap: 26px;
    padding: 32px 30px 34px;
  `}

  /* Out of the grid slot and back into flow, with no padding of its own, so
     the sentence starts at the page margin rather than inside a cell. */
  @media (max-width: 900px) {
    position: static;
    padding: 28px 0 0;
  }
`;

export const CtaText = styled.p`
  margin: 0;
  font-size: 15.5px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.7;
  color: ${colors.textFaint};

  /* A spanned CTA has the width to hold its sentence on one line. */
  ${({ $ctaSpan }) =>
    $ctaSpan &&
    `
    white-space: nowrap;

    @media (max-width: 900px) {
      white-space: normal;
    }
  `}

  span {
    white-space: nowrap;
    color: inherit;

    /* Once the CTA runs full width the sentence must wrap, or its one long
       line sets the grid's minimum width and pushes the cells off screen. */
    @media (max-width: 900px) {
      white-space: normal;
    }
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

/** An extra tile before the CTA: a label over a row of chips, some links. */
export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const chip = `
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 13px;
  border-radius: 100px;
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  font-size: 13.5px;
  font-weight: 550;
  line-height: 1.3;
  color: ${colors.text};
  white-space: nowrap;
  transition:
    border-color 0.25s ease,
    color 0.25s ease;

  span {
    color: inherit;
  }
`;

export const Chip = styled.span`
  ${chip}
`;

export const ChipLink = styled.a`
  ${chip}

  &:hover,
  &:focus-visible {
    border-color: ${colors.primary};
    color: ${colors.primary};
  }
`;
