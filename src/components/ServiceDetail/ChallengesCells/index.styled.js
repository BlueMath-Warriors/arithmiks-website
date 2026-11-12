import styled from "styled-components";
import { bandPadding } from "../../shared/Band/index.styled";

export const Section = styled.section`
  position: relative;
  ${bandPadding}
  background: #070b18;
  overflow: hidden;
`;

export const Wash = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, #0b3ad1 0%, #1355ff 55%, #0a2aa0 100%);
  opacity: 0.96;
`;

export const Head = styled.div`
  max-width: ${({ $maxWidth }) => $maxWidth || "720px"};
`;

/**
 * `$stackOnPhone` applies the design's phone treatment for this band: one
 * column divided by horizontal rules instead of the vertical cell borders,
 * which read as a stray line down the right of a single-column stack. Opt-in,
 * because the AI Discovery design — the first page to use this band — does not
 * carry these rules.
 */
export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
  margin-top: clamp(40px, 4vw, 56px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  /* Some pages stack the statistics from tablet width, not just on phones. */
  ${({ $stackOnTablet }) =>
    $stackOnTablet &&
    `
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `}

  ${({ $stackOnPhone }) =>
    $stackOnPhone &&
    `
    margin-top: 56px;

    @media (max-width: 700px) {
      grid-template-columns: minmax(0, 1fr);
      margin-top: 40px;
    }
  `}
`;

export const Cell = styled.div`
  padding: 38px 34px 34px 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  ${({ $stackOnTablet }) =>
    $stackOnTablet &&
    `
    @media (max-width: 900px) {
      border-right: 0;
      padding-left: 0;
      padding-right: 0;
    }
  `}

  /* The row ends at the band's edge, so its last cell needs no divider. */
  ${({ $openLastCell }) =>
    $openLastCell &&
    `
    &:last-child {
      border-right: 0;
    }
  `}

  ${({ $stackOnPhone }) =>
    $stackOnPhone &&
    `
    @media (max-width: 700px) {
      padding: 28px 0;
      border-right: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);

      &:last-child {
        border-bottom: 0;
      }
    }
  `}
`;

export const Figure = styled.div`
  font-size: clamp(60px, 7vw, 104px);
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 0.9;
  color: #fff;
  font-variant-numeric: tabular-nums;

  span {
    color: inherit;
  }

  ${({ $stackOnPhone }) =>
    $stackOnPhone &&
    `
    @media (max-width: 700px) {
      font-size: 64px;
    }
  `}
`;

export const Claim = styled.p`
  margin-top: 22px;
  max-width: ${({ $maxWidth }) => $maxWidth || "290px"};
  font-size: 15.5px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
  text-wrap: pretty;

  ${({ $stackOnPhone }) =>
    $stackOnPhone &&
    `
    @media (max-width: 700px) {
      max-width: none;
      margin-top: 16px;
    }
  `}
`;

export const Source = styled.a`
  display: inline-flex;
  align-items: baseline;
  gap: 7px;
  margin-top: 20px;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.62);
  transition: color 0.25s ease;

  strong {
    font-weight: 550;
    color: #fff;
  }

  span {
    color: inherit;
  }

  &:hover {
    color: #fff;
  }

  ${({ $stackOnPhone }) =>
    $stackOnPhone &&
    `
    @media (max-width: 700px) {
      margin-top: 14px;
    }
  `}
`;

/**
 * The two closing paragraphs some pages set below the statistics: the question
 * the numbers raise, then the answer the service gives. The second is set
 * larger, as the design's emphasis.
 */
export const Closing = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px clamp(40px, 5vw, 96px);
  margin-top: clamp(40px, 4vw, 64px);
  padding-top: clamp(28px, 2.6vw, 40px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 700px) {
    margin-top: 0;
  }
`;

export const ClosingText = styled.p`
  font-size: 15.5px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.78);
  text-wrap: pretty;
`;

export const ClosingLead = styled.p`
  font-size: clamp(17px, 1.4vw, 21px);
  font-weight: 550;
  letter-spacing: -0.012em;
  line-height: 1.5;
  color: #fff;
  text-wrap: pretty;
`;
