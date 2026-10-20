import React from "react";
import { Shell } from "../../shared/Section/index.styled";
import LinkGroup from "./LinkGroup";
import { useSitemapColumns } from "./useSitemapColumns";
import { Section, Columns, Column } from "./index.styled";

const LinkMap = () => {
  const columns = useSitemapColumns();

  return (
    <Section id="map" aria-label="All pages">
      <Shell data-shell="">
        <Columns>
          {columns.map((blocks, columnIndex) => (
            <Column key={columnIndex}>
              {blocks.map((block) => (
                <LinkGroup key={block.id} block={block} />
              ))}
            </Column>
          ))}
        </Columns>
      </Shell>
    </Section>
  );
};

export default LinkMap;
