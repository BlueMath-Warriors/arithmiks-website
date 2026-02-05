import React from "react";
import {
  FeaturedClientsSection,
  FeaturedClientsTitle,
  ScrollingContainer,
  ScrollingRow,
  LogoCard,
  LogoImage,
} from "./index.styled";

const FeaturedClients = () => {
  const logos = [
    { name: "LFGO", path: "/lfgo.svg" },
    { name: "Go", path: "/go.svg" },
    { name: "Togather", path: "/togather.svg" },
    { name: "WEASY-BAR", path: "/easybar.svg" },
    { name: "Almani", path: "/almani.svg" },
    { name: "sbaloansHQ", path: "/sbaloans.svg" },
    { name: "Hakro", path: "/hakro.svg" },
    { name: "Swerv Automotive", path: "/swerv.svg" },
    { name: "Swerv Automotive", path: "/ehh.svg" },
    { name: "Swerv Automotive", path: "/ofertas.svg" },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <FeaturedClientsSection className="hero-featured-clients">
      <FeaturedClientsTitle>FEATURED CLIENTS</FeaturedClientsTitle>
      <ScrollingContainer>
        <ScrollingRow direction="left" aria-label="Scrolling client logos">
          {duplicatedLogos.map((logo, index) => (
            <LogoCard key={`logo-${index}`}>
              <LogoImage 
                src={logo.path} 
                alt={logo.name}
                loading="lazy"
              />
            </LogoCard>
          ))}
        </ScrollingRow>
      </ScrollingContainer>
    </FeaturedClientsSection>
  );
};

export default FeaturedClients;
