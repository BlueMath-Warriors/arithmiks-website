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
import Breadcrumbs from "../Breadcrumbs";
import ContactUs from "../Landing/Contact-Us";
import Footer from "..//Landing/Footer";
import TeamNeed from "./TeamNeed";
import Questions from "./Questions";
import DediacatedPage from "./DedicatedPage";
import TeamWork from "./TeamWork";
import TeamStructure from "./TeamStructure";

import ArrowRight from "../../images/ArrowRight.svg";
import TeamIcon from "../../images/team-icon.svg";
import Gradiant from "../../images/gradiant-6.svg";

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Dedicated Team", pathname: "/dedicated-team" },
];

const DedicatedTeam = () => {
  return (
    <>
      <Header white={false} />
      <Breadcrumbs items={breadcrumbItems} clearHeader />
      <main>
      <section >
        <OuterContainer>
          <TextContainer>
            <PrimaryText>
              Your dedicated team partner
            </PrimaryText>
            <Caption>
              Experience the power of highly talented engineers working delicately on a project to unleash the excellence and delivery.
            </Caption>
            <MoreButton           
              onClick={() => {
              document
                .getElementById("contact-form")
                .scrollIntoView({ behavior: "smooth" });
            }}>
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
        {/* <HeroShade /> */}
      </section>
      <TeamNeed />
      <DediacatedPage />
      <TeamWork />
      <TeamStructure />
      <Questions />
      <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default DedicatedTeam;
