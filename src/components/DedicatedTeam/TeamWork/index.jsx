import React, { useState, useEffect } from "react";
import {
  Circle,
  StepText,
  Steps,
  Step,
  Arrow,
  ProcessContainer,
  BlueBox,
  BoxText,
  GreyContainer,
  GreyBox,
  GradiantContainer,
  GradiantImg,
  HeroShade,
  BgImageContainer,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import Gradiant from "../../../images/team-work-gradiant.svg";
import SmallGradiant from "../../../images/team-work-small-gradiant.svg";
import { PrimaryText } from "./index.styled";
import ArrowGrey from "../../../images/arrow-right-grey.svg";
import BackgroundImage from "../../../images/team-work-bg.svg"


const TeamWork = () => {
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
    <section className={containerStyles.team_work}>
      <PrimaryText>
        How Arithmik's
        <br /> Dedicated Teams Work?
      </PrimaryText>
      <Steps>
        <Step>
          <Circle>1</Circle>
          <StepText>Welcome call</StepText>
          <Arrow><ArrowGrey/></Arrow>
        </Step>

        <Step>
          <Circle>2</Circle>
          <StepText>Scope Estimation</StepText>
          <Arrow><ArrowGrey/></Arrow>
        </Step>

        <Step>
          <Circle>3</Circle>
          <StepText>Talent Scelection</StepText>
          <Arrow><ArrowGrey/></Arrow>
        </Step>

        <Step>
          <Circle>4</Circle>
          <StepText>Proposition Call</StepText>
          <Arrow><ArrowGrey/></Arrow>
        </Step>

        <Step>
          <Circle>5</Circle>
          <StepText>Kick Off</StepText>
          <Arrow><ArrowGrey/></Arrow>
        </Step>
      </Steps>

      <ProcessContainer>
        <BgImageContainer>
          <BackgroundImage width="100%" height="100%" />
        </BgImageContainer>
        <BlueBox left>
          <BoxText white>Team</BoxText>
        </BlueBox>

        <BlueBox>
          <BoxText white>Client</BoxText>
        </BlueBox>

        <GreyContainer>
          <GreyBox>
            <BoxText>Communication</BoxText>
          </GreyBox>
          <GreyBox>
            <BoxText>Control Over Project</BoxText>
          </GreyBox>
          <GreyBox>
            <BoxText>Daily Meetings</BoxText>
          </GreyBox>
          <GreyBox>
            <BoxText>Demos</BoxText>
          </GreyBox>
        </GreyContainer>

        <GradiantContainer>
          <GradiantImg>
            {showSmall ? <SmallGradiant/> : <Gradiant/>}
          </GradiantImg>
        </GradiantContainer>
      </ProcessContainer>
      <HeroShade />
    </section>
  );
};

export default TeamWork;
