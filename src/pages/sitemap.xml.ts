import type { APIRoute } from 'astro';

/**
 * Dynamic XML Sitemap endpoint for KannadaTools
 * Generates valid sitemap.xml for all public static pages
 */
export const GET: APIRoute = async () => {
  const siteUrl = 'https://kannadatools.pages.dev';
  const currentDate = new Date().toISOString().split('T')[0];

  const routes = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: 'transliterate', priority: '0.9', changefreq: 'monthly' },
    { path: 'cleaner', priority: '0.9', changefreq: 'monthly' },
    { path: 'ocr', priority: '0.9', changefreq: 'monthly' },
    { path: 'speech', priority: '0.9', changefreq: 'monthly' },
    { path: 'about', priority: '0.8', changefreq: 'monthly' },
    { path: 'contact', priority: '0.7', changefreq: 'monthly' },
    { path: 'request-tool', priority: '0.7', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}/${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
