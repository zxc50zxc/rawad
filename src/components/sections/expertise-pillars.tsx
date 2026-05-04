import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { pillars } from "@/lib/site-content";

type Props = {
  sectionId?: string;
  title?: string;
  subtitle?: string;
};

export function ExpertisePillars({
  sectionId = "expertise",
  title = "خبراتنا الأساسية",
  subtitle = "ثلاث ركائز تربط الإبداع بالتحليل ثم التنفيذ على أرض الواقع.",
}: Props) {
  return (
    <Section id={sectionId} className="py-16 sm:py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <li key={pillar.title}>
              <Reveal className="h-full rounded-2xl border border-border bg-surface/85 p-6 backdrop-blur-md sm:p-8">
                <p className="text-sm font-bold text-accent-2">0{i + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-foreground">
                  {pillar.title}
                </h3>
                <ul className="mt-4 list-disc space-y-2 pe-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {pillar.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
