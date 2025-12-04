import React from "react";
import {
  TechStackSection,
  TechStackContainer,
  TechItem,
  TechIcon,
  PostmarkIcon,
  TechName,
} from "./index.styled";

const TechStack = () => {
  const technologies = [
    { name: "Next JS", icon: "/nextjs.svg" },
    { name: "Django", icon: "/django.svg" },
    { name: "AWS S3", icon: "/aws-s3.svg" },
    { name: "PostgreSQL", icon: "/postgresql.svg" },
    { name: "AWS RDS", icon: "/aws-rds.svg" },
    { name: "Postmark", icon: "/postmark.svg" },
    { name: "Vercel", icon: "/vercel.svg" },
    { name: "Figma", icon: "/figma.svg" },
    { name: "AWS EC2", icon: "/aws-ec2.svg" },
  ];

  return (
    <TechStackSection>
      <TechStackContainer>
        {technologies.map((tech, index) => (
          <TechItem key={index}>
            {tech.name === "Postmark" ? (
              <PostmarkIcon src={tech.icon} alt={tech.name} />
            ) : (
              <TechIcon src={tech.icon} alt={tech.name} />
            )}
            <TechName>{tech.name}</TechName>
          </TechItem>
        ))}
      </TechStackContainer>
    </TechStackSection>
  );
};

export default TechStack;

