import React from "react";

export const getHeroData = (images) => ({
  category: "Web Application / SaaS",
  logoSrc: "/qareeb.svg",
  logoAlt: "Qareeb",
  caption: (
    <>
      An AI meeting intelligence platform that records, transcribes, and
      <br />turns every conversation into a searchable knowledge base.
    </>
  ),
  heroImageData: images?.heroImage,
  heroImageAlt: "Qareeb Dashboard",
});

export const techStackData = {
  technologies: [
    { name: "React", icon: "/Tech Stack/reactjs.svg" },
    { name: "PostgreSQL", icon: "/Tech Stack/postgresql.svg" },
    { name: "Node.js", icon: "/Tech Stack/nodejs.svg" },
    { name: "Cognee", icon: "/Tech Stack/cognee.svg" },
    { name: "Nylas", icon: "/Tech Stack/nylas.svg" },
  ],
  specialIconNames: [],
};

export const getOverviewData = (images) => ({
  title: "Overview",
  caption: (
    <>
      <span style={{ color: "#000000" }}>Project</span>{" "}
      <span style={{ color: "#0957DE" }}>Overview</span>
    </>
  ),
  detail:
    "Qareeb is an AI meeting assistant for Arabic-speaking and international teams. It transcribes meetings into a searchable knowledge base you can query like a colleague.",
  imageSrc: images?.overviewImage,
  problemData: {
    title: "The Problem",
    text: "Teams were losing critical information to fragmented tools, scattered calendars, and unstructured transcripts. Notes lived in one place, recordings in another, follow-ups nowhere. Qareeb solves this by combining AI transcription, knowledge organization, and calendar intelligence into one platform for Arabic and English.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
});

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> built a unified, bilingual meeting
      intelligence platform that transformed fragmented transcripts and
      scattered tools into an engaging, AI-powered knowledge base.
    </>
  ),
  solutions: [
    {
      icon: "/qareebsolution1.svg",
      title: "Streamlined AI Chat Assistant Interface",
      detail:
        "We rebuilt the chat experience with faster context switching, fewer clicks, quick-action prompts, web search with cited sources, and full-screen and split-screen modes.",
    },
    {
      icon: "/qareebsolution2.svg",
      title: "Pre-Project Knowledge Graph Customization",
      detail:
        "We gave users the ability to define their knowledge graph structure before a project starts—flexible enough for different team workflows, simple enough to skip the manual.",
    },
    {
      icon: "/qareebsolution3.svg",
      title: "Unified Calendar Integration",
      detail:
        "We unified Google, Microsoft, and Apple calendars through Nylas into a single view, with a bot that auto-joins scheduled meetings and syncs transcript data back automatically.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. AI-Generated Meeting Summary",
      description:
        "Auto-generates a structured summary after each meeting—topic outlines, category tags, plus Entities and Artifacts tabs.",
      image: "/Qareeb Key Features/qareebKeyFeature1.webp",
    },
    {
      title: "2. Meeting Artifacts",
      description:
        "One-click Decisions Log, Questions Raised, Key Quotes, Timeline, and Follow-up Email from the transcript—zero manual notes.",
      image: "/Qareeb Key Features/qareebKeyFeature2.jpg",
    },
    {
      title: "3. Live Recording with Real-Time Transcription",
      description:
        "Records with live waveform, automatic speaker ID, playback speed control, and a real-time transcript as you talk.",
      image: "/Qareeb Key Features/qareebKeyFeature3.webp",
    },
    {
      title: "4. Transcript Editor",
      description:
        "Rename speakers, highlight, annotate, format text, navigate by timestamp, undo/redo, and save with keyboard shortcuts.",
      image: "/Qareeb Key Features/qareebKeyFeature4.webp",
    },
    {
      title: "5. Meeting Library",
      description:
        "Searchable, sortable meeting table with speakers, status, duration, date, and language—supports GPT and Claude.",
      image: "/Qareeb Key Features/qareebKeyFeature5.jpg",
    },
    {
      title: "6. Document Upload in Projects",
      description:
        "Upload PDFs, DOCX, XLSX, CSV, PPT, and more up to 500MB into any project—transcripts and references in one place.",
      image: "/Qareeb Key Features/qareebKeyFeature6.webp",
    },
    {
      title: "7. Bilingual UI with Full RTL Support",
      description:
        "Full English and Arabic variants across the product—Arabic is a fully adapted RTL interface, not a translation.",
      image: "/Qareeb Key Features/qareebKeyFeature7.webp",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};

export const testimonialData = {
  text: "Highly effective and helpful both on the implementation side and at the strategic level.",
  clientImageSrc: "/qareebOwner.png",
  clientName: "Qareeb Team",
  clientTitle: "Qareeb Founder & CEO",
};
