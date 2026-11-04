import React from "react";
import { Chevron } from "./index.styled";

/** The down-arrow on an accordion row; it flips when the row is open. */
const AccordionChevron = ({ open }) => (
  <Chevron
    $open={open}
    viewBox="0 0 16 16"
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m4 6 4 4 4-4" />
  </Chevron>
);

export default AccordionChevron;
