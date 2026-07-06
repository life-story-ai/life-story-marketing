import type { LandingPageContent, LandingVariantKey, Locale } from './types';
import { enContent } from './site.en';
import { frContent } from './site.fr';
import { getLandingPageVariantContent as buildLandingPageVariantContent } from './landing-variants';
import { normalizeCopy } from '../lib/text';

export const landingPageContent: Record<Locale, LandingPageContent> = {
  en: normalizeCopy(enContent),
  fr: normalizeCopy(frContent),
};

export function getLandingPageContent(locale: Locale) {
  return landingPageContent[locale];
}

export function getLandingPageVariantContent(variant: LandingVariantKey) {
  return buildLandingPageVariantContent(landingPageContent.en, variant);
}
