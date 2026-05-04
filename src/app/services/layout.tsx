import type { Metadata } from "next";
import { site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: site.servicesMetadataTitle,
  description: site.servicesMetadataDescription,
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
