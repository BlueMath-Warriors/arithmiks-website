import React from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import quotes from "../../../../images/quotes.svg";
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

const EasybarTestimonial = () => {
  return (
    <>
      <div className={containerStyles.easybar_testimonial}>
      <TestimonialContainer>
      <TextContainer>
          <Quotes/>
          <Quotes top/>
          {/* <Quotes inverse/> */}
          <TestimonalText>
            Jellypepper understood my brief, customer base and goals better than
            any other design studio. They explained their design process and
            kept me informed every step of the way. I’m love the way the entire
            process was managed and the final work delivered exceeded my
            expectations.
          </TestimonalText>
        </TextContainer>
        <NameContainer>
          <ClientImage src={quotes}/>
          <InnerContainer>
            <Name>Nivyan</Name>
            <NameCaption>Founder of Lightswap</NameCaption>
          </InnerContainer>
        </NameContainer>

      </TestimonialContainer>
      </div>
    </>
  );
};

export default EasybarTestimonial;
