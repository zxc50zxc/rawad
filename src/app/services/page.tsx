import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { ExpertisePillars } from "@/components/sections/expertise-pillars";
import { ProductGrid } from "@/components/sections/product-grid";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { contactForm, servicesPageCopy, site } from "@/lib/site-content";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Section className="pb-12 pt-10 sm:pb-16 sm:pt-14">
          <Container>
            <Stagger className="mx-auto max-w-3xl text-center">
              <StaggerItem>
                <p className="text-sm font-semibold text-accent-2 sm:text-base">
                  {site.brandAr}
                </p>
              </StaggerItem>
              <StaggerItem>
                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
                  {servicesPageCopy.hero.headline}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {servicesPageCopy.hero.sub}
                </p>
              </StaggerItem>
              <StaggerItem className="mt-10 flex justify-center gap-4">
                <ButtonLink href="/#portfolio" variant="ghost">
                  معرض الأعمال
                </ButtonLink>
                <ButtonLink href={servicesPageCopy.closingHref} variant="primary">
                  {servicesPageCopy.closingCta}
                </ButtonLink>
              </StaggerItem>
            </Stagger>
          </Container>
        </Section>

        <ExpertisePillars
          sectionId="services-expertise"
          title="الركائز الثلاث بالتفصيل"
          subtitle="نفس المنطق المعتمد في الصفحة الرئيسية، مع إمكانية التوسعة مستقبلاً بصفحات فرعية لكل منتج."
        />
        <ProductGrid sectionId="services-products" />

        <Section className="border-t border-border/50 bg-surface/30 py-14 sm:py-16">
          <Container>
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {servicesPageCopy.closing}
              </p>
              <div className="mt-8 flex justify-center">
                <ButtonLink href={servicesPageCopy.closingHref} variant="primary">
                  {contactForm.title}
                </ButtonLink>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                أو ارجع إلى{" "}
                <Link href="/" className="font-semibold text-accent-2 hover:underline">
                  الصفحة الرئيسية
                </Link>
              </p>
            </Reveal>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
