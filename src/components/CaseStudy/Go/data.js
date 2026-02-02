import React from "react";

export const heroData = {
  category: "Web Application / Machine Learning / SaaS",
  logoSrc: "/go.svg",
  logoAlt: "GO",
  caption: (
    <>
      An AI-powered platform that automates digital marketing—handling content,
      <br />
      publishing, and ads to help agencies grow.
    </>
  ),
  heroImageSrc: "/goMemorandum.svg",
  heroImageAlt: "GO Memorandum",
};

export const techStackData = {
  technologies: [
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "Tailwind CSS", icon: "/Tech Stack/tailwind.svg" },
    { name: "Django", icon: "/Tech Stack/django.svg" },
    { name: "Python", icon: "/Tech Stack/python.svg" },
    { name: "FastAPI", icon: "/Tech Stack/fastapi.svg" },
    { name: "MySQL", icon: "/Tech Stack/mysql.svg" },
    { name: "MariaDB", icon: "/Tech Stack/mariadb.svg" },
    { name: "CI/CD Pipelines", icon: "/Tech Stack/cicdpipeline.svg" },
    { name: "Docker", icon: "/Tech Stack/docker.svg" },
    { name: "Apache Kafka", icon: "/Tech Stack/apachekafka.svg" },
    { name: "OpenAI", icon: "/Tech Stack/openai.svg" },
    { name: "AWS", icon: "/Tech Stack/aws.svg" },
    { name: "Load Balancer", icon: "/Tech Stack/loadbalancer.svg" },
    { name: "Elastic Search", icon: "/Tech Stack/elasticsearch.svg" },
    { name: "Figma", icon: "/Tech Stack/figma.svg" },
    { name: "AWS EC2", icon: "/Tech Stack/aws-ec2.svg" },
  ],
  specialIconNames: [],
};

export const overviewData = {
  title: "Overview",
  caption: (
    <>
      <span style={{ color: "#000000" }}>Project</span>{" "}
      <span style={{ color: "#0957DE" }}>Overview</span>
    </>
  ),
  detail:
    "GoAgents is an AI-powered SaaS platform that automates end-to-end digital marketing workflows, enabling teams to scale campaigns with speed and efficiency.",
  imageSrc: "/goFinancialSummary.svg",
  problemData: {
    title: "The Problem",
    text: "Marketing teams relied on manual, fragmented tools to manage content, ads, and reporting, making it difficult to scale without errors or high overhead. GoAgents solves this by unifying and automating the entire marketing workflow in one intelligent platform.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
};

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> built an end-to-end AI automation platform that
      replaced manual marketing operations with intelligent, scalable, and
      multi-tenant workflows.
    </>
  ),
  solutions: [
    {
      icon: "/gosolution1.svg",
      title: "Intelligent Multi-Agent Automation",
      detail:
        "Arithmiks designed a coordinated system of AI agents to automate keyword research, content creation, ad copy generation, and campaign execution simultaneously.",
    },
    {
      icon: "/gosolution2.svg",
      title: "Scalable Multi-Tenant Architecture",
      detail:
        "The platform was engineered to securely manage multiple agencies and client accounts with isolated data, permissions, and workflows at scale.",
    },
    {
      icon: "/gosolution3.svg",
      title: "High-Volume Campaign Processing & Monitoring",
      detail:
        "Kafka-powered pipelines and real-time performance monitoring enabled bulk campaign generation, system observability, and operational reliability.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Full Marketing Automation:",
      description:
        "AI-driven workflows for keyword research, content generation, WordPress publishing, and ad management.",
      image: "/Go Key Features/goKeyFeature1.svg",
    },
    {
      title: "2. Multi-Agent System:",
      description:
        "Independent AI agents handling discovery, generation, classification, and reporting tasks simultaneously.",
      image: "/Go Key Features/goKeyFeature2.svg",
    },
    {
      title: "3. Bulk Campaign Generation:",
      description: "CSV uploads processed via Kafka pipelines for high-volume automation.",
      image: "/Go Key Features/goKeyFeature3.svg",
    },
    {
      title: "4. Performance Monitoring:",
      description:
        "Real-time logging with Elasticsearch and an admin dashboard for analytics and troubleshooting.",
      image: "/Go Key Features/goKeyFeature4.svg",
    },
    {
      title: "5. Scalable Multi-Tenant Architecture:",
      description: "Secure separation of client organizations, users, and data streams.",
      image: "/Go Key Features/goKeyFeature5.svg",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};

export const testimonialData = {
  text: "Omer is a professional, reliable, and kind person. Working with him was great! Omer was available for any question, gave professional answers, was patient with the project and the results are beautiful. I highly recommend working with him.",
  clientImageSrc: "/sbaOwner.jpeg",
  clientName: "Zachary Renta",
  clientTitle: "SBA Loans Founder & CEO",
};

