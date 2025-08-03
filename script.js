// Newsletter subscription functionality
function handleSubscribe() {
    const emailInput = document.getElementById('emailInput');
    const subscribeBtn = document.getElementById('subscribeBtn');
    const email = emailInput.value.trim();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        alert('Please enter your email address');
        emailInput.focus();
        return;
    }
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        emailInput.focus();
        return;
    }
    
    // Show loading state
    subscribeBtn.classList.add('loading');
    subscribeBtn.textContent = 'Subscribing...';
    
    // Simulate subscription process
    setTimeout(() => {
        // Reset button state
        subscribeBtn.classList.remove('loading');
        subscribeBtn.textContent = 'Thank you!';
        subscribeBtn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
        
        // Clear email input
        emailInput.value = '';
        
        // Show success message
        showSuccessMessage();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            subscribeBtn.textContent = 'Subscribe';
            subscribeBtn.style.background = 'linear-gradient(135deg, #FF6B6B 0%, #20B2AA 100%)';
        }, 3000);
    }, 1500);
}

// Show success message
function showSuccessMessage() {
    const signupDescription = document.querySelector('.signup-description');
    const originalText = signupDescription.textContent;
    
    signupDescription.textContent = '🎉 Welcome to the Promptly Speaking community! Check your email for confirmation.';
    signupDescription.style.color = '#28a745';
    signupDescription.style.fontWeight = '600';
    
    setTimeout(() => {
        signupDescription.textContent = originalText;
        signupDescription.style.color = '#b0b0b0';
        signupDescription.style.fontWeight = 'normal';
    }, 5000);
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation link clicks
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle Enter key in email input
    const emailInput = document.getElementById('emailInput');
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSubscribe();
            }
        });
    }
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(20, 20, 20, 0.95)';
        }
    });
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe content cards for animation
    const contentCards = document.querySelectorAll('.content-card, .spin-off-card');
    contentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Social media link tracking (for analytics)
function trackSocialClick(platform) {
    // This would integrate with your analytics platform
    console.log(`Social media click: ${platform}`);
    
    // Example: Google Analytics event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'social_click', {
            'social_platform': platform,
            'event_category': 'engagement'
        });
    }
}

// Add click tracking to social links
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.getAttribute('aria-label');
            trackSocialClick(platform);
        });
    });
});

// Add loading animation for page transitions
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0.7';
});

// Preload images for better performance
function preloadImages() {
    const images = ['Podcast2.png', 'Youtube2.png', 'newsletter2.png'];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading when page loads
document.addEventListener('DOMContentLoaded', preloadImages);

