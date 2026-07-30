import { styled } from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../../Landing/index.styled";

export const Section = styled.section`
  background-color: #fff;
  padding-top: 90px;
  padding-bottom: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: ${breakpoints.large}) {
    padding-bottom: 66px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    padding-top: 60px;
    padding-bottom: 48px;
  }
`;

export const Header = styled.div`
  width: 1120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
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
`;

export const SmallTxt = styled.p`
  color: #1355ff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const HeaderText = styled.h2`
  color: #1d1d1f;
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
  color: #42526b;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  margin: 0;
  max-width: 620px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 16px;
    line-height: 24px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  width: 1120px;
  margin: 40px auto 56px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
  }
`;

export const CategoryTab = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 20px;
  border-radius: 100px;
  border: 1px solid ${(props) => (props.$active ? "#1355FF" : "#E7EAEE")};
  background: ${(props) => (props.$active ? "#1355FF" : "#FFF")};
  color: ${(props) => (props.$active ? "#FFF" : "#5C5C5C")};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1355ff;
    color: ${(props) => (props.$active ? "#FFF" : "#1355FF")};
  }

  &:focus-visible {
    outline: 2px solid #1355ff;
    outline-offset: 2px;
  }
`;

export const EmptyCategoryMessage = styled.p`
  width: 100%;
  text-align: center;
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 16px;
  padding: 60px 0;
`;

export const BlogGridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 40px;
  width: 1120px;
  margin: 0 auto;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 32px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    grid-template-columns: 1fr;
    gap: 32px;
  }
  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 95%;
  }
`;

export const CardCoverWrap = styled.div`
  aspect-ratio: 16 / 10;
  margin-bottom: 20px;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* A real image dictates its own height instead of being cropped/letterboxed
     to a fixed ratio — only the flat-gradient fallback needs a forced ratio. */
  &:has(img) {
    aspect-ratio: auto;
  }
`;

export const CardCategoryTag = styled.span`
  display: inline-block;
  padding: 4px 10px;
  background: #f0f5ff;
  border-radius: 6px;
  color: #1355ff;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-bottom: 10px;
  width: fit-content;
`;

export const CardTitle = styled.h3`
  color: #1d1d1f;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.4px;
  margin-bottom: 10px;
  transition: color 0.2s ease;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 19px;
    line-height: 26px;
  }
`;

export const BlogCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
  border-radius: 16px;

  &:hover ${CardCoverWrap} {
    transform: translateY(-4px);
  }

  &:hover ${CardTitle} {
    color: #1355ff;
  }

  &:focus-visible {
    outline: 2px solid #1355ff;
    outline-offset: 6px;
  }
`;

export const CardExcerpt = styled.p`
  color: #42526b;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
`;

export const CardMetaText = styled.span`
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;
`;
