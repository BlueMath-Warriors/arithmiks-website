import React, { useEffect, useRef } from "react";
import { INDUSTRIES } from "../../../constants/industries";
import { colors } from "../../../styles/tokens";
import IndustryIcon from "../IndustryIcon";
import { PANEL_ID, tabId } from "./domIds";
import { TabList, TabSlot, Tab, TabIcon, TabText, TabName, TabCaption } from "./index.styled";

const INACTIVE_ICON_COLOR = colors.textFaint;

const IndustryTabs = ({ selectedIndex, onSelect }) => {
  const listRef = useRef(null);
  const tabRefs = useRef([]);

  // When the tabs sit in a horizontal strip, keep the chosen one in view.
  useEffect(() => {
    const list = listRef.current;
    const tab = tabRefs.current[selectedIndex];
    if (!list || !tab || list.scrollWidth <= list.clientWidth + 2) return;
    const listBox = list.getBoundingClientRect();
    const tabBox = tab.getBoundingClientRect();
    list.scrollLeft += tabBox.left - listBox.left - (listBox.width - tabBox.width) / 2;
  }, [selectedIndex]);

  const handleKeyDown = (event) => {
    const count = INDUSTRIES.length;
    const next = (selectedIndex + 1) % count;
    const previous = (selectedIndex - 1 + count) % count;
    const targets = {
      ArrowDown: next,
      ArrowRight: next,
      ArrowUp: previous,
      ArrowLeft: previous,
      Home: 0,
      End: count - 1,
    };
    const target = targets[event.key];
    if (target === undefined) return;
    event.preventDefault();
    onSelect(target);
    requestAnimationFrame(() => tabRefs.current[target]?.focus({ preventScroll: true }));
  };

  return (
    <TabList ref={listRef} data-stagger="" role="tablist" aria-label="Industries" onKeyDown={handleKeyDown}>
      {INDUSTRIES.map((industry, index) => {
        const isSelected = index === selectedIndex;
        return (
          <TabSlot key={industry.key} data-reveal="" role="presentation">
            <Tab
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={tabId(industry.key)}
              aria-selected={isSelected}
              aria-controls={PANEL_ID}
              tabIndex={isSelected ? 0 : -1}
              $selected={isSelected}
              onClick={() => onSelect(index)}
            >
              <TabIcon $selected={isSelected}>
                <IndustryIcon
                  path={industry.iconPath}
                  size={18}
                  color={isSelected ? colors.primary : INACTIVE_ICON_COLOR}
                />
              </TabIcon>
              <TabText>
                <TabName $selected={isSelected}>{industry.name}</TabName>
                <TabCaption>{industry.cases[0].capability}</TabCaption>
              </TabText>
            </Tab>
          </TabSlot>
        );
      })}
    </TabList>
  );
};

export default IndustryTabs;
