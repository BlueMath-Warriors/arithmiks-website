import React from "react";
import {
  LogosContainer,
  LogoItem,
  LogoImg,
  SectionTitle,
  SectionWrapper,
} from "./index.styled";

const ClientLogos = () => {
  const logos = [
    { name: "togather", path: "/togather.svg" },
    { name: "swerv", path: "/swerv.svg" },
    { name: "sbaloans", path: "/sbaloans.svg" },
    { name: "easybar", path: "/easybar.svg" },
    { name: "lfgo", path: "/lfgo.svg" },
  ];

  return (
    <SectionWrapper>
      <SectionTitle>FEATURED CLIENTS</SectionTitle>
      <LogosContainer>
        {logos.map((logo, index) => (
          <LogoItem key={index}>
            <LogoImg src={logo.path} alt={logo.name} />
          </LogoItem>
        ))}
      </LogosContainer>
    </SectionWrapper>
  );
};

export default ClientLogos;
