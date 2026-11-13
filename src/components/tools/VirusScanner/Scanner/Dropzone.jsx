import React, { useEffect, useRef, useState } from "react";
import { describeRejection } from "../scanReport";
import {
  HiddenInput,
  Dropzone as Zone,
  DropIcon,
  DropTitle,
  DropNote,
  DropButton,
} from "./index.styled";

const UploadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="none"
    stroke="#fff"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17.5h-.5a4.5 4.5 0 0 1-.7-8.95 6 6 0 0 1 11.6 1.2A3.6 3.6 0 0 1 17 17.5h-.5" />
    <path d="M12 19.5v-8m-3 3 3-3 3 3" />
  </svg>
);

const TITLE_ID = "scan-drop-title";
const NOTE_ID = "scan-drop-note";

/**
 * The idle scan card: drop a file, or click / press Enter or Space to browse.
 *
 * @param {{ rejection: string | null, onPick: (file: File | undefined) => void,
 *   focusOnMount?: boolean }} props
 *   rejection: why the last file was refused, shown in place of the title;
 *   focusOnMount: take focus when shown again after a scan, for keyboard users.
 */
const Dropzone = ({ rejection, onPick, focusOnMount = false }) => {
  const zoneRef = useRef(null);
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const message = describeRejection(rejection);

  useEffect(() => {
    if (focusOnMount) zoneRef.current?.focus();
  }, [focusOnMount]);

  const openPicker = () => inputRef.current?.click();

  const title = message || (dragging ? "Drop to start scanning" : "Drop a file or click to browse");

  return (
    <>
      <HiddenInput
        ref={inputRef}
        type="file"
        tabIndex={-1}
        aria-hidden="true"
        onChange={(event) => {
          const [file] = event.target.files || [];
          // Cleared so choosing the same file again still fires a change.
          event.target.value = "";
          onPick(file);
        }}
      />
      <Zone
        ref={zoneRef}
        role="button"
        tabIndex={0}
        aria-labelledby={TITLE_ID}
        aria-describedby={NOTE_ID}
        $dragging={dragging}
        $rejected={Boolean(message)}
        onClick={openPicker}
        onKeyDown={(event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          openPicker();
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          onPick(event.dataTransfer.files?.[0]);
        }}
      >
        <DropIcon aria-hidden="true">
          <UploadIcon />
        </DropIcon>
        <DropTitle id={TITLE_ID} $rejected={Boolean(message)} aria-live="polite">
          {title}
        </DropTitle>
        <DropNote id={NOTE_ID}>
          Up to 1 GB · any file type · scanned in memory, deleted after
        </DropNote>
        <DropButton aria-hidden="true">Choose a file</DropButton>
      </Zone>
    </>
  );
};

export default Dropzone;
