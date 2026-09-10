import React from "react";
import { Pill } from "./index.styled";

/** Small uppercase monospace tag — location/employment-type badge shared by RoleCard and JobListItem. */
const TagPill = ({ children }) => <Pill>{children}</Pill>;

export default TagPill;
