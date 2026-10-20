import React from "react";
import { Shell, Eyebrow, GradientText } from "../../shared/Section/index.styled";
import IndustryTabs from "./IndustryTabs";
import IndustryPanel from "./IndustryPanel";
import { Section, Header, Title, Lede, Layout } from "./index.styled";

const Explorer = ({ explorer }) => (
  <Section id="industries" aria-labelledby="exp-h">
    <Shell data-shell="">
      <Header data-reveal="">
        <div>
          <Eyebrow>Industry by industry</Eyebrow>
          <Title id="exp-h">
            Where <GradientText>AI made the difference.</GradientText>
          </Title>
        </div>
        <Lede>Pick an industry to see the problem, what the AI does, and the result it delivered.</Lede>
      </Header>

      <Layout data-stagger="up">
        <IndustryTabs selectedIndex={explorer.industryIndex} onSelect={explorer.selectIndustry} />
        <IndustryPanel explorer={explorer} />
      </Layout>
    </Shell>
  </Section>
);

export default Explorer;
