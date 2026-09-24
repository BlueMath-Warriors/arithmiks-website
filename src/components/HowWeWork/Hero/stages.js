export const STAGES = [
  {
    number: "01",
    title: "Free consultation",
    when: "Day 1",
    body: "A 30-minute call with the engineer who would lead the work, not a salesperson. We ask what the product has to do, what data it will run on, and what \"done\" means to you — then tell you honestly whether it is worth building.",
  },
  {
    number: "02",
    title: "Scope & requirements",
    when: "Week 1",
    body: "We turn the conversation into a requirements document: what is in, what is out, and the assumptions the estimate rests on. Every ambiguity is written down as a question rather than guessed at.",
  },
  {
    number: "03",
    title: "Engagement model",
    when: "Week 1–2",
    body: "With scope on paper we agree how the work is shaped — a fixed-scope project, a monthly retainer, an audit first, or pay-as-you-go hours. The model follows the scope, never the other way round.",
  },
  {
    number: "04",
    title: "Plan & prototype",
    when: "Week 2–3",
    body: "Before code, a roadmap and a clickable prototype you can put in front of real users. For AI work this is where we prove feasibility against your actual data — a running proof of concept, not a slide about one.",
  },
  {
    number: "05",
    title: "Build & launch",
    when: "Week 3 onward",
    body: "Two-week cycles, each ending in working software on staging and a written report. Design, development and testing run together, and the handover material is written as we go — not after.",
  },
].map((stage, index) => ({ ...stage, art: `/how-we-work/step-${index + 1}.svg` }));
