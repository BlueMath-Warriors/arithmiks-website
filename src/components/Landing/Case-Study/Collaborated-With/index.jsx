import React from "react";
import {
  CollaboratedSection,
  CollaboratedTitle,
  ScrollingContainer,
  ScrollingRow,
  LogoCard,
  LogoImage,
} from "./index.styled";

const CollaboratedWith = () => {
  const logos = [
    { name: "lfgo", path: "/lfgo.svg" },
    { name: "go", path: "/go.svg" },
    { name: "togather", path: "/togather.svg" },
    { name: "easybar", path: "/easybar.svg" },
    { name: "almani", path: "/almani.svg" },
    { name: "sbaloans", path: "/sbaloans.svg" },
    { name: "hakro", path: "/hakro.svg" },
    { name: "swerv", path: "/swerv.svg" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <CollaboratedSection>
      <CollaboratedTitle>We've Collaborated with</CollaboratedTitle>
      <ScrollingContainer>
        <ScrollingRow direction="left">
          {duplicatedLogos.map((logo, index) => (
            <LogoCard key={`row1-${index}`}>
              <LogoImage src={logo.path} alt={logo.name} />
            </LogoCard>
          ))}
        </ScrollingRow>
        <ScrollingRow direction="right">
          {duplicatedLogos.map((logo, index) => (
            <LogoCard key={`row2-${index}`}>
              <LogoImage src={logo.path} alt={logo.name} />
            </LogoCard>
          ))}
        </ScrollingRow>
      </ScrollingContainer>
    </CollaboratedSection>
  );
};

export default CollaboratedWith;

