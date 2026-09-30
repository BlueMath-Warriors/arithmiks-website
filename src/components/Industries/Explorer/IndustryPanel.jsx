import React from "react";
import { colors } from "../../../styles/tokens";
import IndustryIcon from "../IndustryIcon";
import CaseCard from "./CaseCard";
import CaseDots from "./CaseDots";
import { PANEL_ID, tabId } from "./domIds";
import {
  PanelSlot,
  Panel,
  Split,
  Story,
  ChipRow,
  IndustryChip,
  CapabilityChip,
  Headline,
  StoryLabel,
  StoryText,
  DoesItem,
  DoesNumber,
  DoesText,
  CaseColumn,
} from "./index.styled";

const IndustryPanel = ({ explorer }) => {
  const {
    industry,
    activeCase,
    caseIndex,
    fadeScope,
    isPanelOffscreen,
    panelRef,
    caseImageRef,
    selectCase,
    showNextCase,
  } = explorer;
  const hasSeveralCases = industry.cases.length > 1;

  return (
    <PanelSlot data-reveal="">
      <Panel
        ref={panelRef}
        id={PANEL_ID}
        role="tabpanel"
        aria-labelledby={tabId(industry.key)}
        data-offscreen={isPanelOffscreen ? "" : undefined}
        $isFaded={fadeScope === "panel"}
      >
        <Split $isFaded={fadeScope === "split"}>
          <Story>
            <div>
              <ChipRow>
                <IndustryChip>
                  <IndustryIcon path={industry.iconPath} size={15} color={colors.primary} />
                  {industry.name}
                </IndustryChip>
                <CapabilityChip>{activeCase.capability}</CapabilityChip>
              </ChipRow>
              <Headline>{activeCase.headline}</Headline>
            </div>
            <div>
              <StoryLabel $spacing={10}>The industry problem</StoryLabel>
              <StoryText>{activeCase.context}</StoryText>
            </div>
            <div>
              <StoryLabel $spacing={6}>What the AI does</StoryLabel>
              {activeCase.does.map((action, index) => (
                <DoesItem key={action}>
                  <DoesNumber>{`0${index + 1}`}</DoesNumber>
                  <DoesText>{action}</DoesText>
                </DoesItem>
              ))}
            </div>
          </Story>
          <CaseColumn>
            <CaseCard caseStudy={activeCase} imageRef={caseImageRef} />
            {hasSeveralCases && (
              <CaseDots
                cases={industry.cases}
                currentIndex={caseIndex}
                onSelect={selectCase}
                onCurrentFillEnd={showNextCase}
              />
            )}
          </CaseColumn>
        </Split>
      </Panel>
    </PanelSlot>
  );
};

export default IndustryPanel;
