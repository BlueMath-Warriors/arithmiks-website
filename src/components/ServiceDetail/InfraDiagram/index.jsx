import React from "react";
import { BandShell } from "../../shared/Band/index.styled";
import { Section, Glow, GlowLow } from "../Fit/index.styled";
import FitIntro from "../FitIntro";
import DiagramCard from "./DiagramCard";
import GradientIcon from "./GradientIcon";
import { useDiagramScale } from "./useDiagramScale";
import {
  Frame,
  FrameGlow,
  Stage,
  Flow,
  Column,
  Context,
  ContextLabel,
  Logos,
  Arrow,
  SourceRing,
  SourceCard,
  SourceLabel,
  SourceTitle,
  SourceText,
  Network,
  NetworkLink,
  NetworkLabel,
  Below,
  Pipeline,
  Observability,
  Signals,
  SignalsLabel,
  Signal,
  SignalArrow,
} from "./index.styled";

const FlowArrow = ({ narrow = false }) => (
  <Arrow $narrow={narrow} aria-hidden="true">
    <svg
      viewBox="0 0 36 16"
      width={narrow ? 28 : 36}
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={narrow ? "M9 8h18M22 3l5 5-5 5" : "M2 8h30M27 3l5 5-5 5"} />
    </svg>
  </Arrow>
);

const LogoRow = ({ logos, wide = false }) => (
  <Logos $wide={wide}>
    {logos.map((logo) => (
      <img key={logo.name} src={`/services/stack/${logo.logo}.svg`} alt={logo.name} title={logo.name} />
    ))}
  </Logos>
);

const ColumnContext = ({ context }) => (
  <Context>
    {context && (
      <>
        <ContextLabel>{context.label}</ContextLabel>
        <LogoRow logos={context.logos} wide={context.wideLogos} />
      </>
    )}
  </Context>
);

/**
 * "What it is" for infrastructure services: the split heading, then a
 * request's path from users through the edge into the cloud network, with
 * the pipeline and observability that keep it running.
 *
 * @param {{ intro: object, diagram: object }} props
 *   diagram: { source, edge, network: { label, iac, tiers }, pipeline, observability }
 */
const InfraDiagram = ({ intro, diagram }) => {
  const { frameRef, stageRef } = useDiagramScale();
  const { source, edge, network, pipeline, observability } = diagram;

  return (
    <Section id="fit" aria-labelledby="fit-h">
      <Glow aria-hidden="true" />
      <GlowLow aria-hidden="true" />
      <BandShell>
        <FitIntro id="fit-h" {...intro} />

        <Frame ref={frameRef} data-reveal="">
          <FrameGlow aria-hidden="true" />
          <Stage ref={stageRef}>
            <Flow>
              <Column $topLevel $flex={source.flex}>
                <ColumnContext />
                <SourceRing>
                  <SourceCard>
                    <GradientIcon path={source.icon} />
                    <SourceLabel>{source.label}</SourceLabel>
                    <SourceTitle>{source.title}</SourceTitle>
                    <SourceText>{source.text}</SourceText>
                  </SourceCard>
                </SourceRing>
              </Column>
              <FlowArrow />
              <Column $topLevel $flex={edge.flex}>
                <ColumnContext context={edge.context} />
                <DiagramCard card={edge.card} />
              </Column>
              <FlowArrow />
              <Network>
                <NetworkLink aria-hidden="true" />
                <NetworkLabel>{network.label}</NetworkLabel>
                <NetworkLabel $outline>
                  <img src={`/services/stack/${network.iac.logo}.svg`} alt="" />
                  {network.iac.label}
                </NetworkLabel>
                {network.tiers.map((tier, index) => (
                  <React.Fragment key={tier.card.title}>
                    {index > 0 && <FlowArrow narrow />}
                    <Column $flex={tier.flex}>
                      <ColumnContext context={tier.context} />
                      <DiagramCard card={tier.card} />
                      {tier.pipeline && (
                        <Below>
                          <svg
                            viewBox="0 0 16 22"
                            width="16"
                            height="22"
                            fill="none"
                            stroke="#5C7BFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M8 20V3M3 8l5-5 5 5" />
                          </svg>
                          <Pipeline>
                            <svg
                              viewBox="0 0 24 24"
                              width="15"
                              height="15"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 9a9 9 0 0 1-9 9" />
                            </svg>
                            {pipeline.label}
                          </Pipeline>
                          <LogoRow logos={pipeline.logos} />
                        </Below>
                      )}
                    </Column>
                  </React.Fragment>
                ))}
              </Network>
            </Flow>

            <Observability>
              <Signals>
                <SignalsLabel>{observability.label}</SignalsLabel>
                {observability.signals.map((signal) => (
                  <Signal key={signal}>{signal}</Signal>
                ))}
                <SignalArrow aria-hidden="true">→</SignalArrow>
                <Signal $alert>{observability.alert}</Signal>
              </Signals>
              <LogoRow logos={observability.logos} />
            </Observability>
          </Stage>
        </Frame>
      </BandShell>
    </Section>
  );
};

export default InfraDiagram;
