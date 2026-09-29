import React from "react";
import { colors } from "../../../styles/tokens";
import IndustryIcon from "../IndustryIcon";
import { Tile, TileShade, TileLabel, TileLabelText } from "./index.styled";

const LABEL_ICON_SIZE = 12;

const MosaicTile = ({ industry, isDuplicate, onSelect }) => (
  <Tile
    type="button"
    aria-label={`${industry.name}: see how AI helped ${industry.cases[0].client}`}
    aria-hidden={isDuplicate || undefined}
    tabIndex={isDuplicate ? -1 : 0}
    onClick={onSelect}
  >
    <img src={industry.photo} alt="" decoding="async" />
    <TileShade aria-hidden="true" />
    <TileLabel>
      <IndustryIcon path={industry.iconPath} size={LABEL_ICON_SIZE} color={colors.primary} />
      <TileLabelText>{industry.name}</TileLabelText>
    </TileLabel>
  </Tile>
);

export default MosaicTile;
