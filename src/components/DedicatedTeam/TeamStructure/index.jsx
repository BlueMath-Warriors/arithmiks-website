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
import SmallGradiant from "../../../images/team-structure-small-gradiant.svg";
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
      const handleWindowResize = () => {
        setShowSmall(isSmallGradient());
      };
      handleWindowResize();

      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
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
        <Left>
          <CircleLeft width="100%" height="100%" />
        </Left>
        <ArrowImg>
          <Arrow width="100%" height="100%" />
        </ArrowImg>
        <Right>
          <CircleRight width="100%" height="100%" />
        </Right>
        <GradiantContainer>
          <GradiantImg>
            {
              showSmall ? <SmallGradiant/> : <Gradiant/>
            }
          </GradiantImg>
        </GradiantContainer>
      </ProcessContainer>
      <HeroShade />
    </section>
  );
};

export default TeamStructure;
