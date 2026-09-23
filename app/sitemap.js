export default function sitemap() {
  const baseUrl = 'https://www.holidaydreamphotos.com';

  const routes = [
    '',
    '/about',
    '/black-santa',
    '/book-now',
    '/contact',
    '/easter',
    '/hiring',
    '/locations',
    '/pick-your-santa',
    '/privacy',
    '/private-events',
    '/santa-on-wheels',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
