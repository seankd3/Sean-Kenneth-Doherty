import type { NextConfig } from 'next';

const githubPagesBasePath =
  process.env.GITHUB_ACTIONS === 'true' ? '/Sean-Kenneth-Doherty' : '';
const basePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH || githubPagesBasePath;

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;
