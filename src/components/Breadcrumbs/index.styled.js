import { styled } from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../Landing/index.styled";

export const Nav = styled.nav`
  max-width: 1120px;
  margin: 0 auto;
  padding: ${(props) => (props.$clearHeader ? "106px 24px 16px" : "16px 24px")};

  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 100%;
  }
`;

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 6px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Crumb = styled(Link)`
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    color: #1355ff;
    text-decoration: underline;
  }
`;

export const Current = styled.span`
  color: #170f49;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`;

export const Separator = styled.span`
  color: #a9adb4;
  font-size: 14px;
`;
