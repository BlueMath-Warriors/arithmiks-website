import React from "react";
import { createRoot } from "react-dom/client";
import BookingDrawer from ".";

let mounted = false;

/**
 * Renders the booking sidebar into its own React root, once. A separate root
 * (like the cookie banner's, see gatsby-browser.jsx) keeps it out of
 * Gatsby's page tree, which re-renders wrappers for its Head API.
 */
export const mountBookingDrawer = () => {
  if (mounted) return;
  mounted = true;
  const node = document.createElement("div");
  node.id = "booking-drawer-root";
  document.body.appendChild(node);
  createRoot(node).render(<BookingDrawer />);
};
