import { cn } from "@/src/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverse";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.18em]",
          tone === "inverse" ? "text-emerald-bright" : "text-electric",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
          tone === "inverse" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-7", tone === "inverse" ? "text-slate-300" : "text-muted")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
