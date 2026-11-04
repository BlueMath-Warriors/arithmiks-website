import styled from "styled-components";
import { bandPadding } from "../../shared/Band/index.styled";

const BLUE_WASH = "linear-gradient(135deg, #0b3ad1 0%, #1355ff 55%, #0a2aa0 100%)";

// "Deep" bands lay the blue wash at 96% over the dark base and use a fluid
// rhythm; the default band paints the wash directly.
export const Section = styled.section`
  ${bandPadding}
  position: relative;
  color: #fff;
  background: ${({ $deep }) => ($deep ? "#070b18" : BLUE_WASH)};
  ${({ $deep }) =>
    $deep &&
    `
    padding-top: clamp(72px, 6.4vw, 120px);
    padding-bottom: clamp(72px, 6.4vw, 120px);
    overflow: clip;

    @media (max-width: 640px) {
      padding-top: 64px;
      padding-bottom: 64px;
    }
  `}

  @media (max-width: 600px) {
    overflow-x: clip;
  }
`;

export const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(40px, 6vw, 120px);
  align-items: start;

  /* The deep band keeps its fluid gap once stacked; the default steps to 36px. */
  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    ${({ $deep }) => ($deep ? "" : "gap: 36px;")}
  }
`;

export const Left = styled.div`
  position: relative;

  @media (max-width: 900px) {
    position: static;
  }
`;

export const Body = styled.p`
  margin: ${({ $first }) => ($first ? "24px" : "16px")} 0 0;
  max-width: 46ch;
  font-size: 16px;
  line-height: 1.7;
  color: ${({ $strong }) => ($strong ? "#fff" : "rgba(255,255,255,.78)")};
  font-weight: ${({ $strong }) => ($strong ? 550 : 400)};
  text-wrap: pretty;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: column;

  /* Closing rule; a trailing static row draws its own instead. */
  ${({ $closed }) =>
    !$closed &&
    `
    &::after {
      content: "";
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
  `}
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px 32px;
  align-items: end;
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: ${({ $last }) => ($last ? "1px solid rgba(255, 255, 255, 0.08)" : "0")};
`;

export const Claim = styled.p`
  margin: 0;
  font-size: clamp(16px, 1.3vw, 19px);
  font-weight: 550;
  letter-spacing: -0.012em;
  line-height: 1.4;
  color: #fff;
  text-wrap: pretty;
`;

export const Figure = styled.div`
  font-size: clamp(44px, 4.6vw, 68px);
  font-weight: 650;
  letter-spacing: -0.03em;
  line-height: 0.9;
  color: #fff;
  font-variant-numeric: tabular-nums;
  text-align: right;
`;

export const Meta = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: ${({ $end }) => ($end ? "flex-end" : "flex-start")};
  gap: 16px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const Track = styled.span`
  position: relative;
  flex: 1 1 auto;
  height: 6px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.18);
  overflow: hidden;
`;

export const Fill = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${({ $width }) => $width}%;
  border-radius: 100px;
  background: linear-gradient(90deg, #1355ff, #a96fc8 70%, #ec4a9e);
  transition: width 1.4s cubic-bezier(0.16, 1, 0.3, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Source = styled.a`
  flex: none;
  display: inline-flex;
  align-items: baseline;
  gap: 7px;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.62);
  white-space: nowrap;

  &:hover {
    color: #fff;
  }

  span {
    color: inherit;
  }

  span:first-child {
    font-weight: 550;
    color: #fff;
  }

  @media (max-width: 700px) {
    padding: 8px 0;
    font-size: 13px;
  }

  ${({ $wrapOnPhone }) =>
    $wrapOnPhone &&
    `
    @media (max-width: 600px) {
      flex: 1 1 auto;
      white-space: normal;
      flex-wrap: wrap;
      row-gap: 2px;
      padding: 6px 0;
    }
  `}
`;
