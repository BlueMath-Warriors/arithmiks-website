import React from "react";
import { Tile, TileNumber, TileIcon, TileTitle, TileText, TileSource } from "./index.styled";

/**
 * @param {{ tile: { n: string, icon: string, title: string, text: string, wide?: boolean,
 *   source?: { name: string, date: string, url: string } } }} props
 */
const FitTile = ({ tile }) => (
  <Tile data-reveal="" $wide={tile.wide}>
    <TileNumber aria-hidden="true">{tile.n}</TileNumber>
    <TileIcon>
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="#1355FF"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={tile.icon} />
      </svg>
    </TileIcon>
    <TileTitle>{tile.title}</TileTitle>
    <TileText>{tile.text}</TileText>
    {tile.source && (
      <TileSource href={tile.source.url} target="_blank" rel="noopener noreferrer">
        <span>{tile.source.name}</span>
        {tile.source.date} <span aria-hidden="true">↗</span>
      </TileSource>
    )}
  </Tile>
);

export default FitTile;
