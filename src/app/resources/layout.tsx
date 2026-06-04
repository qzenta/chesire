import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Legal Resources | South African Law Guides — Chesire Attorneys",
  description: "Plain-language legal guides, articles and a legal glossary for South Africans. Free resources from Chesire Attorneys Johannesburg.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
