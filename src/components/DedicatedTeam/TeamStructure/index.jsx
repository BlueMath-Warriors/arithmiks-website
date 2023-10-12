import React, { useState, useEffect } from "react";
import {
  Card,
  CardContainer,
  CardTitle,
  CardDetail,
  GradiantContainer,
  GradiantImg,
  Caption,
  PrimaryText,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import Gradiant from "../../../images/gradiant-7.svg";
import SmallGradiant from "../../../images/gradiant-8.svg";

import { HeroShade } from "../index.styled";
const TeamStructure = () => {
  const [showSmall, setShowSmall] = useState(true);
  function isSmallGradient() {
    if (typeof window !== "undefined") {
      return window.innerWidth < 830;
    }
    return false;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Introduce a small delay to ensure window properties are ready
      const initialShowSmallTimeout = setTimeout(() => {
        const initialShowSmall = isSmallGradient();
        setShowSmall(initialShowSmall);
      }, 100); // Adjust the delay time as needed

      const handleWindowResize = () => {
        setShowSmall(isSmallGradient());
      };

      handleWindowResize();

      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
        clearTimeout(initialShowSmallTimeout); // Clear the timeout if the component unmounts
      };
    }
  }, []);

  return (
    <section className={containerStyles.team_need}>
      <PrimaryText>Why Do you need a dedicated team?</PrimaryText>
      <Caption>Tailoring Solutions to Meet Your Unique Needs </Caption>
      <CardContainer>
        <Card>
          <CardTitle>Early-stage startup</CardTitle>
          <CardDetail>
            If you’re an early-stage startup and you’re expected to grow, think
            of the idea to hire dedicated development team. It’ll let you build
            a team quickly, save money on the hiring processes and develop the
            product faster. While your in-house team is left to work on
            business-oriented tasks, the augmented team does the additional
            work.
          </CardDetail>
        </Card>
        <Card>
          <CardTitle>Project with Vague Requirements</CardTitle>
          <CardDetail>
            When your idea doesn’t have the product-market fit and needs a
            discovery stage, the dedicated team is the way to go. As the
            discovery stage lays the backbone for the whole development
            mechanism of the project, it may take months of tests and interviews
            to finally settle down. The dedicated team model provides time and
            resources for you to focus on the discovery stage with no fear of
            overspending.
          </CardDetail>
        </Card>
        <Card>
          <CardTitle>Long-term projects</CardTitle>
          <CardDetail>
            The dedicated team model is suitable for complex long-term projects,
            which have the potential to expand. Startups that pass the pre-seed
            stage and need to grow fast can benefit from hiring a dedicated
            development team. Within a dedicated team, you will save up
            hiring/firing expenses, get access to professional developers
            worldwide, and will be able to scale the product fast.
          </CardDetail>
        </Card>
        <GradiantContainer showSmall={showSmall}>
          <GradiantImg src={showSmall ? SmallGradiant : Gradiant} />
        </GradiantContainer>
      </CardContainer>
      <HeroShade />
    </section>
  );
};

export default TeamStructure;
