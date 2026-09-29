import React, { useRef } from "react";
import useReveal from "../../../../hooks/useReveal";
import { GradientText, Shell } from "../../../shared/Section/index.styled";
import { SectionEyebrow, SectionHeading } from "../layout.styled";
import { splitHeading } from "../heading";
import useFlowFit from "./useFlowFit";
import { FlowSection, FlowHead, Description, Diagram, DiagramGlow, DiagramLayout } from "./index.styled";

/**
 * "How it works" band around a page-specific pipeline diagram (`children`).
 * The diagram is fitted to the container by useFlowFit.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string | { plain: string; highlight: string }} props.heading
 * @param {React.ReactNode} props.description
 * @param {React.ReactNode} props.children the diagram markup
 */
const Flow = ({ label = "The flow", heading, description, children }) => {
  const rootRef = useRef(null);
  useReveal(rootRef);
  useFlowFit(rootRef);
  const { plain, highlight } = splitHeading(heading);

  return (
    <FlowSection id="flow" aria-labelledby="flow-heading" ref={rootRef}>
      <Shell>
        <div data-reveal="">
          <SectionEyebrow>{label}</SectionEyebrow>
          <FlowHead>
            <SectionHeading id="flow-heading">
              {plain} <GradientText>{highlight}</GradientText>
            </SectionHeading>
            <Description>{description}</Description>
          </FlowHead>
        </div>
        <Diagram data-reveal="" data-diagram="">
          <DiagramGlow aria-hidden="true" />
          <DiagramLayout>{children}</DiagramLayout>
        </Diagram>
      </Shell>
    </FlowSection>
  );
};

export default Flow;
