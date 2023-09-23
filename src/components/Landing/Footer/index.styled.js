import { styled } from "styled-components";

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const Arithmiks = styled.div`
  display: flex;
  flex-direction: column;
  width: 188px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  margin-right: 117px;
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
  line-height: 80%; /* 19.2px */
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

  ${props =>
    props.fontSize18 &&
    `
      font-size: 18px;
    `}
`

export const Services = styled.div`
  display: flex;
  flex-direction: column;
  width: 192px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-right: 50px;
`

export const Technologies = styled.div`
  display: flex;
  flex-direction: column;
  width: 151px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-right: 61.5px;
`

export const Industries = styled.div`
  display: flex;
  flex-direction: column;
  width: 103px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-right: 88px;
`

export const Experties = styled.div`
  display: flex;
  flex-direction: column;
  width: 128px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`

export const Divider =  styled.hr`
  width: 1120px;
  border-width: 1px; 
  margin-top: 48px;
  border-color: #0B63E5;
`

export const FooterBottom = styled.div`
  display: flex;
  width: 1120px;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`

export const FooterLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 32px;
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
    } `}

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