import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const SmallTxt = styled.p`
  color: #0B63E5;
  text-align: center;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;  
  margin-bottom: 16px;
`

export const PrimaryText = styled.h2`
  color: #07090D;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'cpsp' on, 'cv06' on, 'cv09' on, 'cv04' on, 'cv03' on, 'case' on, 'ss03' on;
  font-family: Poppins;
  font-size: 44px;
  font-style: normal;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: -0.66px;

  margin-bottom: 48px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: -0.36px;

    margin-bottom: 12px;
  }
`

export const Secondary = styled.span`
  color: #0B63E5;
`