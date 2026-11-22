export type Locale = "en" | "fr";
export type Translated = Record<Locale, string>;
export const words = (en: string, fr: string): Translated => ({ en, fr });

export const projects = [
  {
    slug: "medtresor",
    name: "MEDTresor",
    category: words(
      "Medical learning platform",
      "Plateforme de révision médicale",
    ),
    headline: words(
      "A clearer place to study medicine.",
      "Un espace plus clair pour apprendre la médecine.",
    ),
    description: words(
      "Courses, practice questions, and a human-reviewed OCR workflow. One workspace for medical students and the people creating their learning material.",
      "Cours, QCM et import OCR avec validation humaine. Un espace pour les étudiants en médecine et les équipes qui préparent leurs ressources.",
    ),
    challenge: words(
      "Study resources often live in separate PDFs, question sets, and folders. I wanted to connect finding a course, practising a QCM, and keeping track of progress without making students learn another complicated tool.",
      "Les ressources de révision sont souvent dispersées entre PDF, séries de questions et dossiers. Mon objectif : relier les cours, les QCM et le suivi de progression dans un espace simple à prendre en main.",
    ),
    approach: words(
      "I built the student experience alongside the administration tools, API, and background worker. Imported questions remain drafts until someone reviews them against the original document. Access rules and scoring are enforced by the API.",
      "J’ai développé l’espace étudiant, les outils d’administration, l’API et le worker. Les questions importées restent des brouillons jusqu’à leur vérification avec le document original. L’API contrôle les accès et le calcul des scores.",
    ),
    features: [
      words(
        "Course library organised by university, year, and module",
        "Bibliothèque organisée par université, année et module",
      ),
      words(
        "Versioned QCMs, corrections, and saved attempt history",
        "QCM versionnés, corrections et historique des tentatives",
      ),
      words(
        "PDF and image imports with side-by-side OCR review",
        "Import de PDF et d’images avec révision OCR côte à côte",
      ),
      words(
        "French and English, with light and dark themes",
        "Français et anglais, thèmes clair et sombre",
      ),
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Tesseract"],
    image: "/projects/medtresor.jpg",
    color: "#d9e5df",
    role: words(
      "Product design & full-stack development",
      "Conception produit et développement full-stack",
    ),
    link: null,
  },
  {
    slug: "madrasatuk",
    name: "Madrasatuk",
    category: words("School management SaaS", "SaaS de gestion scolaire"),
    headline: words(
      "The whole school, on the same page.",
      "Toute l’école, sur la même longueur d’onde.",
    ),
    description: words(
      "A bilingual platform for Algerian tutoring centres. Attendance, subscriptions, teacher payroll, and parent registration, with a separate workspace for every school.",
      "Une plateforme bilingue pour les centres de soutien scolaire algériens : présences, abonnements, paie des enseignants et inscriptions, avec un espace isolé pour chaque école.",
    ),
    challenge: words(
      "School administration is full of connected calculations. A missed session affects attendance, a group transfer changes a subscription, and teacher pay depends on what actually happened in class. Those relationships need to stay consistent.",
      "La gestion scolaire repose sur des calculs liés : une absence modifie les présences, un changement de groupe affecte l’abonnement, et la paie dépend des séances réellement tenues. Ces relations doivent rester cohérentes.",
    ),
    approach: words(
      "I developed a multi-tenant application with a PostgreSQL schema for each school, role-based API access, and database-level permissions. French and Arabic interfaces include RTL layouts and bilingual PDF receipts.",
      "J’ai développé une application multi-tenant avec un schéma PostgreSQL par école, des accès API par rôle et des permissions en base. Les interfaces française et arabe intègrent le RTL et des reçus PDF bilingues.",
    ),
    features: [
      words(
        "Isolated school workspaces resolved from subdomains",
        "Espaces d’école isolés, accessibles par sous-domaine",
      ),
      words(
        "Session-based subscriptions, credits, and payment history",
        "Abonnements par séances, avoirs et historique des paiements",
      ),
      words(
        "Attendance tracking and teacher payroll",
        "Suivi des présences et paie des enseignants",
      ),
      words(
        "French/Arabic interfaces and PDF documents",
        "Interfaces et documents PDF en français et en arabe",
      ),
    ],
    stack: ["React", "NestJS", "Drizzle", "PostgreSQL", "Docker"],
    image: "/projects/madrasatuk.jpg",
    color: "#dcdfea",
    role: words(
      "Full-stack development & infrastructure",
      "Développement full-stack et infrastructure",
    ),
    link: "https://madrasatuk.com",
  },
  {
    slug: "matensanich",
    name: "MATENSANICH",
    category: words("Association website & CMS", "Site associatif et CMS"),
    headline: words(
      "Technology with a human purpose.",
      "La technologie au service de l’humain.",
    ),
    description: words(
      "A French and Arabic website for an Algerian association supporting people affected by Alzheimer’s and Parkinson’s, with the tools to manage its community behind the scenes.",
      "Un site français et arabe pour une association algérienne qui accompagne les personnes touchées par Alzheimer et Parkinson, avec les outils pour gérer sa communauté.",
    ),
    challenge: words(
      "The site needs to help families find support while giving the association a practical way to handle memberships, events, volunteering, messages, and a moderated forum. Clarity matters for visitors who may be older or under stress.",
      "Le site doit aider les familles à trouver du soutien, tout en permettant à l’association de gérer adhésions, événements, bénévolat, messages et forum modéré. La clarté est essentielle pour des visiteurs parfois âgés ou stressés.",
    ),
    approach: words(
      "I connected a bilingual, statically rendered website to a Payload CMS. The public experience prioritises clear language and familiar navigation; the administration focuses on the requests and decisions the association handles every day.",
      "J’ai relié un site bilingue au rendu statique à un CMS Payload. L’espace public privilégie un langage clair et une navigation familière ; l’administration se concentre sur les demandes et décisions quotidiennes de l’association.",
    ),
    features: [
      words(
        "French and Arabic with full right-to-left layouts",
        "Français et arabe avec des mises en page RTL complètes",
      ),
      words(
        "Membership, volunteering, and event registration",
        "Adhésions, bénévolat et inscriptions aux événements",
      ),
      words("A moderated community forum", "Un forum communautaire modéré"),
      words(
        "Content and request management through Payload CMS",
        "Gestion du contenu et des demandes avec Payload CMS",
      ),
    ],
    stack: ["React", "TanStack Start", "Payload CMS", "TypeScript"],
    image: "/projects/matensanich-preview.jpg",
    color: "#e5e4d5",
    role: words("Website & CMS development", "Développement du site et du CMS"),
    link: "https://matensanichcom.app/fr",
  },
] as const;

export const archive = [
  {
    name: "Fidelio",
    category: words("Digital loyalty", "Fidélité numérique"),
    stack: "Flutter · TypeScript · PostgreSQL",
    description: words(
      "An independent product exploring one digital loyalty experience across Algerian merchants, from the mobile app to the API and deployment.",
      "Un produit indépendant qui explore une expérience de fidélité numérique commune aux commerçants algériens, de l’application mobile à l’API et au déploiement.",
    ),
    href: null,
  },
  {
    name: "Twenty Academy",
    category: words("Education ERP", "ERP scolaire"),
    stack: "React · NestJS · PostgreSQL",
    description: words(
      "School administration software covering students, classes, attendance, subscriptions, and teacher payments.",
      "Un logiciel de gestion scolaire : élèves, classes, présences, abonnements et paiements des enseignants.",
    ),
    href: "https://github.com/NOUNOU199/TwentyAcademy-ERPeducation",
  },
  {
    name: "Aglic Assurances",
    category: words("Actuarial software", "Logiciel actuariel"),
    stack: "Python · Flask · React · Pandas",
    description: words(
      "An Excel-based workflow for calculating six insurance provisions, reviewing dashboards, and exporting results.",
      "Un processus basé sur Excel pour calculer six provisions d’assurance, consulter les tableaux de bord et exporter les résultats.",
    ),
    href: "https://github.com/NOUNOU199/Aglic-assurances",
  },
  {
    name: "Agentic Codecorrect",
    category: words(
      "AI agent experiment",
      "Expérimentation avec des agents IA",
    ),
    stack: "Python · OpenAI Swarm",
    description: words(
      "An experiment with specialised agents for identifying code issues, proposing refactors, and checking the result.",
      "Une expérimentation avec des agents spécialisés pour identifier les problèmes de code, proposer des refactorisations et vérifier le résultat.",
    ),
    href: "https://github.com/NOUNOU199/Agentic-codecorrect-project",
  },
  {
    name: "LMCS Labo",
    category: words("Research archive", "Archives de recherche"),
    stack: "React · Express.js · Web scraping",
    description: words(
      "A team-built research archive with researcher profiles, publication discovery, and updates from scholarly sources.",
      "Des archives de recherche réalisées en équipe : profils de chercheurs, découverte de publications et mises à jour depuis des sources scientifiques.",
    ),
    href: "https://github.com/NOUNOU199/LMCSLABO",
  },
];

export const copy = {
  en: {
    work: "Work",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
    role: "Full-stack developer & AI explorer",
    location: "Based in Algiers, Algeria",
    intro: "I turn complicated problems into software people can actually use.",
    introBody:
      "From medical learning to school management, I work across the interface, the API, and everything in between.",
    scroll: "Explore my work",
    selected: "Selected work",
    selectionNote:
      "Recent projects, from the first idea to the working product.",
    viewProject: "Explore project",
    previous: "Previous project",
    next: "Next project",
    view: "View",
    roleLabel: "My contribution",
    builtWith: "Built with",
    archive: "More from my desk",
    archiveBody:
      "Products, team projects, and experiments that helped me get here.",
    source: "View repository",
    aboutTitle: "Curious by nature.\nHands-on by choice.",
    aboutBody:
      "I’m Nourelhak, a computer science student at ESI Algiers. I like the part of a project where you have to figure things out: what people need, how the pieces connect, and what it takes to make the whole thing work.",
    aboutSecond:
      "I build full-stack web products and explore AI agents and automation. Working with ETIC Club has also taught me how much good software depends on listening, communicating, and showing up for a team.",
    cv: "Download my résumé",
    cvNote: "PDF · English",
    focus: "What I bring to a project",
    frontend: "Interfaces that make sense",
    frontendBody:
      "Responsive web experiences, accessible interactions, and French/Arabic or English/French interfaces.",
    backend: "The system behind the screen",
    backendBody:
      "APIs, relational data, permissions, background jobs, and reproducible deployments.",
    ai: "Room to experiment",
    aiBody:
      "OCR workflows, data processing, coordinated agents, and useful ways to automate repetitive work.",
    contactTitle: "Something in mind?\nLet’s build it.",
    contactBody:
      "A freelance project, an internship, or a conversation about an interesting problem. I’d like to hear about it.",
    email: "Send me an email",
    copyEmail: "Copy email",
    copied: "Email copied",
    copyFailed: "Select the email below to copy it",
    backTop: "Back to top",
    footer: "Made with intention, in Algiers.",
    backWork: "Back to work",
    challenge: "The problem",
    approach: "What I built",
    features: "Inside the product",
    live: "Visit website",
    discuss: "Let’s talk about this project",
    nextProject: "Another project",
    screenshotNote:
      "A real screen from the project. Preview content belongs to the project itself.",
    light: "Switch to light theme",
    dark: "Switch to dark theme",
    language: "Change language to French",
    theme: "Theme",
    available: "Open to projects & internships",
  },
  fr: {
    work: "Projets",
    about: "À propos",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    skip: "Aller au contenu",
    role: "Développeur full-stack et explorateur IA",
    location: "Basé à Alger, Algérie",
    intro:
      "Je transforme des problèmes complexes en logiciels utiles au quotidien.",
    introBody:
      "De l’apprentissage médical à la gestion scolaire, je travaille sur l’interface, l’API et tout ce qui les relie.",
    scroll: "Découvrir mes projets",
    selected: "Quelques projets",
    selectionNote:
      "Des projets récents, de la première idée au produit fonctionnel.",
    viewProject: "Découvrir le projet",
    previous: "Projet précédent",
    next: "Projet suivant",
    view: "Voir",
    roleLabel: "Ma contribution",
    builtWith: "Technologies",
    archive: "Aussi sur mon bureau",
    archiveBody:
      "Produits, projets en équipe et expérimentations qui ont jalonné mon parcours.",
    source: "Voir le dépôt",
    aboutTitle: "Curieux par nature.\nConcret par choix.",
    aboutBody:
      "Moi, c’est Nourelhak, étudiant en informatique à l’ESI d’Alger. J’aime le moment où il faut comprendre : les besoins, les liens entre les composants et ce qui permettra à l’ensemble de fonctionner.",
    aboutSecond:
      "Je développe des produits web full-stack et j’explore les agents IA et l’automatisation. Mon expérience à ETIC Club m’a aussi appris à quel point un bon projet dépend de l’écoute, de la communication et du travail en équipe.",
    cv: "Télécharger mon CV",
    cvNote: "PDF · Anglais",
    focus: "Ce que j’apporte à un projet",
    frontend: "Des interfaces compréhensibles",
    frontendBody:
      "Des expériences web responsives, des interactions accessibles et des interfaces français/arabe ou anglais/français.",
    backend: "Le système derrière l’écran",
    backendBody:
      "API, données relationnelles, permissions, tâches de fond et déploiements reproductibles.",
    ai: "De la place pour explorer",
    aiBody:
      "OCR, traitement des données, agents coordonnés et automatisation des tâches répétitives.",
    contactTitle: "Une idée en tête ?\nConstruisons-la.",
    contactBody:
      "Un projet freelance, un stage ou une discussion autour d’un problème intéressant. Parlons-en.",
    email: "M’envoyer un email",
    copyEmail: "Copier l’email",
    copied: "Email copié",
    copyFailed: "Sélectionnez l’email ci-dessous pour le copier",
    backTop: "Retour en haut",
    footer: "Fait avec attention, à Alger.",
    backWork: "Retour aux projets",
    challenge: "Le problème",
    approach: "Ce que j’ai développé",
    features: "Dans le produit",
    live: "Visiter le site",
    discuss: "Parlons de ce projet",
    nextProject: "Un autre projet",
    screenshotNote:
      "Un véritable écran du projet. Le contenu de l’aperçu appartient au projet présenté.",
    light: "Passer au thème clair",
    dark: "Passer au thème sombre",
    language: "Passer à la langue anglaise",
    theme: "Thème",
    available: "Ouvert aux projets et aux stages",
  },
};
