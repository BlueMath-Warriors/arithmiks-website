import React, { useState, useEffect } from "react";
import {
  ProcessContainer,
  Left, 
  Right,
  ArrowImg,
  GradiantContainer,
  GradiantImg,
  HeroShade,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import Gradiant from "../../../images/team-structure-gradiant.svg";
import SmallGradiant from "../../../images/team-work-small-gradiant.svg";
import { PrimaryText } from "./index.styled";
import CircleRight from "../../../images/team-structure-right-circle.svg";
import CircleLeft from "../../../images/team-structure-left-circle.svg"
import Arrow from "../../../images/img_arrow.svg";
const TeamStructure = () => {
  const [showSmall, setShowSmall] = useState(true);
  function isSmallGradient() {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1200;
    }
    return false;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const initialShowSmallTimeout = setTimeout(() => {
        const initialShowSmall = isSmallGradient();
        setShowSmall(initialShowSmall);
      }, 100);

      const handleWindowResize = () => {
        setShowSmall(isSmallGradient());
      };
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
        clearTimeout(initialShowSmallTimeout);
      };
    }
  }, []);

  return (
    <section className={containerStyles.team_structure}>
      <PrimaryText>
      Typical software development
        <br /> team structure
      </PrimaryText>


      <ProcessContainer>
        <Left src={CircleLeft}/>
        <ArrowImg src={Arrow} />
        <Right src={CircleRight}/>
        <GradiantContainer>
          <GradiantImg src={showSmall ? SmallGradiant : Gradiant} />
        </GradiantContainer>
      </ProcessContainer>
      <HeroShade />
    </section>
  );
};

export default TeamStructure;
