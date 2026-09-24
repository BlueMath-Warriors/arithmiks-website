import { p, note, list, numberSections, LEGAL_EMAIL } from "./blocks";

export const AI_USAGE_POLICY = {
  label: "AI usage policy",
  titleLead: "AI Usage",
  titleAccent: "Policy",
  intro:
    "We build AI products and use AI tools in our own work. This policy explains where we use it, how we protect your data when we do, who stays accountable for the result, and the uses we will not take on.",
  lastUpdated: "24 September 2026",
  sections: numberSections([
    {
      id: "scope",
      title: "What this policy covers",
      blocks: [
        p("This policy applies to AI used by Arithmiks — in our internal work, in the delivery of client engagements, and in the AI features we design and build into client products."),
        p("It sits alongside our Privacy Policy, which covers how we handle personal information generally, and each client agreement, which sets the specific rules for an engagement. Where a client agreement is stricter, it applies."),
      ],
    },
    {
      id: "principles",
      title: "Our principles",
      blocks: [
        list(
          ["Honest about feasibility.", "We tell you whether AI is the right tool before recommending it — and when a simpler approach would serve you better."],
          ["People stay accountable.", "A named engineer reviews and is responsible for every output that reaches you or your users."],
          ["Your data stays yours.", "It is never used to train models for anyone else, and never leaves the boundaries you have agreed to."],
          ["Nothing is a black box.", "You can inspect the prompts, data, evaluations, and decisions behind anything we build."]
        ),
      ],
    },
    {
      id: "internal",
      title: "How we use AI in our own work",
      blocks: [
        p("Our engineers use AI tools where they make the work faster or better, for example:"),
        list(
          "drafting and reviewing code, tests, and documentation",
          "summarising research, specifications, and meeting notes",
          "exploring design and architecture options",
          "analysing logs and helping to diagnose defects"
        ),
        p("AI output is treated as a draft. It goes through the same code review, testing, and security checks as anything written by hand before it is merged or delivered."),
      ],
    },
    {
      id: "client-products",
      title: "AI in the products we build",
      blocks: [
        p("When an engagement includes AI features — such as agents, chatbots, search, classification, or data extraction — we:"),
        list(
          "start with a readiness assessment of the data and a clear definition of what “good” looks like",
          "prove feasibility against your real data with a working proof of concept before a full build",
          "build evaluation sets and measure quality, cost, and latency before and after launch",
          "add guardrails, fallbacks, and human hand-off for cases the system should not handle alone",
          "document how the system works, its known limitations, and how to monitor it"
        ),
      ],
    },
    {
      id: "data",
      title: "Your data and AI tools",
      blocks: [
        list(
          ["No training on your data.", "We do not use client data, or personal information, to train or fine-tune models for anyone other than you — and only for you with your written agreement."],
          ["Approved tools only.", "Confidential client material is only processed with AI services the client has approved, under business terms that exclude training on inputs and limit data retention."],
          ["No public consumer tools.", "We do not paste confidential code, data, or documents into free consumer AI tools."],
          ["Minimum necessary.", "We send a model only the data it needs, and remove or mask personal details where the task allows."]
        ),
        note("If you need data to stay within a particular region, cloud account, or on-premise environment, tell us at the start — we will design around it, including with self-hosted models where appropriate."),
      ],
    },
    {
      id: "providers",
      title: "Models and providers",
      blocks: [
        p("We choose models and providers per project based on quality, cost, data-handling terms, and where data is processed, and we agree the choice with you. Production systems run in your accounts wherever possible, so you hold the provider relationship and the keys."),
        p("Providers process data under their own terms, which we review before recommending them. We will tell you if a provider we rely on changes its terms in a way that affects your data."),
      ],
    },
    {
      id: "review",
      title: "Human review and accountability",
      blocks: [
        p("AI assists our team; it does not replace their judgment. A senior engineer owns every deliverable, and a person — not a model — makes decisions about architecture, security, and anything that affects your users."),
        p("For client systems that make or support decisions about people, such as eligibility, pricing, or content moderation, we design in human oversight and a way for affected people to ask for review."),
      ],
    },
    {
      id: "ownership",
      title: "Ownership of AI-assisted work",
      blocks: [
        p("Work we deliver belongs to you on the terms of your client agreement, whether or not AI tools helped produce it. Prompts, evaluation sets, fine-tuned weights, and pipelines built for your project are part of that deliverable and live in your repositories."),
      ],
    },
    {
      id: "limits",
      title: "Accuracy, bias and limitations",
      blocks: [
        p("AI systems can be wrong, confidently. They can reflect bias in their training data, and their behaviour can change when a provider updates a model. We reduce these risks through evaluation, testing across varied inputs, monitoring after launch, and clear documentation of what a system should and should not be trusted with."),
        note("No AI system is error-free. Outputs that matter — legal, financial, medical, or safety-related — should always be checked by a qualified person."),
      ],
    },
    {
      id: "transparency",
      title: "Transparency and disclosure",
      blocks: [
        p("If any part of our site uses AI to interact with you, it will say so. In the products we build, we recommend — and by default design — clear labelling of AI-generated content and of conversations with an AI system, so end users always know when they are not talking to a person."),
      ],
    },
    {
      id: "declined",
      title: "Uses we decline",
      blocks: [
        p("We will not design or build AI systems intended to:"),
        list(
          "deceive people, including impersonating real individuals or producing undisclosed deepfakes",
          "carry out covert surveillance or unlawful profiling",
          "discriminate unlawfully against individuals or groups",
          "manipulate vulnerable people or target children with harmful content",
          "generate or spread malware, or enable fraud, harassment, or other illegal activity"
        ),
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        p("AI tools and the rules around them are changing quickly, and we will update this policy as they do. The date at the top always shows the current version, and we will tell active clients about any change that affects their engagement."),
      ],
    },
  ]),
  contact: {
    heading: "Questions about how we use AI?",
    text: "Write to us and we will respond within two business days. If you are a client, we are happy to walk through exactly which tools and providers touch your project.",
    email: LEGAL_EMAIL,
  },
};
