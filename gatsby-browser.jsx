import React from "react";
import { createRoot } from "react-dom/client";
import "./src/styles/global.module.css";
import { gsap } from "gsap";
import CookieConsent from "./src/components/shared/CookieConsent";

// Mounted outside the Gatsby-managed tree, not via wrapRootElement/
// wrapPageElement: every page here also exports a Head component, and
// Gatsby's Head API re-renders those wrappers for its own head-only pass —
// any real UI placed there ends up rendered twice (see
// https://gatsby.dev/invalid-head-elements), which is what broke this banner.
export const onClientEntry = () => {
  const mountNode = document.createElement("div");
  mountNode.id = "cookie-consent-root";
  document.body.appendChild(mountNode);
  createRoot(mountNode).render(<CookieConsent />);
};

const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Cross-fades the incoming page on a client-side route change.
 *
 * Deliberately opacity-only: the previous version also tweened `y` from 20px,
 * but it ran after the markup had already painted, so every page visibly
 * dropped 20px and slid back. That read as the layout resizing itself — most
 * obviously on a full-viewport hero.
 */
const animatePageEntrance = () => {
  if (typeof window === "undefined" || prefersReducedMotion()) return;

  const mainContent = document.querySelector("main") || document.body;

  gsap.fromTo(
    mainContent,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      clearProps: "opacity",
    }
  );
};

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation && location.pathname !== prevLocation.pathname) {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    setTimeout(animatePageEntrance, 50);
  }
};

// No entrance animation on first paint: the server-rendered markup is already
// on screen in its final position, so fading or moving it only introduces a
// flash. Route changes still get the cross-fade above.

export const onServiceWorkerUpdateReady = () => {
  if (typeof window !== "undefined") {
    window.location.reload();
  }
};
