import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { BentoGrid } from "@/components/ui/bento-grid";
import { BentoCard } from "@/components/ui/bento-card";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { home, services, servicesPage, site } from "@/lib/site-content";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Section className="pb-10 pt-10 sm:pb-14 sm:pt-14">
          <Container>
            <Stagger className="mx-auto max-w-3xl text-center">
              <StaggerItem>
                <p className="text-sm font-semibold text-accent-hot sm:text-base">
                  {site.brand}
                </p>
              </StaggerItem>
              <StaggerItem>
                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {servicesPage.hero.headline}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {servicesPage.hero.sub}
                </p>
              </StaggerItem>
              <StaggerItem className="mt-10 flex justify-center">
                <ButtonLink href="/#contact" variant="ghost">
                  {home.contact.title}
                </ButtonLink>
              </StaggerItem>
            </Stagger>
          </Container>
        </Section>

        <Section id="services-grid" className="pb-24 pt-4 sm:pb-28">
          <Container>
            <BentoGrid>
              {services.map((s) => (
                <BentoCard
                  key={s.title}
                  title={s.title}
                  description={s.description}
                  className={s.servicesBentoClass}
                />
              ))}
            </BentoGrid>
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
