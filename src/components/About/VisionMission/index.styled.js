import styled, { css } from "styled-components";
import { bandPadding } from "../../shared/Section/index.styled";

const NODE_SIZE = "clamp(56px, 4.8vw, 72px)";
const INACTIVE_GREY = "#8A93A6";
const RAIL_GREY = "#D9DEE8";
const SURFACE = "#F5F7FB";
const RISE_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export const Section = styled.section`
  position: relative;
  ${bandPadding}
  background: ${SURFACE};
  overflow: clip;
`;

export const CornerGlow = styled.div`
  position: absolute;
  top: -6%;
  right: -6%;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(169, 111, 200, 0.14), transparent 68%);
  pointer-events: none;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: clamp(44px, 4.4vw, 80px);

  h2 {
    max-width: 22ch;
  }
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
`;

const rail = css`
  position: absolute;
  left: 50%;
  top: clamp(28px, 2.4vw, 36px);
  bottom: 0;
  width: 2px;
  margin-left: -1px;
  border-radius: 2px;

  @media (max-width: 760px) {
    left: 28px;
  }
`;

export const RailTrack = styled.span`
  ${rail}
  background: ${RAIL_GREY};
`;

export const RailFill = styled.span`
  ${rail}
  background: linear-gradient(180deg, #5c8cff 0%, #1355ff 35%, #a96fc8 72%, #ec4a9e 100%);
  transform: scaleY(0);
  transform-origin: top;
  will-change: transform;
`;

export const Item = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) ${NODE_SIZE} minmax(0, 1fr);
  column-gap: clamp(20px, 2.6vw, 44px);
  padding-bottom: clamp(56px, 6vw, 110px);

  @media (max-width: 760px) {
    grid-template-columns: 56px minmax(0, 1fr);
    column-gap: 18px;
  }
`;

export const Node = styled.span`
  grid-column: 2;
  grid-row: 1;
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${NODE_SIZE};
  height: ${NODE_SIZE};
  border-radius: 50%;
  border: 2px solid ${({ $active }) => ($active ? "#1355FF" : RAIL_GREY)};
  color: ${({ $active }) => ($active ? "#fff" : INACTIVE_GREY)};
  background: ${({ $active }) =>
    $active ? "linear-gradient(135deg, #5c8cff 0%, #1355ff 55%, #a96fc8 100%)" : "#fff"};
  box-shadow: ${({ $active }) =>
    $active
      ? `0 0 0 8px ${SURFACE}, 0 14px 30px -12px rgba(19, 85, 255, 0.55)`
      : `0 0 0 8px ${SURFACE}`};
  transition: border-color 0.5s ease, color 0.5s ease, background 0.5s ease, box-shadow 0.5s ease;

  svg,
  svg * {
    color: inherit;
  }

  @media (max-width: 760px) {
    grid-column: 1;
  }
`;

export const Body = styled.div`
  grid-row: 1;
  grid-column: ${({ $side }) => ($side === "left" ? 1 : 3)};
  display: flex;
  flex-direction: column;
  align-items: ${({ $side }) => ($side === "left" ? "flex-end" : "flex-start")};
  text-align: ${({ $side }) => ($side === "left" ? "right" : "left")};
  gap: clamp(18px, 1.8vw, 26px);
  min-width: 0;

  @media (max-width: 760px) {
    grid-column: 2;
    align-items: flex-start;
    text-align: left;
  }
`;

export const ItemTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: ${({ $side }) => ($side === "left" ? "flex-end" : "flex-start")};
  min-height: ${NODE_SIZE};
  font-size: clamp(22px, 2vw, 34px);
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: ${({ $active }) => ($active ? "#1355FF" : INACTIVE_GREY)};
  transition: color 0.5s ease;

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`;

export const Reveal = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 1.6vw, 24px);
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $active }) => ($active ? "none" : "translate3d(0, 28px, 0)")};
  transition: opacity 0.8s ${RISE_EASE}, transform 0.8s ${RISE_EASE};
`;

export const ItemBody = styled.p`
  max-width: 44ch;
  font-size: clamp(19px, 1.55vw, 27px);
  line-height: 1.55;
  color: #2b3345;
  text-wrap: pretty;
`;
