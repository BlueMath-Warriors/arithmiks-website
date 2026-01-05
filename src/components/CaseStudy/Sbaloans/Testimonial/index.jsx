import React from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import {
  TestimonalText,
  Name,
  NameCaption,
  TextContainer,
  Quotes,
  NameContainer,
  ClientImage,
  InnerContainer,
  TestimonialContainer,
} from "./index.styled";

const SbaloansTestimonial = () => {
  return (
    <>
      <div className={containerStyles.easybar_testimonial}>
        <TestimonialContainer>
          <TextContainer>
            <div className={`${containerStyles.quotes} ${containerStyles.bottom}`} />
            <div className={`${containerStyles.quotes} ${containerStyles.top}`} />
            <TestimonalText>
              Omer is a professional, reliable, and kind person. Working with him was great! Omer was available for any question, gave professional answers, was patient with the project and the results are beautiful. I highly recommend working with him.
            </TestimonalText>
          </TextContainer>
          <NameContainer>
            <ClientImage src="/sbaOwner.jpeg" alt="Zachary Renta" />
            <InnerContainer>
              <Name>Zachary Renta</Name>
              <NameCaption>SBA Loans Founder & CEO</NameCaption>
            </InnerContainer>
          </NameContainer>
        </TestimonialContainer>
      </div>
    </>
  );
};

export default SbaloansTestimonial;

