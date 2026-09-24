import { p, note, list, numberSections, LEGAL_EMAIL } from "./blocks";

export const COPYRIGHT_NOTICE = {
  label: "Copyright notice",
  titleLead: "Copyright",
  titleAccent: "Notice",
  intro:
    "This notice explains who owns the material on arithmiks.com, what you are welcome to reuse, how client work appears on the site, and how to tell us if you believe something here infringes your rights.",
  lastUpdated: "24 September 2026",
  sections: numberSections([
    {
      id: "ownership",
      title: "Ownership of site content",
      blocks: [
        p("Unless stated otherwise, the text, design, layout, graphics, illustrations, photographs, and code on arithmiks.com are © Arithmiks. All rights are reserved."),
        p("Some material — such as client logos, product screenshots, and stock imagery — belongs to others and is used with their permission or under licence. Those rights stay with their owners."),
      ],
    },
    {
      id: "marks",
      title: "Our name and logo",
      blocks: [
        p("“Arithmiks” and the Arithmiks logo are our trade marks. You may use our name in plain text to refer to us accurately — for example, in an article or a review — but please do not use our logo, or present your product or service as endorsed by us, without written permission."),
      ],
    },
    {
      id: "permitted",
      title: "What you may do",
      blocks: [
        p("You are welcome to:"),
        list(
          "view and print pages for your own reference",
          "share links to any page on the site",
          "quote short extracts from our articles with a credit to Arithmiks and a link to the original",
          "reference our public case studies when discussing our work, without altering them"
        ),
      ],
    },
    {
      id: "not-permitted",
      title: "What you may not do",
      blocks: [
        p("Without our written permission, please do not:"),
        list(
          "republish whole articles or substantial parts of the site elsewhere",
          "copy the site’s design, code, illustrations, or photography into another product or site",
          "remove or obscure copyright, trade mark, or attribution notices",
          "use our content, in bulk, to build a dataset or to train or fine-tune AI models",
          "frame the site within another site or present our content as your own"
        ),
      ],
    },
    {
      id: "client-work",
      title: "Client work and case studies",
      blocks: [
        p("Case studies, testimonials, logos, and screenshots of client products appear with the permission of the client concerned. The products themselves and their brands belong to our clients, not to Arithmiks."),
        p("If you are a client and would like a case study changed or removed, email us and we will act on it promptly."),
      ],
    },
    {
      id: "deliverables",
      title: "Ownership of work we deliver",
      blocks: [
        p("This notice covers our website only. Ownership of the software, models, and documentation we build for clients is set by each client agreement — and our standard position is that clients own what we deliver once it is paid for."),
        note("We keep the right to reuse general know-how and our own pre-existing, non-client-specific tools, but never a client’s code, data, or confidential information."),
      ],
    },
    {
      id: "third-party",
      title: "Third-party material",
      blocks: [
        p("Open-source libraries, fonts, and icons used on the site remain under their own licences, and their notices are kept intact. Other brands and trade marks mentioned on the site belong to their respective owners and are used only to identify them."),
      ],
    },
    {
      id: "report",
      title: "Reporting infringement",
      blocks: [
        p("We respect the rights of creators. If you believe material on our site infringes your copyright or trade mark, email us with:"),
        list(
          "your name and contact details, and your authority to act for the rights holder if you are not the owner",
          "a description of the work you believe has been infringed",
          "the address of the page on our site where the material appears",
          "a statement that you believe in good faith the use is not authorised",
          "a statement that the information in your notice is accurate"
        ),
        p("We will acknowledge your notice within two business days and, where the claim is valid, remove or correct the material."),
      ],
    },
    {
      id: "counter",
      title: "Counter-notices",
      blocks: [
        p("If material you supplied to us was removed and you believe that was a mistake, you can send us a counter-notice explaining why, with your contact details. We will review it and, where appropriate, restore the material and let the original complainant know."),
      ],
    },
    {
      id: "changes",
      title: "Changes to this notice",
      blocks: [
        p("We may update this notice from time to time. The date at the top always shows the current version."),
      ],
    },
  ]),
  contact: {
    heading: "Permissions and copyright questions",
    text: "To ask for permission to reuse our content, or to report an infringement, write to us with the details above. We reply to every request within two business days.",
    email: LEGAL_EMAIL,
  },
};
