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
  
  margin-bottom: 56px;
`

export const Steps = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    gap: 4px;
  }

`

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: stretch;

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 4px;
  }
`

export const StepText = styled.p`
  color: #1F2937;
  text-align: center;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.08px;

  @media screen and (max-width: ${breakpoints.medium}) {
    color: var(--gray-800, #1F2937);
    text-align: center;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 240% */
    letter-spacing: 0.05px;
  }
`
export const Circle = styled.div`
  display: flex;
  width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: #3B82F6;
  color: #fff;

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.07px;

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 20px;
    height: 20px;
  }

`

export const Arrow = styled.div`
  width: 14px;
  height: 14px;
`

export const ProcessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 474px;

  background-size: cover;
  background-repeat: no-repeat;

  margin-top: 142px;
  margin-bottom: 42px;

  position: relative;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 543px;
    height: 322px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 272.856px;
    height: 161.717px;

    margin-top: 48px;
    margin-bottom: 60px;
  
  }
`

export const BlueBox = styled.div`
  display: flex;
  width: 160px;
  padding: 24px 32px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #0B63E5;
  backdrop-filter: blur(75px);
  z-index: 10;

  position: absolute;
  left: ${props => (props.left ? '-161px' : '800px')};

  @media screen and (max-width: ${breakpoints.large}) {
    width: 110px;
    height: 58px; 
    left: ${props => (props.left ? '-115px' : '545px')};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 54.571px;
    height: 28.602px;    
    left: ${props => (props.left ? '-65px' : '273px')};
  }
`

export const BoxText = styled.p`
  color: ${props => (props.white ? '#FFF' : '#040815')};
  text-align: center;

  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.72px;
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 20px;
    font-weight: 500;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
    font-weight: 400;
  }
`

export const GreyContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 558px;
  flex-direction: column;

  gap: 74px;
  z-index: 14;

  @media screen and (max-width: ${breakpoints.large}) {
    height: 378px;
    gap: 30px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 190px;
  }
`

export const GreyBox = styled.div`
  display: inline-flex;
  padding: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.60);
  backdrop-filter: blur(75px);
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 28.602px;
    padding: 0 24px;
    border-radius: 4px;
  }
`

export const GradiantContainer = styled.div`
  position: absolute;
  top: -420px;
  left: -30px;
  display: flex;
  width: 800px;
  height: 1013px;
  padding: 64.832px 3.2px 0px 57.6px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  opacity: 0.8;

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

export const BgImageContainer = styled.div`

  position : absolute;
  width: 800px;
  height: 474px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 543px;
    height: 322px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 272.856px;
    height: 161.717px; 
  }

` 