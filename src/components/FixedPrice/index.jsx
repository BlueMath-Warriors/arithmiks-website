import React, { useEffect } from "react";
import {
  TextContainer,
  Caption,
  MoreButton,
  PrimaryText,
  BtnIcon,
  ImgBackground,
  PriceImage,
  GradiantContainer,
  GradiantImg,
  HeroShade,
  OuterContainer,
} from "./index.styled";
import * as containerStyles from "../../styles/global.module.css";
import Header from "../Landing/Header";
import Breadcrumbs from "../Breadcrumbs";
import BookingFlow from "../Landing/Contact-Us/Booking-Flow";
import { track } from "../../utils/analytics";
import Footer from "..//Landing/Footer";
import Ideas from "./Ideas";
import Process from "./Process";
import Experience from "./Experience";
import Questions from "./Questions";

import ArrowRight from "../../images/ArrowRight.svg";
import PriceTag from "../../images/price-tag-logo.webp";
import Gradiant from "../../images/gradiant-6.svg";

const breadcrumbItems = [
  { name: "Home", pathname: "/" },
  { name: "Fixed Price", pathname: "/fixed-price" },
];

const FixedPrice = () => {
  useEffect(() => {
    track("engagement_model_view", { model: "fixed_price", trigger: "page" });
  }, []);

  return (
    <>
      <Header white={true} />
      <Breadcrumbs items={breadcrumbItems} clearHeader />
      <main>
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
            <MoreButton
              data-cta="Tell Us More"
              onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}>
              Tell Us More <ArrowRight/>
            </MoreButton>
          </TextContainer>
          <GradiantContainer>
            <GradiantImg >
              <Gradiant/>
            </GradiantImg>
          </GradiantContainer>
          <ImgBackground>
            <PriceImage src={PriceTag} />
          </ImgBackground>
        </OuterContainer>
        {/* <HeroShade /> */}
      </section>
      <Ideas />
      <Process />
      <Experience />
      <Questions />
      <BookingFlow />
      </main>
      <Footer />
    </>
  );
};

export default FixedPrice;
