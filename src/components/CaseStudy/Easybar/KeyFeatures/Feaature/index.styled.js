import { styled } from "styled-components";

export const breakpoints = {
  x_small: "820px",
  small: "940px",
  medium: "1040px",
  large: "1440px",
  x_large: "1550px",
};

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  max-width: 560px;

  @media screen and (max-width: ${breakpoints.large}) {
    gap: 8px;
    max-width: 372px;
  }
  @media screen and (max-width: ${breakpoints.x_small}) {
    order: 2;
  }
`;

export const FeatureCaption = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  max-width: 420px;
  @media screen and (max-width: ${breakpoints.x_small}) {
    font-size: 20px;
  }
`;
export const FeatureDetail = styled.p`
  color: ${(props) =>
    props.overview ? "color: rgba(0, 0, 0, 0.60)" : "rgba(0, 0, 0, 0.70)"};
  font-size: ${(props) => (props.overview ? "20px" : "24px")};
  font-style: normal;
  font-family: Poppins;
  font-weight: 400;
  line-height: ${(props) => (props.overview ? "34px" : "36px")};

  @media screen and (max-width: ${breakpoints.large}) {
    font-size: 16px;
    line-height: normal;
    letter-spacing: -0.16px;
  }
`;
export const FeatureTitle = styled.h3`
  color: rgba(0, 0, 0, 0.87);
  font-family: Poppins;
  font-size: ${(props) => (props.overview ? "64px" : "50px")};
  font-style: normal;
  font-weight: ${(props) => (props.overview ? "600" : "700")};
  line-height: ${(props) => (props.overview ? "100%" : "normal")};
  @media screen and (max-width: ${breakpoints.large}) {
    font-size: ${(props) => (props.overview ? "44px" : "28px")};
    line-height: 100%;
  }
  @media screen and (max-width: ${breakpoints.x_small}) {
    font-size: ${(props) => (props.overview ? "34px" : "24px")};
    line-height: 100%;
  }
`;

export const FeatureImgContainer = styled.div`
  background: rgba(235, 235, 235, 0.6);
  padding: ${(props) =>
    props.left ? "22px 22px 22px 0 " : "22px 0 22px 22px"};
  border-radius: ${(props) =>
    props.left ? " 0 22px 22px 0" : "22px 0 0 22px"};
  position: relative;

  margin: ${(props) =>
    props.left ? "104px 110px 104px 0" : "104px 0 104px 110px"};
  @media screen and (max-width: ${breakpoints.large}) {
    margin: ${(props) =>
      props.left ? "154px 116px 154px 0" : "154px 0 154px 116px"};
    padding: ${(props) =>
      props.left ? "18px 18px 18px 0 " : "18px 0 18px 18px"};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    margin: ${(props) =>
      props.left ? "45px 81px 45px 0" : "45px 0 45px 81px"};
    padding: ${(props) =>
      props.left ? "14px 14px 14px 0 " : "14px 0 14px 14px"};
  }
  @media screen and (max-width: ${breakpoints.small}) {
    margin: ${(props) =>
      props.left ? "103px 81px 103px 0" : "103px 0 103px 81px"};
    padding: ${(props) =>
      props.left ? "10px 10px 10px 0 " : "10px 0 10px 10px"};
  }
  @media screen and (max-width: ${breakpoints.x_small}) {
    margin: 32px 0;
    padding: ${(props) =>
      props.left ? "11px 11px 11px 0 " : "11px 0 11px 11px"};
    order: 1;
  }
`;
export const GradientContainer = styled.div`
  display: flex;
  width: 800px;
  height: 800px;
  padding: 0px 27.2px 0px 152px;
  justify-content: flex-end;
  align-items: center;

  position: absolute;
  ${(props) =>
    props.left ? "right: -310px; top: 40px;" : "left: 30px; top: 275px;"};

  @media screen and (max-width: ${breakpoints.x_large}) {
    ${(props) =>
      props.left ? "right: -310px; top: 40px;" : "left: 35px; top: 115px;"};
  }
  @media screen and (max-width: ${breakpoints.large}) {
    ${(props) =>
      props.left ? "right: -50px; top: 50px;" : "left: -100px; top: 65px;"};
    width: 527px;
    height: 373.229px;
    padding: 0px 12.648px 3.732px 12.648px;
    justify-content: center;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    ${(props) =>
      props.left ? "right: 0; top: 100px;" : "left: 35px; top: 115px;"};
    width: 353px;
    height: 250px;
    padding: 0px 8.472px 2.5px 8.472px;
    justify-content: center;
  }
  @media screen and (max-width: ${breakpoints.x_small}) {
    ${(props) =>
      props.left ? "right: -310px; top: 40px;" : "left: 35px; top: 115px;"};
    width: 353px;
    padding-bottom: 0px;
    justify-content: center;
    align-items: center;
  }
`;

export const GradiantImg = styled.img``;

export const FeatureImg = styled.div`
  width: 766px;
  height: 612px;
  border-radius: ${(props) =>
    props.left ? " 0 21px 21px 0 " : "21px 0 0 21px"};
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 10;
  ${(props) =>
    props.left ? "background-position: right top" : "background-position: left top"};

  @media screen and (max-width: ${breakpoints.x_large}) {
    width: 594px;
    height: 518px;
  }
  @media screen and (max-width: ${breakpoints.large}) {
    width: 433px;
    height: 386px;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    width: 327px;
    height: 296px;
  }
  @media screen and (max-width: ${breakpoints.x_small}) {
    width: 394px;
    height: 330px;
  }
`;

export const FeatureOuterContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.left ? "flex-start" : "flex-end")};
  align-items: center;
  max-width: 1800px;
  width: 100%;
  @media screen and (max-width: ${breakpoints.x_small}) {
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) => (props.left ? "flex-start" : "flex-end")};
  }
`;
