import React, { useRef } from "react";
import { Page } from "../shared/Band/index.styled";
import Faq from "../shared/Faq";
import ScrollProgress from "../shared/ScrollProgress";
import { useReveal } from "../../hooks/useReveal";
import Catalog from "./Catalog";
import { TOOLS_FAQ } from "./content";

/** The /tools page body: the filterable tool catalogue, then the FAQ. */
const ToolsOverview = () => {
  const revealRef = useRef(null);
  useReveal(revealRef);

  return (
    <Page ref={revealRef}>
      <ScrollProgress />
      <Catalog />
      <Faq title={TOOLS_FAQ.title} note={TOOLS_FAQ.note} items={TOOLS_FAQ.items} />
    </Page>
  );
};

export default ToolsOverview;
