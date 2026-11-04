import React from "react";

/**
 * Step 4 art: a desktop and phone screen scrolling through a tested interface.
 * Decorative, ported verbatim from the design (inline styles, as in the case
 * study flow diagrams); its keyframes live in StoryTimeline's styles.
 */
const ScreenPreview = () => (
  <div style={{ position: "relative", width: "80%", aspectRatio: "1.6" }}>
    <div
      style={{
        position: "absolute",
        left: "0",
        top: "6%",
        width: "68%",
        aspectRatio: "1.5",
        background: "#fff",
        border: "1px solid #E4E8F0",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 18px 40px -26px rgba(10,15,31,.35)",
      }}
    >
      <div
        style={{
          height: "22px",
          borderBottom: "1px solid #E4E8F0",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "0 10px",
        }}
      >
        <i style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#EC4A9E" }}></i>
        <i style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#F5B93D" }}></i>
        <i style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#39C27A" }}></i>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2.4fr",
          gap: "10px",
          padding: "10px",
          height: "calc(100% - 22px)",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
          <span
            style={{
              display: "block",
              height: "7px",
              width: "100%",
              borderRadius: "4px",
              background: "#E4E8F0",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "7px",
              width: "100%",
              borderRadius: "4px",
              background: "#1355FF",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "7px",
              width: "100%",
              borderRadius: "4px",
              background: "#E4E8F0",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "7px",
              width: "100%",
              borderRadius: "4px",
              background: "#E4E8F0",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "7px",
              width: "100%",
              borderRadius: "4px",
              background: "#E4E8F0",
            }}
          ></span>
        </div>
        <div style={{ overflow: "hidden" }}>
          <div
            data-anim=""
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              animation: "uxScroll 7s ease-in-out infinite",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "26px",
                borderRadius: "7px",
                border: "1px solid #E4E8F0",
                padding: "0 8px",
              }}
            >
              <i
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "4px",
                  background: "#1355FF",
                }}
              ></i>
              <span
                style={{
                  display: "block",
                  height: "6px",
                  width: "52%",
                  borderRadius: "4px",
                  background: "#CBD2E1",
                }}
              ></span>
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "26px",
                borderRadius: "7px",
                border: "1px solid #E4E8F0",
                padding: "0 8px",
              }}
            >
              <i
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "4px",
                  background: "#A96FC8",
                }}
              ></i>
              <span
                style={{
                  display: "block",
                  height: "6px",
                  width: "40%",
                  borderRadius: "4px",
                  background: "#CBD2E1",
                }}
              ></span>
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "26px",
                borderRadius: "7px",
                border: "1px solid #E4E8F0",
                padding: "0 8px",
              }}
            >
              <i
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "4px",
                  background: "#EC4A9E",
                }}
              ></i>
              <span
                style={{
                  display: "block",
                  height: "6px",
                  width: "60%",
                  borderRadius: "4px",
                  background: "#CBD2E1",
                }}
              ></span>
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "26px",
                borderRadius: "7px",
                border: "1px solid #E4E8F0",
                padding: "0 8px",
              }}
            >
              <i
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "4px",
                  background: "#39C27A",
                }}
              ></i>
              <span
                style={{
                  display: "block",
                  height: "6px",
                  width: "36%",
                  borderRadius: "4px",
                  background: "#CBD2E1",
                }}
              ></span>
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "26px",
                borderRadius: "7px",
                border: "1px solid #E4E8F0",
                padding: "0 8px",
              }}
            >
              <i
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "4px",
                  background: "#F5B93D",
                }}
              ></i>
              <span
                style={{
                  display: "block",
                  height: "6px",
                  width: "48%",
                  borderRadius: "4px",
                  background: "#CBD2E1",
                }}
              ></span>
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "26px",
                borderRadius: "7px",
                border: "1px solid #E4E8F0",
                padding: "0 8px",
              }}
            >
              <i
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "4px",
                  background: "#5B37C4",
                }}
              ></i>
              <span
                style={{
                  display: "block",
                  height: "6px",
                  width: "44%",
                  borderRadius: "4px",
                  background: "#CBD2E1",
                }}
              ></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      style={{
        position: "absolute",
        right: "0",
        bottom: "0",
        width: "30%",
        aspectRatio: "9/18",
        background: "#070B18",
        borderRadius: "18px",
        padding: "5px",
        boxShadow: "0 22px 44px -24px rgba(10,15,31,.5)",
      }}
    >
      <div
        style={{
          height: "100%",
          background: "#fff",
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <i
          style={{
            position: "absolute",
            top: "6px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "34%",
            height: "5px",
            borderRadius: "3px",
            background: "#070B18",
          }}
        ></i>
        <div
          data-anim=""
          style={{
            padding: "20px 9px 9px",
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            animation: "uxScroll 7s ease-in-out 1s infinite",
          }}
        >
          <span
            style={{
              display: "block",
              height: "7px",
              width: "60%",
              borderRadius: "4px",
              background: "#0A0F1F",
            }}
          ></span>
          <span
            style={{
              display: "block",
              aspectRatio: "16/9",
              borderRadius: "7px",
              background: "linear-gradient(135deg,#1355FF,#EC4A9E)",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "6px",
              width: "90%",
              borderRadius: "4px",
              background: "#E4E8F0",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "6px",
              width: "70%",
              borderRadius: "4px",
              background: "#E4E8F0",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "6px",
              width: "84%",
              borderRadius: "4px",
              background: "#E4E8F0",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "6px",
              width: "56%",
              borderRadius: "4px",
              background: "#E4E8F0",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "22px",
              borderRadius: "100px",
              background: "#1355FF",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "6px",
              width: "80%",
              borderRadius: "4px",
              background: "#E4E8F0",
            }}
          ></span>
          <span
            style={{
              display: "block",
              height: "6px",
              width: "64%",
              borderRadius: "4px",
              background: "#E4E8F0",
            }}
          ></span>
        </div>
      </div>
    </div>
  </div>
);

export default ScreenPreview;
