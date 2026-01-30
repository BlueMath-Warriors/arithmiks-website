import React from "react";
import {
  TechStackSection,
  TechStackContainer,
  TechStackTrack,
  TechStackGroup,
  TechItem,
  TechIcon,
  SpecialIcon,
  TechName,
} from "./index.styled";

/**
 * @param {Object} props
 * @param {Array} props.technologies 
 * @param {string} props.technologies[].name 
 * @param {string} props.technologies[].icon 
 * @param {Array} props.specialIconNames 
 */
const TechStack = ({
  technologies = [],
  specialIconNames = ["Postmark"],
}) => {
  const isSpecialIcon = (name) => specialIconNames.includes(name);

  const renderItems = (keyPrefix) =>
    technologies.map((tech, index) => (
      <TechItem key={`${keyPrefix}-${index}`}>
        {isSpecialIcon(tech.name) ? (
          <SpecialIcon src={tech.icon} alt={tech.name} />
        ) : (
          <TechIcon src={tech.icon} alt={tech.name} />
        )}
        <TechName>{tech.name}</TechName>
      </TechItem>
    ));

  return (
    <TechStackSection>
      <TechStackContainer>
        <TechStackTrack>
          <TechStackGroup>{renderItems("a")}</TechStackGroup>
          <TechStackGroup aria-hidden="true">{renderItems("b")}</TechStackGroup>
          <TechStackGroup aria-hidden="true">{renderItems("c")}</TechStackGroup>
        </TechStackTrack>
      </TechStackContainer>
    </TechStackSection>
  );
};

export default TechStack;
