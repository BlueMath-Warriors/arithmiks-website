import React, { useEffect, useRef, useState } from "react";

import {
  Header,
  HeaderLeft,
  HeaderTitle,
  HeaderDescription,
  CarouselButtons,
  CarouselButton,
  BtnIcon,
  CarouselContainer,
  CarouselCard,
  ImgContainer,
  CardImg,
  CardTitle,
  CardDetails,
  ArrowImage,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowLeft from "../../../images/btn-arrow-left.svg";
import ArrowRight from "../../../images/btn-arrow-right.svg";
import CardArrow from "../../../images/arrow.svg";
import MeetingIcon from "../../../images/card-meeting.svg";
import RequirementIcon from "../../../images/card-requirement.svg";
import EngagementIcon from "../../../images/card-engagement.svg";
import PlanIcon from "../../../images/card-plan.svg";
import DevelopmentIcon from "../../../images/card-development.svg";

const iconImages = {
  1: <MeetingIcon/>,
  2: <RequirementIcon/>,
  3: <EngagementIcon/>,
  4: <PlanIcon/>,
  5: <DevelopmentIcon/>,
};

const HowItWorks = () => {
  const [windowWidth, setWindowWidth] = useState(1450);
  const [offset, setOffset] = useState(0);
  const [cardGap, setCardGap] = useState(111);
  const [width, setWidth] = useState(326);
  const [currentIndex, setCurrentIndex] = useState(1);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
        setOffset(5 - Math.floor((window.innerWidth - 50) / (cardGap + width)));
        if (window.innerWidth < 830) {
          setCardGap(32);
          setWidth(270);
        } else if (window.innerWidth < 1200) {
          setCardGap(52);
        } else {
          setWidth(326);
          setCardGap(111);
        }
      };
      handleWindowResize();

      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, [cardGap, width]);

  const Data = [
    {
      id: 1,
      title: "Introductory Meeting",
      description:
        "All the stakeholders attend the meeting to brainstorm the idea.",
    },
    {
      id: 2,
      title: "Highlight Scope & Requirements",
      description:
        "Our team will prepare SRS document and highltight the product scope.",
    },
    {
      id: 3,
      title: "Choose Engagement Model",
      description:
        "You will choose an engagement model which suits you.",
    },
    {
      id: 4,
      title: "Project Plan & Protyping",
      description:
        "We will plan product roadmap and create a rapid clickable prototype for you.",
    },
    {
      id: 5,
      title: "Development & launch",
      description:
        "We will design, develop and test your application to ensure a smooth luanch.",
    },
  ];

  const handleScrollLeft = () => {
    if (containerRef.current && currentIndex > 1) {
      const currentPosition = parseInt(
        getComputedStyle(containerRef.current).left,
        10
      );
      const newPosition = currentPosition + width + cardGap;
      containerRef.current.style.left = newPosition + "px";
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current && currentIndex <= offset) {
      const currentPosition = parseInt(
        getComputedStyle(containerRef.current).left,
        10
      );
      const newPosition = currentPosition - width - cardGap;
      containerRef.current.style.left = newPosition + "px";
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section className={containerStyles.how_it_works}>
      <Header>
        <HeaderLeft>
          <HeaderTitle>How it Works</HeaderTitle>
          <HeaderDescription>
            Our foolproof process ensures you receive a reliable solution.
          </HeaderDescription>
        </HeaderLeft>
        <CarouselButtons>
          <CarouselButton onClick={handleScrollLeft}>
            <ArrowLeft/>
          </CarouselButton>
          <CarouselButton blue onClick={handleScrollRight}>
            <ArrowRight />
          </CarouselButton>
        </CarouselButtons>
      </Header>
      <CarouselContainer ref={containerRef}>
        {Data.map((card, index) => (
          <CarouselCard id={`card_${card.id}`} ref={cardsRef[1]}>
            <ImgContainer>
              {iconImages[card.id]}
            </ImgContainer>
            <CardTitle>{card.title}</CardTitle>
            <CardDetails>{card.description}</CardDetails>
            {index < Data.length - 1 && (
              <ArrowImage up={index % 2 === 0}>
                <CardArrow width="100%" height="100%"/>
              </ArrowImage>
            )}
          </CarouselCard>
        ))}
      </CarouselContainer>
    </section>
  );
};

export default HowItWorks;
