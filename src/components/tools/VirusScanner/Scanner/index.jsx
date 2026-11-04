import React, { useState } from "react";
import { useScanner } from "./useScanner";
import Dropzone from "./Dropzone";
import ScanBusy from "./ScanBusy";
import ScanResult from "./ScanResult";
import ScanError from "./ScanError";
import PrivacyNote from "./PrivacyNote";
import { Card } from "./index.styled";

/** The scan card: drop zone, live engine progress, then the verdict. */
const Scanner = () => {
  const { state, pick, cancel, reset } = useScanner();
  // After "Scan another file" or a cancel, keyboard focus returns to the drop zone.
  const [returning, setReturning] = useState(false);
  const { status } = state;

  const startOver = (action) => () => {
    setReturning(true);
    action();
  };

  return (
    <Card data-reveal="" role="region" aria-label="Virus scanner">
      {status === "idle" && (
        <Dropzone rejection={state.rejection} onPick={pick} focusOnMount={returning} />
      )}
      {(status === "uploading" || status === "scanning") && (
        <ScanBusy
          status={status}
          phases={state.phases}
          file={state.file}
          onCancel={startOver(cancel)}
        />
      )}
      {status === "result" && state.result && (
        <ScanResult
          result={state.result}
          file={state.file}
          durationMs={state.durationMs}
          onReset={startOver(reset)}
        />
      )}
      {status === "error" && <ScanError error={state.error} onRetry={startOver(reset)} />}
      <PrivacyNote />
    </Card>
  );
};

export default Scanner;
