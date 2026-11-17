import React from "react";
import { TextInput } from "../../Landing/Contact-Us/Booking-Flow/Step1Form/index.styled";
import { LINK_MAX_LENGTH, MAX_LINKS } from "./applicationFields";
import FieldError from "./FieldError";
import { FieldGroup, FieldLabel, LinkRow, OptionalNote, RemoveLinkButton, TextButton } from "./index.styled";

/**
 * Up to MAX_LINKS optional links (portfolio, LinkedIn, GitHub). Blank rows are
 * ignored on submit.
 *
 * @param {{
 *   idPrefix: string;
 *   links: { id: number; value: string }[];
 *   error?: string;
 *   onChange: (id: number, value: string) => void;
 *   onAdd: () => void;
 *   onRemove: (id: number) => void;
 * }} props
 */
const LinksField = ({ idPrefix, links, error, onChange, onAdd, onRemove }) => (
  <FieldGroup>
    <FieldLabel htmlFor={`${idPrefix}-link-${links[0].id}`}>
      Links <OptionalNote>(optional · portfolio, LinkedIn, GitHub)</OptionalNote>
    </FieldLabel>
    {links.map((link, index) => (
      <LinkRow key={link.id}>
        <TextInput
          id={`${idPrefix}-link-${link.id}`}
          name="links"
          type="url"
          inputMode="url"
          autoComplete="off"
          maxLength={LINK_MAX_LENGTH}
          placeholder="https://"
          aria-label={`Link ${index + 1}`}
          aria-describedby={`${idPrefix}-links-error`}
          aria-invalid={Boolean(error)}
          $invalid={Boolean(error)}
          value={link.value}
          onChange={(event) => onChange(link.id, event.target.value)}
        />
        {links.length > 1 && (
          <RemoveLinkButton type="button" aria-label={`Remove link ${index + 1}`} onClick={() => onRemove(link.id)}>
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </RemoveLinkButton>
        )}
      </LinkRow>
    ))}
    {links.length < MAX_LINKS && (
      <TextButton type="button" onClick={onAdd}>
        + Add another link
      </TextButton>
    )}
    <FieldError id={`${idPrefix}-links-error`} message={error} />
  </FieldGroup>
);

export default LinksField;
