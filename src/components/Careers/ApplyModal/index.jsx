import React, { useRef } from "react";
import { formatEmploymentTypeForJobDetail } from "../../../constants/jobs";
import ApplicationForm from "./ApplicationForm";
import { Overlay, Panel, Header, Title, Intro, CloseButton } from "./index.styled";
import { useApplicationForm } from "./useApplicationForm";
import { useModalBehavior } from "./useModalBehavior";

const ID_PREFIX = "apply";
const TITLE_ID = `${ID_PREFIX}-title`;

/**
 * The "Apply now" dialog: collects a candidate's details and sends them to
 * Abacus. Stays mounted while closed so a half-filled form survives an
 * accidental close; it resets after a successful submit.
 *
 * @param {{
 *   job: import("../../../constants/jobs").Job,
 *   isOpen: boolean,
 *   onClose: () => void,
 *   onSubmitted: () => void,
 *   triggerRef: React.RefObject<HTMLElement | null>,
 * }} props `triggerRef` holds the Apply button to return focus to on close.
 */
const ApplyModal = ({ job, isOpen, onClose, onSubmitted, triggerRef }) => {
  const panelRef = useRef(null);
  const form = useApplicationForm({
    job,
    onSuccess: () => {
      onClose();
      onSubmitted();
    },
  });

  useModalBehavior({ isOpen, panelRef, onClose, triggerRef });

  if (!isOpen) return null;

  return (
    <Overlay
      // Only a press that starts on the dimmed backdrop itself closes the dialog,
      // so dragging a text selection out of the panel does not.
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <Panel ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={TITLE_ID} tabIndex={-1}>
        <Header>
          <div>
            <Title id={TITLE_ID}>Apply for {job.title}</Title>
            <Intro>
              {job.location} · {formatEmploymentTypeForJobDetail(job.employmentType)}. Fields marked * are
              required.
            </Intro>
          </div>
          <CloseButton type="button" aria-label="Close application form" onClick={onClose}>
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M3 3l10 10M13 3 3 13" />
            </svg>
          </CloseButton>
        </Header>
        <ApplicationForm idPrefix={ID_PREFIX} form={form} />
      </Panel>
    </Overlay>
  );
};

export default ApplyModal;
