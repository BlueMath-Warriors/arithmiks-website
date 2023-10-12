import { styled } from "styled-components";
import { breakpoints } from "../Landing/index.styled";

export const OuterContainer = styled.div`
  background-color: #fff;
  background-size: cover;
  background-position: center;
  height: 720px;
  padding-top: 90px;
  max-width: 1120px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: relative;

@media screen and (max-width: ${breakpoints.large}) {
    max-width: 757px;
    height: 605px;
}
@media screen and (max-width: ${breakpoints.medium}) {
    max-width: 382px;
    height: 834px;
    flex-direction: column;
    gap: 62px;
    padding-top: 128px;
}
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  max-width : 650px;
  
  @media screen and (max-width: ${breakpoints.large}) {
    max-width : 430px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width : 380px;
    order: 2;
  }
`
export const PrimaryText = styled.h1`
  color: rgba(0, 0, 0, 0.80);
  font-family: Poppins;
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 26px;
  }


`

export const Caption = styled.p`
  color: rgba(0, 0, 0, 0.80);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0.017px;

  max-width: 508px;
  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 420px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 380px;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.014px;
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

  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: capitalize;

`


export const ImgBackground = styled.div`
  display: flex;
  width: 448px;
  height: 448px;
  padding: 131px;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  background: rgba(245, 245, 245, 0.60);
  backdrop-filter: blur(75px);
  position: relative;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 307px;
    height: 307px;
    padding: 61px 60px 60px 61px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    order: 1;
  }
`

export const PriceImage = styled.img`
  width: 186px;
  height: 186px;
`

export const GradiantContainer = styled.div`
  display: flex;
  width: 595px;
  height: 595px;
  padding: 38.079px 2.38px 0px 42.84px;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 290px;
  right: -325px;
  opacity: 0.3;
  overflow-hidden;


  @media screen and (max-width: ${breakpoints.large}) {
    width: 409px;
    height: 409px;
    top: 315px;
    right: -350px;
    opacity: 0.4;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 340px;
    height: 340px;
    top: 290px;
    right: -314px;
    opacity: 0.3;
  }
`

export const GradiantImg = styled.div`

`

export const HeroShade = styled.div`
  width: 100%;
  height: 249px;
  background: linear-gradient(0deg, #FFF 10.64%, rgba(255, 255, 255, 0.00) 88.02%);
  position: absolute;
  bottom: -1px;
  z-index: 12;
  @media screen and (max-width: ${breakpoints.large}) {
    height: 141px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 70px;
  }
`