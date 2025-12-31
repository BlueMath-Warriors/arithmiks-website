import { styled } from "styled-components";
import { breakpoints } from "../Landing/index.styled";

export const CookieBannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0957DEF5;
  padding: 24px 20px;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 20px 16px;
  }
`;

export const CookieContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const CookieTitle = styled.h3`
  color: #fff;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const CookieDescription = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;

  strong {
    font-weight: 600;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 13px;
  }
`;

export const AcceptText = styled.strong`
  color: #fff;
  font-weight: 600;
`;

export const PrivacyPolicyText = styled.strong`
  color: #170F49;
  font-weight: 600;
`;

export const AcceptLink = styled.span`
  color: #fff;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const PrivacyLink = styled.a`
  color: #fff;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const CookieButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: row;
    width: 100%;
    justify-content: flex-end;
  }

  @media screen and (max-width: ${breakpoints.small}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const AcceptButton = styled.button`
  padding: 12px 32px;
  background-color: #fff;
  color: #1355FF;
  border: none;
  border-radius: 8px;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #f0f0f0;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;

export const RejectButton = styled.button`
  padding: 12px 32px;
  background-color: #1355FF;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #0d44cc;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 10px 24px;
    font-size: 14px;
  }
`;

