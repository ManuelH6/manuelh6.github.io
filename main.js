// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('bg-gray-900/95');
        nav.classList.remove('bg-gray-900/90');
    } else {
        nav.classList.add('bg-gray-900/90');
        nav.classList.remove('bg-gray-900/95');
    }
});

// Intersection Observer for animation triggers
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe all sections for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple form validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Add typing effect to hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', function() {
    const heroSubtitle = document.querySelector('#home p.text-xl');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 80);
        }, 1000);
    }
});

// Add parallax effect to hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.absolute.inset-0 > div');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add glow effect to skill cards on hover
document.querySelectorAll('.bg-gray-800\\/50').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('glow-on-hover');
    });
    
    card.addEventListener('mouseleave', function() {
        this.classList.remove('glow-on-hover');
    });
});

// Project carousel functionality (if needed for future expansion)
function initProjectCarousel() {
    const projectCards = document.querySelectorAll('#projects .grid > div');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.querySelector('a[href="#"]');
            if (link) {
                // You can customize this to handle actual project links
                console.log('Project clicked:', this.querySelector('h3').textContent);
            }
        });
    });
}

// Initialize carousel
initProjectCarousel();

// Add loading states for better UX
function showLoading(element) {
    element.classList.add('loading');
    setTimeout(() => {
        element.classList.remove('loading');
    }, 1000);
}

// Add resize handler for responsive behavior
window.addEventListener('resize', function() {
    // Close mobile menu on resize
    if (window.innerWidth >= 768) {
        document.getElementById('mobile-menu').classList.add('hidden');
    }
});

// Performance optimization: Lazy load images if any are added
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Add keyboard shortcuts for navigation
    if (e.altKey) {
        switch(e.key) {
            case '1':
                document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
                break;
            case '2':
                document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
                break;
            case '3':
                document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
                break;
            case '4':
                document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' });
                break;
            case '5':
                document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                break;
            case '6':
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }
});

// Add theme persistence (for future dark/light mode toggle)
function saveThemePreference(theme) {
    localStorage.setItem('portfolio-theme', theme);
}

function loadThemePreference() {
    return localStorage.getItem('portfolio-theme') || 'dark';
}

// Console welcome message
console.log(`
🚀 Welcome to Manuel Assogba's Portfolio!
👨‍💻 Full-Stack Developer | Web & Mobile Solutions | Cloud & DevOps
📍 Cotonou, Bénin
📧 assogbamanuel6@gmail.com

Thanks for checking out the code! 
Feel free to reach out if you'd like to collaborate.
`);