import React from "react";
import { Grad, KeepLine } from "./index.styled";

/**
 * A heading's text as content data: plain strings, `{ grad }` runs set in the
 * brand gradient, `{ br: true }` line breaks, and `{ keep, above }` runs held on
 * one line on viewports wider than `above` px (a `grad` run takes `above` too)
 * — the shapes band titles in these designs take.
 *
 * @typedef {string | { grad: string, above?: number } | { br: true }
 *   | { keep: string, above: number }} HeadingPart
 * @param {{ parts: HeadingPart[], onDark?: boolean }} props
 */
const HeadingText = ({ parts, onDark = false }) =>
  parts.map((part, index) => {
    if (typeof part === "string") return <React.Fragment key={index}>{part}</React.Fragment>;
    if (part.br) return <br key={index} />;
    if (part.keep) {
      return (
        <KeepLine key={index} $above={part.above}>
          {part.keep}
        </KeepLine>
      );
    }
    return (
      <Grad key={index} $onDark={onDark} $keepAbove={part.above}>
        {part.grad}
      </Grad>
    );
  });

export default HeadingText;
