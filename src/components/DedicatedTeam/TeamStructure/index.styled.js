import { styled } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

export const PrimaryText = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  
  margin-bottom: 80px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 38px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 26px;
  }
`


export const ProcessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  @media screen and (max-width: ${breakpoints.large}) {

  }
  @media screen and (max-width: ${breakpoints.medium}) {  
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
    width: 406px;
    height: 378px;
    padding: 0px 9.744px 3.78px 9.744px;

    top: 0;
    left: 200px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 296px;
    height: 246.961px;
    padding: 0px 7.104px 2.47px 7.104px;
    
    top: 70px;
    left: 115px;
  }
`

export const GradiantImg = styled.div`

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

export const Left = styled.div`
  position: relative;
  left: 95px;
  z-index: 7;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 238px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 120px;
  }

`

export const Right = styled.div`
  position: relative;
  z-index: 5;
  left: -85px;
  height: 505px;
  width: 621;
  @media screen and (max-width: ${breakpoints.large}) {
    height: 355px;
    width: 421.39px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 177px;
    width: 211px;
  }


`

export const ArrowImg = styled.div`
position: relative;
left: 88px;
z-index: 6;

@media screen and (max-width: ${breakpoints.large}) {
  width: 232px;
  left: 35px;
}

@media screen and (max-width: ${breakpoints.large}) {
  width: 200px;
  left: 16px;
  height: 30px;
}

`