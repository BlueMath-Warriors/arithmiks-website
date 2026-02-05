import { styled } from "styled-components";
import { breakpoints } from "../index.styled";

export const SmallTxt = styled.p`
  color: #1355FF;
  text-align: center;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
  /* Content/Subheading */
  font-family: Poppins;
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
  font-family: Poppins;
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
  min-height: 662px;

  @media screen and (max-width: ${breakpoints.large}) {
    order: 2;
    width: 100%;
    max-width: 760px;
    border-radius: 0px 0px 24px 24px;
    flex-direction: row;
    min-height: auto;
    padding: 32px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    justify-content: flex-start;
    order: 1;
    width: 100%;
    max-width: 382px;
    border-radius: 0px 0px 24px 24px;
    min-height: auto;
    padding: 24px 20px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 100%;
    padding: 20px 16px;
    border-radius: 0px 0px 16px 16px;
  }
`;

export const BackImage = styled.div`
  position: absolute;
  height: 270px;
  right: 0px;
  bottom: 100px;
  top: auto;
  overflow: hidden;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
  
  @media screen and (max-width: ${breakpoints.large}) {
    right: 0px;
    bottom: 80px;
    top: auto;
    height: 250px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 200px;
    right: 0px;
    bottom: 40px;
    top: auto;
    opacity: 0.2;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    height: 150px;
    bottom: 20px;
    opacity: 0.15;
  }
`

export const LeftCardHeader = styled.h3`
  color: #fff;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.44px;
  margin-top: 72px;
  margin-bottom: 40px;
  margin-left: 48px;
  
  @media screen and (max-width: ${breakpoints.large}) {
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 32px;
  }
  
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 20px;
    letter-spacing: -0.4px;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    margin-bottom: 20px;
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`

export const SubCard = styled.div`
  display: flex;
  width: 376px;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  margin-left: 48px;
  
  @media screen and (max-width: ${breakpoints.large}) {
    width: 100%;
    max-width: 376px;
    margin-left: 0;
    margin-bottom: 20px;
  }
  
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px;
    gap: 12px;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    margin-bottom: 16px;
    gap: 12px;
  }
`

export const Circle = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 152px;
  background: rgba(11, 99, 229, 0.20);
  flex-shrink: 0;
  min-width: 48px;
  min-height: 48px;
  
  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 12px;
    min-width: 44px;
    min-height: 44px;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    padding: 10px;
    min-width: 40px;
    min-height: 40px;
  }
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    gap: 4px;
  }
`

export const Caption = styled.h1`
  color: #CEDDF8;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.14px;
  margin: 0;
  
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 15px;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    font-size: 14px;
  }
`

export const ContentText = styled.p`
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;

  @media screen and (max-width: ${breakpoints.xsmall}) {
    font-size: 14px;
  }
`;
export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-top: 40px;
  margin-left: 48px;
  margin-bottom: 72px;
  width: 100%;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: ${breakpoints.large}) {
    align-items: flex-start;
    margin-left: 0;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    align-items: flex-start;
    margin-left: 0;
    margin-top: 32px;
    margin-bottom: 24px;
    padding-left: 0;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    margin-top: 24px;
    margin-bottom: 20px;
    gap: 12px;
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
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 15px;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    font-size: 14px;
  }
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
  min-height: 44px;
  width: 100%;
  max-width: fit-content;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 10px 20px;
    min-height: 44px;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    padding: 10px 16px;
    gap: 10px;
    width: 100%;
    justify-content: center;
  }
`

export const LinkedInIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 20px;
    height: 20px;
  }
`

export const LinkedInButtonText = styled.span`
  color: #0957DE;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  white-space: nowrap;
  
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 15px;
  }
  
  @media screen and (max-width: ${breakpoints.xsmall}) {
    font-size: 14px;
    white-space: normal;
  }
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
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 1;
  
  @media screen and (max-width: ${breakpoints.large}) {
    flex: 1;
  }
  
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`