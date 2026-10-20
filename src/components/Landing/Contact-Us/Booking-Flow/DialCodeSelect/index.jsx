import React, { useEffect, useRef, useState } from "react";
import "react-phone-input-2/lib/high-res.css";
import { DIAL_CODES } from "../constants";
import {
  Wrap,
  Trigger,
  FlagBox,
  Panel,
  SearchBox,
  Empty,
  Option,
  CountryName,
  DialText,
} from "./index.styled";

// The flag sprite ships with react-phone-input-2 (its CSS carries the image);
// its rules only apply inside a .react-tel-input ancestor.
const CountryMark = ({ isoCode }) => (
  <FlagBox className="react-tel-input" aria-hidden="true">
    <div className={`flag ${isoCode.toLowerCase()}`} />
  </FlagBox>
);

/**
 * Country dial-code picker shown in front of the phone input.
 *
 * @param {{ isoCode: string; onChange: (isoCode: string) => void }} props
 */
const DialCodeSelect = ({ isoCode, onChange }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapRef = useRef(null);
  const selected = DIAL_CODES.find(([iso]) => iso === isoCode) || DIAL_CODES[0];

  const term = query.trim().toLowerCase();
  const countries = term
    ? DIAL_CODES.filter(
        ([iso, code, name]) =>
          name.toLowerCase().includes(term) ||
          iso.toLowerCase() === term ||
          code.replace("+", "").startsWith(term.replace("+", "")),
      )
    : DIAL_CODES;

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnOutsideClick = (event) => {
      if (!wrapRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <Wrap ref={wrapRef}>
      <Trigger
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Country dial code"
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <CountryMark isoCode={selected[0]} />
        <span>{selected[1]}</span>
        <svg
          viewBox="0 0 16 16"
          width="12"
          height="12"
          fill="none"
          stroke="#5C6478"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6.5 8 10.5l4-4" />
        </svg>
      </Trigger>
      {open && (
        <Panel role="listbox" aria-label="Country dial codes">
          <SearchBox
            type="text"
            autoFocus
            aria-label="Search countries"
            placeholder="Search country or code"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {countries.length === 0 && <Empty>No matching country</Empty>}
          {countries.map(([iso, code, name]) => (
            <Option
              key={iso}
              type="button"
              role="option"
              aria-selected={iso === isoCode}
              $selected={iso === isoCode}
              onClick={() => {
                onChange(iso);
                setOpen(false);
              }}
            >
              <CountryMark isoCode={iso} />
              <CountryName>{name}</CountryName>
              <DialText>{code}</DialText>
            </Option>
          ))}
        </Panel>
      )}
    </Wrap>
  );
};

export default DialCodeSelect;
