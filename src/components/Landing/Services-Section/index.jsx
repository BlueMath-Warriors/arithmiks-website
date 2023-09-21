import React from "react";
import {
  SmallTxt,
  ViewAllBtn,
  Header,
  Left,
  Right,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowRigth from "../../../images/ArrowRight.svg";
import model_1_img from "../../../images/model_1.jpg";
import model_2_img from "../../../images/model_2.jpg";

const Services = () => {
  return (
    <>
      <div className={containerStyles.services}>
        <Header>
          <Left>
          <SmallTxt>Services</SmallTxt>
          </Left>
          <Right>
          <SmallTxt>Services</SmallTxt>
          </Right>
        </Header>
      </div>
    </>
  );
};

export default Services;
