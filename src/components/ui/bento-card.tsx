"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { inViewOnce } from "@/lib/motion-presets";

type Props = {
  title: string;
  description: string;
  className?: string;
  eyebrow?: ReactNode;
};

export function BentoCard({
  title,
  description,
  className = "",
  eyebrow,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      variants={inViewOnce(reduce)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      whileHover={reduce ? undefined : { scale: 1.015, y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.995 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/80 p-5 shadow-[inset_0_1px_0_0_color-mix(in_srgb,white_6%,transparent)] backdrop-blur-md sm:p-6 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,80%) var(--y,20%), color-mix(in srgb, var(--accent-2) 12%, transparent), transparent 40%)",
        }}
      />
      {eyebrow ? (
        <div className="relative mb-3 text-xs font-medium text-accent-2 sm:text-sm">
          {eyebrow}
        </div>
      ) : null}
      <h3 className="relative text-lg font-bold leading-snug text-foreground sm:text-xl">
        {title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
    </motion.article>
  );
}
