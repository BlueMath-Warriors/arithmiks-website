import React, { useRef } from "react";
import { TabList, Tab } from "./index.styled";

/** @param {number} index */
export const categoryTabId = (index) => `tool-tab-${index}`;

/**
 * The category filter as an ARIA tablist: one tab stop, with arrow keys,
 * Home and End moving the selection.
 *
 * @param {{ tabs: string[], activeIndex: number, onSelect: (index: number) => void,
 *   panelId: string }} props
 */
const CategoryTabs = ({ tabs, activeIndex, onSelect, panelId }) => {
  const tabRefs = useRef([]);
  const lastIndex = tabs.length - 1;

  const onKeyDown = (event) => {
    const target = {
      ArrowRight: activeIndex === lastIndex ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? lastIndex : activeIndex - 1,
      Home: 0,
      End: lastIndex,
    }[event.key];
    if (target === undefined) return;
    event.preventDefault();
    onSelect(target);
    tabRefs.current[target]?.focus();
  };

  return (
    <TabList role="tablist" aria-label="Tool categories" onKeyDown={onKeyDown}>
      {tabs.map((name, index) => {
        const selected = index === activeIndex;
        return (
          <Tab
            key={name}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={categoryTabId(index)}
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            $selected={selected}
            onClick={() => onSelect(index)}
          >
            {name}
          </Tab>
        );
      })}
    </TabList>
  );
};

export default CategoryTabs;
