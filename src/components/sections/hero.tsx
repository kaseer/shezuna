"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/ui/container";
import { NetworkMap } from "@/src/components/sections/network-map";
import { stats } from "@/src/lib/site";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay },
  }),
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden" id="home">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-electric/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-emerald-bright/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted"
            initial={reduce ? false : "hidden"}
            animate="show"
            custom={0}
            variants={fade}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-bright" aria-hidden="true" />
            Leeds-based
          </motion.p>

          <motion.h1
            className="mt-6 max-w-xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
            initial={reduce ? false : "hidden"}
            animate="show"
            custom={0.08}
            variants={fade}
          >
            Logistics Subcontracting Across{" "}
            <span className="bg-gradient-to-r from-electric to-emerald bg-clip-text text-transparent">
              Yorkshire
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg"
            initial={reduce ? false : "hidden"}
            animate="show"
            custom={0.16}
            variants={fade}
          >
            Our principal work is regular local delivery routes and drops across Yorkshire. Where a journey extends further, we can travel across the United Kingdom, including depot-to-depot movements and fleet transfers.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={reduce ? false : "hidden"}
            animate="show"
            custom={0.24}
            variants={fade}
          >
            <Button href="/contact?role=client" data-track="hero_book_capacity">
              Book Fleet Capacity
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/subcontractors" variant="outline" data-track="hero_join_subcontractor">
              Join as Subcontractor
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.15 }}
        >
          <div className="glass relative overflow-hidden rounded-3xl p-4 sm:p-6">
            <div className="flex items-center justify-between px-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Coverage</p>
              <p className="text-xs text-emerald">Run from the Leeds desk</p>
            </div>
            <div className="mt-2 h-72 text-ink sm:h-80">
              <NetworkMap />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/80 bg-background/80 px-3 py-3">
                  <p className="font-mono text-lg font-semibold tracking-tight text-ink">{stat.value}</p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
