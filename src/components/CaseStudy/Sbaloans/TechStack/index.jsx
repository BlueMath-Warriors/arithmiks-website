import React from "react";
import {
  TechStackSection,
  TechStackContainer,
  TechStackTrack,
  TechItem,
  TechIcon,
  PostmarkIcon,
  TechName,
} from "./index.styled";

const TechStack = () => {
  const technologies = [
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "Django", icon: "/Tech Stack/django.svg" },
    { name: "AWS S3", icon: "/Tech Stack/aws-s3.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "AWS RDS", icon: "/Tech Stack/aws-rds.svg" },
    { name: "Postmark", icon: "/Tech Stack/postmark.svg" },
    { name: "Vercel", icon: "/Tech Stack/vercel.svg" },
    { name: "Figma", icon: "/Tech Stack/figma.svg" },
    { name: "AWS EC2", icon: "/Tech Stack/aws-ec2.svg" },
  ];

  return (
    <TechStackSection>
      <TechStackContainer>
        <TechStackTrack>
          {technologies.map((tech, index) => (
            <TechItem key={`first-${index}`}>
              {tech.name === "Postmark" ? (
                <PostmarkIcon src={tech.icon} alt={tech.name} />
              ) : (
                <TechIcon src={tech.icon} alt={tech.name} />
              )}
              <TechName>{tech.name}</TechName>
            </TechItem>
          ))}
          {technologies.map((tech, index) => (
            <TechItem key={`second-${index}`}>
              {tech.name === "Postmark" ? (
                <PostmarkIcon src={tech.icon} alt={tech.name} />
              ) : (
                <TechIcon src={tech.icon} alt={tech.name} />
              )}
              <TechName>{tech.name}</TechName>
            </TechItem>
          ))}
        </TechStackTrack>
      </TechStackContainer>
    </TechStackSection>
  );
};

export default TechStack;

