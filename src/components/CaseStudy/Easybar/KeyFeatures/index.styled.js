import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const PrimaryHeading = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;

  margin-top: 79px;
  margin-bottom: 16px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 44px;
  }
`

export const Secondary = styled.span`
  color: #1355FF; 
`

export const MainCaption = styled.p`
  color: rgba(0, 0, 0, 0.60);
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  max-width: 600px;
  text-align: center;
  margin-bottom: 79px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 20px;
    max-width: 600px;
  }
`