import React from "react";

/**
 * The Quanta request pipeline, ported from the design: workspace, then Ask →
 * Generate → Run, with the result and sharing tail under the last card. The
 * data-qf* attributes are what the shared Flow section's layout hook and
 * responsive rules look for.
 */
const FlowDiagram = () => (
  <div
    data-qflow=""
    style={{
      position: "relative",
      display: "grid",
      gridTemplateColumns:
        "clamp(150px,14vw,190px) 36px minmax(0,1fr) 36px minmax(0,1fr) 36px minmax(0,1fr)",
      gap: "0 clamp(6px,.8vw,12px)",
      alignItems: "start",
      padding: "clamp(28px,3vw,48px) clamp(22px,2.6vw,44px)",
    }}
  >
    <div
      style={{
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
          padding: "clamp(20px,2vw,28px) 14px",
          borderRadius: "20px",
          background: "#fff",
        }}
      >
        <span
          style={{
            fontFamily: "ui-monospace,'JetBrains Mono',Menlo,monospace",
            fontSize: "10.5px",
            fontWeight: "600",
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "#5C6478",
          }}
        >
          Your workspace
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
          Connect your database
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
            PostgreSQL
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
            MySQL
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
            Direct
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
            SSH bastion
          </span>
        </span>
        <span
          aria-hidden="true"
          style={{ width: "100%", height: "1px", margin: "6px 0 2px", background: "#E4E8F0" }}
        ></span>
        <span style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              fontSize: "11.5px",
              fontWeight: "550",
              color: "#3A4256",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="#A96FC8"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6 9a6 6 0 0 1 12 0m2-9a3 3 0 1 0 0-6m1.5 15H21a5 5 0 0 0-3.5-4.8"></path>
            </svg>
            Owner & member roles
          </span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              fontSize: "11.5px",
              fontWeight: "550",
              color: "#3A4256",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="#A96FC8"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17ZM12 7v5l3 2"></path>
            </svg>
            AI credit limits per org
          </span>
        </span>
      </div>
    </div>
    <span
      data-qfarrow=""
      aria-hidden="true"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: "100%",
        color: "#8A93A6",
      }}
    >
      <svg
        viewBox="0 0 36 16"
        width="36"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h30M27 3l5 5-5 5"></path>
      </svg>
    </span>
    <div
      data-qfcol="mid"
      style={{
        minWidth: "0",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        alignSelf: "center",
      }}
    >
      <div
        data-qfctx=""
        style={{
          height: "78px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "7px",
          color: "#8A93A6",
        }}
      >
        <span
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "7px",
            fontSize: "12.5px",
            fontWeight: "500",
            lineHeight: "17px",
            color: "#8A93A6",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ position: "relative", color: "#5C6478" }}>
            <span
              style={{
                position: "absolute",
                right: "calc(100% + 10px)",
                top: "0",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "17px",
                color: "#5C6478",
              }}
            >
              Your schema
              <svg
                viewBox="0 0 30 12"
                width="30"
                height="12"
                fill="none"
                stroke="#8A93A6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M1 6h26M23 2l4 4-4 4"></path>
              </svg>
            </span>
            Compact serialiser
          </span>
          <svg
            viewBox="0 0 14 20"
            width="14"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ flex: "none" }}
          >
            <path d="M7 1v17M2.5 13.5 7 18l4.5-4.5"></path>
          </svg>
        </span>
      </div>
      <div
        data-qfcard=""
        style={{
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
          style={{ display: "block", height: "6px", background: "#1355FF" }}
        ></span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
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
              Ask
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
              Workspace
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
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
                  Plain-English question
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.45",
                    color: "#3A4256",
                    textWrap: "pretty",
                  }}
                >
                  Anyone in the org, no SQL needed
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
                  <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"></path>
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
                  Compact schema planning
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.45",
                    color: "#3A4256",
                    textWrap: "pretty",
                  }}
                >
                  LLM cost tracks usage, not database size
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
                  <path d="M9.4 9.2a2.7 2.7 0 0 1 5.2.9c0 1.8-2.6 2.2-2.6 3.9m0 3h.01M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Z"></path>
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
                  Clarifying question
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.45",
                    color: "#3A4256",
                    textWrap: "pretty",
                  }}
                >
                  Asked when a reference is ambiguous
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span
      data-qfarrow=""
      aria-hidden="true"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: "100%",
        color: "#8A93A6",
      }}
    >
      <svg
        viewBox="0 0 36 16"
        width="36"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h30M27 3l5 5-5 5"></path>
      </svg>
    </span>
    <div
      data-qfcol="mid"
      style={{
        minWidth: "0",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        alignSelf: "center",
      }}
    >
      <div
        data-qfctx=""
        style={{
          height: "78px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "7px",
          color: "#8A93A6",
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
          Model providers
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/case-studies/quanta/flow/openai.svg"
            alt="OpenAI"
            title="OpenAI"
            style={{
              display: "block",
              height: "20px",
              width: "auto",
              filter: "brightness(0)",
              opacity: ".42",
            }}
          />
          <img
            src="/case-studies/quanta/flow/anthropic.svg"
            alt="Anthropic"
            title="Anthropic"
            style={{
              display: "block",
              height: "20px",
              width: "auto",
              filter: "brightness(0)",
              opacity: ".42",
            }}
          />
          <img
            src="/case-studies/quanta/flow/gemini.svg"
            alt="Gemini"
            title="Gemini"
            style={{
              display: "block",
              height: "20px",
              width: "auto",
              filter: "brightness(0)",
              opacity: ".42",
            }}
          />
          <img
            src="/case-studies/quanta/flow/grok.png"
            alt="Grok"
            title="Grok"
            style={{
              display: "block",
              height: "20px",
              width: "auto",
              filter: "brightness(0)",
              opacity: ".42",
            }}
          />
        </span>
        <svg
          viewBox="0 0 14 20"
          width="14"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ flex: "none" }}
        >
          <path d="M7 1v17M2.5 13.5 7 18l4.5-4.5"></path>
        </svg>
      </div>
      <div
        data-qfcard=""
        style={{
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
            height: "6px",
            background: "linear-gradient(90deg,#1355FF,#A96FC8)",
          }}
        ></span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
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
              Generate
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
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
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
                  SQL written by the model
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.45",
                    color: "#3A4256",
                    textWrap: "pretty",
                  }}
                >
                  Using the provider your org chooses
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
                  AST validation
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.45",
                    color: "#3A4256",
                    textWrap: "pretty",
                  }}
                >
                  sqlglot rejects any mutation, even inside CTEs and subqueries
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
                  <path d="M4 12a8 8 0 0 1 13.7-5.7M20 12a8 8 0 0 1-13.7 5.7M17.7 3v3.3h-3.3M6.3 21v-3.3h3.3"></path>
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
                  Self-repair
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.45",
                    color: "#3A4256",
                    textWrap: "pretty",
                  }}
                >
                  A failing query is fixed and retried automatically
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span
      data-qfarrow=""
      aria-hidden="true"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: "100%",
        color: "#8A93A6",
      }}
    >
      <svg
        viewBox="0 0 36 16"
        width="36"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 8h30M27 3l5 5-5 5"></path>
      </svg>
    </span>
    <div
      data-qfcol="last"
      style={{
        minWidth: "0",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        alignSelf: "center",
      }}
    >
      <div
        data-qfctx=""
        style={{
          height: "78px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "7px",
          color: "#8A93A6",
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
          Executes on
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/case-studies/quanta/flow/postgresql.svg"
            alt="PostgreSQL"
            title="PostgreSQL"
            style={{
              display: "block",
              height: "20px",
              width: "auto",
              filter: "brightness(0)",
              opacity: ".42",
            }}
          />
          <img
            src="/case-studies/quanta/flow/mysql.svg"
            alt="MySQL"
            title="MySQL"
            style={{
              display: "block",
              height: "20px",
              width: "auto",
              filter: "brightness(0)",
              opacity: ".42",
            }}
          />
        </span>
        <svg
          viewBox="0 0 14 20"
          width="14"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ flex: "none" }}
        >
          <path d="M7 1v17M2.5 13.5 7 18l4.5-4.5"></path>
        </svg>
      </div>
      <div
        data-qfcard=""
        style={{
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
            height: "6px",
            background: "linear-gradient(90deg,#A96FC8,#EC4A9E)",
          }}
        ></span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
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
              Run
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
              Your database
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
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
                  <path d="M7 11V8a5 5 0 0 1 10 0v3M5.5 11h13v9h-13v-9Z"></path>
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
                  READ ONLY transaction
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.45",
                    color: "#3A4256",
                    textWrap: "pretty",
                  }}
                >
                  A second guard, so a parser bug alone can't open a write path
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
                  <path d="M4 4.5h16v5H4zM4 14.5h16v5H4zM7.5 7h.01M7.5 17h.01M12 9.5v5"></path>
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
                  Private networks via SSH
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.45",
                    color: "#3A4256",
                    textWrap: "pretty",
                  }}
                >
                  Bastion held to a strict public-host policy
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
                  <path d="M14.5 13.5a4.5 4.5 0 1 0-4-4L4 16v4h4v-2h2v-2h2l2.5-2.5ZM15.5 8.5h.01"></path>
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
                  Credentials encrypted
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.45",
                    color: "#3A4256",
                    textWrap: "pretty",
                  }}
                >
                  AES-256-GCM at rest, never sent to the browser
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: "7px",
          marginTop: "6px",
          width: "fit-content",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
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
            <circle cx="10" cy="10" r="8.2"></circle>
            <path d="m6.4 10.2 2.4 2.4 4.8-5"></path>
          </svg>
          Results + suggested chart
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
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "#3A4256",
            fontSize: "12.5px",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              flex: "none",
              width: "20px",
              height: "20px",
              marginTop: "3px",
              transform: "rotate(45deg)",
              border: "1.5px solid #5C7BFF",
              borderRadius: "4px",
              background: "#fff",
            }}
          ></span>
          <span style={{ whiteSpace: "nowrap", lineHeight: "1.45" }}>
            Pin it, or let AI
            <br />
            generate the widgets
          </span>
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
            alignSelf: "center",
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
            <rect x="2.5" y="2.5" width="6" height="6" rx="1.4"></rect>
            <rect x="11.5" y="2.5" width="6" height="9" rx="1.4"></rect>
            <rect x="2.5" y="11.5" width="6" height="6" rx="1.4"></rect>
            <rect x="11.5" y="14.5" width="6" height="3" rx="1.2"></rect>
          </svg>
          Live dashboard
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
            Public link
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
            Image / PDF
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default FlowDiagram;
