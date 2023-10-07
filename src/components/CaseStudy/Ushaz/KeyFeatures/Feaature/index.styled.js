import { styled } from "styled-components";

export const breakpoints = {
  x_small: "820px",
  small: "940px",
  medium: "1040px",
  large: "1440px",
  x_large: "1550px",
};
export const MobileImgContainer = styled.div`
  position: relative;
  margin: 93px 210px 93px 183px;
  @media screen and (max-width: ${breakpoints.medium}) {
    margin: 45px 180px 45px 81px;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    margin: 45px 155px 45px 81px;
  }
  @media screen and (max-width: ${breakpoints.x_small}) {
    margin: 32px 155px 43px 81px;
    order: 1;
  }
`;

export const MobileImg = styled.div`
  width: 335.246px;
  height: 678.335px;
  border-radius: 21px 0 0 21px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 10;
  background-position: left top;


  @media screen and (max-width: ${breakpoints.large}) {
    width: 268px;
    height: 542px;
  }
  @media screen and (max-width: ${breakpoints.small}) {
    width: 184px;
    height: 373px;
  }
  @media screen and (max-width: ${breakpoints.x_small}) {
    width: 160px;
    height: 324px;
  }
`;

export const MobileGradientContainer = styled.div`
  display: flex;
  width: 800px;
  height: 800px;
  padding: 0px 27.2px 0px 152px;
  justify-content: flex-end;
  align-items: center;

  position: absolute;
  left: -10px;
  top: 180px;

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
      props.left ? "right: 30px; top: 100px;" : "left: 35px; top: 115px;"};
    width: 353px;
    padding-bottom: 0px;
    justify-content: center;
    align-items: center;
  }
`;
