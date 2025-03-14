import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const SITE_URL = 'https://taskie-manager.online/';

// async function fetchDynamicRoutes() {
//   try {
//     const response = await fetch(API_URL);
//     const posts = await response.json();
//     return posts.map((post) => `/blog/${post.slug}`);
//   } catch (error) {
//     console.error('Error fetching dynamic routes:', error);
//     return [];
//   }
// }

async function generateSitemap() {
  try {
    const staticRoutes = ['/'];

    // const dynamicRoutes = await fetchDynamicRoutes();

    // const allRoutes = [...staticRoutes, ...dynamicRoutes];
    const allRoutes = [...staticRoutes];

    const sitemapStream = new SitemapStream({ hostname: SITE_URL });
    const xml = await streamToPromise(
      Readable.from(allRoutes.map((url) => ({ url }))).pipe(sitemapStream)
    );

    writeFileSync('dist/sitemap.xml', xml.toString());
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
