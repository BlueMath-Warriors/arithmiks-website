import { styled } from "styled-components";
import { breakpoints } from "../index.styled";

export const Header = styled.div`
  height: 92px;
  width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  margin-bottom: 35px;

  @media screen and (max-width: ${breakpoints.large}) {
    height: 62px;
    margin-bottom: 38px;
    width: 760px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 62px;
    margin-bottom: 68px;
    width: 382px;
  }

`
export const Left = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const Right = styled.div`
  display: flex;
  `
export const SmallTxt = styled.p`
  color: #1355FF;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin-bottom: 8px;
`
export const HeaderText = styled.h2`
  color: #061237;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'cpsp' on, 'cv06' on, 'cv09' on, 'cv04' on, 'cv03' on, 'case' on, 'ss03' on;
  font-family: Poppins;
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.66px;
  width: 430px;
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 32px;
    line-height: 30px;
    letter-spacing: -0.48px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 200px;
  }
`

export const SecondaryColor = styled.span`
    color: #1355FF;
`

export const ViewButton = styled.a`
  display: inline-flex;
  padding: 12px 16px 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid #E7EAEE;
  background: #FFF;
  height: 49px;

  color: #07090D;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
`
export const BtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1120px;
  height: 987px;
  flex-shrink: 0;
  gap: 32px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    height: 670px;
    gap: 16px;
  }
  @media screen and (max-width: ${breakpoints.medium}) { 
    width: 382px;
    height: 1390px;
    gap: 0px;
    flex-direction: column;
  }
`

export const CardCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 32px;
  margin-top: ${props => (props.down ? '35px' : '0px')};
  @media screen and (max-width: ${breakpoints.large}) {
    gap: 22px;
    margin-top: ${props => (props.down ? '24px' : '0px')};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 16px;
    height: 688px;
  }

`

