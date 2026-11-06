import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // サーバーなしで公開できるよう、ビルド時に out フォルダへHTMLを書き出す
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
