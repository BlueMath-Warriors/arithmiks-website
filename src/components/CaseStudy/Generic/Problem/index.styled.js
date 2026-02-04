import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const ProblemSection = styled.section`
  width: 100%;
  background-color: transparent;
  padding: 0 0 40px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -300px;

  @media screen and (max-width: ${breakpoints.large}) {
    margin-top: -200px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 16px 40px 16px;
    justify-content: center;
    margin-top: 20px;
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
  }

  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 600px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 100%;
    justify-content: center;
    min-height: auto;
    border-radius: 12px;
  }
`;

export const ProblemContent = styled.div`
  position: absolute;
  top: 0;
  left: 70px;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px 50px;
  gap: 12px;

  @media screen and (max-width: ${breakpoints.large}) {
    padding: 35px 40px;
    left: 50px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 25px 28px;
    left: 35px;
    gap: 8px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    padding: 18px 14px;
    left: 25px;
    gap: 6px;
  }

  @media screen and (max-width: 375px) {
    padding: 14px 10px;
    left: 20px;
    gap: 4px;
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
  line-height: 24px;
  margin: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 13px;
    line-height: 19px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 11px;
    line-height: 16px;
  }

  @media screen and (max-width: 375px) {
    font-size: 10px;
    line-height: 15px;
  }
`;
