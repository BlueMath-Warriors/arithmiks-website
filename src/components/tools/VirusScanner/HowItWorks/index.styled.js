import styled from "styled-components";
import { BandShell } from "../../../shared/Band/index.styled";
import { NIGHT } from "../Hero/index.styled";

export const Section = styled.section`
  position: relative;
  padding: clamp(72px, 6.4vw, 120px) 0;
  background: ${NIGHT};
  color: #fff;
  overflow: clip;

  @media (max-width: 640px) {
    padding: 64px 0;
  }
`;

export const Glow = styled.div`
  position: absolute;
  right: -10%;
  top: -30%;
  width: 50vw;
  height: 50vw;
  max-width: 760px;
  max-height: 760px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(19, 85, 255, 0.22), rgba(19, 85, 255, 0) 64%);
  pointer-events: none;
`;

export const Shell = styled(BandShell)`
  z-index: 1;
`;

export const Inner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const Steps = styled.ol`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin: clamp(32px, 3.4vw, 48px) 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Step = styled.li`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: clamp(24px, 2.4vw, 32px);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const StepHead = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StepNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: ${NIGHT};
  border: 1.5px solid rgba(143, 169, 255, 0.55);
  font-size: 13.5px;
  font-weight: 700;
  color: #fff;
`;

export const StepTitle = styled.h3`
  margin: 6px 0 0;
  font-size: clamp(19px, 1.5vw, 22px);
  font-weight: 650;
  letter-spacing: -0.014em;
  color: #fff;
`;

export const StepText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.7);
  text-wrap: pretty;
`;
