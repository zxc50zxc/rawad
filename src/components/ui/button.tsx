"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { softTransition } from "@/lib/motion-presets";

type Base = {
  children: ReactNode;
  className?: string;
};

type LinkProps = Base & {
  href: string;
  variant?: "primary" | "ghost";
};

const baseRing =
  "inline-flex min-h-11 min-w-[44px] items-center justify-center rounded-xl px-5 py-2.5 text-center text-sm font-semibold sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<NonNullable<LinkProps["variant"]>, string> = {
  primary:
    "bg-surface-elevated text-foreground shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_45%,transparent),0_0_32px_-8px_color-mix(in_srgb,var(--accent-2)_40%,transparent)] hover:shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent-2)_55%,transparent),0_0_40px_-6px_color-mix(in_srgb,var(--accent-hot)_35%,transparent)]",
  ghost:
    "border border-border bg-surface/60 text-foreground backdrop-blur-sm hover:border-accent-2/50 hover:bg-surface-elevated/80",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: LinkProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={softTransition}
      className="inline-flex"
    >
      <Link
        href={href}
        className={`${baseRing} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
