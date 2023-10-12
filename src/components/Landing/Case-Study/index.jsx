import React from "react";
import { navigate } from "gatsby";
import {
  SmallTxt,
  Header,
  Left,
  Right,
  HeaderText,
  ViewButton,
  BtnIcon,
  CaseStudyCard,
  CardDetails,
  Tag,
  Tags,
  CaseStudyName,
  CaseStudyDetails,
  CardBtn,
  CaseStudyImg,
} from "./index.styled";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowCricleRight from "../../../images/arrow-right-circle-black.svg";
import ArrowBlue from "../../../images/arrow-right-blue.svg";
import CaseStudy_1 from "../../../images/case-study-1.png";
import CaseStudy_2 from "../../../images/case-study-2.png";

const CaseStudy = ({ landing = false }) => {
  return (
    <section className={containerStyles.case_study}>
      <Header>
        <Left>
          <SmallTxt>Case Study</SmallTxt>
          <HeaderText>Our Case Study</HeaderText>
        </Left>
        <Right show={landing}>
          <ViewButton onClick={() => navigate("/case-studies")}>
            {"View All"}
            <ArrowCricleRight />
          </ViewButton>
        </Right>
      </Header>

      <CaseStudyCard>
        <CaseStudyImg src={CaseStudy_1} />
        <CardDetails>
          <Tags>
            <Tag divider>UI/UX</Tag>
            <Tag divider>Web Application</Tag>
            <Tag>Software Integration</Tag>
          </Tags>
          <CaseStudyName>Easybar — Marketplace for Rebars</CaseStudyName>
          <CaseStudyDetails>
            Easybar serves as a marketplace that allows buyers to design and
            place orders for iron bars, while suppliers receive and print these
            orders for their automated machines.
          </CaseStudyDetails>
          <CardBtn onClick={()=>{navigate("/case-studies/easybar")}}>
            View Case Study
            <ArrowBlue />
          </CardBtn>
        </CardDetails>
      </CaseStudyCard>

      <CaseStudyCard>
        <CardDetails order>
          <Tags>
            <Tag divider>Creative Direction</Tag>
            <Tag divider>UI/UX</Tag>
            <Tag>Website Design</Tag>
          </Tags>
          <CaseStudyName>Ushaz — Online eCommerce</CaseStudyName>
          <CaseStudyDetails>
            Ushaz is an online store which is bringing traditional art to modern
            world. It encompasses features for product sale flow, 3d models for
            products and view in your space using AR.
          </CaseStudyDetails>
          <CardBtn onClick={()=>{navigate("/case-studies/ushaz")}}>
            View Case Study
            <ArrowBlue />
          </CardBtn>
        </CardDetails>
        <CaseStudyImg src={CaseStudy_2} />
      </CaseStudyCard>
    </section>
  );
};

export default CaseStudy;
