// Open/close state of the booking sidebar, kept outside React so a CTA click
// can open it before the drawer's code has finished loading, and so the
// drawer (its own React root) and the click listener share one source of truth.
//
// Opening adds a "#book" history entry so the Back button closes the sidebar
// instead of leaving the page. It is pushed with window.history directly (not
// Gatsby's navigate), so the router never sees a route change and no extra
// page view is reported.

const HISTORY_FLAG = "book";
const HISTORY_HASH = "#book";

let state = { isOpen: false, trigger: null };
const listeners = new Set();

const setState = (next) => {
  state = { ...state, ...next };
  listeners.forEach((listener) => listener());
};

const hasBookEntry = () => Boolean(window.history.state && window.history.state[HISTORY_FLAG]);

export const subscribe = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const getSnapshot = () => state;

/**
 * @param {Element | null} trigger the CTA that was clicked, to return focus to
 * @param {{ pushHistory?: boolean }} options false when the history entry already exists
 */
export const openDrawer = (trigger = null, { pushHistory = true } = {}) => {
  if (state.isOpen) return;
  if (pushHistory && !hasBookEntry()) {
    window.history.pushState({ [HISTORY_FLAG]: 1 }, "", HISTORY_HASH);
  }
  setState({ isOpen: true, trigger });
};

/** Closes through the history entry when there is one, so Back and the close button agree. */
export const requestCloseDrawer = () => {
  if (!state.isOpen) return;
  if (hasBookEntry()) {
    window.history.back();
    return;
  }
  setState({ isOpen: false });
};

/** Marks the sidebar closed without touching history (the entry is already gone). */
export const finishCloseDrawer = () => {
  if (state.isOpen) setState({ isOpen: false });
};

/** Back/Forward: leaving the "#book" entry closes the sidebar, re-entering it opens it. */
export const syncWithHistory = () => {
  if (state.isOpen) {
    finishCloseDrawer();
  } else if (window.location.hash === HISTORY_HASH) {
    openDrawer(null, { pushHistory: false });
  }
};

/** A shared "/page#book" link opens the sidebar on load; the hash is stripped first. */
export const hashRequestsDrawer = () => window.location.hash === HISTORY_HASH;

export const clearHash = () => {
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
};
