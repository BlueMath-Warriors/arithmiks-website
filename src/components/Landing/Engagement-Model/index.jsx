import React from "react";
import { navigate } from "gatsby";
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
    <section className={containerStyles.engagement_model}>
      <TextContainer>
        <MainHead>
          Engagement
          <br />
          <SecondaryText>Model</SecondaryText>
        </MainHead>
      </TextContainer>
      <ModelCard>
        <CardImg src={model_1_img} />
        <CardText right>
          <CardHeader>Build Your Dedicated Team</CardHeader>
          <CardBody>
            Build your dedicated team for your projects. Experience the power of
            highly talented engineers working delicately on a project to unleash
            the excellence and deliverence.
          </CardBody>
          <CardBtn onClick={()=>{navigate('/dedicated-team')}}>
            Read More
            <ArrowRigth/>
          </CardBtn>
        </CardText>
      </ModelCard>

      <ModelCard right>
        <CardText>
          <CardHeader>Fix Price Project</CardHeader>
          <CardBody>
            Delivering Quality, Crafted to Perfection: Your Vision, Our
            Fixed-Price Precision. It is well-suited for projects with clear requirements and short
            time-to-market.
          </CardBody>
          <CardBtn onClick={()=>{navigate('/fixed-price')}}>
            Read More
            <ArrowRigth />
          </CardBtn>
        </CardText>
        <CardImg src={model_2_img} />
      </ModelCard>
    </section>
  );
};

export default EngagementModel;
