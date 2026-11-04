import React from "react";
import { errorCopy } from "../scanFormat";
import {
  ErrorPanel,
  VerdictPill,
  VerdictDot,
  VerdictTitle,
  ErrorBody,
  OutlineButton,
} from "./index.styled";

/**
 * The scan card when a scan couldn't finish (network, limits, server
 * errors), in the verdict card's layout with a retry.
 *
 * @param {{ error: object, onRetry: () => void }} props
 */
const ScanError = ({ error, onRetry }) => {
  const copy = errorCopy(error);
  return (
    <ErrorPanel role="alert">
      <VerdictPill $tone="neutral">
        <VerdictDot $tone="neutral" aria-hidden="true" />
        Not scanned
      </VerdictPill>
      <VerdictTitle>{copy.title}</VerdictTitle>
      <ErrorBody>{copy.body}</ErrorBody>
      <OutlineButton type="button" onClick={onRetry}>
        Try again
      </OutlineButton>
    </ErrorPanel>
  );
};

export default ScanError;
