import React, { useEffect, useRef } from "react";
import {
  Wrap,
  Pill,
  ClearBadge,
  PillLabel,
  Chevron,
  Panel,
  Option,
  CheckBox,
} from "./index.styled";

const TickIcon = () => (
  <svg
    viewBox="0 0 16 16"
    width="11"
    height="11"
    fill="none"
    stroke="#fff"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m3 8.2 3.2 3.2L13 4.6" />
  </svg>
);

const CrossIcon = () => (
  <svg
    viewBox="0 0 16 16"
    width="9"
    height="9"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
);

/**
 * Multi-select filter pill with a checkbox listbox. Open state is controlled by
 * the parent so that only one dropdown on the page can be open at a time.
 *
 * @param {{
 *   label: string;
 *   options: string[];
 *   selected: string[];
 *   open: boolean;
 *   onToggleOpen: () => void;
 *   onClose: () => void;
 *   onToggleOption: (value: string) => void;
 *   onClear: () => void;
 * }} props
 */
const FilterDropdown = ({
  label,
  options,
  selected,
  open,
  onToggleOpen,
  onClose,
  onToggleOption,
  onClear,
}) => {
  const wrapRef = useRef(null);
  const isActive = selected.length > 0;

  useEffect(() => {
    if (!open) return undefined;

    const handlePointerDown = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) onClose();
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  // The pill shows the first selection, then "+N" for the rest.
  const pillText = !isActive
    ? label
    : selected.length === 1
    ? selected[0]
    : `${selected[0]}  +${selected.length}`;

  return (
    <Wrap ref={wrapRef}>
      {isActive && (
        <ClearBadge
          type="button"
          aria-label={`Clear ${label.toLowerCase()} filter`}
          onClick={onClear}
        >
          <CrossIcon />
        </ClearBadge>
      )}
      <Pill
        type="button"
        $active={isActive}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={onToggleOpen}
      >
        <PillLabel $active={isActive}>{pillText}</PillLabel>
        <Chevron
          $open={open}
          viewBox="0 0 16 16"
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6.5 8 10.5l4-4" />
        </Chevron>
      </Pill>
      <Panel $open={open} role="listbox" aria-multiselectable="true" aria-label={label}>
        {options.map((option) => {
          const checked = selected.includes(option);
          return (
            <Option
              key={option}
              type="button"
              role="option"
              aria-selected={checked}
              onClick={() => onToggleOption(option)}
            >
              <CheckBox $checked={checked}>{checked && <TickIcon />}</CheckBox>
              {option}
            </Option>
          );
        })}
      </Panel>
    </Wrap>
  );
};

export default FilterDropdown;
