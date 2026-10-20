import React, { useEffect, useState } from "react";
import {
  Wrap,
  Card,
  Main,
  Intro,
  IconTile,
  Heading,
  Message,
  Actions,
  ManageButton,
  RejectButton,
  AcceptButton,
  Panel,
  PanelBody,
  CategoryGrid,
  Category,
  LockedSwitch,
  Switch,
  Knob,
  CategoryText,
  CategoryTitle,
  CategoryName,
  AlwaysOn,
  CategoryDescription,
  PanelFooter,
  SaveButton,
} from "./index.styled";
import {
  getStoredConsent,
  storeConsent,
  grantAnalyticsConsent,
  CONSENT_GRANTED,
  CONSENT_DENIED,
} from "../../../utils/cookieConsent";
import { prefersReducedMotion } from "../../../utils/animations";

// Let the page settle before the banner slides in.
const ENTER_DELAY_MS = 700;
// Matches the card's exit transition, so it unmounts once it has faded out.
const EXIT_DURATION_MS = 380;
const PRIVACY_POLICY_URL = "/privacy-policy";

const CATEGORIES = [
  {
    id: "essential",
    name: "Strictly necessary",
    description: "Keep the site secure and working — page routing, the consultation form, and remembering this choice.",
    locked: true,
  },
  {
    id: "analytics",
    name: "Analytics",
    description: "Aggregated page views and navigation paths, so we can see which pages help and which do not.",
    locked: false,
  },
];

const CookieIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="21"
    height="21"
    fill="none"
    stroke="#fff"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3.2a8.8 8.8 0 1 0 8.8 8.8 4.2 4.2 0 0 1-5-5.2 4 4 0 0 1-3.8-3.6Z" />
    <path d="M9 10h.01M13.6 13.8h.01M9.6 15.4h.01M15.4 9.4h.01" />
  </svg>
);

const Chevron = () => (
  <svg
    viewBox="0 0 16 16"
    width="15"
    height="15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 6.5 8 10.5l4-4" />
  </svg>
);

// Rendered outside Gatsby's router (see gatsby-browser.jsx), so links are plain anchors.
const CookieConsent = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (getStoredConsent()) return undefined;
    setMounted(true);
    const timer = window.setTimeout(() => setOpen(true), prefersReducedMotion() ? 0 : ENTER_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const decide = (allowAnalytics) => {
    storeConsent(allowAnalytics ? CONSENT_GRANTED : CONSENT_DENIED);
    if (allowAnalytics) grantAnalyticsConsent();
    setOpen(false);
    window.setTimeout(() => setMounted(false), EXIT_DURATION_MS);
  };

  return (
    <Wrap role="region" aria-label="Cookie consent" aria-live="polite">
      <Card $open={open}>
        <Main>
          <Intro>
            <IconTile aria-hidden="true">
              <CookieIcon />
            </IconTile>
            <div>
              <Heading>We use a few cookies</Heading>
              <Message>
                Essential cookies keep this site working. With your permission we also use
                analytics to see which pages are useful. You can change your mind at any time — see
                our <a href={`${PRIVACY_POLICY_URL}#cookies`}>cookie section</a>.
              </Message>
            </div>
          </Intro>
          <Actions>
            <ManageButton
              type="button"
              $open={managing}
              aria-expanded={managing}
              aria-controls="cookie-preferences"
              onClick={() => setManaging((value) => !value)}
            >
              Manage
              <Chevron />
            </ManageButton>
            <RejectButton type="button" onClick={() => decide(false)}>
              Reject all
            </RejectButton>
            <AcceptButton type="button" onClick={() => decide(true)}>
              Accept all
            </AcceptButton>
          </Actions>
        </Main>

        <Panel id="cookie-preferences" $open={managing} aria-hidden={!managing}>
          <div>
            <PanelBody>
              <CategoryGrid>
                {CATEGORIES.map((category) => (
                  <Category key={category.id}>
                    {category.locked ? (
                      <LockedSwitch aria-hidden="true" />
                    ) : (
                      <Switch
                        type="button"
                        role="switch"
                        aria-checked={analytics}
                        aria-label={`${category.name} cookies`}
                        tabIndex={managing ? 0 : -1}
                        $on={analytics}
                        onClick={() => setAnalytics((value) => !value)}
                      >
                        <Knob $on={analytics} aria-hidden="true" />
                      </Switch>
                    )}
                    <CategoryText>
                      <CategoryTitle>
                        <CategoryName>{category.name}</CategoryName>
                        {category.locked && <AlwaysOn>Always on</AlwaysOn>}
                      </CategoryTitle>
                      <CategoryDescription>{category.description}</CategoryDescription>
                    </CategoryText>
                  </Category>
                ))}
              </CategoryGrid>
              <PanelFooter>
                <a href={PRIVACY_POLICY_URL} tabIndex={managing ? 0 : -1}>
                  Read the full privacy policy <span aria-hidden="true">→</span>
                </a>
                <SaveButton type="button" tabIndex={managing ? 0 : -1} onClick={() => decide(analytics)}>
                  Save my choices
                </SaveButton>
              </PanelFooter>
            </PanelBody>
          </div>
        </Panel>
      </Card>
    </Wrap>
  );
};

export default CookieConsent;
