import type { GalleryCard, LandingPageContent, LandingVariantKey } from './types';
import { productFacts } from './product-facts';
import { normalizeCopy } from '../lib/text';

type LandingVariantFactory = (base: LandingPageContent) => LandingPageContent;

const registrationHref = 'https://app.life-story.ai/registrations/new?product=standard&locale=en';
const giftHref = 'https://app.life-story.ai/registrations/new?product=standard&locale=en&gift=true';

function faqSubset(base: LandingPageContent, questions: string[]) {
  const items = questions
    .map((question) => base.faq.items.find((item) => item.question === question))
    .filter((item): item is LandingPageContent['faq']['items'][number] => Boolean(item));

  return {
    ...base.faq,
    items,
  };
}

function withProductTruth(base: LandingPageContent): Pick<LandingPageContent, 'customization' | 'pricing'> {
  return {
    customization: {
      ...base.customization,
      description: `Add the finishing touch before receiving a printed book of up to ${productFacts.printedBookMaxColorPages} pages.`,
      items: base.customization.items.map((item) =>
        item.icon === 'photo'
          ? {
              ...item,
              title: 'Add unlimited photos',
              description: 'Add as many photos as you need, in color or black and white.',
            }
          : item,
      ),
    },
    pricing: {
      ...base.pricing,
      rows: base.pricing.rows.map((row) => {
        if (row.label === 'Printed book') {
          return {
            ...row,
            tooltip: `Up to ${productFacts.printedBookMaxColorPages} printed color pages`,
          };
        }

        if (row.label === 'Photos') {
          return {
            ...row,
            values: ['Unlimited photos', 'Unlimited photos', 'Unlimited photos'],
          };
        }

        return row;
      }),
    },
  };
}

function footerWithVariantLinks(
  base: LandingPageContent,
  current: LandingVariantKey,
): LandingPageContent['footer'] {
  const links = [
    { key: 'gift', label: 'Gift a biography', href: '/gift' },
    { key: 'autobiography', label: 'Autobiography', href: '/autobiography' },
    { key: 'motherBiography', label: 'Mother biography', href: '/mother-biography' },
    { key: 'grandmotherBiography', label: 'Grandmother biography', href: '/grandmother-biography' },
    { key: 'childhoodBook', label: 'Childhood book', href: '/childhood-book' },
  ].filter((link) => link.key !== current);

  return {
    ...base.footer,
    legalLinks: base.footer.legalLinks.map((group) =>
      group.title === 'See also'
        ? {
            ...group,
            links: [...links.map(({ label, href }) => ({ label, href })), { label: 'Impact', href: '/impact' }],
          }
        : group,
    ),
  };
}

function variantNav(base: LandingPageContent, current: LandingVariantKey): LandingPageContent['nav'] {
  const variantLinks: Record<LandingVariantKey, Array<{ label: string; href: string }>> = {
    gift: [
      { label: 'Autobiography', href: '/autobiography' },
      { label: 'For Mom', href: '/mother-biography' },
      { label: 'Pricing', href: '#new-pricing' },
    ],
    autobiography: [
      { label: 'Gift one', href: '/gift' },
      { label: 'Examples', href: '#examples' },
      { label: 'Pricing', href: '#new-pricing' },
    ],
    motherBiography: [
      { label: 'Gift page', href: '/gift' },
      { label: 'Grandmother', href: '/grandmother-biography' },
      { label: 'Pricing', href: '#new-pricing' },
    ],
    grandmotherBiography: [
      { label: 'Gift page', href: '/gift' },
      { label: 'For Mom', href: '/mother-biography' },
      { label: 'Pricing', href: '#new-pricing' },
    ],
    childhoodBook: [
      { label: 'Gift page', href: '/gift' },
      { label: 'Family stories', href: '/mother-biography' },
      { label: 'Pricing', href: '#new-pricing' },
    ],
  };

  return {
    ...base.nav,
    links: variantLinks[current],
  };
}

function mergeBase(
  base: LandingPageContent,
  current: LandingVariantKey,
  overrides: Omit<Partial<LandingPageContent>, 'locale' | 'nav' | 'footer'>,
) {
  const productTruth = withProductTruth(base);

  return normalizeCopy({
    ...base,
    ...productTruth,
    ...overrides,
    nav: variantNav(base, current),
    footer: footerWithVariantLinks(base, current),
  });
}

function card(title: string, description: string, image: GalleryCard['image'], alt: string): GalleryCard {
  return { title, description, image, alt };
}

const variants: Record<LandingVariantKey, LandingVariantFactory> = {
  gift: (base) =>
    mergeBase(base, 'gift', {
      meta: {
        title: 'Gift a Biography Book - Unique and Personal Gift Idea - Life Story AI',
        description:
          `Give a printed biography book that helps a parent or grandparent preserve their stories. Includes a printable gift card, unlimited photos, and up to ${productFacts.printedBookMaxColorPages} printed pages.`,
      },
      hero: {
        titleHtml: "Gift a biography book they will actually <span class='highlight'>keep forever</span>",
        description:
          `Offer Life Story AI as a personal gift: they answer thoughtful questions by voice or text, then receive a beautifully printed life story book with unlimited photos and up to ${productFacts.printedBookMaxColorPages} pages.`,
        cta: { label: 'Gift a biography', href: giftHref, primary: true },
        info: 'Printable gift card included immediately after purchase',
        image: 'exampleGift',
        alt: 'Life Story AI gift book and printable gift card',
      },
      roles: {
        ...base.roles,
        titleHtml: "A gift that can become a <span class='highlight'>family project</span>",
        description:
          'You can give the experience, help ask questions, invite relatives to contribute, or let the recipient write at their own pace.',
        items: [
          card('Gift giver', 'Buy the experience and print the gift card, then help the recipient get started whenever they are ready.', 'bookGiftCard', 'Life Story AI printable gift card'),
          card('Book author', 'The recipient answers Lisa by voice or text and chooses which memories should become chapters.', 'roleMainAuthor', 'Book author illustration'),
          card('Family contributors', 'Children, siblings, and grandchildren can add questions, stories, and photos from their own point of view.', 'roleCoauthor', 'Family contributor illustration'),
        ],
      },
      bookTypes: {
        title: 'Biography gifts for the people you love',
        description: 'Choose a story angle that fits the person receiving the gift.',
        items: [
          card('Parent biography', 'Capture a parent\'s childhood, career, family memories, values, and favorite stories in one printed book.', 'bookLifeStory', 'Parent biography book example'),
          card('Grandparent memories', 'Help a grandparent pass down stories, recipes, places, photos, and family history to the next generation.', 'bookFamilyHistory', 'Grandparent memory book example'),
          card('Printable gift card', 'Give the gift today, even before the book is written. The recipient activates it when they are ready.', 'bookGiftCard', 'Life Story AI gift card example'),
        ],
      },
      finalCta: {
        title: 'Give a story worth keeping',
        description: `A personal biography gift with a printed book, unlimited photos, and up to ${productFacts.printedBookMaxColorPages} pages.`,
        cta: { label: 'Buy the gift', href: giftHref, primary: true },
        info: `${productFacts.refundDays}-day money-back guarantee if the gift is not used.`,
      },
      faq: faqSubset(base, [
        'Can I gift Life Story to someone?',
        'What exactly am I buying?',
        'Can I write a biography for someone else, like my mother or grandmother?',
        'Is there a page limit for the book?',
        'Is there a limit to the number of photos?',
        'What is your return policy?',
      ]),
    }),

  autobiography: (base) =>
    mergeBase(base, 'autobiography', {
      meta: {
        title: 'Write Your Autobiography with AI - Life Story AI',
        description:
          `Write your autobiography with an AI biographer. Answer by voice or text, add unlimited photos, and receive a printed book of up to ${productFacts.printedBookMaxColorPages} pages.`,
      },
      hero: {
        titleHtml: "Write your autobiography with a <span class='highlight'>personal AI biographer</span>",
        description:
          'Turn your memories into a polished autobiography without facing a blank page. Lisa asks questions, transcribes your voice, helps organize chapters, and prepares your printed book.',
        cta: { label: 'Start my autobiography', href: registrationHref, primary: true },
        info: `Up to ${productFacts.printedBookMaxColorPages} printed pages and unlimited photos`,
        image: 'exampleAutobiography',
        alt: 'Printed autobiography created with Life Story AI',
      },
      assistantFeatures: {
        ...base.assistantFeatures,
        titleHtml: "From first memory to finished book, <span class='highlight'>Lisa keeps you moving</span>",
        description:
          'Answer at your own pace, skip questions that do not fit, and add your own chapters whenever inspiration strikes.',
        checks: ['Voice or text answers', 'Unlimited questions', 'Unlimited photos'],
      },
      bookTypes: {
        title: 'Shape your life story your way',
        description: 'Your autobiography can be chronological, thematic, reflective, or a mix of everything.',
        items: [
          card('Life Story', 'Tell the full arc of your life, from childhood and family roots to work, travels, relationships, and lessons learned.', 'bookLifeStory', 'Life story book example'),
          card('Free Narrative', 'Write essays, memories, reflections, letters, or any story that matters to you.', 'bookFreeNarrative', 'Free narrative book example'),
          card('Travel and milestones', 'Add chapters about places, turning points, photos, and moments that shaped who you became.', 'bookTravelBook', 'Travel chapter book example'),
        ],
      },
      finalCta: {
        title: 'Start writing your autobiography today',
        description: 'No writing experience required. Speak naturally, edit freely, and receive a printed book when your story is ready.',
        cta: { label: 'Start my book', href: registrationHref, primary: true },
        info: 'Includes app access, unlimited photos, and one printed copy on the Author plan.',
      },
      faq: faqSubset(base, [
        'What is Life Story AI?',
        'Can I write my own texts or stories?',
        'How long does it take to write a complete book?',
        'Is there a limit to the number of questions?',
        'Is there a page limit for the book?',
        'Can I get a digital version of my book?',
      ]),
    }),

  motherBiography: (base) =>
    mergeBase(base, 'motherBiography', {
      meta: {
        title: "Write Your Mother's Biography - Preserve Her Life Story - Life Story AI",
        description:
          `Capture your mother's memories in a printed biography book. Ask thoughtful questions, add unlimited photos, and preserve up to ${productFacts.printedBookMaxColorPages} pages of her story.`,
      },
      hero: {
        titleHtml: "Preserve your mother's story in a <span class='highlight'>beautiful biography book</span>",
        description:
          'Life Story AI helps your mother tell the memories only she knows: childhood, family, work, love, traditions, and the small details everyone wants to remember.',
        cta: { label: "Create Mom's biography", href: registrationHref, primary: true },
        info: 'Perfect as a birthday, Mother\'s Day, or family gift',
        image: 'heroFamilyBook',
        alt: 'Mother biography keepsake book',
      },
      roles: {
        ...base.roles,
        titleHtml: "Make your mother's biography <span class='highlight'>easy to tell</span>",
        description:
          'You can interview her yourself, invite siblings to contribute, or let Lisa guide her through questions at her own pace.',
        items: [
          card('Your mother', 'She can answer by voice or text, with Lisa asking gentle follow-up questions when a memory opens up.', 'roleMainAuthor', 'Mother as book author illustration'),
          card('You as interviewer', 'Sit with her, choose questions, record answers, and help turn family conversations into chapters.', 'roleInterviewer', 'Interviewer illustration'),
          card('Siblings and family', 'Invite relatives to add photos, questions, missing dates, and their own memories around her story.', 'roleCoauthor', 'Family co-author illustration'),
        ],
      },
      bookTypes: {
        title: 'A biography built around her life',
        description: 'Focus the book on the chapters your family most wants to keep.',
        items: [
          card('Childhood and family roots', 'Record where she grew up, what home felt like, and the people who shaped her.', 'bookBirthBook', 'Childhood memories book example'),
          card('Love, work, and motherhood', 'Preserve the stories behind choices, challenges, celebrations, and everyday family life.', 'bookLifeStory', 'Mother biography book example'),
          card('Family History', 'Connect her memories to photos, places, recipes, traditions, and the wider family story.', 'bookFamilyHistory', 'Family history book example'),
        ],
      },
      finalCta: {
        title: "Give your mother's memories a lasting home",
        description: `Create a printed biography with unlimited photos and up to ${productFacts.printedBookMaxColorPages} pages of stories your family can return to.`,
        cta: { label: "Start Mom's biography", href: registrationHref, primary: true },
        info: 'You can help her write, interview her, or let Lisa guide her directly.',
      },
      faq: faqSubset(base, [
        'Can I write a biography for someone else, like my mother or grandmother?',
        'Who is Lisa?',
        'How many people can participate in writing a book?',
        'How long does it take to write a complete book?',
        'Is there a page limit for the book?',
        'Is there a limit to the number of photos?',
      ]),
    }),

  grandmotherBiography: (base) =>
    mergeBase(base, 'grandmotherBiography', {
      meta: {
        title: "Write Your Grandmother's Biography - Preserve Her Memories - Life Story AI",
        description:
          `Preserve your grandmother's memories in a printed biography book with unlimited photos, thoughtful AI questions, and up to ${productFacts.printedBookMaxColorPages} printed pages.`,
      },
      hero: {
        titleHtml: "Turn your grandmother's memories into a <span class='highlight'>family treasure</span>",
        description:
          'Capture the stories behind her childhood, family traditions, old photos, favorite places, and life lessons before they fade from everyday conversation.',
        cta: { label: "Create Grandma's biography", href: registrationHref, primary: true },
        info: 'Voice answers make it simple, even for non-writers',
        image: 'exampleFamilyStory',
        alt: 'Printed grandmother biography and family story book',
      },
      roles: {
        ...base.roles,
        titleHtml: "Collect memories across <span class='highlight'>generations</span>",
        description:
          'Grandchildren can ask questions, parents can add context, and your grandmother can answer in her own words.',
        items: [
          card('Grandmother', 'She shares memories by speaking naturally, while Lisa turns answers into readable chapters.', 'roleMainAuthor', 'Grandmother as author illustration'),
          card('Grandchild interviewer', 'Ask the questions you have always wondered about and preserve the answers for the family.', 'roleInterviewer', 'Grandchild interviewer illustration'),
          card('Family contributors', 'Relatives can add photos, names, dates, recipes, places, and stories that complete the book.', 'roleCoauthor', 'Family contributor illustration'),
        ],
      },
      bookTypes: {
        title: 'Preserve the stories only she can tell',
        description: 'Build a book around memory, family history, and the details that connect generations.',
        items: [
          card('Grandmother biography', 'Tell the story of her childhood, adulthood, family, work, love, and legacy.', 'bookLifeStory', 'Grandmother biography book example'),
          card('Family History', 'Connect her memories to the people, places, photos, and traditions your family shares.', 'bookFamilyHistory', 'Family history book example'),
          card('Legacy gift', 'Create a printed keepsake that children and grandchildren can read, share, and order again.', 'bookGiftCard', 'Legacy gift book example'),
        ],
      },
      finalCta: {
        title: "Preserve Grandma's story while it can still be told",
        description: `A guided biography book with voice answers, unlimited photos, and up to ${productFacts.printedBookMaxColorPages} printed pages.`,
        cta: { label: "Start Grandma's biography", href: registrationHref, primary: true },
        info: 'Family members can help with questions, photos, and editing.',
      },
      faq: faqSubset(base, [
        'Can I write a biography for someone else, like my mother or grandmother?',
        'Who is Lisa?',
        'Can I answer more than one question per week?',
        'How many people can participate in writing a book?',
        'Is there a page limit for the book?',
        'Where do you deliver?',
      ]),
    }),

  childhoodBook: (base) =>
    mergeBase(base, 'childhoodBook', {
      meta: {
        title: 'Create a Childhood Memory Book - Life Story AI',
        description:
          `Capture your child's early years in a printed childhood book with milestones, family stories, unlimited photos, and up to ${productFacts.printedBookMaxColorPages} printed pages.`,
      },
      hero: {
        titleHtml: "Create a childhood memory book before the <span class='highlight'>little details fade</span>",
        description:
          "Record milestones, funny phrases, family rituals, first trips, school years, and everyday moments. Life Story AI helps parents turn scattered memories into a printed book.",
        cta: { label: 'Create a childhood book', href: registrationHref, primary: true },
        info: 'Unlimited photos, voice notes, and editable chapters',
        image: 'bookBirthBook',
        alt: 'Childhood memory book example',
      },
      roles: {
        ...base.roles,
        titleHtml: "Build the book <span class='highlight'>as life happens</span>",
        description:
          'Parents can add memories quickly, relatives can contribute stories, and everything stays editable until the printed book is ready.',
        items: [
          card('Parent author', 'Capture milestones, everyday memories, letters, and photos while they are still fresh.', 'roleMainAuthor', 'Parent author illustration'),
          card('Co-parent or relatives', 'Invite trusted family members to add stories, dates, and photos from their own perspective.', 'roleCoauthor', 'Family co-author illustration'),
          card('Future reader', 'Create a book your child can rediscover later, full of the voices and details of their early years.', 'bookBirthBook', 'Childhood book illustration'),
        ],
      },
      bookTypes: {
        title: 'Childhood stories worth printing',
        description: 'Use the format for baby years, childhood milestones, school memories, or a family keepsake.',
        items: [
          card('Birth and baby book', 'Record pregnancy, birth, first words, first steps, and the earliest family memories.', 'bookBirthBook', 'Birth and baby book example'),
          card('Childhood years', 'Collect birthdays, school moments, trips, funny phrases, traditions, and favorite photos.', 'bookLifeStory', 'Childhood years book example'),
          card('Family memory book', 'Add stories from parents, grandparents, siblings, and relatives around the child.', 'bookFamilyHistory', 'Family memory book example'),
        ],
      },
      finalCta: {
        title: "Start your child's memory book",
        description: `Turn milestones, photos, and family stories into a printed childhood book of up to ${productFacts.printedBookMaxColorPages} pages.`,
        cta: { label: 'Start the book', href: registrationHref, primary: true },
        info: 'Keep editing until you are ready to print.',
      },
      faq: faqSubset(base, [
        'Can I write my own texts or stories?',
        'How many people can participate in writing a book?',
        'Is there a limit to the number of questions?',
        'Is there a page limit for the book?',
        'Is there a limit to the number of photos?',
        'Can I order additional books?',
      ]),
    }),
};

export function getLandingPageVariantContent(base: LandingPageContent, variant: LandingVariantKey) {
  return variants[variant](base);
}
