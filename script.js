// Newsletter signup functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup-form');
    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('button');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (email) {
            // Show success message
            submitButton.textContent = 'Thank you!';
            submitButton.style.background = '#10B981';
            emailInput.value = '';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = 'Subscribe';
                submitButton.style.background = '#F97316';
            }, 3000);
            
            // Here you would typically send the email to your newsletter service
            console.log('Newsletter signup:', email);
        }
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
            }
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    });
});

