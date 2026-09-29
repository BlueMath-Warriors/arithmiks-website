import React from "react";

/**
 * The ClauseLens pipeline diagram, ported from the design: an upload step, then
 * Parse → Retrieve → Analyse → grounding gate → Report, with the "ask a
 * question" path below it. The data-cl* attributes are the hooks the shared
 * Flow section uses for its responsive rules and connector alignment.
 */
const FlowDiagram = () => (
  <div
    data-clflow=""
    style={{
      position: "relative",
      display: "grid",
      gridTemplateColumns:
        "172px 40px minmax(0,1fr) 40px minmax(0,1fr) 40px max-content 40px minmax(0,1fr)",
      gap: "0 clamp(2px,.4vw,8px)",
      alignItems: "center",
      padding: "clamp(28px,3vw,48px) clamp(22px,2.6vw,44px)",
    }}
  >
    <div
      data-clstart=""
      style={{
        gridColumn: "1",
        gridRow: "1",
        alignSelf: "center",
        position: "relative",
        padding: "2px",
        borderRadius: "22px",
        background: "linear-gradient(135deg,#5C8CFF 0%,#1355FF 40%,#A96FC8 78%,#EC4A9E 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "9px",
          padding: "clamp(18px,1.8vw,26px) 12px",
          borderRadius: "20px",
          background: "#fff",
        }}
      >
        <span
          style={{
            fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
            fontSize: "9.5px",
            fontWeight: "600",
            letterSpacing: ".1em",
            lineHeight: "1.4",
            textTransform: "uppercase",
            color: "#5C6478",
            whiteSpace: "nowrap",
          }}
        >
          Review a contract
        </span>
        <span
          style={{
            fontSize: "clamp(16px,1.25vw,20px)",
            fontWeight: "500",
            letterSpacing: "-.015em",
            lineHeight: "1.2",
            color: "#0A0F1F",
          }}
        >
          Upload contracts
        </span>
        <span
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "5px",
            marginTop: "2px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: "550",
              color: "#1355FF",
              background: "#EAF0FF",
              padding: "4px 8px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
            }}
          >
            PDF
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: "550",
              color: "#1355FF",
              background: "#EAF0FF",
              padding: "4px 8px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
            }}
          >
            DOCX
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: "550",
              color: "#1355FF",
              background: "#EAF0FF",
              padding: "4px 8px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
            }}
          >
            Batch
          </span>
        </span>
        <span style={{ fontSize: "11.5px", lineHeight: "1.45", color: "#5C6478" }}>
          One file or a whole batch, straight into your library
        </span>
      </div>
    </div>
    <span
      data-clarrow=""
      aria-hidden="true"
      style={{
        gridColumn: "2",
        gridRow: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        color: "#8A93A6",
      }}
    >
      <svg
        viewBox="0 0 34 16"
        width="34"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h28M25 3l5 5-5 5"></path>
      </svg>
    </span>
    <div
      data-clcard=""
      style={{
        gridColumn: "3",
        gridRow: "1",
        alignSelf: "start",
        minWidth: "0",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid #E4E8F0",
        boxShadow: "0 8px 24px rgba(10,15,31,.06)",
      }}
    >
      <span
        aria-hidden="true"
        style={{ display: "block", flex: "none", height: "6px", background: "#1355FF" }}
      ></span>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "clamp(14px,1.4vw,20px) clamp(12px,1.2vw,16px) clamp(14px,1.4vw,18px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "4px 10px",
          }}
        >
          <span
            style={{
              fontSize: "clamp(13px,1vw,15px)",
              fontWeight: "500",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#0A0F1F",
            }}
          >
            Parse
          </span>
          <span
            style={{
              fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
              fontSize: "10px",
              fontWeight: "550",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#5C6478",
              whiteSpace: "nowrap",
            }}
          >
            Document
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6M10 17h6"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Every file becomes a PDF
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              Word files converted by headless LibreOffice, so one pipeline reads everything
            </span>
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 5h16v14H4V5Zm0 5h16M9 10v9"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Layout rebuilt
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              Sections, headings and tables restored; OCR only on low-confidence pages
            </span>
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 6h14M8 12h11M11 18h8"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Clause-aware chunks
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              §12 → 12.3 → 12.3(a), each tied to its exact place on the page
            </span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "8px 12px",
            marginTop: "auto",
            paddingTop: "12px",
            borderTop: "1px solid #EEF1F6",
          }}
        >
          <span
            style={{
              fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#5C6478",
            }}
          >
            Built on
          </span>
          <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
            <img
              src="/case-studies/clauselens/tech/docling.png"
              alt="Docling"
              title="Docling"
              style={{
                display: "block",
                height: "18px",
                width: "auto",
                filter: "brightness(0)",
                opacity: ".42",
              }}
            />
            <img
              src="/case-studies/clauselens/tech/libreoffice.png"
              alt="LibreOffice"
              title="LibreOffice"
              style={{
                display: "block",
                height: "18px",
                width: "auto",
                filter: "brightness(0)",
                opacity: ".42",
              }}
            />
          </span>
        </div>
      </div>
    </div>
    <span
      data-clarrow=""
      aria-hidden="true"
      style={{
        gridColumn: "4",
        gridRow: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        color: "#8A93A6",
      }}
    >
      <svg
        viewBox="0 0 34 16"
        width="34"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h28M25 3l5 5-5 5"></path>
      </svg>
    </span>
    <div
      data-clcard=""
      style={{
        gridColumn: "5",
        gridRow: "1",
        alignSelf: "start",
        minWidth: "0",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid #E4E8F0",
        boxShadow: "0 8px 24px rgba(10,15,31,.06)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "block",
          flex: "none",
          height: "6px",
          background: "linear-gradient(90deg,#1355FF,#A96FC8)",
        }}
      ></span>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "clamp(14px,1.4vw,20px) clamp(12px,1.2vw,16px) clamp(14px,1.4vw,18px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "4px 10px",
          }}
        >
          <span
            style={{
              fontSize: "clamp(13px,1vw,15px)",
              fontWeight: "500",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#0A0F1F",
            }}
          >
            Analyse
          </span>
          <span
            style={{
              fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
              fontSize: "10px",
              fontWeight: "550",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#5C6478",
              whiteSpace: "nowrap",
            }}
          >
            AI agents
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5v-15ZM5 19.5A1.5 1.5 0 0 0 6.5 21H19M9 7h6"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Definitions agent
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              Defined terms resolved so every later stage reads them the same way
            </span>
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M8 7 3 12l5 5M16 7l5 5-5 5M13.5 4l-3 16"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Extraction agent
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              Clauses, key terms, obligations and a summary pulled from the text
            </span>
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 4 3 20h18L12 4Zm0 6v4m0 3h.01"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Risk agent
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              Each clause rated red, amber or green, with a rationale
            </span>
            <span
              style={{
                alignSelf: "flex-start",
                marginTop: "6px",
                maxWidth: "100%",
                fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
                fontSize: "9px",
                fontWeight: "600",
                letterSpacing: ".07em",
                lineHeight: "1.3",
                textTransform: "uppercase",
                color: "#A96FC8",
                border: "1px solid rgba(169,111,200,.45)",
                borderRadius: "999px",
                padding: "3px 8px",
                whiteSpace: "nowrap",
              }}
            >
              Rules engine can override
            </span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "8px 12px",
            marginTop: "auto",
            paddingTop: "12px",
            borderTop: "1px solid #EEF1F6",
          }}
        >
          <span
            style={{
              fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#5C6478",
            }}
          >
            Model router
          </span>
          <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px" }}>
            <img
              src="/case-studies/clauselens/tech/openai.svg"
              alt="OpenAI"
              title="OpenAI"
              style={{
                display: "block",
                height: "18px",
                width: "auto",
                filter: "brightness(0)",
                opacity: ".42",
              }}
            />
            <img
              src="/case-studies/clauselens/tech/anthropic.svg"
              alt="Anthropic"
              title="Anthropic"
              style={{
                display: "block",
                height: "18px",
                width: "auto",
                filter: "brightness(0)",
                opacity: ".42",
              }}
            />
            <img
              src="/case-studies/clauselens/tech/gemini.svg"
              alt="Gemini"
              title="Gemini"
              style={{
                display: "block",
                height: "18px",
                width: "auto",
                filter: "brightness(0)",
                opacity: ".42",
              }}
            />
            <img
              src="/case-studies/clauselens/tech/groq.svg"
              alt="Groq"
              title="Groq"
              style={{
                display: "block",
                height: "18px",
                width: "auto",
                filter: "brightness(0)",
                opacity: ".42",
              }}
            />
          </span>
        </div>
      </div>
    </div>
    <span
      data-clarrow=""
      aria-hidden="true"
      style={{
        gridColumn: "6",
        gridRow: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        color: "#8A93A6",
      }}
    >
      <svg
        viewBox="0 0 34 16"
        width="34"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h28M25 3l5 5-5 5"></path>
      </svg>
    </span>
    <div
      data-clgate=""
      style={{
        gridColumn: "7",
        gridRow: "1",
        alignSelf: "center",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <span
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "clamp(72px,6vw,88px)",
          height: "clamp(72px,6vw,88px)",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "0",
            transform: "rotate(45deg) scale(.78)",
            borderRadius: "14px",
            padding: "2px",
            background: "linear-gradient(135deg,#5C8CFF 0%,#1355FF 40%,#A96FC8 78%,#EC4A9E 100%)",
          }}
        >
          <span
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              background: "#fff",
            }}
          ></span>
        </span>
        <span
          style={{
            position: "relative",
            fontSize: "12px",
            fontWeight: "600",
            lineHeight: "1.2",
            color: "#0A0F1F",
          }}
        >
          Source
          <br />
          found?
        </span>
      </span>
      <span
        data-clgatebelow=""
        style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: "50%",
          transform: "translateX(-50%)",
          width: "max-content",
          maxWidth: "128px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "11.5px", lineHeight: "1.4", color: "#3A4256" }}>
          Every citation re-matched to the real text
        </span>
        <svg
          viewBox="0 0 16 22"
          width="16"
          height="22"
          fill="none"
          stroke="#5C7BFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ alignSelf: "center", flex: "none" }}
        >
          <path d="M8 1v19M3 15l5 5 5-5"></path>
        </svg>
        <span
          style={{
            fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
            fontSize: "9.5px",
            fontWeight: "600",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#5C6478",
          }}
        >
          No
        </span>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 10px",
            borderRadius: "999px",
            background: "#F1F3F7",
            border: "1px dashed #C9CFDA",
            fontSize: "11.5px",
            fontWeight: "550",
            color: "#5C6478",
            whiteSpace: "nowrap",
          }}
        >
          <svg
            viewBox="0 0 16 16"
            width="12"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 4l8 8M12 4l-8 8"></path>
          </svg>
          Finding dropped
        </span>
      </span>
    </div>
    <span
      data-clarrow=""
      aria-hidden="true"
      style={{
        gridColumn: "8",
        gridRow: "1",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#8A93A6",
      }}
    >
      <span
        data-clyes=""
        style={{
          position: "absolute",
          left: "50%",
          bottom: "calc(50% + 10px)",
          transform: "translateX(-50%)",
          fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
          fontSize: "9.5px",
          fontWeight: "600",
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "#1355FF",
        }}
      >
        Yes
      </span>
      <svg
        viewBox="0 0 34 16"
        width="34"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h28M25 3l5 5-5 5"></path>
      </svg>
    </span>
    <div
      data-clcard=""
      style={{
        gridColumn: "9",
        gridRow: "1",
        alignSelf: "start",
        minWidth: "0",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid #E4E8F0",
        boxShadow: "0 8px 24px rgba(10,15,31,.06)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "block",
          flex: "none",
          height: "6px",
          background: "linear-gradient(90deg,#A96FC8,#EC4A9E)",
        }}
      ></span>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "clamp(14px,1.4vw,20px) clamp(12px,1.2vw,16px) clamp(14px,1.4vw,18px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "4px 10px",
          }}
        >
          <span
            style={{
              fontSize: "clamp(13px,1vw,15px)",
              fontWeight: "500",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#0A0F1F",
            }}
          >
            Report
          </span>
          <span
            style={{
              fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
              fontSize: "10px",
              fontWeight: "550",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#5C6478",
              whiteSpace: "nowrap",
            }}
          >
            Review
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 5h14v14H5V5Zm4 5h6M9 14h4"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Findings
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              Rated risks, each linked to the clause and page it came from
            </span>
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h10"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Key terms and obligations
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              Parties, dates, amounts and duties in tables you can check
            </span>
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 4h12v16H6V4Zm3 4h6M9 12h6M9 16h3"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Summary
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              A plain-language overview of the whole contract
            </span>
          </span>
        </div>
      </div>
    </div>
    <div
      data-cldash=""
      aria-hidden="true"
      style={{
        gridColumn: "3",
        gridRow: "2",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "56px",
        paddingTop: "8px",
      }}
    >
      <span style={{ flex: "1 1 auto", width: "0", borderLeft: "1.5px dashed #9AA3B5" }}></span>
      <span
        style={{
          margin: "6px 0",
          fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
          fontSize: "9.5px",
          fontWeight: "600",
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "#5C6478",
          whiteSpace: "nowrap",
        }}
      >
        Same clause index
      </span>
      <span style={{ flex: "0 0 12px", width: "0", borderLeft: "1.5px dashed #9AA3B5" }}></span>
      <svg
        viewBox="0 0 16 10"
        width="16"
        height="10"
        fill="none"
        stroke="#9AA3B5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 2l5 5 5-5"></path>
      </svg>
    </div>
    <div
      data-cltail=""
      style={{
        gridColumn: "9",
        gridRow: "2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "7px",
        padding: "8px 0 clamp(48px,4.6vw,72px)",
      }}
    >
      <svg
        viewBox="0 0 16 22"
        width="16"
        height="22"
        fill="none"
        stroke="#5C7BFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ alignSelf: "center", flex: "none" }}
      >
        <path d="M8 1v19M3 15l5 5 5-5"></path>
      </svg>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "9px",
          padding: "10px 14px",
          borderRadius: "12px",
          border: "1.5px solid #1355FF",
          background: "#fff",
          color: "#1355FF",
          fontSize: "13px",
          fontWeight: "550",
          whiteSpace: "nowrap",
        }}
      >
        <svg
          viewBox="0 0 20 20"
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="10" cy="6.6" r="3.1"></circle>
          <path d="M3.8 17c.9-3.1 3.3-4.8 6.2-4.8s5.3 1.7 6.2 4.8"></path>
        </svg>
        Review and add notes
      </span>
      <svg
        viewBox="0 0 16 22"
        width="16"
        height="22"
        fill="none"
        stroke="#5C7BFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ alignSelf: "center", flex: "none" }}
      >
        <path d="M8 1v19M3 15l5 5 5-5"></path>
      </svg>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "9px",
          padding: "10px 14px",
          borderRadius: "12px",
          background: "linear-gradient(135deg,#1E5BFF 0%,#0B3AD1 100%)",
          color: "#fff",
          fontSize: "13px",
          fontWeight: "550",
          whiteSpace: "nowrap",
          boxShadow: "0 18px 36px -22px rgba(11,58,209,.7)",
        }}
      >
        <svg
          viewBox="0 0 20 20"
          width="17"
          height="17"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="8.2"></circle>
          <path d="m6.4 10.2 2.4 2.4 4.8-5"></path>
        </svg>
        Reviewed contract
      </span>
    </div>
    <div
      data-clstart=""
      style={{
        gridColumn: "1",
        gridRow: "3",
        alignSelf: "center",
        position: "relative",
        padding: "2px",
        borderRadius: "22px",
        background: "linear-gradient(135deg,#5C8CFF 0%,#1355FF 40%,#A96FC8 78%,#EC4A9E 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "9px",
          padding: "clamp(18px,1.8vw,26px) 12px",
          borderRadius: "20px",
          background: "#fff",
        }}
      >
        <span
          style={{
            fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
            fontSize: "9.5px",
            fontWeight: "600",
            letterSpacing: ".1em",
            lineHeight: "1.4",
            textTransform: "uppercase",
            color: "#5C6478",
            whiteSpace: "nowrap",
          }}
        >
          Ask your contracts
        </span>
        <span
          style={{
            fontSize: "clamp(16px,1.25vw,20px)",
            fontWeight: "500",
            letterSpacing: "-.015em",
            lineHeight: "1.2",
            color: "#0A0F1F",
          }}
        >
          Ask a question
        </span>
        <span
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "5px",
            marginTop: "2px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: "550",
              color: "#1355FF",
              background: "#EAF0FF",
              padding: "4px 8px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
            }}
          >
            One contract
          </span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: "550",
              color: "#1355FF",
              background: "#EAF0FF",
              padding: "4px 8px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
            }}
          >
            Whole library
          </span>
        </span>
        <span style={{ fontSize: "11.5px", lineHeight: "1.45", color: "#5C6478" }}>
          Plain English, follow-ups welcome
        </span>
      </div>
    </div>
    <span
      data-clarrow=""
      aria-hidden="true"
      style={{
        gridColumn: "2",
        gridRow: "3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        color: "#8A93A6",
      }}
    >
      <svg
        viewBox="0 0 34 16"
        width="34"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h28M25 3l5 5-5 5"></path>
      </svg>
    </span>
    <div
      data-clcard=""
      style={{
        gridColumn: "3",
        gridRow: "3",
        alignSelf: "center",
        minWidth: "0",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid #E4E8F0",
        boxShadow: "0 8px 24px rgba(10,15,31,.06)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "block",
          flex: "none",
          height: "4px",
          background: "linear-gradient(90deg,#1355FF,#A96FC8)",
        }}
      ></span>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "clamp(14px,1.4vw,20px) clamp(12px,1.2vw,16px) clamp(14px,1.4vw,18px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "4px 10px",
          }}
        >
          <span
            style={{
              fontSize: "clamp(13px,1vw,15px)",
              fontWeight: "500",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#0A0F1F",
            }}
          >
            Search
          </span>
          <span
            style={{
              fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
              fontSize: "10px",
              fontWeight: "550",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#5C6478",
              whiteSpace: "nowrap",
            }}
          >
            RAG
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM20 20l-4.8-4.8"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Hybrid retrieval
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              Semantic and keyword search, fused and reranked before the model sees anything
            </span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "8px 12px",
            marginTop: "auto",
            paddingTop: "12px",
            borderTop: "1px solid #EEF1F6",
          }}
        >
          <span
            style={{
              fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
              fontSize: "10px",
              fontWeight: "600",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#5C6478",
            }}
          >
            Index
          </span>
          <span
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 16px" }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <img
                src="/case-studies/clauselens/tech/qdrant.png"
                alt=""
                style={{
                  display: "block",
                  height: "18px",
                  width: "auto",
                  filter: "brightness(0)",
                  opacity: ".42",
                }}
              />
              <span style={{ fontSize: "12px", fontWeight: "550", color: "#5C6478" }}>Qdrant</span>
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <img
                src="/case-studies/clauselens/tech/fastembed.png"
                alt=""
                style={{
                  display: "block",
                  height: "18px",
                  width: "auto",
                  filter: "brightness(0)",
                  opacity: ".42",
                }}
              />
              <span style={{ fontSize: "12px", fontWeight: "550", color: "#5C6478" }}>
                FastEmbed
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
    <span
      data-clarrow=""
      aria-hidden="true"
      style={{
        gridColumn: "4",
        gridRow: "3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        color: "#8A93A6",
      }}
    >
      <svg
        viewBox="0 0 34 16"
        width="34"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h28M25 3l5 5-5 5"></path>
      </svg>
    </span>
    <div
      data-clcard=""
      style={{
        gridColumn: "5",
        gridRow: "3",
        alignSelf: "center",
        minWidth: "0",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid #E4E8F0",
        boxShadow: "0 8px 24px rgba(10,15,31,.06)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "block",
          flex: "none",
          height: "4px",
          background: "linear-gradient(90deg,#A96FC8,#C77FD6)",
        }}
      ></span>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "clamp(14px,1.4vw,20px) clamp(12px,1.2vw,16px) clamp(14px,1.4vw,18px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "4px 10px",
          }}
        >
          <span
            style={{
              fontSize: "clamp(13px,1vw,15px)",
              fontWeight: "500",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#0A0F1F",
            }}
          >
            Answer
          </span>
          <span
            style={{
              fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
              fontSize: "10px",
              fontWeight: "550",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#5C6478",
              whiteSpace: "nowrap",
            }}
          >
            AI
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 5h16v10H9l-5 4V5Z"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Evidence only
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              Follow-ups rewritten against the conversation; the model answers from retrieved text,
              not memory
            </span>
          </span>
        </div>
      </div>
    </div>
    <span
      data-clarrow=""
      aria-hidden="true"
      style={{
        gridColumn: "6",
        gridRow: "3",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        color: "#8A93A6",
      }}
    >
      <svg
        viewBox="0 0 34 16"
        width="34"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h28M25 3l5 5-5 5"></path>
      </svg>
    </span>
    <div
      data-clcard=""
      style={{
        gridColumn: "7 / span 3",
        gridRow: "3",
        alignSelf: "center",
        minWidth: "0",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid #E4E8F0",
        boxShadow: "0 8px 24px rgba(10,15,31,.06)",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          display: "block",
          flex: "none",
          height: "4px",
          background: "linear-gradient(90deg,#C77FD6,#EC4A9E)",
        }}
      ></span>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "clamp(14px,1.4vw,20px) clamp(12px,1.2vw,16px) clamp(14px,1.4vw,18px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "4px 10px",
          }}
        >
          <span
            style={{
              fontSize: "clamp(13px,1vw,15px)",
              fontWeight: "500",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "#0A0F1F",
            }}
          >
            Cite
          </span>
          <span
            style={{
              fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
              fontSize: "10px",
              fontWeight: "550",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#5C6478",
              whiteSpace: "nowrap",
            }}
          >
            Grounded
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "30px 1fr",
            gap: "10px",
            alignItems: "start",
            padding: "10px",
            borderRadius: "10px",
            background: "#F5F7FB",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30px",
              height: "30px",
              borderRadius: "8px",
              background: "#fff",
              border: "1px solid #E4E8F0",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#1355FF"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3 4.5 6v5.5c0 4.4 3.1 7.5 7.5 9 4.4-1.5 7.5-4.6 7.5-9V6L12 3Zm-3 9 2.2 2.2L15.5 10"></path>
            </svg>
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "550",
                letterSpacing: "-.008em",
                lineHeight: "1.35",
                color: "#0A0F1F",
              }}
            >
              Answer with citations
            </span>
            <span
              style={{ fontSize: "12px", lineHeight: "1.45", color: "#3A4256", textWrap: "pretty" }}
            >
              Every statement links to its page and clause. The same grounding check applies, so an
              unsupported claim is dropped, not shown.
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default FlowDiagram;
