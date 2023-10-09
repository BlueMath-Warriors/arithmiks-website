import React from "react";
import {
  Card,
  CardContainer,
  Secondary,
  SectionHeader,
  CardTitle,
  List,
  ListItem,
  CardDetail,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import { Caption, PrimaryText } from "../index.styled";

const Ideas = () => {
  return (
    <section className={containerStyles.idea_section}>
      <SectionHeader>
        <PrimaryText>
          Let’s Bring Your
          <br />
          <Secondary>Innovative Ideas To life</Secondary>
        </PrimaryText>
        <Caption>
          From idea creation to product delivery, develop and scale with us in
          your domain.
        </Caption>
      </SectionHeader>
      <CardContainer>
        <Card>
          <CardDetail>
            <CardTitle>Discovery</CardTitle>
            <List>
              <ListItem>Onsite / Offsite Discovery Workshop</ListItem>
              <ListItem>Vision and Goal Mapping</ListItem>
              <ListItem>Requirements Definition</ListItem>
              <ListItem>UI/UX and Visual Prototyping</ListItem>
              <ListItem>High Risk Tech POCs</ListItem>
              <ListItem>Product Roadmap</ListItem>
            </List>
          </CardDetail>
        </Card>
        <Card>
          <CardDetail>
            <CardTitle>Execution</CardTitle>
            <List>
              <ListItem>Software Architecture and Design</ListItem>
              <ListItem>Web/Mobile/Backend Development</ListItem>
              <ListItem>APIs Development and Integrations</ListItem>
              <ListItem>Continuous Integration/Delivery</ListItem>
              <ListItem>UAT</ListItem>
              <ListItem>QA Testing</ListItem>
            </List>
          </CardDetail>
        </Card>
        <Card>
          <CardDetail>
            <CardTitle>Support</CardTitle>
            <List>
              <ListItem>SLA Based Support</ListItem>
              <ListItem>On-going Support</ListItem>
              <ListItem>L3 and Production Support Services</ListItem>
              <ListItem>Operational Support</ListItem>
            </List>
          </CardDetail>
        </Card>
      </CardContainer>
    </section>
  );
};

export default Ideas;
