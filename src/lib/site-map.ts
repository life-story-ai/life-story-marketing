import { staticPageKeys } from '../content/static-pages';

const rootStaticPageKeys = staticPageKeys.filter((page) => page !== 'mentions-legales');

export function getCanonicalSitePaths() {
  return [
    '/',
    '/fr',
    '/autobiography',
    '/gift',
    '/mother-biography',
    '/grandmother-biography',
    '/childhood-book',
    '/how-it-works',
    '/autobiographie',
    '/fr-biographie-mere',
    '/fr-cadeau-biographie',
    '/impact',
    '/fr/impact',
    '/blog',
    '/fr/blog',
    ...rootStaticPageKeys.map((page) => `/${page}`),
    ...staticPageKeys.map((page) => `/fr/${page}`),
  ];
}
