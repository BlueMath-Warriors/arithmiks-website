import { styled } from "styled-components";
import { breakpoints } from "../../../Landing/index.styled";

export const FeatureOuterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) => (props.overview ? "flex-start" : "center")};
  gap: 80px;
  width: 100%;
  max-width: ${(props) => (props.overview ? "100%" : "1120px")};
  margin: 0 auto;
  padding: ${(props) => (props.overview ? "0 0 0 20px" : "80px 20px")};
  padding-bottom: ${(props) => (props.overview ? "0px" : "80px")};
  flex-direction: ${(props) => (props.left ? "row-reverse" : "row")};

  @media screen and (max-width: ${breakpoints.large}) {
    max-width: ${(props) => (props.overview ? "100%" : "760px")};
    gap: 60px;
    padding: ${(props) => (props.overview ? "0 0 0 20px" : "60px 20px")};
    padding-bottom: ${(props) => (props.overview ? "0px" : "60px")};
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: 24px;
    padding: ${(props) => (props.overview ? "24px 16px" : "40px 16px")};
    padding-bottom: ${(props) => (props.overview ? "24px" : "40px")};
    max-width: 100%;
    overflow: hidden;
    align-items: stretch;
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  align-items: ${(props) => (props.left ? "flex-end" : "flex-start")};
  text-align: ${(props) => (props.left ? "right" : "left")};
  margin-left: ${(props) => (props.overview ? "120px" : "0")};
  padding-top: ${(props) => (props.overview ? "40px" : "0")};
  margin-top: ${(props) => (props.overview ? "60px" : "0")};
  margin-bottom: 0;

  @media screen and (max-width: ${breakpoints.large}) {
    margin-left: ${(props) => (props.overview ? "80px" : "0")};
    padding-top: ${(props) => (props.overview ? "30px" : "0")};
    margin-top: ${(props) => (props.overview ? "50px" : "0")};
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    align-items: flex-start;
    text-align: left;
    margin-left: 0;
    padding-top: 0;
    margin-top: ${(props) => (props.overview ? "40px" : "0")};
  }
`;

export const FeatureTitle = styled.h3`
  color: ${(props) => (props.overview ? "#0957DE" : "#1d1d1f")};
  font-family: Poppins;
  font-size: ${(props) => (props.overview ? "18px" : "36px")};
  font-style: normal;
  font-weight: ${(props) => (props.overview ? "400" : "700")};
  line-height: normal;
  margin: 0;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: ${(props) => (props.overview ? "16px" : "32px")};
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: ${(props) => (props.overview ? "14px" : "28px")};
  }
`;

export const FeatureCaption = styled.p`
  color: #1355FF;
  font-family: Poppins;
  font-size: ${(props) => (props.overview ? "36px" : "20px")};
  font-style: normal;
  font-weight: ${(props) => (props.overview ? "700" : "600")};
  line-height: normal;
  margin: 0;

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: ${(props) => (props.overview ? "32px" : "20px")};
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: ${(props) => (props.overview ? "28px" : "18px")};
  }
`;

export const FeatureDetail = styled.p`
  color: #42526B;
  font-family: Poppins;
  font-size: ${(props) => (props.overview ? "18px" : "16px")};
  font-style: normal;
  font-weight: 400;
  line-height: ${(props) => (props.overview ? "28px" : "24px")};
  margin: 0;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: ${(props) => (props.overview ? "16px" : "14px")};
    line-height: ${(props) => (props.overview ? "24px" : "22px")};
  }
`;

export const FeatureImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.left ? "flex-start" : "flex-end")};

  @media screen and (max-width: ${breakpoints.medium}) {
    justify-content: center;
    width: 100%;
  }
`;

export const OverviewImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  max-width: none;
  margin-left: auto;
  padding-top: 40px;

  @media screen and (max-width: ${breakpoints.medium}) {
    justify-content: center;
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    padding-top: 0;
    overflow: hidden;
  }
`;

export const FeatureImg = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
  }
  
  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  @media screen and (max-width: ${breakpoints.large}) {
    max-width: 500px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 100%;
  }
`;

export const FeatureImgTag = styled.img`
  width: 100%;
  max-width: ${(props) => (props.overview ? "none" : "600px")};
  height: auto;
  display: block;
  border-radius: 12px;
  margin-left: ${(props) => (props.overview ? "auto" : "0")};
  margin-right: ${(props) => (props.overview ? "0" : "0")};

  @media screen and (max-width: ${breakpoints.large}) {
    max-width: ${(props) => (props.overview ? "none" : "500px")};
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 100%;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const HeroShade = styled.div`
  width: 100%;
  height: 249px;
  position: absolute;
  bottom: -1px;
  z-index: 12;
  @media screen and (max-width: ${breakpoints.large}) {
    height: 143px;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 70px;
  }
`;
