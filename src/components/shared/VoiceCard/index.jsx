import React, { forwardRef } from "react";
import {
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
  StatGroup,
  Stat,
  StatLabel,
  CaseLink,
} from "./index.styled";

// Only sbaloansHQ keeps its natural colour at rest in the source; every
// other logo starts as a grayscale silhouette and reveals its colour on hover.
const RAW_LOGO_SLUGS = ["sbaloans"];
const COMPACT_LOGO_SLUGS = ["easybar"];

// The grid mesh and brand glow pool around the pointer, so their position
// has to be read from the mouse event — CSS alone can't do that. Everything
// else (edge light, lift, logo swap) is a plain CSS :hover in index.styled.
const trackPointer = (event) => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (((event.clientX - rect.left) / rect.width) * 100).toFixed(1) + "%";
  const y = (((event.clientY - rect.top) / rect.height) * 100).toFixed(1) + "%";
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

const VoiceLogo = ({ voice }) => {
  if (!voice.companyLogo) return <CompanyName>{voice.companyName}</CompanyName>;
  const compact = COMPACT_LOGO_SLUGS.includes(voice.slug);
  if (RAW_LOGO_SLUGS.includes(voice.slug)) {
    return (
      <LogoWrap $compact={compact}>
        <CompanyLogoRaw src={voice.companyLogo} alt={voice.companyName} />
      </LogoWrap>
    );
  }
  return (
    <LogoWrap $compact={compact}>
      <CompanyLogo src={voice.companyLogo} alt={voice.companyName} />
      <CompanyLogoDark src={voice.companyLogo} alt="" aria-hidden="true" />
    </LogoWrap>
  );
};

/**
 * Client testimonial card (portrait, logo, quote, delivery stats) on the dark
 * surface. Layout around it — carousel or grid — belongs to the caller, which
 * can extend it via styled(VoiceCard).
 * @param {{ voice: object, className?: string }} props voice: an entry of constants/voices.
 */
const VoiceCard = forwardRef(({ voice, className }, ref) => (
  <Card ref={ref} className={className} onMouseEnter={trackPointer} onMouseMove={trackPointer}>
    <VGrid data-vgrid aria-hidden="true" />
    <VGlow data-vglow aria-hidden="true" />
    <VEdge aria-hidden="true" />
    <VoiceHead>
      <Portrait src={voice.avatar} alt={voice.name} />
      <Info>
        <VoiceLogo voice={voice} />
        <NameRole>
          <Name>{voice.name}</Name>
          <Role>{voice.role}</Role>
        </NameRole>
      </Info>
    </VoiceHead>
    <Quote>“{voice.quote}”</Quote>
    <StatsRow>
      <StatGroup>
        <Stat>
          <strong>{voice.stat1.value}</strong>
          <StatLabel>{voice.stat1.label}</StatLabel>
        </Stat>
        <Stat>
          <strong>{voice.stat2.value}</strong>
          <StatLabel>{voice.stat2.label}</StatLabel>
        </Stat>
      </StatGroup>
      {voice.caseUrl && (
        <CaseLink href={voice.caseUrl}>
          View case study <span aria-hidden="true">→</span>
        </CaseLink>
      )}
    </StatsRow>
  </Card>
));

VoiceCard.displayName = "VoiceCard";

export default VoiceCard;
