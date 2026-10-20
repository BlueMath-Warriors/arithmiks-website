import React from "react";
import { ROLE_OPTIONS } from "../constants";
import { RoleGroup, RoleLabel, RoleChipRow, RoleChip } from "./index.styled";

/**
 * Optional single-choice role picker; choosing the selected chip again clears it.
 *
 * @param {{ value: string; onChange: (role: string) => void }} props
 */
const RoleChips = ({ value, onChange }) => (
  <RoleGroup role="radiogroup" aria-label="My role (optional)">
    <RoleLabel>
      My role <span>(optional)</span>
    </RoleLabel>
    <RoleChipRow>
      {ROLE_OPTIONS.map((role) => (
        <RoleChip
          key={role}
          type="button"
          role="radio"
          aria-checked={role === value}
          $selected={role === value}
          onClick={() => onChange(role === value ? "" : role)}
        >
          {role}
        </RoleChip>
      ))}
    </RoleChipRow>
  </RoleGroup>
);

export default RoleChips;
