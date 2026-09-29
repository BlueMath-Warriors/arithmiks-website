/**
 * Static source of truth for the Careers flow (/careers, /careers/jobs,
 * /careers/jobs/:slug). Swap this for a real API/ATS later — every consumer
 * (RolesGrid, JobsList, the job-detail template, gatsby-node's createPages
 * loop) reads only from `jobs`, `departmentOptions`, and `locationOptions`.
 */

const ABOUT_US =
  "Arithmiks is an AI-first software engineering studio in Lahore. We combine AI and custom software development to turn ideas into smart, scalable products, working across FinTech, SaaS, ConTech and e-commerce for clients worldwide.";

export const jobs = [
  {
    slug: "technical-project-manager",
    title: "Technical Project Manager",
    department: "Engineering",
    location: "Lahore",
    employmentType: "Full-time",
    summary: "Keep client engagements scoped, on schedule, and honestly reported.",
    datePosted: "2026-06-22",
    aboutUs: ABOUT_US,
    jobInfo: {
      industry: "IT Services",
      salary: "Market Competitive",
      workExperience: "4+ years",
      stateProvince: "Punjab",
      country: "Pakistan",
      zipCode: "54000",
    },
    description: {
      intro: [
        "Technical Project Manager — Arithmiks",
        "You will run client engagements end to end — turning a scoped brief into a fortnightly delivery rhythm the client can trust, without a sales layer softening what you report.",
      ],
      whatYouWillDo: [
        "Own the project plan for several concurrent client engagements — scope, milestones, risk, and the fortnightly demo cadence.",
        "Translate between the client's priorities and the engineering team's capacity, catching scope creep before it becomes a missed date.",
        "Write the status reports and change requests clients actually read, in plain language, with the trade-offs spelled out.",
        "Work directly with the senior engineer leading each build — you are the second person on the account, not a layer above it.",
      ],
    },
    requirements: {
      whatYouWillBring: [
        "4+ years managing software delivery, ideally client-facing in an agency or studio setting.",
        "Enough technical fluency to read a sprint board and a pull request list and know what they actually mean for the date.",
        "Clear written communication — you'll draft the reports and proposals clients see directly.",
        "Comfort saying a date has slipped before the client asks, not after.",
      ],
      niceToHave: [
        "Experience running AI or data-heavy engagements, where scope depends on what the data turns out to support.",
        "Familiarity with a modern project-tracking tool (Linear, Jira, or similar).",
      ],
    },
  },
  {
    slug: "senior-ai-full-stack-developer",
    title: "Senior AI Full Stack Developer",
    department: "AI & Data",
    location: "Lahore",
    employmentType: "Full-time",
    summary: "Ship AI features end to end — model, API, and the UI in front of it.",
    datePosted: "2026-06-18",
    aboutUs: ABOUT_US,
    jobInfo: {
      industry: "IT Services",
      salary: "Market Competitive",
      workExperience: "4+ years",
      stateProvince: "Punjab",
      country: "Pakistan",
      zipCode: "54000",
    },
    description: {
      intro: [
        "Senior AI Full Stack Developer — Arithmiks",
        "You will take an AI feature from a feasibility question on a client's data through to a shipped product — the model, the API around it, and the interface a real user touches.",
      ],
      whatYouWillDo: [
        "Validate whether a client's data supports the product they want, and build the pipeline or model that proves it.",
        "Build the full-stack product around that model — React on the front, Node or Python on the back, deployed on real cloud infrastructure.",
        "Write the evaluation, monitoring, and runbooks the client's own team will operate after handover.",
        "Work directly with clients from the first call, without an account layer between you and the decision.",
      ],
    },
    requirements: {
      whatYouWillBring: [
        "4+ years building production software, with real experience taking an ML or LLM feature from prototype to production.",
        "Strong React and Node or Python, and comfort owning a feature across the full stack, not just one layer of it.",
        "Hands-on experience with at least one major cloud provider.",
        "Judgement about where intelligence genuinely helps a product and where it's just noise.",
      ],
      niceToHave: [
        "MLOps experience: CI for models, versioned datasets, drift monitoring.",
        "Client-facing experience in a consulting or studio setting.",
      ],
    },
  },
  {
    slug: "technical-content-writer-and-social-media-manager",
    title: "Technical Content Writer and Social Media Manager",
    department: "Marketing",
    location: "Lahore",
    employmentType: "Full-time",
    summary: "Turn shipped engineering work into writing people actually read.",
    datePosted: "2026-06-15",
    aboutUs: ABOUT_US,
    jobInfo: {
      industry: "IT Services",
      salary: "Market Competitive",
      workExperience: "2+ years",
      stateProvince: "Punjab",
      country: "Pakistan",
      zipCode: "54000",
    },
    description: {
      intro: [
        "Technical Content Writer and Social Media Manager — Arithmiks",
        "You will turn what the engineering team actually ships — case studies, technical write-ups, product launches — into writing and social content people read past the first line.",
      ],
      whatYouWillDo: [
        "Interview engineers and clients to write case studies and blog posts grounded in real, specific work, not generic AI-agency copy.",
        "Plan and run Arithmiks' social presence — a consistent posting cadence, on-brand voice, across the platforms that matter for the studio.",
        "Turn technical concepts into copy a non-technical founder or exec can follow without losing what makes the work interesting.",
        "Keep a content calendar tied to what's actually shipping, so nothing goes out stale or disconnected from real delivery.",
      ],
    },
    requirements: {
      whatYouWillBring: [
        "2+ years writing technical or B2B content, with a portfolio that shows it.",
        "Comfort interviewing engineers and turning a technical conversation into a clear, specific piece of writing.",
        "Hands-on experience running a company's social accounts — planning, posting, and reading what's actually working.",
        "An editorial instinct for cutting jargon and hype in favour of what's true and specific.",
      ],
      niceToHave: [
        "Prior experience writing about AI, software engineering, or a technical product.",
        "Basic comfort with design or video tools for social assets (Figma, Canva, CapCut, or similar).",
      ],
    },
  },
];

/** Derived, not duplicated — feeds the "All teams"/"All locations" filters. */
export const departmentOptions = [...new Set(jobs.map((job) => job.department))];
export const locationOptions = [...new Set(jobs.map((job) => job.location))];

export const getJobBySlug = (slug) => jobs.find((job) => job.slug === slug);

/** "06/22/2026", matching the Job Detail design's "Posted on {date}" format. */
export const formatPostedDate = (isoDate) => {
  const [year, month, day] = isoDate.split("-");
  return `${month}/${day}/${year}`;
};

/**
 * The design itself is inconsistent about this: role tags/cards read
 * "Full-time" (hyphenated), but the Job Detail hero meta line and its Job
 * Information panel both read "Full time" (space). Reproduced faithfully —
 * `employmentType` stays hyphenated as the one stored value (matching the
 * tags, which appear far more often), this only reformats it for the two
 * spots that render it differently.
 */
export const formatEmploymentTypeForJobDetail = (employmentType) => employmentType.replace("-", " ");
