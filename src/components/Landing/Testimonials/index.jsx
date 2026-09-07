import React, { useEffect, useRef, useState } from "react";
import { caseStudies } from "../Case-Study/caseStudies.js";
import {
  Section,
  Shell,
  Header,
  Eyebrow,
  Heading,
  Body,
  TrackView,
  Track,
  Card,
  VGrid,
  VGlow,
  VEdge,
  VoiceHead,
  Portrait,
  LogoWrap,
  CompanyLogo,
  CompanyLogoRaw,
  CompanyLogoDark,
  CompanyName,
  Info,
  NameRole,
  Name,
  Role,
  Quote,
  StatsRow,
  Stat,
  StatLabel,
  CaseLink,
  Dots,
  Dot,
} from "./index.styled";
import voiceGoLouis from "../../../images/homepage/voice-go-louis.png";
import voiceHakroMichael from "../../../images/homepage/voice-hakro-michael.png";
import voiceSbaZachary from "../../../images/homepage/voice-sba-zachary.png";
import voiceEasybarRon from "../../../images/homepage/voice-easybar-ron.png";
import voiceSwervPierce from "../../../images/homepage/voice-swerv-pierce.png";
import voiceDifactoIvan from "../../../images/homepage/voice-difacto-ivan.png";
import difactoLogo from "../../../images/homepage/voice-logo-difacto.png";

// Testimonial headshots extracted from the design source, keyed by the
// matching caseStudies.js slug (see Task 3 in the plan for provenance).
const AVATARS = {
  go: voiceGoLouis,
  hakro: voiceHakroMichael,
  sbaloans: voiceSbaZachary,
  easybar: voiceEasybarRon,
  swerv: voiceSwervPierce,
};

// The public /*.svg logos (used elsewhere in flat, light-background
// contexts) are mostly plain black wordmarks — filtering one to grayscale
// still works (any colour crushes to a white silhouette), but removing the
// filter on hover just revealed black-on-black. The design instead ships a
// dedicated colour variant per client for these cards (white wordmark, its
// accent colour kept), used here as the ONE asset for both states: filtered
// to a white silhouette at rest, shown true-colour on hover.
const VOICE_LOGOS = {
  go: "/homepage/voice-logo-go-dark.svg",
  hakro: "/homepage/voice-logo-hakro-dark.svg",
  easybar: "/homepage/voice-logo-easybar-dark.svg",
  swerv: "/homepage/voice-logo-swerv-dark.svg",
};

const VOICES = [
  ...caseStudies
    .filter((c) => c.testimonial)
    .map((c) => ({
      slug: c.slug,
      avatar: AVATARS[c.slug],
      companyLogo: VOICE_LOGOS[c.slug] || c.logo,
      companyName: c.logoAlt,
      name: c.testimonial.personName,
      role: c.testimonial.personRole,
      quote: c.testimonial.quote,
      stat1: c.testimonial.stat1,
      stat2: c.testimonial.stat2,
      caseUrl: c.hasDetailPage ? `/case-studies/${c.slug}` : null,
    })),
  // No matching case study exists for this client — quote and stats are
  // real, "View case study" is intentionally omitted (product decision).
  {
    slug: "difacto",
    avatar: voiceDifactoIvan,
    companyLogo: difactoLogo,
    companyName: "Difacto",
    name: "Ivan Grant",
    role: "Co-Founder",
    quote:
      "Omer was a key developer in the evolution of our DiFacto platform, rapidly delivering the Full Admin Panel that lets our support team manage user accounts.",
    stat1: { value: "4 wks", label: "To first pipeline" },
    stat2: { value: "–32%", label: "Manual review time" },
    caseUrl: null,
  },
];

const PER_PAGE = 2;
const PAGE_COUNT = Math.ceil(VOICES.length / PER_PAGE);

// Only sbaloansHQ keeps its natural colour at rest in the source; every
// other logo (Difacto included) starts as a grayscale silhouette and
// reveals its real colour on hover.
const RAW_LOGO_SLUGS = ["sbaloans"];

// The grid mesh and brand glow pool around the pointer, so their position
// has to be read from the mouse event — CSS alone can't do that. Everything
// else (edge light, lift, logo swap) is a plain CSS :hover in index.styled.
const trackPointer = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1) + "%";
  const y = (((e.clientY - rect.top) / rect.height) * 100).toFixed(1) + "%";
  const glow = card.querySelector("[data-vglow]");
  const grid = card.querySelector("[data-vgrid]");
  if (glow) {
    glow.style.background = `radial-gradient(170px circle at ${x} ${y}, rgba(19,85,255,.22), rgba(169,111,200,.10) 44%, transparent 72%)`;
  }
  if (grid) {
    const mask = `radial-gradient(140px circle at ${x} ${y}, #000 0%, rgba(0,0,0,.45) 45%, transparent 74%)`;
    grid.style.webkitMaskImage = mask;
    grid.style.maskImage = mask;
  }
};

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const trackViewRef = useRef(null);
  const cardRefs = useRef([]);

  // Scroll-snap reports its own position — this just keeps the dots in
  // sync with whatever page a drag/swipe/trackpad gesture lands on.
  useEffect(() => {
    const view = trackViewRef.current;
    if (!view) return undefined;
    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const nearest = Math.round(view.scrollLeft / view.clientWidth);
        setPage(Math.min(PAGE_COUNT - 1, Math.max(0, nearest)));
      });
    };
    view.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      view.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const goToPage = (i) => {
    cardRefs.current[i * PER_PAGE]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <Section id="voices" aria-labelledby="voices-h">
      <Shell>
        <Header>
          <Eyebrow>In their words</Eyebrow>
          <Heading id="voices-h">
            What it&apos;s like to <span>build with us</span>
          </Heading>
        </Header>
        <Body>
          <TrackView ref={trackViewRef}>
            <Track>
              {VOICES.map((v, i) => (
                <Card
                  key={v.slug}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  onMouseEnter={trackPointer}
                  onMouseMove={trackPointer}
                >
                  <VGrid data-vgrid aria-hidden="true" />
                  <VGlow data-vglow aria-hidden="true" />
                  <VEdge aria-hidden="true" />
                  <VoiceHead>
                    <Portrait src={v.avatar} alt={v.name} />
                    <Info>
                      {v.companyLogo ? (
                        RAW_LOGO_SLUGS.includes(v.slug) ? (
                          <LogoWrap>
                            <CompanyLogoRaw src={v.companyLogo} alt={v.companyName} />
                          </LogoWrap>
                        ) : (
                          <LogoWrap>
                            <CompanyLogo src={v.companyLogo} alt={v.companyName} />
                            <CompanyLogoDark src={v.companyLogo} alt="" aria-hidden="true" />
                          </LogoWrap>
                        )
                      ) : (
                        <CompanyName>{v.companyName}</CompanyName>
                      )}
                      <NameRole>
                        <Name>{v.name}</Name>
                        <Role>{v.role}</Role>
                      </NameRole>
                    </Info>
                  </VoiceHead>
                  <Quote>“{v.quote}”</Quote>
                  <StatsRow>
                    <Stat>
                      <strong>{v.stat1.value}</strong>
                      <StatLabel>{v.stat1.label}</StatLabel>
                    </Stat>
                    <Stat>
                      <strong>{v.stat2.value}</strong>
                      <StatLabel>{v.stat2.label}</StatLabel>
                    </Stat>
                    {v.caseUrl && (
                      <CaseLink href={v.caseUrl}>
                        View case study <span aria-hidden="true">→</span>
                      </CaseLink>
                    )}
                  </StatsRow>
                </Card>
              ))}
            </Track>
          </TrackView>
          <Dots role="group" aria-label="Testimonial pages">
            {Array.from({ length: PAGE_COUNT }, (_, i) => (
              <Dot
                key={i}
                type="button"
                $active={i === page}
                aria-label={`Show testimonial page ${i + 1}`}
                onClick={() => goToPage(i)}
              />
            ))}
          </Dots>
        </Body>
      </Shell>
    </Section>
  );
};

export default Testimonials;
