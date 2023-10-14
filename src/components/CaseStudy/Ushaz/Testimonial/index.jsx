import React from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import quotes from "../../../../images/quotes.svg";
import hamza from "../../../../images/hamza.png";
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
} from "../../Easybar/Testimonial/index.styled";

const UshazTestimonial = () => {
  return (
    <>
      <div className={containerStyles.easybar_testimonial}>
        <TestimonialContainer>
          <TextContainer>
            <div className={`${containerStyles.quotes} ${containerStyles.bottom}`} />
            <div className={`${containerStyles.quotes} ${containerStyles.top}`} />
            <TestimonalText>
              Arithmiks understood my brief, customer base and goals. Team is very helpful, skilled, professional and responsive. Project is delivered with the best quality. Recommended!
            </TestimonalText>
          </TextContainer>
          <NameContainer>
            <ClientImage src={hamza}/>
            <InnerContainer>
              <Name>Hamza Malik</Name>
              <NameCaption>Director USHAZ LTD</NameCaption>
            </InnerContainer>
          </NameContainer>
        </TestimonialContainer>
      </div>
    </>
  );
};

export default UshazTestimonial;
