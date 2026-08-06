import React from "react";

export const getHeroData = (images) => ({
  category: "AI / Media Infrastructure",
  // No public product/company name for this case study — logo intentionally omitted.
  logoSrc: null,
  logoAlt: "Media Infrastructure",
  caption: (
    <>
      An AI platform that turns decades of broadcast video into a searchable
      <br />knowledge base with transcripts, faces, chapters, and natural language search.
    </>
  ),
  heroImageData: images?.heroImage,
  heroImageAlt: "Media Infrastructure Dashboard",
});

export const techStackData = {
  technologies: [
    { name: "Python", icon: "/Tech Stack/python.svg" },
    { name: "FastAPI", icon: "/Tech Stack/fastapi.svg" },
    { name: "Argo Workflows", icon: "/Tech Stack/argo-workflows.svg" },
    { name: "Kubernetes", icon: "/Tech Stack/kubernetes.svg" },
    { name: "Qdrant", icon: "/Tech Stack/qdrant.svg" },
    { name: "React", icon: "/Tech Stack/reactjs.svg" },
    { name: "OpenAI", icon: "/Tech Stack/openai.svg" },
    { name: "Anthropic", icon: "/Tech Stack/anthropic.svg" },
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
    "Built for a major broadcast archive, this platform auto-transforms raw video into searchable content via AI: transcripts, face recognition, chapters, summaries, and semantic indexing.",
  imageSrc: images?.overviewImage,
  problemData: {
    title: "The Problem",
    text: "Decades of footage were searchable only via manually assigned metadata, making content hard to discover. Each AI task—transcription, face recognition, chapter generation—ran independently, with undocumented, assumption-based dependencies. The platform orchestrates every AI service through one scalable workflow with real dependency tracing built in.",
    frameImageSrc: "/projectProblemFrame.svg",
  },
});

export const solutionData = {
  label: "SOLUTION",
  heading: "Our Solution",
  description: (
    <>
      <strong>Arithmiks</strong> designed the platform around a control plane
      and data plane architecture, keeping workflow coordination separate
      from media transfer for security and scale.
    </>
  ),
  solutions: [
    {
      icon: "/mediainfrasolution1.svg",
      title: "Tracing Reality Over Assumptions",
      detail:
        "Dependencies were assumed from service names, not real data flow. We traced actual reads/writes, rebuilt the pipeline, fixed bad dependencies, and unlocked blocked concurrency.",
    },
    {
      icon: "/mediainfrasolution2.svg",
      title: "Visibility Into Long-Running Inference",
      detail:
        "AI stages ran minutes with no output, masking stalls as progress. Each video now runs isolated with live UI progress, so failures stay contained and retry without full restarts.",
    },
    {
      icon: "/mediainfrasolution3.svg",
      title: "Search Built for How People Actually Ask",
      detail:
        "Raw video isn't searchable by nature. The final stage converts pipeline extracts into vector embeddings, powering NL search and a RAG chat interface over the archive.",
    },
  ],
};

export const keyFeaturesData = {
  label: "HIGHLIGHTS",
  heading: "Key Features",
  features: [
    {
      title: "1. Corrected AI Dependency Graph",
      description:
        "Dependencies traced from real data flow, revealing wrong assumptions—chapters depend on transcripts, not frames.",
      image: "/Media Infrastructure Key Features/mediaInfraKeyFeature1.webp",
    },
    {
      title: "2. Real-Time Progress Reporting",
      description:
        "Per-chunk status streamed via Server-Sent Events, with heartbeats distinguishing active inference from stalled execution.",
      image: "/Media Infrastructure Key Features/mediaInfraKeyFeature2.webp",
    },
    {
      title: "3. Conditional Model Execution",
      description:
        "Per-video model selection organized into lineage execution groups, keeping the workflow structure static and reviewable.",
      image: "/Media Infrastructure Key Features/mediaInfraKeyFeature3.webp",
    },
    {
      title: "4. GPU Resource Management",
      description:
        "Workflow-level semaphores queue GPU-intensive stages instead of letting them compete for capacity.",
      image: "/Media Infrastructure Key Features/mediaInfraKeyFeature4.webp",
    },
    {
      title: "5. Semantic Search and RAG",
      description:
        "Natural language search and chat over the archive, powered by final stage embeddings.",
      image: "/Media Infrastructure Key Features/mediaInfraKeyFeature5.webp",
    },
    {
      title: "6. Independent Retry and Isolation",
      description:
        "Each video's workflow retries or cancels without affecting others processing concurrently.",
      image: "/Media Infrastructure Key Features/mediaInfraKeyFeature6.webp",
    },
  ],
  leftIconSrc: "/leftIcon.svg",
  rightIconSrc: "/rightIcon.svg",
};
