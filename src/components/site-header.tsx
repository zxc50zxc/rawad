import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:h-[4.25rem] sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 rounded-lg outline-none ring-offset-background transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 sm:gap-3"
        >
          <Image
            src={site.logoSrc}
            alt={site.logoAlt}
            width={44}
            height={44}
            className="h-9 w-9 sm:h-11 sm:w-11"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-extrabold text-foreground sm:text-base">
              {site.brandAr}
            </span>
            <span className="font-en text-[10px] font-medium text-muted-foreground sm:text-xs">
              {site.brandEn}
            </span>
          </span>
        </Link>
        <nav
          className="flex min-w-0 flex-1 justify-end gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden"
          aria-label="التنقل الرئيسي"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg px-2 py-2 text-xs font-semibold text-muted-foreground transition hover:bg-surface-elevated hover:text-foreground sm:px-3 sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
