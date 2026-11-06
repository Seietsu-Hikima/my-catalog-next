import type { Metadata } from "next";
import { Link } from "@/components/Link";

export const metadata: Metadata = { title: "ページが見つかりません" };

export default function NotFound() {
  return (
    <div className="message">
      <h1 className="page-title">ページが見つかりません</h1>
      <p>URLが間違っているか、作品が掲載を終了した可能性があります。</p>
      <Link className="back-link" href="/">
        作品一覧へ戻る
      </Link>
    </div>
  );
}
