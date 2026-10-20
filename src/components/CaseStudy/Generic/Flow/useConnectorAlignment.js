import { useEffect } from "react";

const SVG_NS_ATTRS =
  'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
const STRAIGHT_ARROW = `<svg viewBox="0 0 36 16" width="36" height="16" ${SVG_NS_ATTRS}><path d="M2 8h30M27 3l5 5-5 5"></path></svg>`;
const MIN_CONNECTOR_SIZE = 24;
const MAX_CORNER_RADIUS = 9;
const ALIGN_DELAYS_MS = [0, 300, 1200];

const centreY = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top + rect.height / 2;
};

// Cards hug their content, so their centres differ; each arrow either shifts to
// its target's centre or bends (an SVG path) from the previous card's centre.
const align = (root) => {
  const flow = root.querySelector("[data-qflow]");
  if (!flow) return;
  const arrows = [...flow.querySelectorAll("[data-qfarrow]")];
  const cards = [...flow.querySelectorAll("[data-qfcard]")];
  const isStacked = getComputedStyle(flow).gridTemplateColumns.split(" ").length < 3;

  // Level the middle cards with the workspace node's centre first.
  const workspace = flow.firstElementChild;
  flow.querySelectorAll('[data-qfcol="mid"]').forEach((column) => {
    column.style.transform = "";
    if (isStacked || !workspace) return;
    const card = column.querySelector("[data-qfcard]");
    if (!card) return;
    const shift = Math.round(centreY(workspace) - centreY(card));
    if (shift) column.style.transform = `translateY(${shift}px)`;
  });

  arrows.forEach((arrow, index) => {
    arrow.style.alignSelf = "";
    arrow.style.position = "";
    arrow.style.transform = "";
    arrow.innerHTML = STRAIGHT_ARROW;
    const target = cards[index];
    const source = cards[index - 1];
    if (!target || isStacked) return;

    const targetY = centreY(target);
    const sourceY = source ? centreY(source) : targetY;
    if (Math.abs(targetY - sourceY) < 2) {
      arrow.style.transform = `translateY(${Math.round(targetY - centreY(arrow))}px)`;
      return;
    }

    arrow.style.alignSelf = "stretch";
    arrow.style.position = "relative";
    const box = arrow.getBoundingClientRect();
    const width = Math.max(MIN_CONNECTOR_SIZE, Math.round(box.width));
    const height = Math.max(MIN_CONNECTOR_SIZE, Math.round(box.height));
    const fromY = Math.round(sourceY - box.top);
    const toY = Math.round(targetY - box.top);
    const middle = Math.round(width / 2);
    const direction = toY < fromY ? -1 : 1;
    const radius = Math.min(MAX_CORNER_RADIUS, Math.abs(toY - fromY) / 2, width / 2 - 3);
    const path =
      `M2 ${fromY} H ${middle - radius} Q ${middle} ${fromY} ${middle} ${fromY + direction * radius} ` +
      `V ${toY - direction * radius} Q ${middle} ${toY} ${middle + radius} ${toY} H ${width - 3}`;
    arrow.innerHTML =
      `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" ${SVG_NS_ATTRS} ` +
      `style="position:absolute;inset:0"><path d="${path}"></path>` +
      `<path d="M${width - 8} ${toY - 5}l5 5-5 5"></path></svg>`;
  });
};

/** Lays out the Quanta pipeline's connectors; a no-op for diagrams without [data-qflow]. */
export const useConnectorAlignment = (rootRef) => {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const run = () => align(root);
    const timers = ALIGN_DELAYS_MS.map((delay) => setTimeout(run, delay));
    window.addEventListener("resize", run);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", run);
    };
  }, [rootRef]);
};

export default useConnectorAlignment;
