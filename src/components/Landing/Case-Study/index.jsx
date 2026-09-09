import React from "react";
import LandingGrid from "./Landing-Grid";
import { caseStudies } from "./caseStudies";

/**
 * The homepage's pinned case-study rail. The /case-studies listing that this
 * component used to render as well now lives in components/CaseStudiesIndex.
 */
const CaseStudy = () => <LandingGrid caseStudies={caseStudies} />;

export default CaseStudy;
