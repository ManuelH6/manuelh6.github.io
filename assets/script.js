function app() {
    return {
        currentLang: localStorage.getItem('lang') || 'fr',
        darkMode: localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : true,
        mobileMenuOpen: false,
        showNav: false,
        showBackToTop: false,
        scrollProgress: 0,
        activeFilter: 'all',

        // Form data
        form: {
            name: '',
            email: '',
            project_type: 'systeme',
            message: ''
        },
        errors: {},
        isSubmitting: false,
        submitMessage: '',
        submitSuccess: false,

        // Lightbox
        lightbox: {
            show: false,
            images: [],
            currentIndex: 0,
            get currentImage() {
                return this.images[this.currentIndex] || '';
            }
        },

        // Projects data (Synchronized bilingual + real images)
        projects: [
            // 0: FieldOz (Projet Phare - Section 2)
            {
                id: "fieldoz",
                type: "Web",
                category: "web systemes",
                tech: ["Laravel", "Livewire", "Tailwind CSS", "Alpine.js", "MySQL"],
                fr: {
                    title: "FieldOz",
                    badge: "SAAS // IMPACT",
                    categoryLabel: "PLATEFORME SAAS D'IMPACT SOCIAL",
                    subtitle: "Projet personnel • 2025",
                    description: "Plateforme SaaS conçue pour transformer des données terrain complexes en récits visuels et rapports d'impact incontestables. Une architecture pensée pour offrir une clarté absolue aux bailleurs de fonds et aux équipes sur le terrain."
                },
                en: {
                    title: "FieldOz",
                    badge: "SAAS // IMPACT",
                    categoryLabel: "SOCIAL IMPACT SAAS PLATFORM",
                    subtitle: "Personal project • 2025",
                    description: "SaaS platform engineered to transform complex field data into undeniable visual impact narratives. Tailored to provide absolute clarity to international donors and field monitoring teams."
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
            // 1: Business Checkup (FUND.lab)
            {
                id: "business-checkup",
                type: "Web / IA",
                category: "web systemes",
                tech: ["Laravel", "Livewire", "IA / LLM", "Alpine.js", "Chart.js", "PostgreSQL"],
                fr: {
                    title: "Business Checkup",
                    badge: "FINTECH // IA",
                    categoryLabel: "FINTECH & IA",
                    subtitle: "FUND.lab • Architecte Logiciel",
                    description: "Diagnostic d'entreprise automatisé par arbres de décision, calculs financiers avancés et génération de rapports stratégiques propulsés par IA pour dirigeants et consultants d'affaires."
                },
                en: {
                    title: "Business Checkup",
                    badge: "FINTECH // AI",
                    categoryLabel: "FINTECH & AI",
                    subtitle: "FUND.lab • Software Architect",
                    description: "Automated business diagnostic platform utilizing decision trees, advanced financial algorithms, and AI-powered strategic report generation for executives and advisory firms."
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
            // 2: Akonta
            {
                id: "akonta",
                type: "Web / PWA",
                category: "web systemes",
                tech: ["PWA", "IndexedDB", "Dexie.js", "JavaScript", "Tailwind CSS", "QR Engine"],
                fr: {
                    title: "Akonta",
                    badge: "COMMERCE // PWA",
                    categoryLabel: "PWA & COMMERCE",
                    subtitle: "Co-fondateur & Développeur",
                    description: "Application PWA 100% offline-first pour commerçants et TPE. Stockage local IndexedDB (Dexie.js), synchronisation réseau transparente, génération de QR codes, suivi des ventes et impression d'étiquettes."
                },
                en: {
                    title: "Akonta",
                    badge: "RETAIL // PWA",
                    categoryLabel: "PWA & RETAIL",
                    subtitle: "Co-founder & Developer",
                    description: "100% offline-first PWA for small merchants. Local IndexedDB storage (Dexie.js), background network sync, instant search, QR code generation, sales metrics, and label printing."
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
            // 3: Le Transporteur
            {
                id: "le-transporteur",
                type: "Mobile",
                category: "mobile",
                tech: ["Flutter", "Dart", "Monorepo", "Google Maps API", "Hive DB", "REST API"],
                fr: {
                    title: "Le Transporteur",
                    badge: "LOGISTIQUE // FLOTTE",
                    categoryLabel: "MOBILE & LOGISTIQUE",
                    subtitle: "Développeur Mobile",
                    description: "Suite logistique mobile complète (Client, Livreur, Superviseur) avec géolocalisation en direct, calcul d'itinéraires adapté au réseau routier et négociation de tarification en temps réel."
                },
                en: {
                    title: "Le Transporteur",
                    badge: "LOGISTICS // FLEET",
                    categoryLabel: "MOBILE & LOGISTICS",
                    subtitle: "Mobile Developer",
                    description: "Comprehensive delivery and dispatch mobile suite (Client, Courier, Fleet Supervisor) featuring live GPS tracking, optimized route calculations, and real-time fee negotiation."
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
            // 4: BiodivCenter (GIZ)
            {
                id: "biodivcenter",
                type: "Web / Mobile",
                category: "systemes web",
                tech: ["Laravel", "Leaflet.js", "MySQL", "Flutter", "iNaturalist API"],
                fr: {
                    title: "BiodivCenter",
                    badge: "GIZ // PARCS WAP",
                    categoryLabel: "CONSERVATION / CRITIQUE",
                    subtitle: "GIZ Bénin • 2021-2024",
                    description: "Monitoring de la faune et valorisation des espèces pour les réserves transfrontalières WAP. Télémétrie drones, cartographie Leaflet et synchronisation en direct avec l'API iNaturalist."
                },
                en: {
                    title: "BiodivCenter",
                    badge: "GIZ // WAP PARKS",
                    categoryLabel: "CONSERVATION / CRITICAL",
                    subtitle: "GIZ Benin • 2021-2024",
                    description: "Wildlife monitoring and biodiversity census for transboundary protected areas. Drone telemetry, Leaflet GIS mapping, and live integration with the iNaturalist API."
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
            // 5: iKnow (Maison des Tortues)
            {
                id: "iknow",
                type: "Web",
                category: "systemes web",
                tech: ["Laravel", "AWS S3", "Bootstrap", "Chart.js", "REST APIs", "MySQL"],
                fr: {
                    title: "IKnow — Audit Terrain",
                    badge: "ONG PARTENAIRES",
                    categoryLabel: "SYSTÈME & DONNÉES",
                    subtitle: "Maison des Tortues • 2024-2025",
                    description: "Suivi transparent des activités opérationnelles pour consortiums d'ONG. Indexation instantanée de rapports volumineux avec compression sur stockage objet AWS S3."
                },
                en: {
                    title: "IKnow — Field Audit",
                    badge: "PARTNER NGOS",
                    categoryLabel: "SYSTEMS & DATA",
                    subtitle: "Maison des Tortues • 2024-2025",
                    description: "Transparent operational tracking system for conservation NGO coalitions. Rapid report indexing, AWS S3 object storage compression, and executive dashboards."
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
            // 6: Jande & Exam (DYRA)
            {
                id: "jande-exam",
                type: "Web",
                category: "web systemes",
                tech: ["Laravel", "Livewire", "Alpine.js", "SQLite", "Bootstrap"],
                fr: {
                    title: "Jande & Exam",
                    badge: "ÉDUCATION LOCALE",
                    categoryLabel: "PÉDAGOGIE & TEST",
                    subtitle: "DYRA ONG • 2025",
                    description: "Système d'évaluation de compétences et d'acquisition en langue peulh adapté aux agents de terrain sans bagage technique préalable. Résilient en basse connectivité."
                },
                en: {
                    title: "Jande & Exam",
                    badge: "LOCAL EDUCATION",
                    categoryLabel: "PEDAGOGY & TESTING",
                    subtitle: "DYRA NGO • 2025",
                    description: "Competency evaluation and local language (Fulani/Peulh) e-learning platform adapted for frontline field staff with zero technical prerequisites. Low-bandwidth optimized."
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
            // 7: Grid Generator
            {
                id: "grid-generator",
                type: "Web",
                category: "web",
                tech: ["TypeScript", "Next.js", "Tailwind CSS", "Open Source"],
                fr: {
                    title: "Grid Generator",
                    badge: "DEV TOOLING",
                    categoryLabel: "OUTIL ARCHITECTE",
                    subtitle: "Projet personnel • Open Source",
                    description: "Générateur visuel de grilles CSS interactives et paramétrables avec drag-and-drop fluide pour faciliter la composition de mises en page responsives ultra-légères."
                },
                en: {
                    title: "Grid Generator",
                    badge: "DEV TOOLING",
                    categoryLabel: "ARCHITECT TOOL",
                    subtitle: "Personal project • Open Source",
                    description: "Interactive visual CSS grid generator with intuitive drag-and-drop mechanics for composing high-performance responsive web layouts."
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
            // 8: Beninfy Mobile
            {
                id: "beninfy",
                type: "Mobile",
                category: "mobile",
                tech: ["Flutter", "Dart", "Google Maps API", "Figma", "REST"],
                fr: {
                    title: "Beninfy Mobile",
                    badge: "CULTURE // BÉNIN",
                    categoryLabel: "MOBILE & CULTURE",
                    subtitle: "Freelance • 2023",
                    description: "Application mobile de covoiturage et découverte culturelle avec guidage cartographique Google Maps et communication API REST, intégrée d'après maquettes Figma."
                },
                en: {
                    title: "Beninfy Mobile",
                    badge: "CULTURE // BENIN",
                    categoryLabel: "MOBILE & CULTURE",
                    subtitle: "Freelance • 2023",
                    description: "Carpooling and cultural discovery mobile app featuring interactive Google Maps navigation and resilient REST API integration, built from Figma designs."
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

        // Texts for multilingual support (Full synchronization)
        texts: {
            fr: {
                nav: {
                    focus: "Focus",
                    featured: "Projet Phare",
                    doctrine: "Doctrine",
                    projects: "Réalisations",
                    parcours: "Parcours",
                    stack: "Stack",
                    contact: "Contact",
                    cta: "Initier un Projet"
                },
                hero: {
                    role: "ARCHITECTE LOGICIEL & DÉVELOPPEUR FULL-STACK",
                    badgeSecondary: "[GIZ / PARCS WAP / ONG] // EDGE & OFFLINE-FIRST",
                    titlePart1: "CONCEVOIR DES SYSTÈMES D'EXCEPTION.",
                    titlePart2: "BÂTIR POUR",
                    titleHighlight: "DURER.",
                    subtitleMain: "Je conçois et développe des architectures web et mobiles sur-mesure pour les entreprises et visions ambitieuses.",
                    subtitleSub: "Celles qui refusent le générique, exigent une rigueur technique absolue et veulent marquer les esprits par des solutions qui racontent une vraie histoire.",
                    premiseLabel: "// PRÉMISSE OPÉRATIONNELLE",
                    premiseMode: "STRICT-MODE",
                    premiseTextP1: "5+ ans d'ingénierie forgés face aux contraintes du monde réel : institutions internationales (GIZ), régies de presse, FinTech et commerce de proximité.",
                    premiseTextP2: "Des systèmes de suivi, outils de collecte et systèmes d'aide à la décision aux PWA, passant par l'intégration de WebTV et passerelles de paiement. De l'intégration de flux structurés par IA/LLM aux interfaces adaptées aux utilisateurs déscolarisés : pas de dépendances superflues. Du code sobre, mesurable et directement utile à ceux qui l’opèrent.",
                    ctaProjects: "DÉCOUVRIR LES RÉALISATIONS",
                    ctaContact: "ÉCHANGER",
                    metrics: [
                        { label: "EXPÉRIENCE TERRAIN", tag: "[VÉRIFIÉ]", val: "05", unit: "ANS", desc: "Bénin • Niger • Burkina Faso" },
                        { label: "SOBRIÉTÉ ARCHITECTURALE", tag: "[STRICT]", val: "00", unit: "DÉP.", desc: "Zéro abonnement SaaS captif imposé" },
                        { label: "OBJECTIF FINAL", tag: "[MISSION]", val: "100", unit: "%", desc: "Autonomie totale des équipes locales" }
                    ]
                },
                featured: {
                    tag: "SÉLECTION FOCUS // PROJET PHARE",
                    title: "FIELDOZ — IMPACT RÉEL & TÉLÉMÉTRIE",
                    ref: "REF: ARCH-CASE-01-FLDOZ",
                    sub: "// PLATEFORME SAAS D'IMPACT SOCIAL",
                    heading: "FieldOz — Donner du relief à l'impact social",
                    description: "Plateforme SaaS conçue pour transformer des données terrain complexes en récits visuels et rapports d'impact incontestables. Une architecture pensée pour offrir une clarté absolue aux bailleurs de fonds et aux équipes sur le terrain.",
                    quoteTitle: "EXCELLENCE TECHNIQUE & TERRAIN",
                    quoteText: "« Synthétiser l'essentiel, rendre tangibles les données critiques et garantir une autonomie totale de pilotage sans intermédiaire. »",
                    indicators: [
                        { label: "TEMPS CHARGE", val: "< 0.4s" },
                        { label: "CONSO DATA", val: "-74%" },
                        { label: "DISPONIBILITÉ", val: "99.98%" }
                    ],
                    syncStatus: "SYNC HORS-LIGNE VÉRIFIÉE",
                    liveLink: "Explorer le dépôt GitLab"
                },
                doctrine: {
                    tag: "DOCTRINE D'INGÉNIERIE // RÈGLES D'AIRAIN",
                    title: "L'ANTITHÈSE DU CODE VERBEUX.",
                    desc: "Les environnements complexes et le travail terrain ne pardonnent pas la complaisance technique. Chaque choix d'architecture obéit à 4 principes intangibles :",
                    rules: [
                        { num: "01", title: "Sobriété Radicale", text: "Chaque dépendance npm ou composer est une dette future. Si un composant natif ou une fonction Vanilla fait l'affaire, aucune librairie tierce n'est admise." },
                        { num: "02", title: "Résilience Déconnectée", text: "Le réseau parfait n'existe pas. Les applications sont pensées pour collecter, stocker en local (IndexedDB/SQLite) et resynchroniser sans perte à la reconnexion." },
                        { num: "03", title: "Autonomie de l'Opérateur", text: "Une solution n'est achevée que si le client ou l'équipe terrain peut la piloter, la maintenir et l'exporter sans jamais dépendre de son créateur." },
                        { num: "04", title: "Précision Mesurable", text: "Pas d'effets cosmétiques superficiels. La valeur se mesure en secondes économisées lors des saisies et en clarté immédiate des décisions métiers." }
                    ]
                },
                projectsSection: {
                    tag: "RÉALISATIONS SUR-MESURE // SÉLECTION SÉLECTIVE",
                    title: "DES SYSTÈMES ÉPROUVÉS EN PRODUCTION.",
                    subtitle: "Sélection d'architectures logicielles, PWA offline-first, applications mobiles et plateformes de données déployées face à des exigences métiers strictes.",
                    filters: {
                        all: "TOUS LES SYSTÈMES",
                        web: "WEB & SAAS",
                        mobile: "MOBILE",
                        systemes: "SYSTÈMES & ONG"
                    },
                    photosCount: "photos",
                    viewGitlab: "Dépôt GitLab",
                    viewSolution: "Voir la solution"
                },
                parcours: {
                    tag: "EXPÉRIENCE & VÉRITÉ BRUTE",
                    title: "UNE RIGUEUR NÉE DES CONTRAINTES RÉELLES.",
                    p1: "Mon approche du développement n'a pas débuté dans des bureaux aseptisés avec de la fibre optique illimitée. Elle a été forgée en autodidacte exigeant face à des connexions instables, des matériels hétéroclites et la nécessité absolue de faire fonctionner les choses du premier coup.",
                    p2: "Lorsqu'on déploie une solution pour les agents des parcs WAP ou pour des équipes de santé publique en brousse, on comprend très vite qu'un bogue n'est pas un simple « ticket Jira » : c'est une mission arrêtée, un rapport financier bloqué ou une journée de patrouille perdue.",
                    quote: "« Épurer l'architecture, éliminer le superflu, livrer du code net que n'importe quelle équipe locale pourra s'approprier sans dépendre d'un tiers. »",
                    countriesCount: "03 PAYS",
                    countriesList: "Bénin • Burkina • Niger",
                    mvpDelay: "1 SEMAINE",
                    mvpDesc: "Délai moyen MVP opérationnel",
                    timelineTitle: "// CHRONOLOGIE DES RESPONSABILITÉS & DÉPLOIEMENTS",
                    educationTitle: "// FORMATION ACADÉMIQUE & CERTIFICATIONS"
                },
                experience: {
                    title: "Expérience professionnelle",
                    items: [
                        {
                            position: "Architecte Logiciel",
                            company: "FUND.lab",
                            period: "Janvier 2026 – Maintenant",
                            tag: "FINTECH & IA",
                            description: "Conception et développement de Business Checkup (diagnostic d’entreprise automatisé par arbres de décision, calculs financiers et génération de rapports stratégiques via IA) et architecture de Business Assist, la plateforme centrale de pilotage des missions du cabinet."
                        },
                        {
                            position: "Co-fondateur & Développeur",
                            company: "Akonta",
                            period: "Septembre 2025 – Maintenant",
                            tag: "PWA OFFLINE-FIRST",
                            description: "Architecture d’une PWA offline-first de gestion de stocks pour commerçants. Stockage local via IndexedDB (Dexie.js), synchronisation réseau, recherche instantanée, génération de QR codes, suivi des ventes et édition d’étiquettes."
                        },
                        {
                            position: "Développeur Mobile",
                            company: "Le Transporteur",
                            period: "Février 2026 – Juin 2026",
                            tag: "MOBILITÉ & FLOTTE",
                            description: "Conception et développement d’une application mobile complète mettant en liaison les livreurs de l’entreprise et ses clients, avec suivi de livraison, géolocalisation et gestion de flotte."
                        },
                        {
                            position: "Développeur Fullstack",
                            company: "Maison des Tortues",
                            period: "Avril 2024 – Mai 2025",
                            tag: "CLOUD & TERRAIN",
                            description: "Développement et maintenance de la plateforme iKnow (collecte de données terrain, suivi d’activités, aide à la décision). Configuration du stockage média sur AWS S3, déploiement cPanel, documentation technique et formation utilisateurs."
                        },
                        {
                            position: "Développeur Fullstack Lead",
                            company: "Projet RBT-WAP (GIZ)",
                            period: "Juin 2021 – Mars 2024",
                            tag: "INTERNATIONAL // PARCS WAP",
                            description: "Conception et développement de plateformes d’évaluation et de collecte de données (BiodivCenter, Eval-FSOA, WAP-Training). Intégration API (iNaturalist, REST), moteurs de scoring, cartographie interactive. Formation des utilisateurs, traitement d’images 360 et pilotage drone Mavic 2 Pro."
                        },
                        {
                            position: "Consultant Web & SEO",
                            company: "SAF Consulting & JHS Corporate",
                            period: "Mai – Septembre 2023",
                            tag: "PRESSE & WEBTV",
                            description: "Refonte de 3 plateformes de presse sous WordPress. Automatisation des newsletters, intégration Google Actualités. Conception d’une chaîne TV en ligne (WebTV) avec système de diffusion vidéo automatisé et gestion de régies publicitaires (Afrikaad)."
                        },
                        {
                            position: "Développeur Mobile Freelance",
                            company: "Beninfy",
                            period: "Avril – Décembre 2023",
                            tag: "FLUTTER & CARTOGRAPHIE",
                            description: "Intégration frontend mobile Flutter d’après maquettes Figma pour une application de covoiturage. Intégration de l’API Google Maps et communication REST."
                        }
                    ]
                },
                education: {
                    title: "Formation académique & certifications",
                    items: [
                        {
                            title: "Full Stack Web Development MERN",
                            school: "Oak Academy | Udemy",
                            period: "2022–2024",
                            description: "Certification obtenue en Novembre 2024. Architecture MERN complète, API REST, state management et architectures réactives."
                        },
                        {
                            title: "Licence en Génie Logiciel",
                            school: "IFRI — Université d'Abomey-Calavi (UAC)",
                            period: "2015–2019",
                            description: "Diplôme obtenu en Septembre 2019. Conception logicielle, modélisation UML, bases de données relationnelles et algorithmique."
                        },
                        {
                            title: "Formation Préparatoire Math-Info",
                            school: "IMSP — Institut de Mathématiques et de Sciences Physiques",
                            period: "2013–2015",
                            description: "Bases théoriques solides en mathématiques discrètes, algèbre linéaire et logique informatique."
                        }
                    ]
                },
                skillsSection: {
                    tag: "MAÎTRISE TECHNIQUE DIRECTE",
                    title: "LA BOÎTE À OUTILS SANS ARTIFICE.",
                    categories: {
                        languages: "LANGAGES & FRAMEWORKS",
                        databases: "BASES DE DONNÉES & API",
                        tools: "OUTILS, CLOUD & SYSTÈMES",
                        methodology: "MÉTHODOLOGIES & EXPERTISES"
                    }
                },
                contact: {
                    tag: "CANAL DIRECT // SANS INTERMÉDIAIRE",
                    title: "PARLER D'UN SYSTÈME À BÂTIR.",
                    subtitle: "Pas de standardiste, pas de commercial. Vos messages arrivent directement sur mon terminal de travail.",
                    directCardTitle: "// COORDONNÉES DIRECTES",
                    phone: "+229 01 6151-2491",
                    email: "assogbamanuel6@gmail.com",
                    location: "Cotonou, Bénin (UTC+1) — Remote Worldwide",
                    form: {
                        title: "FORMULAIRE DE CONTACT",
                        nameLabel: "NOM & PRÉNOM",
                        namePlaceholder: "ex: Dr. Sarah Mensah",
                        emailLabel: "ADRESSE EMAIL PROFESSIONNELLE",
                        emailPlaceholder: "sarah.mensah@institution.org",
                        projectTypeLabel: "NATURE DU SYSTÈME",
                        projectOptions: {
                            systeme: "Système de collecte / Plateforme métier",
                            pwa: "PWA Offline-First / Commerce",
                            mobile: "Application Mobile (Flutter)",
                            audit: "Audit d'architecture / Optimisation"
                        },
                        messageLabel: "DÉTAILS DU PROJET OU DE LA MISSION",
                        messagePlaceholder: "Contexte, contraintes réseau éventuelles, objectifs et calendrier envisagé...",
                        submitBtn: "TRANSMETTRE LA DEMANDE",
                        submittingBtn: "TRANSMISSION EN COURS...",
                        successMsg: "Message transmis avec succès. Accusé de réception sous 24h ouvrées.",
                        errorMsg: "Erreur lors de la transmission. Merci de me contacter directement par email."
                    }
                },
                footer: {
                    copyright: "Manuel Assogba. Tous droits réservés. Bâtisseur de Systèmes Utiles.",
                    status: "STATUS: SYSTÈMES OPÉRATIONNELS"
                }
            },

            en: {
                nav: {
                    focus: "Focus",
                    featured: "Featured Project",
                    doctrine: "Doctrine",
                    projects: "Projects",
                    parcours: "Experience",
                    stack: "Stack",
                    contact: "Contact",
                    cta: "Initiate a Project"
                },
                hero: {
                    role: "SOFTWARE ARCHITECT & FULL-STACK DEVELOPER",
                    badgeSecondary: "[GIZ / WAP PARKS / NGOS] // EDGE & OFFLINE-FIRST",
                    titlePart1: "ENGINEERING EXCEPTIONAL SYSTEMS.",
                    titlePart2: "BUILT TO",
                    titleHighlight: "LAST.",
                    subtitleMain: "I design and build tailored web and mobile architectures for ambitious organizations and visions.",
                    subtitleSub: "Those that reject the generic, demand uncompromising technical rigor, and aim to make a lasting impression through systems that tell an authentic story.",
                    premiseLabel: "// OPERATIONAL PREMISE",
                    premiseMode: "STRICT-MODE",
                    premiseTextP1: "5+ years of software engineering forged in the face of real-world constraints: international organizations (GIZ), press syndicates, FinTech, and local retail.",
                    premiseTextP2: "From monitoring systems, data collection tools, and decision-support platforms to offline-first PWAs, WebTV broadcasts, and payment gateways. From AI/LLM structured workflows to interfaces tailored for non-literate field staff: no superfluous dependencies. Frugal, measurable, durable code that directly serves those who operate it.",
                    ctaProjects: "EXPLORE ACHIEVEMENTS",
                    ctaContact: "GET IN TOUCH",
                    metrics: [
                        { label: "FIELD EXPERIENCE", tag: "[VERIFIED]", val: "05", unit: "YRS", desc: "Benin • Niger • Burkina Faso" },
                        { label: "ARCHITECTURAL FRUGALITY", tag: "[STRICT]", val: "00", unit: "DEP.", desc: "Zero forced captive SaaS subscriptions" },
                        { label: "PRIMARY OBJECTIVE", tag: "[MISSION]", val: "100", unit: "%", desc: "Total autonomy for local operational teams" }
                    ]
                },
                featured: {
                    tag: "FOCUS SELECTION // FEATURED PROJECT",
                    title: "FIELDOZ — REAL IMPACT & TELEMETRY",
                    ref: "REF: ARCH-CASE-01-FLDOZ",
                    sub: "// SOCIAL IMPACT SAAS PLATFORM",
                    heading: "FieldOz — Bringing Depth to Social Impact",
                    description: "SaaS platform engineered to transform complex field data into undeniable visual impact narratives. Tailored to provide absolute clarity to international donors and field monitoring teams.",
                    quoteTitle: "TECHNICAL & FIELD EXCELLENCE",
                    quoteText: "“Synthesizing the essential, making critical data tangible, and securing complete operational autonomy with zero middlemen.”",
                    indicators: [
                        { label: "LOAD TIME", val: "< 0.4s" },
                        { label: "DATA CONSUMPTION", val: "-74%" },
                        { label: "AVAILABILITY", val: "99.98%" }
                    ],
                    syncStatus: "OFFLINE SYNC VERIFIED",
                    liveLink: "Explore GitLab Repository"
                },
                doctrine: {
                    tag: "ENGINEERING DOCTRINE // IRON RULES",
                    title: "THE ANTITHESIS OF BLOATED CODE.",
                    desc: "Harsh field environments and real-world constraints forgive zero technical complacency. Every architectural decision adheres to 4 immutable principles:",
                    rules: [
                        { num: "01", title: "Radical Frugality", text: "Every npm or composer package is tomorrow's technical debt. If a native API or Vanilla JS solves it, zero third-party libraries are admitted." },
                        { num: "02", title: "Offline Resilience", text: "The perfect network does not exist. Systems are engineered to collect, store locally (IndexedDB/SQLite), and seamlessly resync without data loss upon reconnect." },
                        { num: "03", title: "Operator Autonomy", text: "A system is only complete when local teams can operate, maintain, and export their data with zero reliance on its creator." },
                        { num: "04", title: "Measurable Precision", text: "No superficial cosmetic gimmicks. True value is measured in minutes saved during field data entry and crystal-clear business decisions." }
                    ]
                },
                projectsSection: {
                    tag: "BESPOKE SYSTEMS // SELECTIVE SHOWCASE",
                    title: "PROVEN IN PRODUCTION ENVIRONMENTS.",
                    subtitle: "A curated selection of software architectures, offline-first PWAs, mobile applications, and mission-critical data systems deployed under rigorous operational demands.",
                    filters: {
                        all: "ALL SYSTEMS",
                        web: "WEB & SAAS",
                        mobile: "MOBILE",
                        systemes: "SYSTEMS & NGOS"
                    },
                    photosCount: "photos",
                    viewGitlab: "GitLab Repository",
                    viewSolution: "View Solution"
                },
                parcours: {
                    tag: "EXPERIENCE & GROUND TRUTH",
                    title: "RIGOR FORGED BY REAL-WORLD CONSTRAINTS.",
                    p1: "My approach to engineering did not originate in sanitized tech hubs with unlimited gigabit fiber. It was forged as a demanding autodidact confronting erratic connectivity, heterogeneous hardware, and the absolute necessity of getting things right on the first try.",
                    p2: "Deploying software for wildlife rangers in the WAP national parks or health teams in rural bushlands quickly teaches you that a bug is not a mere Jira ticket: it is a halted mission, an obstructed donor report, or a lost patrol day.",
                    quote: "“Strip down the architecture, eliminate bloat, and deliver clean code that any local team can own without external dependency.”",
                    countriesCount: "03 COUNTRIES",
                    countriesList: "Benin • Burkina • Niger",
                    mvpDelay: "1 WEEK",
                    mvpDesc: "Average operational MVP turnaround",
                    timelineTitle: "// CHRONOLOGY OF RESPONSIBILITIES & DEPLOYMENTS",
                    educationTitle: "// ACADEMIC EDUCATION & CERTIFICATIONS"
                },
                experience: {
                    title: "Professional Experience",
                    items: [
                        {
                            position: "Software Architect",
                            company: "FUND.lab",
                            period: "January 2026 – Present",
                            tag: "FINTECH & AI",
                            description: "Design and development of Business Checkup (automated company diagnostic powered by decision trees, financial algorithms, and AI-generated strategic reports) and architecture of Business Assist, the firm’s core operations platform."
                        },
                        {
                            position: "Co-founder & Developer",
                            company: "Akonta",
                            period: "September 2025 – Present",
                            tag: "OFFLINE-FIRST PWA",
                            description: "Architecture of an offline-first PWA for small business inventory management. Local storage via IndexedDB (Dexie.js), background network sync, instant search, QR code generation, sales metrics, and barcode label printing."
                        },
                        {
                            position: "Mobile Developer",
                            company: "Le Transporteur",
                            period: "February 2026 – June 2026",
                            tag: "MOBILITY & FLEET",
                            description: "Design and development of a full-featured delivery mobile app connecting couriers with clients, complete with live delivery tracking, GPS navigation, and fleet management."
                        },
                        {
                            position: "Fullstack Developer",
                            company: "Maison des Tortues",
                            period: "April 2024 – May 2025",
                            tag: "CLOUD & FIELD",
                            description: "Development and maintenance of the iKnow platform (field data collection, activity monitoring, decision support). AWS S3 object storage configuration, cPanel deployment, technical documentation, and user onboarding."
                        },
                        {
                            position: "Lead Fullstack Developer",
                            company: "RBT-WAP Project (GIZ)",
                            period: "June 2021 – March 2024",
                            tag: "INTERNATIONAL // WAP PARKS",
                            description: "Design and deployment of data collection and evaluation platforms (BiodivCenter, Eval-FSOA, WAP-Training). API integrations (iNaturalist, REST), automated scoring engines, interactive mapping. Ranger training, 360° imagery, and Mavic 2 Pro drone operations."
                        },
                        {
                            position: "Web & SEO Consultant",
                            company: "SAF Consulting & JHS Corporate",
                            period: "May – September 2023",
                            tag: "PRESS & WEBTV",
                            description: "Redesign of 3 digital press platforms on WordPress. Automated newsletters and Google News integration. Engineered an online TV channel (WebTV) with automated video broadcasts and digital advertising networks (Afrikaad)."
                        },
                        {
                            position: "Freelance Mobile Developer",
                            company: "Beninfy",
                            period: "April – December 2023",
                            tag: "FLUTTER & MAPS",
                            description: "Flutter mobile frontend integration from Figma design systems for a carpooling and tourism app. Google Maps API integration and resilient REST communication."
                        }
                    ]
                },
                education: {
                    title: "Academic Education & Certifications",
                    items: [
                        {
                            title: "Full Stack Web Development MERN",
                            school: "Oak Academy | Udemy",
                            period: "2022–2024",
                            description: "Certification obtained in November 2024. Full MERN stack architecture, RESTful API design, state management, and reactive systems."
                        },
                        {
                            title: "Bachelor's Degree in Software Engineering",
                            school: "IFRI — University of Abomey-Calavi (UAC)",
                            period: "2015–2019",
                            description: "Graduated in September 2019. Software architecture, UML systems modeling, relational database design, and algorithmic problem-solving."
                        },
                        {
                            title: "Math & Computer Science Preparatory Program",
                            school: "IMSP — Institute of Mathematics and Physical Sciences",
                            period: "2013–2015",
                            description: "Rigorous theoretical foundations in discrete mathematics, linear algebra, and computational logic."
                        }
                    ]
                },
                skillsSection: {
                    tag: "DIRECT TECHNICAL MASTERY",
                    title: "THE UNVARNISHED TOOLBOX.",
                    categories: {
                        languages: "LANGUAGES & FRAMEWORKS",
                        databases: "DATABASES & APIS",
                        tools: "TOOLS, CLOUD & SYSTEMS",
                        methodology: "METHODOLOGIES & EXPERTISE"
                    }
                },
                contact: {
                    tag: "DIRECT CHANNEL // ZERO MIDDLEMEN",
                    title: "LET'S DISCUSS A SYSTEM TO BUILD.",
                    subtitle: "No switchboards, no account managers. Your message reaches my workstation directly.",
                    directCardTitle: "// DIRECT CONTACT DETAILS",
                    phone: "+229 01 6151-2491",
                    email: "assogbamanuel6@gmail.com",
                    location: "Cotonou, Benin (UTC+1) — Remote Worldwide",
                    form: {
                        title: "CONTACT FORM",
                        nameLabel: "FULL NAME",
                        namePlaceholder: "e.g. Dr. Sarah Mensah",
                        emailLabel: "WORK EMAIL ADDRESS",
                        emailPlaceholder: "sarah.mensah@institution.org",
                        projectTypeLabel: "SYSTEM NATURE",
                        projectOptions: {
                            systeme: "Data Collection / Operations Platform",
                            pwa: "Offline-First PWA / Retail",
                            mobile: "Mobile App (Flutter)",
                            audit: "Architecture Audit / Performance"
                        },
                        messageLabel: "PROJECT DETAILS & SCOPE",
                        messagePlaceholder: "Context, network constraints, key objectives, and expected timeline...",
                        submitBtn: "TRANSMIT INQUIRY",
                        submittingBtn: "TRANSMITTING...",
                        successMsg: "Message transmitted successfully. Acknowledgment sent within 24 business hours.",
                        errorMsg: "Error during transmission. Please contact me directly via email."
                    }
                },
                footer: {
                    copyright: "Manuel Assogba. All rights reserved. Useful Systems Builder.",
                    status: "STATUS: SYSTEMS OPERATIONAL"
                }
            }
        },

        // Filter handler
        setFilter(filter) {
            this.activeFilter = filter;
        },

        filteredProjects() {
            // Skip index 0 (featured project FieldOz)
            const rest = this.projects.slice(1);
            if (this.activeFilter === 'all') return rest;
            if (this.activeFilter === 'web') return rest.filter(p => (p.category || p.type.toLowerCase()).includes('web'));
            if (this.activeFilter === 'mobile') return rest.filter(p => (p.category || p.type.toLowerCase()).includes('mobile'));
            if (this.activeFilter === 'systemes') return rest.filter(p => (p.category || p.type.toLowerCase()).includes('systemes') || (p.type.toLowerCase()).includes('système'));
            return rest;
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
            document.documentElement.lang = this.currentLang;
        },

        setLanguage(lang) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            document.documentElement.lang = lang;
        },

        init() {
            // Restore theme
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            // Restore language
            const savedLang = localStorage.getItem('lang') || 'fr';
            this.currentLang = savedLang;
            document.documentElement.lang = savedLang;

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
            this.scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            this.showNav = scrollTop > 100;
            this.showBackToTop = scrollTop > 500;
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
        },

        validateForm() {
            this.errors = {};

            if (!this.form.name.trim()) {
                this.errors.name = this.currentLang === 'fr' ? 'Le nom est requis' : 'Name is required';
            }

            if (!this.form.email.trim()) {
                this.errors.email = this.currentLang === 'fr' ? 'L\'email est requis' : 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
                this.errors.email = this.currentLang === 'fr' ? 'Email invalide' : 'Invalid email';
            }

            if (!this.form.message.trim()) {
                this.errors.message = this.currentLang === 'fr' ? 'Le message est requis' : 'Message is required';
            }

            return Object.keys(this.errors).length === 0;
        },

        async submitForm() {
            if (!this.validateForm()) return;

            this.isSubmitting = true;
            this.submitMessage = '';

            try {
                // Simulate form submission
                await new Promise(resolve => setTimeout(resolve, 1500));

                this.submitSuccess = true;
                this.submitMessage = this.texts[this.currentLang].contact.form.successMsg;

                // Reset form
                this.form = { name: '', email: '', project_type: 'systeme', message: '' };

                // Hide success message after 6 seconds
                setTimeout(() => {
                    this.submitMessage = '';
                }, 6000);

            } catch (error) {
                this.submitSuccess = false;
                this.submitMessage = this.texts[this.currentLang].contact.form.errorMsg;
            }

            this.isSubmitting = false;
        }
    };
}