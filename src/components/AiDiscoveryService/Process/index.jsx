import React, { useEffect, useRef, useState } from "react";
import { Shell } from "../../shared/Section/index.styled";
import { Eyebrow, Title, Grad, Lead } from "../index.styled";
import {
  Section,
  Split,
  Viz,
  VizIcon,
  VizLabel,
  VizNumber,
  VizTitle,
  List,
  Row,
  Edge,
  RowBody,
  RowStage,
  Tagline,
  Description,
  MonoLabel,
  Chips,
  Chip,
  Duration,
  Deliverables,
  Deliverable,
  Bullet,
} from "./index.styled";
import { PHASES } from "../content";

// Same breakpoint the stylesheet uses to drop the pinned panel.
const SPLIT_MIN_WIDTH = 961;
// The row crossing this line (as a share of the viewport) is the open stage.
const READING_LINE = 0.42;
const EDGE_GRADIENT = "linear-gradient(180deg,#5C8CFF 0%,#1355FF 34%,#A96FC8 68%,#EC4A9E 100%)";

const Process = () => {
  const vizRef = useRef(null);
  const listRef = useRef(null);
  const rowRefs = useRef([]);
  const [phase, setPhase] = useState(0);
  // One gradient spans the whole list; the active edge shows only its slice.
  const [edge, setEdge] = useState({ listHeight: 0, rowTop: 0 });
  const [vizTop, setVizTop] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    let frame = 0;

    const measure = () => {
      frame = 0;
      const list = listRef.current;
      const rows = rowRefs.current.filter(Boolean);
      if (!list || !rows.length) return;

      // Centre the pinned panel in the space under the header and chapter bar.
      // --chrome-offset is inherited from the page wrapper, which measures it.
      const chrome =
        parseFloat(window.getComputedStyle(list).getPropertyValue("--chrome-offset")) || 140;
      const vizHeight = vizRef.current ? vizRef.current.offsetHeight : 0;
      const top = Math.max(chrome + 10, Math.round((window.innerHeight - vizHeight) / 2));
      setVizTop((current) => (current === top ? current : top));

      if (window.innerWidth < SPLIT_MIN_WIDTH) return;
      const line = window.innerHeight * READING_LINE;
      let pick = 0;
      let best = Infinity;
      rows.forEach((row, k) => {
        const r = row.getBoundingClientRect();
        const distance = r.top > line ? r.top - line : r.bottom < line ? line - r.bottom : 0;
        if (distance < best) {
          best = distance;
          pick = k;
        }
      });
      setPhase((current) => (current === pick ? current : pick));

      const listHeight = list.offsetHeight;
      const rowTop = Math.round(
        rows[pick].getBoundingClientRect().top - list.getBoundingClientRect().top
      );
      setEdge((current) =>
        current.listHeight === listHeight && current.rowTop === rowTop ? current : { listHeight, rowTop }
      );
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    measure();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const current = PHASES[phase];

  return (
    <Section id="process" aria-labelledby="process-h">
      <Shell>
        <div data-reveal="">
          <Eyebrow $tone="onDark">Process</Eyebrow>
          <Title id="process-h" $onDark>
            Our AI <Grad $onDark>Discovery Process</Grad>
          </Title>
          <Lead $onDark>
            Three stages. Each one ends with something your team can read, test, or use.
          </Lead>
        </div>

        <Split>
          <Viz ref={vizRef} style={vizTop != null ? { top: vizTop } : undefined} aria-hidden="true">
            <VizIcon viewBox="0 0 24 24">
              <path d={current.icon} />
            </VizIcon>
            <VizLabel>
              <VizNumber>{current.number}</VizNumber>
              <VizTitle>{current.title}</VizTitle>
            </VizLabel>
          </Viz>

          <List ref={listRef}>
            {PHASES.map((p, i) => {
              const active = i === phase;
              return (
                <Row
                  key={p.number}
                  ref={(node) => {
                    rowRefs.current[i] = node;
                  }}
                  $active={active}
                  aria-labelledby={`process-stage-${p.number}`}
                >
                  <Edge
                    aria-hidden="true"
                    style={
                      active && edge.listHeight
                        ? {
                            background: EDGE_GRADIENT,
                            backgroundSize: `100% ${edge.listHeight}px`,
                            backgroundPosition: `0 ${-edge.rowTop}px`,
                            backgroundRepeat: "no-repeat",
                          }
                        : undefined
                    }
                  />
                  <RowBody>
                    {/* The pinned panel names the stage on wide screens; once it's
                        gone the name moves into the row itself. */}
                    <RowStage id={`process-stage-${p.number}`}>
                      <span>{p.number}</span> {p.title}
                    </RowStage>
                    <Tagline>{p.tagline}</Tagline>
                    <Description>{p.description}</Description>

                    <div style={{ marginTop: 30 }}>
                      <MonoLabel>{p.focusLabel}</MonoLabel>
                      <Chips>
                        {p.focus.map((f) => (
                          <Chip key={f.title} title={f.note}>
                            {f.title}
                          </Chip>
                        ))}
                      </Chips>
                    </div>

                    <Duration>
                      <strong>Duration:</strong>
                      <span>{p.duration}</span>
                    </Duration>

                    <div style={{ marginTop: 18 }}>
                      <MonoLabel>What you receive</MonoLabel>
                      <Deliverables>
                        {p.deliverables.map((d) => (
                          <Deliverable key={d.title}>
                            <Bullet aria-hidden="true" />
                            <span>
                              <strong>{d.title}</strong>
                              {d.note && <span> — {d.note}</span>}
                            </span>
                          </Deliverable>
                        ))}
                      </Deliverables>
                    </div>
                  </RowBody>
                </Row>
              );
            })}
          </List>
        </Split>
      </Shell>
    </Section>
  );
};

export default Process;
