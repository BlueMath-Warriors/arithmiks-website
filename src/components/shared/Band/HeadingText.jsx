import React from "react";
import { Grad } from "./index.styled";

/**
 * A heading's text as content data: plain strings, `{ grad }` runs set in the
 * brand gradient, and `{ br: true }` line breaks — the shape every band title
 * in these designs takes.
 *
 * @typedef {string | { grad: string } | { br: true }} HeadingPart
 * @param {{ parts: HeadingPart[], onDark?: boolean }} props
 */
const HeadingText = ({ parts, onDark = false }) =>
  parts.map((part, index) => {
    if (typeof part === "string") return <React.Fragment key={index}>{part}</React.Fragment>;
    if (part.br) return <br key={index} />;
    return (
      <Grad key={index} $onDark={onDark}>
        {part.grad}
      </Grad>
    );
  });

export default HeadingText;
