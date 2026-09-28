import React from "react";
import { INDUSTRIES } from "../../../constants/industries";
import MosaicTile from "./MosaicTile";
import { Mosaic, MosaicColumn, MosaicTrack } from "./index.styled";

const COLUMN_COUNT = 2;

const entries = INDUSTRIES.map((industry, index) => ({ industry, index }));

// Industries alternate between the two columns.
const columns = Array.from({ length: COLUMN_COUNT }, (_, columnIndex) =>
  entries.filter(({ index }) => index % COLUMN_COUNT === columnIndex)
);

const HeroMosaic = ({ onSelectIndustry }) => (
  <Mosaic aria-label="Industries we've worked in">
    {columns.map((columnEntries, columnIndex) => (
      <MosaicColumn key={columnIndex}>
        {/* The track holds two copies so the marquee loops seamlessly; the second is hidden from assistive tech and the tab order. */}
        <MosaicTrack $isReversed={columnIndex % 2 === 1}>
          {[false, true].flatMap((isDuplicate) =>
            columnEntries.map(({ industry, index }) => (
              <MosaicTile
                key={`${industry.key}-${isDuplicate ? "copy" : "original"}`}
                industry={industry}
                isDuplicate={isDuplicate}
                onSelect={() => onSelectIndustry(index)}
              />
            ))
          )}
        </MosaicTrack>
      </MosaicColumn>
    ))}
  </Mosaic>
);

export default HeroMosaic;
