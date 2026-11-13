import styled, { keyframes } from "styled-components";
import { floatA, floatB } from "../../../shared/MeshHeroBackground/index.styled";
import { BandShell } from "../../../shared/Band/index.styled";

export const NIGHT = "#070B18";

export const sweep = keyframes`
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.9; }
  100% { transform: scale(1.7); opacity: 0; }
`;

export const Section = styled.section`
  position: relative;
  z-index: 1;
  padding: clamp(120px, 14vh, 160px) 0 clamp(150px, 14vw, 210px);
  background: ${NIGHT};
  color: #fff;
  overflow: clip;

  @media (max-height: 600px) and (min-width: 961px) {
    padding-top: 120px;
  }

  @media (max-width: 640px) {
    padding-top: 120px;
    padding-bottom: 64px;
  }
`;

export const Glows = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

const glow = `
  position: absolute;
  border-radius: 50%;
  filter: blur(10px);
`;

export const GlowBlue = styled.div`
  ${glow}
  left: -10%;
  top: -20%;
  width: 56vw;
  height: 56vw;
  max-width: 860px;
  max-height: 860px;
  background: radial-gradient(circle, rgba(19, 85, 255, 0.34), rgba(19, 85, 255, 0) 64%);
  animation: ${floatA} 17s ease-in-out infinite;
`;

export const GlowPink = styled.div`
  ${glow}
  right: -12%;
  top: 30%;
  width: 50vw;
  height: 50vw;
  max-width: 780px;
  max-height: 780px;
  background: radial-gradient(circle, rgba(236, 74, 158, 0.18), rgba(236, 74, 158, 0) 62%);
  animation: ${floatB} 21s ease-in-out infinite;
`;

export const Shell = styled(BandShell)`
  z-index: 1;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: clamp(32px, 5vw, 90px);
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Copy = styled.div`
  min-width: 0;
`;

export const EyebrowRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
`;

export const EyebrowText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #fff;
`;

export const Heading = styled.h1`
  margin: 0;
  font-size: clamp(34px, 4.6vw, 70px);
  font-weight: 550;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: #fff;
  text-wrap: balance;
`;

export const Intro = styled.p`
  margin: 24px 0 0;
  max-width: 560px;
  font-size: 16.5px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
  text-wrap: pretty;
`;

export const Badges = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
`;

export const Badge = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  font-size: 13.5px;
  font-weight: 550;
  color: rgba(255, 255, 255, 0.88);
`;

/* ── Shield art ──────────────────────────────────────────────────────── */

export const Shield = styled.div`
  position: relative;
  justify-self: center;
  width: min(100%, 400px);
  aspect-ratio: 1;

  @media (max-width: 900px) {
    width: min(78%, 300px);
  }
`;

export const Ring = styled.div`
  position: absolute;
  inset: ${({ $inset }) => $inset};
  border-radius: 50%;
  border: 1px solid ${({ $line }) => $line};
  background: ${({ $fill }) => $fill || "none"};
`;

export const Sweep = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    rgba(126, 123, 214, 0) 0deg,
    rgba(126, 123, 214, 0) 300deg,
    rgba(143, 169, 255, 0.34) 360deg
  );
  animation: ${sweep} 5s linear infinite;
  -webkit-mask: radial-gradient(circle, #000 70%, transparent 71%);
  mask: radial-gradient(circle, #000 70%, transparent 71%);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const MarkWrap = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 20px 40px rgba(126, 123, 214, 0.45));

  svg {
    width: clamp(150px, 15vw, 200px);
    height: clamp(150px, 15vw, 200px);
  }
`;

export const Threat = styled.span`
  position: absolute;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(7, 11, 24, 0.78);
  border: 1px solid ${({ $line }) => $line};
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ThreatPulse = styled.span`
  position: absolute;
  inset: -1px;
  border-radius: 50%;
  border: 1.5px solid ${({ $color }) => $color};
  animation: ${pulse} 2.4s ease-out ${({ $delay }) => $delay} infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
