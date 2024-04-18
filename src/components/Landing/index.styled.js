import { styled } from "styled-components";

export const breakpoints = {
  xsmall: "385px",
  small: "430px",
  medium: "820px",
  large: "1200px",
};

export const Buttons = styled.div`
  display: inline-flex;
  gap: 32px;
`;

export const CtaBtn = styled.button`
  display: flex;
  width: ${(props) => (props.fixed ? "134px" : "144px")};
  height: 52px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${(props) => (props.fill ? "#1355FF" : "transparent")};

  color: ${(props) => (props.fill ? "#FFF" : "#1355FF")};
  text-align: center;
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  border: ${(props) => (props.fill ? "none" : "1px solid #1355FF; ")};
  @media screen and (max-width: ${breakpoints.large}) {
    margin-left: ${(props) => (props.fixed ? "" : "auto")};
    margin-right: ${(props) => (props.fixed ? "" : "16px")};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    display: ${(props) => (props.fixed ? "" : "none")};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  max-width: 1120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 760px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 382px;
    gap: 16px;
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    max-width: 95%;
  }
`;

export const MainHead = styled.h1`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 66px;
  font-style: normal;
  font-weight: 600;
  line-height: 80px;

  svg {
    width: 45px;
    height: 53px;
    @media screen and (max-width: ${breakpoints.large}) {
      width: 31px;
      height: 37px;
    }
    @media screen and (max-width: ${breakpoints.medium}) {
      width: 19px;
      height: 22px;
    }
  }

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 44px;
    line-height: 60px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 26px;
    line-height: 60px;
    line-height: 34px;
    letter-spacing: -0.52px;
  }
`;

export const Description = styled.p`
  color: #5c5c5c;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150.5%;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
  }
`;