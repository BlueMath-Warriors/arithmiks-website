import React, { useEffect, useRef } from "react";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../../../utils/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EngagementModel = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".em-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".em-card-1",
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".em-card-1",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".em-card-2",
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".em-card-2",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={containerStyles.engagement_model} ref={sectionRef}>
      <TextContainer className="em-heading">
        <MainHead>
          Engagement
          <br />
          <SecondaryText>Model</SecondaryText>
        </MainHead>
      </TextContainer>
      <ModelCard className="em-card-1">
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

      <ModelCard right className="em-card-2">
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
