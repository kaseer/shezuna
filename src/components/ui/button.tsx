import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

const variants = {
  primary:
    "bg-electric text-on-electric shadow-lg shadow-electric/20 hover:bg-electric-strong",
  outline:
    "border border-border bg-surface/80 text-ink shadow-sm hover:border-electric/40 hover:bg-surface",
  ghost: "text-ink hover:bg-surface-muted",
  emerald: "bg-emerald text-on-emerald shadow-lg shadow-emerald/20 hover:brightness-110",
} as const;

type Variant = keyof typeof variants;

type Common = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children"> & {
    href: string;
  };

const base =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold tracking-tight transition duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60";

const reserved = ["variant", "className", "children", "href"];

function passthrough(props: object) {
  return Object.fromEntries(Object.entries(props).filter(([key]) => !reserved.includes(key)));
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const classes = cn(base, variants[props.variant ?? "primary"], props.className);

  if (typeof props.href === "string") {
    return (
      <Link href={props.href} className={classes} {...passthrough(props)}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes} {...passthrough(props)}>
      {props.children}
    </button>
  );
}
