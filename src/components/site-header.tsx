import Link from "next/link";
import { site } from "@/lib/site-content";

/** Labels are substrings or exact phrases from site titles / sections. */
const links = [
  { href: "/services", label: "خدماتنا" },
  { href: "/#contact", label: "تواصل معنا" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-base font-extrabold tracking-tight text-foreground transition-colors hover:text-accent-2 sm:text-lg"
        >
          {site.brand}
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-2 text-sm font-medium sm:gap-4 sm:text-base"
          aria-label="التنقل الرئيسي"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-2 py-2 text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground sm:px-3"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
