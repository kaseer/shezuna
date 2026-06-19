import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shezuna: Smart Logistics. Proven Reliability.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#081425",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Amber glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,158,11,0.28) 0%, transparent 70%)",
          }}
        />

        {/* Blue glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 70%)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "56px 72px",
            position: "relative",
          }}
        >
          {/* Top: Logo mark + brand name */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Actual Shezuna logo mark from icon.svg */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9InRpdGxlIGRlc2MiPg0KICA8dGl0bGUgaWQ9InRpdGxlIj5TaGV6dW5hIGZhdmljb248L3RpdGxlPg0KICA8ZGVzYyBpZD0iZGVzYyI+QSBwcmVtaXVtIG5hdnkgc3F1YXJlIHdpdGggYW4gb3JhbmdlIHJvdXRlIGxpbmUgYW5kIHdoaXRlIFMgZm9yIFNoZXp1bmEgbG9naXN0aWNzLjwvZGVzYz4NCiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTYiIGZpbGw9IiMwODE0MjUiIC8+DQogIDxwYXRoIGQ9Ik0xOCAyMEMxOCAxNS41ODIgMjEuNTgyIDEyIDI2IDEySDQ2VjIwSDI3QzI1LjM0MyAyMCAyNCAyMS4zNDMgMjQgMjNDMjQgMjQuNjU3IDI1LjM0MyAyNiAyNyAyNkgzN0M0My4wNzUgMjYgNDggMzAuOTI1IDQ4IDM3QzQ4IDQzLjA3NSA0My4wNzUgNDggMzcgNDhIMTZWNDBIMzZDMzcuNjU3IDQwIDM5IDM4LjY1NyAzOSAzN0MzOSAzNS4zNDMgMzcuNjU3IDM0IDM2IDM0SDI2QzIxLjU4MiAzNCAxOCAzMC40MTggMTggMjZWMjBaIiBmaWxsPSIjRjhGQUZDIiAvPg0KICA8cGF0aCBkPSJNNDcgMTRDNDkuNzYxIDE0IDUyIDE2LjIzOSA1MiAxOUM1MiAyMS43NjEgNDkuNzYxIDI0IDQ3IDI0QzQ0LjIzOSAyNCA0MiAyMS43NjEgNDIgMTlDNDIgMTYuMjM5IDQ0LjIzOSAxNCA0NyAxNFoiIGZpbGw9IiNGNTlFMEIiIC8+DQogIDxwYXRoIGQ9Ik0xMiA0NkMxMiA0My43OTEgMTMuNzkxIDQyIDE2IDQySDI2VjUwSDE2QzEzLjc5MSA1MCAxMiA0OC4yMDkgMTIgNDZaIiBmaWxsPSIjRjU5RTBCIiAvPg0KPC9zdmc+DQo="
              alt="Shezuna logo"
              width={72}
              height={72}
              style={{ borderRadius: 18 }}
            />

            <span
              style={{
                fontSize: 34,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.5px",
              }}
            >
              Shezuna
            </span>

            {/* Accent pill */}
            <div
              style={{
                marginLeft: 16,
                background: "rgba(245,158,11,0.15)",
                border: "1px solid rgba(245,158,11,0.4)",
                borderRadius: 100,
                padding: "6px 18px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#f59e0b",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Leeds, UK
              </span>
            </div>
          </div>

          {/* Middle: Main headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <span
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-1.5px",
                maxWidth: 840,
              }}
            >
              Smart Logistics.{" "}
              <span style={{ color: "#f59e0b" }}>Proven Reliability.</span>
            </span>
            <span
              style={{
                fontSize: 24,
                color: "#94a3b8",
                lineHeight: 1.5,
                maxWidth: 680,
                fontWeight: 400,
              }}
            >
              Data-backed delivery solutions for Leeds businesses. Express
              delivery, B2B logistics & last-mile solutions.
            </span>
          </div>

          {/* Bottom: Stats bar */}
          <div style={{ display: "flex", gap: 48, alignItems: "flex-end" }}>
            {[
              { value: "99.2%", label: "On-time dispatch" },
              { value: "30 min", label: "Quote response time" },
              { value: "7 days", label: "Operating coverage" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{ display: "flex", flexDirection: "column", gap: 6 }}
              >
                <span
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: 16,
                    color: "#64748b",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}

            {/* Right-side accent bar */}
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#f59e0b",
                }}
              />
              <span
                style={{
                  fontSize: 18,
                  color: "#475569",
                  fontWeight: 500,
                }}
              >
                shezuna.co.uk
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
