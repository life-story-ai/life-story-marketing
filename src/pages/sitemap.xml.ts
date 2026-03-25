import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getBlogPostPath } from '../lib/blog';
import { absoluteSiteUrl } from '../lib/i18n';
import { getCanonicalSitePaths } from '../lib/site-map';

export const prerender = true;

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = async () => {
  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);

  const entries = [
    ...getCanonicalSitePaths().map((path) => ({
      path,
      lastmod: undefined as string | undefined,
    })),
    ...blogPosts.map((post) => ({
      path: getBlogPostPath(post.data.locale, post.data.routeSlug),
      lastmod: post.data.publishDate.toISOString(),
    })),
  ].sort((left, right) => left.path.localeCompare(right.path));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(({ path, lastmod }) => {
    const lines = [`  <url>`, `    <loc>${escapeXml(absoluteSiteUrl(path))}</loc>`];

    if (lastmod) {
      lines.push(`    <lastmod>${lastmod}</lastmod>`);
    }

    lines.push('  </url>');
    return lines.join('\n');
  })
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
