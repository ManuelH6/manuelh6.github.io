function app() {
    return {
        currentLang: localStorage.getItem('lang') || 'fr',
        darkMode: localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : true,
        mobileMenuOpen: false,
        showNav: false,
        showBackToTop: false,
        scrollProgress: 0,
        activeSection: 'focus',
        activeFilter: 'all',
        localTime: '',
        clockInterval: null,

        lightbox: {
            show: false,
            images: [],
            currentIndex: 0,
            get currentImage() {
                return this.images[this.currentIndex] || '';
            }
        },

        projects: [
            {
                id: "fieldoz",
                type: "Web",
                category: "web systemes",
                tech: ["Laravel", "Livewire", "Tailwind CSS", "Alpine.js", "MySQL"],
                fr: {
                    title: "FieldOz",
                    badge: "SAAS · IMPACT TERRAIN",
                    categoryLabel: "SUIVI & RAPPORTS D'IMPACT",
                    subtitle: "Projet personnel · 2025",
                    description: "Plateforme conçue pour transformer les données collectées sur le terrain en bilans visuels et rapports d'impact clairs, directement exploitables par les équipes de suivi et les bailleurs de fonds."
                },
                en: {
                    title: "FieldOz",
                    badge: "SAAS · FIELD IMPACT",
                    categoryLabel: "IMPACT TRACKING & REPORTING",
                    subtitle: "Personal project · 2025",
                    description: "Platform built to turn complex field data into clear visual stories and impact reports, immediately actionable for monitoring teams and international donors."
                },
                images: [
                    "assets/projects/fieldoz/1.png",
                    "assets/projects/fieldoz/2.png",
                    "assets/projects/fieldoz/3.png",
                    "assets/projects/fieldoz/4.png",
                    "assets/projects/fieldoz/5.png",
                    "assets/projects/fieldoz/6.png"
                ],
                links: {
                    github: null,
                    gitlab: "https://gitlab.com/learnperso/fieldoz/",
                    demo: null
                }
            },
            {
                id: "business-checkup",
                type: "Web / IA",
                category: "web systemes",
                tech: ["Laravel", "Livewire", "IA / LLM", "Alpine.js", "Chart.js", "PostgreSQL"],
                fr: {
                    title: "Business Checkup",
                    badge: "FINTECH · CONSEIL",
                    categoryLabel: "DIAGNOSTIC FINANCIER & IA",
                    subtitle: "FUND.lab · Architecte Logiciel",
                    description: "Outil de diagnostic d'entreprise combinant arbres de décision, calculs financiers automatisés et génération de rapports d'orientation assistés par IA pour les dirigeants et consultants."
                },
                en: {
                    title: "Business Checkup",
                    badge: "FINTECH · ADVISORY",
                    categoryLabel: "FINANCIAL DIAGNOSTIC & AI",
                    subtitle: "FUND.lab · Software Architect",
                    description: "Company diagnostic platform combining decision trees, automated financial ratios, and AI-assisted strategic report generation for executives and consultants."
                },
                images: [
                    "assets/projects/business_checkup/accueil_business_checkup.png",
                    "assets/projects/business_checkup/dashboard.png",
                    "assets/projects/business_checkup/form_diagnostic_1.png",
                    "assets/projects/business_checkup/form_diagnostic_2.png",
                    "assets/projects/business_checkup/details_diagnostic.png",
                    "assets/projects/business_checkup/rapport_stats.png",
                    "assets/projects/business_checkup/rapport_page_garde.png",
                    "assets/projects/business_checkup/page_historique_diagnostics.png",
                    "assets/projects/business_checkup/page_rendez-vous.png",
                    "assets/projects/business_checkup/consentement.png",
                    "assets/projects/business_checkup/page_contact.png"
                ],
                links: {
                    github: null,
                    gitlab: null,
                    demo: null
                }
            },
            {
                id: "akonta",
                type: "Web / PWA",
                category: "web systemes",
                tech: ["PWA", "IndexedDB", "Dexie.js", "JavaScript", "Tailwind CSS", "QR Codes"],
                fr: {
                    title: "Akonta",
                    badge: "COMMERCE · HORS-LIGNE",
                    categoryLabel: "GESTION DE BOUTIQUE & STOCKS",
                    subtitle: "Co-fondateur & Développeur",
                    description: "Application web installable (PWA) fonctionnant sans connexion internet pour les commerçants : tenue des stocks en local (IndexedDB), synchronisation automatique, scan QR, suivi des ventes et impression d'étiquettes."
                },
                en: {
                    title: "Akonta",
                    badge: "RETAIL · OFFLINE-FIRST",
                    categoryLabel: "INVENTORY & POINT OF SALE",
                    subtitle: "Co-founder & Developer",
                    description: "Offline-first Progressive Web App for local merchants: local IndexedDB storage (Dexie.js), automatic background sync, QR code scanning, daily sales tracking, and label printing."
                },
                images: [
                    "assets/projects/akonta/dashboard.png",
                    "assets/projects/akonta/landing_page_complete.png",
                    "assets/projects/akonta/rapports.png"
                ],
                links: {
                    github: null,
                    gitlab: null,
                    demo: null
                }
            },
            {
                id: "le-transporteur",
                type: "Mobile",
                category: "mobile",
                tech: ["Flutter", "Dart", "Monorepo", "Google Maps API", "Hive DB", "REST API"],
                fr: {
                    title: "Le Transporteur",
                    badge: "LOGISTIQUE · FLOTTE",
                    categoryLabel: "SUITE MOBILE DE LIVRAISON",
                    subtitle: "Développeur Mobile · 2026",
                    description: "Suite mobile complète réunissant clients, livreurs et superviseurs de flotte avec suivi GPS en direct, calcul d'itinéraires adapté au terrain et gestion des courses en temps réel."
                },
                en: {
                    title: "Le Transporteur",
                    badge: "LOGISTICS · FLEET",
                    categoryLabel: "DELIVERY MOBILE SUITE",
                    subtitle: "Mobile Developer · 2026",
                    description: "End-to-end delivery mobile suite connecting clients, couriers, and fleet supervisors with live GPS tracking, route optimization, and real-time dispatch management."
                },
                images: [
                    "assets/projects/le_transporteur/client_1.jpg",
                    "assets/projects/le_transporteur/client_2.jpg",
                    "assets/projects/le_transporteur/client_3.jpg",
                    "assets/projects/le_transporteur/client_4.jpg",
                    "assets/projects/le_transporteur/client_5.jpg",
                    "assets/projects/le_transporteur/client_6.jpg",
                    "assets/projects/le_transporteur/client_7.jpg",
                    "assets/projects/le_transporteur/livreur_1.jpg",
                    "assets/projects/le_transporteur/livreur_2.jpg",
                    "assets/projects/le_transporteur/livreur_3.jpg",
                    "assets/projects/le_transporteur/livreur_4.jpg",
                    "assets/projects/le_transporteur/livreur_5.jpg",
                    "assets/projects/le_transporteur/livreur_6.jpg",
                    "assets/projects/le_transporteur/livreur_7.jpg",
                    "assets/projects/le_transporteur/livreur_8.jpg",
                    "assets/projects/le_transporteur/livreur_9.jpg",
                    "assets/projects/le_transporteur/livreur_10.jpg",
                    "assets/projects/le_transporteur/livreur_11.jpg",
                    "assets/projects/le_transporteur/livreur_12.jpg"
                ],
                links: {
                    github: null,
                    gitlab: null,
                    demo: null
                }
            },
            {
                id: "biodivcenter",
                type: "Web / Mobile",
                category: "systemes web",
                tech: ["Laravel", "Leaflet.js", "MySQL", "Flutter", "iNaturalist API"],
                fr: {
                    title: "BiodivCenter",
                    badge: "GIZ · PARCS WAP",
                    categoryLabel: "BIODIVERSITÉ & CARTOGRAPHIE",
                    subtitle: "GIZ Bénin · 2021–2024",
                    description: "Plateforme de suivi de la faune et de recensement des espèces pour les réserves transfrontalières du complexe WAP (Bénin, Burkina Faso, Niger), reliée aux observations drones et à l'API iNaturalist."
                },
                en: {
                    title: "BiodivCenter",
                    badge: "GIZ · WAP PARKS",
                    categoryLabel: "BIODIVERSITY & GIS MAPPING",
                    subtitle: "GIZ Benin · 2021–2024",
                    description: "Wildlife monitoring and species inventory platform for the transboundary WAP national parks (Benin, Burkina Faso, Niger), integrating drone imagery, Leaflet GIS mapping, and the iNaturalist API."
                },
                images: [
                    "assets/projects/biodivcenter/1.jpeg",
                    "assets/projects/biodivcenter/2.png",
                    "assets/projects/biodivcenter/3.png"
                ],
                links: {
                    github: null,
                    gitlab: "https://gitlab.com/assogbamanuel6/biodiversite-rbtwap-web",
                    demo: null
                }
            },
            {
                id: "iknow",
                type: "Web",
                category: "systemes web",
                tech: ["Laravel", "AWS S3", "Bootstrap", "Chart.js", "REST API", "MySQL"],
                fr: {
                    title: "iKnow — Suivi d'Activités",
                    badge: "ONG & PARTENAIRES",
                    categoryLabel: "COLLECTE & AIDE À LA DÉCISION",
                    subtitle: "Maison des Tortues · 2024–2025",
                    description: "Système centralisé de suivi d'activités et de collecte documentaire pour un réseau d'ONG partenaires, avec archivage sur AWS S3 et tableaux de bord de pilotage."
                },
                en: {
                    title: "iKnow — Activity Monitoring",
                    badge: "PARTNER NGOS",
                    categoryLabel: "DATA COLLECTION & REPORTING",
                    subtitle: "Maison des Tortues · 2024–2025",
                    description: "Centralized activity monitoring and field documentation platform for partner NGOs, featuring AWS S3 media archiving and executive dashboards."
                },
                images: [
                    "assets/projects/iknow/1.png",
                    "assets/projects/iknow/2.png",
                    "assets/projects/iknow/3.png"
                ],
                links: {
                    github: null,
                    gitlab: null,
                    demo: "https://maisondestortues.org/nos-solutions/iknow"
                }
            },
            {
                id: "jande-exam",
                type: "Web",
                category: "web systemes",
                tech: ["Laravel", "Livewire", "Alpine.js", "SQLite", "Bootstrap"],
                fr: {
                    title: "Jande & Exam",
                    badge: "FORMATION LOCALE",
                    categoryLabel: "APPRENTISSAGE EN LANGUE PEULH",
                    subtitle: "DYRA ONG · 2025",
                    description: "Outil d'apprentissage et d'évaluation de compétences en langue peulh, pensé avec des repères visuels et vocaux pour des agents de terrain peu familiers avec le numérique."
                },
                en: {
                    title: "Jande & Exam",
                    badge: "LOCAL EDUCATION",
                    categoryLabel: "FULANI LANGUAGE E-LEARNING",
                    subtitle: "DYRA NGO · 2025",
                    description: "Learning and skill-assessment platform in Fulani (Peulh), designed with intuitive visual cues for field staff with minimal digital literacy and low-bandwidth connections."
                },
                images: [
                    "assets/projects/eval/1.jpeg",
                    "assets/projects/eval/2.jpeg",
                    "assets/projects/eval/3.jpeg"
                ],
                links: {
                    github: null,
                    gitlab: "https://gitlab.com/assogbamanuel6/learningapp/",
                    demo: null
                }
            },
            {
                id: "grid-generator",
                type: "Web",
                category: "web",
                tech: ["TypeScript", "Next.js", "Tailwind CSS", "Open Source"],
                fr: {
                    title: "Grid Generator",
                    badge: "OUTIL DÉVELOPPEUR",
                    categoryLabel: "OUTIL OPEN SOURCE",
                    subtitle: "Projet personnel · Open Source",
                    description: "Éditeur visuel interactif permettant de composer des grilles CSS sur-mesure par glisser-déposer et d'exporter directement un code propre et léger."
                },
                en: {
                    title: "Grid Generator",
                    badge: "DEVELOPER TOOL",
                    categoryLabel: "OPEN SOURCE UTILITY",
                    subtitle: "Personal project · Open Source",
                    description: "Interactive visual CSS grid builder with drag-and-drop controls that exports clean, responsive layout code."
                },
                images: [
                    "assets/projects/gridcss/1.png",
                    "assets/projects/gridcss/2.png",
                    "assets/projects/gridcss/3.png"
                ],
                links: {
                    github: null,
                    gitlab: "https://gitlab.com/learnperso/react/grid-generator/",
                    demo: null
                }
            },
            {
                id: "beninfy",
                type: "Mobile",
                category: "mobile",
                tech: ["Flutter", "Dart", "Google Maps API", "Figma", "REST API"],
                fr: {
                    title: "Beninfy Mobile",
                    badge: "MOBILITÉ & TOURISME",
                    categoryLabel: "APPLICATION FLUTTER",
                    subtitle: "Mission Freelance · 2023",
                    description: "Application mobile de covoiturage et de découverte culturelle au Bénin, intégrant le guidage cartographique Google Maps et une interface fidèle aux maquettes Figma."
                },
                en: {
                    title: "Beninfy Mobile",
                    badge: "MOBILITY & TOURISM",
                    categoryLabel: "FLUTTER APPLICATION",
                    subtitle: "Freelance Mission · 2023",
                    description: "Carpooling and cultural discovery mobile app in Benin, integrating interactive Google Maps navigation and a pixel-accurate Flutter UI from Figma designs."
                },
                images: [
                    "assets/projects/beninfy/1.png",
                    "assets/projects/beninfy/2.png",
                    "assets/projects/beninfy/3.png",
                    "assets/projects/beninfy/4.png",
                    "assets/projects/beninfy/5.png",
                    "assets/projects/beninfy/6.png",
                    "assets/projects/beninfy/7.png"
                ],
                links: {
                    github: null,
                    gitlab: null,
                    demo: null
                }
            }
        ],

        texts: {
            fr: {
                metaTitle: "Manuel Assogba — Architecte Logiciel & Développeur Full-Stack",
                statusStrip: {
                    operational: "COTONOU, BÉNIN (UTC+1) · MISSIONS SUR SITE & À DISTANCE",
                    clockLabel: "HEURE LOCALE :",
                    experienceLabel: "EXPÉRIENCE :",
                    experienceValue: "6+ ANS"
                },
                nav: {
                    roleSub: "ARCHITECTE LOGICIEL & FULL-STACK",
                    focus: "Accueil",
                    approche: "Approche",
                    projects: "Réalisations",
                    parcours: "Parcours",
                    stack: "Compétences",
                    contact: "Contact",
                    cta: "Démarrer un projet",
                    langLabel: "LANGUE DE L'INTERFACE"
                },
                hero: {
                    role: "ARCHITECTE LOGICIEL & DÉVELOPPEUR FULL-STACK",
                    badgeSecondary: "WEB · MOBILE · SYSTÈMES MÉTIER",
                    titlePart1: "CONCEVOIR DES LOGICIELS QUI COMPTENT.",
                    titlePart2: "BÂTIR POUR",
                    titleHighlight: "DURER.",
                    subtitleMain: "Depuis plus de 6 ans, je conçois et développe des applications web et mobiles sur-mesure pour les organisations confrontées aux réalités du terrain.",
                    subtitleSub: "Des parcs nationaux d'Afrique de l'Ouest aux cabinets de conseil et commerces de proximité : je crée des outils clairs, solides et utiles dès le premier jour.",
                    cardTag: "ENGAGEMENT TERRAIN",
                    cardLocation: "Cotonou, Bénin · Remote & International",
                    premiseTextP1: "Plus de 6 ans de développement au service d'institutions internationales (GIZ), d'ONG de conservation, de la FinTech, des médias et du commerce local.",
                    premiseTextP2: "Qu'il s'agisse d'une application mobile fonctionnant sans réseau, d'un diagnostic financier assisté par IA ou d'une plateforme cartographique, chaque projet est écrit pour durer et rester simple à prendre en main.",
                    ctaProjects: "VOIR LES RÉALISATIONS",
                    ctaContact: "ME CONTACTER",
                    metrics: [
                        {
                            label: "EXPÉRIENCE MÉTIER",
                            tag: "DEPUIS 2020",
                            val: "06+",
                            unit: "ANS",
                            desc: "Conception et développement Web, Mobile & Systèmes"
                        },
                        {
                            label: "SYSTÈMES EN PRODUCTION",
                            tag: "SUR-MESURE",
                            val: "09+",
                            unit: "PROJETS",
                            desc: "Déployés pour la GIZ, des ONG, la FinTech et le commerce"
                        },
                        {
                            label: "TERRAIN D'INTERVENTION",
                            tag: "AFRIQUE & REMOTE",
                            val: "03",
                            unit: "PAYS",
                            desc: "Outils opérés au Bénin, au Burkina Faso et au Niger"
                        }
                    ]
                },
                approche: {
                    tag: "HISTOIRE & PHILOSOPHIE DE TRAVAIL",
                    title: "L'ÉCOLE DU TERRAIN : POURQUOI JE CODE AUTREMENT.",
                    storyTitle: "Là où chaque ligne de code a une conséquence réelle",
                    p1: "Ma façon de concevoir un logiciel ne s'est pas construite dans des bureaux coupés du monde avec une connexion fibre illimitée. Elle s'est forgée sur le terrain : face à des réseaux capricieux, des appareils très différents et l'obligation que l'outil fonctionne du premier coup.",
                    p2: "Lorsqu'on livre une application pour les écogardes des parcs du complexe WAP, pour des agents de santé en zone rurale ou pour un commerçant qui gère sa caisse avec Akonta, un bug n'est pas un simple ticket technique : c'est une patrouille retardée, un rapport bloqué ou une journée de vente perdue.",
                    quote: "« Mon rôle n'est pas d'empiler des technologies à la mode, mais de résoudre un vrai problème métier avec un outil clair que vos équipes aiment utiliser. »",
                    highlights: [
                        { val: "6+ ANS", label: "D'expérience concrète sur le terrain" },
                        { val: "100 %", label: "Pensé pour l'autonomie de vos équipes" }
                    ],
                    principlesTitle: "TROIS PRINCIPES QUI GUIDENT CHAQUE PROJET",
                    principles: [
                        {
                            num: "01",
                            category: "COMPRÉHENSION MÉTIER",
                            title: "Comprendre le terrain avant d'écrire le code",
                            text: "Un bon logiciel commence toujours par l'écoute de ceux qui vont l'utiliser au quotidien. Avant de coder, je mets à plat vos vrais besoins pour supprimer les étapes inutiles et construire une architecture qui évolue sereinement.",
                            footerLeft: "Écoute & modélisation",
                            footerRight: "Étape 01",
                            colorClass: "accent-green",
                            borderHover: "hover:border-accent-green"
                        },
                        {
                            num: "02",
                            category: "CLARTÉ & IDENTITÉ",
                            title: "Des interfaces lisibles qui racontent votre histoire",
                            text: "Une interface réussie n'a pas besoin d'un long manuel d'utilisation. Je soigne la hiérarchie visuelle, les contrastes et les parcours sur mobile comme sur ordinateur pour que chaque écran parle le langage de votre métier.",
                            footerLeft: "Design sobre & sur-mesure",
                            footerRight: "Étape 02",
                            colorClass: "accent-amber",
                            borderHover: "hover:border-accent-amber"
                        },
                        {
                            num: "03",
                            category: "FIABILITÉ & AUTONOMIE",
                            title: "Des outils rapides, même quand le réseau faiblit",
                            text: "Bases de données bien structurées, stockage hors-ligne quand le terrain l'exige et code proprement documenté : vous gardez la maîtrise complète de votre plateforme sur le long terme.",
                            footerLeft: "Performance & pérennité",
                            footerRight: "Étape 03",
                            colorClass: "text-high",
                            borderHover: "hover:border-text-high"
                        }
                    ]
                },
                featured: {
                    tag: "ÉTUDE DE CAS À LA UNE",
                    title: "FIELDOZ — TRANSFORMER LES DONNÉES TERRAIN EN PREUVES D'IMPACT",
                    ref: "ÉTUDE DE CAS · WEB & DONNÉES",
                    windowTitle: "Aperçu de l'interface FieldOz",
                    windowAction: "Cliquer pour agrandir les 6 écrans",
                    sub: "PLATEFORME DE SUIVI & RAPPORTS D'IMPACT",
                    heading: "FieldOz — Donner une voix claire aux actions de terrain",
                    description: "Les organisations de terrain passent souvent des semaines à consolider des fichiers dispersés pour prouver l'impact de leurs missions. FieldOz rassemble les données collectées sur le terrain et les transforme automatiquement en bilans visuels compréhensibles par les décideurs et les partenaires financiers.",
                    quoteTitle: "OBJECTIF DU PROJET",
                    quoteText: "« Permettre aux équipes opérationnelles de présenter leurs résultats clairement, sans perdre des jours dans des tableurs complexes. »",
                    stackLabel: "TECHNOLOGIES UTILISÉES",
                    indicators: [
                        { label: "AFFICHAGE DES BILANS", val: "< 0.4s" },
                        { label: "POIDS DES REQUÊTES", val: "-74 %" },
                        { label: "MODE BASSES CONNEXIONS", val: "OPTIMISÉ" }
                    ],
                    syncStatus: "Consultable en galerie (6 captures)",
                    liveLink: "Consulter le code sur GitLab",
                    openGalleryBtn: "Voir les 6 captures d'écran",
                    statusBadge: "Projet déployé · 2025"
                },
                projectsSection: {
                    tag: "PORTFOLIO DES RÉALISATIONS",
                    title: "9 SYSTÈMES CONÇUS POUR DES BESOINS RÉELS.",
                    subtitle: "Parcourez l'ensemble des applications web, mobiles et systèmes métier développés ces dernières années. Cliquez sur une carte ou sur « Voir les captures » pour inspecter chaque écran en détail.",
                    filters: {
                        all: "Tous les projets",
                        web: "Web & Plateformes",
                        mobile: "Applications Mobiles",
                        systemes: "Systèmes & Terrain"
                    },
                    photosCount: "captures",
                    viewScreenshots: "Voir les captures",
                    viewGitlab: "Code GitLab",
                    viewSolution: "Voir le site",
                    privateLabel: "Projet interne client"
                },
                parcours: {
                    tag: "PARCOURS PROFESSIONNEL & ACADÉMIQUE",
                    title: "6 ANNÉES D'EXPÉRIENCE ENTRE ARCHITECTURE, WEB ET MOBILE.",
                    intro: "De mes premières missions de développement jusqu'à l'architecture de plateformes complètes en FinTech et en conservation environnementale, voici les étapes clés de mon parcours.",
                    currentBadge: "En poste",
                    timelineTitle: "RESPONSABILITÉS & MISSIONS RÉALISÉES",
                    educationTitle: "FORMATION ACADÉMIQUE & CERTIFICATIONS"
                },
                experience: {
                    title: "Expérience professionnelle",
                    items: [
                        {
                            isCurrent: true,
                            position: "Architecte Logiciel",
                            company: "FUND.lab",
                            period: "Janvier 2026 – Aujourd'hui",
                            tag: "FINTECH & IA",
                            description: "Conception et développement de Business Checkup (diagnostic d'entreprise par arbres de décision, calculs financiers et rapports d'orientation générés avec l'IA) et architecture de Business Assist, la plateforme interne de suivi des missions du cabinet."
                        },
                        {
                            isCurrent: true,
                            position: "Co-fondateur & Développeur",
                            company: "Akonta",
                            period: "Septembre 2025 – Aujourd'hui",
                            tag: "COMMERCE & HORS-LIGNE",
                            description: "Conception d'une application PWA hors-ligne de gestion de stocks et de ventes pour commerçants. Stockage local IndexedDB (Dexie.js), synchronisation en arrière-plan, génération de QR codes et impression d'étiquettes."
                        },
                        {
                            isCurrent: false,
                            position: "Développeur Mobile",
                            company: "Le Transporteur",
                            period: "Février 2026 – Juin 2026",
                            tag: "MOBILITÉ & LOGISTIQUE",
                            description: "Développement d'une suite mobile complète en Flutter reliant clients, livreurs et gestionnaires de flotte, avec suivi de livraison sur carte en direct et gestion des courses."
                        },
                        {
                            isCurrent: false,
                            position: "Développeur Full-Stack",
                            company: "Maison des Tortues",
                            period: "Avril 2024 – Mai 2025",
                            tag: "ONG & DONNÉES TERRAIN",
                            description: "Développement et évolution de la plateforme iKnow (collecte de données terrain, suivi d'activités et tableaux de bord). Mise en place du stockage sur AWS S3, déploiement serveur, documentation et formation des équipes."
                        },
                        {
                            isCurrent: false,
                            position: "Développeur Full-Stack Lead",
                            company: "Projet RBT-WAP (GIZ)",
                            period: "Juin 2021 – Mars 2024",
                            tag: "COOPÉRATION INTERNATIONALE · PARCS WAP",
                            description: "Conception et déploiement d'outils d'évaluation et de suivi écologique (BiodivCenter, Eval-FSOA, WAP-Training) pour le complexe transfrontalier W-Arly-Pendjari. Cartographie interactive, connexion API iNaturalist, imagerie 360° et formation des agents sur le terrain."
                        },
                        {
                            isCurrent: false,
                            position: "Consultant Web & Médias",
                            company: "SAF Consulting & JHS Corporate",
                            period: "Mai – Septembre 2023",
                            tag: "PRESSE & WEBTV",
                            description: "Refonte de 3 portails de presse en ligne, automatisation des lettres d'information, référencement Google Actualités et mise en place d'une chaîne WebTV avec régie publicitaire (Afrikaad)."
                        },
                        {
                            isCurrent: false,
                            position: "Développeur Mobile Freelance",
                            company: "Beninfy",
                            period: "Avril – Décembre 2023",
                            tag: "FLUTTER & CARTOGRAPHIE",
                            description: "Développement de l'application mobile Flutter de covoiturage et de découverte touristique à partir des maquettes Figma, avec intégration Google Maps et API REST."
                        }
                    ]
                },
                education: {
                    title: "Formation académique & certifications",
                    items: [
                        {
                            title: "Certification Full-Stack Web Development (MERN)",
                            school: "Oak Academy · Udemy",
                            period: "2022 – 2024",
                            description: "Obtenue en novembre 2024. Conception d'API REST, gestion d'état et applications web réactives."
                        },
                        {
                            title: "Licence Professionnelle en Génie Logiciel",
                            school: "IFRI — Université d'Abomey-Calavi (UAC)",
                            period: "2015 – 2019",
                            description: "Diplôme obtenu en septembre 2019. Architecture logicielle, modélisation UML/Merise, bases de données relationnelles et algorithmique."
                        },
                        {
                            title: "Classes Préparatoires Mathématiques & Informatique",
                            school: "IMSP — Institut de Mathématiques et de Sciences Physiques",
                            period: "2013 – 2015",
                            description: "Formation approfondie en mathématiques discrètes, algèbre linéaire et logique informatique."
                        }
                    ]
                },
                skillsSection: {
                    tag: "COMPÉTENCES TECHNIQUES",
                    title: "LES OUTILS QUE J'UTILISE AU QUOTIDIEN.",
                    subtitle: "Des technologies choisies pour leur fiabilité en production, leur clarté de maintenance et leur adaptation aux contraintes de chaque projet.",
                    pillars: [
                        {
                            num: "01",
                            category: "BACKEND & DONNÉES",
                            icon: "database",
                            color: "accent-green",
                            tagline: "Logique métier, API & bases de données",
                            items: [
                                { name: "PHP / Laravel", badge: "Principal", highlight: true },
                                { name: "Python / Django", badge: "Pratique", highlight: false },
                                { name: "PostgreSQL & Supabase", badge: "SQL & Temps réel", highlight: true },
                                { name: "MySQL & SQLite", badge: "Production", highlight: false },
                                { name: "Conception d'API REST", badge: "Architecture", highlight: true }
                            ]
                        },
                        {
                            num: "02",
                            category: "INTERFACES & MOBILE",
                            icon: "devices",
                            color: "accent-amber",
                            tagline: "Applications fluides en ligne comme hors-ligne",
                            items: [
                                { name: "Flutter / Dart", badge: "iOS & Android", highlight: true },
                                { name: "PWA & IndexedDB (Dexie.js)", badge: "Hors-ligne", highlight: true },
                                { name: "Livewire & Alpine.js", badge: "Réactif", highlight: true },
                                { name: "Tailwind CSS & Bootstrap", badge: "Responsive", highlight: false },
                                { name: "JavaScript & TypeScript", badge: "Typage clair", highlight: false }
                            ]
                        },
                        {
                            num: "03",
                            category: "SERVEURS & DÉPLOIEMENT",
                            icon: "cloud_sync",
                            color: "text-high",
                            tagline: "Mise en ligne, stockage et suivi continu",
                            items: [
                                { name: "Serveurs Linux VPS", badge: "Administration", highlight: true },
                                { name: "AWS S3 & Stockage Cloud", badge: "Médias & Sauvegardes", highlight: false },
                                { name: "Git, GitLab & GitHub", badge: "Suivi de versions", highlight: true },
                                { name: "Hébergement & cPanel", badge: "Mise en production", highlight: false },
                                { name: "Postman & Outils de test", badge: "Validation API", highlight: false }
                            ]
                        },
                        {
                            num: "04",
                            category: "ARCHITECTURE & IA MÉTIER",
                            icon: "psychology",
                            color: "accent-green",
                            tagline: "Analyse, aide à la décision et accompagnement",
                            items: [
                                { name: "Intégration IA & LLM", badge: "OpenAI / Claude", highlight: true },
                                { name: "Arbres de décision & Scoring", badge: "Diagnostic métier", highlight: true },
                                { name: "Modélisation UML & Merise", badge: "Conception", highlight: false },
                                { name: "Audit & Reprise de projets", badge: "Diagnostic rapide", highlight: true },
                                { name: "Formation & Documentation", badge: "Transfert", highlight: false }
                            ]
                        }
                    ]
                },
                contact: {
                    tag: "CONTACT DIRECT & ÉCHANGES",
                    title: "PARLONS DE VOTRE PROCHAIN PROJET.",
                    subtitle: "Vous avez besoin de concevoir une nouvelle plateforme, de lancer une application mobile ou de faire évoluer un outil existant ? Écrivez-moi directement par le canal qui vous convient le mieux.",
                    guarantee: "Échange direct avec moi, sans intermédiaire commercial, avec un retour clair sur la faisabilité et les étapes de réalisation.",
                    emailBadge: "ADRESSE EMAIL DIRECTE",
                    emailResponseTime: "Réponse garantie sous 24h ouvrées",
                    channels: [
                        {
                            id: "whatsapp",
                            tag: "MESSAGERIE RAPIDE",
                            title: "WhatsApp Direct",
                            desc: "Idéal pour un premier échange rapide par message ou note vocale",
                            value: "+229 01 6151-2491",
                            link: "https://wa.me/2290161512491",
                            action: "Écrire sur WhatsApp →"
                        },
                        {
                            id: "email",
                            tag: "DOSSIERS & CAHIERS DES CHARGES",
                            title: "Email Professionnel",
                            desc: "Pour me transmettre vos besoins détaillés, documents ou propositions",
                            value: "assogbamanuel6@gmail.com",
                            link: "mailto:assogbamanuel6@gmail.com",
                            action: "Envoyer un email →"
                        },
                        {
                            id: "linkedin",
                            tag: "RÉSEAU PROFESSIONNEL",
                            title: "Profil LinkedIn",
                            desc: "Consultez mon parcours détaillé et échangeons dans votre réseau",
                            value: "linkedin.com/in/manuel-assogba",
                            link: "https://linkedin.com/in/manuel-assogba-a0900a123/",
                            action: "Ouvrir LinkedIn →"
                        },
                        {
                            id: "github",
                            tag: "DÉPÔTS DE CODE",
                            title: "GitHub & GitLab",
                            desc: "Explorez mes projets publics, contributions et dépôts open source",
                            value: "manuelh6 · assogbamanuel6",
                            link: "https://github.com/manuelh6",
                            secondLink: "https://gitlab.com/assogbamanuel6"
                        }
                    ],
                    locationText: "Basé à Cotonou (Bénin, UTC+1) — Disponible pour des missions en Afrique et à l'international",
                    remoteBadge: "Missions à distance & sur site"
                },
                footer: {
                    tagline: "MANUEL ASSOGBA",
                    desc: "Architecte logiciel et développeur Full-Stack. Conception d'applications web, mobiles et systèmes métier pensés pour le terrain et bâtis pour durer.",
                    colIndex: "NAVIGATION",
                    colDoctrine: "EXPLORER",
                    colLocation: "COORDONNÉES",
                    philosophyLink: "Mon approche",
                    stackLink: "Compétences",
                    contactLink: "Me contacter",
                    city: "Cotonou, Bénin",
                    timezone: "Fuseau UTC+1 · Remote International",
                    copyright: "Manuel Assogba. Tous droits réservés.",
                    status: "Portfolio mis à jour · 2026"
                }
            },

            en: {
                metaTitle: "Manuel Assogba — Software Architect & Full-Stack Developer",
                statusStrip: {
                    operational: "COTONOU, BENIN (UTC+1) · ON-SITE & REMOTE MISSIONS",
                    clockLabel: "LOCAL TIME:",
                    experienceLabel: "EXPERIENCE:",
                    experienceValue: "6+ YRS"
                },
                nav: {
                    roleSub: "SOFTWARE ARCHITECT & FULL-STACK",
                    focus: "Home",
                    approche: "Approach",
                    projects: "Projects",
                    parcours: "Experience",
                    stack: "Skills",
                    contact: "Contact",
                    cta: "Start a project",
                    langLabel: "INTERFACE LANGUAGE"
                },
                hero: {
                    role: "SOFTWARE ARCHITECT & FULL-STACK DEVELOPER",
                    badgeSecondary: "WEB · MOBILE · BUSINESS SYSTEMS",
                    titlePart1: "BUILDING SOFTWARE THAT MATTERS.",
                    titlePart2: "BUILT TO",
                    titleHighlight: "LAST.",
                    subtitleMain: "For over 6 years, I have designed and built custom web and mobile applications for organizations working in real-world conditions.",
                    subtitleSub: "From West African national parks to advisory firms and local merchants: I build clear, reliable tools that teams can trust from day one.",
                    cardTag: "FIELD COMMITMENT",
                    cardLocation: "Cotonou, Benin · Remote & Worldwide",
                    premiseTextP1: "Over 6 years of hands-on software engineering for international institutions (GIZ), conservation NGOs, FinTech firms, media outlets, and local retail.",
                    premiseTextP2: "Whether building an offline-first mobile app, an AI-assisted financial diagnostic platform, or an interactive GIS mapping system, every project is crafted to last and remain easy to run.",
                    ctaProjects: "EXPLORE PROJECTS",
                    ctaContact: "GET IN TOUCH",
                    metrics: [
                        {
                            label: "HANDS-ON EXPERIENCE",
                            tag: "SINCE 2020",
                            val: "06+",
                            unit: "YRS",
                            desc: "Designing and building Web, Mobile & Business Systems"
                        },
                        {
                            label: "SYSTEMS IN PRODUCTION",
                            tag: "CUSTOM-BUILT",
                            val: "09+",
                            unit: "PROJECTS",
                            desc: "Deployed for GIZ, NGOs, FinTech firms, and local retail"
                        },
                        {
                            label: "FIELD FOOTPRINT",
                            tag: "AFRICA & REMOTE",
                            val: "03",
                            unit: "COUNTRIES",
                            desc: "Systems actively used in Benin, Burkina Faso, and Niger"
                        }
                    ]
                },
                approche: {
                    tag: "BACKGROUND & WORKING PHILOSOPHY",
                    title: "THE SCHOOL OF THE FIELD: WHY I BUILD SOFTWARE DIFFERENTLY.",
                    storyTitle: "Where every line of code has a real-world consequence",
                    p1: "My approach to software wasn't shaped in isolated offices with unlimited fiber internet. It was forged in the field: dealing with unstable connections, diverse devices, and the strict necessity that tools work properly on the first try.",
                    p2: "When you deploy an application for wildlife rangers in the WAP national parks, public health teams in rural areas, or a shopkeeper running their inventory on Akonta, a bug is never just a ticket on a board: it is a delayed patrol, a blocked report, or a lost day of sales.",
                    quote: "“My job isn't to stack trendy technologies, but to solve real business problems with clear tools that your teams genuinely enjoy using.”",
                    highlights: [
                        { val: "6+ YRS", label: "Of practical field engineering" },
                        { val: "100%", label: "Built for your team's long-term autonomy" }
                    ],
                    principlesTitle: "THREE PRINCIPLES GUIDING EVERY PROJECT",
                    principles: [
                        {
                            num: "01",
                            category: "BUSINESS UNDERSTANDING",
                            title: "Understand the real workflow before writing code",
                            text: "Great software always starts by listening to the people who will use it every day. Before coding, I map out your real workflows to remove unnecessary steps and design a clean, scalable foundation.",
                            footerLeft: "Listening & system design",
                            footerRight: "Step 01",
                            colorClass: "accent-green",
                            borderHover: "hover:border-accent-green"
                        },
                        {
                            num: "02",
                            category: "CLARITY & IDENTITY",
                            title: "Readable interfaces that tell your story",
                            text: "A well-designed interface shouldn't require a thick user manual. I focus on visual hierarchy, strong contrast, and smooth mobile and desktop journeys so every screen speaks your business language.",
                            footerLeft: "Clean, tailored design",
                            footerRight: "Step 02",
                            colorClass: "accent-amber",
                            borderHover: "hover:border-accent-amber"
                        },
                        {
                            num: "03",
                            category: "RELIABILITY & AUTONOMY",
                            title: "Fast, resilient tools even on weak networks",
                            text: "Well-structured databases, offline storage when field conditions demand it, and clearly documented code: you stay in full control of your platform over the long run.",
                            footerLeft: "Performance & longevity",
                            footerRight: "Step 03",
                            colorClass: "text-high",
                            borderHover: "hover:border-text-high"
                        }
                    ]
                },
                featured: {
                    tag: "FEATURED CASE STUDY",
                    title: "FIELDOZ — TURNING FIELD DATA INTO CLEAR IMPACT STORIES",
                    ref: "CASE STUDY · WEB & DATA",
                    windowTitle: "FieldOz interface preview",
                    windowAction: "Click to inspect all 6 screens",
                    sub: "IMPACT TRACKING & REPORTING PLATFORM",
                    heading: "FieldOz — Giving field operations a clear visual voice",
                    description: "Field organizations often spend weeks consolidating scattered spreadsheets to prove the impact of their programs. FieldOz brings field data together and turns it into clear visual reports that decision-makers and funding partners can immediately understand.",
                    quoteTitle: "PROJECT GOAL",
                    quoteText: "“Empower operational teams to present their results with clarity, without losing days inside complex spreadsheets.”",
                    stackLabel: "TECHNOLOGIES USED",
                    indicators: [
                        { label: "REPORT LOAD TIME", val: "< 0.4s" },
                        { label: "PAYLOAD REDUCTION", val: "-74%" },
                        { label: "LOW-BANDWIDTH MODE", val: "OPTIMIZED" }
                    ],
                    syncStatus: "Interactive gallery (6 screenshots)",
                    liveLink: "View source on GitLab",
                    openGalleryBtn: "View all 6 screenshots",
                    statusBadge: "Deployed project · 2025"
                },
                projectsSection: {
                    tag: "PROJECT PORTFOLIO",
                    title: "9 PRODUCTION SYSTEMS BUILT FOR REAL NEEDS.",
                    subtitle: "Browse the web platforms, mobile apps, and business systems built over the past years. Click any project image or 'View screenshots' button to inspect every screen.",
                    filters: {
                        all: "All Projects",
                        web: "Web & Platforms",
                        mobile: "Mobile Apps",
                        systemes: "Systems & Field"
                    },
                    photosCount: "screens",
                    viewScreenshots: "View screenshots",
                    viewGitlab: "GitLab Repo",
                    viewSolution: "Live Website",
                    privateLabel: "Private client system"
                },
                parcours: {
                    tag: "CAREER & EDUCATION",
                    title: "6 YEARS OF EXPERIENCE ACROSS ARCHITECTURE, WEB & MOBILE.",
                    intro: "From my first field deployments to architecting complete FinTech and environmental monitoring platforms, here are the key milestones of my journey.",
                    currentBadge: "Current role",
                    timelineTitle: "ROLES & DELIVERED MISSIONS",
                    educationTitle: "ACADEMIC EDUCATION & CERTIFICATIONS"
                },
                experience: {
                    title: "Professional Experience",
                    items: [
                        {
                            isCurrent: true,
                            position: "Software Architect",
                            company: "FUND.lab",
                            period: "January 2026 – Present",
                            tag: "FINTECH & AI",
                            description: "Design and development of Business Checkup (automated company diagnostic powered by decision trees, financial calculations, and AI-assisted strategic reports) and architecture of Business Assist, the firm's internal mission management platform."
                        },
                        {
                            isCurrent: true,
                            position: "Co-founder & Developer",
                            company: "Akonta",
                            period: "September 2025 – Present",
                            tag: "RETAIL & OFFLINE PWA",
                            description: "Architecture of an offline-first PWA for merchant inventory and sales management. Local IndexedDB storage (Dexie.js), background synchronization, QR code generation, and label printing."
                        },
                        {
                            isCurrent: false,
                            position: "Mobile Developer",
                            company: "Le Transporteur",
                            period: "February 2026 – June 2026",
                            tag: "MOBILITY & LOGISTICS",
                            description: "Development of a comprehensive Flutter mobile suite connecting clients, couriers, and fleet supervisors with live map tracking and delivery management."
                        },
                        {
                            isCurrent: false,
                            position: "Full-Stack Developer",
                            company: "Maison des Tortues",
                            period: "April 2024 – May 2025",
                            tag: "NGO & FIELD DATA",
                            description: "Development and maintenance of the iKnow platform (field data collection, activity monitoring, and decision dashboards). AWS S3 media archiving, server deployment, technical documentation, and user training."
                        },
                        {
                            isCurrent: false,
                            position: "Lead Full-Stack Developer",
                            company: "RBT-WAP Project (GIZ)",
                            period: "June 2021 – March 2024",
                            tag: "INTERNATIONAL COOPERATION · WAP PARKS",
                            description: "Design and deployment of ecological monitoring and evaluation platforms (BiodivCenter, Eval-FSOA, WAP-Training) for the W-Arly-Pendjari transboundary parks. Interactive GIS mapping, iNaturalist API integration, 360° imagery, and field staff training."
                        },
                        {
                            isCurrent: false,
                            position: "Web & Media Consultant",
                            company: "SAF Consulting & JHS Corporate",
                            period: "May – September 2023",
                            tag: "DIGITAL PRESS & WEBTV",
                            description: "Redesign of 3 digital press portals, automated newsletters, Google News integration, and creation of an online WebTV channel with ad network management (Afrikaad)."
                        },
                        {
                            isCurrent: false,
                            position: "Freelance Mobile Developer",
                            company: "Beninfy",
                            period: "April – December 2023",
                            tag: "FLUTTER & MAPPING",
                            description: "Development of a Flutter carpooling and cultural discovery mobile app from Figma designs, integrating Google Maps navigation and REST APIs."
                        }
                    ]
                },
                education: {
                    title: "Academic Education & Certifications",
                    items: [
                        {
                            title: "Full-Stack Web Development Certification (MERN)",
                            school: "Oak Academy · Udemy",
                            period: "2022 – 2024",
                            description: "Completed in November 2024. RESTful API design, state management, and reactive web applications."
                        },
                        {
                            title: "Bachelor's Degree in Software Engineering",
                            school: "IFRI — University of Abomey-Calavi (UAC)",
                            period: "2015 – 2019",
                            description: "Graduated in September 2019. Software architecture, UML/Merise modeling, relational databases, and algorithms."
                        },
                        {
                            title: "Preparatory Program in Mathematics & Computer Science",
                            school: "IMSP — Institute of Mathematics and Physical Sciences",
                            period: "2013 – 2015",
                            description: "Intensive foundation in discrete mathematics, linear algebra, and computational logic."
                        }
                    ]
                },
                skillsSection: {
                    tag: "TECHNICAL SKILLS",
                    title: "THE TOOLS I WORK WITH EVERY DAY.",
                    subtitle: "Technologies chosen for their reliability in production, maintainability, and fit for real-world operational constraints.",
                    pillars: [
                        {
                            num: "01",
                            category: "BACKEND & DATA",
                            icon: "database",
                            color: "accent-green",
                            tagline: "Business logic, APIs & relational databases",
                            items: [
                                { name: "PHP / Laravel", badge: "Core Stack", highlight: true },
                                { name: "Python / Django", badge: "Working", highlight: false },
                                { name: "PostgreSQL & Supabase", badge: "SQL & Realtime", highlight: true },
                                { name: "MySQL & SQLite", badge: "Production", highlight: false },
                                { name: "REST API Design", badge: "Architecture", highlight: true }
                            ]
                        },
                        {
                            num: "02",
                            category: "FRONTEND & MOBILE",
                            icon: "devices",
                            color: "accent-amber",
                            tagline: "Responsive apps online and offline",
                            items: [
                                { name: "Flutter / Dart", badge: "iOS & Android", highlight: true },
                                { name: "PWA & IndexedDB (Dexie.js)", badge: "Offline-first", highlight: true },
                                { name: "Livewire & Alpine.js", badge: "Reactive UI", highlight: true },
                                { name: "Tailwind CSS & Bootstrap", badge: "Responsive", highlight: false },
                                { name: "JavaScript & TypeScript", badge: "Typed JS", highlight: false }
                            ]
                        },
                        {
                            num: "03",
                            category: "SERVERS & DEPLOYMENT",
                            icon: "cloud_sync",
                            color: "text-high",
                            tagline: "Hosting, cloud storage & version control",
                            items: [
                                { name: "Linux VPS Servers", badge: "Administration", highlight: true },
                                { name: "AWS S3 & Cloud Storage", badge: "Media & Backups", highlight: false },
                                { name: "Git, GitLab & GitHub", badge: "Version Control", highlight: true },
                                { name: "Web Hosting & cPanel", badge: "Deployment", highlight: false },
                                { name: "Postman & API Testing", badge: "Verification", highlight: false }
                            ]
                        },
                        {
                            num: "04",
                            category: "ARCHITECTURE & APPLIED AI",
                            icon: "psychology",
                            color: "accent-green",
                            tagline: "System design, decision support & training",
                            items: [
                                { name: "AI & LLM Integration", badge: "OpenAI / Claude", highlight: true },
                                { name: "Decision Trees & Scoring", badge: "Business Logic", highlight: true },
                                { name: "UML & Merise Modeling", badge: "System Design", highlight: false },
                                { name: "Codebase Audits & Recovery", badge: "Fast Turnaround", highlight: true },
                                { name: "Team Training & Docs", badge: "Handover", highlight: false }
                            ]
                        }
                    ]
                },
                contact: {
                    tag: "DIRECT CONTACT",
                    title: "LET'S DISCUSS YOUR NEXT PROJECT.",
                    subtitle: "Looking to design a new web platform, launch a mobile application, or upgrade an existing business system? Reach out directly through whichever channel suits you best.",
                    guarantee: "Direct collaboration with me, no sales middlemen, and a clear roadmap from our very first conversation.",
                    emailBadge: "DIRECT EMAIL ADDRESS",
                    emailResponseTime: "Response within 24 business hours",
                    channels: [
                        {
                            id: "whatsapp",
                            tag: "FAST MESSAGING",
                            title: "Direct WhatsApp",
                            desc: "Ideal for a quick initial message or voice note",
                            value: "+229 01 6151-2491",
                            link: "https://wa.me/2290161512491",
                            action: "Message on WhatsApp →"
                        },
                        {
                            id: "email",
                            tag: "BRIEFS & PROPOSALS",
                            title: "Professional Email",
                            desc: "For project specifications, documents, and formal inquiries",
                            value: "assogbamanuel6@gmail.com",
                            link: "mailto:assogbamanuel6@gmail.com",
                            action: "Send an Email →"
                        },
                        {
                            id: "linkedin",
                            tag: "PROFESSIONAL NETWORK",
                            title: "LinkedIn Profile",
                            desc: "View my full background and connect on LinkedIn",
                            value: "linkedin.com/in/manuel-assogba",
                            link: "https://linkedin.com/in/manuel-assogba-a0900a123/",
                            action: "Open LinkedIn →"
                        },
                        {
                            id: "github",
                            tag: "CODE REPOSITORIES",
                            title: "GitHub & GitLab",
                            desc: "Explore my public repositories and open-source work",
                            value: "manuelh6 · assogbamanuel6",
                            link: "https://github.com/manuelh6",
                            secondLink: "https://gitlab.com/assogbamanuel6"
                        }
                    ],
                    locationText: "Based in Cotonou (Benin, UTC+1) — Available for remote and on-site missions worldwide",
                    remoteBadge: "Remote & On-site Missions"
                },
                footer: {
                    tagline: "MANUEL ASSOGBA",
                    desc: "Software Architect and Full-Stack Developer. Custom web applications, mobile apps, and business systems built for real-world reliability.",
                    colIndex: "NAVIGATION",
                    colDoctrine: "EXPLORE",
                    colLocation: "LOCATION",
                    philosophyLink: "My Approach",
                    stackLink: "Technical Skills",
                    contactLink: "Direct Contact",
                    city: "Cotonou, Benin",
                    timezone: "UTC+1 Timezone · Worldwide Remote",
                    copyright: "Manuel Assogba. All rights reserved.",
                    status: "Portfolio updated · 2026"
                }
            }
        },

        setFilter(filter) {
            this.activeFilter = filter;
        },

        projectsForFilter(filter) {
            const rest = this.projects.slice(1);
            if (filter === 'all') return rest;
            if (filter === 'web') return rest.filter(p => (p.category || p.type.toLowerCase()).includes('web'));
            if (filter === 'mobile') return rest.filter(p => (p.category || p.type.toLowerCase()).includes('mobile'));
            if (filter === 'systemes') return rest.filter(p => (p.category || p.type.toLowerCase()).includes('systemes') || (p.type.toLowerCase()).includes('système'));
            return rest;
        },

        filteredProjects() {
            return this.projectsForFilter(this.activeFilter);
        },

        countByFilter(filter) {
            const count = this.projectsForFilter(filter).length;
            return String(count).padStart(2, '0');
        },

        updateLocalClock() {
            try {
                const formatter = new Intl.DateTimeFormat('fr-FR', {
                    timeZone: 'Africa/Porto-Novo',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                });
                this.localTime = formatter.format(new Date()) + ' WAT';
            } catch (e) {
                const now = new Date();
                this.localTime = now.toTimeString().slice(0, 8);
            }
        },

        syncDocumentMeta() {
            document.documentElement.lang = this.currentLang;
            if (this.texts[this.currentLang] && this.texts[this.currentLang].metaTitle) {
                document.title = this.texts[this.currentLang].metaTitle;
            }
        },

        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },

        toggleLanguage() {
            this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
            localStorage.setItem('lang', this.currentLang);
            this.syncDocumentMeta();
        },

        setLanguage(lang) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            this.syncDocumentMeta();
        },

        init() {
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            const savedLang = localStorage.getItem('lang') || 'fr';
            this.currentLang = savedLang;
            this.syncDocumentMeta();

            this.updateLocalClock();
            this.clockInterval = setInterval(() => this.updateLocalClock(), 1000);

            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        this.handleScroll();
                        ticking = false;
                    });
                    ticking = true;
                }
            });
            this.handleScroll();
        },

        handleScroll() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            this.scrollProgress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

            this.showNav = scrollTop > 100;
            this.showBackToTop = scrollTop > 500;

            const sectionIds = ['focus', 'approche', 'projets', 'parcours', 'outils', 'contact'];
            const triggerOffset = window.scrollY + 180;
            let current = 'focus';
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= triggerOffset) {
                    current = id;
                }
            }
            this.activeSection = current;
        },

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        openLightbox(images, index = 0) {
            this.lightbox.images = Array.isArray(images) ? images : [images];
            this.lightbox.currentIndex = index;
            this.lightbox.show = true;
            document.body.style.overflow = 'hidden';

            this.detectOrientation();
        },

        closeLightbox() {
            this.lightbox.show = false;
            document.body.style.overflow = 'auto';
        },

        nextImage() {
            if (this.lightbox.images.length <= 1) return;
            this.lightbox.currentIndex = (this.lightbox.currentIndex + 1) % this.lightbox.images.length;
            this.detectOrientation();
        },

        prevImage() {
            if (this.lightbox.images.length <= 1) return;
            this.lightbox.currentIndex = (this.lightbox.currentIndex - 1 + this.lightbox.images.length) % this.lightbox.images.length;
            this.detectOrientation();
        },

        detectOrientation() {
            if (!this.lightbox.currentImage) return;
            const img = new Image();
            img.src = this.lightbox.currentImage;
            img.onload = () => {
                const lbImg = document.querySelector('.lightbox-image');
                if (lbImg) {
                    if (img.height > img.width) {
                        lbImg.classList.add('portrait');
                        lbImg.classList.remove('landscape');
                    } else {
                        lbImg.classList.add('landscape');
                        lbImg.classList.remove('portrait');
                    }
                }
            };
        }
    };
}
