// WorkHero Landing Page - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const exitIntent = document.getElementById('exitIntent');
    const closeBtn = document.getElementById('closeExit');

    // Trigger exit intent when user moves mouse toward top of page
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

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Initialize
setupCountdown();
setupSmoothScroll();
console.log('WorkHero Landing Page initialized');
