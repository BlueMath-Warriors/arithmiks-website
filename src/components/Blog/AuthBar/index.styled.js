import { styled } from "styled-components";
import { Link } from "gatsby";
import { breakpoints } from "../../Landing/index.styled";

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  width: 1120px;
  margin: 0 auto 8px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 90%;
  }
`;

export const GhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 20px;
  border-radius: 100px;
  border: 1px solid #e7eaee;
  background: #fff;
  color: #5c5c5c;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1355ff;
    color: #1355ff;
  }

  &:focus-visible {
    outline: 2px solid #1355ff;
    outline-offset: 2px;
  }
`;

export const FilledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 22px;
  border-radius: 100px;
  border: none;
  background: #1355ff;
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #0f47d6;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #1355ff;
    outline-offset: 2px;
  }
`;

export const FilledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 22px;
  border-radius: 100px;
  border: none;
  background: #1355ff;
  color: #fff;
  text-decoration: none;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #0f47d6;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid #1355ff;
    outline-offset: 2px;
  }
`;

export const UserChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 6px 8px 14px;
  color: #42526b;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;

  strong {
    color: #1d1d1f;
    font-weight: 600;
  }
`;
