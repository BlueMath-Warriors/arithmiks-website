import React from "react";
import { navigate } from "gatsby";
import {
  SmallTxt,
  Header,
  Left,
  Right,
  HeaderText,
  DescriptionText,
  ViewButton,
  BtnIcon,
  CaseStudiesGrid,
  NewCaseStudyCard,
  CaseStudyImgWrapper,
  LogoAndTagWrapper,
  CompanyLogo,
  CaseStudyTitle,
  CaseStudyDescription,
  CaseStudyTag,
} from "./index.styled";
import CollaboratedWith from "./Collaborated-With";
import * as containerStyles from "../../../styles/global.module.css";
import ArrowCricleRight from "../../../images/arrow-right-circle-black.svg";
import SwervDashboardImg from "../../../images/swervDashboard.svg";
import TogatherDashboardImg from "../../../images/togatherDashboard.svg";
import SbaloansDashboardImg from "../../../images/sbaloansDashboard.svg";
import EasybarDashboardImg from "../../../images/easybarDashboard.svg";
import LfgoDashboardImg from "../../../images/lfgoDashboard.svg";

const CaseStudy = ({ landing = false }) => {
  return (
    <section className={containerStyles.case_study}>
      <Header>
        <Left>
          <SmallTxt>CASE STUDIES</SmallTxt>
          <HeaderText>Our Case Studies</HeaderText>
          <DescriptionText>
            Problems are guidelines, not 'Stop' signs. Check our success stories in custom software.
          </DescriptionText>
        </Left>
        <Right show={landing}>
          <ViewButton onClick={() => navigate("/case-studies")}>
            {"View All"}
            <ArrowCricleRight />
          </ViewButton>
        </Right>
      </Header>

      <CollaboratedWith />

      <CaseStudiesGrid>
        <NewCaseStudyCard>
          <CaseStudyImgWrapper>
            <SwervDashboardImg />
          </CaseStudyImgWrapper>
          <LogoAndTagWrapper>
            <CompanyLogo src="/static/swerv.svg" alt="Swerv Automotive" />
            <CaseStudyTag>SaaS</CaseStudyTag>
          </LogoAndTagWrapper>
          <CaseStudyTitle>Automates smart vehicle acquisitions</CaseStudyTitle>
          <CaseStudyDescription>
            A SaaS platform for car dealerships to automate acquisitions, centralize data, and optimize sales.
          </CaseStudyDescription>
        </NewCaseStudyCard>

        <NewCaseStudyCard>
          <CaseStudyImgWrapper>
            <TogatherDashboardImg />
          </CaseStudyImgWrapper>
          <LogoAndTagWrapper>
            <CompanyLogo src="/static/togather.svg" alt="Togather" />
            <CaseStudyTag>Software</CaseStudyTag>
          </LogoAndTagWrapper>
          <CaseStudyTitle>Unifies community engagement, events, and donations</CaseStudyTitle>
          <CaseStudyDescription>
            Togather is a platform for churches and NGOs to connect communities through events, donations, and engagement.
          </CaseStudyDescription>
        </NewCaseStudyCard>

        <NewCaseStudyCard>
          <CaseStudyImgWrapper>
            <SbaloansDashboardImg />
          </CaseStudyImgWrapper>
          <LogoAndTagWrapper>
            <CompanyLogo src="/static/sbaloans.svg" alt="sbaloansHQ" />
            <CaseStudyTag>SaaS</CaseStudyTag>
          </LogoAndTagWrapper>
          <CaseStudyTitle>Streamlines and automates loan processing</CaseStudyTitle>
          <CaseStudyDescription>
            SBA Loans HQ streamlines SBA loans with centralized documents, tracking, and communication.
          </CaseStudyDescription>
        </NewCaseStudyCard>

        <NewCaseStudyCard>
          <CaseStudyImgWrapper>
            <EasybarDashboardImg />
          </CaseStudyImgWrapper>
          <LogoAndTagWrapper>
            <CompanyLogo src="/static/easybar.svg" alt="EASY-BAR" />
            <CaseStudyTag>Software</CaseStudyTag>
          </LogoAndTagWrapper>
          <CaseStudyTitle>Automates rebar design and ordering</CaseStudyTitle>
          <CaseStudyDescription>
          Easybar lets buyers design iron bars and suppliers print the orders for automated production.
          </CaseStudyDescription>
        </NewCaseStudyCard>

        <NewCaseStudyCard>
          <CaseStudyImgWrapper>
            <LfgoDashboardImg />
          </CaseStudyImgWrapper>
          <LogoAndTagWrapper>
            <CompanyLogo src="/static/lfgo.svg" alt="LFGO" />
            <CaseStudyTag>Web3</CaseStudyTag>
          </LogoAndTagWrapper>
          <CaseStudyTitle>Simplifies cross-chain token creation</CaseStudyTitle>
          <CaseStudyDescription>
          A Web3 platform to create, launch, and trade tokens with seamless minting and wallet integration.
          </CaseStudyDescription>
        </NewCaseStudyCard>
      </CaseStudiesGrid>
    </section>
  );
};

export default CaseStudy;
