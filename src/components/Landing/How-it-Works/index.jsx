import React, {useEffect, useRef} from "react";

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

} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowLeft from "../../../images/btn-arrow-left.svg";
import ArrowRight from "../../../images/btn-arrow-right.svg";

import MeetingIcon from "../../../images/card-meeting.svg";

const HowItWorks = () => {

  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const Data = [
    {
      id: 1,
      title: "Introductory Meeting",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },    {
      id: 2,
      title: "Highlight Scope & Requirements",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },    {
      id: 3,
      title: "Choose Engagement Model",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },    {
      id: 4,
      title: "Project Plan & Estimation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },    {
      id: 5,
      title: "Development & launch",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
  ]

  const cardWidth = 326;
  const gap = 111;

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= cardWidth + gap;
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += cardWidth + gap;
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
            <HeaderDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit</HeaderDescription>
          </HeaderLeft>
          <CarouselButtons>
            <CarouselButton onClick={handleScrollLeft}><BtnIcon src={ArrowLeft}/></CarouselButton>
            <CarouselButton blue onClick={handleScrollRight}><BtnIcon src={ArrowRight}/></CarouselButton>
          </CarouselButtons>
        </Header>
        <CarouselContainer ref={containerRef}>
            {
              Data.map((card)=>
                (<CarouselCard id={`card_${card.id}`} ref={cardsRef[1]}>
                  <ImgContainer>
                    <CardImg src={MeetingIcon}/>
                  </ImgContainer>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDetails>{card.description}</CardDetails>
                </CarouselCard>)
              )
            }
          </CarouselContainer>

      </div>
    </>
  );
};

export default HowItWorks;
