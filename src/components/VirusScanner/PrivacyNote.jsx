import React from "react";
import { PrivacyBox } from "./index.styled";

const PrivacyNote = () => (
  <PrivacyBox>
    <strong>Your privacy:</strong> Uploaded files are processed in memory and
    deleted immediately after the scan completes. We do not store your file,
    share it with third parties, or use it for training.
  </PrivacyBox>
);

export default PrivacyNote;
