import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const TextContainer = styled.div`
  display: flex;
  width: 465px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 762px;
    gap: 8px;
  }
  @media screen and (max-width: ${breakpoints.medium}) { 
    width: 382px;
  }
`

export const PrimaryText = styled.h3`
  color: #FFF;
  font-family: Lexend;
  font-size: 46px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-family: Plus Jakarta Sans;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -1.2px;
  }
  @media screen and (max-width: ${breakpoints.medium}) { 
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.96px;
  }
`

export const Caption = styled.p`
  color: #FFF;
  color: rgba(255, 255, 255, 0.60);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-family: Plus Jakarta Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.4px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }
`

export const MoreButton = styled.button`
  display: flex;
  width: 183.273px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 7px;
  background: #0B63E5;
  margin-top: 24px;
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: capitalize;
  @media screen and (max-width: ${breakpoints.large}) {
    margin-top: 8px;
  }
`


export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 24px;
  @media screen and (max-width: ${breakpoints.large}) {
  }
  @media screen and (max-width: ${breakpoints.medium}) { 
    flex-direction: column;
  }
`

export const CardCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: ${props => (props.down ? '35px' : '0px')};
  @media screen and (max-width: ${breakpoints.large}) {
    
  }
  @media screen and (max-width: ${breakpoints.medium}) {
  }

`

export const Card = styled.div`
  display: flex;
  width: 312px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 16px;
  background: #0B63E5;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
  }

`

export const CardTitle = styled.h4`
  color: #FFF;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`

export const CardDetail = styled.p`
  color: rgba(255, 255, 255, 0.50);

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

export const CardIcon = styled.div`
  padding: 16px;
  background: ${props => (props.hover ? '#FFF' : 'rgba(255, 255, 255, 0.20)')};
  border-radius: 8px;

`