import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { about } from "@/lib/site-content";

export function AboutSection() {
  return (
    <Section id={about.id} className="border-y border-border/50 bg-surface/35 py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-[inset_0_1px_0_0_color-mix(in_srgb,white_8%,transparent)]">
              <Image
                src={about.imageSrc}
                alt={about.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-magenta-brand sm:text-4xl">
              {about.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {about.body}
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
