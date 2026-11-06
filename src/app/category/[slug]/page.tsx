import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryNav } from "@/components/CategoryNav";
import { WorkGrid } from "@/components/WorkGrid";
import { CATEGORIES, getCategoryBySlug, getWorksByCategory } from "@/data/works";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/category/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  return category ? { title: `${category.name}の作品` } : {};
}

export default async function CategoryPage({
  params,
}: PageProps<"/category/[slug]">) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  return (
    <>
      <h1 className="page-title">{category.name}の作品</h1>
      <CategoryNav currentSlug={category.slug} />
      <WorkGrid works={getWorksByCategory(category.name)} />
    </>
  );
}
