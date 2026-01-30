import React from "react";

export const heroData = {
  category: "Web Application / Web3",
  logoSrc: "/lfgo.svg",
  logoAlt: "LFGO",
  caption: (
    <>
      A Web3 platform to create, launch, and trade tokens on Ethereum
      <br />
      and Solana with seamless minting and wallet.
    </>
  ),
  heroImageSrc: "/lfgoMemorandum.svg",
  heroImageAlt: "LFGO Memorandum",
};

export const techStackData = {
  technologies: [
    { name: "React", icon: "/Tech Stack/reactjs.svg" },
    { name: "Next JS", icon: "/Tech Stack/nextjs.svg" },
    { name: "Golang", icon: "/Tech Stack/golang.svg" },
    { name: "MySQL", icon: "/Tech Stack/mysql.svg" },
    { name: "AWS", icon: "/Tech Stack/aws.svg" },
    { name: "Web3", icon: "/Tech Stack/web3.svg" },
  ],
  specialIconNames: ["AWS"],
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
    "LFGO is a Web3 platform that simplifies creating, launching, and trading custom tokens across multiple blockchains through an intuitive, guided experience.",
  imageSrc: "/lfgoFinancialSummary.svg",
  problemData: {
    title: "The Problem",
    text: "Token creation and trading required complex, fragmented tools and deep technical knowledge, limiting accessibility and efficiency. LFGO addresses this by unifying minting, management, and marketplace trading into one easy-to-use, cross-chain platform.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
};

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> designed a unified Web3 platform that simplified
      token creation, enabled cross-chain trading, and delivered real-time
      marketplace transparency.
    </>
  ),
  solutions: [
    {
      icon: "/lfgosolution1.svg",
      title: "Guided Multi-Chain Token Creation",
      detail:
        "Arithmiks introduced a step-by-step minting experience that allows users to create and launch tokens seamlessly across Ethereum and Solana without technical complexity.",
    },
    {
      icon: "/lfgosolution2.svg",
      title: "Real-Time, Transparent Marketplace",
      detail:
        "Live updates for token launches, pricing, and liquidity are powered by WebSocket streaming, giving users instant visibility into marketplace activity.",
    },
    {
      icon: "/lfgosolution3.svg",
      title: "Secure Wallet & Smart Contract Management",
      detail:
        "Multi-wallet integration and smart contract management ensure secure access, backward compatibility, and long-term platform stability.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Multi-Chain Token Creation:",
      description:
        "Seamless minting and trading on Ethereum and Solana blockchains.",
      image: "/Lfgo Key Features/lfgoKeyFeature1.svg",
    },
    {
      title: "2. Real-Time NFT Marketplace",
      description:
        "Discover NFT prices, new drops, and liquidity updates in real time, powered by WebSocket streaming.",
      image: "/Lfgo Key Features/lfgoKeyFeature2.svg",
    },
    {
      title: "3. One Dashboard, Any Wallet",
      description:
        "Connect MetaMask or Phantom to manage all your multi-chain assets from one dashboard.",
      image: "/Lfgo Key Features/lfgoKeyFeature3.svg",
    },
    {
      title: "4. Fail-Safe Token Launches",
      description:
        "Missed liquidity goals? Users get automatic or on-demand refunds.",
      image: "/Lfgo Key Features/lfgoKeyFeature4.svg",
    },
    {
      title: "5. Smart Reward Contracts",
      description:
        "Automated contracts validate requirements, apply boosts, and convert rewards into platform tokens.",
      image: "/Lfgo Key Features/lfgoKeyFeature5.svg",
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

