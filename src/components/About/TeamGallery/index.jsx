import React, { useEffect, useRef } from "react";
import { Stage, Pin, Track, Card, Duplicate } from "./index.styled";
import { prefersReducedMotion } from "../../../utils/animations";
import teamPhotoOne from "../../../images/about/team-1.jpg";
import teamPhotoTwo from "../../../images/about/team-2.jpg";
import teamPhotoThree from "../../../images/about/team-3.jpg";

const PHOTOS = [teamPhotoOne, teamPhotoTwo, teamPhotoThree];
const DUPLICATE_PHOTOS = [...PHOTOS, ...PHOTOS];
const VISIBLE_CARDS = 3;
const MIN_CARD_WIDTH = 120;
// Marquee speed in px/ms, reached after a linear ramp so the row eases into motion.
const MARQUEE_SPEED = 0.055;
const MARQUEE_RAMP_MS = 700;
const MOBILE_QUERY = "(max-width: 760px)";

const marqueeDistance = (elapsed) =>
  elapsed < MARQUEE_RAMP_MS
    ? (MARQUEE_SPEED * elapsed * elapsed) / (2 * MARQUEE_RAMP_MS)
    : MARQUEE_SPEED * (elapsed - MARQUEE_RAMP_MS / 2);

const setWidth = (element, width) => {
  element.style.flex = `0 0 ${width}px`;
  element.style.width = `${width}px`;
};

/**
 * Three team photos rise into place on load, then the row breaks out to the
 * gutters and loops as a continuous marquee. Stacks statically on small
 * screens and for reduced motion.
 */
const TeamGallery = () => {
  const stageRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!stage || !pin || !track || prefersReducedMotion()) return undefined;

    const mobile = window.matchMedia(MOBILE_QUERY);
    const cards = [...track.querySelectorAll("[data-gallery-card]")];
    const duplicates = [...track.querySelectorAll("[data-gallery-duplicate]")];
    let frame = 0;
    let startedAt = 0;
    let loopWidth = 0;

    const measure = () => {
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const cardWidth = Math.max(
        MIN_CARD_WIDTH,
        Math.floor((stage.clientWidth - (VISIBLE_CARDS - 1) * gap) / VISIBLE_CARDS)
      );
      [...cards, ...duplicates].forEach((element) => setWidth(element, cardWidth));
      duplicates.forEach((element) => {
        element.style.marginRight = "0px";
      });
      loopWidth = PHOTOS.length * (cardWidth + gap);
      const shell = stage.closest("[data-shell]");
      const gutter = shell ? parseFloat(getComputedStyle(shell).paddingLeft) || 0 : 0;
      pin.style.marginLeft = `${-gutter}px`;
      pin.style.marginRight = `${-gutter}px`;
    };

    const tick = (now) => {
      track.style.transform = `translate3d(${-(marqueeDistance(now - startedAt) % loopWidth)}px,0,0)`;
      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      cards.forEach((card) => {
        card.style.transition = "none";
        card.style.opacity = "0";
        card.style.transform = "translate3d(0,56px,0)";
      });
      measure();
      // Commit the hidden state before restoring the transition, so the rise plays.
      void track.offsetWidth;
      cards.forEach((card) => {
        card.style.transition = "";
        card.style.opacity = "1";
        card.style.transform = "none";
      });
      duplicates.forEach((element) => {
        element.style.opacity = "1";
      });
      track.style.width = "max-content";
      startedAt = performance.now();
      frame = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      [track, pin, ...cards, ...duplicates].forEach((element) => element.removeAttribute("style"));
    };

    const onViewportChange = () => {
      if (mobile.matches) {
        stop();
        return;
      }
      if (frame) measure();
      else start();
    };

    onViewportChange();
    window.addEventListener("resize", onViewportChange, { passive: true });
    return () => {
      window.removeEventListener("resize", onViewportChange);
      stop();
    };
  }, []);

  return (
    <Stage ref={stageRef}>
      <Pin ref={pinRef}>
        <Track ref={trackRef}>
          {PHOTOS.map((photo) => (
            <Card key={photo} data-gallery-card="">
              <img src={photo} alt="The Arithmiks team at work" decoding="async" width={760} height={570} />
            </Card>
          ))}
          {DUPLICATE_PHOTOS.map((photo, index) => (
            <Duplicate key={`${photo}-${index}`} data-gallery-duplicate="" aria-hidden="true">
              <img src={photo} alt="" decoding="async" width={760} height={570} />
            </Duplicate>
          ))}
        </Track>
      </Pin>
    </Stage>
  );
};

export default TeamGallery;
