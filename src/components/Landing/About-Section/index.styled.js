import { styled } from "styled-components";
import { breakpoints } from "../index.styled";

export const TextCard = styled.div`
  display: flex;
  max-width: 543px;
  flex-direction: column;
	justify-content: center;
  align-items: flex-start;
  gap: 24px;
  
  @media screen and (max-width: ${breakpoints.large}) {
    width: 372px;
    gap: 16px;
  }
`;

export const SmallTxt = styled.p`
    color: #1355FF;
    font-variant-numeric: stacked-fractions;
    font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
`;

export const CardHeader = styled.h2`
    color: #061237;
    font-variant-numeric: lining-nums proportional-nums;
    font-feature-settings: 'cpsp' on, 'cv06' on, 'cv09' on, 'cv04' on, 'cv03' on, 'case' on, 'ss03' on;
    font-family: Poppins;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: -0.66px;
		width: 430px;
    @media screen and (max-width: ${breakpoints.large}) {
      font-size: 32px;
      line-height: 40px;
      letter-spacing: -0.48px;
      width: 310px;
    }
`;

export const SecondaryColor = styled.span`
    color: #1355FF;
`

export const CardBody = styled.p`
    color: #3C4353;
    font-variant-numeric: stacked-fractions;
    font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.18px;
		width: 448px;

    @media screen and (max-width: ${breakpoints.large}) {
      font-size: 14px;
      font-style: normal;
      width: 372px;
    }
`;

export const CardBtn = styled.a`
  display: flex;
  padding: 0px 32px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 7px;
  background: #0b63e5;
  border: none;

  color: var(--gray-00, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: capitalize;
  cursor: pointer;
`;

export const BtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ImageSection = styled.div`
  display: flex;
  position: relative;
  top: 17px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 371px;
    height: 323px;
  }

`

export const ImageTop = styled.img`
  position: relative;
  bottom: 50px;
  width: 270px;
  height: 370.824px;
  border-radius: 16px;
  border: 0px solid var(--White, #FFF);
  z-index: 5;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 194px;
    height: 266px;
    left: 22px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    width: 194px;
    height: 266px;
    left: 22px;
    top: -10px;
  }
`;

export const ImageBottom = styled.img`
  position: relative;
  top: 30px;
  right: 64px;
  width: 270px;
  height: 370.824px;
  border-radius: 16px;
  border: 0px solid var(--White, #FFF);
  z-index: 5;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 194px;
    height: 266px;
    top: 5px;
    right: 30px;  
  }

  @media screen and (max-width: ${breakpoints.small}) {
    width: 194px;
    height: 266px;
    top: 35px;
    right: 30px;  
  }

`;

export const BgCircle = styled.div`
  position: absolute;
  width: 103.818px;
  height: 104.05px;
  left: 140px;
  bottom: 0px;
  z-index: 1;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 75px;
    height: 75px;
    left: 110px;
    bottom: 65px;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    width: 75px;
    height: 75px;
    left: 120px;
    bottom: 35px;
  }
`;

export const BgRectabgle = styled.div`
  position: absolute;
  left: 206px;
  top: -17px;
  width: 125px;
  height: 125px;
  z-index: 1;
  
  @media screen and (max-width: ${breakpoints.large}) {
    width: 90px;
    height: 90px;
    left: 165px;
    top: -25px;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    width: 90px;
    height: 90px;
    left: 165px;
    top: 5px;
  }

`;