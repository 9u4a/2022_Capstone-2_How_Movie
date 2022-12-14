/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: { NEXT_SHARP_PATH: `/tmp/node_modules/sharp next start` },
};

module.exports = {
  ...nextConfig,
  images: {
    domains: [
      'image.tmdb.org',
      'lh3.googleusercontent.com',
      'ssl.pstatic.net',
      'k.kakaocdn.net',
    ],
  },
  output: 'standalone',
};
