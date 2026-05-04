import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import {
  contactForm,
  contactInfo,
  socialLinks,
} from "@/lib/site-content";

export function ContactBlock() {
  return (
    <Section id="contact" className="pb-24 pt-10 sm:pb-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl">
            {contactForm.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {contactForm.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal className="space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent-2">
                الهاتف
              </h3>
              <ul className="mt-3 space-y-2">
                {contactInfo.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-lg font-semibold text-foreground hover:text-accent-2"
                      dir="ltr"
                    >
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent-2">
                العنوان
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {contactInfo.addressAr}
              </p>
              <p className="mt-2 font-en text-sm text-muted-foreground" dir="ltr">
                {contactInfo.addressEn}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent-2">
                الموقع
              </h3>
              <a
                href={contactInfo.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-en text-lg font-semibold text-accent-hot hover:text-accent-2"
                dir="ltr"
              >
                {contactInfo.websiteLabel}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent-2">
                وسائل التواصل
              </h3>
              <ul className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center rounded-xl border border-border bg-surface/80 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-magenta-brand/50 hover:bg-surface-elevated"
                    >
                      <span className="text-accent-hot">{s.label}</span>
                      <span className="mx-2 text-muted-foreground">·</span>
                      <span className="font-en text-muted-foreground" dir="ltr">
                        {s.handle}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
