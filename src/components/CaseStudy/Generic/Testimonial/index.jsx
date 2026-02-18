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
 * @param {string|string[]} props.text
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
  // Hide testimonial if it's dummy data or missing required fields
  const isDummyTestimonial = clientImageSrc && clientImageSrc.includes('dummyOwner');
  
  if (isDummyTestimonial || !text || !clientName || !clientImageSrc) {
    return null;
  }

  const paragraphs = Array.isArray(text) ? text : [text];
  
  return (
    <>
      <div className={containerStyles.easybar_testimonial}>
        <TestimonialContainer>
          <TextContainer>
            <div className={`${containerStyles.quotes} ${containerStyles.bottom}`} />
            <div className={`${containerStyles.quotes} ${containerStyles.top}`} />
            <TestimonialText>
              {paragraphs.map((paragraph, index) => (
                <React.Fragment key={index}>
                  {paragraph}
                  {index < paragraphs.length - 1 && <><br /><br /></>}
                </React.Fragment>
              ))}
            </TestimonialText>
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
