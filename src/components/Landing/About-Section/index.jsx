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
import Circle from "../../../images/circle.svg";
import Rectangle from "../../../images/rectangle.svg";

const About = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="company" className={containerStyles.about} aria-labelledby="about-heading">
      <ImageSection>
        <ImageTop 
          src={img_1} 
          alt="Arithmiks team collaboration" 
          width={340} 
          height={250}
          loading="eager"
        />
        <ImageBottom 
          src={img_2} 
          alt="Software development workspace" 
          width={340} 
          height={200}
          loading="eager"
        />
        <BgCircle aria-hidden="true"><Circle/></BgCircle>
        <BgRectabgle aria-hidden="true"><Rectangle/></BgRectabgle>
      </ImageSection>
      <TextCard>
        <SmallTxt>About</SmallTxt>
        <CardHeader id="about-heading">
          What is <SecondaryColor>Arithmiks</SecondaryColor> & What We Do
        </CardHeader>
        <CardBody>
          Software Development Company That Vows Your Success. We Provide
          Professional IT Solutions For Your Business
        </CardBody>
        <CardBtn 
          onClick={scrollToContact}
          aria-label="Learn more about Arithmiks - scroll to contact form"
        >
          Learn More
          <ArrowRight aria-hidden="true" />
        </CardBtn>
      </TextCard>
    </section>
  );
};

export default About;
