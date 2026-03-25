import { staticPageKeys } from '../content/static-pages';

export function getCanonicalSitePaths() {
  return [
    '/',
    '/fr',
    '/impact',
    '/fr/impact',
    '/blog',
    '/fr/blog',
    ...staticPageKeys.map((page) => `/${page}`),
    ...staticPageKeys.map((page) => `/fr/${page}`),
  ];
}
