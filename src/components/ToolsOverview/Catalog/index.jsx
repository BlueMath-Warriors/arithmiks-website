import React, { useState } from "react";
import MeshHeroBackground from "../../shared/MeshHeroBackground";
import { Grad } from "../../shared/Band/index.styled";
import { TOOL_CATALOG, TOOL_CATEGORIES } from "../../../constants/toolCatalog";
import CategoryTabs, { categoryTabId } from "./CategoryTabs";
import ToolCard from "./ToolCard";
import { Section, Shell, Head, Eyebrow, Heading, TabsRow, Grid } from "./index.styled";

const ALL_TOOLS = "All";
const TABS = [ALL_TOOLS, ...TOOL_CATEGORIES];
const PANEL_ID = "tools";

/**
 * The /tools hero: heading, category filter and the tool grid it filters.
 */
const Catalog = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const category = TABS[activeIndex];
  const tools =
    category === ALL_TOOLS
      ? TOOL_CATALOG
      : TOOL_CATALOG.filter((tool) => tool.category === category);

  return (
    <Section id="top">
      <MeshHeroBackground />
      <Shell>
        <Head data-reveal="">
          <Eyebrow>Arithmiks Tools</Eyebrow>
          <Heading>
            Free tools that <Grad>do the work for you</Grad>
          </Heading>
        </Head>

        <TabsRow data-reveal="">
          <CategoryTabs
            tabs={TABS}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            panelId={PANEL_ID}
          />
        </TabsRow>

        <div id={PANEL_ID} role="tabpanel" aria-labelledby={categoryTabId(activeIndex)}>
          <Grid>
            {tools.map((tool) => (
              <ToolCard key={tool.key} tool={tool} />
            ))}
          </Grid>
        </div>
      </Shell>
    </Section>
  );
};

export default Catalog;
