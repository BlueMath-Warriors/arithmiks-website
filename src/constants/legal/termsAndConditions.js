import { p, note, list, numberSections, LEGAL_EMAIL } from "./blocks";

export const TERMS_AND_CONDITIONS = {
  label: "Terms and conditions",
  titleLead: "Terms &",
  titleAccent: "Conditions",
  intro:
    "These terms set out the rules for using arithmiks.com and the basis on which we discuss, scope, and quote for work. Engagements themselves are governed by the written agreement we sign with each client.",
  lastUpdated: "24 September 2026",
  sections: numberSections([
    {
      id: "about",
      title: "About these terms",
      blocks: [
        p("Arithmiks is a software engineering and AI studio based in Lahore, Pakistan. In these terms, “we”, “us” and “our” mean Arithmiks, and “you” means anyone who visits our site or contacts us."),
        p("By using arithmiks.com you agree to these terms. If you do not agree, please do not use the site. Our Privacy Policy, Copyright Notice and AI Usage Policy also apply and form part of these terms."),
      ],
    },
    {
      id: "agreements",
      title: "Our services and client agreements",
      blocks: [
        p("We build custom software, AI products, and the infrastructure behind them, under one of four engagement models: an AI readiness audit, a fixed-scope project, a monthly retainer, or pay-as-you-go hours."),
        p("Every paid engagement is covered by a signed agreement — a proposal, statement of work, or services contract. That agreement sets the scope, fees, schedule, ownership, and warranties for the work."),
        note("Where a signed agreement and these terms disagree, the signed agreement takes priority for that engagement."),
      ],
    },
    {
      id: "use",
      title: "Using this site",
      blocks: [
        p("You may browse, read, and share links to our site for any lawful purpose. When you use it, you agree not to:"),
        list(
          "break or try to break any law, or help anyone else do so",
          "probe, scan, or test the vulnerability of the site, or bypass any security or access control",
          "overload the site or interfere with its operation, including through automated scraping at a rate that affects performance",
          "introduce malware or any other harmful code",
          "submit false information, impersonate anyone, or use our forms to send spam",
          "copy or reuse our content beyond what our Copyright Notice allows"
        ),
        p("We may restrict or block access to anyone who breaks these rules."),
      ],
    },
    {
      id: "consultations",
      title: "Consultations, proposals and quotes",
      blocks: [
        p("The free consultation is a conversation, not a contract. Anything we say on the call — including our view on feasibility, timelines, or budget — is our honest assessment on the information available, not a guarantee."),
        list(
          ["Proposals and estimates.", "Are valid for 30 days unless they state otherwise, and are based on the assumptions written into them."],
          ["No obligation.", "Neither side is committed to any work, fee, or date until a written agreement is signed by both."],
          ["Changes to scope.", "Are written up with their effect on cost and schedule and agreed before any work on them begins."]
        ),
      ],
    },
    {
      id: "ip",
      title: "Intellectual property",
      blocks: [
        p("The content of this site — text, design, graphics, illustrations, and code — belongs to Arithmiks or its licensors and is protected by copyright and trademark law. Our Copyright Notice explains what you may reuse."),
        p("Ownership of the software, models, and documentation we produce for clients is set by each client agreement. Our standard position is that the client owns everything we deliver once it has been paid for, and that it lives in the client’s own repositories and accounts."),
      ],
    },
    {
      id: "submissions",
      title: "What you send us",
      blocks: [
        p("When you send us a brief, attachment, or message, you confirm that you have the right to share it. We use it only to understand your request, prepare a response, and deliver any work you engage us for, as described in our Privacy Policy."),
        p("We treat project details you share before an engagement as confidential and will sign a mutual non-disclosure agreement on request."),
      ],
    },
    {
      id: "third-party",
      title: "Third-party links and services",
      blocks: [
        p("Our site links to external sites, such as client products, our profiles on Upwork and LinkedIn, and scheduling tools. We do not control those sites and are not responsible for their content, availability, or practices. Visiting them is at your own discretion and under their own terms."),
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimers",
      blocks: [
        p("We work to keep this site accurate and available, but it is provided “as is” and “as available”. To the extent the law allows, we make no warranty that it will be uninterrupted, error-free, or free of harmful components."),
        p("Articles, case studies, and insights on the site are general information. They are not professional, legal, or financial advice for your situation, and results described for one client are not a promise of the same result for another."),
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      blocks: [
        p("To the extent the law allows, Arithmiks is not liable for any indirect, incidental, special, or consequential loss, or for any loss of profit, revenue, data, or goodwill, arising from your use of this site."),
        p("Our liability to clients for paid work is set out in the relevant client agreement."),
        note("Nothing in these terms limits liability that cannot be limited by law, including liability for fraud or for death or personal injury caused by negligence."),
      ],
    },
    {
      id: "indemnity",
      title: "Indemnity",
      blocks: [
        p("If you use the site in breach of these terms or the law, you agree to cover the reasonable losses and costs we incur as a result, including reasonable legal fees."),
      ],
    },
    {
      id: "law",
      title: "Governing law and disputes",
      blocks: [
        p("These terms are governed by the laws of Pakistan. The courts of Lahore have exclusive jurisdiction over any dispute arising from them or from your use of the site."),
        p("If something goes wrong, please write to us first. Most issues are resolved quickly by talking, and we will always try that before anything more formal."),
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      blocks: [
        p("We may update these terms as our services or legal obligations change. The date at the top shows the current version, and changes apply from that date. Continuing to use the site after an update means you accept the revised terms."),
        p("If any part of these terms is found to be unenforceable, the rest remains in effect."),
      ],
    },
  ]),
  contact: {
    heading: "Questions about these terms?",
    text: "Write to us and we will respond within two business days. If your question concerns an active engagement, please mention the project name so we can route it to the right lead.",
    email: LEGAL_EMAIL,
  },
};
