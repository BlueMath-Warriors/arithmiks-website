import React from "react";
import {
  TechStackSection,
  TechStackContainer,
  TechStackTrack,
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

  return (
    <TechStackSection>
      <TechStackContainer>
        <TechStackTrack>
          {technologies.map((tech, index) => (
            <TechItem key={`first-${index}`}>
              {isSpecialIcon(tech.name) ? (
                <SpecialIcon src={tech.icon} alt={tech.name} />
              ) : (
                <TechIcon src={tech.icon} alt={tech.name} />
              )}
              <TechName>{tech.name}</TechName>
            </TechItem>
          ))}
          {technologies.map((tech, index) => (
            <TechItem key={`second-${index}`}>
              {isSpecialIcon(tech.name) ? (
                <SpecialIcon src={tech.icon} alt={tech.name} />
              ) : (
                <TechIcon src={tech.icon} alt={tech.name} />
              )}
              <TechName>{tech.name}</TechName>
            </TechItem>
          ))}
        </TechStackTrack>
      </TechStackContainer>
    </TechStackSection>
  );
};

export default TechStack;
