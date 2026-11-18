import { site } from '@/data/content';

/**
 * Absolute site URL, used for canonical links, social preview images,
 * structured data, robots.txt and the sitemap.
 *
 * - Development (`next dev`): localhost, so generated links work locally.
 * - Everything else: the official domain from `site.url`. Vercel preview
 *   deployments also point here, so search engines and link previews always
 *   credit the real domain rather than a temporary preview URL.
 * - NEXT_PUBLIC_SITE_URL overrides both if ever needed.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  return site.url;
}

export const siteUrl = new URL(resolveSiteUrl());
