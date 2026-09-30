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

const LOOP_COPIES = 3;

/**
 * Blue "Built with" strip: the technologies loop three times so the CSS
 * animation (translateX by one third) restarts without a visible jump.
 *
 * @param {Object} props
 * @param {{ name: string; icon: string }[]} props.technologies
 * @param {string[]} [props.specialIconNames] icons that keep their own colours
 */
const TechStack = ({ technologies = [], specialIconNames = ["Postmark"] }) => {
  if (technologies.length === 0) return null;

  return (
    <TechStackSection aria-label="Built with">
      <TechStackContainer>
        <TechStackTrack $itemCount={technologies.length}>
          {Array.from({ length: LOOP_COPIES }).flatMap((_, copy) =>
            technologies.map((tech) => {
              const Icon = specialIconNames.includes(tech.name) ? SpecialIcon : TechIcon;
              return (
                <TechItem key={`${copy}-${tech.name}`} aria-hidden={copy > 0}>
                  <Icon src={tech.icon} alt="" />
                  <TechName>{tech.name}</TechName>
                </TechItem>
              );
            })
          )}
        </TechStackTrack>
      </TechStackContainer>
    </TechStackSection>
  );
};

export default TechStack;
