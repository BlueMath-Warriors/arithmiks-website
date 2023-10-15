import React from "react";
import ServiceCard from "./Service-Card";
import {
  SmallTxt,
  Header,
  Left,
  Right,
  HeaderText,
  SecondaryColor,
  ViewButton,
  BtnIcon,
  CardContainer,
  CardCol,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowCricleRight from "../../../images/arrow-right-circle-black.svg";
import CodeCircle from "../../../images/code-circle.svg";
import CpuIcon from "../../../images/cpu-icon.svg";
import LampIcon from "../../../images/lamp-icon.svg";
import SettingIcon from "../../../images/setting-icon.svg";

import code_circle_hover from "../../../images/code-circle-hover.svg";
import cpu_icon_hover from "../../../images/cpu-icon-hover.svg";
import lamp_icon_hover from "../../../images/lamp-icon-hover.svg";
import setting_icon_hover from "../../../images/setting-icon-hover.svg";

const Services = () => {
  return (
    <section className={containerStyles.services}>
      <Header>
        <Left>
          <SmallTxt>Services</SmallTxt>
          <HeaderText>
            What We <SecondaryColor>Do</SecondaryColor>
          </HeaderText>
        </Left>
        <Right>
          <ViewButton
            onClick={() => {
              document
                .getElementById("contact-form")
                .scrollIntoView({ behavior: "smooth" });
            }}>
            Reach us
            <ArrowCricleRight />
          </ViewButton>
        </Right>
      </Header>

      <CardContainer>
        <CardCol>
          <ServiceCard
            position="topleft"
            basicIcon={<CodeCircle/>}
            hoverIcon={code_circle_hover}
            header="Software Development"
            points={[
              "Web App Development",
              "Mobile App Development",
              "Custom Software Development",
              "UI/UX Design",
              "Software Quality Assurance",
              "DevOps",
            ]}
          />
          <ServiceCard
            position="bottomleft"
            basicIcon={<CpuIcon/>}
            hoverIcon={cpu_icon_hover}
            header="Data and AI"
            points={[
              "Data Pre-Processing",
              "Data Modeling",
              "Results and Visualizations",
            ]}
          />
        </CardCol>
        <CardCol down>
          <ServiceCard
            position="topright"
            basicIcon={<LampIcon/>}
            hoverIcon={lamp_icon_hover}
            header="Solutions"
            points={[
              "Cloud Infrastructure Managment",
              "Project Managment",
              "Technical Support",
              "Digital Transformation",
            ]}
          />
          <ServiceCard
            position="bottomright"
            basicIcon={<SettingIcon/>}
            hoverIcon={setting_icon_hover}
            header="Product Engineering"
            points={[
              "Product Discovery",
              "Interactive Prototyping",
              "MVP",
              "Software Re-engineering",
            ]}
          />
        </CardCol>
      </CardContainer>
    </section>
  );
};

export default Services;
