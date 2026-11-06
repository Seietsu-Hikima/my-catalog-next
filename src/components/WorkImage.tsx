"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  lazy?: boolean;
};

export function WorkImage({ src, alt, lazy = false }: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className="image-fallback">画像なし</div>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- どの写真サイトのURLも追加設定なしで表示するため
    <img
      src={src}
      alt={alt}
      loading={lazy ? "lazy" : "eager"}
      onError={() => setFailed(true)}
      // ページの準備が整う前に読み込みに失敗した場合は onError が届かないので、ここでも確かめる
      ref={(img) => {
        if (img?.complete && img.naturalWidth === 0) setFailed(true);
      }}
    />
  );
}
