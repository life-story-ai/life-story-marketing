import type { LandingPageContent } from './types';
import { footerSocials } from './site.shared';

export const enContent: LandingPageContent = {
  locale: 'en',
  meta: {
    title: 'Life Story AI – Family stories and autobiography with your AI biographer',
    description:
      "Every family has a story worth preserving. Capture a parent's memories, tell your grandparents' story, or write your own. Simply answer questions by voice or text, invite loved ones to contribute, and receive your printed book in a few weeks.",
  },
  nav: {
    links: [
      { label: 'Examples', href: '#examples' },
      { label: 'Features', href: '#feature' },
      { label: 'Pricing', href: '#new-pricing' },
    ],
    authCtas: [
      { label: 'Free trial', href: 'https://app.life-story.ai/sign_up?locale=en' },
      { label: 'Sign in', href: 'https://app.life-story.ai/sign_in' },
    ],
    buyCta: { label: 'Buy now', href: 'https://app.life-story.ai/registrations/new?locale=en', primary: true },
    currentLanguage: 'EN',
    alternateLanguage: { label: 'Français', href: '/fr' },
  },
  hero: {
    titleHtml:
      "Preserve the stories that matter in a beautiful book — <span class='highlight'>written with your loved ones</span>, guided by AI ✨",
    description:
      "Every family has a story worth preserving. Capture a parent's memories, tell your grandparents' story, or write your own. Simply answer questions by voice or text, invite loved ones to contribute, and receive your printed book in a few weeks.",
    cta: { label: 'Buy now', href: 'https://app.life-story.ai/registrations/new?locale=en', primary: true },
    info: 'Printable gift card included',
    image: 'heroFamilyBook',
    alt: 'Life Story AI keepsake book',
  },
  testimonials: {
    title: 'What our customers say about us',
    description: 'Visit our Trustpilot page to read more reviews.',
    items: [
      {
        rating: '5 / 5',
        quote:
          "I tried Life Story with my parent and it's fantastic. It's incredibly simple. I definitely recommend Lisa if you want to capture your family stories in a fun and easy way.",
        author: "Read Octave's review",
        href: 'https://trstp.lt/0BDHfaJ6n',
      },
      {
        rating: '5 / 5',
        quote:
          "Using Life Story was a delightful experience that brought our family closer through grandpa's precious memories. I highly recommend it to any family that wants to preserve its story in such a special way.",
        author: "Read Julia's review",
        href: 'https://trstp.lt/afQ_D20hB',
      },
      {
        rating: '4.5 / 5',
        quote:
          'I gave Life Story to my mother for her birthday so we could preserve a trace of our family in Italy and France, and so that my little Leo can remember his family and all those small anecdotes too. She loved the gift.',
        author: 'Laure F.',
      },
    ],
  },
  roles: {
    titleHtml: "Write the story <span class='highlight'>together</span>",
    description:
      'Invite your loved ones to take part in the book with different roles: write together, ask questions, or receive each story the moment it is shared.',
    items: [
      {
        title: 'Main author',
        description:
          'Tells the story and can invite other people to participate. This can also be the person who gifted the life story experience and adds the gift recipient as a co-author.',
        image: 'roleMainAuthor',
        alt: 'Main author illustration',
      },
      {
        title: 'Co-author(s)',
        description:
          'One or more people who help the main author write. They can add or edit stories and have the same access level as the main author.',
        image: 'roleCoauthor',
        alt: 'Co-author illustration',
      },
      {
        title: 'Interviewer(s)',
        description:
          'They can ask questions to the book author, who can then answer by creating a story. Example: "Why did you move to France after your studies?" They do not have access to the stories themselves.',
        image: 'roleInterviewer',
        alt: 'Interviewer illustration',
      },
      {
        title: 'Subscriber(s) (coming soon)',
        description:
          'One or more people who receive the stories from the book every week. They discover each new story as it is shared and follow the family story as it unfolds.',
        image: 'roleSubscriber',
        alt: 'Subscriber illustration',
      },
    ],
  },
  assistantFeatures: {
    titleHtml: "Let Lisa guide you, your <span class='highlight'>personal biographer</span>",
    description: 'Your parent only has to answer the questions asked by our artificial intelligence.',
    items: [
      {
        icon: 'clipboard',
        title: 'Just answer the questions',
        description:
          'For example: "Where did you grow up?", "How many brothers and sisters did you have?", "What was your childhood home like?", "What did your parents do?"',
      },
      {
        icon: 'profile',
        title: 'Personalized questions',
        description:
          "Lisa asks relevant questions based on your parent's previous answers. For example: \"As an only child, how did you entertain yourself?\"",
      },
      {
        icon: 'list',
        title: 'Choose the questions or add your own',
        description:
          'Your parent can always choose from several questions. They can answer some and skip others. You can also create your own questions with no limit.',
      },
      {
        icon: 'spark',
        title: 'Active listening that moves your story forward',
        description:
          'When you feel blocked or do not know what to write, Lisa listens actively and asks thoughtful follow-up questions to help you dig deeper into your memories.',
      },
      {
        icon: 'collaboration',
        title: 'Interviewer mode or full autonomy',
        description:
          'You can sit with your parent and handle the app for them, or show them once how it works and let them continue independently afterward.',
      },
    ],
    checks: ['Personalized questions', 'Fast and easy answers', 'No need to be Victor Hugo'],
    image: 'lisaBrowser',
    alt: 'Life Story AI app preview',
  },
  bookTypes: {
    title: 'Create a book as unique as your story',
    description: 'Here are examples of books you can create on your own or together with others:',
    items: [
      {
        title: 'Life Story',
        description:
          'Tell your story in a book, in your own way and at your own pace. You can organize it chronologically, by theme, or in a completely free form.',
        image: 'bookLifeStory',
        alt: 'Life story book example',
      },
      {
        title: 'Family History',
        description:
          'Tell your family story alone or together in a beautiful book. Add photos and let everyone order their own copy.',
        image: 'bookFamilyHistory',
        alt: 'Family history book example',
      },
      {
        title: 'Birth Book',
        description:
          "Capture your child's birth or early years in a beautiful book while the memories are still fresh. Add up to 40 photos.",
        image: 'bookBirthBook',
        alt: 'Birth book example',
      },
      {
        title: 'Free Narrative',
        description:
          'Tell the story of your relationship, a loved one, or preserve your personal reflections, professional journey, and anything else that matters.',
        image: 'bookFreeNarrative',
        alt: 'Free narrative book example',
      },
      {
        title: 'Travel Journal',
        description:
          'Turn a meaningful trip into a book. Invite loved ones to help write during or after the journey and add up to 40 photos.',
        image: 'bookTravelBook',
        alt: 'Travel journal book example',
      },
      {
        title: 'Gift Card',
        description:
          'Give Life Story AI to someone you love and let them decide what they want to tell. An original gift for parents, grandparents, and close family.',
        image: 'bookGiftCard',
        alt: 'Life Story AI gift card',
      },
    ],
  },
  weeklyFlow: {
    title: 'It has never been easier to tell your story in a book',
    description: 'Lisa takes care of everything',
    items: [
      {
        title: 'One question from Lisa every week by email or WhatsApp',
        description:
          'Lisa sends a new question every week by email or WhatsApp (coming soon). All you have to do is reply to the message. If you want, you can answer more questions.',
        image: 'weeklyQuestion',
        alt: 'Weekly question example',
      },
      {
        titleHtml: "No typing required, <span class='highlight'>just speak</span>",
        title: 'No typing required, just speak',
        description:
          'No need to type anything. Lisa records and transcribes everything that is said in 7 languages: French, English, Spanish, German, Portuguese, Italian, and Dutch.',
        video: 'voiceDemo',
        alt: 'Voice response demo',
      },
      {
        title: 'Literary rewriting for a polished style',
        description:
          'Lisa can rewrite everything she captured into a pleasant literary style that is enjoyable to read. No need to be Balzac.',
        image: 'rewriteExample',
        alt: 'Rewrite example',
      },
    ],
  },
  customization: {
    titleHtml: "<span class='highlight'>Customize and share your book</span>",
    description: 'Add the finishing touch before receiving the printed copy.',
    items: [
      {
        icon: 'cover',
        title: 'Customize the cover',
        description: 'Choose the title. Upload a photo or image for the cover.',
      },
      {
        icon: 'photo',
        title: 'Add photos to the chapters',
        description: 'Add up to 40 photos in color or black and white.',
      },
      {
        icon: 'edit',
        title: 'Edit, delete, or add content',
        description: 'You can edit or remove any text. You can also add your own questions or stories to the book.',
      },
      {
        icon: 'share',
        title: 'Share your book with friends and family',
        description:
          'Generate custom links so your family and friends can order their own copies directly. They receive the books at their door while you track orders from your dashboard.',
      },
    ],
    image: 'bookCoverEditor',
    alt: 'Book cover customization preview',
  },
  pricing: {
    title: 'The most beautiful legacy you will leave behind',
    description: 'Transform your memories into an unforgettable book. No writing experience required.',
    plans: [
      {
        name: 'STARTER',
        description: 'Secure your memories digitally. Print later.',
        price: '$49',
        cta: { label: 'Buy now', href: 'https://app.life-story.ai/registrations/new?product=digital&locale=en' },
      },
      {
        name: 'AUTHOR ⭐',
        description: 'Turn your memories into a beautiful printed book.',
        price: '$99',
        featured: true,
        cta: { label: 'Buy now', href: 'https://app.life-story.ai/registrations/new?product=standard&locale=en', primary: true },
      },
      {
        name: 'FAMILY',
        description: 'The ultimate family project. Invite everyone to contribute for 2 years.',
        price: '$199',
        cta: { label: 'Buy now', href: 'https://app.life-story.ai/registrations/new?product=premium&locale=en' },
      },
    ],
    rows: [
      {
        label: 'Printed book',
        tooltip: 'Up to 350 color pages',
        values: ['❌ No printed book', '<strong>✅ 1 color book included</strong>', '<strong>📚 5 color books included</strong>'],
      },
      {
        label: 'Photos',
        tooltip: 'Photos and illustrations in color',
        values: ['50 photos max.', '♾️ Unlimited photos', '♾️ Unlimited photos'],
      },
      {
        label: 'Shipping',
        tooltip: 'Shipping for the books included in the offer',
        values: ['—', '✈️ Free worldwide shipping', '✈️ Free worldwide shipping'],
      },
      {
        label: 'Participants',
        tooltip: 'The number of authors or interviewers who can access the app',
        values: ['Solo, 1 author', '👥 <strong>Duo (you + 1 guest)</strong>', '<strong>👨‍👩‍👧‍👦 Family (up to 10)</strong>'],
      },
      {
        label: 'AI biographer',
        tooltip: 'Audio transcription, personalized questions, writing help, layout support, and more',
        values: ['Included', 'Included', 'Included'],
      },
      {
        label: 'Access duration',
        values: ['6 months', '1 year', '2 years'],
      },
      {
        label: 'Additional book',
        values: ['$59 / book', '$39 / book', '<strong>$29 / book</strong> 🔥'],
      },
      {
        label: 'Digital export',
        values: ['PDF / ePub', 'PDF / ePub', 'PDF / ePub'],
      },
    ],
  },
  guarantee: {
    title: '🏆 30-day money-back guarantee',
    description:
      'If you or your parent are not satisfied, or if the gift is never used, you can request a full refund within 30 days of purchase.',
  },
  examples: {
    title: 'Sample books',
    description: 'This is what you will receive at the end.',
    items: [
      { image: 'exampleGift', alt: 'Gift book example' },
      { image: 'exampleAutobiography', alt: 'Printed autobiography example' },
      { image: 'exampleFamilyStory', alt: 'Printed family story example' },
    ],
  },
  privacy: {
    title: 'We respect your privacy',
    description: 'Your data is protected and never transferred to other individuals or companies.',
  },
  finalCta: {
    title: 'Preserve the stories that matter now',
    description: 'An original and deeply personal gift for a parent, a grandmother, or yourself.',
    cta: { label: 'Buy now from $99', href: 'https://app.life-story.ai/registrations/new?locale=en', primary: true },
    info: '1 year of app access, first printed copy included.',
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        question: 'What is Life Story AI?',
        answer:
          'Life Story AI is an app that uses artificial intelligence to help you write your autobiography or the biography of a parent.',
      },
      {
        question: 'What exactly am I buying?',
        answer:
          'The final product is a real book of up to 250 pages, printed and shipped to you. You can choose the style, customize the cover, and edit or remove chapters as you wish. On the Starter plan, you buy the digital version only.',
      },
      {
        question: 'Who is Lisa?',
        answer:
          'Lisa is the artificial intelligence that acts as your personal biographer. She transcribes your voice into text, formats your story, and can guide you with questions whenever you need inspiration.',
      },
      {
        question: 'Can I write a biography for someone else, like my mother or grandmother?',
        answer: 'Yes. In that case, you become the interviewer and use the app in the presence of your parent.',
      },
      {
        question: 'How many people can participate in writing a book?',
        answer: 'It depends on your plan: solo on Starter, duo on Author, and up to 10 participants on Family.',
      },
      {
        question: 'How long does it take to write a complete book?',
        answer:
          'In general, it takes between 10 and 20 hours of recording to write the book. That usually means roughly 3 to 6 afternoons.',
      },
      {
        question: 'Can I gift Life Story to someone?',
        answer: 'Yes. After purchase, you can print the gift card and offer it. It includes an activation code.',
      },
      {
        question: 'Can I order additional books?',
        answer: 'Yes. If you are happy with the first copy, you can order more at the price associated with your plan.',
      },
      {
        question: 'Can I write my own texts or stories?',
        answer: "Yes. Lisa's guidance and questions are optional, so you can tell the story you want to tell.",
      },
      { question: 'Is there a limit to the number of questions?', answer: 'No. You can answer as many questions as you like.' },
      { question: 'Is there a page limit for the book?', answer: 'Yes. The printed book is limited to a maximum of 250 pages.' },
      { question: 'Can I answer more than one question per week?', answer: 'Yes. You can answer as many questions per week as you want.' },
      { question: 'Is there a limit to the number of photos?', answer: 'No.' },
      { question: 'Will the photos be printed in color?', answer: 'Yes.' },
      { question: 'Do you offer customer support?', answer: 'Yes. If you run into an issue, you can contact us by email or chat.' },
      {
        question: 'What is your return policy?',
        answer:
          'If you are not satisfied with your purchase, simply submit a refund request within 30 days of purchase. You will receive a full refund. We cannot refund books that have already been printed. For gifts, only the purchaser can request the refund.',
      },
      { question: 'What is the format of the printed book?', answer: 'The printed book uses A5 format: 14.85 x 21 cm (or 5.8 x 8.3 inches).' },
      { question: 'Where do you deliver?', answer: 'We deliver worldwide.' },
      {
        question: 'Where are the books printed?',
        answer:
          'Through our printing partner network, books are printed and shipped from North America, Europe, Australia, or India depending on where you live.',
      },
      { question: 'Can I get a digital version of my book?', answer: 'Yes. You can export a PDF, ePub, or text version of your book at any time.' },
    ],
  },
  footer: {
    lines: ['© 2025 Life Story AI', "23 rue d'Essling, 92400 Courbevoie", 'hello@life-story.ai', 'Made in France'],
    socialLinks: [...footerSocials],
    currentLanguage: 'English',
    alternateLanguage: { label: 'Français', href: '/fr' },
    legalLinks: [
      {
        links: [
          { label: 'Gift card', href: 'https://app.life-story.ai/registrations/new?locale=en' },
          { label: 'Features', href: '#feature' },
          { label: 'Pricing', href: '#new-pricing' },
          { label: 'Privacy', href: '/privacy-policy' },
          { label: 'Terms of service', href: '/terms-of-service' },
        ],
      },
      {
        links: [
          { label: 'Trustpilot', href: 'https://www.trustpilot.com/review/life-story.ai' },
          { label: 'FAQ', href: '#faq' },
          { label: 'About us', href: '/team' },
          { label: 'Vision', href: '/vision' },
          { label: 'Blog', href: '/blog' },
        ],
      },
      {
        title: 'See also',
        links: [
          { label: 'Gift a biography', href: '/gift' },
          { label: 'Autobiography', href: '/autobiography' },
          { label: 'Mother biography', href: '/mother-biography' },
          { label: 'Grandmother biography', href: '/grandmother-biography' },
          { label: 'Impact', href: '/impact' },
        ],
      },
      {
        links: [
          { label: 'Storyworth vs. Life Story AI', href: '/blog/storyworth' },
          { label: 'How to Write an Autobiography', href: '/blog/how-to-write-an-autobiography?utm_source=Direct' },
        ],
      },
    ],
  },
};
