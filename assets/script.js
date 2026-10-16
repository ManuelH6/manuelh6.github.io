function app() {
    return {
        currentLang: 'fr',
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

        // Projects data
        projects: [
            {
                fr: {
                    title: "FieldOz",
                    description: "Transformez les données complexes en rapports d'impact visuels. La clarté au service du social."
                },
                en: {
                    title: "FieldOz",
                    description: "Transform complex data into visual impact reports. Clarity serving social missions."
                },
                type: "Web",
                tech: ["Tailwind", "Alpine", "Laravel", "Livewire"],
                images: [
                    "assets/projects/fieldoz/1.png",
                    "assets/projects/fieldoz/2.png",
                    "assets/projects/fieldoz/3.png",
                    "assets/projects/fieldoz/4.png",
                    "assets/projects/fieldoz/5.png",
                    "assets/projects/fieldoz/6.png",
                ],
                links: {
                    github: null,
                    gitlab: "https://gitlab.com/learnperso/fieldoz/",
                    demo: null,
                }
            },
            {
                fr: {
                    title: "Le Transporteur",
                    description: "Plateforme complète de logistique et de livraison (Client, Livreur, Admin) avec système de négociation de prix en temps réel."
                },
                en: {
                    title: "Le Transporteur",
                    description: "Comprehensive urban logistics and delivery platform (Client, Courier, Admin) featuring a real-time price negotiation system."
                },
                type: "Mobile",
                category: "mobile",
                tech: ["Flutter", "Dart", "Monorepo", "Hive", "Geolocator", "Maps"],
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
                fr: {
                    title: "Grid Generator",
                    description: "Générateur de grilles CSS avec interface drag-and-drop pour layouts complexes."
                },
                en: {
                    title: "Grid Generator",
                    description: "CSS Grid generator with drag-and-drop for complex layout prototyping."
                },
                type: "Web",
                category: "web",
                tech: ["JavaScript", "TypeScript", "Tailwind CSS", "Next.js"],
                images: [
                    "assets/projects/gridcss/1.png",
                    "assets/projects/gridcss/2.png",
                    "assets/projects/gridcss/3.png",
                ],
                links: {
                    github: null,
                    gitlab: "https://gitlab.com/learnperso/react/grid-generator/",
                    demo: null
                }
            },
            {
                fr: {
                    title: "BiodivCenter",
                    description: "Monitoring de la biodiversité et valorisation des espèces pour centres de conservation."
                },
                en: {
                    title: "BiodivCenter",
                    description: "Biodiversity monitoring platform for tracking and protecting local species."
                },
                type: "Web / Mobile",
                category: "systemes web",
                tech: ["Laravel", "Bootstrap", "MySQL/SQLite", "Leaflet.js", "Flutter", "iNaturalist API"],
                images: [
                    "assets/projects/biodivcenter/1.jpeg",
                    "assets/projects/biodivcenter/2.png",
                    "assets/projects/biodivcenter/3.png",
                ],
                links: {
                    github: null,
                    gitlab: "https://gitlab.com/assogbamanuel6/biodiversite-rbtwap-web",
                    demo: null
                }
            },
            {
                fr: {
                    title: "Exam",
                    description: "Évaluation des compétences via des examens gamifiés et ludiques."
                },
                en: {
                    title: "Exam",
                    description: "Platform that provides continuous skill assessment through gamified exams, enabling a fun and motivating way for learners to track their progress."
                },
                type: "Web",
                category: "web systemes",
                tech: ["Laravel", "Bootstrap", "MySQL", "JQuery", "JQuery UI"],
                images: [
                    "assets/projects/eval/1.jpeg",
                    "assets/projects/eval/2.jpeg",
                    "assets/projects/eval/3.jpeg",
                ],
                links: {
                    github: null,
                    gitlab: "https://gitlab.com/assogbamanuel6/learningapp/",
                    demo: null
                }
            },
            {
                fr: {
                    title: "iKnow",
                    description: "Suivi temps réel des activités terrain pour les ONG partenaires."
                },
                en: {
                    title: "iKnow",
                    description: "Platform that enables partner NGOs to remotely monitor and track their field activities in real time, with summary dashboards, interactive maps, and tracking of funding indicators."
                },
                type: "Web",
                category: "systemes web",
                tech: ["Laravel", "Bootstrap", "AWS S3", "Google Maps", "MySQL", "Rest API", "iNaturalist API", "Chart.js"],
                images: [
                    "assets/projects/iknow/1.png",
                    "assets/projects/iknow/2.png",
                    "assets/projects/iknow/3.png",
                ],
                links: {
                    github: null,
                    demo: "https://maisondestortues.org/nos-solutions/iknow"
                }
            },
            {
                fr: {
                    title: "Beninfy Mobile",
                    description: "Guide culturel et touristique du Bénin avec géolocalisation interactive."
                },
                en: {
                    title: "Beninfy Mobile",
                    description: "Mobile app for cultural discovery in Benin with geolocation, interactive guides, and social sharing features."
                },
                type: "Mobile",
                category: "mobile",
                tech: ["Flutter", "Dart", "Google Maps API", "Figma"],
                images: [
                    "assets/projects/beninfy/1.png",
                    "assets/projects/beninfy/2.png",
                    "assets/projects/beninfy/3.png",
                ],
                links: {
                    github: null,
                    demo: null
                }
            }
        ],

        // Texts for multilingual support
        texts: {
            fr: {
                nav: {
                    about: "À propos",
                    skills: "Compétences",
                    education: "Formation",
                    experience: "Expérience",
                    projects: "Projets",
                    contact: "Contact"
                },
                hero: {
                    title: "Solutions digitales à fort impact",
                    subtitle: "Je conçois des expériences fluides et des architectures robustes avec Laravel & React.",
                    cta: "Découvrir mon univers"
                },
                about: {
                    title: "À propos de moi",
                    content: "Développeur Full-Stack expert Laravel & JavaScript. Je livre des solutions structurées et performantes, avec une approche orientée impact et simplicité."
                },
                skills: {
                    title: "Compétences",
                    categories: {
                        languages: "Langages & Frameworks",
                        database: "Base de données & API",
                        tools: "Outils & DevOps",
                        cms: "CMS & Design",
                        methodology: "Méthodologie",
                        spoken: "Langues"
                    },
                    languages: {
                        french: "Français (natif)",
                        english: "Anglais (intermédiaire)"
                    }
                },
                education: {
                    title: "Formation",
                    items: [
                        {
                            title: "Full Stack Web Development MERN",
                            school: "Oak Academy | Udemy",
                            period: "2022–2024",
                            description: "Certificat obtenu en novembre 2024. Formation complète en développement web moderne."
                        },
                        {
                            title: "Licence Génie Logiciel",
                            school: "UAC (Bénin) | IFRI",
                            period: "2015–2019",
                            description: "Diplôme obtenu en septembre 2019. Formation en architecture logicielle et génie logiciel."
                        },
                        {
                            title: "Formation Math-Info",
                            school: "IMSP",
                            period: "2013–2015",
                            description: "Formation préparatoire en mathématiques et informatique."
                        }
                    ]
                },
                experience: {
                    title: "Expérience professionnelle",
                    items: [
                        {
                            position: "Architecte Logiciel",
                            company: "FUND.lab",
                            period: "Janvier 2026 – Maintenant",
                            description: "Conception et développement de Business Checkup (diagnostic d’entreprise automatisé par arbres de décision, calculs financiers et génération de rapports stratégiques via IA) et architecture de Business Assist, la plateforme centrale de pilotage des missions du cabinet."
                        },
                        {
                            position: "Co-fondateur & Développeur",
                            company: "Akonta",
                            period: "Septembre 2025 – Maintenant",
                            description: "Architecture d’une PWA offline-first de gestion de stocks pour commerçants. Stockage local via IndexedDB (Dexie.js), synchronisation réseau, recherche instantanée, génération de QR codes, suivi des ventes et édition d’étiquettes."
                        },
                        {
                            position: "Développeur Mobile",
                            company: "Le Transporteur",
                            period: "Février 2026 – Juin 2026",
                            description: "Conception et développement d’une application mobile complète mettant en liaison les livreurs de l’entreprise et ses clients, avec suivi de livraison, géolocalisation et gestion de flotte."
                        },
                        {
                            position: "FieldOz",
                            company: "Projet personnel",
                            period: "2025",
                            description: "Plateforme SaaS transformant des données terrain complexes en rapports d’impact visuels clairs pour les bailleurs de fonds et équipes de suivi."
                        },
                        {
                            position: "Grid Generator",
                            company: "Projet personnel",
                            period: "2025",
                            description: "Générateur visuel de grilles CSS interactives et paramétrables pour faciliter la composition de layouts responsives."
                        },
                        {
                            position: "Jande",
                            company: "DYRA",
                            period: "Mars–Avril 2025",
                            description: "Plateforme d’apprentissage en langue peulh permettant aux agents de terrain d’une ONG locale d’acquérir des notions clés et de tester leurs connaissances via des exercices QCM."
                        },
                        {
                            position: "Développeur Fullstack",
                            company: "Maison des Tortues",
                            period: "Avril 2024 – Mai 2025",
                            description: "Développement et maintenance de la plateforme iKnow (collecte de données terrain, suivi d’activités, aide à la décision). Configuration du stockage média sur AWS S3, déploiement cPanel, documentation technique et formation utilisateurs."
                        },
                        {
                            position: "Développeur Fullstack",
                            company: "Projet RBT-WAP (GIZ)",
                            period: "Juin 2021 – Mars 2024",
                            description: "Conception et développement de plateformes d’évaluation et de collecte de données (BiodivCenter, Eval-FSOA, WAP-Training). Intégration API (iNaturalist, REST), moteurs de scoring, cartographie interactive. Formation des utilisateurs, traitement d’images 360 et pilotage drone Mavic 2 Pro."
                        },
                        {
                            position: "Consultant Web & SEO",
                            company: "SAF Consulting & JHS Corporate",
                            period: "Mai – Septembre 2023",
                            description: "Refonte de 3 plateformes de presse sous WordPress. Automatisation des newsletters, intégration Google Actualités. Conception d’une chaîne TV en ligne (WebTV) avec système de diffusion vidéo automatisé et gestion de régies publicitaires (Afrikaad)."
                        },
                        {
                            position: "Développeur Mobile Freelance",
                            company: "Beninfy",
                            period: "Avril – Décembre 2023",
                            description: "Intégration frontend mobile Flutter d’après maquettes Figma pour une application de covoiturage. Intégration de l’API Google Maps et communication REST."
                        }
                    ]
                },
                projects: {
                    title: "Projets phares",
                    subtitle: "Une sélection de mes réalisations les plus significatives",
                    viewCode: "Voir le code",
                    viewDemo: "Voir le site"
                },
                softSkills: {
                    title: "Soft Skills",
                    items: [
                        "Résolution de problèmes complexes",
                        "Analyse & synthèse technique",
                        "Rédaction claire",
                        "Esprit d'équipe & autonomie",
                        "Adaptabilité ONG/entreprise/freelance",
                        "Sens du service & pédagogie"
                    ]
                },
                contact: {
                    title: "Contact",
                    formTitle: "Envoyez-moi un message",
                    infoTitle: "Informations de contact",
                    form: {
                        name: "Nom",
                        namePlaceholder: "Votre nom",
                        email: "Email",
                        emailPlaceholder: "votre@email.com",
                        message: "Message",
                        messagePlaceholder: "Votre message...",
                        submit: "Envoyer le message",
                        sending: "Envoi en cours..."
                    },
                    availability: {
                        title: "Disponibilité",
                        text: "Ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter pour discuter de vos projets."
                    }
                },
                footer: {
                    copyright: "© 2026 Tous droits réservés"
                }
            },
            en: {
                nav: {
                    about: "About",
                    skills: "Skills",
                    education: "Education",
                    experience: "Experience",
                    projects: "Projects",
                    contact: "Contact"
                },
                hero: {
                    title: "Building high-impact digital solutions",
                    subtitle: "I transform complex data into smooth, robust user experiences, leveraging advanced Laravel expertise and modern ecosystems.",
                    cta: "Discover my universe"
                },
                about: {
                    title: "About me",
                    content: "Versatile Full-Stack Developer with expertise in Laravel, JavaScript, REST APIs, and strong frontend skills (Bootstrap, Next.js, React Native). Experienced in agile workflows, Docker deployments, AWS S3, CPanel, UML. I deliver reliable, structured solutions with attention to detail. Experience spanning NGOs, companies, freelance → adaptability + service-oriented mindset."
                },
                skills: {
                    title: "Skills",
                    categories: {
                        languages: "Languages & Frameworks",
                        database: "Database & API",
                        tools: "Tools & DevOps",
                        cms: "CMS & Design",
                        methodology: "Methodology",
                        spoken: "Languages"
                    },
                    languages: {
                        french: "French (native)",
                        english: "English (intermediate)"
                    }
                },
                education: {
                    title: "Education",
                    items: [
                        {
                            title: "Full Stack Web Development MERN",
                            school: "Oak Academy | Udemy",
                            period: "2022–2024",
                            description: "Certificate obtained in November 2024. Comprehensive training in modern web development."
                        },
                        {
                            title: "Software Engineering Degree",
                            school: "UAC (Benin) | IFRI",
                            period: "2015–2019",
                            description: "Degree obtained in September 2019. Training in software architecture and software engineering."
                        },
                        {
                            title: "Math-Computer Science Training",
                            school: "IMSP",
                            period: "2013–2015",
                            description: "Preparatory training in mathematics and computer science."
                        }
                    ]
                },
                experience: {
                    title: "Professional experience",
                    items: [
                        {
                            position: "Software Architect",
                            company: "FUND.lab",
                            period: "January 2026 – Present",
                            description: "Design and development of Business Checkup (automated company diagnostic using decision trees, financial algorithms and AI-structured strategic reports) and architecture of Business Assist, the firm’s central operations platform."
                        },
                        {
                            position: "Co-founder & Developer",
                            company: "Akonta",
                            period: "September 2025 – Present",
                            description: "Architecture of an offline-first PWA for inventory management targeting small retailers. Local storage via IndexedDB (Dexie.js), network sync, instant search, QR code generation, sales tracking and label printing."
                        },
                        {
                            position: "Mobile Developer",
                            company: "Le Transporteur",
                            period: "February 2026 – June 2026",
                            description: "Design and development of a full-featured mobile delivery app connecting the company’s couriers with its clients, featuring real-time tracking, geolocation and fleet management."
                        },
                        {
                            position: "FieldOz",
                            company: "Personal project",
                            period: "2025",
                            description: "SaaS platform that transforms complex field data into clear visual impact reports for funders and monitoring teams."
                        },
                        {
                            position: "Grid Generator",
                            company: "Personal project",
                            period: "2025",
                            description: "Visual generator for interactive and configurable CSS grids, simplifying the creation of responsive layouts."
                        },
                        {
                            position: "Fullstack Developer",
                            company: "DYRA",
                            period: "March–April 2025",
                            description: "Learning platform in the Fulani (Peulh) language enabling field agents of a local NGO to acquire key concepts and test their knowledge through multiple-choice exercises."
                        },
                        {
                            position: "Fullstack Developer",
                            company: "Maison des Tortues",
                            period: "April 2024 – May 2025",
                            description: "Development and maintenance of the iKnow platform (field data collection, activity tracking, decision support). AWS S3 media storage setup, cPanel deployment, technical documentation and user training."
                        },
                        {
                            position: "Fullstack Developer",
                            company: "RBT-WAP Project (GIZ)",
                            period: "June 2021 – March 2024",
                            description: "Design and development of assessment and data collection platforms (BiodivCenter, Eval-FSOA, WAP-Training). API integration (iNaturalist, REST), automated scoring engines, interactive mapping. User training, 360° image/video processing and Mavic 2 Pro drone piloting."
                        },
                        {
                            position: "Web & SEO Consultant",
                            company: "SAF Consulting & JHS Corporate",
                            period: "May – September 2023",
                            description: "Redesign of 3 press platforms on WordPress. Newsletter automation, Google News integration. Design of an online TV channel (WebTV) with automated video broadcast system and ad network management (Afrikaad)."
                        },
                        {
                            position: "Freelance Mobile Developer",
                            company: "Beninfy",
                            period: "April – December 2023",
                            description: "Flutter mobile frontend integration from Figma designs for a carpooling app. Google Maps API integration and REST communication."
                        },
                    ]
                },
                projects: {
                    title: "Featured projects",
                    subtitle: "A selection of my most significant achievements",
                    viewCode: "View code",
                    viewDemo: "View demo"
                },
                softSkills: {
                    title: "Soft Skills",
                    items: [
                        "Complex problem solving",
                        "Technical analysis & synthesis",
                        "Clear writing",
                        "Team spirit & autonomy",
                        "NGO/company/freelance adaptability",
                        "Service mindset & pedagogy"
                    ]
                },
                contact: {
                    title: "Contact",
                    formTitle: "Send me a message",
                    infoTitle: "Contact information",
                    form: {
                        name: "Name",
                        namePlaceholder: "Your name",
                        email: "Email",
                        emailPlaceholder: "your@email.com",
                        message: "Message",
                        messagePlaceholder: "Your message...",
                        submit: "Send message",
                        sending: "Sending..."
                    },
                    availability: {
                        title: "Availability",
                        text: "Open to new opportunities and collaborations. Feel free to contact me to discuss your projects."
                    }
                },
                footer: {
                    copyright: "© 2025 All rights reserved"
                }
            }
        },

        setFilter(filter) {
            this.activeFilter = filter;
        },

        filteredProjects() {
            // Skip index 0 (featured project)
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

        init() {
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

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
            this.scrollProgress = (scrollTop / docHeight) * 100;

            this.showNav = scrollTop > 100;
            this.showBackToTop = scrollTop > 500;
        },

        toggleLanguage() {
            this.currentLang = this.currentLang === 'fr' ? 'en' : 'fr';
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
                        // Image portrait
                        lbImg.classList.add('portrait');
                        lbImg.classList.remove('landscape');
                    } else {
                        // Image paysage
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
                await new Promise(resolve => setTimeout(resolve, 2000));

                this.submitSuccess = true;
                this.submitMessage = this.currentLang === 'fr'
                    ? 'Message envoyé avec succès! Je vous répondrai bientôt.'
                    : 'Message sent successfully! I will reply to you soon.';

                // Reset form
                this.form = { name: '', email: '', message: '' };

                // Hide success message after 5 seconds
                setTimeout(() => {
                    this.submitMessage = '';
                }, 5000);

            } catch (error) {
                this.submitSuccess = false;
                this.submitMessage = this.currentLang === 'fr'
                    ? 'Erreur lors de l\'envoi. Veuillez réessayer.'
                    : 'Error sending message. Please try again.';
            }

            this.isSubmitting = false;
        }
    };
}