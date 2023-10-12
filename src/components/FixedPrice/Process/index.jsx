import React from "react";
import { PrimaryText, Secondary, SectionHeader, Caption, CardContainer, Card, CardImg, CardTitle, List, ListItem } from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import Requirement from "../../../images/requirement-icon.png"
import Development from "../../../images/development-icon.png"
import Support from "../../../images/support-icon.png"

const Process = () => {
  return (
    <section className={containerStyles.process_section}>
      <SectionHeader>
        <PrimaryText>
          Our <Secondary>Process</Secondary>
        </PrimaryText>
        <Caption>Fast-track your project delivery using our simple three-step application development process.</Caption>
      </SectionHeader>
      <CardContainer>
        <Card>
          <CardImg src={Requirement}/>
          <CardTitle>Requirements Gathering</CardTitle>
          <List>
            <ListItem>Requirements Definition</ListItem>
            <ListItem>Analyzing the requirements</ListItem>
            <ListItem>Documenting the process</ListItem>
            <ListItem>Provide initial design</ListItem>
          </List>
        </Card>
        <Card>
          <CardImg src={Development}/>
          <CardTitle>Development & Testing</CardTitle>
          <List>
            <ListItem>Frontend & backend development</ListItem>
            <ListItem>Weekly Client Feedback (SCRUM)</ListItem>
            <ListItem>QA Testing</ListItem>
            <ListItem>Deployment</ListItem>
          </List>
        </Card>
        <Card>
          <CardImg src={Support}/>
          <CardTitle>Support & Maintenance</CardTitle>
          <List>
            <ListItem>SLA Based Support</ListItem>
            <ListItem>L3 and Production Support Services</ListItem>
            <ListItem>Operational support where needed</ListItem>
            <ListItem>On-going Support</ListItem>
          </List>
        </Card>
      </CardContainer>
    </section>
  );
};

export default Process;
