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
  CardBtnLink,
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
        <CardImg src={model_1_img} alt="Dedicated team collaboration" width={560} height={374} loading="lazy" />
        <CardText right>
          <CardHeader>Build Your Dedicated Team</CardHeader>
          <CardBody>
            Build your dedicated team for your projects. Experience the power of
            highly talented engineers working delicately on a project to unleash
            the excellence and deliverence.
          </CardBody>
          <CardBtnLink to="/dedicated-team">
            Read More
            <ArrowRigth/>
          </CardBtnLink>
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
          <CardBtnLink to="/fixed-price">
            Read More
            <ArrowRigth />
          </CardBtnLink>
        </CardText>
        <CardImg src={model_2_img} alt="Fixed price project delivery" width={560} height={374} loading="lazy" />
      </ModelCard>
    </section>
  );
};

export default EngagementModel;
