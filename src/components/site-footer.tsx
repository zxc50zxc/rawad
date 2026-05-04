import Link from "next/link";
import { Container } from "@/components/ui/container";
import { contactInfo, site, socialLinks } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/40 py-10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:text-start">
        <div>
          <Link href="/" className="text-lg font-extrabold text-foreground hover:text-accent-2">
            {site.brandAr}
          </Link>
          <p className="font-en mt-1 text-sm text-muted-foreground">{site.brandEn}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-3 sm:justify-end" aria-label="وسائل التواصل">
          {socialLinks.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-accent-2"
            >
              {s.label}
            </Link>
          ))}
        </nav>
        <p className="w-full text-center text-xs text-muted-foreground sm:text-end">
          © {new Date().getFullYear()} {site.brandAr} ·{" "}
          <a
            href={contactInfo.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-en hover:text-accent-2"
            dir="ltr"
          >
            {contactInfo.websiteLabel}
          </a>
        </p>
      </Container>
    </footer>
  );
}
