import React from "react";
import {
  MainHead,
  SecondaryText,
  TextContainer,
  ModelCard,
  CardImg,
  CardText,
  CardHeader,
  CardBody,
  CardBtn,
  BtnIcon,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowRigth from "../../../images/ArrowRight.svg";
import model_1_img from "../../../images/model_1.jpg";
import model_2_img from "../../../images/model_2.jpg";

const EngagementModel = () => {
  return (
    <>
      <div className={containerStyles.engagement_model}>
        <TextContainer>
          <MainHead>
            Engagement<br/>
            <SecondaryText>Model</SecondaryText>
          </MainHead>
        </TextContainer>
        <ModelCard>
          <CardImg src={model_1_img} />
          <CardText right>
            <CardHeader>Build Your Dedicated Team</CardHeader>
            <CardBody>
              Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
              laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
              hendrerit blandit neque in tempor.
            </CardBody>
            <CardBtn>
              Read More
              <BtnIcon src={ArrowRigth} />
            </CardBtn>
          </CardText>
        </ModelCard>

        <ModelCard right>
          <CardText>
            <CardHeader>Fix Price Project</CardHeader>
            <CardBody>
              Aenean interdum arcu sit amet nulla lacinia suscipit. Vivamus at
              laoreet mi. Fusce pulvinar commodo ligula, et egestas dolor. Ut
              hendrerit blandit neque in tempor.
            </CardBody>
            <CardBtn>
              Read More
              <BtnIcon src={ArrowRigth} />
            </CardBtn>
          </CardText>
          <CardImg src={model_2_img} />
        </ModelCard>
      </div>
    </>
  );
};

export default EngagementModel;
