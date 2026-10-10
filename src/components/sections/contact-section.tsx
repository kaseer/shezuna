import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/src/components/ui/container";
import { LeadForm } from "@/src/components/sections/lead-form";
import { site } from "@/src/lib/site";
import type { LeadRegion, LeadRole } from "@/src/lib/contact-schema";

type ContactSectionProps = {
  defaultRole?: LeadRole;
  defaultRegion?: LeadRegion;
};

export function ContactSection({ defaultRole, defaultRegion }: ContactSectionProps) {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl bg-navy-950 p-7 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-bright">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Tell us the lanes. We will tell you the vans.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Clients looking for fleet capacity and subcontractors looking for routes both come through this desk.
              Share the region and we will come back with a clear next step.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-slate-200">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-bright" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-bright" aria-hidden="true" />
                <a href={site.phoneHref} className="hover:underline">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-emerald-bright" aria-hidden="true" />
                <a href={site.mapHref} className="hover:underline">
                  {site.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 text-emerald-bright" aria-hidden="true" />
                {site.hours}
              </li>
            </ul>
          </div>
          <LeadForm
            key={`${defaultRole ?? "any"}-${defaultRegion ?? "any"}`}
            defaultRole={defaultRole}
            defaultRegion={defaultRegion}
          />
        </div>
      </Container>
    </section>
  );
}
