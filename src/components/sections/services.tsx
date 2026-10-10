"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/src/components/ui/container";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { serviceIcons } from "@/src/components/ui/icons";
import { services } from "@/src/lib/site";
import { cn } from "@/src/lib/utils";

type ServicesProps = {
  detailed?: boolean;
  heading?: boolean;
};

export function Services({ detailed = false, heading = true }: ServicesProps) {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-24 bg-surface-muted/70 py-20 sm:py-28">
      <Container>
        {heading ? (
          <SectionHeading
            eyebrow="Services"
            title="Multi-drop courier, fleet capacity and overflow"
            description="B2B parcel distribution for depot and transport managers: multi-drop rounds, dedicated XLWB vans, and peak overflow."
          />
        ) : null}

        <div className={cn("grid gap-5 md:grid-cols-2", heading && "mt-12")}>
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.slug} delay={index * 0.06}>
                <motion.article
                  id={service.slug}
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="group flex h-full scroll-mt-28 flex-col rounded-3xl border border-border bg-surface p-6 shadow-sm shadow-navy-950/5"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-950 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{detailed ? service.detail : service.summary}</p>
                  {detailed ? (
                    <ul className="mt-4 space-y-2 text-sm text-ink">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-bright" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <Link
                    href={detailed ? `/contact?role=client` : `/services#${service.slug}`}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-electric"
                  >
                    {detailed ? "Request this capacity" : "View service"}
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </Link>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
