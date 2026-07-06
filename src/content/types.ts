export type Locale = 'en' | 'fr';
export type LandingVariantKey = 'gift' | 'autobiography' | 'motherBiography' | 'grandmotherBiography' | 'childhoodBook';

export type ImageKey =
  | 'logo'
  | 'favicon'
  | 'ogCover'
  | 'impactPsychologicalWellBeing'
  | 'impactIntergenerationalUnderstanding'
  | 'impactSocialConnection'
  | 'impactCulturalHeritage'
  | 'heroFamilyBook'
  | 'roleMainAuthor'
  | 'roleCoauthor'
  | 'roleInterviewer'
  | 'roleSubscriber'
  | 'lisaBrowser'
  | 'bookLifeStory'
  | 'bookFamilyHistory'
  | 'bookBirthBook'
  | 'bookFreeNarrative'
  | 'bookTravelBook'
  | 'bookGiftCard'
  | 'weeklyQuestion'
  | 'rewriteExample'
  | 'bookCoverEditor'
  | 'stripePayment'
  | 'exampleGift'
  | 'exampleAutobiography'
  | 'exampleFamilyStory';

export type VideoKey = 'voiceDemo';

export type PublicImageKey = 'trustpilotStars';

export type SocialPlatform = 'youtube' | 'instagram' | 'facebook' | 'x';
export type FeatureIconName =
  | 'clipboard'
  | 'profile'
  | 'list'
  | 'spark'
  | 'collaboration'
  | 'cover'
  | 'photo'
  | 'edit'
  | 'share';

export interface LinkItem {
  label: string;
  href: string;
}

export interface CtaItem extends LinkItem {
  primary?: boolean;
}

export interface TestimonialItem {
  rating: string;
  quote: string;
  author: string;
  href?: string;
}

export interface GalleryCard {
  title: string;
  description: string;
  image: ImageKey;
  alt: string;
}

export interface FeatureItem {
  icon: FeatureIconName;
  title: string;
  description: string;
}

export interface ZigzagItem {
  title: string;
  titleHtml?: string;
  description: string;
  image?: ImageKey;
  video?: VideoKey;
  alt: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  cta: CtaItem;
  featured?: boolean;
}

export interface PricingRow {
  label: string;
  tooltip?: string;
  values: string[];
}

export interface FooterLinkGroup {
  title?: string;
  links: LinkItem[];
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

export interface FooterContent {
  lines: string[];
  socialLinks: Array<{ platform: SocialPlatform; href: string }>;
  legalLinks: FooterLinkGroup[];
}

export interface LandingPageContent {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    links: LinkItem[];
    authCtas: CtaItem[];
    buyCta: CtaItem;
    currentLanguage: string;
    alternateLanguage: LinkItem;
  };
  hero: {
    titleHtml: string;
    description: string;
    cta: CtaItem;
    info: string;
    image: ImageKey;
    alt: string;
  };
  testimonials: {
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  roles: {
    titleHtml: string;
    description: string;
    items: GalleryCard[];
  };
  assistantFeatures: {
    titleHtml: string;
    description: string;
    items: FeatureItem[];
    checks: string[];
    image: ImageKey;
    alt: string;
  };
  bookTypes: {
    title: string;
    description: string;
    items: GalleryCard[];
  };
  weeklyFlow: {
    title: string;
    description: string;
    items: ZigzagItem[];
  };
  customization: {
    titleHtml: string;
    description: string;
    items: FeatureItem[];
    image: ImageKey;
    alt: string;
  };
  pricing: {
    title: string;
    description: string;
    plans: PricingPlan[];
    rows: PricingRow[];
  };
  guarantee: {
    title: string;
    description: string;
  };
  examples: {
    title: string;
    description: string;
    items: Array<{ image: ImageKey; alt: string }>;
  };
  privacy: {
    title: string;
    description: string;
  };
  finalCta: {
    title: string;
    description: string;
    cta: CtaItem;
    info: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: FooterContent & {
    currentLanguage: string;
    alternateLanguage: LinkItem;
  };
}

export interface StaticContentSection {
  title?: string;
  subtitle?: string;
  html: string;
}

export interface StaticPageBase {
  locale: Locale;
  path: string;
  alternatePath: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubtitle?: string;
}

export interface RichStaticPageContent extends StaticPageBase {
  kind: 'rich';
  sections: StaticContentSection[];
}

export interface FaqPageContent extends StaticPageBase {
  kind: 'faq';
  sections?: StaticContentSection[];
  faq: LandingPageContent['faq'];
}

export interface TeamMemberContent {
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  links?: LinkItem[];
}

export interface TeamPageContent extends StaticPageBase {
  kind: 'team';
  members: TeamMemberContent[];
  sections?: StaticContentSection[];
}

export interface ImpactBenefitItem {
  title: string;
  description: string;
  image: ImageKey;
  alt: string;
}

export interface ImpactPageContent extends StaticPageBase {
  introHtml: string;
  benefits: ImpactBenefitItem[];
  bodyHtml: string;
  cta: {
    title: string;
    subtitle: string;
    label: string;
    href: string;
  };
}

export type StaticPageContent = RichStaticPageContent | FaqPageContent | TeamPageContent;
