"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hubs, type HubId } from "@/src/lib/site";
import { cn } from "@/src/lib/utils";

type NetworkMapProps = {
  activeId?: HubId | "all";
  onSelect?: (id: HubId) => void;
  className?: string;
};

const links: [HubId, HubId][] = [
  ["bradford", "leeds"],
  ["leeds", "york"],
  ["leeds", "doncaster"],
  ["york", "doncaster"],
];

function point(id: HubId) {
  const hub = hubs.find((item) => item.id === id);
  return hub ? { x: hub.x, y: hub.y } : { x: 50, y: 50 };
}

/** Stylised Yorkshire network. Hubs are buttons when a selection handler is provided. */
export function NetworkMap({ activeId = "all", onSelect, className }: NetworkMapProps) {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 100 100" className={cn("h-full w-full", className)} role="img" aria-label="Yorkshire logistics coverage map for Leeds, Bradford, York and Doncaster">
      <defs>
        <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path
        d="M28 18c10-8 28-10 40-2 12 8 22 22 24 38 2 16-4 28-14 36-10 8-22 12-34 8-14-4-24-16-28-30-4-16 0-38 12-50z"
        fill="rgba(21,94,239,0.08)"
        stroke="rgba(125,211,252,0.45)"
        strokeWidth="0.6"
      />

      {links.map(([from, to]) => {
        const a = point(from);
        const b = point(to);
        const highlighted = activeId === "all" || activeId === from || activeId === to;
        return (
          <motion.line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={highlighted ? "#34d399" : "rgba(148,163,184,0.45)"}
            strokeWidth={highlighted ? 0.7 : 0.4}
            strokeDasharray="1.6 1.4"
            animate={reduce ? undefined : { strokeDashoffset: [0, -6] }}
            transition={reduce ? undefined : { duration: 2.8, repeat: Infinity, ease: "linear" }}
          />
        );
      })}

      {hubs.map((hub) => {
        const selected = activeId === hub.id;
        const dimmed = activeId !== "all" && !selected;
        const content = (
          <g opacity={dimmed ? 0.4 : 1}>
            {selected ? <circle cx={hub.x} cy={hub.y} r="6.5" fill="url(#hub-glow)" /> : null}
            <circle cx={hub.x} cy={hub.y} r={selected ? 2.3 : 1.8} fill={selected ? "#34d399" : "#7dd3fc"} />
            <text
              x={hub.x + 3.2}
              y={hub.y - 2.4}
              fill="currentColor"
              fontSize="3.2"
              fontFamily="inherit"
              fontWeight="600"
            >
              {hub.name}
            </text>
          </g>
        );

        if (!onSelect) {
          return <g key={hub.id}>{content}</g>;
        }

        return (
          <g
            key={hub.id}
            role="button"
            tabIndex={0}
            aria-pressed={selected}
            aria-label={`Show ${hub.name}`}
            className="cursor-pointer"
            onClick={() => onSelect(hub.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(hub.id);
              }
            }}
          >
            {content}
          </g>
        );
      })}
    </svg>
  );
}
