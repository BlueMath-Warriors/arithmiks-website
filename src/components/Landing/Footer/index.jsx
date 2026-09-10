import React from "react";
import { Link } from "gatsby";
import { SERVICE_NAV_GROUPS } from "../../../constants/serviceNavGroups";
import {
  FooterEl,
  Shell,
  ServiceMap,
  ServiceColumn,
  ColumnLink,
  ExtraColumnLink,
  TopRow,
  Brand,
  BrandName,
  BrandBlurb,
  ContactLinks,
  SocialColumn,
  SocialRow,
  OfficeBlock,
  ExtraCols,
  ExtraColumn,
  ColumnTitle,
  BottomBar,
  Copyright,
  LegalLinks,
  BadgeRow,
} from "./index.styled";
import logoMark from "../../../images/favicon.png";
import upworkRank from "../../../images/homepage/upwork-rank.png";

const contactIconProps = {
  viewBox: "0 0 20 20",
  width: 16,
  height: 16,
  fill: "none",
  stroke: "#5C7BFF",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const MailIcon = () => (
  <svg {...contactIconProps}>
    <path d="M2.5 5.5h15v9h-15zM2.5 5.5 10 11l7.5-5.5" />
  </svg>
);

const PersonIcon = () => (
  <svg {...contactIconProps}>
    <path d="M10 3.2a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2ZM3.6 17c0-3 2.9-4.9 6.4-4.9s6.4 1.9 6.4 4.9" />
  </svg>
);

const COMPANY_LINKS = [
  { name: "About", url: "/about", internal: true },
  { name: "How we work", url: "/how-we-work", internal: false },
  { name: "Careers", url: "/careers", internal: true },
  { name: "Contact", url: "/contact", internal: true },
];
const WORK_LINKS = [
  { name: "Case studies", url: "/case-studies", internal: true },
  { name: "Industries", url: "/industries", internal: false },
  { name: "Clients", url: "/clients", internal: false },
];
// This site's real blog route is /blogs — the source design's own /blog is
// remapped here rather than copied verbatim (deliberate, see plan Task 12).
const RESOURCE_LINKS = [
  { name: "Blog", url: "/blogs", internal: true },
  { name: "Insights", url: "/insights", internal: false },
  { name: "AI readiness report", url: "/ai-readiness", internal: false },
];
// Same deliberate remap for the two engagement models this site already
// has real pages for.
const MODELS = [
  { name: "AI readiness audit", url: "/engagement/ai-readiness-audit", internal: false },
  { name: "Fixed-scope project", url: "/fixed-price", internal: true },
  { name: "Dedicated team", url: "/dedicated-team", internal: true },
  { name: "Staff augmentation", url: "/engagement/staff-augmentation", internal: false },
];

// `internal: false` entries have no page yet — href="#" rather than the
// real (currently 404ing) path, per product decision.
const FooterLink = ({ link }) =>
  link.internal ? (
    <ExtraColumnLink as={Link} to={link.url}>
      {link.name}
    </ExtraColumnLink>
  ) : (
    <ExtraColumnLink href="#">{link.name}</ExtraColumnLink>
  );

const Footer = () => (
  <FooterEl>
    <Shell>
      <ServiceMap>
        {SERVICE_NAV_GROUPS.map((category) => (
          <ServiceColumn key={category.slug} aria-label={category.title}>
            {category.hasPage ? (
              <ColumnLink as={Link} to={category.url} $heading>
                {category.title}
              </ColumnLink>
            ) : (
              <ColumnLink href="#" $heading>
                {category.title}
              </ColumnLink>
            )}
            {category.items.map((svc) =>
              svc.hasPage ? (
                <ColumnLink key={svc.slug} as={Link} to={svc.url}>
                  {svc.label}
                </ColumnLink>
              ) : (
                <ColumnLink key={svc.slug} href="#">
                  {svc.label}
                </ColumnLink>
              )
            )}
          </ServiceColumn>
        ))}
      </ServiceMap>

      <TopRow>
        <Brand>
          <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={logoMark} alt="" height={43} width={37} />
            <BrandName>Arithmiks</BrandName>
          </span>
          <BrandBlurb>
            Arithmiks is an AI-first software engineering studio helping teams
            validate what their data can support, then build products they own and
            keep evolving.
          </BrandBlurb>
          <ContactLinks>
            <a href="mailto:services@arithmiks.com">
              <MailIcon />
              services@arithmiks.com
            </a>
            <a href="mailto:hr@arithmiks.com">
              <PersonIcon />
              hr@arithmiks.com
            </a>
          </ContactLinks>
          <BadgeRow>
            <img src="/homepage/upwork-top-rated.svg" alt="Upwork Top Rated Plus" height={96} />
            <img
              src={upworkRank}
              alt="UpworkRank — #146 in Web Development, top 0.87%"
              height={96}
            />
          </BadgeRow>
        </Brand>
        <SocialColumn>
          <span>Find us elsewhere</span>
          <SocialRow>
            <a href="https://www.linkedin.com/company/arithmiks/" aria-label="Arithmiks on LinkedIn">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="#fff" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/arithmiks/" aria-label="Arithmiks on Instagram">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
                <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
                <circle cx="12" cy="12" r="4.1" />
                <circle cx="17.1" cy="6.9" r="1.15" fill="#fff" stroke="none" />
              </svg>
            </a>
            <a href="https://x.com/arithmiks" aria-label="Arithmiks on X">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff" aria-hidden="true">
                <path d="M17.53 3h3.2l-6.99 7.99L21.6 21h-5.5l-4.3-5.63L6.83 21H3.62l7.27-8.3L2.7 3h5.63l4.02 5.31Zm-1.13 16h1.77L7.24 4.82H5.34Z" />
              </svg>
            </a>
          </SocialRow>
          <OfficeBlock>
            <span>Office</span>
            <span>Lahore, Pakistan</span>
          </OfficeBlock>
        </SocialColumn>
      </TopRow>

      <ExtraCols>
        <ExtraColumn>
          <ColumnTitle>Company</ColumnTitle>
          {COMPANY_LINKS.map((l) => (
            <FooterLink key={l.name} link={l} />
          ))}
        </ExtraColumn>
        <ExtraColumn>
          <ColumnTitle>Work</ColumnTitle>
          {WORK_LINKS.map((l) => (
            <FooterLink key={l.name} link={l} />
          ))}
        </ExtraColumn>
        <ExtraColumn>
          <ColumnTitle>Resources</ColumnTitle>
          {RESOURCE_LINKS.map((l) => (
            <FooterLink key={l.name} link={l} />
          ))}
        </ExtraColumn>
        <ExtraColumn>
          <ColumnTitle>Engagement models</ColumnTitle>
          {MODELS.map((l) => (
            <FooterLink key={l.name} link={l} />
          ))}
        </ExtraColumn>
      </ExtraCols>

      <BottomBar>
        <Copyright>© Arithmiks {new Date().getFullYear()} · All rights reserved.</Copyright>
        <LegalLinks>
          {/* The source design itself leaves these as placeholder "#top"
              anchors — carried over as-is, not built out (see spec §8). */}
          <a href="#top">Privacy Policy</a>
          <a href="#top">Terms &amp; Conditions</a>
          <a href="#top">AI Usage Policy</a>
          <a href="#top">Cookie Policy</a>
          <a href="#top">Sitemap</a>
        </LegalLinks>
      </BottomBar>
    </Shell>
  </FooterEl>
);

export default Footer;
