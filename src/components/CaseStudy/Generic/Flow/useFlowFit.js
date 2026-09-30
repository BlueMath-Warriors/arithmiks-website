import { useEffect } from "react";

// The diagram is laid out for a fixed width; on narrower desktops it is
// scaled down to fit, and below the stacking breakpoint CSS takes over.
const DESIGN_WIDTH = 1360;
const STACK_BREAKPOINT = 1240;
// [selector, grid column of the card the connector hangs from]
const CONNECTORS = [
  ["[data-cltail]", 9],
  ["[data-cldash]", 3],
];

const cardInFirstRow = (grid, column) =>
  [...grid.querySelectorAll(":scope > [data-clcard]")].find(
    (card) =>
      card.style.gridColumn.split("/")[0].trim() === String(column) &&
      (card.style.gridRow || "1").trim().startsWith("1")
  );

const fit = (root) => {
  const grid = root.querySelector("[data-clflow]");
  if (!grid) return;

  grid.style.zoom = "";
  grid.style.width = "";
  CONNECTORS.forEach(([selector]) => {
    const connector = grid.querySelector(selector);
    if (connector) connector.style.marginTop = "";
  });
  if (window.innerWidth <= STACK_BREAKPOINT) return;

  const available = grid.parentElement.getBoundingClientRect().width;
  if (available < DESIGN_WIDTH) {
    grid.style.width = `${DESIGN_WIDTH}px`;
    grid.style.zoom = String(available / DESIGN_WIDTH);
  }

  // Cards hug their content, so pull each connector up to the bottom of the
  // card it hangs from.
  CONNECTORS.forEach(([selector, column]) => {
    const connector = grid.querySelector(selector);
    const card = cardInFirstRow(grid, column);
    if (!connector || !card) return;
    const gap = connector.offsetTop - (card.offsetTop + card.offsetHeight);
    if (gap > 0) connector.style.marginTop = `${-gap}px`;
  });
};

/** Keeps the flow diagram fitted to its container on load, resize and font swap. */
export const useFlowFit = (rootRef) => {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const refit = () => fit(root);
    const frame = requestAnimationFrame(refit);
    window.addEventListener("resize", refit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", refit);
    };
  }, [rootRef]);
};

export default useFlowFit;
