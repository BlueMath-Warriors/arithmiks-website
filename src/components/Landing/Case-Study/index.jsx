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
import EhhDashboardImg from "../../../images/ehhDashboard.svg";
import GoDashboardImg from "../../../images/goDashboard.svg";
import OfertasDashboardImg from "../../../images/ofertasDashboard.svg";

const CaseStudy = ({ landing = false }) => {
  const caseStudies = [
    {
      slug: "swerv",
      dashboardImg: SwervDashboardImg,
      logo: "/swerv.svg",
      logoAlt: "Swerv Automotive",
      tag: "SaaS",
      title: "Automates smart vehicle acquisitions",
      description: "A SaaS platform for car dealerships to automate acquisitions, centralize data, and optimize sales.",
      hasDetailPage: false,
    },
    {
      slug: "togather",
      dashboardImg: TogatherDashboardImg,
      logo: "/togather.svg",
      logoAlt: "Togather",
      tag: "Software",
      title: "Unifies community engagement, events, and donations",
      description: "Togather is a platform for churches and NGOs to connect communities through events, donations, and engagement.",
      hasDetailPage: false,
    },
    {
      slug: "sbaloans",
      dashboardImg: SbaloansDashboardImg,
      logo: "/sbaloans.svg",
      logoAlt: "sbaloansHQ",
      tag: "SaaS",
      title: "Streamlines and automates loan processing",
      description: "SBA Loans HQ streamlines SBA loans with centralized documents, tracking, and communication.",
      hasDetailPage: true,
    },
    {
      slug: "easybar",
      dashboardImg: EasybarDashboardImg,
      logo: "/easybar.svg",
      logoAlt: "EASY-BAR",
      tag: "Software",
      title: "Automates rebar design and ordering",
      description: "Easybar lets buyers design iron bars and suppliers print the orders for automated production.",
      hasDetailPage: false,
    },
    {
      slug: "lfgo",
      dashboardImg: LfgoDashboardImg,
      logo: "/lfgo.svg",
      logoAlt: "LFGO",
      tag: "Web3",
      title: "Simplifies cross-chain token creation",
      description: "A Web3 platform to create, launch, and trade tokens with seamless minting and wallet integration.",
      hasDetailPage: true,
    },
    {
      slug: "expat",
      dashboardImg: EhhDashboardImg,
      logo: "/ehh.svg",
      logoAlt: "Expat Haven Hub",
      tag: "Web App",
      title: "AI-Powered Marketing Automation Platform",
      description: "AI-powered, gamified platform that centralizes essential lifestyle insights for digital nomads and expats.",
      hasDetailPage: false,
    },
    {
      slug: "go",
      dashboardImg: GoDashboardImg,
      logo: "/go.svg",
      logoAlt: "GO",
      tag: "Machine Learning",
      title: "AI-Powered Marketing Automation Platform",
      description: "An AI-powered platform that automates digital marketing—handling content, publishing, and ads to help agencies grow.",
      hasDetailPage: false,
    },
    {
      slug: "ofertas",
      dashboardImg: OfertasDashboardImg,
      logo: "/ofertas.svg",
      logoAlt: "Ofertas",
      tag: "Affiliation Market",
      title: "Community-Driven Deal & Coupon Discovery Platform",
      description: "Platform showcasing the best affiliate deals and offers to help users save more and shop smarter.",
      hasDetailPage: false,
    },
  ];

  const handleCardClick = (slug, hasDetailPage) => {
    if (hasDetailPage) {
      navigate(`/case-studies/${slug}`);
    }
  };

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

      {!landing && <CollaboratedWith />}

      <CaseStudiesGrid>
        {(landing ? caseStudies.slice(0, 3) : caseStudies).map((study, index) => {
          const DashboardImg = study.dashboardImg;
          return (
            <NewCaseStudyCard
              key={study.slug}
              onClick={() => handleCardClick(study.slug, study.hasDetailPage)}
              clickable={study.hasDetailPage}
            >
              <CaseStudyImgWrapper>
                <DashboardImg />
              </CaseStudyImgWrapper>
              <LogoAndTagWrapper>
                <CompanyLogo src={study.logo} alt={study.logoAlt} />
                <CaseStudyTag>{study.tag}</CaseStudyTag>
              </LogoAndTagWrapper>
              <CaseStudyTitle>{study.title}</CaseStudyTitle>
              <CaseStudyDescription>{study.description}</CaseStudyDescription>
            </NewCaseStudyCard>
          );
        })}
      </CaseStudiesGrid>
    </section>
  );
};

export default CaseStudy;
