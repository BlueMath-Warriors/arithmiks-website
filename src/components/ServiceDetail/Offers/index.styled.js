import styled from "styled-components";
import { colors } from "../../../styles/tokens";

// Above this the rail is pinned and driven by page scroll; at and below it,
// it becomes a native swipe deck.
export const PIN_MIN_WIDTH = 1001;
const DECK = `(max-width: ${PIN_MIN_WIDTH - 1}px)`;

export const PANEL_GAP = 16;

// Most pages always use the tighter card spacing; some only on short desktop screens.
const tight =
  (rules) =>
  ({ $tightOnlyWhenShort }) =>
    $tightOnlyWhenShort
      ? `@media (min-width: ${PIN_MIN_WIDTH}px) and (max-height: 860px) { ${rules} }`
      : rules;

export const Section = styled.section`
  position: relative;
  padding: 104px 0;
  background: ${colors.dark};
  color: #fff;
  overflow-x: clip;

  @media ${DECK} {
    padding: 72px 0;
  }

  @media (max-width: 640px) {
    padding: 64px 0;
  }
`;

// useOfferRail writes the scroll-driven height and transform inline; in the
// swipe-deck layout these overrides hand control back to normal flow.
export const TrackArea = styled.div`
  position: relative;

  @media ${DECK} {
    height: auto !important;
  }
`;

export const Stage = styled.div`
  position: sticky;
  top: 80px;

  @media ${DECK} {
    position: static;
    height: auto !important;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px 64px;
`;

// The design nests this in a wrapper whose margin collapses with its own 25px,
// leaving just the larger of the two.
export const Deck = styled.div`
  position: relative;
  margin-top: clamp(28px, 3vw, 48px);
  overflow: visible;
`;

export const Rail = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${PANEL_GAP}px;
  will-change: transform;
  backface-visibility: hidden;

  @media ${DECK} {
    transform: none !important;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    margin: ${({ $sideRow }) => ($sideRow ? "0" : "0 -6.25vw")};
    padding: ${({ $sideRow }) => ($sideRow ? "0" : "0 6.25vw 4px")};
    scroll-padding: ${({ $sideRow }) => ($sideRow ? "0" : "0 6.25vw")};

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Panel = styled.div`
  flex: 0 0 68%;
  min-width: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0.45)};
  cursor: ${({ $active }) => ($active ? "default" : "pointer")};
  transition: opacity 0.45s ease;

  @media ${DECK} {
    flex: 0 0 ${({ $sideRow }) => ($sideRow ? "88%" : "86%")};
    scroll-snap-align: start;
    opacity: 1;
    cursor: default;
  }

  @media (max-width: 600px) {
    flex-basis: 88%;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
  gap: clamp(24px, 3vw, 48px);
  height: 100%;
  padding: clamp(28px, 2.8vw, 44px);
  ${tight("padding: clamp(22px, 2.2vw, 32px);")}
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media ${DECK} {
    grid-template-columns: 1fr;
  }

  ${({ $sideRow }) =>
    !$sideRow &&
    `
    @media (max-width: 600px) {
      padding: 22px 20px;
      gap: 22px;
    }
  `}
`;

export const Detail = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const Label = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8fa9ff;
`;

export const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

export const Chip = styled.span`
  padding: 8px 14px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  font-size: 14px;
  font-weight: 500;
  color: #fff;
`;

export const Deliverables = styled.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const Deliverable = styled.li`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 11px 0;
  ${tight("padding: 8px 0;")}
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: 0;
  }

  svg {
    flex: none;
    margin-top: 3px;
  }
`;

export const DeliverableTitle = styled.span`
  display: block;
  font-size: 15.5px;
  font-weight: 600;
  color: #fff;
`;

export const DeliverableNote = styled.span`
  display: block;
  margin-top: 3px;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.66);
  text-wrap: pretty;
`;

export const Side = styled.div`
  order: -1;
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 0;
  padding-right: clamp(0px, 2vw, 24px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    display: block;
    flex: none;
    width: 88px;
    height: 88px;
  }

  @media ${DECK} {
    border-right: 0;
    padding-right: 0;
    flex-direction: ${({ $sideRow }) => ($sideRow ? "row" : "column")};
    align-items: ${({ $sideRow }) => ($sideRow ? "center" : "flex-start")};
    gap: ${({ $sideRow }) => ($sideRow ? "18px" : "14px")};

    svg {
      width: ${({ $sideRow }) => ($sideRow ? "56px" : "48px")};
      height: ${({ $sideRow }) => ($sideRow ? "56px" : "48px")};
    }
  }
`;

export const StageNumber = styled.div`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  color: #8fa9ff;
`;

export const StageTitle = styled.h3`
  margin: 8px 0 0;
  font-size: clamp(24px, 2.2vw, 34px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #fff;

  @media ${DECK} {
    font-size: 24px;
  }
`;

export const StageTag = styled.p`
  margin: 14px 0 0;
  max-width: 30ch;
  font-size: 15px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.7);
  text-wrap: pretty;
`;

export const Duration = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;

  @media ${DECK} {
    margin-top: 0;
    margin-left: ${({ $sideRow }) => ($sideRow ? "auto" : "0")};
  }
`;

export const DurationLabel = styled.span`
  font-size: 12.5px;
  font-weight: 650;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.46);
`;

export const DurationValue = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 22px;
`;

export const Dot = styled.button`
  position: relative;
  width: ${({ $active }) => ($active ? "28px" : "8px")};
  height: 8px;
  border-radius: 100px;
  border: 0;
  padding: 0;
  background: ${({ $active }) =>
    $active ? "linear-gradient(90deg,#5C8CFF,#A96FC8)" : "rgba(255,255,255,.25)"};
  cursor: pointer;
  transition:
    width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.3s ease;

  &:focus-visible {
    outline: 2px solid #8fa9ff;
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    &::after {
      content: "";
      position: absolute;
      inset: -14px -6px;
    }
  }
`;
