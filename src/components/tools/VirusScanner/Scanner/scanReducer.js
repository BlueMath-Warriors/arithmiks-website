import {
  createInitialPhases,
  isPhaseId,
  markRunningPhasesFailed,
  reconcilePhasesFromResult,
} from "../scanFormat";

/**
 * idle → uploading → scanning → result | error. A file refused before upload
 * (too large, empty) keeps the card idle and records why in `rejection`.
 */
export const initialScanState = {
  status: "idle",
  file: null,
  rejection: null,
  result: null,
  error: null,
  durationMs: null,
  phases: createInitialPhases(),
};

const setPhase = (state, phase, value) =>
  isPhaseId(phase) ? { ...state, phases: { ...state.phases, [phase]: value } } : state;

export function scanReducer(state, action) {
  switch (action.type) {
    case "REJECT":
      return { ...initialScanState, rejection: action.code };
    case "START":
      return { ...initialScanState, status: "uploading", file: action.file };
    case "SCANNING":
      return { ...state, status: "scanning" };
    case "PHASE_START":
      return setPhase(state, action.phase, "running");
    case "PHASE_COMPLETE":
      return setPhase(state, action.phase, "completed");
    case "RESULT":
      return {
        ...state,
        status: "result",
        result: action.result,
        durationMs: action.durationMs ?? null,
        phases: reconcilePhasesFromResult(state.phases, action.result),
      };
    case "ERROR":
      return {
        ...state,
        status: "error",
        error: action.error,
        phases: markRunningPhasesFailed(state.phases),
      };
    case "RESET":
      return initialScanState;
    default:
      return state;
  }
}
