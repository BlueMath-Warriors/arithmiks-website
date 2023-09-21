import { styled } from "styled-components";

export const TextCard = styled.div`
  display: flex;
  max-width: 543px;
  flex-direction: column;
	justify-content: center;
  align-items: flex-start;
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
		margin-bottom: 16px;
`
export const CardHeader = styled.h1`
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
		margin-bottom: 24px;
`

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
		margin-bottom: 32px;
`

export const CardBtn = styled.button`
  display: flex;
  padding: 0px 32px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 7px;
  background: #0b63e5;
  border: none;
  margin-top: 24px;

  color: var(--gray-00, #fff);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: capitalize;
`;

export const BtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ImageSection = styled.div`
  position: relative;
  top: 17px;
`

export const ImageTop = styled.img`
  position: relative;
  bottom: 50px;
  width: 270px;
  height: 370.824px;
  border-radius: 16px;
  border: 0px solid var(--White, #FFF);
  z-index: 5;
`
export const ImageBottom = styled.img`
  position: relative;
  top: 30px;
  right: 64px;
  width: 270px;
  height: 370.824px;
  border-radius: 16px;
  border: 0px solid var(--White, #FFF);
  z-index: 5;
`

export const BgCircle = styled.img`
  position: absolute;
  width: 103.818px;
  height: 104.05px;
  left: 140px;
  bottom: 0px;
  z-index: 1;
`

export const BgRectabgle = styled.img`
  position: absolute;
  left: 206px;
  top: -17px;
  z-index: 1;
`