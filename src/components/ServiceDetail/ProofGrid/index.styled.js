import styled from "styled-components";
import { colors } from "../../../styles/tokens";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export const Section = styled.section`
  position: relative;
  padding: clamp(72px, 6.4vw, 120px) 0;
  background: ${colors.surface};
  overflow: clip;

  @media (max-width: 640px) {
    padding: 64px 0;
  }
`;

export const Glow = styled.div`
  position: absolute;
  top: -8%;
  left: -6%;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 50%, rgba(19, 85, 255, 0.1), transparent 68%);
  pointer-events: none;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  gap: clamp(40px, 6vw, 120px);
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

// Holds its place while the rows scroll past, until the grid stacks.
export const Intro = styled.div`
  position: sticky;
  top: clamp(120px, 22vh, 200px);
  padding-top: clamp(30px, 4vw, 60px);

  @media (max-width: 900px) {
    position: static;
    padding-top: 0;
  }
`;

export const IntroText = styled.p`
  margin: 22px 0 0;
  max-width: 46ch;
  font-size: clamp(15.5px, 1.15vw, 18px);
  line-height: 1.65;
  color: ${colors.textMuted};
  text-wrap: pretty;
`;

export const Cta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 34px;
  padding: 13px 24px;
  border-radius: 100px;
  background: ${colors.primary};
  color: #fff;
  font-size: 15px;
  font-weight: 550;
  transition:
    transform 0.25s ease,
    background 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: #2b66ff;
    color: #fff;
  }

  span {
    color: inherit;
  }
`;

export const List = styled.div`
  min-width: 0;
`;

export const Tile = styled.span`
  display: flex;
  align-items: flex-start;
  width: 36px;
  height: 36px;
  padding-top: 1px;

  svg {
    display: block;
    overflow: visible;
    transition: transform 0.35s ${EASE};
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  gap: clamp(18px, 2vw, 30px);
  padding: clamp(30px, 3vw, 44px) 0;
  border-bottom: 1px solid #dde3ee;

  &:last-child {
    border-bottom: 0;
  }

  &:hover ${Tile} svg {
    transform: translateY(-2px);
  }
`;

export const Body = styled.div`
  min-width: 0;
`;

export const Tag = styled.span`
  display: block;
  font-size: 13.5px;
  font-weight: 550;
  line-height: 1.4;
  color: ${colors.primary};
`;

export const Name = styled.h3`
  margin: ${({ $afterTag }) => ($afterTag ? "8px 0 0" : "0")};
  font-size: clamp(19px, 1.5vw, 23px);
  font-weight: 650;
  letter-spacing: -0.016em;
  line-height: 1.25;
  color: ${colors.text};
`;

const bodyType = `
  font-size: clamp(15px, 1.05vw, 16px);
  text-wrap: pretty;
`;

export const Claim = styled.p`
  margin: 12px 0 0;
  ${bodyType}
  line-height: 1.6;
  color: ${colors.textFaint};
`;

export const SourceLink = styled.a`
  color: ${colors.primary};
  font-weight: 550;
  text-decoration: underline;
  text-decoration-color: rgba(19, 85, 255, 0.35);
  text-underline-offset: 2px;

  &:hover {
    color: ${colors.primary};
    text-decoration-color: ${colors.primary};
  }
`;

export const ApproachTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 0 0;
  font-size: clamp(15.5px, 1.15vw, 17px);
  font-weight: 650;
  letter-spacing: -0.01em;
  line-height: 1.3;
  color: ${colors.text};

  svg {
    flex: none;
    display: block;
  }
`;

export const Steps = styled.ul`
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Step = styled.li`
  display: flex;
  gap: 10px;
  align-items: baseline;
  ${bodyType}
  line-height: 1.5;
  color: ${colors.textMuted};

  span {
    color: inherit;
  }

  span:first-child {
    flex: none;
    color: ${colors.primary};
  }
`;
