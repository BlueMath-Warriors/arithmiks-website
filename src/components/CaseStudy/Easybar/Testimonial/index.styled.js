import { styled } from "styled-components";
import quotes from "../../../../images/quotes.svg";

export const TextContainer = styled.div`
  margin-top: 220px;
  margin-bottom: 67px;
  max-width: 1130px;
  position: relative;
`

export const TestimonalText = styled.h1`
  color: #1355FF;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
`
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  self-align: flex-start;
`
export const Name = styled.h1`
  color: #FFF;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
`
export const ClientImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
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
  
`