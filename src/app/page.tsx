import { CategoryNav } from "@/components/CategoryNav";
import { WorkGrid } from "@/components/WorkGrid";
import { WORKS } from "@/data/works";

export default function HomePage() {
  return (
    <>
      <h1 className="page-title">作品一覧</h1>
      <CategoryNav />
      <WorkGrid works={WORKS} />
    </>
  );
}
