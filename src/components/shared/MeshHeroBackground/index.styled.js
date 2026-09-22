import styled, { keyframes } from "styled-components";

const floatA = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(3%, -4%, 0) scale(1.06); }
`;

const floatB = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(-4%, 3%, 0) scale(1.05); }
`;

export const MeshClip = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

export const Mesh = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 330px);
  height: 760px;
  will-change: transform;
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
`;
