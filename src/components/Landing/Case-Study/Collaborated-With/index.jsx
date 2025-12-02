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
    { name: "lfgo", path: "/static/lfgo.svg" },
    { name: "go", path: "/static/go.svg" },
    { name: "togather", path: "/static/togather.svg" },
    { name: "easybar", path: "/static/easybar.svg" },
    { name: "almani", path: "/static/almani.svg" },
    { name: "sbaloans", path: "/static/sbaloans.svg" },
    { name: "hakro", path: "/static/hakro.svg" },
    { name: "swerv", path: "/static/swerv.svg" },
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

