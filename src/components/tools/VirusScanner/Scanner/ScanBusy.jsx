import React from "react";
import GradientMark from "../../../shared/GradientMark";
import { SHIELD_MARK } from "../shieldMark";
import { formatBytes } from "../scanFormat";
import { buildProgressRows, describeActivity } from "../scanReport";
import {
  BusyPanel,
  Radar,
  RadarRing,
  RadarSweep,
  RadarMark,
  BusyBody,
  FileName,
  ActivityRow,
  Activity,
  ProgressList,
  ProgressRow,
  EngineName,
  Track,
  Fill,
  ProgressStatus,
  TextButton,
} from "./index.styled";

/**
 * The scan card while a file uploads and the engines run.
 *
 * @param {{ status: "uploading"|"scanning", phases: Record<string, string>,
 *   file: File | null, onCancel: () => void }} props
 */
const ScanBusy = ({ status, phases, file, onCancel }) => {
  const activity = describeActivity(status, phases);
  return (
    <BusyPanel>
      <Radar aria-hidden="true">
        <RadarRing />
        <RadarSweep />
        <RadarMark>
          <GradientMark
            id="scan-shield"
            rib={SHIELD_MARK.rib}
            sol={SHIELD_MARK.sol}
            roundSolCaps
            size={64}
          />
        </RadarMark>
      </Radar>
      <BusyBody>
        {file && <FileName>{file.name}</FileName>}
        <ActivityRow>
          <Activity role="status" aria-live="polite">
            {file ? `${formatBytes(file.size)} · ${activity}` : activity}
          </Activity>
          <TextButton type="button" onClick={onCancel}>
            Cancel
          </TextButton>
        </ActivityRow>
        <ProgressList aria-label="Scan engines">
          {buildProgressRows(phases).map((row) => (
            <ProgressRow key={row.id}>
              <EngineName>{row.name}</EngineName>
              <Track aria-hidden="true">
                <Fill $running={row.tone === "active"} style={{ width: `${row.percent}%` }} />
              </Track>
              <ProgressStatus $tone={row.tone}>{row.status}</ProgressStatus>
            </ProgressRow>
          ))}
        </ProgressList>
      </BusyBody>
    </BusyPanel>
  );
};

export default ScanBusy;
