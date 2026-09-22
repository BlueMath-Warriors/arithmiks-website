import React, { useEffect, useState } from "react";
import { Bar, Shell, Message, Actions, DeclineButton, AcceptButton } from "./index.styled";
import { getStoredConsent, storeConsent, grantAnalyticsConsent } from "../../../utils/cookieConsent";

const CookieConsent = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (getStoredConsent()) return;
    setMounted(true);
    requestAnimationFrame(() => setOpen(true));
  }, []);

  if (!mounted) return null;

  const decline = () => {
    storeConsent("denied");
    setOpen(false);
  };

  const accept = () => {
    storeConsent("granted");
    grantAnalyticsConsent();
    setOpen(false);
  };

  return (
    <Bar role="region" aria-label="Cookie notice" $open={open} aria-hidden={!open}>
      <Shell>
        <Message>
          We use cookies to understand how visitors use this site. We won&apos;t turn on
          analytics unless you accept.
        </Message>
        <Actions>
          <DeclineButton type="button" onClick={decline}>
            Decline
          </DeclineButton>
          <AcceptButton type="button" onClick={accept}>
            Accept
          </AcceptButton>
        </Actions>
      </Shell>
    </Bar>
  );
};

export default CookieConsent;
