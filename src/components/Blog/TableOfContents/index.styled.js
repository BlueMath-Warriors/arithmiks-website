import { styled } from "styled-components";

export const TocNav = styled.nav`
  position: sticky;
  top: 122px;
  align-self: start;
`;

export const TocLabel = styled.span`
  display: block;
  color: #8a8f98;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-bottom: 16px;
`;

export const TocList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const TocLink = styled.a`
  display: block;
  padding: 7px 0 7px 14px;
  border-left: 2px solid ${({ $active }) => ($active ? "#1355ff" : "#e7eaee")};
  color: ${({ $active }) => ($active ? "#1355ff" : "#5c5c5c")};
  font-family: Poppins;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  line-height: 1.4;
  text-decoration: none;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: #1355ff;
  }
`;
