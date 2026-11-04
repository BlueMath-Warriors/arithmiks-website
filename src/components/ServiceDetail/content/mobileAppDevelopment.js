// Copy and data for /services/mobile-app-development, taken from the design source.
const mobileAppDevelopment = {
  hero: {
    eyebrow: "Mobile App Development",
    title: { lead: "Mobile apps people", accent: "keep opening" },
    intro: [
      "From consumer apps and marketplaces to the field tools your team uses on the move, we design and build iOS and Android apps with AI where it saves taps, fast, reliable and ready for the stores.",
    ],
    primaryCta: { label: "Describe your app", href: "#contact", glyph: "→" },
    secondaryCta: { label: "See our expertise", href: "#process", glyph: "↓" },
    art: "mobile-app",
    stackCtasOnMobile: true,
    introMaxWidth: "min(560px, 52vw)",
  },
  chapters: [
    { id: "challenges", label: "Why it matters" },
    { id: "fit", label: "What it is" },
    { id: "process", label: "Offers" },
    { id: "impact", label: "Outcomes" },
    { id: "stack", label: "Technologies" },
    { id: "faq", label: "FAQ" },
  ],
  sections: [
    {
      type: "challengesSplit",
      eyebrow: "Why it matters",
      title: [{ grad: "Users judge apps in seconds." }, { br: true }, "AI raises the bar."],
      stats: [
        {
          value: 77,
          label: "77%",
          claim: "of daily active users stop using an app within three days of installing it.",
          source: {
            name: "Andrew Chen",
            date: "App retention data",
            url: "https://andrewchen.com/new-data-shows-why-losing-80-of-your-mobile-users-is-normal-and-that-the-best-apps-do-much-better/",
          },
        },
        {
          value: 62,
          label: "62%",
          claim: "of people uninstall an app after it crashes, freezes or shows errors.",
          source: {
            name: "Dimensional Research",
            date: "User survey",
            url: "https://techbeacon.com/app-dev-testing/mobile-app-user-survey-failing-meet-user-expectations",
          },
        },
      ],
      close: {
        label: "THE AI SHIFT",
        figure: "88%",
        claim:
          "of organizations now use AI in at least one business function, so users expect apps that know them.",
        source: {
          name: "McKinsey",
          date: "State of AI, 2025",
          url: "https://www.mckinsey.com/featured-insights/charts/ai-at-work-but-not-at-scale",
        },
        lead: "Expectations keep rising.",
        paragraphs: [
          "People compare every app to the best one on their phone. If yours is slower, asks them to repeat themselves or crashes once, it gets replaced, often within the first week.",
          "AI has raised the bar again. Users now expect search that understands them, answers in seconds and features that learn their habits, without the app draining their battery.",
        ],
        conclusion: "So we build for speed first, then add AI where it saves taps.",
      },
    },
    {
      type: "fitAccordion",
      eyebrow: "What it is",
      title: [{ grad: "AI-powered apps" }, { br: true }, "built for iOS and Android"],
      intro:
        "We design, build and launch mobile apps with AI built in where it saves your users taps.",
      photo: {
        src: "/services/mobile/phones-960.webp",
        srcSet:
          "/services/mobile/phones-640.webp 640w, /services/mobile/phones-960.webp 960w, /services/mobile/phones-1280.webp 1280w",
        alt: "People using mobile apps on their phones",
      },
      initialOpen: 2,
      items: [
        {
          question: "Native, cross-platform, or both?",
          paragraphs: [
            "Swift and Kotlin give the best feel on each platform. React Native and Flutter ship both from one codebase.",
            "We pick in discovery, based on your features, budget and how fast you need to launch.",
          ],
        },
        {
          question: "Where does AI fit in a mobile app?",
          paragraphs: [
            "Smart search, assistants, photo and voice input, and recommendations that learn from each user, added only where they save real steps.",
          ],
        },
        {
          question: "Will people keep using it?",
          paragraphs: [
            "Most apps lose their users in days. We design onboarding and the first session around the one thing people came to do.",
          ],
          callout: {
            term: "Onboarding",
            text: "built around the one task people downloaded the app to do, so it lands in the first session.",
          },
        },
        {
          question: "Will it hold up after launch?",
          paragraphs: [
            "Crashes and slow screens get apps deleted, so we test on real devices and monitor every release once it’s live.",
          ],
          callout: {
            term: "Real devices",
            text: "every release tested on iOS and Android phones, then watched for crashes once it’s live.",
          },
        },
      ],
    },
    {
      type: "offers",
      eyebrow: "Offers",
      title: ["Our mobile app ", { grad: "offers" }],
      offers: [
        {
          n: "01",
          icon: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2ZM9 4v14M15 6v14",
          title: "Discovery & App Design",
          tag: "Plan the app, then tap through it",
          duration: "4 to 6 weeks",
          focusLabel: "We’ll cover",
          focus: [
            "Users and journeys",
            "AI opportunities",
            "Platform choice",
            "UX and UI design",
            "Tappable prototype",
          ],
          deliverables: [
            { title: "Prioritized backlog", note: "Every feature ranked, with the MVP marked." },
            { title: "Platform plan", note: "Native or cross-platform, and why." },
            { title: "Tappable prototype", note: "Key screens and flows, on your phone." },
          ],
        },
        {
          n: "02",
          icon: "M3 5h18v14H3zM3 9h18M9.5 12.5 8 14l1.5 1.5M14.5 12.5 16 14l-1.5 1.5",
          title: "Build the App",
          tag: "A test build on your phone every two weeks",
          duration: "10 to 14 weeks",
          focusLabel: "What gets built",
          focus: [
            "iOS and Android",
            "Backend and APIs",
            "AI features",
            "Push and offline",
            "Code reviews",
          ],
          deliverables: [
            { title: "Test builds", note: "TestFlight and Play builds every sprint." },
            { title: "Release notes", note: "What changed and why, every sprint." },
            { title: "Source code", note: "In your repository from day one." },
          ],
        },
        {
          n: "03",
          icon: "M4 4h6v6H4zM14 14h6v6h-6zM7 10v5a2 2 0 0 0 2 2h5",
          title: "Test & Store Launch",
          tag: "Tested on real devices, live in both stores",
          duration: "2 to 4 weeks",
          focusLabel: "What we check",
          focus: [
            "Device testing",
            "AI evals",
            "Speed and battery",
            "Security review",
            "Store review",
          ],
          deliverables: [
            { title: "Device test report", note: "What passed on which phones." },
            { title: "Store listings", note: "Screenshots, copy and privacy labels." },
            { title: "Release checklist", note: "Signed off before anything goes live." },
          ],
        },
        {
          n: "04",
          icon: "M3 17l6-6 4 4 8-8M15 7h6v6",
          title: "Grow & Evolve",
          tag: "Live, monitored and getting better",
          duration: "Ongoing",
          focusLabel: "This covers",
          focus: [
            "Crash monitoring",
            "OS updates",
            "Usage insights",
            "Model updates",
            "New features",
          ],
          deliverables: [
            { title: "Launch summary", note: "What shipped and how it’s performing." },
            { title: "Monitoring dashboards", note: "Crashes, ratings, speed and AI spend." },
            { title: "Improvement roadmap", note: "What to build next, and in what order." },
            { title: "Support plan", note: "Agreed response times for issues." },
          ],
        },
      ],
    },
    {
      type: "impact",
      eyebrow: "OUTCOMES",
      title: ["From an idea on paper to", { br: true }, { grad: "apps people keep using" }],
      outcomes: [
        "An app that feels fast on every phone",
        "AI features that save your users taps",
        "Answers and search grounded in your content",
        "Your systems connected through secure APIs",
        "A test build on your phone every two weeks",
        "A tested app live on the App Store and Google Play",
        "Code, data and models your business owns",
      ],
      ctaLines: ["See how quickly you can reach", "these outcomes"],
      ctaLabel: "Book a Free Consultation",
    },
    {
      type: "value",
      title: "Where could a mobile app help?",
      text: [
        "We look for where clunky apps and manual steps cost you users,",
        "and where a fast mobile app with AI built in pays back.",
      ],
      areas: [
        "Keep users coming back",
        "Let customers serve themselves",
        "Add AI help in the app",
        "Put your team’s work on mobile",
        "Own your code and data",
      ],
    },
    {
      type: "stack",
      eyebrow: "Technologies",
      title: ["Tools and technologies", { br: true }, { grad: "we build mobile apps with" }],
      groups: [
        {
          label: "Mobile",
          items: [
            { name: "Swift", logo: "swift" },
            { name: "Kotlin", logo: "kotlin" },
            { name: "Jetpack Compose", logo: "jetpackcompose" },
            { name: "React Native", logo: "react" },
            { name: "Flutter", logo: "flutter" },
            { name: "Expo", logo: "expo" },
          ],
        },
        {
          label: "Backend and APIs",
          items: [
            { name: "Node.js", logo: "nodedotjs" },
            { name: "Python", logo: "python" },
            { name: "FastAPI", logo: "fastapi" },
            { name: "GraphQL", logo: "graphql" },
            { name: "Firebase", logo: "firebase" },
            { name: "Supabase", logo: "supabase" },
          ],
        },
        {
          label: "AI and data",
          items: [
            { name: "OpenAI", logo: "openai-dark" },
            { name: "Claude", logo: "claude" },
            { name: "Gemini", logo: "gemini-google" },
            { name: "PostgreSQL", logo: "postgresql" },
            { name: "MongoDB", logo: "mongodb" },
            { name: "Redis", logo: "redis" },
          ],
        },
        {
          label: "Cloud and release",
          items: [
            { name: "AWS", logo: "amazonwebservices" },
            { name: "Google Cloud", logo: "googlecloud" },
            { name: "Docker", logo: "docker" },
            { name: "Fastlane", logo: "fastlane" },
            { name: "GitHub Actions", logo: "githubactions" },
            { name: "Sentry", logo: "sentry" },
          ],
        },
        {
          label: "Design and stores",
          items: [
            { name: "Figma", logo: "figma" },
            { name: "Xcode", logo: "xcode" },
            { name: "Android Studio", logo: "androidstudio" },
            { name: "Stripe", logo: "stripe" },
            { name: "App Store", logo: "appstore" },
            { name: "Google Play", logo: "googleplay" },
          ],
        },
      ],
    },
    {
      type: "faq",
      eyebrow: "FAQs",
      title: [{ grad: "Questions we hear" }, { br: true }, "before we start"],
      note: "Something we haven't covered? Ask us on the call.",
      items: [
        {
          question: "How long does a mobile app take to build?",
          answer: [
            "Most apps reach the stores in 4 to 6 months: discovery and design first, then ",
            { text: "two-week sprints", href: "#fit" },
            ", then device testing and store launch. You get a ",
            { text: "firm timeline", href: "#fit" },
            " at the end of discovery.",
          ],
        },
        {
          question: "Native or cross-platform?",
          answer: [
            "Native suits apps that lean on the camera, sensors or heavy animation. React Native or Flutter suits most others and ships iOS and Android together. We recommend one in discovery.",
          ],
        },
        {
          question: "Do you add AI to every app?",
          answer: [
            "No. We add AI where it removes real work, like search, assistants or photo input. If a feature works better without AI, we’ll tell you in discovery.",
          ],
        },
        {
          question: "How much will it cost?",
          answer: [
            "It depends on platforms, features, integrations and AI usage. Discovery ends with a ",
            { text: "roadmap and estimate in writing", href: "#fit" },
            ", so you know the cost before development starts.",
          ],
        },
        {
          question: "Will our data be used to train AI models?",
          answer: [
            "No. We use providers and settings that keep your data out of model training, and AI features answer from your own content.",
          ],
        },
        {
          question: "What happens after launch?",
          answer: [
            "Ongoing support: crash fixes, OS and ",
            { text: "security updates", href: "#process" },
            ", speed and AI cost monitoring, and new features planned from how people use the app.",
          ],
        },
      ],
    },
  ],
};

export default mobileAppDevelopment;
