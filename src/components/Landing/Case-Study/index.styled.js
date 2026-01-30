import { styled } from "styled-components";
import {breakpoints} from "../index.styled"

export const Header = styled.div`
  width: 1120px;
  display: flex;
  justify-content: center;
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

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 95%;
  }
`;
export const Left = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Right = styled.div`
  display: ${({show}) => show ? 'flex' : 'none'};
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
export const HeaderText = styled.h2`
  color: #1d1d1f;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: "cpsp" on, "cv06" on, "cv09" on, "cv04" on, "cv03" on,
    "case" on, "ss03" on;
  font-family: Poppins;
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: -0.66px;
  margin-bottom: 16px;
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.48px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const DescriptionText = styled.p`
  color: #42526B;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  margin: 0;
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

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
  align-items: center;
  margin-bottom: 64px;
  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    margin-bottom: 24px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 95%;
  }
`;

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
    order: ${(props) => (props.order ? "2" : "")};
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 95%;
  }
`;

export const Tags = styled.div`
	display: flex;
	margin-bottom: 12px;
`

export const Tag = styled.span`
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

export const CaseStudyName = styled.p`
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

export const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 120px;
  row-gap: 0px;
  width: 1120px;
  margin: 0 auto;
  margin-top: 96px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    column-gap: 56px;
    row-gap: 0px;
    margin-top: 72px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 12px;
    margin-top: 56px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 95%;
    row-gap: 12px;
    margin-top: 48px;
  }
`;

export const NewCaseStudyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  transition: transform 0.2s ease, opacity 0.2s ease;

  ${(props) =>
    props.clickable &&
    `
    &:hover {
      transform: translateY(-4px);
      opacity: 0.9;
    }
  `}

  &:nth-child(2n) {
    margin-top: 120px;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    &:nth-child(2n) {
      margin-top: 100px;
    }
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    &:nth-child(2n) {
      margin-top: 0;
    }
  }
`;

export const CaseStudyImgWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #F2F4F4;
  border:  #F2F4F4;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    margin-bottom: 20px;
    padding: 16px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 16px;
    padding: 12px;
  }
`;

export const LogoAndTagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 12px;
  }
`;

export const CompanyLogo = styled.img`
  height: 32px;
  max-width: 150px;
  width: auto;
  object-fit: contain;
  filter: grayscale(100%) brightness(0.4);
  opacity: 0.8;

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 28px;
    max-width: 130px;
  }
`;

export const CaseStudyTitle = styled.h3`
  color: #1d1d1f;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.48px;
  margin-bottom: 12px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 20px;
    line-height: 28px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CaseStudyDescription = styled.p`
  color: #42526B;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 16px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 14px;
    line-height: 22px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const CaseStudyTag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: #F5F5F5;
  border-radius: 6px;
  color: #1d1d1f;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;