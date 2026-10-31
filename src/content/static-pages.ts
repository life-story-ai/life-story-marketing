import { normalizeCopy } from '../lib/text';
import type { Locale, StaticPageContent, TeamMemberContent } from './types';

export const staticPageKeys = ['team', 'vision', 'terms-of-service', 'privacy-policy', 'mentions-legales'] as const;

export type StaticPageKey = (typeof staticPageKeys)[number];

function paragraphs(items: string[]) {
  return items.map((item) => `<p>${item}</p>`).join('\n');
}

const visionSubtitleEn = 'Verba volant, scripta manent: spoken words fly away, written words remain';
const visionSubtitleFr = 'Verba volant, scripta manent : les paroles sâ€™envolent, les Ã©crits restent';

const visionHtmlEn = paragraphs([
  'Our era is marked by the immediacy of images, stories, and 6-second videos. For many, this is all they will leave behind for their family, friends, or the world. We believe this does not have to be the case. That&apos;s why we want to democratize what was previously reserved for kings, famous or wealthy individuals: the biography.',
  'Technological advancements related to artificial intelligence (GPT-4, OpenAI Whisper, etc.) present an opportunity for everyone to write and share the significant events of their lives with their loved ones.',
  'For this, the book is the best medium. Writing a biography allows us to slow down and reflect on ourselves. Putting the journey into words is a form of therapy for the mind, a way to live better.',
  'It&apos;s also a way to tell the story of one&apos;s relationship, family, or a loved one who has unfortunately passed away.',
  'We create a connection between generations, a family or community narrative for future generations.',
  'By making the intersection of all these daily lives legible and visible, we hope to tell the extraordinary, ordinary story of humanity.<br>With the desire that this will make it better.',
]);

const visionHtmlFr = paragraphs([
  'Notre Ã©poque est marquÃ©e par l&apos;immÃ©diatetÃ© des images, des histoires courtes et des vidÃ©os de 6 secondes.<br>Pour beaucoup, c&apos;est tout ce qu&apos;ils laisseront derriÃ¨re eux. Pour leur famille, leurs amis ou le monde. Nous croyons que cela ne doit pas Ãªtre une fatalitÃ©.',
  'C&apos;est pourquoi nous voulons dÃ©mocratiser ce qui Ã©tait auparavant rÃ©servÃ© aux rois, aux personnes cÃ©lÃ¨bres ou fortunÃ©es : la biographie.',
  'Les avancÃ©es technologiques liÃ©es Ã  l&apos;intelligence artificielle (GPT-4, OpenAI Whisper, etc.) offrent une opportunitÃ© Ã  chacun d&apos;Ã©crire et de partager les Ã©vÃ©nements marquants de sa vie avec ses proches.',
  'Pour cela, le livre est le meilleur support. Ã‰crire une biographie nous permet de ralentir et de rÃ©flÃ©chir sur nous-mÃªmes. Mettre notre voyage en mots est une forme de thÃ©rapie pour l&apos;esprit, une faÃ§on de vivre mieux.',
  'C&apos;est aussi un moyen de raconter l&apos;histoire de sa relation, de sa famille ou d&apos;un Ãªtre cher malheureusement disparu.',
  'Nous crÃ©ons un lien entre les gÃ©nÃ©rations, un rÃ©cit familial ou communautaire pour les gÃ©nÃ©rations futures.',
  'En rendant l&apos;intersection de toutes ces vies quotidiennes lisible et visible, nous espÃ©rons raconter l&apos;extraordinaire histoire ordinaire de l&apos;humanitÃ©.',
  'Avec le dÃ©sir que cela la rende meilleure',
]);

const teamMembers: Record<Locale, TeamMemberContent[]> = {
  en: [
    {
      name: 'Florian Noirbent',
      role: 'Co-founder',
      description: 'Senior Developer',
      image: 'https://umsousercontent.com/lib_yKlWiQQDIIefOSoI/x4vhbm9tbakf2i7f.jpg?w=160&h=160&fit=crop&crop=faces',
      imageAlt: 'Florian Noirbent',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/florian-noirbent/' },
        { label: 'GitHub', href: 'https://github.com/Tiitan' },
      ],
    },
    {
      name: 'ChaÃ¯b Martinez',
      role: 'Co-founder',
      description: 'Trying to make the world a better place with digital technology',
      image: 'https://umsousercontent.com/lib_yKlWiQQDIIefOSoI/s43nju9uh7v4pjaa.jpg?w=160&h=160&fit=crop&crop=faces',
      imageAlt: 'ChaÃ¯b Martinez',
      links: [
        { label: 'X', href: 'https://twitter.com/chaibax' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chaibmartinez/' },
        { label: 'GitHub', href: 'https://www.github.com/chaibax' },
      ],
    },
    {
      name: 'Lisa',
      role: 'Artificial Intelligence',
      description: 'I help people write their own story and that of their family',
      image: 'https://umsousercontent.com/lib_yKlWiQQDIIefOSoI/o3hwzoxfuu430jtx.png?w=160&h=160&fit=crop&crop=faces',
      imageAlt: 'Lisa',
      links: [{ label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100092639812075' }],
    },
    {
      name: 'NoÃ©mie Bertosio',
      role: 'UX/UI Designer',
      description: 'Passionate about art and especially design',
      image: 'https://umsousercontent.com/lib_yKlWiQQDIIefOSoI/lcqra60m15el8i0w.jpg?w=160&h=160&fit=crop&crop=faces',
      imageAlt: 'NoÃ©mie Bertosio',
      links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/noemiebertosio/' }],
    },
  ],
  fr: [
    {
      name: 'Florian Noirbent',
      role: 'Cofondateur',
      description: 'DÃ©veloppeur senior',
      image: 'https://umsousercontent.com/lib_yKlWiQQDIIefOSoI/x4vhbm9tbakf2i7f.jpg?w=160&h=160&fit=crop&crop=faces',
      imageAlt: 'Florian Noirbent',
      links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/florian-noirbent/' },
        { label: 'GitHub', href: 'https://github.com/Tiitan' },
      ],
    },
    {
      name: 'ChaÃ¯b Martinez',
      role: 'Cofondateur',
      description: 'Jâ€™essaie de rendre le monde meilleur grÃ¢ce au numÃ©rique',
      image: 'https://umsousercontent.com/lib_yKlWiQQDIIefOSoI/s43nju9uh7v4pjaa.jpg?w=160&h=160&fit=crop&crop=faces',
      imageAlt: 'ChaÃ¯b Martinez',
      links: [
        { label: 'X', href: 'https://twitter.com/chaibax' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chaibmartinez/' },
        { label: 'GitHub', href: 'https://www.github.com/chaibax' },
      ],
    },
    {
      name: 'Lisa',
      role: 'Intelligence artificielle',
      description: 'Jâ€™aide chacun Ã  Ã©crire son histoire et celle de sa famille',
      image: 'https://umsousercontent.com/lib_yKlWiQQDIIefOSoI/o3hwzoxfuu430jtx.png?w=160&h=160&fit=crop&crop=faces',
      imageAlt: 'Lisa',
      links: [{ label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100092639812075' }],
    },
    {
      name: 'NoÃ©mie Bertosio',
      role: 'Designer UX/UI',
      description: 'PassionnÃ©e par lâ€™art et le design',
      image: 'https://umsousercontent.com/lib_yKlWiQQDIIefOSoI/lcqra60m15el8i0w.jpg?w=160&h=160&fit=crop&crop=faces',
      imageAlt: 'NoÃ©mie Bertosio',
      links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/noemiebertosio/' }],
    },
  ],
};

const staticPages: Record<Locale, Record<StaticPageKey, StaticPageContent>> = {
  en: {
    team: {
      kind: 'team',
      locale: 'en',
      path: '/team',
      alternatePath: '/fr/team',
      title: 'Team',
      description: 'Meet the humans and AI behind Life Story AI.',
      seoTitle: 'Team | Life Story AI',
      seoDescription: 'Meet the team behind Life Story AI and learn about the vision driving the product.',
      heroTitle: 'Who we are.',
      heroSubtitle: 'We are a group of humans and AI with a shared goal',
      members: teamMembers.en,
      sections: [{ title: 'Vision', subtitle: visionSubtitleEn, html: visionHtmlEn }],
    },
    vision: {
      kind: 'rich',
      locale: 'en',
      path: '/vision',
      alternatePath: '/fr/vision',
      title: 'Vision',
      description: 'Our vision for preserving stories across generations.',
      seoTitle: 'Vision | Life Story AI',
      seoDescription: 'Discover the vision behind Life Story AI and why we believe every life deserves to be written and shared.',
      heroTitle: 'Vision',
      sections: [{ html: visionHtmlEn }],
    },
    'terms-of-service': {
      kind: 'rich',
      locale: 'en',
      path: '/terms-of-service',
      alternatePath: '/fr/terms-of-service',
      title: 'Terms of Service',
      description: 'Terms governing the use of Life Story AI services.',
      seoTitle: 'Terms of Service | Life Story AI',
      seoDescription: 'Read the terms of service governing the use of Life Story AI products and services.',
      heroTitle: 'Terms of Service',
      heroSubtitle: 'Last updated: October 31, 2026',
      sections: [
        {
          html: `
            <p>Thanks for using our products and services. The Services are provided by Florian Noirbent, sole proprietor (entrepreneur individuel), located at 5 bis rue des Perrais, 41100 Naveil, France.</p>
            <h3>1. Acceptance of Terms</h3>
            <p>By using the services of Life Story AI, you agree to abide by these terms. Please read them carefully.</p>
            <h3>2. Use of Our Services</h3>
            <p><strong>Adherence to Guidelines:</strong> You must follow all guidelines and policies associated with the Services.</p>
            <p><strong>Proper Use:</strong> Do not misuse our Services. You must not interfere with our Services or attempt to access them in any way other than through the interface and instructions we provide.</p>
            <h3>3. Privacy</h3>
            <p>Your privacy is paramount. Our Privacy Policy details how we handle your personal data and protect your privacy when using our Services.</p>
            <h3>4. Your Content in Our Services</h3>
            <p><strong>Ownership Rights:</strong> You retain all intellectual property rights in the content you submit through our Services.</p>
            <p><strong>License Granted to Life Story AI:</strong> By submitting content, you grant Life Story AI a limited license to use, host, and store this content in the provision of our Services.</p>
            <h3>5. Modification and Termination of Our Services</h3>
            <p>We reserve the right to modify or discontinue a Service at any time. You are free to stop using our Services at any time.</p>
            <h3>6. Warranty Disclaimer</h3>
            <p>Our Services are provided "as is." To the extent permitted by law, we exclude all warranties, express or implied.</p>
            <h3>7. Limitation of Liability</h3>
            <p>Life Story AI shall not be held liable for indirect losses resulting from the use of our Services.</p>
            <h3>8. Revision of Terms</h3>
            <p>We may revise these terms in the future. Changes will not be retroactive.</p>
            <h3>9. Jurisdiction</h3>
            <p>Any dispute related to these Terms or the Services will be governed by the laws of France.</p>
            <h3>10. Contact Us</h3>
            <p>For any questions regarding these Terms, please contact us at <a href="mailto:florian.noirbent@gmail.com">florian.noirbent@gmail.com</a>.</p>
          `,
        },
      ],
    },
    'privacy-policy': {
      kind: 'rich',
      locale: 'en',
      path: '/privacy-policy',
      alternatePath: '/fr/privacy-policy',
      title: 'Privacy Policy',
      description: 'Privacy practices for Life Story AI.',
      seoTitle: 'Privacy Policy | Life Story AI',
      seoDescription: 'Read how Life Story AI collects, uses, stores, and protects personal information.',
      heroTitle: 'Privacy Policy',
      heroSubtitle: 'Last modified: October 31, 2026',
      sections: [
        {
          html: `
            <p>The Services are provided by Florian Noirbent, sole proprietor (entrepreneur individuel), located at 5 bis rue des Perrais, 41100 Naveil, France.</p>
            <h3>1. Introduction</h3>
            <p>At Life Story AI, we respect your privacy and are committed to protecting it. This Privacy Policy outlines our practices concerning the collection, use, and sharing of your personal information. By visiting our website, you accept the practices described in this Policy.</p>
            <h3>2. Information We Collect</h3>
            <p><strong>Directly Provided Information:</strong> When you use our services, such as when you create an account or purchase our product, we may ask for personal information like your name, email address, and payment details.</p>
            <p><strong>Automatically Collected Information:</strong> We collect information about how you use our services, including the time you spend on our site, the pages you visit, and the links you click on.</p>
            <h3>3. How We Use Your Information</h3>
            <p><strong>Service Provision:</strong> We use your information to provide, maintain, and improve our services, and to process transactions and send transaction notifications.</p>
            <p><strong>Communication:</strong> We may use your information to communicate with you about our services, promotions, and updates.</p>
            <p><strong>Research &amp; Development:</strong> To improve our services and develop new features.</p>
            <h3>4. Data Retention</h3>
            <p>We retain your personal data for a period of 24 months. After this period, your data will be permanently deleted from our systems.</p>
            <h3>5. Information Sharing</h3>
            <p>We do not sell, share, or use any third-party services that may have access to your personal information except as described in this policy.</p>
            <p><strong>With Consent:</strong> We may share information with third parties when we have your explicit consent to do so.</p>
            <p><strong>For Legal Reasons:</strong> If required by law or if we believe in good faith that it is necessary to protect our rights or the rights of others.</p>
            <h3>6. Data Security</h3>
            <p>We implement security measures to protect against unauthorized access, alteration, or destruction of your personal information.</p>
            <h3>7. International Data Transfers</h3>
            <p>We do not store or transfer data internationally.</p>
            <h3>8. Access &amp; Control of Personal Data</h3>
            <p>You can access, update, or delete your personal information at any time by logging into your account.</p>
            <h3>9. Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            <h3>10. Contact Us</h3>
            <p>For any questions about this Privacy Policy, please contact us at <a href="mailto:florian.noirbent@gmail.com">florian.noirbent@gmail.com</a>.</p>
          `,
        },
      ],
    },
    'mentions-legales': {
      kind: 'rich',
      locale: 'en',
      path: '/mentions-legales',
      alternatePath: '/fr/mentions-legales',
      title: 'Legal Notice',
      description: 'Publisher and hosting information for Life Story AI.',
      seoTitle: 'Legal Notice | Life Story AI',
      seoDescription: 'Publisher, contact, and hosting information for the Life Story AI website.',
      heroTitle: 'Legal notice',
      sections: [
        {
          html: `
            <h3>Publisher and Website Identification</h3>
            <ul>
              <li>Publisher: Florian Noirbent, sole proprietor (entrepreneur individuel)</li>
              <li>SIREN: 990 168 957</li>
              <li>SIRET: 990 168 957 00019</li>
              <li>Address: 5 bis rue des Perrais, 41100 Naveil, France</li>
              <li>VAT: VAT not applicable, article 293 B of the French General Tax Code</li>
              <li>Website: <a href="/">Life Story AI</a></li>
            </ul>
            <h3>Contact</h3>
            <p>Contact person: Florian Noirbent<br>Email address: <a href="mailto:florian.noirbent@gmail.com">florian.noirbent@gmail.com</a></p>
            <h3>Hosting</h3>
            <p>Heroku<br>415 Mission Street<br>Suite 300<br>San Francisco, CA<br>94105</p>
            <h3>Other</h3>
            <p>Terms of service<br>Privacy policy</p>
          `,
        },
      ],
    },
  },
  fr: {
    team: {
      kind: 'team',
      locale: 'fr',
      path: '/fr/team',
      alternatePath: '/team',
      title: 'Lâ€™Ã©quipe',
      description: 'Rencontrez les humains et lâ€™IA derriÃ¨re Life Story AI.',
      seoTitle: 'Lâ€™Ã©quipe | Life Story AI',
      seoDescription: 'DÃ©couvrez lâ€™Ã©quipe derriÃ¨re Life Story AI et la vision qui guide le produit.',
      heroTitle: 'Lâ€™Ã©quipe',
      heroSubtitle: 'Nous travaillons Ã  vous aider Ã  raconter votre histoire',
      members: teamMembers.fr,
      sections: [{ title: 'Vision', subtitle: visionSubtitleFr, html: visionHtmlFr }],
    },
    vision: {
      kind: 'rich',
      locale: 'fr',
      path: '/fr/vision',
      alternatePath: '/vision',
      title: 'Notre vision',
      description: 'Notre vision pour prÃ©server les histoires entre les gÃ©nÃ©rations.',
      seoTitle: 'Notre vision | Life Story AI',
      seoDescription: 'DÃ©couvrez la vision de Life Story AI et pourquoi nous pensons que chaque vie mÃ©rite dâ€™Ãªtre racontÃ©e et transmise.',
      heroTitle: 'Notre vision',
      sections: [{ html: visionHtmlFr }],
    },
    'terms-of-service': {
      kind: 'rich',
      locale: 'fr',
      path: '/fr/terms-of-service',
      alternatePath: '/terms-of-service',
      title: 'Conditions dâ€™utilisation',
      description: 'Conditions qui encadrent lâ€™utilisation des services Life Story AI.',
      seoTitle: 'Conditions dâ€™utilisation | Life Story AI',
      seoDescription: 'Consultez les conditions dâ€™utilisation applicables aux produits et services Life Story AI.',
      heroTitle: 'Conditions dâ€™utilisation',
      heroSubtitle: 'DerniÃ¨re mise Ã  jour : 31 octobre 2026',
      sections: [
        {
          html: `
            <p>Merci dâ€™utiliser nos produits et services. Les Services sont fournis par Florian Noirbent, entrepreneur individuel, situÃ© au 5 bis rue des Perrais, 41100 Naveil, France.</p>
            <h3>1. Acceptation des conditions</h3>
            <p>En utilisant les services de Life Story AI, vous acceptez de respecter les prÃ©sentes conditions. Merci de les lire attentivement.</p>
            <h3>2. Utilisation de nos services</h3>
            <p><strong>Respect des rÃ¨gles :</strong> vous devez suivre lâ€™ensemble des rÃ¨gles et politiques associÃ©es aux Services.</p>
            <p><strong>Bon usage :</strong> vous ne devez pas dÃ©tourner nos Services de leur usage, ni tenter dâ€™y accÃ©der autrement que via lâ€™interface et les instructions que nous fournissons.</p>
            <h3>3. Vie privÃ©e</h3>
            <p>Votre vie privÃ©e est essentielle. Notre politique de confidentialitÃ© dÃ©taille la maniÃ¨re dont nous traitons vos donnÃ©es personnelles et protÃ©geons votre vie privÃ©e lors de lâ€™utilisation de nos Services.</p>
            <h3>4. Vos contenus dans nos services</h3>
            <p><strong>Droits de propriÃ©tÃ© :</strong> vous conservez lâ€™ensemble des droits de propriÃ©tÃ© intellectuelle sur les contenus que vous soumettez via nos Services.</p>
            <p><strong>Licence accordÃ©e Ã  Life Story AI :</strong> en soumettant du contenu, vous accordez Ã  Life Story AI une licence limitÃ©e afin dâ€™utiliser, dâ€™hÃ©berger et de stocker ce contenu dans le cadre de la fourniture des Services.</p>
            <h3>5. Modification et interruption des services</h3>
            <p>Nous nous rÃ©servons le droit de modifier ou dâ€™interrompre un Service Ã  tout moment. Vous Ãªtes libre dâ€™arrÃªter dâ€™utiliser nos Services Ã  tout moment.</p>
            <h3>6. Exclusion de garantie</h3>
            <p>Nos Services sont fournis Â« en lâ€™Ã©tat Â». Dans les limites permises par la loi, nous excluons toute garantie, expresse ou implicite.</p>
            <h3>7. Limitation de responsabilitÃ©</h3>
            <p>Life Story AI ne pourra pas Ãªtre tenu responsable des pertes indirectes rÃ©sultant de lâ€™utilisation de nos Services.</p>
            <h3>8. RÃ©vision des conditions</h3>
            <p>Nous pourrons rÃ©viser ces conditions Ã  lâ€™avenir. Les changements ne seront pas rÃ©troactifs.</p>
            <h3>9. Juridiction</h3>
            <p>Tout litige relatif Ã  ces conditions ou aux Services sera rÃ©gi par le droit franÃ§ais.</p>
            <h3>10. Contact</h3>
            <p>Pour toute question concernant ces conditions, vous pouvez nous contacter Ã  <a href="mailto:florian.noirbent@gmail.com">florian.noirbent@gmail.com</a>.</p>
          `,
        },
      ],
    },
    'privacy-policy': {
      kind: 'rich',
      locale: 'fr',
      path: '/fr/privacy-policy',
      alternatePath: '/privacy-policy',
      title: 'Politique de confidentialitÃ©',
      description: 'Pratiques de confidentialitÃ© de Life Story AI.',
      seoTitle: 'Politique de confidentialitÃ© | Life Story AI',
      seoDescription: 'Consultez la maniÃ¨re dont Life Story AI collecte, utilise, conserve et protÃ¨ge les donnÃ©es personnelles.',
      heroTitle: 'Politique de confidentialitÃ©',
      heroSubtitle: 'DerniÃ¨re modification : 31 octobre 2026',
      sections: [
        {
          html: `
            <p>Chez Life Story AI, nous respectons votre vie privÃ©e et nous nous engageons Ã  la protÃ©ger. Cette Politique de ConfidentialitÃ© dÃ©crit nos pratiques concernant la collecte, lâ€™utilisation et le partage de vos informations personnelles. En visitant notre site web, vous acceptez les pratiques dÃ©crites dans cette Politique.</p>
            <h3>1. Introduction</h3>
            <p>Les Services sont fournis par Florian Noirbent, entrepreneur individuel, situÃ© au 5 bis rue des Perrais, 41100 Naveil, France.</p>
            <h3>2. Informations que nous collectons</h3>
            <p><strong>Informations fournies directement :</strong> lorsque vous utilisez nos services, comme la crÃ©ation dâ€™un compte ou lâ€™achat de notre produit, nous pouvons vous demander des informations personnelles telles que votre nom, votre adresse e-mail et vos dÃ©tails de paiement.</p>
            <p><strong>Informations collectÃ©es automatiquement :</strong> nous collectons des informations sur la faÃ§on dont vous utilisez nos services, y compris le temps passÃ© sur notre site, les pages que vous visitez et les liens sur lesquels vous cliquez.</p>
            <h3>3. Comment nous utilisons vos informations</h3>
            <p><strong>Fourniture de service :</strong> nous utilisons vos informations pour fournir, maintenir et amÃ©liorer nos services, et pour traiter les transactions et envoyer des notifications liÃ©es Ã  ces transactions.</p>
            <p><strong>Communication :</strong> nous pouvons utiliser vos informations pour communiquer avec vous au sujet de nos services, promotions et mises Ã  jour.</p>
            <p><strong>Recherche et dÃ©veloppement :</strong> pour amÃ©liorer nos services et dÃ©velopper de nouvelles fonctionnalitÃ©s.</p>
            <h3>4. Conservation des donnÃ©es</h3>
            <p>Nous conservons vos donnÃ©es personnelles pendant une pÃ©riode de 24 mois. AprÃ¨s cette pÃ©riode, vos donnÃ©es seront dÃ©finitivement supprimÃ©es de nos systÃ¨mes.</p>
            <h3>5. Partage dâ€™informations</h3>
            <p>Nous ne vendons pas vos informations personnelles et ne les partageons quâ€™aux conditions dÃ©crites dans cette politique.</p>
            <p><strong>Avec consentement :</strong> nous pouvons partager des informations avec des tiers lorsque nous avons votre consentement explicite.</p>
            <p><strong>Pour des raisons lÃ©gales :</strong> si la loi lâ€™exige ou si nous pensons de bonne foi que cela est nÃ©cessaire pour protÃ©ger nos droits ou ceux dâ€™autrui.</p>
            <h3>6. SÃ©curitÃ© des donnÃ©es</h3>
            <p>Nous mettons en Å“uvre des mesures de sÃ©curitÃ© pour protÃ©ger vos informations personnelles contre lâ€™accÃ¨s non autorisÃ©, lâ€™altÃ©ration ou la destruction.</p>
            <h3>7. Transferts de donnÃ©es internationaux</h3>
            <p>Nous ne stockons ni ne transfÃ©rons de donnÃ©es Ã  lâ€™international.</p>
            <h3>8. AccÃ¨s et contrÃ´le des donnÃ©es personnelles</h3>
            <p>Vous pouvez accÃ©der Ã  vos informations personnelles, les mettre Ã  jour ou les supprimer Ã  tout moment en vous connectant Ã  votre compte.</p>
            <h3>9. Modifications de cette politique</h3>
            <p>Nous pouvons mettre Ã  jour cette Politique de ConfidentialitÃ© de temps Ã  autre. Nous vous informerons de tout changement en publiant la nouvelle version sur cette page.</p>
            <h3>10. Contact</h3>
            <p>Pour toute question relative Ã  cette Politique de ConfidentialitÃ©, vous pouvez nous Ã©crire Ã  <a href="mailto:florian.noirbent@gmail.com">florian.noirbent@gmail.com</a>.</p>
          `,
        },
      ],
    },
    'mentions-legales': {
      kind: 'rich',
      locale: 'fr',
      path: '/fr/mentions-legales',
      alternatePath: '/mentions-legales',
      title: 'Mentions lÃ©gales',
      description: 'Informations sur lâ€™Ã©diteur et lâ€™hÃ©bergement de Life Story AI.',
      seoTitle: 'Mentions lÃ©gales | Life Story AI',
      seoDescription: 'Informations relatives Ã  lâ€™Ã©diteur, au contact et Ã  lâ€™hÃ©bergement du site Life Story AI.',
      heroTitle: 'Mentions lÃ©gales',
      sections: [
        {
          html: `
            <h3>Identification de lâ€™Ã‰diteur et du Site Web</h3>
            <ul>
              <li>Éditeur : Florian Noirbent, entrepreneur individuel</li>
              <li>SIREN : 990 168 957</li>
              <li>SIRET : 990 168 957 00019</li>
              <li>Adresse : 5 bis rue des Perrais, 41100 Naveil, France</li>
              <li>TVA : TVA non applicable, article 293 B du CGI</li>
              <li>Site Web : <a href="/fr">Life Story AI</a></li>
            </ul>
            <h3>Contact</h3>
            <p>Personne Ã  contacter : Florian Noirbent<br>Adresse e-mail : <a href="mailto:florian.noirbent@gmail.com">florian.noirbent@gmail.com</a></p>
            <h3>HÃ©bergement</h3>
            <p>Heroku<br>415 Mission Street<br>Suite 300<br>San Francisco, CA<br>94105</p>
            <h3>Autres</h3>
            <p>Conditions dâ€™utilisation du site<br>Politique de confidentialitÃ©</p>
          `,
        },
      ],
    },
  },
};

export function getStaticPageContent(locale: Locale, page: string): StaticPageContent {
  if (!staticPageKeys.includes(page as StaticPageKey)) {
    throw new Error(`Static page content is not configured for "${page}".`);
  }

  return normalizeCopy(staticPages[locale][page as StaticPageKey]);
}
