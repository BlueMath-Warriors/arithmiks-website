import React, { useRef } from "react";
import { LOGO_MARK_SRC } from "../../../../constants/brand";
import useReveal from "../../../../hooks/useReveal";
import BookingPanel from "./BookingPanel";
import ContactAside from "./ContactAside";
import { useBookingForm } from "./useBookingForm";
import { Section, Shell, Card, Wash, WatermarkMark, Columns, FormPanel } from "./index.styled";

/**
 * The shared contact card: describe the idea, then pick a call time.
 *
 * @param {{ headingAs?: "h1" | "h2" }} props Defaults to "h2" — every page this
 * renders on already has its own page-level <h1> elsewhere, except /contact,
 * which has none of its own and passes "h1" so the built page still has
 * exactly one (see scripts/check-heading-h1-count.mjs).
 */
const BookingFlow = ({ headingAs = "h2" }) => {
  const form = useBookingForm();
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <Section id="contact" aria-labelledby="contact-h" ref={sectionRef}>
      <Shell>
        <Card data-reveal="">
          <Wash aria-hidden="true" />
          <WatermarkMark src={LOGO_MARK_SRC} alt="" aria-hidden="true" />
          <Columns>
            <FormPanel ref={form.panelRef} $minHeight={form.pinnedHeight}>
              <BookingPanel form={form} headingAs={headingAs} />
            </FormPanel>
            <ContactAside />
          </Columns>
        </Card>
      </Shell>
    </Section>
  );
};

export default BookingFlow;
