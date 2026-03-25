import type { APIRoute } from 'astro';
import { absoluteSiteUrl } from '../lib/i18n';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = ['User-agent: *', 'Allow: /', `Sitemap: ${absoluteSiteUrl('/sitemap.xml')}`].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
