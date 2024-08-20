import { styled } from "styled-components";
import { breakpoints } from "../../index.styled";

export const Card = styled.div`
  width: 544px;
  height: 460px;
  background: #f5f5f7;
  ${(props) =>
    props.position === "topleft"
      ? "border-radius: 50px 0px 0px 0px"
      : props.position === "topright"
      ? "border-radius: 0px 50px 0px 0px"
      : props.position === "bottomleft"
      ? "border-radius: 0px 0px 0px 50px"
      : props.position === "bottomright"
      ? "border-radius: 0px 0px 50px 0px"
      : "border-radius: 0px"};

  &:hover {
    box-shadow: 0 4px 28px rgba(0, 0, 0, 0.04);
  }

  @media screen and (max-width: ${breakpoints.large}) {
    width: 372px;
    height: 312px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 382px;
    height: 336px;
    ${(props) =>
      props.topleft
        ? "border-radius: 50px 60px 0px 0px"
        : props.bottomright
        ? "border-radius: 0px 0px 50px 50px"
        : "border-radius: 0px"};
  }

  @media screen and (max-width: ${breakpoints.xsmall}) {
    width: 100%;
  }
`;

export const CardHeader = styled.div`
  display: inline-flex;
  align-items: center;
  padding-top: 64px;
  padding-left: 32px;
  margin-bottom: 24px;
  @media screen and (max-width: ${breakpoints.large}) {
    padding-top: 30px;
    padding-left: 22px;
  }
`;
export const CardIcon = styled.img`
  width: 52px;
  height: 52px;
  margin: 12px;

  @media screen and (max-width: ${breakpoints.large}) {
    width: 32px;
    height: 32px;
    margin: 0 16px 0 0;
  }
`;
export const CardHeaderText = styled.h3`
  color: ${(props) => (props.white ? "#FFF" : "#1D1D1F")};
  font-family: Urbanist;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0.32px;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.22px;
  }
`;
export const CardDetailIcon = styled.img`
  width: 24px;
  height: 24px;
  color: #1d1d1fcc;
`;
export const CardBodyDetail = styled.div`
  display: flex;
  padding: 4px 0px;
  gap: 8px;
  padding-left: 56px;
  color: #1d1d1fcc;
  margin-bottom: 8px;
  cursor: pointer;
  @media screen and (max-width: ${breakpoints.large}) {
    padding-left: 24px;
    margin-bottom: 0px;
    align-items: center;
    padding-right: 20px;
  }
`;
export const CardBodyText = styled.p`
  color: ${(props) =>
    props.white
      ? "#FFF"
      : props.bold
      ? "#000 !important"
      : "rgba(29, 29, 31, 0.80)"};
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "700" : "500")};
  line-height: 24px;
  letter-spacing: 0.48px;
  text-decoration-line: ${(props) => (props.bold ? "underline" : "none")};

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 18px;
    letter-spacing: 0.36px;
  }
`;
