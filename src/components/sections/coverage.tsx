"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock3, MapPin } from "lucide-react";
import { Container } from "@/src/components/ui/container";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { NetworkMap } from "@/src/components/sections/network-map";
import { hubs, type HubId } from "@/src/lib/site";
import { cn } from "@/src/lib/utils";

const filters: { id: HubId | "all"; label: string }[] = [
  { id: "all", label: "All hubs" },
  ...hubs.map((hub) => ({ id: hub.id, label: hub.name })),
];

type CoverageProps = {
  heading?: boolean;
  title?: string;
  description?: string;
};

/** Filterable depot board. Selecting a hub highlights its card and the map node. */
export function Coverage({
  heading = true,
  title = "Depot coverage in Leeds, Bradford, York and Doncaster",
  description = "Choose a hub for courier subcontracting, van delivery, or multi-drop fleet capacity.",
}: CoverageProps) {
  const [active, setActive] = useState<HubId | "all">("all");

  return (
    <section id="coverage" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        {heading ? (
          <SectionHeading
            eyebrow="Coverage"
            title={title}
            description={description}
          />
        ) : null}

        <div className={cn("grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]", heading && "mt-12")}>
          <div className="glass rounded-3xl p-4 sm:p-6">
            <div className="h-80 text-ink sm:h-[28rem]">
              <NetworkMap activeId={active} onSelect={setActive} />
            </div>
            <p className="px-2 pb-1 text-xs text-muted">Select a hub on the map or use the filters.</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filter hubs">
              {filters.map((filter) => {
                const selected = active === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActive(filter.id)}
                    className={cn(
                      "rounded-full border px-3.5 py-2 text-sm font-medium transition",
                      selected
                        ? "border-electric bg-electric text-on-electric"
                        : "border-border bg-surface text-muted hover:text-ink",
                    )}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {hubs.map((hub) => {
                const selected = active === "all" || active === hub.id;
                return (
                  <article
                    key={hub.id}
                    id={hub.id}
                    className={cn(
                      "scroll-mt-28 rounded-2xl border bg-surface p-5 shadow-sm transition duration-200",
                      selected ? "border-electric/40 shadow-electric/10" : "border-border opacity-60",
                      active === hub.id && "ring-2 ring-electric/30",
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-ink">{hub.name}</h3>
                      <span className="rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
                        {hub.role}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted">{hub.summary}</p>
                    <Link href={`/coverage/${hub.id}`} className="mt-4 inline-flex text-sm font-semibold text-electric">
                      {hub.name} logistics coverage
                    </Link>
                    <ul className="mt-4 space-y-2 text-sm text-ink">
                      <li className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" aria-hidden="true" />
                        {hub.proximity}
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-emerald" aria-hidden="true" />
                        {hub.deploy}
                      </li>
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
