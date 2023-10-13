import { styled } from "styled-components";
import quotes from "../../../../images/quotes.svg";
import { breakpoints } from "../../../Landing/index.styled";

export const TestimonialContainer = styled.div`
  margin-top: 220px;
  max-width: 1130px;
  position: relative;
  @media screen and (max-width: 1350px) {
    max-width: 760px;
    margin-top: 81px;
  } 
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 382px;
    margin-top: 73px;
  }

`

export const TextContainer = styled.div`
  position: relative;
`

export const TestimonalText = styled.p`
  color: #1355FF;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;

  @media screen and (max-width: 1350px) {
    font-size: 28px;
    line-height: normal;
  }  
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 20px;
  }  

`
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  margin-top: 67px;
  margin-bottom: 180px;
  @media screen and (max-width: 1350px) {
    margin-bottom: 64.5px;
  } 
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 45px;
  }
`
export const Name = styled.p`
  color: #FFF;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  @media screen and (max-width: 1350px) {
    font-size: 24px;
    line-height: 24px;
  }
`
export const ClientImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  @media screen and (max-width: 1350px) {
    width: 63px;
    height: 63px;
  }

`
export const InnerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
export const NameCaption = styled.p`
  color: rgba(255, 255, 255, 0.60);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
`

export const Quotes = styled.div`
  width: 92.7px;
  height: 78px; 
  background-image: url(${quotes});
  background-size: cover;
  position: absolute;
  ${props => (props.top ? 'top: -39px; left: -62px; transform: scaleX(-1) scaleY(-1); ' : 'bottom: -39px; right: -62px;')}  
  @media screen and (max-width: 1350px) {
    width: 48px;
    height: 40px;
    ${props => (props.top ? 'top: -20px; left: 0px; transform: scaleX(-1) scaleY(-1); ' : 'bottom: -20px; right: 0px;')}  
  }
  
`