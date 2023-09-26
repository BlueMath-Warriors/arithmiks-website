import { styled } from "styled-components";

const breakpoints = {
  small: "820px",
  medium: "820px",
  large: "1040px",
  x_large: "1440px",
};

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: ${breakpoints.x_large}) {
    gap: 16px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 32px;
    flex-wrap: wrap;
  }
`

export const Arithmiks = styled.div`
  display: flex;
  flex-direction: column;
  width: 188px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-right: 117px;

  @media screen and (max-width: ${breakpoints.x_large}) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
    width: 100%;
    gap: 16px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 0px;
    width: 100%;
    gap: 16px;
    padding: 0 16px;
  }

`

export const LogoHeading = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
`

export const Logo = styled.img`
  height: 32px;
`

export const CompanyName = styled.h1`
  color: #1A202C;
  text-align: justify;
  font-family: Space Grotesk;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 80%;
  width: 123px;
  letter-spacing: -0.72px;
`
export const Heading = styled.h1`
  color: #1A202C;
  font-family: Plus Jakarta Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
  margin-bottom: 16px;
  @media screen and (max-width: ${breakpoints.x_large}) {
    margin-right: 0px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-right: 0px;
    margin-bottom: 12px;
    font-size: 24px;
    letter-spacing: -0.48px;
  }

  ${props => props.mb8 && `margin-bottom: 8px;`}

`

export const Text = styled.p`
  color: #596780;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.36px;
  cursor: pointer;
  @media screen and (max-width: ${breakpoints.x_large}) {
    color: #596780;
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;    
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: -0.4px;
  }
`

export const Moto = styled.p`
  color: #596780;
  font-family: Plus Jakarta Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.36px;
  cursor: pointer;
  @media screen and (max-width: ${breakpoints.x_large}) {
    width: 434px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  width: 176px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-right: 50px;
  @media screen and (max-width: ${breakpoints.x_large}) {
    margin-right: 0px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 16px;
    width: 100%;
    gap: 4px;
  }

`

export const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  width: 176px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-right: 61.5px;
  @media screen and (max-width: ${breakpoints.x_large}) {
    margin-right: 0px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 16px;
    width: 100%;
    gap: 4px;
  }

`

export const Industries = styled.div`
  display: flex;
  flex-direction: column;
  width: 176px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-right: 88px;
  @media screen and (max-width: ${breakpoints.x_large}) {
    margin-right: 0px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 16px;
    width: 100%;
    gap: 4px;
  }

`

export const Experties = styled.div`
  display: flex;
  flex-direction: column;
  width: 176px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  @media screen and (max-width: ${breakpoints.x_large}) {
    margin-right: 0px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 16px;
    width: 100%;
    gap: 4px;
  }

`

export const Divider =  styled.hr`
  width: 1120px;
  border-width: 1px; 
  margin-top: 48px;
  border-color: #0B63E5;

  @media screen and (max-width: ${breakpoints.x_large}) {
    width: 760px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 398px;
  }  
`

export const FooterBottom = styled.div`
  display: flex;
  width: 1120px;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  @media screen and (max-width: ${breakpoints.x_large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 16px;
    width: 398px;
    flex-direction: column;
    gap: 8px;
  }

`

export const FooterLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 4px;
  }

`

export const Link = styled.a`
  color:#1A202C;
  font-family: Plus Jakarta Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.36px;
  ${props =>
    props.divider &&
    ` &::after {
      content: " I"; 
      color: #1A202C; 
      font-size: 18px;
      line-height: 150%; 
      letter-spacing: -0.36px; 
      margin-left: 32px;
    } `
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.28px;
  }
`

export const CopyRightText = styled.p`
  color: #596780;
  text-align: right;

  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.32px;
`