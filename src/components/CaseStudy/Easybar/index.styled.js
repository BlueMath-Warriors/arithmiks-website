import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const GradientContainer = styled.div`
  display: flex;
  width: 800px;
  height: 800px;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: -80px;
  top: -260px;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: inline-flex;
    width: 306px;
    height: 306px;
    padding: 141px 12px 0px 0px;
    align-items: center;
    top: -90px;
    left: 60px;
  }
`
export const GradiantImg = styled.img`
`

export const HeroContent = styled.div`
  display: flex;
  self-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`

export const SmallTxt = styled.p`

  padding: 6px 12px;
  
  border-radius: 8px;
  background: rgba(245, 245, 245, 0.80);
  backdrop-filter: blur(50px);

  color: rgba(0, 0, 0, 0.87);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`

export const StudyTitle = styled.h1`
  color: #1355FF;
  text-align: center;
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 44px;
  }
`

export const StudyCaption = styled.p`
  color: rgba(0, 0, 0, 0.80);
  text-align: center;
  font-family: Poppins;
  font-size: 44px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 24px;
  }
`

export const MoreButton = styled.button`
  display: flex;
  padding: 0px 32px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 7px;
  border: 1px solid #1355FF;
  background: rgba(11, 99, 229, 0.10);

  color: #1355FF;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  text-transform: capitalize;
  border: none;


`

export const BtnIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px;
  border-radius: 22px;

  margin-top: 50px;
  background: rgba(235, 235, 235, 0.60);
  stroke-width: 1px;
  stroke: #FFF;
  position: relative;
  
  @media screen and (max-width: ${breakpoints.large}) {
    margin-top: 30px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 47px;
  }
`

export const HeroImg = styled.img`
  position: relative;
  z-index: 10;
  width: 881.23px;
  height: 664.863px;
  border-radius: 20.776px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 597.586px;
    height: 450.625px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 362.346px;
    height: 272.428px;
  }

`

export const HeroShade = styled.div`
  width: 100%;
  height: 249px;
  background: linear-gradient(0deg, #FFF 10.64%, rgba(255, 255, 255, 0.00) 88.02%);
  position: absolute;
  bottom: -2px;
  z-index: 12;
  @media screen and (max-width: ${breakpoints.large}) {
    height: 141px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 70px;
  }


`