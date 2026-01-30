import { styled, keyframes } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const TechStackSection = styled.section`
  width: 100%;
  background-color: #0957DE;
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 20px 0;
  }
`;

export const TechStackContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const TechStackTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  animation: ${scroll} 20s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    gap: 64px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 40px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    gap: 32px;
  }
`;

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-width: 80px;
  flex-shrink: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    min-width: 60px;
    gap: 4px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    min-width: 50px;
  }
`;

export const TechIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: brightness(0) invert(1);

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 32px;
    height: 32px;
  }
`;

export const PostmarkIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: none;

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 32px;
    height: 32px;
  }
`;

export const TechName = styled.span`
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
  }
`;

