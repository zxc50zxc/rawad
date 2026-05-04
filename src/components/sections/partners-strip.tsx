import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { partners } from "@/lib/site-content";

export function PartnersStrip() {
  return (
    <Section id="partners" className="border-y border-border/50 bg-surface/35 py-14 sm:py-16">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-transparent bg-gradient-to-l from-cyan-brand via-magenta-brand to-yellow-brand bg-clip-text sm:text-4xl">
            شركاء النجاح
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            نفتخر بثقة جهات وعلامات عملنا معها؛ يمكن إضافة شعارات بصرية لهذا الشريط عند
            توفر الأصول الرسمية.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {partners.map((p) => (
            <Reveal key={p.name}>
              <div className="flex min-h-[52px] min-w-[140px] items-center justify-center rounded-xl border border-yellow-brand/35 bg-surface/90 px-5 py-3 text-center shadow-[inset_0_1px_0_0_color-mix(in_srgb,var(--yellow-brand)_15%,transparent)]">
                <span className="text-sm font-bold text-foreground sm:text-base">
                  {p.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
