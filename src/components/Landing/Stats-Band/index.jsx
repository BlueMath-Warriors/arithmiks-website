import React from "react";
import { useCountUp } from "../../../hooks/useCountUp";
import {
  Section,
  Shell,
  Grid,
  Heading,
  Description,
  StatRow,
  StatCell,
  StatNumber,
  StatSuffix,
  StatLabel,
} from "./index.styled";

// Source's own code comment: "Honest placeholders for a ~9-person studio —
// no invented scale claims." Shipped as-is per product decision.
const STATS = [
  { value: 10, suffix: "+", label: "Products shipped" },
  { value: 4, suffix: "", label: "Industries served" },
  { value: 100, suffix: "%", label: "Customer-centric delivery" },
  { value: 24, suffix: "h", label: "Avg. response time" },
];

const StatCellItem = ({ value, suffix, label }) => {
  const ref = useCountUp(value);
  return (
    <StatCell>
      <div>
        <StatNumber ref={ref}>0</StatNumber>
        <StatSuffix>{suffix}</StatSuffix>
      </div>
      <StatLabel>{label}</StatLabel>
    </StatCell>
  );
};

const StatsBand = () => (
  <Section aria-labelledby="stats-h">
    <Shell>
      <Grid>
        <Heading id="stats-h">Partnering on your AI journey.</Heading>
        <Description>
          We work as one team with yours — validating what your data can support
          before committing to a build, then shipping in stages you can inspect.
          Small studio, senior hands, no layers between you and the engineers.
        </Description>
      </Grid>
      <StatRow>
        {STATS.map((s) => (
          <StatCellItem key={s.label} {...s} />
        ))}
      </StatRow>
    </Shell>
  </Section>
);

export default StatsBand;
