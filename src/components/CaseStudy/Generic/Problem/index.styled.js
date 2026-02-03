import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const ProblemSection = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 0 0 40px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -300px;

  @media screen and (max-width: ${breakpoints.large}) {
    margin-top: -200px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 16px 30px 16px;
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
    padding: 30px 32px;
    left: 40px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    padding: 20px 16px;
    left: 30px;
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
    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 12px;
    line-height: 18px;
  }
`;
