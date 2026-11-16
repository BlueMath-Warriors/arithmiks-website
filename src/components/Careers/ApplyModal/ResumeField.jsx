import React, { useRef } from "react";
import {
  AttachWrap,
  AttachInput,
  AttachHint,
  AttachedFile,
  RemoveFileButton,
  AttachedName,
} from "../../Landing/Contact-Us/Booking-Flow/Step1Form/index.styled";
import { RESUME_EXTENSIONS, RESUME_MAX_MEGABYTES } from "./applicationFields";
import FieldError from "./FieldError";
import { FieldGroup, FieldLabel, TextButton } from "./index.styled";

const ACCEPT = RESUME_EXTENSIONS.map((extension) => `.${extension}`).join(",");
const FORMAT_HINT = `${RESUME_EXTENSIONS.map((extension) => extension.toUpperCase()).join(", ")} · up to ${RESUME_MAX_MEGABYTES} MB`;

/**
 * Required resume picker. Validation lives with the caller so the same rules
 * run for a picked file and on submit.
 *
 * @param {{
 *   id: string;
 *   file: File | null;
 *   error?: string;
 *   onPick: (file: File) => void;
 *   onClear: () => void;
 * }} props
 */
const ResumeField = ({ id, file, error, onPick, onClear }) => {
  const inputRef = useRef(null);

  const clear = () => {
    // Without this, choosing the same file again would not fire a change event.
    if (inputRef.current) inputRef.current.value = "";
    onClear();
  };

  return (
    <FieldGroup>
      <FieldLabel as="span" id={`${id}-label`}>
        Resume <span aria-hidden="true">*</span>
      </FieldLabel>
      <AttachWrap>
        <AttachInput
          ref={inputRef}
          name="resume"
          type="file"
          accept={ACCEPT}
          tabIndex={-1}
          aria-hidden="true"
          onChange={(event) => {
            const picked = event.target.files && event.target.files[0];
            if (picked) onPick(picked);
          }}
        />
        {file ? (
          <AttachedFile>
            <RemoveFileButton type="button" aria-label="Remove resume" onClick={clear}>
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </RemoveFileButton>
            <AttachedName>{file.name}</AttachedName>
          </AttachedFile>
        ) : (
          <TextButton
            id={id}
            type="button"
            aria-labelledby={`${id}-label`}
            aria-describedby={`${id}-hint ${id}-error`}
            data-invalid={error ? "true" : undefined}
            onClick={() => inputRef.current?.click()}
          >
            + Choose file
          </TextButton>
        )}
        <AttachHint id={`${id}-hint`}>{FORMAT_HINT}</AttachHint>
      </AttachWrap>
      <FieldError id={`${id}-error`} message={error} />
    </FieldGroup>
  );
};

export default ResumeField;
