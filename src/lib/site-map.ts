import { staticPageKeys } from '../content/static-pages';

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
    ...staticPageKeys.map((page) => `/${page}`),
    ...staticPageKeys.map((page) => `/fr/${page}`),
  ];
}
