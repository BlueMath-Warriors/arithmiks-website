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

const HowItWorks = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(0);
  const [cardGap, setCardGap] = useState(111);
  const [width, setWidth] = useState(326);
  const [currentIndex, setCurrentIndex] = useState(1);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
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
  }, []);

  const Data = [
    {
      id: 1,
      title: "Introductory Meeting",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 2,
      title: "Highlight Scope & Requirements",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 3,
      title: "Choose Engagement Model",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 4,
      title: "Project Plan & Estimation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      id: 5,
      title: "Development & launch",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
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
    <>
      <div className={containerStyles.how_it_works}>
        <Header>
          <HeaderLeft>
            <HeaderTitle>Let’s See How it Works</HeaderTitle>
            <HeaderDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </HeaderDescription>
          </HeaderLeft>
          <CarouselButtons>
            <CarouselButton onClick={handleScrollLeft}>
              <BtnIcon src={ArrowLeft} />
            </CarouselButton>
            <CarouselButton blue onClick={handleScrollRight}>
              <BtnIcon src={ArrowRight} />
            </CarouselButton>
          </CarouselButtons>
        </Header>
        <CarouselContainer ref={containerRef}>
          {Data.map((card, index) => (
            <CarouselCard id={`card_${card.id}`} ref={cardsRef[1]}>
              <ImgContainer>
                <CardImg src={MeetingIcon} />
              </ImgContainer>
              <CardTitle>{card.title}</CardTitle>
              <CardDetails>{card.description}</CardDetails>
              {index < Data.length - 1 && <ArrowImage src={CardArrow} up={index % 2 === 0} />}
            </CarouselCard>
          ))}
        </CarouselContainer>
      </div>
    </>
  );
};

export default HowItWorks;
