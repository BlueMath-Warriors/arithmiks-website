import React, { useEffect, useRef } from "react";
import {
  Section,
  MeshClip,
  Mesh,
  BlobBlue,
  BlobPink,
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
import { prefersReducedMotion } from "../../../utils/animations";

const MESH_PARALLAX_FACTOR = 0.14;

/**
 * @param {{ groups: { slug: string, number: string, title: string, items: unknown[] }[];
 *           capabilityCount: number }} props
 */
const Hero = ({ groups, capabilityCount }) => {
  const countRef = useCountUp(capabilityCount);
  const meshRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !meshRef.current) return undefined;
    if (prefersReducedMotion()) return undefined;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (meshRef.current) {
          meshRef.current.style.transform = `translate3d(0, ${
            window.scrollY * MESH_PARALLAX_FACTOR
          }px, 0)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Section id="top">
      <MeshClip aria-hidden="true">
        <Mesh ref={meshRef}>
          <BlobBlue />
          <BlobPink />
        </Mesh>
      </MeshClip>

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
