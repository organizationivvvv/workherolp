// WorkHero Landing Page - JavaScript

// Exit Intent Popup
document.addEventListener('DOMContentLoaded', function() {
    const exitIntent = document.getElementById('exitIntent');
    const closeBtn = document.getElementById('closeExit');

    // Trigger exit intent when user moves mouse toward top of page (leaving)
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !exitIntent.classList.contains('active')) {
            exitIntent.classList.add('active');
        }
    });

    // Close button functionality
    closeBtn.addEventListener('click', function() {
        exitIntent.classList.remove('active');
    });

    // Close on click outside
    exitIntent.addEventListener('click', function(e) {
        if (e.target === exitIntent) {
            exitIntent.classList.remove('active');
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && exitIntent.classList.contains('active')) {
            exitIntent.classList.remove('active');
        }
    });
});

// Countdown Timer for Offer
function setupCountdown() {
    const timerElement = document.getElementById('timer');
    if (!timerElement) return;

    // Set deadline to 5 hours from now
    const now = new Date();
    const deadline = new Date(now.getTime() + 5 * 60 * 60 * 1000);

    function updateCountdown() {
        const now = new Date();
        const distance = deadline - now;

        if (distance < 0) {
            timerElement.textContent = 'Offer Expired';
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Form handling for demo
function setupForms() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.classList.contains('btn-primary')) {
                console.log('CTA Clicked:', this.textContent);
                // In production, this would redirect to calendly or contact form
                window.location.href = this.getAttribute('href');
            }
        });
    });
}

// Scroll spy for navigation
function setupScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const height = section.offsetHeight;
            const top = section.offsetTop - 100;
            const id = section.getAttribute('id');

            if (scrollY > top && scrollY <= top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Sticky header effect
function setupStickyHeader() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            navbar.style.padding = '0.75rem 0';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
            navbar.style.padding = '1rem 0';
        }
    });
}

// Fade-in animation on scroll
function setupFadeIn() {
    const elements = document.querySelectorAll('.problem-card, .step, .offer-item, .testimonial-card, .pricing-card, .faq-item');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
}

// Add to cart simulation for testing
function setupAnalyticEvents() {
    const buttons = document.querySelectorAll('a.btn, button');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (typeof window.analytics !== 'undefined') {
                window.analytics.track('cta_click', {
                    button_text: this.textContent.trim(),
                    page: window.location.pathname
                });
            }
        });
    });

    // Facebook Pixel event tracking
    window.fbq && window.fbq('track', 'ViewContent', {
        content_name: 'WorkHero Landing Page'
    });

    // Google Analytics event
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_path: window.location.pathname
        });
    }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    setupCountdown();
    setupForms();
    setupScrollSpy();
    setupSmoothScroll();
    setupStickyHeader();
    setupFadeIn();
    setupAnalyticEvents();

    // Log initialization
    console.log('WorkHero Landing Page initialized');
});
