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
  padding: 30px 0;

  @media screen and (max-width: ${breakpoints.large}) {
    padding: 25px 0;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 20px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 15px 0;
  }

  /* Hide the old absolute positioned quotes */
  > div {
    display: none;
  }
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
  padding: 0 20px 0 80px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -10px;
    width: 50px;
    height: 50px;
    background-image: url('/quotes.png');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.25;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 50px;
    height: 50px;
    background-image: url('/quotes.png');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.25;
    transform: scaleX(-1) scaleY(-1);
    vertical-align: middle;
    margin-left: 10px;
    margin-bottom: -10px;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 20px;
    line-height: 32px;
    padding: 0 20px 0 60px;

    &::before {
      width: 45px;
      height: 45px;
      top: -5px;
    }

    &::after {
      width: 45px;
      height: 45px;
      margin-left: 8px;
    }
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 18px;
    line-height: 28px;
    padding: 0 16px 0 50px;

    &::before {
      width: 38px;
      height: 38px;
      top: -5px;
    }

    &::after {
      width: 38px;
      height: 38px;
      margin-left: 6px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 26px;
    padding: 0 12px 0 40px;

    &::before {
      width: 30px;
      height: 30px;
      top: 0;
    }

    &::after {
      width: 30px;
      height: 30px;
      margin-left: 5px;
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 800px;

  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 12px;
  }
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
