import React from "react";
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

const CaseStudy = () => {
  return (
    <>
      <div className={containerStyles.case_study}>
        <Header>
          <Left>
            <SmallTxt>Case Study</SmallTxt>
            <HeaderText>Our Case Study</HeaderText>
          </Left>
          <Right>
            <ViewButton>
              {"View All"}
              <BtnIcon src={ArrowCricleRight} />
            </ViewButton>
          </Right>
        </Header>

        <CaseStudyCard>
          <CaseStudyImg src={CaseStudy_1} />
          <CardDetails>
            <Tags>
              <Tag divider>Creative Direction</Tag>
              <Tag divider>UI/UX</Tag>
              <Tag>Website Design</Tag>
            </Tags>
            <CaseStudyName>Easybar — Marketplace for Rebars</CaseStudyName>
            <CaseStudyDetails>
              Less Doing, More Living was a conference about productivity and
              entrepreneurship hosted by Ari Meisel, author of two bestselling
              books: “The Art of Less Doing” and “The Replaceable Founder”.
            </CaseStudyDetails>
            <CardBtn>
              View Case Study
              <BtnIcon src={ArrowBlue} />
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
              Triniso is a Swiss watch manufacturer of luxurious and affordable
              watches in the Sierre, a beautiful vineyard region in the south of
              Switzerland.
            </CaseStudyDetails>
            <CardBtn>
              View Case Study
              <BtnIcon src={ArrowBlue} />
            </CardBtn>
          </CardDetails>
          <CaseStudyImg src={CaseStudy_2} />
        </CaseStudyCard>
      </div>
    </>
  );
};

export default CaseStudy;
