import { styled } from "styled-components";
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

export const HeaderInner = styled.div`
  width: 100%;
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

export const StatRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin: 40px auto 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 28px;
    flex-wrap: wrap;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const StatNumber = styled.span`
  color: #1355ff;
  font-family: Poppins;
  font-size: 28px;
  font-weight: 700;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 22px;
  }
`;

export const StatLabel = styled.span`
  color: #838e9e;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const HeaderCta = styled.button`
  display: flex;
  width: 234px;
  height: 52px;
  margin: 32px auto 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: none;
  background: #1355ff;
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    background: #0040e0;
    
  }

  svg {
    width: 18px;
    height: 18px;
  }
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
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e7eaee;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 24px;
    padding-bottom: 20px;
  }
`;

export const CategoryHeaderMain = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 280px;
`;

export const CategoryHeaderChips = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
  gap: 10px;
  flex-shrink: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    align-items: flex-start;
    align-self: flex-start;
    width: 100%;
  }
`;

export const CategoryIndex = styled.span`
  flex-shrink: 0;
  color: #e7eaee;
  font-family: Poppins;
  font-size: 36px;
  font-weight: 700;
  line-height: 1;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 26px;
  }
`;

export const CategoryIconWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 152px;
  background: rgba(11, 99, 229, 0.12);
  min-width: 56px;
  min-height: 56px;

  svg {
    width: 24px;
    height: 24px;
  }

  svg path,
  svg circle,
  svg rect {
    stroke: #1355ff;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 12px;
    min-width: 44px;
    min-height: 44px;

    svg {
      width: 20px;
      height: 20px;
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px;
  border-radius: 16px;
  border: 1px solid #e7eaee;
  background: #fff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: #ceddf8;
    box-shadow: 0px 8px 24px rgba(19, 85, 255, 0.08);
    transform: translateY(-3px);
  }
`;

export const CardIconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 152px;
  background: rgba(11, 99, 229, 0.12);
  margin-bottom: 18px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const CardTitle = styled.h3`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px;
`;

export const CardDescription = styled.p`
  color: #596780;
  font-family: Poppins;
  font-size: 14.5px;
  line-height: 1.6;
  margin: 0;
  flex: 1;
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;

  @media screen and (max-width: ${breakpoints.medium}) {
    justify-content: flex-start;
  }
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 100px;
  background: #f5f7fa;
  color: #42526b;
  font-family: Poppins;
  font-size: 13.5px;
  font-weight: 500;
`;

export const ChipDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #1355ff;
  flex-shrink: 0;
`;

export const ContactSection = styled.div`
  margin-top: 96px;
`;
