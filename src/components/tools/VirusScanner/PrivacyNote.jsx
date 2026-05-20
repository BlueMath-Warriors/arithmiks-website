import React from "react";
import { PrivacyBox } from "./index.styled";
import { ShieldCheckIcon } from "./icons";

const PrivacyNote = () => (
  <PrivacyBox>
    <div className="icon" aria-hidden="true">
      <ShieldCheckIcon />
    </div>
    <div>
      <strong>Your privacy:</strong> Uploaded files are processed in memory and
      deleted immediately after the scan completes. We do not store your file,
      share it with third parties, or use it for training.
    </div>
  </PrivacyBox>
);

export default PrivacyNote;
