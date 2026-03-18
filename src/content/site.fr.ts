import type { LandingPageContent } from './types';
import { footerSocials } from './site.shared';

const frFaq = [
  {
    question: "Qu'est-ce que Life Story AI ?",
    answer:
      "Life Story AI est une application qui utilise l'intelligence artificielle pour vous aider à écrire votre autobiographie ou la biographie d'un parent.",
  },
  {
    question: "Qu'est-ce que j'achète au final ?",
    answer:
      "Le produit final est un vrai livre pouvant contenir jusqu'à 250 pages, imprimé et envoyé par courrier. Vous pouvez choisir le style de votre biographie, personnaliser la couverture et éditer ou supprimer des chapitres à votre guise. Sur l'offre Découverte, vous achetez uniquement la version numérique.",
  },
  {
    question: 'Qui est Lisa ?',
    answer:
      "Lisa est l'intelligence artificielle qui joue le rôle de biographe personnel. Elle transcrit votre voix en texte, formate votre histoire et peut vous guider avec des questions si vous manquez d'inspiration.",
  },
  {
    question: "Puis-je écrire une biographie pour quelqu'un d'autre, comme ma mère ou ma grand-mère ?",
    answer: "Oui, vous devenez alors l'interviewer. Vous utilisez notre app en présence de votre parent.",
  },
  {
    question: "Combien de personnes peuvent participer à la rédaction d'un livre ?",
    answer: "Cela dépend de votre offre : solo sur l'offre Découverte, duo sur l'offre Auteur, jusqu'à 10 participants sur l'offre Famille.",
  },
  {
    question: 'Combien de temps faut-il pour écrire un livre complet ?',
    answer:
      "Généralement, il faut entre 10 et 20 heures d'enregistrement pour écrire le livre. Cela représente entre 3 et 6 après-midis par exemple.",
  },
  {
    question: "Puis-je offrir Life Story à quelqu'un ?",
    answer:
      "Oui. Après l'achat, vous pouvez imprimer la carte cadeau et l'offrir. Elle contient un code d'activation.",
  },
  {
    question: 'Puis-je commander des livres supplémentaires ?',
    answer:
      "Oui. Si vous êtes satisfait de la première copie, vous pouvez en commander d'autres au tarif correspondant à votre offre.",
  },
  {
    question: 'Puis-je écrire mes propres textes ou histoires ?',
    answer: "Oui, les conseils et questions de Lisa sont optionnels ; vous pouvez raconter l'histoire de votre choix.",
  },
  {
    question: 'Y a-t-il une limite de questions ?',
    answer: 'Non, vous pouvez répondre à autant de questions que vous le souhaitez.',
  },
  {
    question: 'Y a-t-il une limite de pages pour le livre ?',
    answer: 'Oui, le livre est limité à un maximum de 250 pages.',
  },
  {
    question: "Puis-je répondre à plus d'une question par semaine ?",
    answer: 'Oui, vous pouvez répondre à autant de questions par semaine que vous le souhaitez.',
  },
  {
    question: 'Y a-t-il une limite sur le nombre de photos ?',
    answer: 'Non.',
  },
  {
    question: 'Les photos seront-elles imprimées en couleur ?',
    answer: 'Oui.',
  },
  {
    question: 'Avez-vous un support client ?',
    answer: 'Oui, si vous avez un problème, vous pouvez nous contacter par e-mail ou chat.',
  },
  {
    question: 'Quelle est votre politique de retour ?',
    answer:
      "Si vous n'êtes pas satisfait de votre achat, remplissez simplement un formulaire de demande de remboursement dans les 30 jours après l'achat. Vous serez alors intégralement remboursé. Nous ne pouvons pas vous rembourser si le livre a déjà été imprimé. En cas de cadeau, seul l'acheteur peut faire la demande et être remboursé.",
  },
  {
    question: 'Quel est le format du livre imprimé ?',
    answer: 'Le livre est au format A5 : 14,85 x 21 cm (ou 5.8 x 8.3 inches).',
  },
  {
    question: 'Où livrez-vous ?',
    answer: 'Nous livrons partout dans le monde.',
  },
  {
    question: 'Où sont imprimés les livres ?',
    answer:
      "Grâce à notre partenaire disposant d'un réseau d'imprimeurs, les livres sont imprimés et envoyés depuis l'Amérique du Nord, l'Europe, l'Australie ou l'Inde, selon l'endroit où vous habitez.",
  },
  {
    question: 'Puis-je obtenir une version numérique de mon livre ?',
    answer: 'Oui, vous pouvez exporter une version PDF, ePub et texte de votre livre à tout moment.',
  },
] as const;

export const frContent: LandingPageContent = {
  locale: 'fr',
  meta: {
    title: 'Life Story AI – Histoires de famille et autobiographie avec votre biographe IA',
    description:
      "Chaque famille a une histoire qui mérite d'être préservée. Capturez les souvenirs d'un parent, racontez l'histoire des grands-parents, ou écrivez la vôtre. Répondez simplement à des questions par voix ou par texte, invitez vos proches à participer, et recevez votre livre imprimé en quelques semaines.",
  },
  nav: {
    links: [
      { label: 'Exemples', href: '#examples' },
      { label: 'Fonctionnalités', href: '#feature' },
      { label: 'Prix', href: '#new-pricing' },
    ],
    authCtas: [
      { label: 'Essai gratuit', href: 'https://app.life-story.ai/sign_up?locale=fr' },
      { label: 'Connexion', href: 'https://app.life-story.ai/sign_in?locale=fr' },
    ],
    buyCta: { label: 'Acheter', href: 'https://app.life-story.ai/registrations/new?locale=fr', primary: true },
    currentLanguage: 'FR',
    alternateLanguage: { label: 'English', href: '/' },
  },
  hero: {
    titleHtml:
      "Préservez les histoires qui comptent dans un beau livre — <span class='highlight'>écrit avec vos proches</span>, guidé par l'IA ✨",
    description:
      "Chaque famille a une histoire qui mérite d'être préservée. Capturez les souvenirs d'un parent, racontez l'histoire des grands-parents, ou écrivez la vôtre. Répondez simplement à des questions par voix ou par texte, invitez vos proches à participer, et recevez votre livre imprimé en quelques semaines.",
    cta: { label: 'Acheter', href: 'https://app.life-story.ai/registrations/new?locale=fr', primary: true },
    info: 'Carte cadeau imprimable incluse',
    image: 'heroFamilyBook',
    alt: 'Livre de souvenirs Life Story AI',
  },
  testimonials: {
    title: 'Ce que nos clients disent de nous',
    description: "Visitez notre page Trustpilot pour trouver d'autres avis.",
    items: [
      {
        rating: '5 / 5',
        quote:
          "J'ai essayé Life Story avec mon parent et c'est génial. C'est super simple. Je recommande définitivement Lisa si vous voulez capturer vos histoires de famille d'une manière amusante et facile.",
        author: "Lire le commentaire d'Octave",
        href: 'https://trstp.lt/0BDHfaJ6n',
      },
      {
        rating: '5 / 5',
        quote:
          "Utiliser Life Story a été une expérience délicieuse, qui a permis de rapprocher notre famille grâce aux précieux souvenirs de grand-père. Je le recommande vivement à toute famille désireuse de préserver son histoire d'une manière aussi spéciale.",
        author: 'Lire le commentaire de Julia',
        href: 'https://trstp.lt/afQ_D20hB',
      },
      {
        rating: '4.5 / 5',
        quote:
          "J'ai offert Life Story à ma maman pour son anniversaire, pour laisser une trace de notre famille en Italie et en France et pour que mon petit Léo puisse lui aussi se souvenir de sa famille et surtout des petites anecdotes. Elle a adoré ce cadeau.",
        author: 'Laure F.',
      },
    ],
  },
  roles: {
    titleHtml: "Écrivez l'histoire <span class='highlight'>ensemble</span>",
    description:
      'Invitez vos proches à participer au livre, avec différents rôles : écrire ensemble, poser des questions, ou recevoir chaque histoire au moment où elle est partagée.',
    items: [
      {
        title: 'Auteur principal',
        description:
          "Raconte l'histoire et peut inviter d'autres personnes à participer. Il peut également s'agir de la personne qui a offert l'Histoire de vie en cadeau et qui ajoute le ou les destinataires du cadeau en tant que co-auteurs.",
        image: 'roleMainAuthor',
        alt: 'Illustration auteur principal',
      },
      {
        title: 'Co-auteur(s)',
        description:
          "Une ou plusieurs personnes qui aident l'auteur principal à écrire. Peuvent ajouter ou modifier une histoire. Ont le même niveau d'accès que l'auteur principal.",
        image: 'roleCoauthor',
        alt: 'Illustration co-auteurs',
      },
      {
        title: 'Intervieweur(s)',
        description:
          "Peuvent poser des questions à l'auteur du livre, qui peut ensuite y répondre en créant une histoire. Exemple : « Pourquoi avez-vous déménagé en France après vos études ? » Ils n'ont pas accès aux histoires.",
        image: 'roleInterviewer',
        alt: 'Illustration intervieweurs',
      },
      {
        title: 'Abonné(s) (bientôt)',
        description:
          "Une ou plusieurs personnes qui reçoivent chaque semaine les histoires du livre. Elles découvrent chaque nouvelle histoire au moment où elle est partagée et vivent le récit familial au fil de sa création.",
        image: 'roleSubscriber',
        alt: 'Illustration abonnés',
      },
    ],
  },
  assistantFeatures: {
    titleHtml: "Laissez-vous guider par Lisa, votre <span class='highlight'>biographe personnelle</span>",
    description: "Votre parent n'a qu'à répondre aux questions de notre intelligence artificielle.",
    items: [
      {
        icon: 'clipboard',
        title: 'Il suffit de répondre aux questions',
        description:
          "Par exemple : « Où avez-vous grandi ? », « Combien de frères et sœurs avez-vous ? », « Comment était votre maison d'enfance ? », « Quel était le métier de vos parents ? »",
      },
      {
        icon: 'profile',
        title: 'Des questions personnalisées',
        description:
          "Lisa pose des questions pertinentes liées aux précédentes réponses de votre parent. Par exemple : « En tant qu'enfant unique, comment vous amusiez-vous ? »",
      },
      {
        icon: 'list',
        title: "Possibilité de choisir les questions ou d'en ajouter vous-même",
        description:
          "Votre parent a toujours le choix entre plusieurs questions. Il peut répondre à certaines et pas à d'autres. Vous pouvez créer vos propres questions, sans limites.",
      },
      {
        icon: 'spark',
        title: "L'écoute active qui fait avancer votre récit",
        description:
          'Quand vous êtes bloqué ou ne savez plus quoi écrire, Lisa vous écoute activement et pose des questions de relance réfléchies pour vous aider à creuser plus profondément dans vos souvenirs.',
      },
      {
        icon: 'collaboration',
        title: 'Mode Intervieweur ou en autonomie',
        description:
          "Vous êtes avec votre parent et manipulez l'application à sa place. Ou bien vous lui montrez une fois comment faire et il utilise l'app de façon autonome ensuite.",
      },
    ],
    checks: ['Questions personnalisées', 'Réponses faciles et rapides', "Pas besoin d'être Victor Hugo"],
    image: 'lisaBrowser',
    alt: "Capture de l'application Life Story AI",
  },
  bookTypes: {
    title: 'Créez un livre unique, comme votre histoire',
    description: 'Voici des exemples de livres que vous pouvez créer, seul ou à plusieurs :',
    items: [
      {
        title: 'Histoire de Vie',
        description:
          'Racontez votre histoire dans un livre, à votre façon et à votre rythme. Par ordre chronologique, thématique ou de façon complètement libre.',
        image: 'bookLifeStory',
        alt: 'Exemple de livre histoire de vie',
      },
      {
        title: 'Histoire Familiale',
        description:
          "Racontez seul ou à plusieurs l'histoire de la famille dans un beau livre. Ajoutez des photos et chacun peut commander son exemplaire.",
        image: 'bookFamilyHistory',
        alt: 'Exemple de livre histoire familiale',
      },
      {
        title: 'Livre de Naissance',
        description:
          "Racontez dans un beau livre la naissance ou les premières années de votre enfant, pendant que vos souvenirs sont encore frais. Ajoutez jusqu'à 40 photos.",
        image: 'bookBirthBook',
        alt: 'Exemple de livre de naissance',
      },
      {
        title: 'Récit Libre',
        description:
          "Racontez l'histoire de votre couple, d'un proche, ou laissez une trace de vos réflexions personnelles, de votre parcours professionnel, etc.",
        image: 'bookFreeNarrative',
        alt: 'Exemple de récit libre',
      },
      {
        title: 'Carnet de Voyage',
        description:
          "Racontez dans un livre un voyage marquant. Invitez des proches à participer à l'écriture pendant ou après le voyage. Ajoutez jusqu'à 40 photos.",
        image: 'bookTravelBook',
        alt: 'Exemple de carnet de voyage',
      },
      {
        title: 'Carte Cadeau',
        description:
          "Offrez Life Story AI à un proche et laissez-le décider de ce qu'il souhaite raconter. Un cadeau original pour vos parents, grands-parents et proches.",
        image: 'bookGiftCard',
        alt: 'Carte cadeau Life Story AI',
      },
    ],
  },
  weeklyFlow: {
    title: "Il n'a jamais été aussi simple de raconter votre histoire dans un livre",
    description: "Lisa s'occupe de tout",
    items: [
      {
        title: 'Une question de Lisa chaque semaine par e-mail ou WhatsApp',
        description:
          "Lisa envoie chaque semaine une nouvelle question par e-mail ou WhatsApp (bientôt). Tout ce que vous avez à faire, c'est répondre au message. Si vous le souhaitez, vous pouvez répondre à plus de questions.",
        image: 'weeklyQuestion',
        alt: 'Exemple de question hebdomadaire',
      },
      {
        titleHtml: "Pas de texte à taper, <span class='highlight'>il suffit de parler</span>",
        title: 'Pas de texte à taper, il suffit de parler',
        description:
          'Pas la peine de taper quoi que ce soit : Lisa enregistre et transcrit tout ce qui est dit en 7 langues : français, anglais, espagnol, allemand, portugais, italien et néerlandais.',
        video: 'voiceDemo',
        alt: 'Démonstration de réponse vocale',
      },
      {
        title: 'Réécriture pour un style littéraire',
        description:
          "Lisa vous propose de remettre en forme dans un style agréable à lire tout ce qu'elle a noté. Pas besoin d'être Balzac.",
        image: 'rewriteExample',
        alt: 'Exemple de réécriture littéraire',
      },
    ],
  },
  customization: {
    titleHtml: "<span class='highlight'>Personnalisez et partagez votre livre</span>",
    description: "Ajoutez la touche finale avant de recevoir l'exemplaire papier.",
    items: [
      {
        icon: 'cover',
        title: 'Personnalisez la couverture',
        description: 'Choisissez le titre. Importez une photo ou une image pour la couverture.',
      },
      {
        icon: 'photo',
        title: 'Ajoutez des photos dans les chapitres',
        description: "Ajoutez jusqu'à 40 photos en couleur ou en noir et blanc.",
      },
      {
        icon: 'edit',
        title: 'Éditez, supprimez ou ajoutez du contenu',
        description:
          'Vous pouvez modifier ou supprimer tous les textes. Vous pouvez également ajouter vos propres questions ou histoires dans le livre.',
      },
      {
        icon: 'share',
        title: 'Partagez votre livre avec vos amis et votre famille',
        description:
          'Générez des liens personnalisés pour que votre famille et vos amis puissent commander directement leurs propres exemplaires. Ils reçoivent les livres à leur porte pendant que vous suivez les commandes depuis votre tableau de bord.',
      },
    ],
    image: 'bookCoverEditor',
    alt: 'Aperçu de personnalisation de couverture',
  },
  pricing: {
    title: 'Le plus bel héritage que vous laisserez à vos proches',
    description: 'Transformez vos souvenirs en un livre inoubliable. Aucune compétence rédactionnelle requise.',
    plans: [
      {
        name: 'DÉCOUVERTE',
        description: 'Sécurisez vos mémoires en numérique. Imprimez plus tard.',
        price: '49 €',
        cta: { label: 'Acheter', href: 'https://app.life-story.ai/registrations/new?product=digital&locale=fr' },
      },
      {
        name: 'AUTEUR ⭐',
        description: 'Transformez vos souvenirs en un magnifique livre.',
        price: '99 €',
        featured: true,
        cta: {
          label: 'Acheter',
          href: 'https://app.life-story.ai/registrations/new?product=standard&locale=fr',
          primary: true,
        },
      },
      {
        name: 'FAMILLE',
        description: 'Le projet familial ultime. Invitez tout le monde à participer pendant 2 ans.',
        price: '199 €',
        cta: { label: 'Acheter', href: 'https://app.life-story.ai/registrations/new?product=premium&locale=fr' },
      },
    ],
    rows: [
      {
        label: 'Livre imprimé',
        tooltip: "Jusqu'à 350 pages en couleur",
        values: ['❌ Pas de livre imprimé', '<strong>✅ 1 livre couleur inclus</strong>', '<strong>📚 5 livres couleur inclus</strong>'],
      },
      {
        label: 'Photos',
        tooltip: 'Photos et images en couleurs',
        values: ['50 photos max.', '♾️ Photos illimitées', '♾️ Photos illimitées'],
      },
      {
        label: 'Livraison',
        tooltip: "Tarif de livraison pour les livres inclus dans l'offre",
        values: ['—', '✈️ Livraison monde offerte', '✈️ Livraison monde offerte'],
      },
      {
        label: 'Participants',
        tooltip: "Le nombre d'auteurs ou d'interviewers qui auront accès à l'application",
        values: ['Solo 1 auteur', '👥 <strong>Duo (vous + 1 invité)</strong>', "👨‍👩‍👧‍👦 <strong>Famille (jusqu'à 10)</strong>"],
      },
      {
        label: 'Biographe IA',
        tooltip: "Transcription audio, questions personnalisées, aide à l'écriture et mise en page, et bien plus encore",
        values: ['Inclus', 'Inclus', 'Inclus'],
      },
      {
        label: "Durée d'accès",
        values: ['6 mois', '1 an', '2 ans'],
      },
      {
        label: 'Livre supplémentaire',
        values: ['59 € / livre', '39 € / livre', '<strong>29 € / livre</strong> 🔥'],
      },
      {
        label: 'Export numérique',
        values: ['PDF / ePub', 'PDF / ePub', 'PDF / ePub'],
      },
    ],
  },
  guarantee: {
    title: '🏆 Garantie satisfait ou remboursé de 30 jours',
    description:
      "Si vous ou votre parent n'êtes pas satisfait, ou si le cadeau n'est finalement pas utilisé, vous êtes remboursé sans condition jusqu'à 30 jours après l'achat.",
  },
  examples: {
    title: 'Exemples de livres',
    description: "C'est ce que vous recevrez à la fin.",
    items: [
      { image: 'exampleGift', alt: 'Exemple de livre cadeau' },
      { image: 'exampleAutobiography', alt: "Exemple d'autobiographie imprimée" },
      { image: 'exampleFamilyStory', alt: "Exemple d'histoire familiale imprimée" },
    ],
  },
  privacy: {
    title: 'Nous respectons votre vie privée',
    description: "Vos données sont protégées et ne sont pas transférées à d'autres individus ou entreprises.",
  },
  finalCta: {
    title: 'Préservez maintenant les histoires qui comptent',
    description: 'Une idée de cadeau originale et personnalisée pour un parent, une grand-mère… ou vous-même.',
    cta: { label: 'Acheter à partir de 99 €', href: 'https://app.life-story.ai/registrations/new?locale=fr', primary: true },
    info: "Accès à l'app pendant 1 an, première impression incluse.",
  },
  faq: {
    title: 'FAQ',
    items: [...frFaq],
  },
  footer: {
    lines: ['© 2025 Life Story AI', "23 rue d'Essling, 92400 Courbevoie", 'hello@life-story.ai', 'Tel : +33 1 89 31 80 33', 'Fabriqué en France'],
    socialLinks: [...footerSocials],
    currentLanguage: 'Français',
    alternateLanguage: { label: 'English', href: '/' },
    legalLinks: [
      {
        links: [
          { label: 'Carte cadeau', href: 'https://app.life-story.ai/registrations/new?locale=fr' },
          { label: 'Fonctionnalités', href: '#feature' },
          { label: 'Prix', href: '#new-pricing' },
          { label: 'Politique de confidentialité', href: 'https://life-story.ai/fr/politique-de-confidentialite' },
          { label: "Conditions d'utilisation", href: 'https://life-story.ai/fr/conditions-utilisation' },
        ],
      },
      {
        links: [
          { label: 'Trustpilot', href: 'https://fr.trustpilot.com/review/life-story.ai' },
          { label: 'Mentions légales', href: 'https://life-story.ai/fr/mentions-legales' },
          { label: 'FAQ', href: '#faq' },
          { label: 'À propos de nous', href: 'https://life-story.ai/fr/team' },
          { label: 'Vision', href: 'https://life-story.ai/fr/vision' },
          { label: 'Blog', href: 'https://life-story.ai/blog' },
        ],
      },
      {
        title: 'Voir aussi',
        links: [
          { label: 'Offrir une biographie', href: 'https://life-story.ai/fr-cadeau-biographie' },
          { label: 'Mon autobiographie', href: 'https://life-story.ai/autobiographie' },
          { label: 'Biographie mère', href: 'https://life-story.ai/fr-biographie-mere' },
          { label: 'Histoires de famille', href: 'https://life-story.ai/' },
          { label: 'Impact', href: 'https://life-story.ai/impact' },
        ],
      },
      {
        links: [
          { label: 'Storyworth vs. Life Story AI', href: 'https://life-story.ai/blog/storyworth' },
          { label: 'How to Write an Autobiography', href: 'https://life-story.ai/blog/how-to-write-an-autobiography' },
        ],
      },
    ],
  },
};
