import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { AboutSection } from "@/components/sections/about-section";
import { ExpertisePillars } from "@/components/sections/expertise-pillars";
import { ProductGrid } from "@/components/sections/product-grid";
import { PortfolioGallery } from "@/components/sections/portfolio-gallery";
import { PartnersStrip } from "@/components/sections/partners-strip";
import { ContactBlock } from "@/components/sections/contact-block";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { hero, site, stats } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Section id="hero" className="pb-14 pt-10 sm:pb-20 sm:pt-14">
          <Container>
            <Stagger className="mx-auto max-w-4xl text-center">
              <StaggerItem>
                <p className="font-en text-xs font-semibold uppercase tracking-[0.2em] text-accent-2 sm:text-sm">
                  {site.brandEn}
                </p>
              </StaggerItem>
              <StaggerItem>
                <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
                  {hero.headline}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mx-auto mt-4 inline-block max-w-3xl bg-gradient-to-l from-magenta-brand via-foreground to-yellow-brand bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
                  {hero.sloganAr}
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="font-en mx-auto mt-2 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base">
                  {hero.sloganEn}
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {hero.sub}
                </p>
              </StaggerItem>
              <StaggerItem className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <ButtonLink href={hero.ctaPrimaryHref} variant="primary">
                  {hero.ctaPrimary}
                </ButtonLink>
                <ButtonLink href={hero.ctaSecondaryHref} variant="ghost">
                  {hero.ctaSecondary}
                </ButtonLink>
              </StaggerItem>
            </Stagger>
          </Container>
        </Section>

        <AboutSection />
        <ExpertisePillars />
        <ProductGrid />
        <PortfolioGallery />

        <Section id="highlights" className="border-t border-border/40 bg-surface/30 py-14 sm:py-16">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl">
                لماذا نحن؟
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                أرقام وتوجّهات تعكس التزامنا بالجودة والتغطية وخدمة ما بعد البيع.
              </p>
            </Reveal>
            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <Reveal className="h-full rounded-2xl border border-border bg-surface/85 p-6 text-center backdrop-blur-md sm:p-8">
                    <p className="text-3xl font-extrabold tabular-nums text-accent-2 sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                      {stat.caption}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <PartnersStrip />
        <ContactBlock />
      </main>
      <SiteFooter />
    </>
  );
}
