import { styled } from "styled-components";
import { breakpoints } from "../index.styled";

export const SmallTxt = styled.p`
  color: #1355FF;
  text-align: center;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
  /* Content/Subheading */
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
  margin-bottom: 72px;
  @media screen and (max-width: ${breakpoints.large}) {
    margin-bottom: 48px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.48px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 17px;
    margin-bottom: 48px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.48px;
  }
`

export const SecondaryColor = styled.span`
    color: #1355FF;
`

export const MainCard = styled.div`
  width: 1120px;
  height: 654px;
  border-radius: 24px;
  background: #F5F5F7;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: ${breakpoints.large}) {
    flex-direction: column;
    height: 900px;
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    height: 1035px;
    width: 382px;
  }
`

export const CardLeft = styled.div`
  position: relative;
  width: 448px;
  height: 654px;
  border-radius: 24px 0px 0px 24px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;

  @media screen and (max-width: ${breakpoints.large}) {
    order: 2;
    width: 760px;
    border-radius: 0px 0px 24px 24px;
    flex-direction: row;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    justify-content: flex-start;
    order: 1;
    width: 382px; 
    height: 584px;
    padding: 24px 0;
    border-radius: 0px 0px 24px 24px;
  }
`

export const BackImage = styled.img`
  position: absolute;
  height: 270px;
  right: -90px;
  top: -45px;
  @media screen and (max-width: ${breakpoints.large}) {
    height: 300px;
    right: 35px;
    top: -117px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 300px;
    right: -82px;
    top: -120px;
  }

`

export const LeftCardHeader = styled.h1`
  color: #333;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 122.222% */
  letter-spacing: -0.72px;
  margin-top: 72px;
  margin-bottom: 40px;
  margin-left:  96px;
  @media screen and (max-width: ${breakpoints.large}) {
    margin-left:  65px;
    margin-top: 32px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-left:  24px;
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 26px;
    letter-spacing: -0.52px;
  }
`

export const SubCard = styled.div`
  display: flex;
  width: 376px;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  margin-left:  96px;
  @media screen and (max-width: ${breakpoints.large}) {
    margin-left:  65px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-left:  24px;
  }

`

export const Circle = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 10px;
  border-radius: 152px;
  background: rgba(11, 99, 229, 0.20);

  
`

export const CircleIcon = styled.img`
  width: 32px;
  height: 32px;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 24px;
    height: 24px;
  }
`

export const CardContent = styled.div`
  diplay: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
`

export const Caption = styled.h1`
  color: #8E8E8F;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.14px;
  text-transform: uppercase;

`

export const ContentText = styled.p`
  color: #333;
  font-family: Inter;
  font-size: ${props => (props.medium ? '16px' : '20px')};
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`
export const CardFooter = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 78px;
  margin-left: 96px;
  @media screen and (max-width: ${breakpoints.large}) {
    align-items: flex-start;
    justify-content: center;
    margin: 0;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    align-items: flex-start;
    justify-content: center;
    margin: 0;
    padding-left: 24px;
  }

`

export const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
export const FooterLine = styled.img`
  width: 32px;
`

export const FooterText = styled.p`
  color: #8E8E8F;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`

export const FooterBottom = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`
export const SocialContainer =styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  border-radius: 5px;
  background: ${props => (props.blue ? '#0B63E5' : 'rgba(11, 99, 229, 0.20)')};

`

export const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const CardRight = styled.div`
  z-index: 10;
  width: 672px;
  border-radius: 0px 24px 24px 0px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${breakpoints.large}) {
    order: 1;
    width: 760px;
    border-radius: 24px 24px 0px 0px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    order: 2;
    width: 382px;
    height: 616px; 
  }
`

export const CardDetails = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`