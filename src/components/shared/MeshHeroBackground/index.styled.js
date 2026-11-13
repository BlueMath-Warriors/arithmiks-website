import styled, { css, keyframes } from "styled-components";

export const floatA = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(3%, -4%, 0) scale(1.06); }
`;

export const floatB = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-4%, 3%, 0) scale(1.05); }
`;

export const MeshClip = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

// Below this width the service-page heroes (which opt in with `fillOnPhone`)
// stretch the glows over the whole hero, as the UI/UX design does; elsewhere
// the glows keep their desktop placement.
const PHONE = "(max-width: 700px)";

export const Mesh = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 330px);
  height: 760px;
  will-change: transform;

  ${({ $fillOnPhone }) =>
    $fillOnPhone &&
    css`
      @media ${PHONE} {
        top: 0;
        height: 100%;
      }
    `}
`;

export const BlobBlue = styled.div`
  position: absolute;
  left: -6%;
  top: -46%;
  width: 52vw;
  height: 52vw;
  max-width: 820px;
  max-height: 820px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(19, 85, 255, 0.2),
    rgba(19, 85, 255, 0) 65%
  );
  filter: blur(10px);
  animation: ${floatA} 17s ease-in-out infinite;

  ${({ $fillOnPhone }) =>
    $fillOnPhone &&
    css`
      @media ${PHONE} {
        left: -38%;
        top: -6%;
        width: 118vw;
        height: 118vw;
      }
    `}
`;

export const BlobPink = styled.div`
  position: absolute;
  right: -8%;
  top: 42%;
  width: 46vw;
  height: 46vw;
  max-width: 760px;
  max-height: 760px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(236, 74, 158, 0.12),
    rgba(236, 74, 158, 0) 62%
  );
  filter: blur(10px);
  animation: ${floatB} 21s ease-in-out infinite;

  ${({ $fillOnPhone }) =>
    $fillOnPhone &&
    css`
      @media ${PHONE} {
        right: -42%;
        top: auto;
        bottom: 2%;
        width: 112vw;
        height: 112vw;
      }
    `}
`;
