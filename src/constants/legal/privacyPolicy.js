import { p, note, list, numberSections } from "./blocks";

export const PRIVACY_POLICY = {
  label: "Privacy policy",
  titleLead: "Privacy",
  titleAccent: "Policy",
  intro:
    "This policy explains what information Arithmiks collects, why we collect it, how we use and protect it, and the choices you have. It applies to arithmiks.com and to the services we provide to our clients.",
  lastUpdated: "1 September 2026",
  sections: numberSections([
    {
      id: "scope",
      title: "Who this policy covers",
      blocks: [
        p("Arithmiks is a software engineering and AI studio based in Lahore, Pakistan. This policy covers the information we handle when you visit arithmiks.com, contact us, apply for a role, or work with us as a client."),
        p("It does not cover the data inside systems we build and operate on a client’s behalf. In those engagements the client is the data controller and their own privacy policy applies; we act as a processor under a written agreement."),
      ],
    },
    {
      id: "collect",
      title: "Information we collect",
      blocks: [
        p("We only collect what we need for a specific purpose, and we tell you what that purpose is at the point of collection."),
        list(
          ["Information you give us.", "Your name, work email, phone number, company, the service you are interested in, and anything you write in a message, booking, or job application, including a CV or portfolio link."],
          ["Information from your device.", "IP address, browser and device type, operating system, referring page, and the pages you view on our site."],
          ["Cookies and similar technologies.", "Small files used to keep the site working and to understand, in aggregate, how it is used."],
          ["Information from third parties.", "Details you choose to share through platforms we work on, such as Upwork, LinkedIn, or a calendar invitation."]
        ),
        note("We do not ask for special category data — such as health, biometric, or political information — and we ask that you do not send it to us."),
      ],
    },
    {
      id: "use",
      title: "How we use your information",
      blocks: [
        p("We use the information described above to:"),
        list(
          "respond to enquiries, schedule consultations, and prepare proposals",
          "deliver, support, and improve the services you have engaged us for",
          "review job applications and communicate with candidates",
          "send service updates and, where you have opted in, occasional insights about our work",
          "keep our site secure, prevent abuse, and diagnose technical problems",
          "meet our legal, tax, and contractual obligations"
        ),
        p("We do not sell your personal information, and we do not use it to train AI models."),
      ],
    },
    {
      id: "basis",
      title: "Legal basis for processing",
      blocks: [
        p("Where the GDPR or a similar law applies, we rely on one of the following bases:"),
        list(
          ["Contract.", "To provide a service you have asked for or to take steps toward an agreement."],
          ["Legitimate interests.", "To operate and secure our site, understand how it is used, and reach out about work relevant to your enquiry."],
          ["Consent.", "For marketing email and non-essential cookies. You may withdraw consent at any time."],
          ["Legal obligation.", "To keep records we are required by law to retain."]
        ),
      ],
    },
    {
      id: "cookies",
      title: "Cookies and analytics",
      blocks: [
        p("Essential cookies keep the site functioning and cannot be switched off. Analytics cookies help us see which pages are useful and where people get stuck; they are set only with your consent and the reports we see are aggregated."),
        p("You can clear or block cookies in your browser settings. Blocking essential cookies may break parts of the site, such as the consultation booking form."),
      ],
    },
    {
      id: "sharing",
      title: "When we share information",
      blocks: [
        p("We share personal information only where it is necessary, and only with parties bound to protect it:"),
        list(
          ["Service providers.", "Hosting, email, analytics, scheduling, and payment providers who process data on our instructions."],
          ["Professional advisers.", "Accountants and lawyers, where required for advice or compliance."],
          ["Legal and safety.", "Authorities, where we are required to comply with the law or to protect our rights, users, or systems."],
          ["Business transfers.", "A successor entity, if Arithmiks is involved in a merger, acquisition, or sale of assets. We will notify you before your information becomes subject to a different policy."]
        ),
      ],
    },
    {
      id: "transfers",
      title: "International transfers",
      blocks: [
        p("We operate from Pakistan and work with clients and providers in other countries, so your information may be processed outside the country where you live. When we transfer personal data internationally we use appropriate safeguards, such as standard contractual clauses, and we require our providers to maintain an equivalent level of protection."),
      ],
    },
    {
      id: "retention",
      title: "How long we keep it",
      blocks: [
        p("We keep personal information only as long as we need it for the purpose it was collected, then delete or anonymise it."),
        list(
          ["Enquiries and consultations.", "Up to 24 months from our last exchange, unless we begin an engagement."],
          ["Client records.", "For the term of the engagement and up to 7 years afterwards, where tax and contract law require it."],
          ["Job applications.", "Up to 12 months, so we can consider you for future openings. Tell us if you would rather we delete them sooner."],
          ["Site analytics.", "Up to 14 months in aggregated form."]
        ),
      ],
    },
    {
      id: "security",
      title: "How we protect it",
      blocks: [
        p("We apply the same engineering discipline to our own systems that we apply to client work: encryption in transit, access limited to the people who need it, multi-factor authentication on our accounts, logging and review of administrative access, and periodic dependency and configuration audits."),
        note("No system is completely secure. If a breach affects your personal data, we will notify you and the relevant authority without undue delay, as the law requires."),
      ],
    },
    {
      id: "rights",
      title: "Your rights and choices",
      blocks: [
        p("Depending on where you live, you may have the right to:"),
        list(
          "access the personal information we hold about you",
          "correct information that is inaccurate or incomplete",
          "ask us to delete information we no longer need",
          "object to or restrict certain processing, including direct marketing",
          "receive a copy of the information you gave us in a portable format",
          "withdraw consent at any time, without affecting processing already carried out"
        ),
        p("To exercise any of these rights, email privacy@arithmiks.com. We will respond within 30 days and may ask for information to verify your identity. Every marketing email also carries an unsubscribe link."),
      ],
    },
    {
      id: "children",
      title: "Children",
      blocks: [
        p("Our site and services are intended for businesses and professionals. We do not knowingly collect personal information from anyone under 16. If you believe a child has provided us information, contact us and we will delete it."),
      ],
    },
    {
      id: "links",
      title: "Third-party links",
      blocks: [
        p("Our site links to external sites, including client case studies, our products, and our profiles on hiring and freelance platforms. Those sites have their own privacy practices, and this policy does not apply to them. We recommend reading their policies before sharing information."),
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        p("We update this policy when our practices, services, or legal obligations change. The date at the top always reflects the current version. For material changes we will post a notice on this page and, where appropriate, email you before the change takes effect."),
      ],
    },
  ]),
  contact: {
    heading: "Questions about this policy?",
    text: "Write to us and we will respond within two business days. For requests about your personal data, please include the email address you used with us so we can verify the request.",
    email: "privacy@arithmiks.com",
  },
};
