import React from "react";
import VoiceCard from "../shared/VoiceCard";
import { VOICES } from "../../constants/voices";
import { Shell, GradientText } from "../shared/Section/index.styled";
import {
  Section,
  GlowClip,
  Glow,
  EyebrowRow,
  EyebrowBar,
  EyebrowLabel,
  Title,
  Intro,
  Grid,
} from "./index.styled";

const Clients = () => (
  <Section id="top" aria-labelledby="clients-h">
    <GlowClip aria-hidden="true">
      <Glow />
    </GlowClip>
    <Shell data-shell="">
      <EyebrowRow>
        <EyebrowBar aria-hidden="true" />
        <EyebrowLabel>Clients</EyebrowLabel>
      </EyebrowRow>
      <Title id="clients-h">
        The teams we <GradientText $onDark>build with</GradientText>
      </Title>
      <Intro>
        Founders and product leads who trusted us with something that mattered. Their words, and
        the work behind them.
      </Intro>
      <Grid>
        {VOICES.map((voice) => (
          <VoiceCard key={voice.slug} voice={voice} />
        ))}
      </Grid>
    </Shell>
  </Section>
);

export default Clients;
