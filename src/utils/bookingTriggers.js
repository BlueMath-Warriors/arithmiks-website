import {
  clearHash,
  finishCloseDrawer,
  hashRequestsDrawer,
  openDrawer,
  syncWithHistory,
} from "../components/BookingDrawer/bookingDrawerStore";

// A booking CTA is an anchor to the page's contact form ("#contact", or the
// shareable "#book") or anything marked `data-book`. Everything else that
// links to /contact (the navbar button, menus, footer) is left alone.
const TRIGGER_SELECTOR = 'a[href="#contact"], a[href="#book"], [data-book]';
const DRAWER_SELECTOR = "[data-booking-drawer]";
const DEEP_LINK_DELAY_MS = 400;
const PREFETCH_DELAY_MS = 3000;

let drawerReady = null;

const loadDrawer = () => import("../components/BookingDrawer/mount");

const ensureDrawerMounted = () => {
  if (!drawerReady) {
    drawerReady = loadDrawer().then((module) => module.mountBookingDrawer());
  }
  return drawerReady;
};

/** Opens the sidebar; if its code can't load (offline), the CTA does what it did before. */
export const openBooking = (trigger = null) => {
  openDrawer(trigger);
  ensureDrawerMounted().catch(() => {
    drawerReady = null;
    finishCloseDrawer();
    const href = trigger && trigger.getAttribute && trigger.getAttribute("href");
    if (href) window.location.assign(href);
  });
};

const isPlainLeftClick = (event) =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;

// preventDefault only: stopping propagation would also hide the click from the
// site-wide CTA analytics (utils/globalTracking.js), which listens alongside this.
const handleClick = (event) => {
  const target = event.target instanceof Element ? event.target.closest(TRIGGER_SELECTOR) : null;
  if (!target || target.closest(DRAWER_SELECTOR) || !isPlainLeftClick(event)) return;
  event.preventDefault();
  openBooking(target);
};

let started = false;

/** Called once from gatsby-browser.jsx. */
export const initBookingTriggers = () => {
  if (started) return;
  started = true;

  document.addEventListener("click", handleClick, { capture: true });
  window.addEventListener("popstate", syncWithHistory);

  // Warm the drawer's code once the page has settled, so the first click opens at once.
  window.setTimeout(() => {
    loadDrawer().catch(() => {});
  }, PREFETCH_DELAY_MS);

  if (hashRequestsDrawer()) {
    clearHash();
    window.setTimeout(() => openBooking(null), DEEP_LINK_DELAY_MS);
  }
};
