import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shezuna fleet and multi-drop logistics across Yorkshire";
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
              "radial-gradient(circle, rgba(16,185,129,0.28) 0%, transparent 70%)",
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
            {/* ImageResponse cannot use next/image. This is the same mark as /icon.svg. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34 34'%3E%3Crect width='34' height='34' rx='9' fill='%230c1c33'/%3E%3Cpath d='M8 18.5h9.2l2.6-4.2H26' fill='none' stroke='%237dd3fc' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='26' cy='14.3' r='2.1' fill='%2334d399'/%3E%3Cpath d='M9.2 23h8.4' fill='none' stroke='%23ffffff' stroke-width='1.8' stroke-linecap='round'/%3E%3Ccircle cx='9.2' cy='23' r='2' fill='%2360a5fa'/%3E%3Ccircle cx='20.2' cy='23' r='2' fill='%23ffffff'/%3E%3C/svg%3E"
              alt=""
              width={72}
              height={72}
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
                background: "rgba(52,211,153,0.15)",
                border: "1px solid rgba(52,211,153,0.45)",
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
                  color: "#34d399",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Yorkshire, UK
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
              Fleet &amp; multi-drop.{" "}
              <span style={{ color: "#7dd3fc" }}>Across Yorkshire.</span>
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
              Reliable drivers, per-parcel capacity, and depots in Leeds,
              Bradford, York, and Doncaster.
            </span>
          </div>

          {/* Bottom: Stats bar */}
          <div style={{ display: "flex", gap: 48, alignItems: "flex-end" }}>
            {[
              { value: "100%", label: "On-time delivery" },
              { value: "50+", label: "Active vans" },
              { value: "4 hubs", label: "Yorkshire coverage" },
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
                  background: "#34d399",
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
