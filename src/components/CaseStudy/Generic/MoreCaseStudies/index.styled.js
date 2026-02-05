import { styled } from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../../../Landing/index.styled";

export const Section = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 0 120px 0;

  @media screen and (max-width: ${breakpoints.large}) {
    padding-bottom: 96px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding-bottom: 72px;
  }
`;

export const Container = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    padding: 0 16px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 95%;
  }
`;

export const HeadingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 56px;

  @media screen and (max-width: ${breakpoints.large}) {
    margin-bottom: 48px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 40px;
    gap: 12px;
  }
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: #e7eaee;
`;

export const Heading = styled.p`
  margin: 0;
  color: #858585;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  white-space: nowrap;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 120px;
  row-gap: 0px;
  width: 100%;

  @media screen and (max-width: ${breakpoints.large}) {
    column-gap: 56px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
    row-gap: 24px;
    column-gap: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    opacity: 0.92;
  }
`;

export const CaseStudyImgWrapper = styled.div`
  width: 100%;
  margin-bottom: 24px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f2f4f4;
  border: #f2f4f4;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;
    height: auto;
  }

  svg {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
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
  transform: none !important;

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 28px;
    max-width: 130px;
  }
`;

export const CaseStudyTag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  background: #f5f5f5;
  border-radius: 6px;
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const CaseStudyTitle = styled.h3`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.48px;
  margin: 0 0 12px 0;

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
  color: #42526b;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 14px;
    line-height: 22px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 56px;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 40px;
  }
`;

export const ViewMoreButton = styled.button`
  display: inline-flex;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ceddf8;
  background: #ceddf8;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease, opacity 0.2s ease;

  color: #0957de;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.09px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 8px 24px rgba(7, 9, 13, 0.08);
  }
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &:hover {
    ${CaseStudyImgWrapper} img {
      transform: scale(1.03);
    }
  }
`;

export const ViewMoreButtonLink = styled(Link)`
  display: inline-flex;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ceddf8;
  background: #ceddf8;
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease, opacity 0.2s ease;

  color: #0957de;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.09px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 8px 24px rgba(7, 9, 13, 0.08);
  }
`;
