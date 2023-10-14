import React, { useState, useEffect } from "react";
import * as containerStyles from "../../../../styles/global.module.css";
import {
  Title,
  Secondary,
  TitelCaption,
  CardContainer,
  Card,
  CardTitle,
  CardDetail,
  GradiantContainer,
  Gradiant3,
} from "./index.styled";
import { HeroShade } from "../index.styled";
import gradiant_3 from "../../../../images/gradiants/gradiant-3.svg";
import gradiant_5 from "../../../../images/gradiants/gradiant-5.svg";

const EasybarSolution = () => {
  const [smallGradiant, setSmallGradient] = useState(isSmallGradient());
  function isSmallGradient() {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1200;
    }
    return false;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowResize = () => {
        setSmallGradient(isSmallGradient());
      };
      handleWindowResize();

      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);

  return (
    <>
      <div className={containerStyles.easybar_solution}>
        <Title>
          Our <Secondary>Solution</Secondary>
        </Title>
        <TitelCaption>
          MAKING ORDER OUT OF CHAOS
        </TitelCaption>
        <CardContainer>
          {/* <GradiantContainer>
            <Gradiant3 src={smallGradiant ? gradiant_5 : gradiant_3} />
          </GradiantContainer> */}
          <Card>
            <CardTitle>Keep evolving</CardTitle>
            <CardDetail>
              EasyBar collaborated with the Suppliers to absorb the real users' needs,
              and Arithmiks was on their back to make it happen.
            </CardDetail>
          </Card>

          <Card>
            <CardTitle>Working Together</CardTitle>
            <CardDetail>
              Arithmiks team collaborated with the EasyBar to absorb the real users' needs.
              Improves user stories, all aimed to create an excellent customer experience.
            </CardDetail>
          </Card>

          <Card>
            <CardTitle>Team Work</CardTitle>
            <CardDetail>
              We put trust and teamwork at the center of our collaboration,
              which resulted in a top-notch product with a smooth user experience.
            </CardDetail>
          </Card>

          <Card>
            <CardTitle>Build Fast and Reliable</CardTitle>
            <CardDetail>
              We helped to build EasyBar from scratch, which means we needed to build fast and launch fast.
            </CardDetail>
          </Card>
        </CardContainer>
        <HeroShade></HeroShade>
      </div>
    </>
  );
};

export default EasybarSolution;
