import { useCallback, useRef } from "react";

const DEFAULT_API = "http://localhost:8080";

export function useScanUpload({ onProgress, onScanning, onResult, onError }) {
  const xhrRef = useRef(null);

  const upload = useCallback(
    (file) => {
      const base = process.env.GATSBY_SCAN_API_URL || DEFAULT_API;
      const url = `${base.replace(/\/$/, "")}/api/v1/scan`;
      const xhr = new XMLHttpRequest();
      xhrRef.current = xhr;

      xhr.open("POST", url, true);
      xhr.responseType = "json";
      xhr.timeout = 10 * 60 * 1000;

      let lastTick = 0;
      xhr.upload.onprogress = (e) => {
        if (!e.lengthComputable) return;
        const now = Date.now();
        if (now - lastTick < 100 && e.loaded !== e.total) return;
        lastTick = now;
        const pct = Math.round((e.loaded / e.total) * 100);
        onProgress && onProgress(pct);
        if (pct === 100) onScanning && onScanning();
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          onResult && onResult(xhr.response);
        } else {
          onError && onError({ code: xhr.status, body: xhr.response });
        }
      };
      xhr.onerror = () =>
        onError && onError({ code: 0, body: null, network: true });
      xhr.ontimeout = () =>
        onError && onError({ code: 0, body: null, timeout: true });

      const fd = new FormData();
      fd.append("file", file);
      xhr.send(fd);
    },
    [onProgress, onScanning, onResult, onError]
  );

  const abort = useCallback(() => {
    if (xhrRef.current) {
      xhrRef.current.abort();
      xhrRef.current = null;
    }
  }, []);

  return { upload, abort };
}
