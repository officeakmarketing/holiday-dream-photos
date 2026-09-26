/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/book',
        destination: '/book-now',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/event-list',
        destination: '/locations',
        permanent: true, // 301 redirect for SEO
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
};

export default nextConfig;
