import type { Metadata } from "next";
import { servicesPage, site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: site.servicesMetadataTitle,
  description: servicesPage.hero.sub,
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
