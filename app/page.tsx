import Image from "next/image";
import { ArrowRight, Clock3, Mail, MapPin, Phone, Rocket, Route, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/src/components/landing/contact-form";
import { Navbar } from "@/src/components/landing/navbar";
import { Reveal } from "@/src/components/landing/reveal";

const services = [
  {
    title: "Express Delivery",
    description:
      "Time-critical dispatch for urgent parcels and same-day requirements across Leeds and nearby regions.",
    icon: Rocket,
  },
  {
    title: "B2B Logistics",
    description:
      "Reliable scheduled routes for retailers, warehouses, and distributors with real-time status visibility.",
    icon: ShieldCheck,
  },
  {
    title: "Last-Mile Solutions",
    description:
      "Customer-first final leg delivery designed for precision windows, proof of delivery, and reduced friction.",
    icon: Route,
  },
];

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_18%,rgba(37,99,235,0.16),transparent_38%),radial-gradient(circle_at_89%_12%,rgba(245,158,11,0.18),transparent_40%)]" />
      <Navbar />

      <main id="home" className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-6 lg:px-8">
        <section className="grid min-h-[84vh] items-center gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <Reveal className="space-y-8">
            <p className="inline-flex rounded-full border border-[color:var(--color-border)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
              Leeds-Based Logistics Partner
            </p>

            <div className="space-y-5">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--color-navy-950)] sm:text-5xl lg:text-6xl">
                Reliable, Tech-Driven Logistics for Leeds
              </h1>
              <p className="max-w-xl text-base leading-7 text-[color:var(--color-muted)] sm:text-lg">
                Shezuna helps ambitious businesses move faster with dependable delivery operations, transparent
                tracking, and precision planning powered by smart systems.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[color:var(--color-accent)] px-5 text-sm font-semibold text-[color:var(--color-navy-950)] transition-transform hover:-translate-y-0.5"
              >
                Book A Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-white px-5 text-sm font-semibold text-[color:var(--color-navy-900)] hover:bg-slate-50"
              >
                Explore Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-md rounded-3xl border border-white/75 bg-white p-5 shadow-2xl shadow-slate-900/8 sm:p-7">
              <div className="rounded-2xl bg-[color:var(--color-navy-950)] p-6 text-white sm:p-7">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Operational Snapshot</p>
                <p className="mt-5 text-3xl font-semibold tracking-tight">99.2% On-Time Dispatch</p>
                <p className="mt-2 text-sm text-slate-300">Built for consistency, speed, and clear communication.</p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[color:var(--color-border)] p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-[color:var(--color-muted)]">Coverage</p>
                  <p className="mt-1 text-lg font-semibold text-[color:var(--color-navy-900)]">Leeds + West Yorkshire</p>
                </div>
                <div className="rounded-xl border border-[color:var(--color-border)] p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-[color:var(--color-muted)]">Response Time</p>
                  <p className="mt-1 text-lg font-semibold text-[color:var(--color-navy-900)]">Under 30 mins</p>
                </div>
              </div>
              <Image
                src="/globe.svg"
                alt="Global logistics network"
                width={84}
                height={84}
                className="absolute -right-4 -top-4 rounded-full border border-[color:var(--color-border)] bg-white p-3"
                priority
              />
            </div>
          </Reveal>
        </section>

        <section id="about" className="py-14 sm:py-16">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--color-border)] bg-white/90 p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">About</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[color:var(--color-navy-950)] sm:text-4xl">
                Shezuna: Smart Logistics. Proven Reliability.
              </h2>
              <p className="mt-6 max-w-4xl text-base leading-8 text-[color:var(--color-muted)]">
                At Shezuna, we bridge the gap between traditional logistics and modern technology. Based in Leeds,
                we provide data-backed, efficient delivery solutions that prioritize precision, speed, and
                transparency. Whether it&apos;s last-mile connectivity or scheduled B2B logistics, Shezuna is built to
                deliver.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="services" className="py-14 sm:py-16">
          <Reveal>
            <div className="space-y-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">Services</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--color-navy-950)] sm:text-4xl">
                Built For High-Trust Logistics Delivery
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={0.07 * index}>
                  <article className="h-full rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-lg shadow-slate-900/4 transition-transform hover:-translate-y-1">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-navy-950)] text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-[color:var(--color-navy-900)]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{service.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="contact" className="py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-navy-950)] p-7 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let&apos;s Move Your Operations Forward
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Share your delivery requirements and we&apos;ll design a practical logistics plan for your business.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-slate-200">
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[color:var(--color-accent)]" aria-hidden="true" />
                    contact@shezuna.co.uk
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[color:var(--color-accent)]" aria-hidden="true" />
                    +44 113 555 0147
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[color:var(--color-accent)]" aria-hidden="true" />
                    Leeds, West Yorkshire, United Kingdom
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock3 className="h-4 w-4 text-[color:var(--color-accent)]" aria-hidden="true" />
                    Mon - Sat: 07:00 to 21:00
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
