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
  width: ${(props) => (props.fixed ? "134px" : "234px")};
  height: 52px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${(props) => (props.fill ? "#1355FF" : "transparent")};

  color: ${(props) => (props.fill ? "#FFF" : "#1355FF")};
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;

  border: ${(props) => (props.fill ? "none" : "1px solid #1355FF; ")};
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) => (props.fill ? "0 10px 30px rgba(19, 85, 255, 0.35)" : "0 8px 25px rgba(19, 85, 255, 0.2)")};
    background: ${(props) => (props.fill ? "#0040E0" : "rgba(19, 85, 255, 0.05)")};
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: ${(props) => (props.fill ? "0 5px 15px rgba(19, 85, 255, 0.3)" : "0 4px 12px rgba(19, 85, 255, 0.15)")};
  }

  @media screen and (max-width: ${breakpoints.large}) {
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
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  margin-top: 40px;
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
  color: #333333;
  text-align: left;
  font-family: Poppins;
  font-size: 45px;
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
    font-size: 30px;
    line-height: 60px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 18px;
    line-height: 60px;
    line-height: 34px;
    letter-spacing: -0.52px;
  }
`;

export const Description = styled.p`
  color: #5C5C5C;
  text-align: left;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150.5%;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
  }
`;