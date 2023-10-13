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

import bulbIcon from "../../../images/bulb-icon.svg";
import moneyIcon from "../../../images/money-icon.svg";
import peopleIcon from "../../../images/people-icon.svg";
import userIcon from "../../../images/user-icon.svg";

const iconImages = {
  1: moneyIcon,
  2: bulbIcon,
  3: userIcon,
  4: peopleIcon,
};


const Experience = () => {
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
      title: "Affordable",
      description:
        "We understand your problem and the significance of a cost effective solution for a small to medium scale business building vision to existence by offering competitive fixed-price solutions.",
    },
    {
      id: 2,
      title: "Custom Solutions",
      description:
        "Our team of skilled engineers can build tailored made solutions especially designed for you specific business needs whenever you need.",
    },
    {
      id: 3,
      title: "Expertise",
      description: "Our team of expert professionals is capable of building an idea into reality by keenly looking into the requirements from designing a solution to giving the product into the hands of users..",
    },
    {
      id: 4,
      title: "Partner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
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
          <HeaderTitle>Elevate your experience with Arithmiks</HeaderTitle>
        </HeaderLeft>
        <CarouselButtons>
          <CarouselButton onClick={handleScrollLeft}>
            <BtnIcon>
              <ArrowLeft/>
            </BtnIcon>
          </CarouselButton>
          <CarouselButton blue onClick={handleScrollRight}>
            <BtnIcon>
              <ArrowRight/>
            </BtnIcon>
          </CarouselButton>
        </CarouselButtons>
      </Header>
      <CarouselContainer ref={containerRef}>
        {Data.map((card, index) => (
          <CarouselCard id={`card_${card.id}`} ref={cardsRef[1]}>
            <ImgContainer>
              <CardImg>
                {iconImages[card.id] && iconImages[card.id]()}
              </CardImg>
            </ImgContainer>
            <CardTitle>{card.title}</CardTitle>
            <CardDetails>{card.description}</CardDetails>
            {index < Data.length - 1 && (
              <ArrowImage up={index % 2 === 0}>
                <CardArrow/>
              </ArrowImage>
            )}
          </CarouselCard>
        ))}
      </CarouselContainer>
    </section>
  );
};

export default Experience;
