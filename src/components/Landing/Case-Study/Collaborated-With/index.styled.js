import { styled } from "styled-components";
import { breakpoints } from "../../index.styled";

export const CollaboratedSection = styled.div`
  width: 100vw;
  max-width: 100%;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-top: 40px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.large}) {
    margin-top: 30px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 20px;
  }
`;

export const CollaboratedTitle = styled.h3`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: -0.3px;
  margin-bottom: 48px;
  text-align: center;
  width: 100%;
  max-width: 1120px;
  padding: 0 20px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 32px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;

export const ScrollingContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
`;

export const ScrollingRow = styled.div`
  display: flex;
  gap: 24px;
  width: fit-content;
  will-change: transform;
  animation: ${(props) =>
    props.direction === "left"
      ? "scroll-left 30s linear infinite"
      : "scroll-right 30s linear infinite"};

  @keyframes scroll-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes scroll-right {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 16px;
  }
`;

export const LogoCard = styled.div`
  flex-shrink: 0;
  width: 180px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  padding: 20px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 160px;
    height: 100px;
    padding: 16px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 140px;
    height: 90px;
    padding: 12px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 120px;
    height: 80px;
    padding: 10px;
  }
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: grayscale(0%);
  opacity: 1;
`;

