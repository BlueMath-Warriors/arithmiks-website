/**
 * Canonical /tools/<slug> URLs — single source for nav, pages, SEO, and JSON-LD.
 * Each tool page (virus scanner, future tools) pulls metadata from here.
 */

export const TOOL_ROUTES = [
  {
    slug: "virus-scanner",
    status: "live",
    label: "Virus Scanner",
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
    // Shown on the page and published as FAQPage / HowTo structured data, so
    // the two always match.
    faq: [
      {
        question: "Is this virus scanner free?",
        // The design copy promised unlimited scans; the API enforces an hourly limit (HTTP 429).
        answer: "Yes. It’s free to use, with no signup.",
      },
      {
        question: "Is my file safe? What do you do with it?",
        answer:
          "Your file is scanned in memory and deleted as soon as your report is ready. We never store it, share it with third parties or use it to train AI models.",
      },
      {
        question: "What file size and types are supported?",
        answer:
          "Any file type, up to 1 GB. That includes documents, installers, archives, images and scripts.",
      },
      {
        question: "How does the scanner detect threats?",
        answer:
          "Three layers work together. ClamAV checks known malware signatures, YARA rules match suspicious code patterns, and an AI analyst weighs the findings into a final verdict.",
      },
      {
        question: "Can it scan inside archive files?",
        answer:
          "Yes. ZIP, RAR, 7z and other common archives are unpacked and every file inside is scanned. Password-protected archives can’t be opened.",
      },
      {
        question: "Will this replace my antivirus?",
        answer:
          "No. It gives a second opinion on a single file. Keep a real-time antivirus on your device for ongoing protection.",
      },
      {
        question: "Why does a clean file take a few seconds?",
        answer:
          "Every file goes through all three engines, even when the first finds nothing. That’s what makes a Clean verdict worth trusting.",
      },
      {
        question: "What happens if the scanner is busy?",
        // The design copy described a queue; the API rejects scans when full (HTTP 503).
        answer:
          "When too many scans are running at once you’ll see a “Scanner is busy” message. Wait a minute and try again.",
      },
    ],
    howToSteps: [
      {
        name: "Upload your file",
        text: "Drag and drop a file onto the scanner, or click to choose one from your device. Files up to 1 GB are accepted.",
      },
      {
        name: "Wait for the scan to finish",
        text: "ClamAV, YARA and the AI analyst run in sequence. Most scans finish in under 30 seconds.",
      },
      {
        name: "Review the threat report",
        text: "See a clear verdict, clean, suspicious or infected, plus what each engine found and an AI summary.",
      },
    ],
  },
];

/** @param {string} slug */
export const toolPath = (slug) => `/tools/${slug}`;

/** @param {string} slug */
export const getToolBySlug = (slug) =>
  TOOL_ROUTES.find((t) => t.slug === slug) ?? null;
