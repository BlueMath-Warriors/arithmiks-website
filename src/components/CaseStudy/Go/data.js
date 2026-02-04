import React from "react";

export const heroData = {
  category: "Web Application / Machine Learning / SaaS",
  logoSrc: "/go.svg",
  logoAlt: "GO",
  caption: (
    <>
      An AI-powered platform that automates digital marketing—handling
      <br />
      content, publishing, and ads to help agencies grow.
    </>
  ),
  heroImageSrc: "/goMemorandum.png",
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
  imageSrc: "/goFinancialSummary.png",
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
      <strong>Arithmiks</strong> built an end-to-end AI automation platform that replaced manual marketing operations with intelligent, scalable, and multi-tenant workflows.
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
      title: "1. AI-Powered Marketing Engine:",
      description:
        "Seamlessly manage keywords, content, WordPress publishing, and ad campaigns with AI-driven automation.",
      image: "/Go Key Features/goKeyFeature1.png",
    },
    {
      title: "2. Smart Control System:",
      description:
        "Self-learning agents continuously analyze data, identify opportunities, and turn them into fully automated, high-performing campaigns.",
      image: "/Go Key Features/goKeyFeature2.png",
    },
    {
      title: "3. Campaign Control Center:",
      description: "Monitor, manage, and evaluate every ad, rule, and performance signal from a single dashboard—without relying on Facebook Ads Manager.",
      image: "/Go Key Features/goKeyFeature3.png",
    },
    {
      title: "4. Real-Time & Historical Performance at a Glance:",
      description:
        "Real-time and historical insights across daily, hourly, and filtered views. Track platform activity and explore detailed campaign metrics — all in one interactive dashboard.",
      image: "/Go Key Features/goKeyFeature4.png",
    },
    {
      title: "5. Multi-Org RBAC Engine:",
      description: "Manage organizations, projects, users, Facebook ad accounts, and WordPress domains — securely orchestrated in one place.",
      image: "/Go Key Features/goKeyFeature5.png",
    },
    {
      title: "6. Continuous Optimization Engine:",
      description: "Always-running data pipelines watch performance, adjust campaigns by time of day, and track competitor activity—so optimization happens automatically.",
      image: "/Go Key Features/goKeyFeature6.png",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};

export const testimonialData = {
  text: "Omer and his team put in significant effort and delivered many positive contributions.",
  clientImageSrc: "/lfgoOwner.png",
  clientName: "Louis-Antoine",
  clientTitle: "GoAgents Loans Founder & CEO",
};

