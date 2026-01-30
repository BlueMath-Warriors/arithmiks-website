import React from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import {
  TestimonialText,
  Name,
  NameCaption,
  TextContainer,
  NameContainer,
  ClientImage,
  InnerContainer,
  TestimonialContainer,
} from "./index.styled";

/**
 * @param {Object} props
 * @param {string} props.text 
 * @param {string} props.clientImageSrc 
 * @param {string} props.clientName 
 * @param {string} props.clientTitle 
 */
const Testimonial = ({
  text,
  clientImageSrc,
  clientName,
  clientTitle,
}) => {
  return (
    <>
      <div className={containerStyles.easybar_testimonial}>
        <TestimonialContainer>
          <TextContainer>
            <div className={`${containerStyles.quotes} ${containerStyles.bottom}`} />
            <div className={`${containerStyles.quotes} ${containerStyles.top}`} />
            <TestimonialText>{text}</TestimonialText>
          </TextContainer>
          <NameContainer>
            <ClientImage src={clientImageSrc} alt={clientName} />
            <InnerContainer>
              <Name>{clientName}</Name>
              <NameCaption>{clientTitle}</NameCaption>
            </InnerContainer>
          </NameContainer>
        </TestimonialContainer>
      </div>
    </>
  );
};

export default Testimonial;
