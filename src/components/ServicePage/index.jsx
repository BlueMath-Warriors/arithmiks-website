import React from "react";
import * as containerStyles from "../../styles/global.module.css";
import Header from "../Landing/Header";
import ContactUs from "../Landing/Contact-Us";
import Footer from "../Landing/Footer";
import {
  OuterContainer,
  TextContainer,
  PrimaryText,
  Caption,
  MoreButton,
  GradiantContainer,
  GradiantImg,
  ImgBackground,
  HeroImage,
} from "../DedicatedTeam/index.styled";
import ArrowRight from "../../images/ArrowRight.svg";
import Gradiant from "../../images/gradiant-6.svg";
import TeamIcon from "../../images/team-icon.svg";

/**
 * @param {{ headline: string; intro: string }} props
 */
const ServicePage = ({ headline, intro }) => {
  return (
    <>
      <Header white={false} />
      <section className={containerStyles.fixed_price}>
        <OuterContainer>
          <TextContainer>
            <PrimaryText>{headline}</PrimaryText>
            <Caption>{intro}</Caption>
            <MoreButton
              onClick={() => {
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Tell Us More <ArrowRight />
            </MoreButton>
          </TextContainer>
          <GradiantContainer>
            <GradiantImg>
              <Gradiant />
            </GradiantImg>
          </GradiantContainer>
          <ImgBackground>
            <HeroImage>
              <TeamIcon />
            </HeroImage>
          </ImgBackground>
        </OuterContainer>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
};

export default ServicePage;
