function app() {
    return {
        currentLang: 'fr',
        mobileMenuOpen: false,
        showNav: false,
        showBackToTop: false,
        scrollProgress: 0,
        activeFilter: 'all',

        // Form data
        form: {
            name: '',
            email: '',
            message: ''
        },
        errors: {},
        isSubmitting: false,
        submitMessage: '',
        submitSuccess: false,

        // Lightbox
        lightbox: {
            show: false,
            image: ''
        },

        // Projects data
        projects: [
            {
                fr: {
                    title: "Le Transporteur",
                    description: "Plateforme complète de logistique et de livraison (Client, Livreur, Admin) avec système de négociation de prix en temps réel."
                },
                en: {
                    title: "Le Transporteur",
                    description: "Comprehensive urban logistics and delivery platform (Client, Courier, Admin) featuring a real-time price negotiation system."
                },
                type: "Mobile / Web",
                tech: ["Flutter", "Dart", "Monorepo", "Hive", "Geolocator", "Maps"],
                images: [
                    "assets/projects/le_transporteur/1.png",
                    "assets/projects/le_transporteur/2.png",
                    "assets/projects/le_transporteur/3.png",
                ],
                links: {
                    github: null,
                    gitlab: null,
                    demo: null
                }
            },
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
                    "assets/projects/fieldoz/4.png",
                ],
                links: {
                    github: null,
                    gitlab: "https://gitlab.com/learnperso/fieldoz/",
                    demo: null,
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
                            position: "FieldOz",
                            company: "Projet personnel",
                            period: "Juillet–Août 2025",
                            description: "Plateforme SaaS transformant les données terrain en preuves d'impact visuelles pour les bailleurs de fonds."
                        },
                        {
                            position: "Grid Generator",
                            company: "Projet personnel",
                            period: "Mai–Juin 2025",
                            description: "Développement d'un générateur de grilles CSS interactives pour faciliter la création de layouts."
                        },
                        {
                            position: "Jande",
                            company: "DYRA",
                            period: "Mars-Avril 2025",
                            description: "Plateforme d’apprentissage en langue peulh permettant aux agents de terrain d’une ONG locale d’acquérir des notions clés et de tester leurs connaissances via des exercices QCM."
                        },
                        {
                            position: "Développeur Fullstack",
                            company: "Maison des Tortues",
                            period: "2024–2025",
                            description: "Système de monitoring temps réel (API, AWS S3) pour la préservation de la biodiversité."
                        },
                        {
                            position: "Développeur Fullstack",
                            company: "Projet RBT-WAP (GIZ)",
                            period: "2021–2024",
                            description: "Développement de plateformes (BiodivCenter, WAP-Training), intégration API (iNaturalist, REST), documentation, UX/UI, Images 360, Pilotage Drône."
                        },
                        {
                            position: "Consultant SEO",
                            company: "JHS Corporate",
                            period: "2023",
                            description: "Optimisation de plateformes WordPress, newsletters automatisées, analytics."
                        },
                        {
                            position: "Développeur mobile freelance",
                            company: "Beninfy",
                            period: "2023",
                            description: "Développement frontend mobile Flutter, intégration Google Maps API."
                        },
                        /* {
                            position: "Stagiaire",
                            company: "RAKHEM COMELI-GROUP",
                            period: "2019–2020",
                            description: "Développement de solutions web WordPress et gestion de l'infrastructure d'hébergement."
                        } */
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
                    copyright: "© 2025 Tous droits réservés"
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
                            position: "FieldOz",
                            company: "Personnal project",
                            period: "July–August 2025",
                            description: "Development of a platform that transforms NGO data into clear, visual reports, enabling them to showcase the real impact of their projects to partners and funders."
                        },
                        {
                            position: "Grid Generator",
                            company: "Personal project",
                            period: "May–June 2025",
                            description: "Development of an interactive CSS grid generator to facilitate layout creation."
                        },
                        {
                            position: "Fullstack Developer",
                            company: "DYRA",
                            period: "March–April 2025",
                            description: "Learning platform in the Fulani (Peulh) language enabling field agents of a local NGO in Benin to acquire key concepts and test their knowledge through multiple-choice exercises."
                        },
                        {
                            position: "Fullstack Developer",
                            company: "Maison des Tortues",
                            period: "2024–2025",
                            description: "Development of iKnow platform: API, AWS S3 integration, CPanel, technical documentation, user training."
                        },
                        {
                            position: "Fullstack Developer",
                            company: "RBT-WAP Project (GIZ)",
                            period: "2021–2024",
                            description: "Platform development (BiodivCenter, WAP-Training), API integration (iNaturalist, REST), documentation, UX/UI, drone management."
                        },
                        {
                            position: "SEO Consultant",
                            company: "JHS Corporate",
                            period: "2023",
                            description: "WordPress platform optimization, automated newsletters, analytics."
                        },
                        {
                            position: "Freelance Mobile Developer",
                            company: "Beninfy",
                            period: "2023",
                            description: "Flutter mobile frontend development, Google Maps API integration."
                        },
                        /* {
                            position: "Intern",
                            company: "RAKHEM COMELI-GROUP",
                            period: "2019–2020",
                            description: "WordPress web solutions development and hosting infrastructure management."
                        } */
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
            if (this.activeFilter === 'web')    return rest.filter(p => p.type.toLowerCase().includes('web'));
            if (this.activeFilter === 'mobile') return rest.filter(p => p.type.toLowerCase().includes('mobile'));
            return rest;
        },

        init() {
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



        openLightbox(image) {
            this.lightbox.show = true;
            this.lightbox.image = image;
            document.body.style.overflow = 'hidden';

            // Détection automatique de l'orientation
            const img = new Image();
            img.src = image;
            img.onload = () => {
                if (img.height > img.width) {
                    // Image portrait
                    document.querySelector('.lightbox-image')?.classList.add('portrait');
                    document.querySelector('.lightbox-image')?.classList.remove('landscape');
                } else {
                    // Image paysage
                    document.querySelector('.lightbox-image')?.classList.add('landscape');
                    document.querySelector('.lightbox-image')?.classList.remove('portrait');
                }
            };
        },

        closeLightbox() {
            this.lightbox.show = false;
            this.lightbox.image = '';
            document.body.style.overflow = 'auto';
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