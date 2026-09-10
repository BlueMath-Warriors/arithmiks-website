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
    slug: "senior-ai-engineer",
    title: "Senior AI Engineer",
    department: "AI & Data",
    location: "Lahore",
    employmentType: "Full-time",
    summary: "Own feasibility work and production ML on client data.",
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
        "Senior AI Engineer — Arithmiks",
        "You will own feasibility work and production machine learning on client data, from the readiness audit through to the running pipeline.",
      ],
      whatYouWillDo: [
        "Validate whether a client's data can support the product they want, and say so before a budget is committed.",
        "Build and ship production ML systems — data pipelines, models, evaluation and monitoring.",
        "Write the runbooks and documentation the client's team will run the system with after handover.",
        "Work directly with clients from the first call, without an account layer in between.",
      ],
    },
    requirements: {
      whatYouWillBring: [
        "4+ years building software, with at least 2 on applied machine learning.",
        "Strong Python, and hands-on experience taking a model from notebook to production.",
        "Comfort with data engineering — pipelines, warehousing and quality checks.",
        "Judgement about where intelligence helps and where it adds noise. Nice to have",
      ],
      niceToHave: [
        "MLOps experience: CI for models, versioned datasets, drift monitoring.",
        "Client-facing experience in a consulting or studio setting.",
      ],
    },
  },
  {
    slug: "senior-full-stack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Lahore",
    employmentType: "Full-time",
    summary: "Ship product end to end — React, Node, cloud infrastructure.",
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
        "Senior Full-Stack Engineer — Arithmiks",
        "You will ship client products end to end — React on the front, Node on the back, and the cloud infrastructure both run on.",
      ],
      whatYouWillDo: [
        "Design and build features across the stack, from database schema to the screen a client's users click through.",
        "Stand up and maintain the cloud infrastructure a product needs — CI/CD, environments, and monitoring.",
        "Pair with design and product to turn a rough brief into a shipped, maintainable feature.",
        "Review code and raise the bar on the team's engineering practices as the codebase grows.",
      ],
    },
    requirements: {
      whatYouWillBring: [
        "4+ years shipping production web applications end to end.",
        "Strong React and Node.js, with real experience on at least one major cloud provider.",
        "Comfort owning a feature from design handoff through to production deploy.",
        "Clear written communication — you'll work directly with clients, not through an account layer.",
      ],
      niceToHave: [
        "Experience with infrastructure-as-code (Terraform, Pulumi, or similar).",
        "Client-facing experience in a consulting or studio setting.",
      ],
    },
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    department: "AI & Data",
    location: "Lahore",
    employmentType: "Full-time",
    summary: "Build the pipelines every model and dashboard depends on.",
    datePosted: "2026-06-15",
    aboutUs: ABOUT_US,
    jobInfo: {
      industry: "IT Services",
      salary: "Market Competitive",
      workExperience: "3+ years",
      stateProvince: "Punjab",
      country: "Pakistan",
      zipCode: "54000",
    },
    description: {
      intro: [
        "Data Engineer — Arithmiks",
        "You will build and run the data pipelines every model, dashboard, and downstream product at Arithmiks depends on.",
      ],
      whatYouWillDo: [
        "Design ingestion and transformation pipelines that hold up under real client data volumes.",
        "Own data quality — validation, monitoring, and alerting so bad data gets caught before it reaches a model or a dashboard.",
        "Work with AI engineers to get raw client data into a shape their models can actually use.",
        "Document schemas and pipeline behavior so the client's team can maintain it after handover.",
      ],
    },
    requirements: {
      whatYouWillBring: [
        "3+ years building production data pipelines.",
        "Strong SQL and Python, and hands-on experience with a modern orchestration tool (Airflow, Dagster, or similar).",
        "Comfort with cloud data warehousing (BigQuery, Snowflake, Redshift, or similar).",
        "An instinct for where a pipeline will break before it does.",
      ],
      niceToHave: [
        "Experience supporting ML feature pipelines, not just BI/reporting ones.",
        "Client-facing experience in a consulting or studio setting.",
      ],
    },
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    department: "Design",
    location: "Lahore",
    employmentType: "Full-time",
    summary: "Prototype in week two and stay with it through launch.",
    datePosted: "2026-06-10",
    aboutUs: ABOUT_US,
    jobInfo: {
      industry: "IT Services",
      salary: "Market Competitive",
      workExperience: "3+ years",
      stateProvince: "Punjab",
      country: "Pakistan",
      zipCode: "54000",
    },
    description: {
      intro: [
        "Product Designer — Arithmiks",
        "You will be prototyping a client's product by week two, and stay with it through to launch rather than handing off a static spec.",
      ],
      whatYouWillDo: [
        "Turn an early, ambiguous brief into a clickable prototype fast enough to validate it before real budget is spent.",
        "Design the interfaces engineers build against, and stay involved as trade-offs come up during implementation.",
        "Run lightweight user research to check a design decision against how people actually use the product.",
        "Keep a consistent design system across a client's product as it grows past the first release.",
      ],
    },
    requirements: {
      whatYouWillBring: [
        "3+ years designing production software products, not just marketing sites.",
        "A portfolio that shows prototypes evolving into shipped product, not just polished mockups.",
        "Fluency in Figma and comfort working closely with engineers during implementation.",
        "Judgement about when to research and when to just ship and learn.",
      ],
      niceToHave: [
        "Experience designing for AI-driven or data-heavy products.",
        "Client-facing experience in a consulting or studio setting.",
      ],
    },
  },
  {
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer",
    department: "Engineering",
    location: "Remote",
    employmentType: "Full-time",
    summary: "Own the test suite that keeps fortnightly releases safe.",
    datePosted: "2026-06-05",
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
        "QA Automation Engineer — Arithmiks",
        "You will own the automated test suite that keeps our fortnightly release cadence safe across client products.",
      ],
      whatYouWillDo: [
        "Build and maintain automated test coverage — unit, integration, and end-to-end — across multiple client codebases.",
        "Investigate flaky or failing tests down to the root cause instead of just re-running them.",
        "Work with engineers to make new features testable from the start, not bolted on after the fact.",
        "Keep the release checklist and regression suite current as products change.",
      ],
    },
    requirements: {
      whatYouWillBring: [
        "2+ years writing and maintaining automated test suites for production software.",
        "Hands-on experience with a modern test framework (Playwright, Cypress, or similar).",
        "Comfort reading application code well enough to know what a failing test actually means.",
        "A bias toward finding the bug before a client does.",
      ],
      niceToHave: [
        "Experience setting up CI pipelines that gate deploys on test results.",
        "Exposure to performance or load testing.",
      ],
    },
  },
  {
    slug: "engineering-intern",
    title: "Engineering Intern",
    department: "Engineering",
    location: "Lahore",
    employmentType: "Internship",
    summary: "Six months on a real product with a senior engineer beside you.",
    datePosted: "2026-06-01",
    aboutUs: ABOUT_US,
    jobInfo: {
      industry: "IT Services",
      salary: "Paid internship",
      workExperience: "0–1 years",
      stateProvince: "Punjab",
      country: "Pakistan",
      zipCode: "54000",
    },
    description: {
      intro: [
        "Engineering Intern — Arithmiks",
        "Six months working on a real client product, paired with a senior engineer rather than on a side project.",
      ],
      whatYouWillDo: [
        "Ship real, reviewed changes to a live client codebase from your first weeks.",
        "Pair regularly with a senior engineer who owns the same product.",
        "Learn the full lifecycle of a feature — from a client brief to a monitored production deploy.",
        "Present your work at the team's regular demo sessions.",
      ],
    },
    requirements: {
      whatYouWillBring: [
        "Solid fundamentals in at least one programming language, from coursework or personal projects.",
        "Comfort with Git and a willingness to have your code reviewed line by line.",
        "Curiosity about how production software actually gets built and shipped.",
        "Availability for a six-month, in-office internship in Lahore.",
      ],
      niceToHave: [
        "Any exposure to React, Node.js, or Python.",
        "A GitHub profile or personal project you can talk through.",
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
