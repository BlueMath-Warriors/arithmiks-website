import React from "react";
import { InputRow, FieldWrap, Input, ClearButton, GoButton } from "./index.styled";

const SearchIcon = ({ stroke, strokeWidth }) => (
  <svg
    viewBox="0 0 20 20"
    width="18"
    height="18"
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="8.8" cy="8.8" r="5.3" />
    <path d="m12.7 12.7 4 4" />
  </svg>
);

/**
 * The header search box, shared by the overlay and the /search page so both
 * look and behave the same. Submitting is left to the caller.
 *
 * @param {{
 *   value: string;
 *   onChange: (value: string) => void;
 *   onSubmit: () => void;
 *   inputRef?: React.Ref<HTMLInputElement>;
 * }} props
 */
const SearchField = ({ value, onChange, onSubmit, inputRef }) => (
  <InputRow
    as="form"
    role="search"
    onSubmit={(event) => {
      event.preventDefault();
      onSubmit();
    }}
  >
    <FieldWrap>
      <SearchIcon stroke="#5C6478" strokeWidth="1.8" />
      <Input
        ref={inputRef}
        type="search"
        aria-label="Search Arithmiks"
        placeholder="Search services, case studies, resources…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {value && (
        <ClearButton
          type="button"
          aria-label="Clear search"
          onClick={() => {
            onChange("");
            inputRef?.current?.focus();
          }}
        >
          <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" />
          </svg>
        </ClearButton>
      )}
    </FieldWrap>
    <GoButton type="submit">
      <SearchIcon stroke="currentColor" strokeWidth="1.9" />
      Search
    </GoButton>
  </InputRow>
);

export default SearchField;
