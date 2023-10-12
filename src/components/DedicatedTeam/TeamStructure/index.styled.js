import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const PrimaryText = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  font-family: DM Sans;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  margin-bottom: 56px;
`


export const ProcessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  margin-top: 142px;
  margin-bottom: 42px;

  position: relative;

  @media screen and (max-width: ${breakpoints.large}) {

  }
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 48px;
    margin-bottom: 60px;
  
  }
`



export const GradiantContainer = styled.div`
  position: absolute;
  top: -160px;
  left: 200px;
  display: flex;
  width: 800px;
  height: 746px;
  padding: 0px 19.2px 7.46px 19.2px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 372px;
    height: 471px;
    padding: 30.144px 1.488px 0px 26.784px;

    top: 35px;
    left: 80px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 282px;
    height: 357px;
    padding: 22.848px 1.128px 0px 20.304px;
    
    top: 140px;
    left: 0;
  }
`

export const GradiantImg = styled.img`

`

export const HeroShade = styled.div`
  width: 100%;
  height: 249px;
  background: linear-gradient(0deg, #F5F5F7 10.64%, rgba(245, 245, 247, 0.00) 88.02%);
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

export const Left = styled.img`
  position: relative;
  left: 95px;
  z-index: 5;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 240px;
  }

`

export const Right = styled.img`
  position: relative;
  z-index: 5;
  left: -85px;

  @media screen and (max-width: ${breakpoints.large}) {
    height: 355px;
    width: 421.39;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
  }


`

export const ArrowImg = styled.img`
position: relative;
left: 88px;
z-index: 6;

`