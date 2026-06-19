import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin, Phone, Rocket, Route, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/src/components/landing/contact-form";
import { Navbar } from "@/src/components/landing/navbar";
import { Reveal } from "@/src/components/landing/reveal";

const services = [
  {
    title: "Last-Mile Delivery Services",
    description:
      "Time-critical final-leg execution for urgent parcels and scheduled drops across Leeds and surrounding Yorkshire routes.",
    icon: Rocket,
  },
  {
    title: "Logistics Subcontractor Support",
    description:
      "Direct-contract and subcontract delivery support for carriers and enterprise partners that need reliable operational coverage.",
    icon: ShieldCheck,
  },
  {
    title: "Fleet Delivery Solutions in Leeds",
    description:
      "Scalable fleet capacity, route planning, and dispatch control built for high-volume operations and growth periods.",
    icon: Route,
  },
];

const proofPillars = [
  "Experienced Logistics Team",
  "Leeds & Yorkshire Coverage",
  "Flexible Fleet Capacity",
  "Dedicated Account Support",
];

const whyChooseShezuna = [
  "Experienced delivery professionals",
  "Leeds-based operations",
  "Flexible fleet scaling",
  "SLA-focused delivery management",
  "Real-time communication",
  "Proof of delivery reporting",
];

const testimonials = [
  {
    quote:
      "Shezuna helped us manage increased delivery volumes while maintaining service levels across Leeds routes.",
    author: "Operations Manager, Leeds",
  },
  {
    quote:
      "The team gave us dependable subcontract support during peak periods with clear communication and consistent execution.",
    author: "Distribution Lead, Yorkshire",
  },
  {
    quote:
      "Reliable fleet capacity and responsive account support made Shezuna a trusted extension of our logistics operations.",
    author: "Logistics Coordinator, West Yorkshire",
  },
];

const industries = [
  "E-commerce",
  "Retail",
  "Medical Deliveries",
  "Manufacturing",
  "Distribution Centres",
  "Courier Networks",
  "Logistics Providers",
];

const faqs = [
  {
    question: "What areas do you cover?",
    answer: "We provide logistics support across Leeds and Yorkshire.",
  },
  {
    question: "Do you offer subcontract delivery services?",
    answer:
      "Yes, we support logistics providers and carriers with flexible subcontract delivery solutions.",
  },
  {
    question: "Can you handle peak delivery periods?",
    answer:
      "Yes, our scalable fleet support helps businesses manage seasonal demand and high-volume operations.",
  },
];

const servicePages = [
  "/last-mile-delivery-leeds",
  "/fleet-delivery-solutions",
  "/logistics-subcontractor-leeds",
  "/same-day-delivery-leeds",
  "/courier-services-leeds",
];

const businessAddress = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "Leeds, West Yorkshire, United Kingdom";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shezuna",
  image: "https://shezuna.co.uk/opengraph-image",
  url: "https://shezuna.co.uk",
  telephone: "0113 834 3555",
  email: "ops@shezuna.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: process.env.NEXT_PUBLIC_BUSINESS_STREET_ADDRESS ?? "Leeds City Centre",
    addressLocality: "Leeds",
    addressRegion: "West Yorkshire",
    postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTCODE ?? "LS1",
    addressCountry: "GB",
  },
  areaServed: ["Leeds", "Yorkshire"],
  sameAs: ["https://shezuna.co.uk"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "21:00",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shezuna.co.uk",
    },
  ],
};

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
                Reliable Last-Mile Logistics & Delivery Solutions Across Leeds & Yorkshire
              </h1>
              <p className="max-w-xl text-base leading-7 text-[color:var(--color-muted)] sm:text-lg">
                Helping businesses scale delivery operations with dependable drivers, fleet support, and professional
                logistics management.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                data-track="hero_request_assessment_click"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[color:var(--color-accent)] px-5 text-sm font-semibold text-[color:var(--color-navy-950)] transition-transform hover:-translate-y-0.5"
              >
                Request A Free Logistics Assessment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#services"
                data-track="hero_explore_services_click"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-white px-5 text-sm font-semibold text-[color:var(--color-navy-900)] hover:bg-slate-50"
              >
                Explore Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-md rounded-3xl border border-white/75 bg-white p-5 shadow-2xl shadow-slate-900/8 sm:p-7">
              <div className="rounded-2xl bg-[color:var(--color-navy-950)] p-6 text-white sm:p-7">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-300">Operational Strength</p>
                <div className="mt-4 grid gap-3">
                  {proofPillars.map((item) => (
                    <p key={item} className="flex items-center gap-2 text-sm text-slate-100">
                      <CheckCircle2 className="h-4 w-4 text-[color:var(--color-accent)]" aria-hidden="true" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[color:var(--color-border)] p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-[color:var(--color-muted)]">Coverage</p>
                  <p className="mt-1 text-lg font-semibold text-[color:var(--color-navy-900)]">Leeds + West Yorkshire</p>
                </div>
                <div className="rounded-xl border border-[color:var(--color-border)] p-4">
                  <p className="text-xs uppercase tracking-[0.15em] text-[color:var(--color-muted)]">Support</p>
                  <p className="mt-1 text-lg font-semibold text-[color:var(--color-navy-900)]">Dedicated Account Team</p>
                </div>
              </div>
              <Image
                src="/globe.svg"
                alt="Logistics network"
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
                Why Businesses Choose Shezuna
              </h2>
              <p className="mt-6 max-w-4xl text-base leading-8 text-[color:var(--color-muted)]">
                Shezuna supports high-volume operations with practical logistics leadership and disciplined execution.
                Our Leeds-based team focuses on route performance, dependable communication, and results-oriented
                delivery management.
              </p>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-[color:var(--color-navy-900)] sm:grid-cols-2">
                {whyChooseShezuna.map((item) => (
                  <li key={item} className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--background)] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section id="services" className="py-14 sm:py-16">
          <Reveal>
            <div className="space-y-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">Services</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--color-navy-950)] sm:text-4xl">
                Results-Driven Logistics Subcontractor Support for Leeds and Yorkshire
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

        <section id="industries" className="py-14 sm:py-16">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--color-border)] bg-white/90 p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">Industries</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[color:var(--color-navy-950)] sm:text-4xl">
                Industries We Support
              </h2>
              <div className="mt-6 grid gap-3 text-sm text-[color:var(--color-navy-900)] sm:grid-cols-2 lg:grid-cols-3">
                {industries.map((item) => (
                  <div key={item} className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="testimonials" className="py-14 sm:py-16">
          <Reveal>
            <div className="space-y-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">Testimonials</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--color-navy-950)] sm:text-4xl">
                Trusted By Operations Teams Across Leeds
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.author} delay={0.06 * index}>
                <blockquote className="h-full rounded-2xl border border-[color:var(--color-border)] bg-white p-6 shadow-lg shadow-slate-900/4">
                  <p className="text-sm leading-7 text-[color:var(--color-muted)]">"{item.quote}"</p>
                  <footer className="mt-4 text-sm font-semibold text-[color:var(--color-navy-900)]">- {item.author}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="faq" className="py-14 sm:py-16">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--color-border)] bg-white/90 p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">FAQ</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[color:var(--color-navy-950)] sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-5 py-4">
                    <summary className="cursor-pointer text-sm font-semibold text-[color:var(--color-navy-900)]">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="service-pages" className="py-14 sm:py-16">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--color-border)] bg-white/90 p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">Service Hubs</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[color:var(--color-navy-950)] sm:text-4xl">
                Explore Dedicated Service Pages
              </h2>
              <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                {servicePages.map((slug) => (
                  <Link
                    key={slug}
                    href={slug}
                    className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background)] px-4 py-3 font-medium text-[color:var(--color-navy-900)] hover:bg-white"
                  >
                    {slug.replaceAll("/", "").replaceAll("-", " ")}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-navy-950)] p-7 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Get A Delivery Quote Today
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Need dependable logistics support in Yorkshire? Share your requirements and our Leeds team will build
                  a high-performance delivery plan for your routes, volume, and SLA targets.
                </p>

                <ul className="mt-8 space-y-4 text-sm text-slate-200">
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[color:var(--color-accent)]" aria-hidden="true" />
                    <a href="mailto:ops@shezuna.co.uk" data-track="contact_panel_email_click" className="hover:underline">
                      ops@shezuna.co.uk
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[color:var(--color-accent)]" aria-hidden="true" />
                    <a href="tel:01138343555" data-track="contact_panel_phone_click" className="hover:underline">
                      0113 834 3555
                    </a>
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

          <Reveal delay={0.12}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white p-2">
              <iframe
                title="Shezuna Leeds map"
                src="https://www.google.com/maps?q=Leeds%2C%20West%20Yorkshire&z=11&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full rounded-2xl"
              />
            </div>
          </Reveal>
        </section>

        <footer className="border-t border-[color:var(--color-border)] py-10 text-sm text-[color:var(--color-muted)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-semibold text-[color:var(--color-navy-900)]">Shezuna</p>
              <p className="mt-1">Leeds Logistics Subcontractor & Last-Mile Delivery Service</p>
            </div>
            <address className="not-italic leading-7">
              <p className="font-semibold text-[color:var(--color-navy-900)]">Leeds Office</p>
              <p>{businessAddress}</p>
              <p>
                Phone: <a href="tel:01138343555" data-track="footer_phone_click" className="hover:underline">0113 834 3555</a>
              </p>
              <p>
                Email: <a href="mailto:ops@shezuna.co.uk" data-track="footer_email_click" className="hover:underline">ops@shezuna.co.uk</a>
              </p>
            </address>
          </div>
        </footer>
      </main>
    </div>
  );
}
