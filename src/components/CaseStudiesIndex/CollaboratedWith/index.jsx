import React from "react";
import { Section, Shell, Title, Rows, RowMask, Row, Cell, Logo } from "./index.styled";

// [name, file, rendered height in px] — heights are per-mark so cap heights
// match: single-line wordmarks sit lower, icon+text mid, multi-line lockups
// taller. Values come from the design's own CS_LOGOS table.
const LOGOS = [
  ["LFGO", "/lfgo.svg", 28],
  ["GO", "/go.svg", 28],
  ["HAKRO", "/hakro.svg", 23],
  ["NICGS", "/homepage/client-nicgs.svg", 26],
  ["Swerv Automotive", "/swerv.svg", 26],
  ["Almani", "/almani.svg", 29],
  ["EASY-BAR", "/easybar.svg", 19],
  ["Ofertas", "/ofertas.svg", 29],
  ["sbaloansHQ", "/sbaloans.svg", 27],
  ["Togather", "/togather.svg", 27],
  ["Expat Haven Hub", "/ehh.svg", 29],
  ["Mr Seller Note", "/icons/msn-logo.svg", 30],
  ["Qareeb", "/qareeb.svg", 28],
  ["Quanta", "/quanta.svg", 28],
];

const REVERSED = [...LOGOS].reverse();

// Tripled so the -33.3333% keyframe lands exactly one list-width along.
const track = (logos) => [...logos, ...logos, ...logos];

const LogoRow = ({ logos, duration, reverse, idPrefix }) => (
  <RowMask>
    <Row $duration={duration} $reverse={reverse}>
      {track(logos).map(([name, src, height], index) => (
        <Cell key={`${idPrefix}-${name}-${index}`}>
          <Logo src={src} alt={name} height={height} loading="lazy" />
        </Cell>
      ))}
    </Row>
  </RowMask>
);

const CollaboratedWith = () => (
  <Section aria-labelledby="collaborated-h">
    <Shell>
      <Title id="collaborated-h">We&apos;ve collaborated with</Title>
      <Rows>
        <LogoRow logos={LOGOS} duration={58} idPrefix="a" />
        <LogoRow logos={REVERSED} duration={64} reverse idPrefix="b" />
      </Rows>
    </Shell>
  </Section>
);

export default CollaboratedWith;
