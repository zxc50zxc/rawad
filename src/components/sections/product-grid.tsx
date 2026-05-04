import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { products } from "@/lib/site-content";

type Props = { sectionId?: string };

export function ProductGrid({ sectionId = "products" }: Props) {
  return (
    <Section
      id={sectionId}
      className="border-t border-border/40 bg-surface/25 py-16 sm:py-20"
    >
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl">
            منتجاتنا الرئيسية
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            حلول تنفيذية تغطي الإعلان البصري من الحرف البارز إلى تسوير المواقع.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Reveal key={p.title}>
              <Link
                href="/#portfolio"
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface/80 p-6 transition hover:border-accent-2/45 hover:bg-surface-elevated/90 sm:p-7"
              >
                <h3 className="text-lg font-bold text-accent-hot group-hover:text-accent-2 sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-accent-2">
                  شاهد الأعمال ←
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
