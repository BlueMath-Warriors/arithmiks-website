import React, { useMemo, useRef } from "react";
import TableOfContents from "./TableOfContents";
import PolicySection from "./PolicySection";
import { useActiveSection } from "./useActiveSection";
import { useHeroScrollFade } from "./useHeroScrollFade";
import { OFFICE_ADDRESS } from "../../constants/legal/blocks";
import { Shell, GradientText } from "../shared/Section/index.styled";
import {
  Section,
  GlowClip,
  Glow,
  Layout,
  Body,
  Intro,
  Title,
  Lede,
  Meta,
  ContactBox,
  ContactText,
  ContactRow,
} from "./index.styled";

/**
 * Shared layout for the legal pages (privacy, terms, copyright, AI usage):
 * sticky contents rail beside numbered sections, closed by a contact box.
 * @param {{ policy: object }} props an entry from constants/legal.
 */
const LegalPage = ({ policy }) => {
  const introRef = useRef(null);
  const sectionIds = useMemo(() => policy.sections.map((section) => section.id), [policy]);
  const [activeId, markActive] = useActiveSection(sectionIds);
  useHeroScrollFade(introRef);

  return (
    <Section id="top" aria-label={policy.label}>
      <GlowClip aria-hidden="true">
        <Glow />
      </GlowClip>
      <Shell data-shell="">
        <Layout>
          <TableOfContents sections={policy.sections} activeId={activeId} onSelect={markActive} />
          <Body>
            <Intro ref={introRef} data-hero-enter="">
              <Title>
                {policy.titleLead} <GradientText>{policy.titleAccent}</GradientText>
              </Title>
              <Lede>{policy.intro}</Lede>
              <Meta>
                <span>
                  Last updated: <strong>{policy.lastUpdated}</strong>
                </span>
              </Meta>
            </Intro>

            {policy.sections.map((section) => (
              <PolicySection key={section.id} section={section} />
            ))}

            <ContactBox id="contact">
              <h2>{policy.contact.heading}</h2>
              <ContactText>{policy.contact.text}</ContactText>
              <ContactRow>
                <a href={`mailto:${policy.contact.email}`}>{policy.contact.email}</a>
                <span>{OFFICE_ADDRESS}</span>
              </ContactRow>
            </ContactBox>
          </Body>
        </Layout>
      </Shell>
    </Section>
  );
};

export default LegalPage;
