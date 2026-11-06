import { Link } from "@/components/Link";
import { CATEGORIES } from "@/data/works";

// currentSlug を省略すると「すべて」を選択中として表示する
export function CategoryNav({ currentSlug }: { currentSlug?: string }) {
  const items = [
    { href: "/", label: "すべて", current: currentSlug === undefined },
    ...CATEGORIES.map((category) => ({
      href: `/category/${category.slug}/`,
      label: category.name,
      current: category.slug === currentSlug,
    })),
  ];

  return (
    <nav aria-label="カテゴリ絞り込み">
      <ul className="category-nav">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              className="category-link"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
