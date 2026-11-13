// Copy for /tools/virus-scanner, taken from the design source. The FAQ and
// the "How it works" steps live in TOOL_ROUTES, which also publishes them as
// structured data.

export const HERO = {
  eyebrow: "Free online virus scanner",
  title: ["Know a file is safe ", { grad: "before you open it" }],
  intro:
    "Three engines check every file for viruses, ransomware and hidden scripts, then give you one clear verdict in seconds.",
  badges: ["ClamAV + YARA + AI", "Files up to 1 GB", "Deleted after scan", "No signup"],
};

export const THREATS = {
  eyebrow: "What it catches",
  title: ["Threats that hide ", { grad: "in everyday files" }],
  items: [
    {
      name: "Viruses & trojans",
      note: "Known malware matched against millions of signatures.",
      icon: "M12 3.5 5 6.5v5c0 4.3 2.9 7.9 7 9 4.1-1.1 7-4.7 7-9v-5zM9.5 9.5l5 5M14.5 9.5l-5 5",
    },
    {
      name: "Ransomware",
      note: "Code that tries to encrypt or lock your files.",
      icon: "M7 11V8a5 5 0 0 1 10 0v3M5 11h14v9.5H5zM12 14.5v2.5",
    },
    {
      name: "Spyware",
      note: "Hidden trackers that watch keystrokes or steal data.",
      icon: "M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12ZM12 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2",
    },
    {
      name: "Macro & script attacks",
      note: "Malicious code tucked inside Office files and PDFs.",
      icon: "M14 3.5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-10zM14 3.5v5h5M9.5 13.5l-1.5 1.5 1.5 1.5M14.5 13.5l1.5 1.5-1.5 1.5",
    },
    {
      name: "Packed archives",
      note: "Threats buried inside ZIP, RAR and 7z files.",
      icon: "M4.5 7.5 12 3.5l7.5 4v9L12 20.5 4.5 16.5zM4.5 7.5 12 11.5l7.5-4M12 11.5v9",
    },
    {
      name: "Suspicious behavior",
      note: "New threats with no signature yet, caught by pattern.",
      icon: "M3.5 12h3l2.5-6 4 12 2.5-6h5",
    },
  ],
};

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  title: ["Three detection layers, ", { grad: "one clear verdict" }],
};

export const FAQ = {
  title: [{ grad: "Questions" }, { br: true }, "before you upload"],
  note: "Privacy, detection engines, file limits and more.",
};
