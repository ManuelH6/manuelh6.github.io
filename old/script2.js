// Portfolio JavaScript functionality

// Alpine.js data and methods
function portfolioData() {
    return {
        language: 'fr',
        selectedProject: null,
        selectedImage: null,
        showBackToTop: false,
        
        // Project data
        projects: {
            fieldoz: {
                title: 'FieldOz',
                description: {
                    fr: 'Plateforme innovante de suivi terrain avec géolocalisation en temps réel, collecte de données multimédia, et rapports automatisés. Développée avec Laravel et JavaScript pour optimiser les opérations de terrain des ONG.',
                    en: 'Innovative field monitoring platform with real-time geolocation, multimedia data collection, and automated reporting. Developed with Laravel and JavaScript to optimize NGO field operations.'
                },
                gallery: [
                    'https://picsum.photos/600/400?random=11',
                    'https://picsum.photos/600/400?random=12',
                    'https://picsum.photos/600/400?random=13',
                    'https://picsum.photos/600/400?random=14',
                    'https://picsum.photos/600/400?random=15'
                ],
                link: '#'
            },
            grid: {
                title: 'Grid Generator',
                description: {
                    fr: 'Générateur interactif de grilles CSS permettant aux développeurs de créer rapidement des layouts Bootstrap et Tailwind CSS. Interface intuitive avec prévisualisation en temps réel et export de code.',
                    en: 'Interactive CSS grid generator allowing developers to quickly create Bootstrap and Tailwind CSS layouts. Intuitive interface with real-time preview and code export.'
                },
                gallery: [
                    'https://picsum.photos/600/400?random=21',
                    'https://picsum.photos/600/400?random=22',
                    'https://picsum.photos/600/400?random=23',
                    'https://picsum.photos/600/400?random=24'
                ],
                link: '#'
            },
            biodiv: {
                title: 'BiodivCenter',
                description: {
                    fr: 'Plateforme complète de suivi de la biodiversité intégrée avec l\'API iNaturalist. Permet aux chercheurs de cataloguer les espèces, analyser les tendances et générer des rapports de conservation.',
                    en: 'Comprehensive biodiversity monitoring platform integrated with iNaturalist API. Enables researchers to catalog species, analyze trends and generate conservation reports.'
                },
                gallery: [
                    'https://picsum.photos/600/400?random=31',
                    'https://picsum.photos/600/400?random=32',
                    'https://picsum.photos/600/400?random=33',
                    'https://picsum.photos/600/400?random=34',
                    'https://picsum.photos/600/400?random=35',
                    'https://picsum.photos/600/400?random=36'
                ],
                link: '#'
            },
            wap: {
                title: 'WAP-Training',
                description: {
                    fr: 'Plateforme e-learning interactive avec modules de formation personnalisés, quiz interactifs, et suivi de progression. Système d\'évaluation automatisée et certification numérique.',
                    en: 'Interactive e-learning platform with custom training modules, interactive quizzes, and progress tracking. Automated assessment system and digital certification.'
                },
                gallery: [
                    'https://picsum.photos/600/400?random=41',
                    'https://picsum.photos/600/400?random=42',
                    'https://picsum.photos/600/400?random=43',
                    'https://picsum.photos/600/400?random=44'
                ],
                link: '#'
            },
            iknow: {
                title: 'iKnow',
                description: {
                    fr: 'Solution complète de gestion de connaissances avec stockage cloud AWS S3, recherche avancée, collaboration en équipe et versioning des documents. Interface responsive et sécurisée.',
                    en: 'Complete knowledge management solution with AWS S3 cloud storage, advanced search, team collaboration and document versioning. Responsive and secure interface.'
                },
                gallery: [
                    'https://picsum.photos/600/400?random=51',
                    'https://picsum.photos/600/400?random=52',
                    'https://picsum.photos/600/400?random=53',
                    'https://picsum.photos/600/400?random=54',
                    'https://picsum.photos/600/400?random=55'
                ],
                link: '#'
            },
            beninfy: {
                title: 'Beninfy Mobile',
                description: {
                    fr: 'Application mobile Flutter avec intégration Google Maps, géolocalisation avancée, et communication via API REST. Interface moderne et navigation intuitive pour l\'expérience utilisateur optimale.',
                    en: 'Flutter mobile application with Google Maps integration, advanced geolocation, and REST API communication. Modern interface and intuitive navigation for optimal user experience.'
                },
                gallery: [
                    'https://picsum.photos/600/400?random=61',
                    'https://picsum.photos/600/400?random=62',
                    'https://picsum.photos/600/400?random=63',
                    'https://picsum.photos/600/400?random=64'
                ],
                link: '#'
            }
        },

        // Toggle language
        toggleLanguage() {
            this.language = this.language === 'fr' ? 'en' : 'fr';
            document.documentElement.lang = this.language;
        },

        // Open project modal
        openProject(projectId) {
            const project = this.projects[projectId];
            if (project) {
                this.selectedProject = {
                    ...project,
                    description: project.description[this.language]
                };
            }
        },

        // Open image modal
        openImageModal(imageSrc) {
            this.selectedImage = imageSrc;
        },

        // Scroll to top
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },

        // Initialize component
        init() {
            // Handle scroll events
            window.addEventListener('scroll', () => {
                this.showBackToTop = window.pageYOffset > 300;
                this.handleScrollAnimations();
            });

            // Initialize scroll animations
            this.handleScrollAnimations();

            // Handle smooth scrolling for navigation links
            this.initSmoothScrolling();

            // Handle keyboard navigation
            this.initKeyboardNavigation();

            // Initialize intersection observer for animations
            this.initIntersectionObserver();
        },

        // Handle scroll animations
        handleScrollAnimations() {
            const elements = document.querySelectorAll('.scroll-reveal');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        },

        // Initialize smooth scrolling
        initSmoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        },

        // Initialize keyboard navigation
        initKeyboardNavigation() {
            document.addEventListener('keydown', (e) => {
                // Close modals with Escape key
                if (e.key === 'Escape') {
                    this.selectedProject = null;
                    this.selectedImage = null;
                }
                
                // Navigation with arrow keys in project modal
                if (this.selectedProject && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
                    // This could be extended to navigate between projects
                }
            });
        },

        // Initialize Intersection Observer for better performance
        initIntersectionObserver() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe elements for animation
            document.querySelectorAll('.skill-card, .timeline-item, .project-card').forEach(el => {
                observer.observe(el);
            });
        }
    };
}

// Contact form functionality
function contactForm() {
    return {
        form: {
            name: '',
            email: '',
            message: ''
        },
        errors: {},
        isSubmitting: false,
        submitMessage: '',
        submitSuccess: false,

        // Validate form
        validateForm() {
            this.errors = {};
            
            if (!this.form.name.trim()) {
                this.errors.name = this.language === 'fr' ? 'Le nom est requis' : 'Name is required';
            }
            
            if (!this.form.email.trim()) {
                this.errors.email = this.language === 'fr' ? 'L\'email est requis' : 'Email is required';
            } else if (!this.isValidEmail(this.form.email)) {
                this.errors.email = this.language === 'fr' ? 'Email invalide' : 'Invalid email';
            }
            
            if (!this.form.message.trim()) {
                this.errors.message = this.language === 'fr' ? 'Le message est requis' : 'Message is required';
            } else if (this.form.message.trim().length < 10) {
                this.errors.message = this.language === 'fr' ? 'Le message doit contenir au moins 10 caractères' : 'Message must be at least 10 characters';
            }
            
            return Object.keys(this.errors).length === 0;
        },

        // Validate email format
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        // Submit form
        async submitForm() {
            if (!this.validateForm()) {
                return;
            }

            this.isSubmitting = true;
            this.submitMessage = '';

            try {
                // Simulate form submission
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // In a real application, you would send the data to your backend
                // const response = await fetch('/api/contact', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(this.form)
                // });

                this.submitSuccess = true;
                this.submitMessage = this.language === 'fr' 
                    ? 'Message envoyé avec succès! Je vous répondrai bientôt.' 
                    : 'Message sent successfully! I will reply to you soon.';
                
                // Reset form
                this.form = { name: '', email: '', message: '' };
                
            } catch (error) {
                this.submitSuccess = false;
                this.submitMessage = this.language === 'fr'
                    ? 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
                    : 'Error sending message. Please try again.';
            } finally {
                this.isSubmitting = false;
                
                // Clear message after 5 seconds
                setTimeout(() => {
                    this.submitMessage = '';
                }, 5000);
            }
        }
    };
}

// Utility functions
class PortfolioUtils {
    // Lazy load images
    static initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Preload critical images
    static preloadImages(urls) {
        urls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    // Handle offline status
    static initOfflineDetection() {
        const updateOnlineStatus = () => {
            const status = navigator.onLine ? 'online' : 'offline';
            document.body.setAttribute('data-connection', status);
            
            if (!navigator.onLine) {
                console.log('Application is offline');
                // Could show an offline notification
            }
        };

        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
        updateOnlineStatus();
    }

    // Performance monitoring
    static logPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart);
                }, 0);
            });
        }
    }

    // Initialize theme based on system preference
    static initTheme() {
        // This can be used if dark mode is implemented
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.documentElement.classList.add('dark-mode');
        }

        // Listen for theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (e.matches) {
                document.documentElement.classList.add('dark-mode');
            } else {
                document.documentElement.classList.remove('dark-mode');
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize utility functions
    PortfolioUtils.initLazyLoading();
    PortfolioUtils.initOfflineDetection();
    PortfolioUtils.logPerformance();
    PortfolioUtils.initTheme();

    // Preload some critical images
    const criticalImages = [
        'https://picsum.photos/320/200?random=1',
        'https://picsum.photos/320/200?random=2',
        'https://picsum.photos/320/200?random=3'
    ];
    PortfolioUtils.preloadImages(criticalImages);

    // Add loading states to images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', () => {
            img.classList.remove('loading');
        });
        
        img.addEventListener('error', () => {
            img.classList.add('error');
            console.error('Failed to load image:', img.src);
        });
    });

    // Add smooth reveal animations to elements
    const revealElements = document.querySelectorAll('.skill-card, .timeline-item, .project-card');
    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
    });

    // Console greeting
    console.log(`
    🚀 Portfolio de Manuel Assogba
    💼 Développeur Full-Stack
    📧 Contact: manuel@example.com
    🌟 Merci de visiter mon portfolio!
    `);
});

// Handle print functionality
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        portfolioData,
        contactForm,
        PortfolioUtils
    };
}