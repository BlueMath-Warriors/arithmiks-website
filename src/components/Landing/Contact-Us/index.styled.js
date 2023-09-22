import { styled } from "styled-components";

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
`

export const SecondaryColor = styled.span`
    color: #1355FF;
`

export const MainCard = styled.div`
  width: 1120px;
  height: 654px;
  border-radius: 24px;
  background: #996767;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardLeft = styled.div`
  position: relative;
  width: 448px;
  height: 654px;
  border-radius: 24px 0px 0px 24px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BackImage = styled.img`
  position: absolute;
  width: 211.755px;
  height: 261px;
  right: -32px;
  top: 0;
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
  margin-left:  72px;
`

export const SubCard = styled.div`
  display: flex;
  width: 376px;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  margin-left:  72px;

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
`

export const CardContent = styled.div`
  diplay: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 6px;
`

export const Caption = styled.h1`
  color: #1D1D1F;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
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
  margin-left: 72px;
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
  gap: 8px;
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
  height: 654px;
  border-radius: 24px;
  background: #996767;
  display: flex;
  justify-content: center;
  align-items: center;
`