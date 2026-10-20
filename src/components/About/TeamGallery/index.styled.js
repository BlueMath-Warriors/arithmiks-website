import styled from "styled-components";

const MOBILE = "(max-width: 760px)";
const STACKED = "(max-width: 760px), (prefers-reduced-motion: reduce)";

export const Stage = styled.div`
  position: relative;
  margin-top: clamp(48px, 4.6vw, 84px);
`;

export const Pin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(20px, 2.4vh, 34px);
  overflow: hidden;
  transition: margin 1.1s cubic-bezier(0.16, 1, 0.3, 1);

  @media ${STACKED} {
    margin-left: 0 !important;
    margin-right: 0 !important;
    overflow: visible;
  }
`;

export const Track = styled.div`
  --gap: clamp(14px, 2.2vw, 32px);
  display: flex;
  align-items: center;
  gap: var(--gap);
  width: 100%;
  will-change: transform;

  @media ${STACKED} {
    width: 100% !important;
    transform: none !important;
    will-change: auto;
  }

  @media ${MOBILE} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const frame = `
  aspect-ratio: 4 / 3;
  border-radius: clamp(16px, 1.3vw, 22px);
  overflow: hidden;
  background: #edf1f8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Card = styled.div`
  ${frame}
  flex: 1 1 0;
  min-width: 0;
  transition: opacity 0.75s cubic-bezier(0.22, 0.61, 0.36, 1),
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);

  /* Hidden from first paint (see gatsby-ssr.js) so the rise-in never flashes. */
  @media (min-width: 761px) {
    html[data-motion] & {
      opacity: 0;
      transform: translate3d(0, 56px, 0);
    }
  }

  @media ${STACKED} {
    opacity: 1 !important;
    transform: none !important;
  }

  @media ${MOBILE} {
    flex: none !important;
    width: 100% !important;
  }
`;

// Copies of the three frames that only appear once the marquee starts, so the
// row can loop seamlessly; zero-width with a negative margin until then.
export const Duplicate = styled.div`
  ${frame}
  flex: 0 0 0px;
  width: 0;
  margin-right: calc(-1 * var(--gap));
  opacity: 0;
  transition: opacity 0.5s ease;

  @media ${STACKED} {
    display: none;
  }
`;
