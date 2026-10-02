import { useEffect, useState } from "react";

const IDLE_FALLBACK_DELAY_MS = 1000;

/**
 * True once the page has finished loading and the browser has a spare moment.
 * Lets below-the-fold content start downloading in the background without
 * competing with what is needed for the first screen.
 *
 * @returns {boolean}
 */
export const useIdleAfterLoad = () => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let idleHandle;
    const scheduleIdle = () => {
      idleHandle =
        typeof window.requestIdleCallback === "function"
          ? window.requestIdleCallback(() => setIsIdle(true))
          : window.setTimeout(() => setIsIdle(true), IDLE_FALLBACK_DELAY_MS);
    };

    if (document.readyState === "complete") {
      scheduleIdle();
    } else {
      window.addEventListener("load", scheduleIdle, { once: true });
    }

    return () => {
      window.removeEventListener("load", scheduleIdle);
      if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idleHandle);
      window.clearTimeout(idleHandle);
    };
  }, []);

  return isIdle;
};

export default useIdleAfterLoad;
