// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'velite-blog-demo'; // 본인 저장소 이름

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;