import React, { useEffect, useRef } from "react";
import { MeshClip, Mesh, BlobBlue, BlobPink } from "./index.styled";
import { prefersReducedMotion } from "../../../utils/animations";

const PARALLAX_FACTOR = 0.14;

const MeshHeroBackground = () => {
  const meshRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !meshRef.current) return undefined;
    if (prefersReducedMotion()) return undefined;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (meshRef.current) {
          meshRef.current.style.transform = `translate3d(0, ${
            window.scrollY * PARALLAX_FACTOR
          }px, 0)`;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <MeshClip aria-hidden="true">
      <Mesh ref={meshRef}>
        <BlobBlue />
        <BlobPink />
      </Mesh>
    </MeshClip>
  );
};

export default MeshHeroBackground;
