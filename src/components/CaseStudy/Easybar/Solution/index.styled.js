import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;

  max-width: 600px;
  margin-top: 119px;
  margin-bottom: 16px;
`

export const Secondary = styled.span`
  color: #1355FF;
`

export const TitelCaption = styled.p`
  color: rgba(0, 0, 0, 0.60);
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

  margin-bottom: 42px;
`
export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
  flex-wrap: wrap; 
  max-width: 944px;
  position: relative;
  margin-bottom: 119px;
  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 760px;
    margin-bottom: 108px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    margin-bottom: 29px;
  }
`
export const Card = styled.div`
  display: flex;
  width: 464px;
  height: 324px;
  padding: 42px 42px 86px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px; 
  border-radius: 36px;
  background: rgba(245, 245, 245, 0.60);
  backdrop-filter: blur(2px);

  @media screen and (max-width: ${breakpoints.large}) {
    width: 372px;
    height: 260px;
    padding: 32px 16px 52px 16px;
    gap: 21px;
  }

`

export const CardTitle = styled.h3`
  color: #1355FF;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 16px;
  }
`
export const CardDetail = styled.p`
  color: #202020;
  font-family: DM Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 26px;
  }
`

export const GradiantContainer = styled.div`
  display: flex;
  width: 800px;
  height: 800px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0; 
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: -30px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 452px;
    height: 452px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    left: unset;
    right: -55px;
    top: 87px;
  }
`

export const Gradiant3 = styled.img`
`