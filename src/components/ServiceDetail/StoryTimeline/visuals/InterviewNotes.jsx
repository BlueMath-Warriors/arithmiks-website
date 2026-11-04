import React from "react";

/**
 * Step 1 art: an interview transcript with pain points highlighting in turn.
 * Decorative, ported verbatim from the design (inline styles, as in the case
 * study flow diagrams); its keyframes live in StoryTimeline's styles.
 */
const InterviewNotes = () => (
  <div
    style={{
      width: "72%",
      background: "#fff",
      border: "1px solid #E4E8F0",
      borderRadius: "14px",
      padding: "18px 20px",
      boxShadow: "0 12px 30px -20px rgba(10,15,31,.25)",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
      <span
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          background: "linear-gradient(135deg,#9DB8FF,#E58BC9)",
        }}
      ></span>
      <span style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <span
          style={{
            display: "block",
            height: "7px",
            width: "86px",
            borderRadius: "4px",
            background: "#0A0F1F",
          }}
        ></span>
        <span
          style={{
            display: "block",
            height: "8px",
            width: "54px",
            borderRadius: "4px",
            background: "#CBD2E1",
          }}
        ></span>
      </span>
      <span
        style={{
          marginLeft: "auto",
          fontSize: "10.5px",
          fontWeight: "650",
          letterSpacing: ".08em",
          color: "#8A93A6",
        }}
      >
        INTERVIEW 04
      </span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
      <span
        data-anim=""
        style={{
          position: "relative",
          display: "block",
          height: "8px",
          width: "94%",
          borderRadius: "4px",
          background: "#E4E8F0",
          overflow: "hidden",
        }}
      >
        <i
          data-anim=""
          style={{
            position: "absolute",
            inset: "0",
            borderRadius: "4px",
            background: "#1355FF",
            transformOrigin: "left",
            animation: "uxHl 6s ease-in-out infinite",
          }}
        ></i>
      </span>
      <span
        style={{
          display: "block",
          height: "8px",
          width: "88%",
          borderRadius: "4px",
          background: "#E4E8F0",
        }}
      ></span>
      <span
        style={{
          position: "relative",
          display: "block",
          height: "8px",
          width: "70%",
          borderRadius: "4px",
          background: "#E4E8F0",
          overflow: "hidden",
        }}
      >
        <i
          style={{
            position: "absolute",
            inset: "0",
            borderRadius: "4px",
            background: "#A96FC8",
            transformOrigin: "left",
            animation: "uxHl 6s ease-in-out 2s infinite",
          }}
        ></i>
      </span>
      <span
        style={{
          display: "block",
          height: "8px",
          width: "92%",
          borderRadius: "4px",
          background: "#E4E8F0",
        }}
      ></span>
      <span
        style={{
          position: "relative",
          display: "block",
          height: "8px",
          width: "60%",
          borderRadius: "4px",
          background: "#E4E8F0",
          overflow: "hidden",
        }}
      >
        <i
          style={{
            position: "absolute",
            inset: "0",
            borderRadius: "4px",
            background: "#EC4A9E",
            transformOrigin: "left",
            animation: "uxHl 6s ease-in-out 4s infinite",
          }}
        ></i>
      </span>
    </div>
    <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
      <span
        style={{
          padding: "5px 10px",
          borderRadius: "100px",
          background: "#EAF0FF",
          color: "#1355FF",
          fontSize: "11px",
          fontWeight: "600",
          animation: "uxPop 6s ease-in-out infinite",
        }}
      >
        Pain point
      </span>
      <span
        style={{
          padding: "5px 10px",
          borderRadius: "100px",
          background: "#F3EAF9",
          color: "#8C4BAF",
          fontSize: "11px",
          fontWeight: "600",
          animation: "uxPop 6s ease-in-out 2s infinite",
        }}
      >
        Workaround
      </span>
      <span
        style={{
          padding: "5px 10px",
          borderRadius: "100px",
          background: "#FCE8F2",
          color: "#C72F7E",
          fontSize: "11px",
          fontWeight: "600",
          animation: "uxPop 6s ease-in-out 4s infinite",
        }}
      >
        Need
      </span>
    </div>
  </div>
);

export default InterviewNotes;
