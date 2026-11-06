import NextLink from "next/link";
import type { ComponentProps } from "react";

// Next.js 16.4.5 の静的出力では、動的ページの事前読み込み先のファイル名と
// 実際に出力されるファイルの場所が食い違い、404エラーが出る。
// そのため事前読み込みを止める。ページ移動そのものには影響しない。
export function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={false} {...props} />;
}
