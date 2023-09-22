import React from "react";
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
  Card,
  CardHeader,
  CardIcon,
  CardDetailIcon,
  CardHeaderText,
  CardBodyDetail,
  CardBodyText,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowCricleRight from "../../../images/arrow-right-circle-line.svg";
import ArrowRight from "../../../images/arrow-right-black.svg";
import ArrowRightWhite from "../../../images/ArrowRight.svg";
import ArrowRightBold from "../../../images/arrow-right-bold.svg";
import code_circle from "../../../images/code_circle.svg";
import cpu_icon from "../../../images/cpu-icon.svg";
import lamp_icon from "../../../images/lamp-icon.svg";
import setting_icon from "../../../images/setting-icon.svg";

const Services = () => {
  return (
    <>
      <div className={containerStyles.services}>
        <Header>
          <Left>
            <SmallTxt>Services</SmallTxt>
            <HeaderText>
              What We <SecondaryColor>Do</SecondaryColor>
            </HeaderText>
          </Left>
          <Right>
            <ViewButton>
              View All
              <BtnIcon src={ArrowCricleRight} />
            </ViewButton>
          </Right>
        </Header>

        <CardContainer>
          <CardCol>
            <Card topleft>
              <CardHeader>
                <CardIcon src={code_circle} />
                <CardHeaderText>Software Development</CardHeaderText>
              </CardHeader>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>Web App Development</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>Mobile App Development</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>Custom Software Development</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>UI/UX Design</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>Software Quality Assurance</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>DevOps</CardBodyText>
              </CardBodyDetail>
            </Card>

            <Card bottomleft>
              <CardHeader>
                <CardIcon src={cpu_icon} />
                <CardHeaderText>Data and AI</CardHeaderText>
              </CardHeader>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>Data Pre-Processing</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>Data Modeling</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>Results and Visualisation</CardBodyText>
              </CardBodyDetail>
            </Card>
          </CardCol>
          <CardCol down>
            <Card blue topright>
              <CardHeader>
                <CardIcon src={lamp_icon} />
                <CardHeaderText white>Solutions</CardHeaderText>
              </CardHeader>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRightWhite} />
                <CardBodyText white>
                  Cloud Infrastructure Management
                </CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRightWhite} />
                <CardBodyText white>Project Management</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRightBold} />
                <CardBodyText bold>Technical Support</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRightWhite} />
                <CardBodyText white>Digital Transformation</CardBodyText>
              </CardBodyDetail>
            </Card>
            <Card bottomright>
              <CardHeader>
                <CardIcon src={setting_icon} />
                <CardHeaderText>Product Engineering</CardHeaderText>
              </CardHeader>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>Product Discovery</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>Interactive Prototyping</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>MVP</CardBodyText>
              </CardBodyDetail>

              <CardBodyDetail>
                <CardDetailIcon src={ArrowRight} />
                <CardBodyText>Software Re-engineering</CardBodyText>
              </CardBodyDetail>
            </Card>
          </CardCol>
        </CardContainer>
      </div>
    </>
  );
};

export default Services;
