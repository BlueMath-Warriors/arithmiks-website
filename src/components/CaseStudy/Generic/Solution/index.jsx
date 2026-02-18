import React from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import {
  Title,
  Secondary,
  SolutionHeader,
  SolutionLeft,
  SolutionRight,
  SolutionLabel,
  SolutionDescription,
  CardContainer,
  Card,
  CardIcon,
  CardTitle,
  CardDetail,
} from "./index.styled";

/**
 * @param {Object} props
 * @param {string} props.label 
 * @param {string} props.heading 
 * @param {React.ReactNode} props.description 
 * @param {Array} props.solutions 
 * @param {string} props.solutions[].icon 
 * @param {string} props.solutions[].title 
 * @param {string} props.solutions[].detail 
 * @param {boolean} props.hasTestimonial 
 */
const Solution = ({
  label = "SOLUTION",
  heading = "Our Solution",
  description,
  solutions = [],
  hasTestimonial = true,
}) => {
  const headingParts = heading.split(" ");
  const lastWord = headingParts.pop();
  const firstPart = headingParts.join(" ");

  return (
    <>
      <div 
        className={containerStyles.easybar_solution}
        style={{ backgroundColor: hasTestimonial ? '#fff' : '#F5F5F7' }}
      >
        <SolutionHeader>
          <SolutionLeft>
            <SolutionLabel>{label}</SolutionLabel>
            <Title>
              {firstPart} <Secondary>{lastWord}</Secondary>
            </Title>
          </SolutionLeft>
          <SolutionRight>
            <SolutionDescription>{description}</SolutionDescription>
          </SolutionRight>
        </SolutionHeader>
        <CardContainer>
          {solutions.map((solution, index) => (
            <Card key={index}>
              <CardIcon src={solution.icon} alt={solution.title} />
              <CardTitle>{solution.title}</CardTitle>
              <CardDetail>{solution.detail}</CardDetail>
            </Card>
          ))}
        </CardContainer>
      </div>
    </>
  );
};

export default Solution;
