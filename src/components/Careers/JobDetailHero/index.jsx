import React, { useState } from "react";
import { useSiteMetadata } from "../../../hooks/use-site-metadata";
import { formatPostedDate, formatEmploymentTypeForJobDetail } from "../../../constants/jobs";
import {
  HeroSection,
  Glow,
  Shell,
  Meta,
  Title,
  SubMeta,
  ActionRow,
  ApplyButton,
  ShareButton,
  NetworkLabel,
  IconRow,
  IconLink,
  IconButton,
} from "./index.styled";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.12V9.9H7.6V13h2.7v8Z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M17.53 3h3.2l-6.99 7.99L21.6 21h-5.5l-4.3-5.63L6.83 21H3.62l7.27-8.3L2.7 3h5.63l4.02 5.31Zm-1.13 16h1.77L7.24 4.82H5.34Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 3.4A8.55 8.55 0 0 0 4.6 16.3L3.5 20.5l4.32-1.13A8.55 8.55 0 1 0 12 3.4Zm0 15.5a7 7 0 0 1-3.56-.97l-.26-.15-2.56.67.68-2.5-.17-.26A7 7 0 1 1 12 18.9Zm3.9-5.1c-.21-.11-1.26-.62-1.46-.69-.2-.07-.34-.11-.48.1-.14.22-.55.7-.68.84-.12.14-.25.16-.46.05a5.7 5.7 0 0 1-2.86-2.5c-.21-.37.21-.35.6-1.15.07-.14.03-.26-.02-.37-.05-.1-.48-1.16-.66-1.58-.17-.41-.35-.36-.48-.36h-.41c-.14 0-.37.05-.56.26-.19.21-.73.72-.73 1.75s.75 2.03.85 2.17c.11.14 1.47 2.25 3.56 3.15 1.32.57 1.84.62 2.5.52.4-.06 1.26-.51 1.43-1.01.18-.5.18-.93.13-1.02-.05-.09-.19-.14-.4-.25Z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M21.2 4.3 3.4 11.2c-1.05.42-1.04 1 .1 1.35l4.35 1.36 1.68 5.14c.2.56.1.78.69.78.45 0 .65-.2.9-.45l2.17-2.11 4.52 3.34c.83.46 1.43.22 1.64-.77l2.96-13.95c.3-1.21-.46-1.76-1.21-1.42ZM8.9 13.6l9.8-6.18c.49-.3.94-.14.57.19l-8.39 7.57-.33 3.48Z" />
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.6 13.9a3.9 3.9 0 0 0 5.9.42l2.4-2.4a3.9 3.9 0 0 0-5.52-5.52l-1.38 1.37" />
    <path d="M14.4 10.1a3.9 3.9 0 0 0-5.9-.42l-2.4 2.4a3.9 3.9 0 0 0 5.52 5.52l1.37-1.37" />
  </svg>
);

/** @param {{ job: import("../../../constants/jobs").jobs[number] }} props */
const JobDetailHero = ({ job }) => {
  const { siteUrl } = useSiteMetadata();
  const [copied, setCopied] = useState(false);
  const pageUrl = `${siteUrl}/careers/jobs/${job.slug}`;
  const shareText = `${job.title} at Arithmiks`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard permission denied/unavailable — nothing to recover into, the
      // link is still visible in the address bar for the user to copy manually.
    }
  };

  return (
    <HeroSection>
      <Glow />
      <Shell>
        <Meta>Arithmiks | {formatEmploymentTypeForJobDetail(job.employmentType)}</Meta>
        <Title>{job.title}</Title>
        <SubMeta>
          {job.location}, {job.jobInfo.country} | Posted on {formatPostedDate(job.datePosted)}
        </SubMeta>
        <ActionRow>
          <ApplyButton href="#">Apply now</ApplyButton>
          <ShareButton href={`mailto:?subject=${encodeURIComponent(`Job at Arithmiks — ${job.title}`)}&body=${encodeURIComponent(pageUrl)}`}>
            Share job via email
          </ShareButton>
        </ActionRow>
        <NetworkLabel>Share this job with your network</NetworkLabel>
        <IconRow>
          <IconLink href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
            <FacebookIcon />
          </IconLink>
          <IconLink href={`https://x.com/intent/post?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
            <XIcon />
          </IconLink>
          <IconLink href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
            <LinkedInIcon />
          </IconLink>
          <IconLink href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
            <WhatsAppIcon />
          </IconLink>
          <IconLink href={`https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Telegram">
            <TelegramIcon />
          </IconLink>
          <IconButton type="button" onClick={handleCopyLink} aria-label={copied ? "Link copied" : "Copy link"}>
            <LinkIcon />
          </IconButton>
        </IconRow>
      </Shell>
    </HeroSection>
  );
};

export default JobDetailHero;
