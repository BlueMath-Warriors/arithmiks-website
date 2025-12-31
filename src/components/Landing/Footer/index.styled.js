import { styled } from "styled-components";
import { breakpoints } from "../index.styled";

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: ${breakpoints.large}) {
    gap: 16px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 32px;
    flex-wrap: wrap;
    width: 382px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 95%;
  }
`;

export const Arithmiks = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-right: 117px;

  @media screen and (max-width: ${breakpoints.large}) {
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
export const Heading = styled.p`
  color: #1A202C;
  font-family: Plus Jakarta Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
  margin-bottom: 16px;
  @media screen and (max-width: ${breakpoints.large}) {
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

export const Text = styled.a`
  color: #596780;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.36px;
  cursor: pointer;
  @media screen and (max-width: ${breakpoints.large}) {
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
  @media screen and (max-width: ${breakpoints.large}) {
    width: 434px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`

export const CompanyTextHighlight = styled.span`
  background: linear-gradient(90deg, #0957DE 0%, #BC4E9B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  width: 192px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-right: 50px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 176px;
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
  width: 151px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-right: 61.5px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 176px;
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
  width: 103.5px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-right: 88px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 176px;
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
  width: 128px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 176px;
    margin-right: 0px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 0 16px;
    width: 100%;
    gap: 4px;
  }

`

export const Divider =  styled.hr`
  width: 100vw;
  max-width: 100%;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  border-width: 1px; 
  margin-top: 48px;
  margin-bottom: 0;
  border-color: #0B63E5;
  border-top: 1px solid #0B63E5;
  border-bottom: none;

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
  }  
`

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 240px;
  margin-top: 48px;
  width: 1120px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    gap: 180px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    width: 100%;
    gap: 40px;
    padding: 0 16px;
  }
`

export const FooterCaption = styled.h1`
  color: #1A202C;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.14px;
  text-transform: uppercase;
  margin: 0;
`

export const FooterContentText = styled.p`
  color: #596780;
  font-family: Inter;
  font-size: ${(props) => (props.medium ? "16px" : "20px")};
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  margin: 0;

  a {
    color: #596780;
    text-decoration: none;
    
    &:hover {
      color: #0957DE;
    }
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    font-size: 18px;
  }
`

export const FooterCircle = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: fit-content;
  height: fit-content;

  svg {
    width: 48px;
    height: 48px;
    display: block;
  }
`

export const FooterBottom = styled.div`
  display: flex;
  width: 1120px;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 16px;
    width: 95%;
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
    justify-content: center;
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
  @media screen and (max-width: ${breakpoints.medium}) {
    ${props =>
    props.divider &&
    ` &::after {
      content: " I"; 
      color: #1A202C; 
      font-size: 18px;
      line-height: 150%; 
      letter-spacing: -0.36px; 
      margin-left: 4px;
    } `
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