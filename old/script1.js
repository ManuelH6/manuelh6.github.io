// Alpine.js Portfolio App
function portfolioApp() {
    return {
        // State
        language: 'fr',
        scrolled: false,
        mobileMenuOpen: false,
        activeTab: 'experience',
        showProjectModal: false,
        selectedProject: null,
        formData: {
            name: '',
            email: '',
            message: ''
        },

        // Navigation items
        navItems: {
            fr: [
                { href: '#about', label: 'À propos' },
                { href: '#skills', label: 'Compétences' },
                { href: '#experience', label: 'Expérience' },
                { href: '#projects', label: 'Projets' },
                { href: '#contact', label: 'Contact' },
            ],
            en: [
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
            ],
        },

        // Content in both languages
        content: {
            fr: {
                hero: {
                    title: "MANUEL ASSOGBA",
                    subtitle: "Développeur Full-Stack",
                    tagline: "Créateur de solutions numériques innovantes et performantes",
                    cta: "Découvrir mon parcours"
                },
                about: {
                    title: "À propos de moi",
                    description: "Développeur Full-Stack polyvalent avec une expertise en Laravel, JavaScript, APIs REST, et une solide maîtrise des technologies frontend modernes (Bootstrap, Next.js, React Native). Expérimenté dans les workflows agiles, les déploiements Docker, AWS S3, cPanel et la modélisation UML. Je livre des solutions fiables et bien structurées. Autonome, soucieux du détail et axé sur les résultats, je m'intègre parfaitement dans les équipes pour assurer le succès des projets.",
                    downloadCV: "Télécharger mon CV"
                },
                skills: {
                    title: "Compétences techniques",
                    categories: [
                        {
                            title: "Langages & Frameworks",
                            icon: "fas fa-code",
                            skills: ["PHP (Laravel, PHPUnit)", "JavaScript/TypeScript", "Next.js", "React Native", "jQuery", "CSS (Bootstrap, Tailwind)", "Ruby on Rails", "Flutter", "ViteJS"]
                        },
                        {
                            title: "Base de données & API",
                            icon: "fas fa-database",
                            skills: ["MySQL", "PostgreSQL", "RESTful API Development", "API Integration", "AWS S3"]
                        },
                        {
                            title: "Outils & DevOps",
                            icon: "fas fa-tools",
                            skills: ["Git", "Docker", "cPanel", "Infomaniak", "VS Code", "Postman", "Trello"]
                        },
                        {
                            title: "CMS & Design",
                            icon: "fas fa-paint-brush",
                            skills: ["WordPress/Elementor", "Figma (UI/UX)", "Responsive Design", "SEO"]
                        },
                        {
                            title: "Méthodologie",
                            icon: "fas fa-project-diagram",
                            skills: ["Agile", "UML", "Software Architecture", "Documentation", "Formation utilisateurs"]
                        }
                    ]
                },
                education: {
                    title: "Formation",
                    items: [
                        {
                            title: "Full Stack Web Development with MERN Stack Projects",
                            company: "Oak Academy | Udemy",
                            period: "2022 – 2024",
                            description: "Certification obtenue en Novembre 2024"
                        },
                        {
                            title: "Licence en Génie Logiciel",
                            company: "Université d'Abomey-Calavi (UAC), IFRI | Bénin",
                            period: "2015 – 2019",
                            description: "Diplôme obtenu en Septembre 2019"
                        },
                        {
                            title: "Formation en Mathématique Informatique",
                            company: "Université de Porto-Novo, IMSP | Bénin",
                            period: "2013 – 2015",
                            description: "Formation validée"
                        }
                    ]
                },
                experience: {
                    title: "Expérience professionnelle",
                    items: [
                        {
                            title: "Développeur Fullstack",
                            company: "FieldOz",
                            period: "Juillet 2025 – Maintenant",
                            description: "Développement d'une plateforme de reporting terrain pour ONG locales. Architecture Laravel, gestion de formulaires sécurisés, hébergement sur CPanel."
                        },
                        {
                            title: "Projet personnel - Grid Generator",
                            company: "Freelance",
                            period: "Mai 2025 – Juin 2025",
                            description: "Générateur de grilles interactives en CSS/Tailwind."
                        },
                        {
                            title: "Développeur Fullstack",
                            company: "Maison des Tortues (Natitingou, Bénin)",
                            period: "Avril 2024 – Mai 2025",
                            description: "Développement et maintenance de la plateforme iKnow (suivi terrain). Intégration API, stockage AWS S3, déploiement sur Cpanel, formation utilisateurs."
                        },
                        {
                            title: "Développeur Fullstack",
                            company: "Projet RBT-WAP (GIZ)",
                            period: "Juin 2021 – Mars 2024",
                            description: "Développement de plateformes : suivi biodiversité (BiodivCenter), scoring automatique, cartographie interactive, formulaires multimédias, documentation technique."
                        }
                    ]
                },
                projects: {
                    title: "Projets phares",
                    items: [
                        {
                            title: "FieldOz",
                            description: "Plateforme de reporting terrain pour ONG locales avec architecture Laravel, formulaires sécurisés et tableau de bord avancé.",
                            technologies: ["Laravel", "MySQL", "JavaScript", "CPanel"],
                            year: "2025",
                            featured: true
                        },
                        {
                            title: "Grid Generator",
                            description: "Outil interactif de génération de grilles CSS/Tailwind avec interface intuitive.",
                            technologies: ["CSS", "Tailwind", "JavaScript", "UI/UX"],
                            year: "2025"
                        },
                        {
                            title: "iKnow Platform",
                            description: "Plateforme de suivi terrain avec intégration AWS S3 et formation utilisateurs.",
                            technologies: ["Laravel", "AWS S3", "API Integration", "CPanel"],
                            year: "2024-2025"
                        },
                        {
                            title: "BiodivCenter",
                            description: "Système de suivi de biodiversité avec cartographie interactive et scoring automatique.",
                            technologies: ["Laravel", "PostgreSQL", "Maps API", "Charts"],
                            year: "2021-2024"
                        },
                        {
                            title: "Beninfy Mobile App",
                            description: "Application mobile Flutter avec intégration Google Maps API.",
                            technologies: ["Flutter", "Google Maps API", "Figma", "Mobile"],
                            year: "2023"
                        }
                    ]
                },
                contact: {
                    title: "Contactez-moi",
                    subtitle: "Discutons de votre prochain projet",
                    form: {
                        name: "Nom complet",
                        email: "Adresse email",
                        message: "Votre message",
                        send: "Envoyer le message"
                    }
                },
                footer: {
                    copyright: "© 2025 Manuel Assogba — Tous droits réservés",
                    links: {
                        home: "Accueil",
                        projects: "Projets",
                        contact: "Contact"
                    }
                }
            },
            en: {
                hero: {
                    title: "MANUEL ASSOGBA",
                    subtitle: "Full-Stack Developer",
                    tagline: "Creator of innovative and high-performance digital solutions",
                    cta: "Explore My Journey"
                },
                about: {
                    title: "About Me",
                    description: "Versatile Full-Stack Developer with expertise in Laravel, JavaScript, REST APIs, and solid experience in modern frontend technologies (Bootstrap, Next.js, React Native). Skilled in agile workflows, Docker deployments, AWS S3, cPanel, and UML modeling. I deliver reliable, well-structured solutions. Independent, detail-oriented, and results-driven, I integrate seamlessly into teams to ensure project success.",
                    downloadCV: "Download my CV"
                },
                skills: {
                    title: "Technical Skills",
                    categories: [
                        {
                            title: "Languages & Frameworks",
                            icon: "fas fa-code",
                            skills: ["PHP (Laravel, PHPUnit)", "JavaScript/TypeScript", "Next.js", "React Native", "jQuery", "CSS (Bootstrap, Tailwind)", "Ruby on Rails", "Flutter", "ViteJS"]
                        },
                        {
                            title: "Database & API",
                            icon: "fas fa-database",
                            skills: ["MySQL", "PostgreSQL", "RESTful API Development", "API Integration", "AWS S3"]
                        },
                        {
                            title: "Tools & DevOps",
                            icon: "fas fa-tools",
                            skills: ["Git", "Docker", "cPanel", "Infomaniak", "VS Code", "Postman", "Trello"]
                        },
                        {
                            title: "CMS & Design",
                            icon: "fas fa-paint-brush",
                            skills: ["WordPress/Elementor", "Figma (UI/UX)", "Responsive Design", "SEO"]
                        },
                        {
                            title: "Methodology",
                            icon: "fas fa-project-diagram",
                            skills: ["Agile", "UML", "Software Architecture", "Documentation", "User Training"]
                        }
                    ]
                },
                education: {
                    title: "Education",
                    items: [
                        {
                            title: "Full Stack Web Development with MERN Stack Projects",
                            company: "Oak Academy | Udemy",
                            period: "2022 – 2024",
                            description: "Certification earned November 2024"
                        },
                        {
                            title: "Bachelor's in Software Engineering",
                            company: "University of Abomey-Calavi (UAC), IFRI | Benin",
                            period: "2015 – 2019",
                            description: "Degree awarded September 2019"
                        },
                        {
                            title: "Computer Mathematics Program",
                            company: "University of Porto-Novo, IMSP | Benin",
                            period: "2013 – 2015",
                            description: "Completed program"
                        }
                    ]
                },
                experience: {
                    title: "Professional Experience",
                    items: [
                        {
                            title: "Full-Stack Developer",
                            company: "FieldOz",
                            period: "July 2025 – Present",
                            description: "Development of field reporting platform for local NGOs. Laravel architecture, secure form management, CPanel hosting."
                        },
                        {
                            title: "Personal Project - Grid Generator",
                            company: "Freelance",
                            period: "May 2025 – June 2025",
                            description: "Interactive CSS/Tailwind grid generator."
                        },
                        {
                            title: "Full-Stack Developer",
                            company: "Maison des Tortues (Natitingou, Benin)",
                            period: "April 2024 – May 2025",
                            description: "Development and maintenance of iKnow platform (field tracking). API integration, AWS S3 storage, Cpanel deployment, user training."
                        },
                        {
                            title: "Full-Stack Developer",
                            company: "RBT-WAP Project (GIZ)",
                            period: "June 2021 – March 2024",
                            description: "Platform development: biodiversity tracking (BiodivCenter), automatic scoring, interactive mapping, multimedia forms, technical documentation."
                        }
                    ]
                },
                projects: {
                    title: "Featured Projects",
                    items: [
                        {
                            title: "FieldOz",
                            description: "Field reporting platform for local NGOs with Laravel architecture, secure forms and advanced dashboard.",
                            technologies: ["Laravel", "MySQL", "JavaScript", "CPanel"],
                            year: "2025",
                            featured: true
                        },
                        {
                            title: "Grid Generator",
                            description: "Interactive CSS/Tailwind grid generation tool with intuitive interface.",
                            technologies: ["CSS", "Tailwind", "JavaScript", "UI/UX"],
                            year: "2025"
                        },
                        {
                            title: "iKnow Platform",
                            description: "Field tracking platform with AWS S3 integration and user training.",
                            technologies: ["Laravel", "AWS S3", "API Integration", "CPanel"],
                            year: "2024-2025"
                        },
                        {
                            title: "BiodivCenter",
                            description: "Biodiversity tracking system with interactive mapping and automatic scoring.",
                            technologies: ["Laravel", "PostgreSQL", "Maps API", "Charts"],
                            year: "2021-2024"
                        },
                        {
                            title: "Beninfy Mobile App",
                            description: "Flutter mobile application with Google Maps API integration.",
                            technologies: ["Flutter", "Google Maps API", "Figma", "Mobile"],
                            year: "2023"
                        }
                    ]
                },
                contact: {
                    title: "Contact Me",
                    subtitle: "Let's discuss your next project",
                    form: {
                        name: "Full name",
                        email: "Email address",
                        message: "Your message",
                        send: "Send message"
                    }
                },
                footer: {
                    copyright: "© 2025 Manuel Assogba — All Rights Reserved",
                    links: {
                        home: "Home",
                        projects: "Projects",
                        contact: "Contact"
                    }
                }
            }
        },

        // Initialization
        init() {
            // Scroll event listener
            window.addEventListener('scroll', () => {
                this.scrolled = window.scrollY > 50;
            });

            // Close mobile menu on resize
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    this.mobileMenuOpen = false;
                }
            });

            // Initialize intersection observers for animations
            this.initScrollAnimations();
        },

        // Scroll to section
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        },

        // Form submission
        submitForm() {
            // Handle form submission here
            console.log('Form submitted:', this.formData);
            
            // Simulate form submission
            alert(this.language === 'fr' ? 'Message envoyé avec succès!' : 'Message sent successfully!');
            
            // Reset form
            this.formData = {
                name: '',
                email: '',
                message: ''
            };
        },

        // Initialize scroll animations
        initScrollAnimations() {
            // Create intersection observer for scroll animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        
                        // Add animation classes based on data attributes
                        if (element.dataset.animation) {
                            element.classList.add(`animate-${element.dataset.animation}`);
                        }
                        
                        // Unobserve after animation is triggered
                        observer.unobserve(element);
                    }
                });
            }, observerOptions);

            // Observe all elements with animation data attributes
            document.querySelectorAll('[data-animation]').forEach(el => {
                observer.observe(el);
            });
        }
    }
}