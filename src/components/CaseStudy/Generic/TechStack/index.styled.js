import styled, { keyframes } from "styled-components";
import { colors } from "../../../../styles/tokens";

// The design runs 18 logos in 94s; other pages have fewer, so the duration
// scales with the item count to keep the scroll speed the same.
const SECONDS_PER_ITEM = 94 / 18;

const marquee = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-33.3333%, 0, 0); }
`;

export const TechStackSection = styled.section`
  position: relative;
  z-index: 3;
  margin-top: -5px;
  background: ${colors.primary};
  color: #fff;
  padding: clamp(22px, 1.9vw, 28px) 0;
`;

export const TechStackContainer = styled.div`
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0, #000 7%, #000 93%, transparent 100%);
`;

export const TechStackTrack = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: max-content;
  animation: ${marquee} ${({ $itemCount }) => $itemCount * SECONDS_PER_ITEM}s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const TechItem = styled.li`
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: clamp(120px, 11.5vw, 190px);
`;

const iconSize = `
  width: clamp(34px, 2.2vw, 40px);
  height: clamp(34px, 2.2vw, 40px);
  display: block;
  object-fit: contain;
`;

export const TechIcon = styled.img`
  ${iconSize}
  filter: brightness(0) invert(1);
`;

export const SpecialIcon = styled.img`
  ${iconSize}
`;

export const TechName = styled.span`
  font-size: clamp(13px, 0.95vw, 15px);
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
`;
