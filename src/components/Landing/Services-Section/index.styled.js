import { styled } from "styled-components";
import {breakpoints} from "../index.styled"

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
export const HeaderText = styled.h1`
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

export const ViewButton = styled.button`
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

export const Card = styled.div`
  width: 544px;
  height: 460px;
  background:   ${props => (props.blue ? '#1355FF' : '#F5F5F7')};
  ${props => (
    props.topleft ? 'border-radius: 50px 0px 0px 0px' :
    props.topright ? 'border-radius: 0px 50px 0px 0px' :
    props.bottomleft ? 'border-radius: 0px 0px 0px 50px' :
    props.bottomright ? 'border-radius: 0px 0px 50px 0px' :
    'border-radius: 0px'
  )};

  @media screen and (max-width: ${breakpoints.large}) {
    width: 372px;
    height: 312px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    height: 336px; 
    ${props => (
      props.topleft ? 'border-radius: 50px 60px 0px 0px' :
      props.bottomright ? 'border-radius: 0px 0px 50px 50px' :
      'border-radius: 0px'
    )};
  }

`

export const CardHeader = styled.div`
  display: inline-flex;
  align-items: center;
  padding-top: 64px;
  padding-left: 32px;
  margin-bottom: 24px;
  @media screen and (max-width: ${breakpoints.large}) {
    padding-top: 30px;
    padding-left: 22px;
    }



`
export const CardIcon = styled.img`
  width: 52px;
  height: 52px;
  margin: 12px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 32px;
    height: 32px;
    margin: 0 16px 0 0;
  }
`
export const CardHeaderText = styled.h1`
  color: ${props => (props.white ? '#FFF' : '#1D1D1F')};
  font-family: Urbanist;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.32px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.22px;
  }

`
export const CardDetailIcon = styled.img`
  width: 24px;
  height: 24px;
  color: #1D1D1FCC;
`
export const CardBodyDetail = styled.div`
  display: flex;
  padding: 4px 0px;
  gap: 8px;
  padding-left: 56px;
  color: #1D1D1FCC;
  margin-bottom: 8px;
  @media screen and (max-width: ${breakpoints.large}) {
    padding-left: 24px;
    margin-bottom: 0px;
    align-items: center;
    padding-right: 20px;
  }

`
export const CardBodyText = styled.h1`
color: ${props =>
  props.white ? '#FFF' :
  props.bold ? '#000' :
  'rgba(29, 29, 31, 0.80)'};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: ${props => props.bold ? '700' : '500'};
  line-height: 24px;
  letter-spacing: 0.48px;
  text-decoration-line: ${props => props.bold ? 'underline' : 'none'};

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 18px;
    letter-spacing: 0.36px;
  }
`