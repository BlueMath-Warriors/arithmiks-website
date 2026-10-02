import React, { useCallback, useEffect, useRef, useState } from "react";
import useReveal from "../../../../hooks/useReveal";
import useIdleAfterLoad from "../../../../hooks/useIdleAfterLoad";
import { prefersReducedMotion } from "../../../../utils/animations";
import { KEY_FEATURE_IMAGE_SIZES, keyFeatureSrcSet } from "../../../../utils/responsiveImage";
import { GradientText, Shell } from "../../../shared/Section/index.styled";
import { SectionEyebrow, SectionHeading } from "../layout.styled";
import { splitHeading } from "../heading";
import {
  FeaturesSection,
  Header,
  Body,
  Caption,
  CaptionTitle,
  CaptionText,
  Stage,
  Track,
  Slide,
  SlideCard,
  Wash,
  Arrow,
  Dots,
  Dot,
} from "./index.styled";

const SWIPE_THRESHOLD_PX = 40;
const CAPTION_SHIFT_PX = 40;
const CAPTION_OUT_MS = 300;
const CAPTION_OUT = "opacity .3s ease, transform .3s cubic-bezier(.4,0,1,1)";
const CAPTION_IN = "opacity .5s ease, transform .65s cubic-bezier(.16,1,.3,1)";
const LEADING_NUMBER = /^\d+\.\s*/;
const TRAILING_COLON = /\s*:\s*$/;

const cleanTitle = (title) => title.replace(LEADING_NUMBER, "").replace(TRAILING_COLON, "");

// Circular offset of slide `index` from the active one, so the strip loops.
const offsetFrom = (index, active, total) => {
  const offset = (index - active + total) % total;
  return offset > total / 2 ? offset - total : offset;
};

const slideStyle = (offset) => {
  const isCurrent = offset === 0;
  const isNear = Math.abs(offset) <= 1;
  return {
    $transform: isCurrent
      ? "translateX(0) scale(1)"
      : `translateX(calc(${offset} * (90.75% + var(--gap)))) scale(.815)`,
    $opacity: isNear ? 1 : 0,
    $zIndex: isCurrent ? 3 : isNear ? 2 : 1,
    $isNeighbour: !isCurrent,
  };
};

/**
 * Stacked-card feature carousel: the active screenshot sits centred with its
 * neighbours parked at the sides; arrows, dots and a horizontal swipe move it.
 *
 * @param {Object} props
 * @param {string} props.label
 * @param {string | { plain: string; highlight: string }} props.heading
 * @param {boolean} [props.framed] fill each slide with a white card and crop to it (for 1.6-aspect screenshots); otherwise each image is shown whole with a drop shadow
 * @param {{ title: string; description: string; image: string; imageAlt?: string }[]} props.features
 */
const KeyFeatures = ({ label = "HIGHLIGHTS", heading = "Key features", framed = false, features = [] }) => {
  const total = features.length;
  const [active, setActive] = useState(0);
  const [captionIndex, setCaptionIndex] = useState(0);
  const rootRef = useRef(null);
  const captionRef = useRef(null);
  const captionTimerRef = useRef(null);
  const swipeStartRef = useRef(null);
  useReveal(rootRef);
  // The section sits far below the fold, so its images stay lazy for the first
  // load; once the page is idle the visible slide and its neighbours are fetched
  // so they are ready by the time the reader scrolls here.
  const isIdle = useIdleAfterLoad();

  useEffect(() => () => clearTimeout(captionTimerRef.current), []);

  // The caption drifts out the way the strip travels, then the new one eases
  // in from the other side while the incoming card is still settling.
  const goTo = useCallback(
    (next, direction) => {
      if (next === active) return;
      const shift = direction || (next > active ? 1 : -1);
      const caption = captionRef.current;
      setActive(next);
      if (!caption || prefersReducedMotion()) {
        setCaptionIndex(next);
        return;
      }
      clearTimeout(captionTimerRef.current);
      caption.style.transition = CAPTION_OUT;
      caption.style.opacity = "0";
      caption.style.transform = `translate3d(${-shift * CAPTION_SHIFT_PX}px,0,0)`;
      captionTimerRef.current = setTimeout(() => {
        caption.style.transition = "none";
        caption.style.transform = `translate3d(${shift * CAPTION_SHIFT_PX}px,0,0)`;
        setCaptionIndex(next);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            caption.style.transition = CAPTION_IN;
            caption.style.opacity = "1";
            caption.style.transform = "translate3d(0,0,0)";
          })
        );
      }, CAPTION_OUT_MS);
    },
    [active]
  );

  if (total === 0) return null;

  const { plain, highlight } = splitHeading(heading);
  const current = features[captionIndex];

  return (
    <FeaturesSection id="features" aria-labelledby="features-heading" ref={rootRef}>
      <Shell>
        <Header data-reveal="">
          <SectionEyebrow>{label}</SectionEyebrow>
          <SectionHeading id="features-heading">
            {plain} <GradientText>{highlight}</GradientText>
          </SectionHeading>
        </Header>
        <Body data-reveal="">
          <Caption ref={captionRef}>
            <CaptionTitle>
              {captionIndex + 1}. {cleanTitle(current.title)}:
            </CaptionTitle>
            <CaptionText>{current.description}</CaptionText>
          </Caption>
          <Stage>
            <Track
              onPointerDown={(event) => {
                swipeStartRef.current = event.clientX;
              }}
              onPointerUp={(event) => {
                if (swipeStartRef.current == null) return;
                const distance = event.clientX - swipeStartRef.current;
                swipeStartRef.current = null;
                if (Math.abs(distance) <= SWIPE_THRESHOLD_PX) return;
                const step = distance < 0 ? 1 : -1;
                goTo((active + step + total) % total, step);
              }}
            >
              {features.map((feature, index) => {
                const offset = offsetFrom(index, active, total);
                const style = slideStyle(offset);
                return (
                  <Slide key={feature.title} data-slide={offset === 0 ? "current" : "side"} aria-hidden={offset !== 0} {...style}>
                    <SlideCard $framed={framed} $isNeighbour={style.$isNeighbour}>
                      <img
                        src={feature.image}
                        srcSet={keyFeatureSrcSet(feature.image)}
                        sizes={KEY_FEATURE_IMAGE_SIZES}
                        alt={offset === 0 ? feature.imageAlt || feature.title : ""}
                        draggable={false}
                        loading={isIdle && Math.abs(offset) <= 1 ? "eager" : "lazy"}
                        decoding="async"
                      />
                      {framed && (
                        <Wash $isNeighbour={style.$isNeighbour} $direction={offset < 0 ? "to left" : "to right"} aria-hidden="true" />
                      )}
                    </SlideCard>
                  </Slide>
                );
              })}
            </Track>
            <Arrow
              type="button"
              $side="left"
              aria-label="Previous feature"
              onClick={() => goTo((active + total - 1) % total, -1)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Arrow>
            <Arrow
              type="button"
              $side="right"
              aria-label="Next feature"
              onClick={() => goTo((active + 1) % total, 1)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Arrow>
          </Stage>
          <Dots role="tablist" aria-label="Features">
            {features.map((feature, index) => (
              <Dot
                key={feature.title}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={cleanTitle(feature.title)}
                $active={index === active}
                onClick={() => goTo(index)}
              />
            ))}
          </Dots>
        </Body>
      </Shell>
    </FeaturesSection>
  );
};

export default KeyFeatures;
