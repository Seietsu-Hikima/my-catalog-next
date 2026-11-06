import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/components/Link";
import { WorkImage } from "@/components/WorkImage";
import { WORKS, getCategorySlug, getWork } from "@/data/works";

export const dynamicParams = false;

export function generateStaticParams() {
  return WORKS.map((work) => ({ id: work.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/works/[id]">): Promise<Metadata> {
  const { id } = await params;
  const work = getWork(id);
  return work ? { title: work.name } : {};
}

export default async function WorkDetailPage({
  params,
}: PageProps<"/works/[id]">) {
  const { id } = await params;
  const work = getWork(id);
  if (!work) notFound();

  return (
    <>
      <p className="back-link-wrap">
        <Link className="back-link" href="/">
          ← 作品一覧へ戻る
        </Link>
      </p>
      <article className="work-detail">
        <div className="work-detail-image">
          <WorkImage src={work.photoUrl} alt={work.name} />
        </div>
        <div>
          <Link
            className="category-tag"
            href={`/category/${getCategorySlug(work.category)}/`}
          >
            {work.category}
          </Link>
          <h1 className="work-detail-name">{work.name}</h1>
          <p className="work-detail-description">{work.description}</p>
        </div>
      </article>
    </>
  );
}
