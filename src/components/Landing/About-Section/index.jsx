import React, { useEffect, useRef } from "react";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "../../../utils/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef(null);

  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-images",
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="company" className={containerStyles.about} aria-labelledby="about-heading" ref={sectionRef}>
      <ImageSection className="about-images">
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
      <TextCard className="about-text">
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
