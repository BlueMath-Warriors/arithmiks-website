import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 20px;

  @media screen and (max-width: ${breakpoints.large}) {
    padding: 60px 20px;
    gap: 24px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 40px 16px;
    gap: 20px;
  }
`;

export const TextContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
`;

export const Quotes = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  opacity: 0.1;
`;

export const TestimonialText = styled.p`
  color: #0957DE;
  text-align: left;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  margin: 0;
  padding: 0 40px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 20px;
    line-height: 32px;
    padding: 0 30px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 18px;
    line-height: 28px;
    padding: 0 20px;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 800px;
`;

export const ClientImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: ${breakpoints.medium}) {
    width: 48px;
    height: 48px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
`;

export const Name = styled.h3`
  color: #ffffff;
  text-align: left;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 18px;
  }
`;

export const NameCaption = styled.p`
  color: #ADADAD;
  text-align: left;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
  }
`;
