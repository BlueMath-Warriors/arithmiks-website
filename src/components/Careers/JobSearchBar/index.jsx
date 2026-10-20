import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  FieldGroup,
  FieldWrap,
  FieldIcon,
  InlineIcon,
  Input,
  DropdownButton,
  DropdownLabel,
  Chevron,
  DropdownPanel,
  DropdownOption,
  SubmitButton,
} from "./index.styled";

const SearchIcon = (props) => (
  <FieldIcon viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="#5C6478" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" {...props}>
    <circle cx="8.6" cy="8.6" r="5.4" />
    <path d="m12.8 12.8 4 4" />
  </FieldIcon>
);

const TeamIcon = (props) => (
  <FieldIcon viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="#8A93A6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <rect x="2.6" y="6.2" width="14.8" height="10.4" rx="2" />
    <path d="M7.2 6.2V4.9a1.4 1.4 0 0 1 1.4-1.4h2.8a1.4 1.4 0 0 1 1.4 1.4v1.3" />
    <path d="M2.6 10.6h14.8" />
  </FieldIcon>
);

const LocationIcon = (props) => (
  <FieldIcon viewBox="0 0 20 20" width="17" height="17" fill="none" stroke="#8A93A6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <circle cx="10" cy="10" r="7.1" />
    <path d="m12.9 7.1-1.6 4.2-4.2 1.6 1.6-4.2 4.2-1.6Z" />
  </FieldIcon>
);

const ChevronIcon = (props) => (
  <Chevron viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="#5C6478" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    <path d="m4 6 4 4 4-4" />
  </Chevron>
);

/**
 * A single-select field that opens/closes as a controlled dropdown — shared
 * shape for the Team and Location filters, closes on outside click/Escape.
 */
const SelectField = ({ variant, label, icon, options, value, onChange, ariaLabel, divider }) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (event) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) setOpen(false);
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <FieldWrap ref={wrapRef} $variant={variant} $divider={divider}>
      {icon}
      <DropdownButton
        type="button"
        $variant={variant}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
      >
        <DropdownLabel $variant={variant} $active={value !== null}>
          {value || label}
        </DropdownLabel>
        <ChevronIcon $open={open} />
      </DropdownButton>
      <DropdownPanel $open={open} role="listbox" aria-label={ariaLabel}>
        <DropdownOption
          type="button"
          role="option"
          aria-selected={value === null}
          $selected={value === null}
          onClick={() => {
            onChange(null);
            setOpen(false);
          }}
        >
          {label}
        </DropdownOption>
        {options.map((option) => (
          <DropdownOption
            key={option}
            type="button"
            role="option"
            aria-selected={value === option}
            $selected={value === option}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option}
          </DropdownOption>
        ))}
      </DropdownPanel>
    </FieldWrap>
  );
};

/**
 * @param {{
 *   variant?: "hero" | "light";
 *   teamOptions: string[];
 *   locationOptions: string[];
 *   initialKeyword?: string;
 *   initialTeam?: string | null;
 *   initialLocation?: string | null;
 *   onSubmit: (filters: { keyword: string; team: string | null; location: string | null }) => void;
 * }} props
 */
const JobSearchBar = ({
  variant = "hero",
  teamOptions,
  locationOptions,
  initialKeyword = "",
  initialTeam = null,
  initialLocation = null,
  onSubmit,
}) => {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [team, setTeam] = useState(initialTeam);
  const [location, setLocation] = useState(initialLocation);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ keyword: keyword.trim(), team, location });
  };

  return (
    <Form $variant={variant} onSubmit={handleSubmit} role="search">
      <FieldGroup $variant={variant}>
        <FieldWrap $variant={variant} $divider $grow>
          <SearchIcon $variant={variant} $inline={variant === "light"} />
          <Input
            $variant={variant}
            type="text"
            name="keyword"
            placeholder="Role, skill or keyword"
            aria-label="Role, skill or keyword"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
        </FieldWrap>
        <SelectField
          variant={variant}
          label="All teams"
          ariaLabel="Team"
          icon={<TeamIcon $variant={variant} />}
          options={teamOptions}
          value={team}
          onChange={setTeam}
          divider
        />
        <SelectField
          variant={variant}
          label="All locations"
          ariaLabel="Location"
          icon={<LocationIcon $variant={variant} />}
          options={locationOptions}
          value={location}
          onChange={setLocation}
        />
      </FieldGroup>
      <SubmitButton type="submit" $variant={variant}>
        {variant === "light" && (
          <InlineIcon viewBox="0 0 20 20" width="15" height="15" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <circle cx="8.6" cy="8.6" r="5.4" />
            <path d="m12.8 12.8 4 4" />
          </InlineIcon>
        )}
        Search jobs
      </SubmitButton>
    </Form>
  );
};

export default JobSearchBar;
