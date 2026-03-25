const LEGACY_ORIGIN = 'https://life-story.ai';
const configuredSiteUrl = process.env.SITE_URL ?? 'https://life-story.ai/';
const siteUrl = new URL(configuredSiteUrl);
const pathPrefix = siteUrl.pathname.replace(/\/$/, '');

function withConfiguredSitePath(path) {
  if (!path.startsWith('/') || !pathPrefix) {
    return path;
  }

  if (path === pathPrefix || path.startsWith(`${pathPrefix}/`)) {
    return path;
  }

  return path === '/' ? `${pathPrefix}/` : `${pathPrefix}${path}`;
}

function localeRoot(locale) {
  return locale === 'fr' ? '/fr' : '/';
}

function localePath(locale, path) {
  const root = localeRoot(locale);
  return root === '/' ? path : `${root}${path}`;
}

function localizeGenericPath(locale, path) {
  const blogMatch = path.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    return localePath(locale, `/blog/${blogMatch[1]}`);
  }

  const explicitFrBlogMatch = path.match(/^\/fr\/blog\/(.+)$/);
  if (explicitFrBlogMatch) {
    return `/fr/blog/${explicitFrBlogMatch[1]}`;
  }

  switch (path) {
    case '/':
      return localeRoot(locale);
    case '/fr':
      return '/fr';
    case '/blog':
      return localePath(locale, '/blog');
    case '/team':
    case '/fr/team':
      return localePath(locale, '/team');
    case '/vision':
    case '/fr/vision':
      return localePath(locale, '/vision');
    case '/terms-of-service':
    case '/fr/terms-of-service':
    case '/fr/conditions-utilisation':
      return localePath(locale, '/terms-of-service');
    case '/privacy-policy':
    case '/fr/privacy-policy':
    case '/fr/politique-de-confidentialite':
      return localePath(locale, '/privacy-policy');
    case '/mentions-legales':
    case '/fr/mentions-legales':
      return localePath(locale, '/mentions-legales');
    case '/faq':
    case '/fr/faq':
      return `${localeRoot(locale)}#faq`;
    case '/impact':
      return localePath(locale, '/impact');
    case '/gift':
    case '/autobiography':
    case '/mother-biography':
    case '/grandmother-biography':
    case '/parents-grandparents':
    case '/childhood-book':
      return locale === 'fr' ? '/fr' : '/';
    case '/fr-cadeau-biographie':
    case '/autobiographie':
    case '/fr-biographie-mere':
      return '/fr';
    default:
      return path;
  }
}

function normalizePathByLocale(locale, path) {
  switch (path) {
    case '/fr':
      return '/fr';
    case '/fr/team':
      return '/fr/team';
    case '/fr/vision':
      return '/fr/vision';
    case '/fr/privacy-policy':
    case '/fr/politique-de-confidentialite':
      return '/fr/privacy-policy';
    case '/fr/terms-of-service':
    case '/fr/conditions-utilisation':
      return '/fr/terms-of-service';
    case '/fr/mentions-legales':
      return '/fr/mentions-legales';
    case '/fr/faq':
      return '/fr#faq';
    case '/impact-fr':
      return '/fr/impact';
    case '/fr/blog':
      return '/fr/blog';
    default:
      return localizeGenericPath(locale, path);
  }
}

function toInternalUrl(href) {
  if (href.startsWith('/')) {
    return new URL(href, LEGACY_ORIGIN);
  }

  if (!href.startsWith('http://') && !href.startsWith('https://')) {
    return null;
  }

  try {
    const url = new URL(href);
    return url.origin === LEGACY_ORIGIN ? url : null;
  } catch {
    return null;
  }
}

export function withConfiguredSiteHref(href) {
  if (!href) {
    return href;
  }

  if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }

  const url = toInternalUrl(href);
  if (!url) {
    return href;
  }

  return withConfiguredSitePath(`${url.pathname}${url.search}${url.hash}`);
}

export function normalizeSiteHref(locale, href, options = {}) {
  const { anchorHrefPrefix = '' } = options;

  if (!href) {
    return href;
  }

  if (href.startsWith('#')) {
    if (anchorHrefPrefix) {
      return `${anchorHrefPrefix}${href}`;
    }

    return href;
  }

  if (href.startsWith('mailto:') || href.startsWith('tel:')) {
    return href;
  }

  const url = toInternalUrl(href);
  if (!url) {
    return href;
  }

  const normalizedPath = normalizePathByLocale(locale, url.pathname);
  const normalizedHref = `${normalizedPath}${url.search}${url.hash}`;
  return withConfiguredSitePath(normalizedHref);
}

export function normalizeHtmlInternalLinks(locale, html) {
  return html.replace(/href=(['"])([^'"]+)\1/g, (fullMatch, quote, href) => {
    const normalizedHref = normalizeSiteHref(locale, href);
    return `href=${quote}${normalizedHref}${quote}`;
  });
}
