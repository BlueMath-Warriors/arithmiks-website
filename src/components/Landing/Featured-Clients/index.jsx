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
    { name: "togather", path: "/static/togather.svg" },
    { name: "swerv", path: "/static/swerv.svg" },
    { name: "sbaloans", path: "/static/sbaloans.svg" },
    { name: "easybar", path: "/static/easybar.svg" },
    { name: "lfgo", path: "/static/lfgo.svg" },
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
