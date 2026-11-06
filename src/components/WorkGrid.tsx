import { Link } from "@/components/Link";
import { WorkImage } from "@/components/WorkImage";
import type { Work } from "@/data/works";

function WorkCard({ work }: { work: Work }) {
  return (
    <Link className="work-card" href={`/works/${work.id}/`}>
      <span className="work-card-image">
        {/* 作品名がすぐ下にあるので、読み上げが重ならないよう alt は空にする */}
        <WorkImage src={work.photoUrl} alt="" lazy />
      </span>
      <span className="work-card-name">{work.name}</span>
      <span className="work-card-category">{work.category}</span>
    </Link>
  );
}

export function WorkGrid({ works }: { works: Work[] }) {
  if (works.length === 0) {
    return <p className="message">作品を準備中です。</p>;
  }

  return (
    <ul className="work-list">
      {works.map((work) => (
        <li key={work.id}>
          <WorkCard work={work} />
        </li>
      ))}
    </ul>
  );
}
