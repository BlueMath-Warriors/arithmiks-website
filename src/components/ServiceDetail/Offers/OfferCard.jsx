import React, { forwardRef } from "react";
import {
  Panel,
  CardGrid,
  Detail,
  Label,
  Chips,
  Chip,
  Deliverables,
  Deliverable,
  DeliverableTitle,
  DeliverableNote,
  Side,
  StageNumber,
  StageTitle,
  StageTag,
  Duration,
  DurationLabel,
  DurationValue,
} from "./index.styled";

const CheckIcon = () => (
  <svg
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="none"
    stroke="#8FA9FF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m3.5 8.4 3 3L12.5 5" />
  </svg>
);

/**
 * One engagement stage on the offers rail.
 *
 * @typedef {{ n: string, icon: string, title: string, tag: string, duration: string,
 *   focusLabel: string, focus: string[], deliverables: { title: string, note: string }[] }} Offer
 * @param {{ offer: Offer, index: number, active: boolean, onSelect: (index: number) => void,
 *   tightOnlyWhenShort?: boolean, sideRowOnNarrow?: boolean }} props
 */
const OfferCard = forwardRef(
  (
    { offer, index, active, onSelect, tightOnlyWhenShort = false, sideRowOnNarrow = false },
    ref,
  ) => {
    const gradientId = `offer-grad-${index}`;
    return (
      <Panel
        ref={ref}
        role="group"
        aria-label={`Stage ${offer.n}: ${offer.title}`}
        $active={active}
        $sideRow={sideRowOnNarrow}
        onClick={() => onSelect(index)}
      >
        <CardGrid $tightOnlyWhenShort={tightOnlyWhenShort} $sideRow={sideRowOnNarrow}>
          <Detail>
            <div>
              <Label>{offer.focusLabel}</Label>
              <Chips>
                {offer.focus.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </Chips>
            </div>
            <div>
              <Label>What you receive</Label>
              <Deliverables>
                {offer.deliverables.map((item) => (
                  <Deliverable key={item.title} $tightOnlyWhenShort={tightOnlyWhenShort}>
                    <CheckIcon />
                    <span>
                      <DeliverableTitle>{item.title}</DeliverableTitle>
                      <DeliverableNote>{item.note}</DeliverableNote>
                    </span>
                  </Deliverable>
                ))}
              </Deliverables>
            </div>
          </Detail>
          <Side $sideRow={sideRowOnNarrow}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id={gradientId}
                  x1="0"
                  y1="0"
                  x2="24"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#7FA6FF" />
                  <stop offset=".5" stopColor="#A96FC8" />
                  <stop offset="1" stopColor="#F56BB0" />
                </linearGradient>
              </defs>
              <path d={offer.icon} />
            </svg>
            <div>
              <StageNumber>STAGE {offer.n}</StageNumber>
              <StageTitle>{offer.title}</StageTitle>
              <StageTag>{offer.tag}</StageTag>
            </div>
            <Duration $sideRow={sideRowOnNarrow}>
              <DurationLabel>Duration</DurationLabel>
              <DurationValue>{offer.duration}</DurationValue>
            </Duration>
          </Side>
        </CardGrid>
      </Panel>
    );
  },
);

OfferCard.displayName = "OfferCard";

export default OfferCard;
