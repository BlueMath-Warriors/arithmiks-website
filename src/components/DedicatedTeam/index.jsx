import React from "react";
import {
  TextContainer,
  Caption,
  MoreButton,
  PrimaryText,
  BtnIcon,
  ImgBackground,
  HeroImage,
  GradiantContainer,
  GradiantImg,
  HeroShade,
  OuterContainer,
} from "./index.styled";
import * as containerStyles from "../../styles/global.module.css";
import Header from "../Landing/Header";
import ContactUs from "../Landing/Contact-Us";
import Footer from "..//Landing/Footer";
import Ideas from "./Ideas";
import Process from "./Process";
import Experience from "./Experience";
import TeamNeed from "./TeamNeed";
import Questions from "./Questions";
import DediacatedPage from "./DedicatedPage";

import ArrowRight from "../../images/ArrowRight.svg";
import TeamIcon from "../../images/team-icon.png";
import Gradiant from "../../images/gradiant-6.svg";
const DedicatedTeam = () => {
  return (
    <>
      <Header white={false} />
      <section className={containerStyles.fixed_price}>
        <OuterContainer>
          <TextContainer>
            <PrimaryText>
              Delivering Quality, Crafted to Perfection: Your Vision, Our
              Fixed-Price Precision
            </PrimaryText>
            <Caption>
              Fixed price projects will follow WaterFall Methodology
            </Caption>
            <MoreButton>
              Tell Us More <BtnIcon src={ArrowRight} />
            </MoreButton>
          </TextContainer>
          <GradiantContainer>
            <GradiantImg src={Gradiant} />
          </GradiantContainer>
          <ImgBackground>
            <HeroImage src={TeamIcon} />
          </ImgBackground>
        </OuterContainer>
        {/* <HeroShade /> */}
      </section>
      <TeamNeed />
      <DediacatedPage />
      <Questions />
      <ContactUs />
      <Footer />
    </>
  );
};

export default DedicatedTeam;
