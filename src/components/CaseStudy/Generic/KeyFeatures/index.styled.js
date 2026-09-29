import styled from "styled-components";
import { colors } from "../../../../styles/tokens";
import { bandPadding } from "../layout.styled";

const SLIDE_EASE = "cubic-bezier(0.65, 0, 0.35, 1)";
const ARROW_BG = "#ceddf8";
const ARROW_COLOR = "#0957de";
const INACTIVE_DOT = "#d6d6d6";

export const FeaturesSection = styled.section`
  ${bandPadding}
  background: linear-gradient(180deg, #e6eefc 0%, #ffffff 100%);
  overflow: clip;
`;

export const Header = styled.div`
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
`;

export const Body = styled.div`
  margin-top: clamp(40px, 4vw, 64px);
`;

export const Caption = styled.div`
  will-change: transform, opacity;
`;

export const CaptionTitle = styled.h3`
  margin: 0;
  font-size: clamp(19px, 1.7vw, 28px);
  font-weight: 700;
  letter-spacing: -0.012em;
  line-height: 1.3;
  color: ${colors.primary};
`;

export const CaptionText = styled.p`
  margin-top: 12px;
  font-size: clamp(15px, 1.25vw, 20px);
  line-height: 1.6;
  color: ${colors.textMuted};
`;

export const Stage = styled.div`
  --gap: clamp(28px, 3.55vw, 68px);
  --arrow: clamp(40px, 3.06vw, 56px);
  position: relative;
  width: min(100%, 76vw, calc((100svh - 230px) * 1.8028));
  min-width: min(100%, 640px);
  margin: clamp(24px, 2.6vw, 40px) auto 0;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Track = styled.div`
  position: relative;
  z-index: 1;
  isolation: isolate;
  aspect-ratio: 1033 / 573;
  touch-action: pan-y;
  user-select: none;
`;

export const Slide = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $transform }) => $transform};
  opacity: ${({ $opacity }) => $opacity};
  z-index: ${({ $zIndex }) => $zIndex};
  transition: transform 0.75s ${SLIDE_EASE}, opacity 0.6s ease;
  will-change: transform;
  pointer-events: none;

  @media (max-width: 900px) {
    ${({ $isNeighbour }) => $isNeighbour && "opacity: 0;"}
  }
`;

const SLIDE_SHADOW = "0 2px 30px rgba(0, 0, 0, 0.15)";
const SLIDE_RADIUS = "8px";

// A screenshot with the design's 1.6 aspect fills a white card and is cropped
// to it. Any other image is shown whole, centred, with the same radius and
// shadow on the image itself, so nothing is cropped and no white bars show.
export const SlideCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${({ $framed }) =>
    $framed
      ? `background: #fff; border-radius: ${SLIDE_RADIUS}; box-shadow: ${SLIDE_SHADOW}; overflow: hidden;`
      : "display: flex; align-items: center; justify-content: center;"}

  img {
    display: block;
    ${({ $framed }) =>
      $framed
        ? "width: 100%; height: 100%; object-fit: cover; object-position: left top;"
        : `max-width: 100%; max-height: 100%; width: auto; height: auto; border-radius: ${SLIDE_RADIUS}; box-shadow: ${SLIDE_SHADOW};`}
    opacity: ${({ $isNeighbour }) => ($isNeighbour ? 0.5 : 1)};
    transition: opacity 0.75s ease;
  }
`;

// A blue wash fades in over a neighbour once it has parked beside the main card.
export const Wash = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    ${({ $direction }) => $direction},
    rgba(13, 109, 235, 0) 0%,
    rgba(13, 109, 235, 0.15) 26%,
    rgba(13, 109, 235, 0.15) 100%
  );
  opacity: ${({ $isNeighbour }) => ($isNeighbour ? 1 : 0)};
  transition: ${({ $isNeighbour }) => ($isNeighbour ? "opacity 0.3s ease 0.75s" : "opacity 0s")};
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  ${({ $side }) =>
    $side === "left"
      ? "left: calc(-1 * (var(--gap) + var(--arrow) / 2) + 4px);"
      : "right: calc(-1 * (var(--gap) + var(--arrow) / 2) + 4px);"}
  z-index: 10;
  transform: translateY(-50%);
  width: var(--arrow);
  height: var(--arrow);
  border-radius: 50%;
  background: ${ARROW_BG};
  border: 0;
  color: ${ARROW_COLOR};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s ease, color 0.25s ease;

  svg,
  svg * {
    color: inherit;
  }

  &:hover {
    background: ${colors.primary};
    color: #fff;
  }

  @media (max-width: 900px) {
    ${({ $side }) => ($side === "left" ? "left: 10px;" : "right: 10px;")}
    box-shadow: 0 8px 22px -12px rgba(19, 85, 255, 0.45);
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: clamp(32px, 3.2vw, 52px);
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  padding: 0;
  border-radius: 50%;
  border: 0;
  background: ${({ $active }) => ($active ? colors.primary : INACTIVE_DOT)};
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
