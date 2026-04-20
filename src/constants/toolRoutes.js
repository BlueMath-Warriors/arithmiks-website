/**
 * Canonical /tools/<slug> URLs — single source for nav, pages, SEO, and JSON-LD.
 * Each tool page (virus scanner, future tools) pulls metadata from here.
 */

export const TOOL_ROUTES = [
  {
    slug: "virus-scanner",
    status: "live",
    label: "Virus Scanner",
    tagline: "Free online file virus and malware scanner",
    headline: "Free Online Virus Scanner",
    intro:
      "Scan any file for viruses and malware with ClamAV signatures, YARA behavioral rules, and AI-assisted analysis. Files are processed in memory and deleted immediately after each scan.",
    seoTitle: "Free Online Virus Scanner - Scan Files for Malware | Arithmiks",
    seoDescription:
      "Free online virus scanner powered by ClamAV, YARA rules, and AI analysis. Upload any file up to 1 GB, get a detailed threat report in seconds. No signup, files deleted after scan.",
    keywords: [
      "free online virus scanner",
      "scan file for virus online",
      "malware scanner online",
      "ClamAV online",
      "YARA scanner",
      "file virus check",
      "online malware detection",
      "upload file check virus",
    ],
    schema: {
      appName: "Arithmiks Virus Scanner",
      applicationCategory: "SecurityApplication",
      featureList: [
        "ClamAV signature scanning",
        "YARA behavioral rule matching",
        "AI-assisted threat analysis",
        "Archive inspection with nested paths",
        "Files deleted after scan",
      ],
      howToName: "How to scan a file for viruses online",
      howToDescription:
        "Step-by-step guide to check any file for malware using the Arithmiks virus scanner.",
      howToTotalTime: "PT1M",
      howToSupplies: ["A file you want to scan"],
      howToTools: ["A web browser"],
    },
    faq: [
      {
        question: "Is this virus scanner free?",
        answer:
          "Yes. Every scan is free with no signup required. We run ClamAV signature scanning, YARA behavioral rules, and an AI analysis step on every upload.",
      },
      {
        question: "Is my file safe? What do you do with it?",
        answer:
          "Your file is scanned in memory and deleted immediately after the report is returned. We do not store your file, share it with third parties, or retain a copy for training or analysis.",
      },
      {
        question: "What file size and types are supported?",
        answer:
          "Any file type is accepted. Maximum upload size is 1 GB. Common targets include executables (.exe, .dll), scripts, Office documents, PDFs, and archives (.zip, .rar, .7z).",
      },
      {
        question: "How does the scanner detect threats?",
        answer:
          "We combine three detection layers: ClamAV checks known malware signatures, YARA rules match suspicious code patterns and behaviors, and an AI agent correlates findings to produce a final verdict with context.",
      },
      {
        question: "Can it scan inside archive files?",
        answer:
          "Yes. Nested archives (zip inside zip, etc.) are unpacked and scanned to configurable depth. Matches inside archives show the full path so you can identify the exact member that triggered a rule.",
      },
      {
        question: "Will this replace my antivirus?",
        answer:
          "No. This is an on-demand file scanner for one-off checks — useful before opening a download, running an attachment, or sharing a file. For continuous protection, keep a real-time antivirus installed.",
      },
      {
        question: "Why does my clean file take a few seconds?",
        answer:
          "Scans run three engines in sequence (signatures, heuristics, AI). Small files finish in under five seconds; larger archives can take up to a minute depending on depth and contents.",
      },
      {
        question: "What happens if the scanner is busy?",
        answer:
          "We cap concurrent scans to keep latency predictable. If the queue is full you will see a 'Scanner is busy' message — retry in a minute and your file will go through.",
      },
    ],
    howToSteps: [
      {
        name: "Upload your file",
        text: "Drag and drop a file onto the upload area, or click to pick one from your device. Files up to 1 GB are accepted.",
      },
      {
        name: "Wait for the scan to finish",
        text: "ClamAV, YARA, and the AI agent run in sequence. Most scans complete in under 30 seconds.",
      },
      {
        name: "Review the threat report",
        text: "See a clear verdict (clean, suspicious, or infected) plus a breakdown from each engine — signature hits, rule matches, and an AI summary.",
      },
    ],
  },
];

/** @param {string} slug */
export const toolPath = (slug) => `/tools/${slug}`;

/** @param {string} slug */
export const getToolBySlug = (slug) =>
  TOOL_ROUTES.find((t) => t.slug === slug) ?? null;
