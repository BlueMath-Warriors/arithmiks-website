import { styled, keyframes, css } from "styled-components";
import { breakpoints } from "../Landing/index.styled";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const ScannerCard = styled.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 6px 28px rgba(17, 17, 17, 0.04);

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 20px;
    border-radius: 16px;
  }
`;

export const Dropzone = styled.div`
  border: 2px dashed ${(p) => (p.$dragOver ? "#1355ff" : "#c7d2ff")};
  border-radius: 16px;
  background: ${(p) => (p.$dragOver ? "#eef3ff" : "#fafbff")};
  padding: 56px 24px;
  text-align: center;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease,
    transform 0.15s ease;

  &:hover {
    background: #f3f6ff;
    border-color: #1355ff;
  }
  &:focus-visible {
    outline: 3px solid #1355ff;
    outline-offset: 3px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 36px 16px;
  }
`;

export const DropzoneIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #1355ff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-size: 24px;
  font-weight: 700;

  &::before {
    content: "↑";
  }
`;

export const DropzoneHeading = styled.div`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 600;
  color: #111;
  margin-bottom: 6px;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 17px;
  }
`;

export const DropzoneSub = styled.div`
  font-family: Poppins;
  font-size: 14px;
  color: #5c5c5c;
`;

export const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
`;

export const FileMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background: #f5f7fb;
  border-radius: 10px;
  margin-bottom: 16px;
  font-family: Poppins;

  strong {
    font-weight: 600;
    color: #111;
    word-break: break-all;
  }
  span {
    font-size: 13px;
    color: #5c5c5c;
    white-space: nowrap;
  }
`;

export const ProgressShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Poppins;
  font-size: 14px;
  color: #3a3a3a;

  strong {
    color: #1355ff;
    font-weight: 600;
  }
`;

export const ProgressTrack = styled.div`
  height: 10px;
  background: #eef1f7;
  border-radius: 999px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${(p) => p.$pct}%;
  background: linear-gradient(90deg, #1355ff 0%, #6a8dff 100%);
  transition: width 0.2s ease;
`;

export const PhaseRow = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

export const PhasePill = styled.li`
  background: ${(p) => (p.$active ? "#eef3ff" : "#f5f7fb")};
  color: ${(p) => (p.$active ? "#1355ff" : "#5c5c5c")};
  border: 1px solid ${(p) => (p.$active ? "#c7d2ff" : "#e5e7eb")};
  border-radius: 10px;
  padding: 10px 14px;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 600;
  position: relative;
  overflow: hidden;

  ${(p) =>
    p.$active &&
    css`
      background-image: linear-gradient(
        90deg,
        #eef3ff 0px,
        #dae3ff 40px,
        #eef3ff 80px
      );
      background-size: 200px 100%;
      background-repeat: no-repeat;
      animation: ${shimmer} 1.4s infinite linear;
    `}
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid #c7d2ff;
  border-top-color: #1355ff;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  vertical-align: middle;
  margin-right: 8px;
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const PrimaryBtn = styled.button`
  background: #1355ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #0e47d6;
  }
  &:focus-visible {
    outline: 3px solid #1355ff;
    outline-offset: 2px;
  }
`;

export const GhostBtn = styled.button`
  background: transparent;
  color: #1355ff;
  border: 1px solid #c7d2ff;
  border-radius: 8px;
  padding: 12px 20px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #eef3ff;
  }
  &:focus-visible {
    outline: 3px solid #1355ff;
    outline-offset: 2px;
  }
`;

export const Banner = styled.div`
  background: ${(p) => p.$bg};
  border: 1px solid ${(p) => p.$border};
  color: ${(p) => p.$color};
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 20px;
  display: flex;
  gap: 16px;
  align-items: flex-start;

  h2 {
    font-family: Poppins;
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 4px;
    color: ${(p) => p.$color};
  }
  p {
    font-family: Poppins;
    font-size: 14px;
    margin: 0;
    color: ${(p) => p.$color};
    opacity: 0.9;
  }
`;

export const BannerIcon = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  background: ${(p) => p.$color};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: Poppins;
`;

export const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;

  @media screen and (max-width: ${breakpoints.large}) {
    grid-template-columns: 1fr;
  }
`;

export const ResultCard = styled.article`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 20px;

  h3 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    color: #111;
    margin: 0 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StatusPill = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-family: Poppins;
  font-size: 11px;
  font-weight: 600;
  background: ${(p) => p.$bg || "#f5f7fb"};
  color: ${(p) => p.$color || "#5c5c5c"};
`;

export const DetailRow = styled.div`
  font-family: Poppins;
  font-size: 13px;
  color: #3a3a3a;
  margin-top: 6px;

  strong {
    font-weight: 600;
    color: #111;
  }
`;

export const MatchList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MatchItem = styled.li`
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 10px 12px;
  font-family: Poppins;
  font-size: 13px;

  .rule {
    font-weight: 600;
    color: #111;
  }
  .desc {
    color: #3a3a3a;
    margin-top: 4px;
  }
  .tags {
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .tag {
    background: #f5f7fb;
    border-radius: 999px;
    padding: 2px 8px;
    font-size: 11px;
    color: #5c5c5c;
  }
`;

export const ArchiveBreadcrumb = styled.div`
  margin-top: 6px;
  font-family: Poppins;
  font-size: 12px;
  color: #1355ff;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  span {
    background: #eef3ff;
    padding: 2px 8px;
    border-radius: 6px;
  }
  .sep {
    color: #9a9a9a;
    background: transparent;
  }
`;

export const IndicatorList = styled.ul`
  margin: 8px 0 0;
  padding-left: 18px;
  font-family: Poppins;
  font-size: 13px;
  color: #3a3a3a;
  line-height: 1.55;
`;

export const HowItWorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

export const HowCard = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 20px;

  .num {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #1355ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    font-weight: 700;
    font-size: 13px;
    margin-bottom: 10px;
  }
  h3 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    color: #111;
    margin: 0 0 6px;
  }
  p {
    font-family: Poppins;
    font-size: 14px;
    line-height: 1.55;
    color: #5c5c5c;
    margin: 0;
  }
`;

export const PrivacyBox = styled.div`
  background: #eef3ff;
  border: 1px solid #c7d2ff;
  border-radius: 12px;
  padding: 16px 20px;
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.55;
  color: #1a3a9e;
  margin-top: 20px;
`;

export const MutedText = styled.p`
  font-family: Poppins;
  font-size: 13px;
  color: #8a8a8a;
  margin: 8px 0 0;
`;
