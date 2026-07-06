export const productFacts = {
  printedBookMaxColorPages: 250,
  photosAreUnlimited: true,
  refundDays: 30,
  trustpilot: {
    profileUrl: 'https://www.trustpilot.com/review/life-story.ai',
    rating: '4.3',
    reviewCount: 22,
  },
  plans: {
    starter: {
      priceUsd: 49,
      priceEur: 49,
      access: { en: '6 months', fr: '6 mois' },
      includedBooks: 0,
      contributors: 1,
      extraBookUsd: 59,
      extraBookEur: 59,
    },
    author: {
      priceUsd: 99,
      priceEur: 99,
      access: { en: '1 year', fr: '1 an' },
      includedBooks: 1,
      contributors: 2,
      extraBookUsd: 39,
      extraBookEur: 39,
    },
    family: {
      priceUsd: 199,
      priceEur: 199,
      access: { en: '2 years', fr: '2 ans' },
      includedBooks: 5,
      contributors: 10,
      extraBookUsd: 29,
      extraBookEur: 29,
    },
  },
} as const;
