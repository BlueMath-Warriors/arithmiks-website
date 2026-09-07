import React, { useEffect, useRef, useState } from "react";
import {
  Field,
  TextField,
  TextAreaField,
  DropdownButton,
  Chevron,
  DropdownPanel,
  DropdownOption,
  ErrorText,
} from "./index.styled";

/**
 * One shared field component for the booking form, switched by `type`:
 * "text" | "email" | "textarea" render a plain styled input/textarea;
 * "dropdown" renders a custom listbox (button + panel) matching the
 * design's dropdown treatment, instead of a native <select>.
 */
const Input = ({
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  error,
  options,
  rows = 4,
}) => {
  if (type === "dropdown") {
    return (
      <DropdownInput
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
        options={options}
      />
    );
  }

  return (
    <Field>
      {type === "textarea" ? (
        <TextAreaField
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
        />
      ) : (
        <TextField
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
        />
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </Field>
  );
};

const DropdownInput = ({ label, placeholder, value, onChange, error, options }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <Field ref={wrapRef}>
      <DropdownButton
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        $hasValue={Boolean(value)}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{value || placeholder}</span>
        <Chevron
          $open={open}
          viewBox="0 0 16 16"
          width="15"
          height="15"
          fill="none"
          stroke="#5C6478"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6.5 8 10.5l4-4" />
        </Chevron>
      </DropdownButton>
      {open && (
        <DropdownPanel role="listbox">
          {options.map((opt) => (
            <DropdownOption
              key={opt}
              type="button"
              role="option"
              aria-selected={opt === value}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </DropdownOption>
          ))}
        </DropdownPanel>
      )}
      {error && <ErrorText>{error}</ErrorText>}
    </Field>
  );
};

export default Input;
