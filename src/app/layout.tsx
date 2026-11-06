import type { Metadata } from "next";
import { Link } from "@/components/Link";
import { SITE } from "@/data/works";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <Link className="brand" href="/">
            {SITE.name}
          </Link>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <small>© {SITE.name}</small>
        </footer>
      </body>
    </html>
  );
}
