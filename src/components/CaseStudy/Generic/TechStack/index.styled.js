import { styled, keyframes } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-33.33%);
  }
`;

export const TechStackSection = styled.section`
  width: 100%;
  background-color: #0957DE;
  padding: 24px 0;
  overflow: hidden;
  margin-top: -1px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 20px 0;
  }
`;

export const TechStackContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const TechStackTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const TechStackGroup = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 80px;
  padding-right: 80px;

  @media screen and (max-width: ${breakpoints.large}) {
    gap: 64px;
    padding-right: 64px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 40px;
    padding-right: 40px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    gap: 32px;
    padding-right: 32px;
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

export const SpecialIcon = styled.img`
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
