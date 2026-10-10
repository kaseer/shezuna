import { Check } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/ui/container";
import { onboardingSteps, subcontractorBenefits } from "@/src/lib/site";

type SubcontractorsProps = {
  showSteps?: boolean;
};

export function Subcontractors({ showSteps = false }: SubcontractorsProps) {
  return (
    <section id="subcontractors" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-navy-950 text-white shadow-2xl shadow-navy-950/20">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-bright">Subcontractors</p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                XLWB van capacity for Yorkshire multi-drop routes
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Drivers and fleet owners with LWB or XLWB vans can partner with Shezuna. We place excess capacity onto
                live multi-drop and dedicated work from the nearest depot.
              </p>
              <ul className="mt-6 space-y-3">
                {subcontractorBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm text-slate-100">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald/20 text-emerald-bright">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact?role=subcontractor" variant="emerald">
                  Partner With Us
                </Button>
                {showSteps ? null : (
                  <Button
                    href="/subcontractors"
                    variant="outline"
                    className="border-white/15 bg-transparent text-white hover:bg-white/10"
                  >
                    How onboarding works
                  </Button>
                )}
              </div>
            </div>

            <div className="grid gap-3">
              {(showSteps ? onboardingSteps : onboardingSteps.slice(0, 3)).map((item) => (
                <article key={item.step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-mono text-xs text-emerald-bright">{item.step}</p>
                  <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
