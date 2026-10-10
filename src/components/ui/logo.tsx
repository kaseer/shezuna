import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "default" | "inverse";
  /** Hide the wordmark when only the mark is needed. */
  markOnly?: boolean;
};

/** Same route mark as /icon.svg, used in the header, footer, and other brand lockups. */
export function Logo({ className, tone = "default", markOnly = false }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5 rounded-lg", className)} data-track="logo_click">
      <Image src="/icon.svg" alt="" width={34} height={34} unoptimized className="h-[34px] w-[34px]" />
      {markOnly ? (
        <span className="sr-only">Shezuna</span>
      ) : (
        <span
          className={cn(
            "text-lg font-semibold tracking-tight",
            tone === "inverse" ? "text-white" : "text-ink",
          )}
        >
          Shezuna
        </span>
      )}
    </Link>
  );
}
