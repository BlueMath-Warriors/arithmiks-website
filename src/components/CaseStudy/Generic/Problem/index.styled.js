import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const ProblemSection = styled.section`
  grid-area: problem;
  width: 100%;
  background-color: transparent;
  padding: 0 0 40px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 120px;

  @media screen and (max-width: ${breakpoints.large}) {
    margin-left: 80px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 16px 40px 16px;
    justify-content: center;
    margin-left: 0;
  }
`;

export const ProblemFrame = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 0 20px 20px 0;

  img {
    width: 100%;
    height: auto;
    display: block;
    transform: scale(0.94);
    transform-origin: left center;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 600px;
    img {
      transform: scale(0.95);
    }
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    min-height: auto;
    border-radius: 12px;
    img {
      transform: scale(1);
      transform-origin: left top;
      width: 100%;
    }
  }
`;

export const ProblemContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 60px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 50px 40px 0;
  gap: 12px;

  @media screen and (max-width: ${breakpoints.large}) {
    padding: 35px 40px 35px 0;
    left: 0;
    right: 50px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    position: absolute;
    padding: 25px 28px 25px 0;
    left: 0;
    right: 40px;
    gap: 8px;
    top: 0;
    bottom: 0;
    max-width: calc(100% - 40px);
  }

  @media screen and (max-width: ${breakpoints.small}) {
    position: absolute;
    padding: 20px 20px 20px 0;
    left: 0;
    right: 35px;
    gap: 6px;
    top: 0;
    bottom: 0;
    max-width: calc(100% - 35px);
  }

  @media screen and (max-width: 375px) {
    position: absolute;
    padding: 16px 16px 16px 0;
    left: 0;
    right: 30px;
    gap: 4px;
    top: 0;
    bottom: 0;
    max-width: calc(100% - 30px);
  }
`;

export const ProblemTitle = styled.h2`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 20px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 18px;
  }
`;

export const ProblemText = styled.p`
  color: #42526B;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 13px;
    line-height: 22px;
    max-width: 100%;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 11px;
    line-height: 19px;
    max-width: 100%;
  }

  @media screen and (max-width: 375px) {
    font-size: 10px;
    line-height: 18px;
    max-width: 100%;
  }
`;
