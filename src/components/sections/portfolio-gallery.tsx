"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  portfolioCategoryLabels,
  portfolioItems,
  type PortfolioCategory,
} from "@/lib/site-content";

const tabs: PortfolioCategory[] = [
  "all",
  "letters",
  "banners",
  "prints",
  "hoarding",
];

export function PortfolioGallery() {
  const [cat, setCat] = useState<PortfolioCategory>("all");

  const counts = useMemo(() => {
    const m = new Map<Exclude<PortfolioCategory, "all">, number>();
    for (const item of portfolioItems) {
      m.set(item.category, (m.get(item.category) ?? 0) + 1);
    }
    return m;
  }, []);

  const visibleTabs = tabs.filter(
    (t) =>
      t === "all" ||
      portfolioItems.some((i) => i.category === t),
  );

  const filtered =
    cat === "all"
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === cat);

  return (
    <Section id="portfolio" className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl">
            معرض الأعمال
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            لقطات من أعمال تنفيذنا؛ يمكن إثراء هذا القسم بلقطات إضافية عالية الدقة عند
            الطلب.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {visibleTabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setCat(t)}
              className={`min-h-10 rounded-full px-4 py-2 text-sm font-semibold transition sm:text-base ${
                cat === t
                  ? "bg-magenta-brand text-white shadow-[0_0_20px_-6px_color-mix(in_srgb,var(--magenta-brand)_70%,transparent)]"
                  : "border border-border bg-surface/70 text-muted-foreground hover:border-accent-2/40 hover:text-foreground"
              }`}
            >
              {portfolioCategoryLabels[t]}
              {t !== "all" ? (
                <span className="ms-1 tabular-nums opacity-70">
                  ({counts.get(t as Exclude<PortfolioCategory, "all">) ?? 0})
                </span>
              ) : null}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {filtered.map((item) => (
            <div
              key={item.src + item.alt}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface-elevated"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-3">
                <p className="text-xs font-semibold text-white sm:text-sm">
                  {portfolioCategoryLabels[item.category]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
