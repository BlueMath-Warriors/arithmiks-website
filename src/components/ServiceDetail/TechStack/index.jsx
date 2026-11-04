import React, { useRef, useState } from "react";
import { BandShell, Eyebrow, Title } from "../../shared/Band/index.styled";
import HeadingText from "../../shared/Band/HeadingText";
import { Section, Head, Tabs, Tab, Panels, Grid, Cell } from "./index.styled";

const NEXT_KEYS = { ArrowRight: 1, ArrowLeft: -1 };

/**
 * "Technologies": tabbed rows of the tools behind the service. Logos live in
 * static/services/stack/<logo>.svg.
 *
 * @param {{ eyebrow: string, title: import("../../shared/Band/HeadingText").HeadingPart[],
 *   groups: { label: string, items: { name: string, logo: string }[] }[] }} props
 */
const TechStack = ({ eyebrow, title, groups }) => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);

  // Arrow keys move between tabs, as the tablist pattern expects.
  const onKeyDown = (event) => {
    const step = NEXT_KEYS[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (active + step + groups.length) % groups.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <Section id="stack" aria-labelledby="stack-h">
      <BandShell>
        <Head data-reveal="">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title id="stack-h">
            <HeadingText parts={title} />
          </Title>
        </Head>

        <div data-reveal="">
          <Tabs role="tablist" aria-label="Technology categories" onKeyDown={onKeyDown}>
            {groups.map((group, index) => (
              <Tab
                key={group.label}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`stack-tab-${index}`}
                aria-selected={index === active}
                aria-controls={`stack-panel-${index}`}
                tabIndex={index === active ? 0 : -1}
                $active={index === active}
                onClick={() => setActive(index)}
              >
                {group.label}
              </Tab>
            ))}
          </Tabs>

          <Panels>
            {groups.map((group, index) => (
              <div
                key={group.label}
                role="tabpanel"
                id={`stack-panel-${index}`}
                aria-labelledby={`stack-tab-${index}`}
                hidden={index !== active}
              >
                <Grid>
                  {group.items.map((item) => (
                    <Cell key={item.name}>
                      <img
                        src={`/services/stack/${item.logo}.svg`}
                        alt=""
                        width="44"
                        height="44"
                        loading="lazy"
                        decoding="async"
                      />
                      <span>{item.name}</span>
                    </Cell>
                  ))}
                </Grid>
              </div>
            ))}
          </Panels>
        </div>
      </BandShell>
    </Section>
  );
};

export default TechStack;
