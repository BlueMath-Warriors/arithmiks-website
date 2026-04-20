import React, { useRef, useState } from "react";
import {
  Dropzone,
  DropzoneIcon,
  DropzoneHeading,
  DropzoneSub,
  DropzoneHint,
  HiddenInput,
} from "./index.styled";
import { UploadCloudIcon, LockIcon } from "./icons";

/**
 * @param {{ onPick: (file: File) => void }} props
 */
const UploadDropzone = ({ onPick }) => {
  const inputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = (files) => {
    if (!files || files.length === 0) return;
    onPick(files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const openPicker = () => {
    inputRef.current && inputRef.current.click();
  };

  return (
    <Dropzone
      role="button"
      tabIndex={0}
      aria-label="Upload a file to scan for viruses"
      $dragOver={dragOver}
      onClick={openPicker}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openPicker();
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
    >
      <DropzoneIcon aria-hidden="true">
        <UploadCloudIcon />
      </DropzoneIcon>
      <DropzoneHeading>
        {dragOver ? "Drop to start scanning" : "Drop a file or click to browse"}
      </DropzoneHeading>
      <DropzoneSub>
        Up to 1 GB · any file type · scanned in memory, deleted after
      </DropzoneSub>
      <DropzoneHint>
        <LockIcon />
        Your file is private — never stored, never shared
      </DropzoneHint>
      <HiddenInput
        ref={inputRef}
        type="file"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </Dropzone>
  );
};

export default UploadDropzone;
