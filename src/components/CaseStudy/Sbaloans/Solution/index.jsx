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

const SbaloansSolution = () => {

  return (
    <>
      <div className={containerStyles.easybar_solution}>
        <SolutionHeader>
          <SolutionLeft>
            <SolutionLabel>SOLUTION</SolutionLabel>
            <Title>
              Our <Secondary>Solution</Secondary>
            </Title>
          </SolutionLeft>
          <SolutionRight>
            <SolutionDescription>
              <strong>Arithmiks</strong> delivered a unified, automated loan management platform that streamlined broker workflows, improved client visibility, and ensured secure, scalable operations.
            </SolutionDescription>
          </SolutionRight>
        </SolutionHeader>
        <CardContainer>
          <Card>
            <CardIcon src="/sbasolution1.svg" alt="Centralized Workflow System" />
            <CardTitle>Centralized Workflow System</CardTitle>
            <CardDetail>
              We built an integrated platform that consolidated deal tracking, communication, and document handling into one intuitive workspace.
            </CardDetail>
          </Card>

          <Card>
            <CardIcon src="/sbasolution2.svg" alt="Automated Client & Broker Updates" />
            <CardTitle>Automated Client & Broker Updates</CardTitle>
            <CardDetail>
              Milestone-based email triggers and status tracking were implemented to keep all stakeholders informed in real time, reducing manual follow-ups.
            </CardDetail>
          </Card>

          <Card>
            <CardIcon src="/sbasolution3.svg" alt="Secure & Scalable Infrastructure" />
            <CardTitle>Secure & Scalable Infrastructure</CardTitle>
            <CardDetail>
              The team optimized backend operations and migrated document storage to AWS to ensure high performance, data integrity, and long-term scalability.
            </CardDetail>
          </Card>
        </CardContainer>
      </div>
    </>
  );
};

export default SbaloansSolution;

