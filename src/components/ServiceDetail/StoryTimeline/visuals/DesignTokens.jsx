import React from "react";

/**
 * Step 3 art: brand colours, type and core components cycling through states.
 * Decorative, ported verbatim from the design (inline styles, as in the case
 * study flow diagrams); its keyframes live in StoryTimeline's styles.
 */
const DesignTokens = () => (
  <div style={{ width: "84%", display: "flex", flexDirection: "column", gap: "12px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "12px" }}>
      <div
        style={{
          background: "#fff",
          border: "1px solid #E4E8F0",
          borderRadius: "14px",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "10.5px",
            fontWeight: "650",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "#8A93A6",
          }}
        >
          Brand colour
        </span>
        <span style={{ display: "flex", gap: "7px" }}>
          <i
            data-anim=""
            style={{
              flex: "1",
              aspectRatio: "1",
              borderRadius: "9px",
              background: "#1355FF",
              border: "1px solid rgba(10,15,31,.08)",
              animation: "uxTok 7.5s ease-in-out 0s infinite",
            }}
          ></i>
          <i
            data-anim=""
            style={{
              flex: "1",
              aspectRatio: "1",
              borderRadius: "9px",
              background: "#070B18",
              border: "1px solid rgba(10,15,31,.08)",
              animation: "uxTok 7.5s ease-in-out 1.5s infinite",
            }}
          ></i>
          <i
            data-anim=""
            style={{
              flex: "1",
              aspectRatio: "1",
              borderRadius: "9px",
              background: "#A96FC8",
              border: "1px solid rgba(10,15,31,.08)",
              animation: "uxTok 7.5s ease-in-out 3s infinite",
            }}
          ></i>
          <i
            data-anim=""
            style={{
              flex: "1",
              aspectRatio: "1",
              borderRadius: "9px",
              background: "#EC4A9E",
              border: "1px solid rgba(10,15,31,.08)",
              animation: "uxTok 7.5s ease-in-out 4.5s infinite",
            }}
          ></i>
          <i
            data-anim=""
            style={{
              flex: "1",
              aspectRatio: "1",
              borderRadius: "9px",
              background: "#F5F7FB",
              border: "1px solid rgba(10,15,31,.08)",
              animation: "uxTok 7.5s ease-in-out 6s infinite",
            }}
          ></i>
        </span>
        <span style={{ fontSize: "11px", color: "#5C6478" }}>
          Primary{" "}
          <span style={{ color: "#8A93A6", fontVariantNumeric: "tabular-nums" }}>#1355FF</span>
        </span>
      </div>
      <div
        style={{
          background: "#fff",
          border: "1px solid #E4E8F0",
          borderRadius: "14px",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "10.5px",
            fontWeight: "650",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "#8A93A6",
          }}
        >
          Type
        </span>
        <span
          data-anim=""
          style={{
            fontSize: "28px",
            fontWeight: "750",
            letterSpacing: "-.025em",
            lineHeight: "1",
            color: "#0A0F1F",
            animation: "uxWeight 4s ease-in-out infinite",
          }}
        >
          Aa
        </span>
        <span
          style={{
            fontWeight: "750",
            letterSpacing: "-.02em",
            fontSize: "12px",
            background: "linear-gradient(100deg,#1355FF 0%,#A96FC8 62%,#EC4A9E 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "#1355FF",
          }}
        >
          Gradient accent
        </span>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "12px" }}>
      <div
        style={{
          background: "#fff",
          border: "1px solid #E4E8F0",
          borderRadius: "14px",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "10.5px",
            fontWeight: "650",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "#8A93A6",
          }}
        >
          Button
        </span>
        <span
          data-anim=""
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            height: "28px",
            alignItems: "center",
            padding: "0 13px",
            borderRadius: "100px",
            background: "#1355FF",
            color: "#fff",
            fontSize: "11px",
            fontWeight: "600",
            animation: "uxBtn 4s ease-in-out infinite",
          }}
        >
          Primary
        </span>
      </div>
      <div
        style={{
          background: "#fff",
          border: "1px solid #E4E8F0",
          borderRadius: "14px",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "10.5px",
            fontWeight: "650",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "#8A93A6",
          }}
        >
          Input
        </span>
        <span
          data-anim=""
          style={{
            display: "flex",
            alignItems: "center",
            height: "28px",
            padding: "0 10px",
            borderRadius: "8px",
            border: "1.5px solid #E4E8F0",
            background: "#fff",
            fontSize: "11px",
            color: "#8A93A6",
            whiteSpace: "nowrap",
            overflow: "hidden",
            animation: "uxFocus 4s ease-in-out 1s infinite",
          }}
        >
          Email
          <i
            data-anim=""
            style={{
              width: "1px",
              height: "13px",
              background: "#1355FF",
              marginLeft: "2px",
              animation: "uxCaret 1s step-end infinite",
            }}
          ></i>
        </span>
      </div>
      <div
        style={{
          background: "#fff",
          border: "1px solid #E4E8F0",
          borderRadius: "14px",
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "10.5px",
            fontWeight: "650",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "#8A93A6",
          }}
        >
          Toggle
        </span>
        <span
          data-anim=""
          style={{
            position: "relative",
            display: "block",
            width: "42px",
            height: "24px",
            borderRadius: "100px",
            background: "#1355FF",
            animation: "uxTrack 4s ease-in-out infinite",
          }}
        >
          <i
            data-anim=""
            style={{
              position: "absolute",
              top: "3px",
              left: "3px",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#fff",
              animation: "uxKnob 4s ease-in-out infinite",
            }}
          ></i>
        </span>
      </div>
    </div>
  </div>
);

export default DesignTokens;
