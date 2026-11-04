/**
 * The tools shown on /tools, live and upcoming. A tool goes live by giving it
 * the `slug` of its entry in TOOL_ROUTES, which owns the URL and SEO data.
 *
 * `mark` is the tool's line icon on a 48-unit grid: `rib` is drawn as a hollow
 * gradient ribbon and `sol` as a plain gradient stroke; either may be empty.
 */

export const TOOL_CATEGORIES = ["Security", "Developer", "SEO", "AI"];

export const TOOL_CATALOG = [
  {
    key: "antivirus",
    name: "Antivirus",
    category: "Security",
    description: "Scan files and links for malware in a second, before you open or share them.",
    slug: "virus-scanner",
    mark: {
      rib: "M24 5.5 38.5 11v11.5c0 9.5-6 16.5-14.5 20-8.5-3.5-14.5-10.5-14.5-20V11Z M18.8 23.2l3.6 3.6 6.8-7.2",
      sol: "",
    },
  },
  {
    key: "password",
    name: "Password Checker",
    category: "Security",
    description: "See how long a password would take to crack, and how to make it stronger.",
    slug: null,
    mark: {
      rib: "M15 17.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 1 1 0 -13Z M21.5 24H40.5 M35 24v6.5",
      sol: "",
    },
  },
  {
    key: "ssl",
    name: "SSL Certificate Checker",
    category: "Security",
    description: "Check a site’s certificate, expiry date and HTTPS setup at a glance.",
    slug: null,
    mark: {
      rib: "M16.5 21v-5a7.5 7.5 0 0 1 15 0v5 M14.5 21h19a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5h-19a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5Z",
      sol: "",
    },
  },
  {
    key: "json",
    name: "JSON Formatter",
    category: "Developer",
    description: "Format, validate and minify JSON, with errors pointed out line by line.",
    slug: null,
    mark: {
      rib: "M18.5 8c-4.5 0-5.5 2-5.5 5.5V19c0 2.5-1.3 4.4-4 5 2.7.6 4 2.5 4 5v5.5c0 3.5 1 5.5 5.5 5.5 M29.5 8c4.5 0 5.5 2 5.5 5.5V19c0 2.5 1.3 4.4 4 5-2.7.6-4 2.5-4 5v5.5c0 3.5-1 5.5-5.5 5.5",
      sol: "",
    },
  },
  {
    key: "regex",
    name: "Regex Tester",
    category: "Developer",
    description: "Build and test regular expressions against your own text, with live matches.",
    slug: null,
    mark: {
      rib: "M30 8.5v17 M22.6 12.8 37.4 21.2 M22.6 21.2 37.4 12.8",
      sol: "M13.5 32a4 4 0 1 1 0 8a4 4 0 1 1 0 -8Z",
    },
  },
  {
    key: "speed",
    name: "Website Speed Test",
    category: "SEO",
    description: "Measure how fast a page loads and what slows it down on mobile and desktop.",
    slug: null,
    mark: {
      rib: "M9 34A15.5 15.5 0 1 1 39 34 M24 32 29.3 25.3",
      sol: "",
    },
  },
  {
    key: "meta",
    name: "Meta Tag Preview",
    category: "SEO",
    description: "Preview how a page looks in Google results and social shares before you publish.",
    slug: null,
    mark: {
      rib: "M12.5 10H23l15 15-13 13L10.5 23.5V12a2 2 0 0 1 2-2Z",
      sol: "M19.6 17a2.6 2.6 0 1 1 0 5.2a2.6 2.6 0 1 1 0 -5.2Z",
    },
  },
  {
    key: "aicost",
    name: "AI Cost Calculator",
    category: "AI",
    description: "Estimate monthly AI spend from your expected usage and the model you choose.",
    slug: null,
    mark: {
      rib: "M24 9a15 15 0 1 1 0 30a15 15 0 1 1 0 -30Z",
      sol: "M24 16.5C24.9 23.1 24.9 23.1 31.5 24C24.9 24.9 24.9 24.9 24 31.5C23.1 24.9 23.1 24.9 16.5 24C23.1 23.1 23.1 23.1 24 16.5Z",
    },
  },
  {
    key: "aiready",
    name: "AI Readiness Check",
    category: "AI",
    description: "Answer a few questions to see where AI could save your team the most time.",
    slug: null,
    mark: {
      rib: "",
      sol: "M21 5.5C22.86 19.14 22.86 19.14 36.5 21C22.86 22.86 22.86 22.86 21 36.5C19.14 22.86 19.14 22.86 5.5 21C19.14 19.14 19.14 19.14 21 5.5Z M37.5 32C38.16 36.84 38.16 36.84 43 37.5C38.16 38.16 38.16 38.16 37.5 43C36.84 38.16 36.84 38.16 32 37.5C36.84 36.84 36.84 36.84 37.5 32Z",
    },
  },
];
