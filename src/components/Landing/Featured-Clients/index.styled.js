import { styled } from "styled-components";
import { breakpoints } from "../index.styled";

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 90px;
  margin-left: 180px;
  padding: 0 20px;
  
  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 760px;
    margin-left: 0;
    margin-top: 60px;
  }
  
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 100%;
    margin-left: 0;
    margin-top: 40px;
    padding: 0 16px;
  }
  
  @media screen and (max-width: ${breakpoints.small}) {
    margin-top: 30px;
    padding: 0 12px;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    margin-top: 20px;
    padding: 0 10px;
  }
`;

export const SectionTitle = styled.h2`
  color: #858585;
  text-align: left;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 30px;
  width: 100%;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  @media screen and (max-width: ${breakpoints.small}) {
    font-size: 14px;
    margin-bottom: 16px;
    letter-spacing: 0.5px;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
  width: 100%;

  @media screen and (max-width: ${breakpoints.large}) {
    gap: 40px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 24px;
    justify-content: center;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    gap: 20px;
    justify-content: center;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    gap: 16px;
    justify-content: center;
  }
`;

export const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const LogoImg = styled.img`
  height: 60px;
  width: auto;
  max-width: 180px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.3s ease, opacity 0.3s ease;

  ${LogoItem}:hover & {
    filter: grayscale(0%);
    opacity: 1;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    height: 50px;
    max-width: 150px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 40px;
    max-width: 120px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    height: 35px;
    max-width: 100px;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    height: 30px;
    max-width: 80px;
  }
`;
