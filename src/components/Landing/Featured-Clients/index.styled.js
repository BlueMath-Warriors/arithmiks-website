import { styled } from "styled-components";
import { breakpoints } from "../index.styled";

export const FeaturedClientsSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 90px;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.large}) {
    margin-top: 72px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 60px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    margin-top: 48px;
  }
`;

export const FeaturedClientsTitle = styled.h3`
  color: #858585;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 24px;
  text-align: left;
  width: 100%;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

export const ScrollingContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 8px 0;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
`;

export const ScrollingRow = styled.div`
  display: flex;
  gap: 32px;
  width: fit-content;
  will-change: transform;
  animation: ${(props) =>
    props.direction === "left"
      ? "scroll-left 40s linear infinite"
      : "scroll-right 40s linear infinite"};

  @keyframes scroll-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-33.333%);
    }
  }

  @keyframes scroll-right {
    from {
      transform: translateX(-33.333%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: translateX(0);
  }

  @media screen and (max-width: ${breakpoints.large}) {
    gap: 24px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 20px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    gap: 16px;
  }
`;

export const LogoCard = styled.div`
  flex-shrink: 0;
  width: 160px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    width: 140px;
    height: 70px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 120px;
    height: 60px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 100px;
    height: 50px;
  }
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: filter 0.3s ease, opacity 0.3s ease;

  ${LogoCard}:hover & {
    filter: grayscale(0%);
    opacity: 1;
  }
`;
