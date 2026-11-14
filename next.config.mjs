/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev }) => {
    // On Windows, Webpack's disk filesystem cache (PackFileCacheStrategy) locks files in .next/cache
    // causing "Can't resolve ./vendor-chunks/next" and EPERM errors requiring constant server restarts.
    // Using in-memory caching in dev mode completely eliminates disk locking and keeps HMR instant.
    if (dev) {
      config.cache = { type: 'memory' };
    }
    return config;
  },
};

export default nextConfig;
