import { Container } from "@/src/components/ui/container";
import { Reveal } from "@/src/components/ui/reveal";
import { SectionHeading } from "@/src/components/ui/section-heading";
import { valueIcons } from "@/src/components/ui/icons";
import { valueProps } from "@/src/lib/site";

export function WhyShezuna() {
  return (
    <section id="why" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Shezuna"
          title="Why depot and transport managers use Shezuna"
          description="Vetted drivers, parcel-size rate cards, live desk communication, and fleet scale across four Yorkshire hubs."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item, index) => {
            const Icon = valueIcons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-3xl border border-border bg-surface p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-electric/10 text-electric">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
