import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Frame,
  Glow,
  Flow,
  InputNode,
  InputCard,
  MonoLabel,
  InputTitle,
  InputChips,
  Arrow,
  StageColumn,
  StageCard,
  StageBar,
  StageBody,
  StageHead,
  StageTitle,
  StageDuration,
  StageRows,
  StageRow,
  RowIcon,
  RowText,
  Tail,
  TailArrow,
  TailValidated,
  TailDecision,
  TailDiamond,
  TailDecisionLabel,
  TailLive,
} from "./index.styled";
import { DIAGRAM_INPUTS, DIAGRAM_STAGES } from "../content";

const STRAIGHT = { kind: "straight", shift: 0 };

const DownArrow = () => (
  <TailArrow viewBox="0 0 16 22" width="16" height="22" aria-hidden="true">
    <path d="M8 1v19M3 15l5 5 5-5" />
  </TailArrow>
);

// Each arrow leaves the previous card's vertical centre and lands on the next
// card's. The cards are different heights (the last one carries a tail), so
// where the centres disagree the arrow becomes a rounded elbow.
// `applied` is the current state, so a straight arrow's own translateY can be
// taken back out of its measured box.
const measureArrows = (flow, applied) => {
  const arrows = [...flow.querySelectorAll("[data-diaarrow]")];
  const cards = [...flow.querySelectorAll("[data-diacard]")];
  if (window.getComputedStyle(flow).display !== "grid") return arrows.map(() => STRAIGHT);

  const centre = (el) => {
    const r = el.getBoundingClientRect();
    return r.top + r.height / 2;
  };

  return arrows.map((arrow, i) => {
    const to = cards[i];
    if (!to) return STRAIGHT;
    const box = arrow.getBoundingClientRect();
    const toY = centre(to);
    // The input node is centred against the first card, so the first arrow
    // is always straight.
    const fromY = i === 0 ? toY : centre(cards[i - 1]);
    if (Math.abs(toY - fromY) < 2) {
      const prior = applied[i] && applied[i].kind === "straight" ? applied[i].shift : 0;
      return {
        kind: "straight",
        shift: Math.round(toY - (box.top - prior + box.height / 2)),
      };
    }
    const w = Math.max(24, Math.round(box.width));
    const h = Math.max(24, Math.round(box.height));
    const y1 = Math.round(fromY - box.top);
    const y2 = Math.round(toY - box.top);
    const end = w - 3;
    const mid = Math.round(w / 2);
    const dir = y2 < y1 ? -1 : 1;
    const r = Math.min(9, Math.abs(y2 - y1) / 2, w / 2 - 3);
    const d =
      `M2 ${y1} H ${mid - r} Q ${mid} ${y1} ${mid} ${y1 + dir * r} ` +
      `V ${y2 - dir * r} Q ${mid} ${y2} ${mid + r} ${y2} H ${end}`;
    return { kind: "elbow", w, h, d, head: `M${end - 5} ${y2 - 5} l5 5 -5 5` };
  });
};

const sameArrows = (a, b) =>
  a.length === b.length && a.every((x, i) => JSON.stringify(x) === JSON.stringify(b[i]));

const Diagram = () => {
  const flowRef = useRef(null);
  const [arrows, setArrows] = useState(() => DIAGRAM_STAGES.map(() => STRAIGHT));
  const arrowsRef = useRef(arrows);
  arrowsRef.current = arrows;

  const align = useCallback(() => {
    const flow = flowRef.current;
    if (!flow) return;
    const next = measureArrows(flow, arrowsRef.current);
    setArrows((current) => (sameArrows(current, next) ? current : next));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    align();
    const timers = [300, 900].map((t) => window.setTimeout(align, t));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(align);
    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => align()) : null;
    if (observer && flowRef.current) observer.observe(flowRef.current);
    window.addEventListener("resize", align, { passive: true });
    return () => {
      timers.forEach(window.clearTimeout);
      if (observer) observer.disconnect();
      window.removeEventListener("resize", align);
    };
  }, [align]);

  return (
    <Frame data-reveal="">
      <Glow aria-hidden="true" />
      <Flow ref={flowRef}>
        <InputNode data-dianode="">
          <InputCard>
            <MonoLabel>Your business</MonoLabel>
            <InputTitle>Bring what you have</InputTitle>
            <InputChips>
              {DIAGRAM_INPUTS.map((input) => (
                <span key={input}>{input}</span>
              ))}
            </InputChips>
          </InputCard>
        </InputNode>

        {DIAGRAM_STAGES.map((stage, i) => {
          const arrow = arrows[i] || STRAIGHT;
          const isLast = i === DIAGRAM_STAGES.length - 1;
          return (
            <React.Fragment key={stage.title}>
              <Arrow
                data-diaarrow=""
                aria-hidden="true"
                $elbow={arrow.kind === "elbow"}
                style={arrow.kind === "straight" && arrow.shift ? { transform: `translateY(${arrow.shift}px)` } : undefined}
              >
                {arrow.kind === "elbow" ? (
                  <svg width={arrow.w} height={arrow.h} viewBox={`0 0 ${arrow.w} ${arrow.h}`}>
                    <path d={arrow.d} />
                    <path d={arrow.head} />
                  </svg>
                ) : (
                  <svg viewBox="0 0 36 16" width="36" height="16">
                    <path d="M2 8h30M27 3l5 5-5 5" />
                  </svg>
                )}
              </Arrow>

              <StageColumn $last={isLast}>
                <StageCard data-diacard="">
                  <StageBar aria-hidden="true" style={{ background: stage.bar }} />
                  <StageBody>
                    <StageHead>
                      <StageTitle>{stage.title}</StageTitle>
                      <StageDuration>{stage.duration}</StageDuration>
                    </StageHead>
                    <StageRows>
                      {stage.rows.map((row) => (
                        <StageRow key={row.title}>
                          <RowIcon>
                            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                              <path d={row.icon} />
                            </svg>
                          </RowIcon>
                          <RowText>
                            <strong>{row.title}</strong>
                            <span>{row.note}</span>
                          </RowText>
                        </StageRow>
                      ))}
                    </StageRows>
                  </StageBody>
                </StageCard>

                {isLast && (
                  <Tail>
                    <DownArrow />
                    <TailValidated>
                      <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
                        <circle cx="10" cy="10" r="8.2" />
                        <path d="m6.4 10.2 2.4 2.4 4.8-5" />
                      </svg>
                      Validated with real data
                    </TailValidated>
                    <DownArrow />
                    <TailDecision>
                      <TailDiamond aria-hidden="true" />
                      <TailDecisionLabel>Your team adopts it</TailDecisionLabel>
                    </TailDecision>
                    <DownArrow />
                    <TailLive>
                      <svg viewBox="0 0 20 20" width="17" height="17" aria-hidden="true">
                        <path d="m3 10.4 3.6 3.6 6-7M9 13.6l1.4 1.4 6.6-7.6" />
                      </svg>
                      Live AI MVP
                    </TailLive>
                  </Tail>
                )}
              </StageColumn>
            </React.Fragment>
          );
        })}
      </Flow>
    </Frame>
  );
};

export default Diagram;
