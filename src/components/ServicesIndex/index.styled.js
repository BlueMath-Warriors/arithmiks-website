import { styled } from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../Landing/index.styled";

export const PageHeader = styled.div`
  width: 1120px;
  margin: 48px auto 0;
  text-align: center;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
  }
`;

export const Eyebrow = styled.p`
  color: #1355ff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 12px;
`;

export const Title = styled.h1`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 44px;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: -0.66px;
  margin: 0 0 16px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const Description = styled.p`
  color: #596780;
  font-family: Poppins;
  font-size: 18px;
  line-height: 1.6;
  max-width: 640px;
  margin: 0 auto;
`;

export const CategoryNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 1120px;
  margin: 40px auto 0;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
  }
`;

export const CategoryNavLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 10px 20px;
  border-radius: 100px;
  border: 1px solid #e7eaee;
  background: #fff;
  color: #42526b;
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover,
  &:focus-visible {
    border-color: #1355ff;
    color: #1355ff;
  }
`;

export const CategorySection = styled.section`
  width: 1120px;
  margin: 96px auto 0;
  scroll-margin-top: 110px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    margin-top: 72px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
    margin-top: 64px;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e7eaee;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 24px;
    padding-bottom: 20px;
  }
`;

export const CategoryIconWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;

  svg {
    width: 48px;
    height: 48px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 44px;
    height: 44px;

    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const CategoryTitle = styled.h2`
  color: #061237;
  font-family: Poppins;
  font-size: 26px;
  font-weight: 600;
  margin: 0 0 4px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 21px;
  }
`;

export const CategoryDescription = styled.p`
  color: #596780;
  font-family: Poppins;
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media screen and (max-width: ${breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 28px;
  border-radius: 16px;
  border: 1px solid #e7eaee;
  background: #fff;
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover,
  &:focus-visible {
    box-shadow: 0px 8px 24px rgba(19, 85, 255, 0.12);
    transform: translateY(-4px);
  }

  &:hover svg,
  &:focus-visible svg {
    transform: translateX(3px);
  }

  &:hover h3,
  &:focus-visible h3 {
    color: #1355ff;
  }
`;

export const CardTitle = styled.h3`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px;
  transition: color 0.2s ease;
`;

export const CardDescription = styled.p`
  color: #596780;
  font-family: Poppins;
  font-size: 14.5px;
  line-height: 1.6;
  margin: 0 0 18px;
  flex: 1;
`;

export const CardCta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #1355ff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }
`;

export const CapabilityCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 28px;
  border-radius: 16px;
  border: 1px dashed #d7dde6;
  background: #f8f9fb;
  text-align: left;
  font-family: Poppins;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &:hover,
  &:focus-visible {
    background: #fff;
    border-color: #1355ff;
    box-shadow: 0px 8px 24px rgba(19, 85, 255, 0.1);
    transform: translateY(-4px);
  }

  &:hover svg,
  &:focus-visible svg {
    transform: translateX(3px);
  }

  &:hover h3,
  &:focus-visible h3 {
    color: #1355ff;
  }
`;

export const ContactSection = styled.div`
  margin-top: 96px;
`;
