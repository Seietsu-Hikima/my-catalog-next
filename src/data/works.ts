// ★作品の追加・変更は、このファイルだけを編集します。書き方は README.md を見てください。
// いま入っている内容はすべて架空の仮データです。公開前に本物の情報へ差し替えてください。

export const SITE = {
  name: "手作り工房淀屋橋",
  description: "ひとつずつ手づくりした作品をご紹介します",
};

export type Category = "木工" | "陶芸" | "アクセサリー";

export type Work = {
  id: string; // 他と重ならない半角英数字。作品ページのURLになる
  name: string;
  category: Category;
  photoUrl: string; // public/images の写真は "/images/ファイル名"。外部の写真は "https://..."
  description: string; // \n で改行できる
};

export const WORKS: Work[] = [
  {
    id: "w001",
    name: "くるみ材の小皿",
    category: "木工",
    photoUrl: "/images/wood-plate.svg",
    description:
      "くるみの木をひとつずつ削り出した小皿です。\n使うほどに色つやが深まります。",
  },
  {
    id: "w002",
    name: "山桜のバターナイフ",
    category: "木工",
    photoUrl: "/images/wood-knife.svg",
    description: "手になじむよう、持ち手の丸みを整えました。",
  },
  {
    id: "w003",
    name: "ひのきの小箱",
    category: "木工",
    photoUrl: "/images/wood-box.svg",
    description: "ふたを開けると、ひのきがやさしく香ります。",
  },
  {
    id: "w004",
    name: "粉引のマグカップ",
    category: "陶芸",
    photoUrl: "/images/ceramic-mug.svg",
    description:
      "白くやわらかな風合いのマグカップです。\nひとつずつ表情が異なります。",
  },
  {
    id: "w005",
    name: "青磁の一輪挿し",
    category: "陶芸",
    photoUrl: "/images/ceramic-vase.svg",
    description: "澄んだ青みの釉薬をかけた、小さな花器です。",
  },
  {
    id: "w006",
    name: "飴釉の小鉢",
    category: "陶芸",
    photoUrl: "/images/ceramic-bowl.svg",
    description: "深みのある飴色が、食卓を落ち着いた雰囲気にします。",
  },
  {
    id: "w007",
    name: "真鍮のしずくピアス",
    category: "アクセサリー",
    photoUrl: "/images/accessory-earrings.svg",
    description: "耳元で静かに揺れる、しずく形のピアスです。",
  },
  {
    id: "w008",
    name: "ガラスビーズのブレスレット",
    category: "アクセサリー",
    photoUrl: "/images/accessory-bracelet.svg",
    description: "小さなガラスビーズを、一粒ずつ編み込みました。",
  },
  {
    id: "w009",
    name: "押し花のリング",
    category: "アクセサリー",
    photoUrl: "/images/accessory-ring.svg",
    description: "小さな押し花を、透明なレジンに閉じ込めました。",
  },
];

/* ---------- ここから下は、作品の追加では編集しません ---------- */

export const CATEGORIES: { slug: string; name: Category }[] = [
  { slug: "wood", name: "木工" },
  { slug: "ceramic", name: "陶芸" },
  { slug: "accessory", name: "アクセサリー" },
];

// 同じIDがあると片方のページが黙って上書きされるので、ビルドを止めて知らせる
const seenIds = new Set<string>();
for (const { id } of WORKS) {
  if (seenIds.has(id)) throw new Error(`作品のIDが重複しています: ${id}`);
  seenIds.add(id);
}

export function getWork(id: string) {
  return WORKS.find((work) => work.id === id);
}

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function getCategorySlug(name: Category) {
  return CATEGORIES.find((category) => category.name === name)!.slug;
}

export function getWorksByCategory(name: Category) {
  return WORKS.filter((work) => work.category === name);
}
