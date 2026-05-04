import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { BentoGrid } from "@/components/ui/bento-grid";
import { BentoCard } from "@/components/ui/bento-card";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { home, services, servicesPage, site } from "@/lib/site-content";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Section id="hero" className="pb-12 pt-10 sm:pb-16 sm:pt-14">
          <Container>
            <Stagger className="mx-auto max-w-3xl text-center">
              <StaggerItem>
                <p className="text-sm font-semibold text-accent-2 sm:text-base">
                  {site.brand}
                </p>
              </StaggerItem>
              <StaggerItem>
                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {home.hero.headline}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {home.hero.sub}
                </p>
              </StaggerItem>
              <StaggerItem className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <ButtonLink href="/services" variant="primary">
                  {home.hero.ctaPrimary}
                </ButtonLink>
                <ButtonLink href="/services" variant="ghost">
                  {home.hero.ctaSecondary}
                </ButtonLink>
              </StaggerItem>
            </Stagger>
          </Container>
        </Section>

        <Section id="project" className="border-y border-border/50 bg-surface/40 py-14 sm:py-20">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                {home.project.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {home.project.body}
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink href="/#contact" variant="primary">
                  {home.project.cta}
                </ButtonLink>
              </div>
            </Reveal>
          </Container>
        </Section>

        <Section id="services" className="py-16 sm:py-20">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-4xl">
                {servicesPage.hero.headline}
              </h2>
              <p className="mx-auto mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {servicesPage.hero.sub}
              </p>
            </Reveal>
            <div className="mt-12">
              <BentoGrid>
                {services.map((s) => (
                  <BentoCard
                    key={s.title}
                    title={s.title}
                    description={s.description}
                    className={s.homeBentoClass}
                  />
                ))}
              </BentoGrid>
            </div>
          </Container>
        </Section>

        <Section id="stats" className="border-t border-border/50 bg-surface/30 py-16 sm:py-20">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-4xl">
                {home.why.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {home.why.intro}
              </p>
            </Reveal>
            <ul className="mt-12 grid gap-4 sm:grid-cols-3">
              {home.stats.map((stat) => (
                <li key={stat.value}>
                  <Reveal className="h-full rounded-2xl border border-border bg-surface/80 p-6 text-center backdrop-blur-md sm:p-8">
                    <p className="text-4xl font-extrabold tabular-nums text-accent-2 sm:text-5xl">
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

        <Section id="contact" className="pb-24 pt-8 sm:pb-28">
          <Container>
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-foreground sm:text-4xl">
                {home.contact.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {home.contact.intro}
              </p>
            </Reveal>
            <div className="mt-10">
              <ContactForm />
            </div>
          </Container>
        </Section>

        <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
          <Container>
            <Link href="/" className="font-semibold text-foreground hover:text-accent-2">
              {site.brand}
            </Link>
          </Container>
        </footer>
      </main>
    </>
  );
}
