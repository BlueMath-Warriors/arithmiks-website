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

export const RelatedServiceText = styled.p`
  text-align: center;
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 15px;
  margin: 0 0 40px;

  a {
    color: #084ec2;
    font-weight: 600;
    text-decoration: underline;

    &:hover {
      color: #1355ff;
    }
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

// Gap matches CaseStudyCard's other two homes (CaseStudiesIndex's grid and
// ServicesIndex's SelectedWork) — this is the same card component now, so it
// should read the same everywhere it appears rather than keeping the old
// hand-rolled card's much wider 120px gap.
export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(24px, 2.4vw, 52px) clamp(24px, 2.6vw, 56px);
  align-items: stretch;
  width: 100%;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
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

  color: #084ec2;
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
