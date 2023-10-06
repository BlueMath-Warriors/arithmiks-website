import React from "react";
import {
  TextCard,
  CardHeader,
  CardBody,
  CardBtn,
  BtnIcon,
  SmallTxt,
  ImageTop,
  ImageBottom,
  SecondaryColor,
  BgCircle,
  BgRectabgle,
  ImageSection,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowRight from "../../../images/arrow-right-circle-line.svg";
import img_1 from "../../../images/about_img_1.jpg";
import img_2 from "../../../images/about_img_2.jpg";
import circle from "../../../images/circle.svg";
import rectangle from "../../../images/rectangle.svg";
const About = () => {
  return (
    <section id="company" className={containerStyles.about}>
      <ImageSection>
        <ImageTop src={img_1} />
        <ImageBottom src={img_2} />
        <BgCircle src={circle} />
        <BgRectabgle src={rectangle} />
      </ImageSection>
      <TextCard>
        <SmallTxt>About</SmallTxt>
        <CardHeader>
          What is <SecondaryColor>Arithmiks</SecondaryColor> & What We Do
        </CardHeader>
        <CardBody>
          Software Development Company That Vows Your Success. We Provide
          Professional IT Solutions For Your Business
        </CardBody>
        <CardBtn href="#contact-form">
          Learn More
          <BtnIcon src={ArrowRight} />
        </CardBtn>
      </TextCard>
    </section>
  );
};

export default About;
