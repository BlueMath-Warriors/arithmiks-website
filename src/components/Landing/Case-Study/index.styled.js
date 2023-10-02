import { styled } from "styled-components";
import {breakpoints} from "../index.styled"

export const Header = styled.div`
  height: 92px;
  width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 72px;

  @media screen and (max-width: ${breakpoints.large}) {
    height: 72px;
    margin-bottom: 38px;
    width: 760px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 68px;
    margin-bottom: 48px;
    width: 382px;
  }

`
export const Left = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const Right = styled.div`
  display: flex;
  `
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
  margin-bottom: 8px;
`
export const HeaderText = styled.h1`
  color: #1D1D1F;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'cpsp' on, 'cv06' on, 'cv09' on, 'cv04' on, 'cv03' on, 'case' on, 'ss03' on;
  font-family: Poppins;
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: -0.66px;
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.48px;
  }
`

export const SecondaryColor = styled.span`
    color: #1355FF;
`

export const ViewButton = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid #E7EAEE;
  background: #FFF;
  height: 49px;

  color: #07090D;
  font-variant-numeric: stacked-fractions;
  font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.09px;
`
export const BtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;


export const CaseStudyCard = styled.div`
  display: flex;
	width: 1120px;
	justify-content: space-between;
	align-items:center;
  margin-bottom: 64px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    margin-bottom: 24px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }

`

export const CardDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 560px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 437px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    order: ${props => (props.order ? '2' : '')};
  }

`

export const Tags = styled.div`
	display: flex;
	margin-bottom: 12px;
`

export const Tag = styled.p`
	color: #061C3D;
	font-family: Inter;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 20px;
  ${props =>
    props.divider &&
    ` &::after {
      content: "/"; 
      color: #838E9E;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      margin-left: 6px;
      margin-right: 6px;
    } `
  }
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 12px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
  }
	`

export const CaseStudyName = styled.h1`
	color: #061C3D;
	font-family: Inter;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: 40px;
	letter-spacing: -0.64px;
	margin-bottom: 32px;
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 22px;
    line-height: 24px;
    letter-spacing: -0.44px;
    margin-bottom: 16px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
  }
`

export const CaseStudyDetails = styled.p`
	color: #42526B;
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 26px;
	margin-bottom: 32px;
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
  }
`
export const CardBtn = styled.button`
	display: flex;
	padding: 0px 32px;
	justify-content: center;
	align-items: center;
	gap: 12px;

	color: #0B63E5;
	border-radius: 7px;
	background: #F0F5FF; 
	border: none;

	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	line-height: 48px;
	text-transform: capitalize;
`

export const CaseStudyImg = styled.img`
	width: 522px;
	height: 424px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 307px;
    height: 248px; 
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
  }
`