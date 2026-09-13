import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailClient } from "../../components/DetailClient";
import { entries, entryBySlug } from "../../content";

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = entryBySlug(slug);
  if (!entry) return {};
  const title = `${entry.title.en} — Iris Feng`;
  const description = entry.summary.en;
  return {
    title,
    description,
    openGraph: { title, description, images: [] },
    twitter: { title, description, images: [] },
  };
}

export default async function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = entryBySlug(slug);
  if (!entry) notFound();
  return <DetailClient entry={entry} />;
}
