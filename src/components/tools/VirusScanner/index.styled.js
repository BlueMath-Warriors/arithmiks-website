import { styled, keyframes, css } from "styled-components";
import { breakpoints } from "../../Landing/index.styled";

const siteFontFeatures = `
  font-feature-settings: 'cv09' on, 'cv04' on, 'ss01' on, 'cv03' on, 'ss03' on, 'cv06' on;
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const pulseRing = keyframes`
  0% { transform: scale(0.85); opacity: 0.9; }
  80%, 100% { transform: scale(1.6); opacity: 0; }
`;

export const ScannerCard = styled.section`
  position: relative;
  background: #ffffff;
  border: 1px solid #e7eaee;
  border-radius: 24px;
  padding: 40px;
  box-shadow:
    0 1px 2px rgba(6, 18, 55, 0.04),
    0 24px 60px rgba(6, 18, 55, 0.06);
  ${siteFontFeatures}

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 24px;
    border-radius: 18px;
  }
`;

export const Dropzone = styled.div`
  position: relative;
  border: 2px dashed ${(p) => (p.$dragOver ? "#1355ff" : "#c7d2ff")};
  border-radius: 20px;
  background: ${(p) =>
    p.$dragOver
      ? "linear-gradient(180deg, #eef3ff 0%, #f7f9ff 100%)"
      : "linear-gradient(180deg, #fafbff 0%, #ffffff 100%)"};
  padding: 72px 32px;
  text-align: center;
  cursor: pointer;
  transition:
    background 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: linear-gradient(180deg, #eef3ff 0%, #f5f7ff 100%);
    border-color: #1355ff;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(19, 85, 255, 0.12);
  }
  &:focus-visible {
    outline: 3px solid #1355ff;
    outline-offset: 3px;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 48px 20px;
    border-radius: 16px;
  }
`;

export const DropzoneIcon = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 22px;
  background: linear-gradient(135deg, #1355ff 0%, #3b7aff 100%);
  color: #ffffff;
  display: grid;
  place-items: center;
  margin: 0 auto 20px;
  box-shadow:
    0 10px 24px rgba(19, 85, 255, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);

  svg {
    width: 32px;
    height: 32px;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 22px;
    border: 2px solid rgba(19, 85, 255, 0.45);
    animation: ${pulseRing} 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    pointer-events: none;
  }
`;

export const DropzoneHeading = styled.div`
  font-family: Poppins;
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #061237;
  margin-bottom: 8px;
  ${siteFontFeatures}

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const DropzoneSub = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #5c5c5c;
  ${siteFontFeatures}
`;

export const DropzoneHint = styled.div`
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #eef3ff;
  color: #1355ff;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.08px;
  ${siteFontFeatures}

  svg {
    width: 14px;
    height: 14px;
  }
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
  padding: 14px 20px;
  background: #f5f7fa;
  border: 1px solid #e7eaee;
  border-radius: 12px;
  margin-bottom: 20px;
  font-family: Poppins;
  ${siteFontFeatures}

  strong {
    font-size: 14px;
    font-weight: 600;
    color: #061237;
    word-break: break-all;
    line-height: 22px;
  }
  span {
    font-size: 13px;
    font-weight: 500;
    color: #5c5c5c;
    white-space: nowrap;
  }
`;

export const ProgressShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: #061237;
  ${siteFontFeatures}

  strong {
    color: #1355ff;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
  }
`;

export const ProgressTrack = styled.div`
  height: 10px;
  background: #eef1f7;
  border-radius: 999px;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(6, 18, 55, 0.06);
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${(p) => p.$pct}%;
  background: linear-gradient(90deg, #1355ff 0%, #3b7aff 50%, #1355ff 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.6s linear infinite;
  transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const IndeterminateFill = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #1355ff 0%, #3b7aff 50%, #1355ff 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s linear infinite;
`;

export const PhaseRow = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

const phasePillBase = (state) => {
  switch (state) {
    case "running":
      return css`
        background: #ffffff;
        color: #061237;
        border-color: #c7d2ff;
        font-weight: 600;
        box-shadow: 0 4px 16px rgba(19, 85, 255, 0.1);
        &::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 11px;
          background: linear-gradient(
            90deg,
            rgba(19, 85, 255, 0) 0%,
            rgba(19, 85, 255, 0.08) 50%,
            rgba(19, 85, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: ${shimmer} 1.6s linear infinite;
          pointer-events: none;
        }
      `;
    case "completed":
      return css`
        background: #f0faf4;
        color: #0f7a3a;
        border-color: #bde3cb;
        font-weight: 600;
      `;
    case "skipped":
      return css`
        background: #fafbff;
        color: #8892a6;
        border-color: #e7eaee;
        font-style: italic;
        font-weight: 500;
      `;
    case "failed":
      return css`
        background: #fdecec;
        color: #c0261a;
        border-color: #f3b4b0;
        font-weight: 600;
      `;
    case "pending":
    default:
      return css`
        background: #f5f7fa;
        color: #8892a6;
        border-color: #e7eaee;
        font-weight: 600;
      `;
  }
};

const phaseChipBase = (state) => {
  switch (state) {
    case "running":
      return css`
        background: #1355ff;
        color: #ffffff;
        border: none;
      `;
    case "completed":
      return css`
        background: #0f7a3a;
        color: #ffffff;
        border: none;
      `;
    case "skipped":
      return css`
        background: #e7eaee;
        color: #8892a6;
        border: none;
      `;
    case "failed":
      return css`
        background: #c0261a;
        color: #ffffff;
        border: none;
      `;
    case "pending":
    default:
      return css`
        background: #e7eaee;
        color: #8892a6;
        border: none;
      `;
  }
};

export const PhasePill = styled.li`
  position: relative;
  border: 1px solid #e7eaee;
  border-radius: 12px;
  padding: 14px 16px;
  font-family: Poppins;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.08px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 0;
  transition:
    background 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  ${siteFontFeatures}

  ${(p) => phasePillBase(p.$state || "pending")}

  .phaseChip {
    position: relative;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    ${(p) => phaseChipBase(p.$state || "pending")}
  }

  .phaseLabel {
    position: relative;
    z-index: 1;
  }
`;

export const PhasePillSpinner = styled.span`
  display: block;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ${spin} 0.75s linear infinite;
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #c7d2ff;
  border-top-color: #1355ff;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  vertical-align: middle;
  margin-right: 10px;
`;

export const ActionsRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const btnBase = css`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  border-radius: 8px;
  padding: 13px 22px;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  ${siteFontFeatures}
`;

export const PrimaryBtn = styled.button`
  ${btnBase};
  background: #1355ff;
  color: #ffffff;
  border: none;

  &:hover {
    background: #0040e0;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(19, 85, 255, 0.35);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(19, 85, 255, 0.3);
  }
  &:focus-visible {
    outline: 3px solid #1355ff;
    outline-offset: 2px;
  }
`;

export const GhostBtn = styled.button`
  ${btnBase};
  background: #ffffff;
  color: #1355ff;
  border: 1px solid #1355ff;

  &:hover {
    background: rgba(19, 85, 255, 0.05);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(19, 85, 255, 0.2);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(19, 85, 255, 0.15);
  }
  &:focus-visible {
    outline: 3px solid #1355ff;
    outline-offset: 2px;
  }
`;

export const Banner = styled.div`
  position: relative;
  background: ${(p) => p.$bg};
  border: 1px solid ${(p) => p.$border};
  color: ${(p) => p.$color};
  border-radius: 18px;
  padding: 24px 28px;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  box-shadow: 0 10px 24px rgba(6, 18, 55, 0.04);
  ${siteFontFeatures}

  h2 {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.36px;
    margin: 0 0 6px;
    color: ${(p) => p.$color};
  }
  p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
    color: ${(p) => p.$color};
    opacity: 0.88;
  }

  @media screen and (max-width: ${breakpoints.medium}) {
    padding: 20px 22px;
    gap: 16px;

    h2 {
      font-size: 20px;
      line-height: 28px;
    }
  }
`;

export const BannerIcon = styled.div`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 14px;
  background: ${(p) => p.$color};
  color: #ffffff;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-family: Poppins;
  font-size: 20px;
  box-shadow: 0 6px 16px rgba(6, 18, 55, 0.12);
`;

export const ResultGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 0;

  @media screen and (max-width: ${breakpoints.large}) {
    grid-template-columns: 1fr;
  }
`;

export const UserSummaryList = styled.ul`
  margin: 0 0 4px;
  padding-left: 1.35rem;
  color: #061237;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  ${siteFontFeatures}

  li {
    margin: 0 0 10px;
  }
  li:last-child {
    margin-bottom: 0;
  }
`;

export const JobIdLine = styled.p`
  margin: 0 0 16px;
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: 12px;
  line-height: 18px;
  color: #5c6478;
  ${siteFontFeatures}
`;

export const TechnicalDetails = styled.details`
  margin-top: 16px;
  border: 1px solid #e7eaee;
  border-radius: 16px;
  background: #fafbfc;
  overflow: hidden;
  ${siteFontFeatures}

  summary {
    cursor: pointer;
    font-family: Poppins;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    color: #061237;
    padding: 16px 20px;
    list-style: none;
    user-select: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #061237;
    margin-right: 10px;
    transform: translateY(-1px) rotate(-90deg);
    transition: transform 0.2s ease;
  }
  &[open] summary::before {
    transform: translateY(2px) rotate(0);
  }
  summary:focus-visible {
    outline: 3px solid #1355ff;
    outline-offset: -3px;
  }

  ${ResultGrid} {
    margin: 0 20px 20px;
  }
`;

export const ResultCard = styled.article`
  background: #ffffff;
  border: 1px solid #e7eaee;
  border-radius: 16px;
  padding: 22px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  ${siteFontFeatures}

  &:hover {
    border-color: #c7d2ff;
    box-shadow: 0 8px 20px rgba(6, 18, 55, 0.05);
  }

  h3 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #061237;
    margin: 0 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`;

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  font-family: Poppins;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  background: ${(p) => p.$bg || "#f5f7fa"};
  color: ${(p) => p.$color || "#5c5c5c"};

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: currentColor;
  }
`;

export const DetailRow = styled.div`
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  color: #3a3a3a;
  margin-top: 6px;
  ${siteFontFeatures}

  strong {
    font-weight: 600;
    color: #061237;
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
  border: 1px solid #e7eaee;
  border-radius: 10px;
  padding: 12px 14px;
  background: #fafbff;
  font-family: Poppins;
  font-size: 13px;
  ${siteFontFeatures}

  .rule {
    font-weight: 600;
    color: #061237;
  }
  .desc {
    color: #3a3a3a;
    margin-top: 4px;
    line-height: 20px;
  }
  .tags {
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .tag {
    background: #ffffff;
    border: 1px solid #e7eaee;
    border-radius: 999px;
    padding: 2px 10px;
    font-size: 11px;
    font-weight: 500;
    color: #5c5c5c;
    letter-spacing: 0.2px;
  }
`;

export const ArchiveBreadcrumb = styled.div`
  margin-top: 8px;
  font-family: Poppins;
  font-size: 12px;
  color: #1355ff;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;

  span {
    background: #eef3ff;
    padding: 3px 10px;
    border-radius: 6px;
    font-weight: 500;
  }
  .sep {
    color: #9a9a9a;
    background: transparent;
    padding: 0;
  }
`;

export const IndicatorList = styled.ul`
  margin: 10px 0 0;
  padding-left: 20px;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  color: #3a3a3a;
  line-height: 22px;
  ${siteFontFeatures}

  li::marker {
    color: #1355ff;
  }
`;

export const HowItWorksWrap = styled.div`
  margin-top: 56px;

  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 40px;
  }
`;

export const HowHeader = styled.div`
  margin-bottom: 24px;
`;

export const HowEyebrow = styled.p`
  color: #1355ff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  margin: 0 0 6px;
  ${siteFontFeatures}
`;

export const HowHeading = styled.h2`
  color: #061237;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: -0.48px;
  margin: 0;
  font-variant-numeric: lining-nums proportional-nums;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.36px;
  }
`;

export const HowItWorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const HowCard = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e7eaee;
  border-radius: 18px;
  padding: 26px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  ${siteFontFeatures}

  &:hover {
    transform: translateY(-3px);
    border-color: #c7d2ff;
    box-shadow: 0 10px 30px rgba(19, 85, 255, 0.12);
  }

  .num {
    width: 36px;
    height: 36px;
    border-radius: 12px;
    background: linear-gradient(135deg, #1355ff 0%, #3b7aff 100%);
    color: #ffffff;
    display: grid;
    place-items: center;
    font-family: Poppins;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 16px;
    box-shadow: 0 6px 14px rgba(19, 85, 255, 0.28);
    font-variant-numeric: tabular-nums;
  }
  h3 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: -0.18px;
    color: #061237;
    margin: 0 0 8px;
  }
  p {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: #5c5c5c;
    margin: 0;
  }
`;

export const PrivacyBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: linear-gradient(135deg, #eef3ff 0%, #f5f7ff 100%);
  border: 1px solid #c7d2ff;
  border-radius: 14px;
  padding: 18px 22px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #1a3a9e;
  margin-top: 20px;
  ${siteFontFeatures}

  strong {
    font-weight: 600;
    color: #061237;
  }

  .icon {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    background: #ffffff;
    color: #1355ff;
    display: grid;
    place-items: center;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const MutedText = styled.p`
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  color: #8a8a8a;
  line-height: 20px;
  margin: 8px 0 0;
  ${siteFontFeatures}
`;
