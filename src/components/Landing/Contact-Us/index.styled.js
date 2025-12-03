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
  margin-bottom: 16px;
  @media screen and (max-width: ${breakpoints.large}) {
    margin-bottom: 12px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.48px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 12px;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -0.48px;
  }
`

export const SecondaryColor = styled.span`
    color: #1355FF;
`

export const DescriptionText = styled.p`
  color: #42526B;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  margin: 0 auto;
  margin-bottom: 72px;
  max-width: 600px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 48px;
    max-width: 500px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 32px;
    padding: 0 20px;
  }
`

export const MainCard = styled.div`
  width: 1120px;
  border-radius: 24px;
  background: #f5f5f7;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakpoints.large}) {
    flex-direction: column;
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    width: 382px;
  }
  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 95%;
  }
`;

export const CardLeft = styled.div`
  position: relative;
  width: 448px;
  border-radius: 24px 0px 0px 24px;
  background: #0957DE;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  height: 662px;

  @media screen and (max-width: ${breakpoints.large}) {
    order: 2;
    width: 760px;
    border-radius: 0px 0px 24px 24px;
    flex-direction: row;
    height: 100%;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    justify-content: flex-start;
    order: 1;
    width: 382px;
    border-radius: 0px 0px 24px 24px;
    height: 100%;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 95%;
  }
`;

export const BackImage = styled.div`
  position: absolute;
  height: 270px;
  right: -20px;
  bottom: 100px;
  top: auto;
  @media screen and (max-width: ${breakpoints.large}) {
     right: 0px;
    bottom: 80px;
    top: auto;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 300px;
    right: -22px;
    bottom: 60px;
    top: auto;
  }

`

export const LeftCardHeader = styled.h3`
  color: #fff;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 122.222% */
  letter-spacing: -0.72px;
  margin-top: 72px;
  margin-bottom: 40px;
  margin-left:  48px;
  @media screen and (max-width: ${breakpoints.large}) {
    margin-left:  32px;
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
  margin-left:  48px;
  @media screen and (max-width: ${breakpoints.large}) {
    margin-left:  32px;
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
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.14px;
  text-transform: uppercase;

`

export const ContentText = styled.p`
  color: #fff;
  font-family: Inter;
  font-size: ${(props) => (props.medium ? "16px" : "20px")};
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  @media screen and (max-width: ${breakpoints.xsmall}) {
    font-size: 18px;
  }
`;
export const CardFooter = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 40px;
  margin-left: 48px;
  margin-bottom: 72px;
  @media screen and (max-width: ${breakpoints.large}) {
    align-items: flex-start;
    justify-content: center;
    margin-left: 32px;
    margin-top: 32px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    align-items: flex-start;
    justify-content: center;
    margin: 0 0 24px 0;
    padding-left: 24px;
  }

`

export const FooterTop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`
export const FooterLine = styled.div`
  width: 32px;
  height: 1px;
  background-color: #3A79E5;
`

export const FooterText = styled.p`
  color: #fff;
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

  a {
    display: inline-block;
    text-decoration: none;
  }
`

export const LinkedInButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  background: #fff;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`

export const LinkedInIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`

export const LinkedInButtonText = styled.span`
  color: #0957DE;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
`

export const SocialContainer =styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  border-radius: 5px;
  background: rgba(11, 99, 229, 0.20);

  &:hover {
    background-color: #0B63E5;
  }

`

export const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const CardDetails = styled.div`
  padding: 0 0 8px 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`