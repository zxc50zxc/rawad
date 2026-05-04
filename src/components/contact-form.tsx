"use client";

import type { FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { home } from "@/lib/site-content";
import { softTransition } from "@/lib/motion-presets";

export function ContactForm() {
  const reduce = useReducedMotion();
  const f = home.contact.fields;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="mx-auto grid max-w-xl gap-4"
      initial={reduce ? undefined : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={softTransition}
    >
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          {f.name}
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="min-h-11 rounded-xl border border-border bg-surface/80 px-4 py-2.5 text-foreground outline-none transition focus:border-accent-2/70 focus:ring-2 focus:ring-accent-2/30"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          {f.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="min-h-11 rounded-xl border border-border bg-surface/80 px-4 py-2.5 text-foreground outline-none transition focus:border-accent-2/70 focus:ring-2 focus:ring-accent-2/30"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          {f.phone}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="min-h-11 rounded-xl border border-border bg-surface/80 px-4 py-2.5 text-foreground outline-none transition focus:border-accent-2/70 focus:ring-2 focus:ring-accent-2/30"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="resize-y rounded-xl border border-border bg-surface/80 px-4 py-3 text-foreground outline-none transition focus:border-accent-2/70 focus:ring-2 focus:ring-accent-2/30"
        />
      </div>
      <motion.button
        type="submit"
        whileHover={reduce ? undefined : { scale: 1.02 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        transition={softTransition}
        className="min-h-11 w-full rounded-xl bg-surface-elevated px-5 py-2.5 text-base font-semibold text-foreground shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_40%,transparent),0_0_28px_-10px_color-mix(in_srgb,var(--accent-2)_45%,transparent)] transition hover:shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent-2)_50%,transparent),0_0_36px_-8px_color-mix(in_srgb,var(--accent-hot)_30%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:min-w-[200px]"
      >
        {home.contact.submit}
      </motion.button>
    </motion.form>
  );
}
