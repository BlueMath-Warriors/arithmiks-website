import React from "react";
import MeshHeroBackground from "../../shared/MeshHeroBackground";
import {
  Section,
  Shell,
  EyebrowRow,
  EyebrowBar,
  Eyebrow,
  Row,
  Copy,
  Title,
  Intro,
  CtaRow,
  PrimaryCta,
  SecondaryCta,
  Index,
  CountRow,
  Count,
  CountLabel,
  IndexList,
  IndexRow,
  IndexNum,
  IndexName,
  IndexCount,
  IndexMeta,
  MetaDot,
} from "./index.styled";
import { useCountUp } from "../../../hooks/useCountUp";

/**
 * @param {{ groups: { slug: string, number: string, title: string, items: unknown[] }[];
 *           capabilityCount: number }} props
 */
const Hero = ({ groups, capabilityCount }) => {
  const countRef = useCountUp(capabilityCount);

  return (
    <Section id="top">
      <MeshHeroBackground />

      <Shell>
        <EyebrowRow>
          <EyebrowBar aria-hidden="true" />
          <Eyebrow>What we do</Eyebrow>
        </EyebrowRow>

        <Row>
          <Copy>
            <Title>
              How we help teams ship <span>reliable software</span>
            </Title>
            <Intro>
              From web and mobile applications to UI/UX, DevOps, and AI-ready data
              workflows — explore the full range of what we build and how we work.
            </Intro>
            <CtaRow>
              <PrimaryCta href="#contact">
                Talk to an Expert <span aria-hidden="true">→</span>
              </PrimaryCta>
              <SecondaryCta href="#work">
                See selected work <span aria-hidden="true">→</span>
              </SecondaryCta>
            </CtaRow>
          </Copy>

          <Index>
            <CountRow>
              {/* useCountUp writes the text content; the literal is the no-JS value.
                  $digits reserves the final width so counting up cannot shift layout. */}
              <Count ref={countRef} $digits={String(capabilityCount).length}>
                {capabilityCount}
              </Count>
              <CountLabel>
                capabilities,
                <br />
                four focus areas
              </CountLabel>
            </CountRow>

            <IndexList>
              {groups.map((group) => (
                <IndexRow key={group.slug} href={`#${group.slug}`}>
                  <IndexNum>{group.number}</IndexNum>
                  <IndexName>{group.title}</IndexName>
                  <IndexCount>{group.items.length}</IndexCount>
                </IndexRow>
              ))}
            </IndexList>

            <IndexMeta>
              <strong>24h</strong> response time
              <MetaDot aria-hidden="true" />
              Lahore, Pakistan
            </IndexMeta>
          </Index>
        </Row>
      </Shell>
    </Section>
  );
};

export default Hero;
