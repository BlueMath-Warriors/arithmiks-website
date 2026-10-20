import React from "react";
import { Shell } from "../../shared/Section/index.styled";
import { HERO_STATS } from "../../../constants/industries";
import StatFigure from "./StatFigure";
import { Section, Wash, Head, Title, Lede, Stats, Stat, StatValue, StatUnit, StatLabel } from "./index.styled";

const Glance = () => (
  <Section id="glance" aria-labelledby="glance-h">
    <Wash aria-hidden="true" />
    <Shell data-shell="">
      <Head>
        <Title id="glance-h">Built for the way your industry works.</Title>
        <Lede>
          We start from the workflows, data and rules your sector already runs on, then prove the idea
          against your own data before we build. The same senior team takes it from a pilot to a system
          in production.
        </Lede>
      </Head>
      <Stats data-stagger="up">
        {HERO_STATS.map((stat) => (
          <Stat key={stat.label} data-reveal="">
            <StatLabel>{stat.label}</StatLabel>
            <StatValue>
              <StatFigure value={stat.value} text={stat.text} />
              {stat.suffix && <StatUnit>{stat.suffix}</StatUnit>}
            </StatValue>
          </Stat>
        ))}
      </Stats>
    </Shell>
  </Section>
);

export default Glance;
