import React from "react";
import { Tile, TileNumber, TileIcon, TileTitle, TileText, TileSource } from "./index.styled";

/**
 * @param {{ tile: { n: string, icon: string, title: string, text: string, wide?: boolean,
 *   fullTitle?: boolean, source?: { name: string, date: string, url: string } },
 *   asHeadings?: boolean }} props
 *   fullTitle: let the title run the tile's width instead of a 26ch measure;
 *   asHeadings: render the title as an h3 and the text as a paragraph.
 */
const FitTile = ({ tile, asHeadings = false }) => (
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
    <TileTitle as={asHeadings ? "h3" : undefined} $full={tile.fullTitle}>
      {tile.title}
    </TileTitle>
    <TileText as={asHeadings ? "p" : undefined}>{tile.text}</TileText>
    {tile.source && (
      <TileSource href={tile.source.url} target="_blank" rel="noopener noreferrer">
        <span>{tile.source.name}</span>
        {tile.source.date} <span aria-hidden="true">↗</span>
      </TileSource>
    )}
  </Tile>
);

export default FitTile;
