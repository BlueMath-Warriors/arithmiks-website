import React, { useRef } from "react";
import useReveal from "../../../../hooks/useReveal";
import { GradientText, Shell } from "../../../shared/Section/index.styled";
import { SectionEyebrow, SectionHeading } from "../layout.styled";
import { splitHeading } from "../heading";
import {
  TrustSection,
  Glow,
  TrustHead,
  Description,
  CardGrid,
  Card,
  IconTile,
  IconImage,
  CardTitle,
  CardText,
  StatRow,
  Stat,
  StatValue,
  StatLabel,
} from "./index.styled";

const ICON_VIEWBOX = "0 0 24 24";

const CardIcon = ({ solution }) => {
  if (solution.iconPath) {
    return (
      <IconTile>
        <svg
          viewBox={ICON_VIEWBOX}
          width="24"
          height="24"
          fill="none"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d={solution.iconPath} transform={solution.iconTransform} vectorEffect="non-scaling-stroke" />
        </svg>
      </IconTile>
    );
  }
  return <IconImage src={solution.icon} alt="" />;
};

/**
 * Dark "why you can rely on it" band. On pages that call it "Solution" the
 * same three cards describe the solution; the stat row only renders when the
 * page has figures worth showing.
 *
 * @param {Object} props
 * @param {string} props.label eyebrow above the heading
 * @param {string | { plain: string; highlight: string }} props.heading
 * @param {React.ReactNode} props.description
 * @param {{ title: string; detail: string; iconPath?: string; iconTransform?: string; icon?: string }[]} props.solutions
 * @param {{ value: string; label: string }[]} [props.stats]
 */
const Solution = ({
  label = "SOLUTION",
  heading = "Our Solution",
  description,
  solutions = [],
  stats = [],
}) => {
  const rootRef = useRef(null);
  useReveal(rootRef);
  const { plain, highlight } = splitHeading(heading);

  return (
    <TrustSection id="trust" aria-labelledby="trust-heading" ref={rootRef}>
      <Glow aria-hidden="true" />
      <Shell>
        <div data-reveal="">
          <SectionEyebrow $onDark>{label}</SectionEyebrow>
          <TrustHead>
            <SectionHeading id="trust-heading" $onDark>
              {plain} <GradientText $onDark>{highlight}</GradientText>
            </SectionHeading>
            <Description>{description}</Description>
          </TrustHead>
        </div>
        <CardGrid>
          {solutions.map((solution) => (
            <Card key={solution.title} data-reveal="">
              <CardIcon solution={solution} />
              <CardTitle>{solution.title}</CardTitle>
              <CardText>{solution.detail}</CardText>
            </Card>
          ))}
        </CardGrid>
        {stats.length > 0 && (
          <StatRow data-reveal="">
            {stats.map((stat) => (
              <Stat key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </Stat>
            ))}
          </StatRow>
        )}
      </Shell>
    </TrustSection>
  );
};

export default Solution;
