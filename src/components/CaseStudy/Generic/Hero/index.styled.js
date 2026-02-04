import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;

  width: 929.029px;
  position: relative;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 597.586px;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    width: 100%;
    max-width: 362.346px;
    padding: 0 16px;
  }
`

export const SmallTxt = styled.p`
  padding: 6px 12px;
  
  border-radius: 8px;
  background: #E8ECF3;

  color: #5C5C5C;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`

export const LogoImage = styled.img`
  width: 285.047607421875px;
  height: 70.64580535888672px;
  display: block;
  margin: 0 auto;
`

export const StudyCaption = styled.p`
  color: rgba(0, 0, 0, 0.80);
  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 16px;
  }
`

export const HeroImg = styled.img`
  margin-top: 46px;
  width: 100%;
  height: auto;
  display: block;
`

export const HeroShade = styled.div`
  width: 100%;
  height: 249px;
  position: absolute;
  bottom: -1px;
  z-index: 12;
  @media screen and (max-width: ${breakpoints.large}) {
    height: 143px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 70px;
  }
`
