import React, { useRef } from "react";
import { ATTACHMENT_EXTENSIONS, ATTACHMENT_MAX_BYTES } from "../constants";
import {
  AttachWrap,
  AttachInput,
  AttachRow,
  AttachLabel,
  AttachHint,
  AttachedFile,
  RemoveFileButton,
  AttachedName,
  ErrorMessage,
} from "./index.styled";

const MEGABYTE = 1024 * 1024;
const ACCEPT = ATTACHMENT_EXTENSIONS.map((extension) => `.${extension}`).join(",");

/**
 * Optional brief attachment. Validation lives with the caller so the same rules
 * run for a picked file and on submit.
 *
 * @param {{
 *   file: File | null;
 *   error: string;
 *   onPick: (file: File) => void;
 *   onClear: () => void;
 * }} props
 */
const AttachField = ({ file, error, onPick, onClear }) => {
  const inputRef = useRef(null);

  const clear = () => {
    if (inputRef.current) inputRef.current.value = "";
    onClear();
  };

  return (
    <AttachWrap>
      <AttachInput
        ref={inputRef}
        id="contact-attachment"
        name="attachment"
        type="file"
        accept={ACCEPT}
        aria-describedby="contact-attachment-hint contact-attachment-error"
        onChange={(event) => {
          const picked = event.target.files && event.target.files[0];
          if (picked) onPick(picked);
        }}
      />
      {file ? (
        <AttachedFile>
          <RemoveFileButton type="button" aria-label="Remove attachment" onClick={clear}>
            <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 4l8 8M12 4l-8 8" />
            </svg>
          </RemoveFileButton>
          <AttachedName>{file.name}</AttachedName>
        </AttachedFile>
      ) : (
        <AttachRow>
          <AttachLabel
            htmlFor="contact-attachment"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                inputRef.current?.click();
              }
            }}
          >
            + Attach file
          </AttachLabel>
          <AttachHint id="contact-attachment-hint">
            Optional · PDF, DOC, DOCX or PPT, up to {ATTACHMENT_MAX_BYTES / MEGABYTE} MB
          </AttachHint>
        </AttachRow>
      )}
      {error && (
        <ErrorMessage id="contact-attachment-error" role="alert">{`⚠ ${error}`}</ErrorMessage>
      )}
    </AttachWrap>
  );
};

export default AttachField;
