import React, {useState, useEffect} from "react";
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
          Tailoring Solutions to Meet Your Unique Needs
        </TitelCaption>
        <CardContainer>
          {/* <GradiantContainer>
            <Gradiant3 src={smallGradiant ? gradiant_5 : gradiant_3} />
          </GradiantContainer> */}
          <Card>
            <CardTitle>Geo-Targeted Business Search</CardTitle>
            <CardDetail>
              Dive deep into specific locations and discover businesses that
              align with your target audience.
            </CardDetail>
          </Card>

          <Card>
            <CardTitle>Comprehensive Contact Data</CardTitle>
            <CardDetail>
              Gain direct access to crucial email addresses and phone numbers,
              streamlining your outreach efforts.
            </CardDetail>
          </Card>

          <Card>
            <CardTitle>Domain Lookup</CardTitle>
            <CardDetail>
              Delve into specific domains to unearth related emails and trace
              their online presence.
            </CardDetail>
          </Card>

          <Card>
            <CardTitle>Efficient Data Management</CardTitle>
            <CardDetail>
              Export your findings effortlessly, integrating the data into
              popular CRMs for a seamless workflow.
            </CardDetail>
          </Card>
        </CardContainer>
        <HeroShade></HeroShade>
      </div>
    </>
  );
};

export default EasybarSolution;
