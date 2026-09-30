import React, { useEffect, useRef, useState } from "react";
import { DIAL_CODES, FLAG_ISO_CODES, flagSource } from "../constants";
import {
  Wrap,
  Trigger,
  Flag,
  IsoBadge,
  Panel,
  Option,
  CountryName,
  DialText,
} from "./index.styled";

const CountryMark = ({ isoCode }) =>
  FLAG_ISO_CODES.includes(isoCode) ? (
    <Flag src={flagSource(isoCode)} alt="" />
  ) : (
    <IsoBadge>{isoCode}</IsoBadge>
  );

/**
 * Country dial-code picker shown in front of the phone input.
 *
 * @param {{ isoCode: string; onChange: (isoCode: string) => void }} props
 */
const DialCodeSelect = ({ isoCode, onChange }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const selected = DIAL_CODES.find(([iso]) => iso === isoCode) || DIAL_CODES[0];

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
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="#5C6478" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 6.5 8 10.5l4-4" />
        </svg>
      </Trigger>
      {open && (
        <Panel role="listbox" aria-label="Country dial codes">
          {DIAL_CODES.map(([iso, code, name]) => (
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
