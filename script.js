// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger menu
        mobileMenu.classList.toggle('active');
        const bars = mobileMenu.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (mobileMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transform = '';
                bar.style.opacity = '';
            }
        });
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            const bars = mobileMenu.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = '';
                bar.style.opacity = '';
            });
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message (in a real application, you would send this to a server)
            showSuccessMessage();
            
            // Reset form
            this.reset();
        });
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success message
function showSuccessMessage() {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <p>✅ Thank you for your message! I'll get back to you soon.</p>
    `;
    
    // Style the success message
    successMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(successMessage);
    
    // Animate in
    setTimeout(() => {
        successMessage.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successMessage.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(successMessage);
        }, 300);
    }, 5000);
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
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

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .about-content, .contact-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing effect for hero title
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        const nameSpan = heroTitle.querySelector('.text-gradient');
        
        if (nameSpan) {
            const beforeName = "Hi, I'm ";
            const nameText = nameSpan.textContent;
            
            // Clear the title
            heroTitle.innerHTML = '';
            
            let index = 0;
            const totalText = beforeName + nameText;
            
            function typeWriter() {
                if (index < beforeName.length) {
                    heroTitle.innerHTML += beforeName.charAt(index);
                } else if (index < totalText.length) {
                    if (index === beforeName.length) {
                        heroTitle.innerHTML += '<span class="text-gradient">';
                    }
                    const nameIndex = index - beforeName.length;
                    heroTitle.querySelector('.text-gradient').textContent += nameText.charAt(nameIndex);
                    
                    if (index === totalText.length - 1) {
                        heroTitle.innerHTML += '</span>';
                    }
                }
                
                index++;
                
                if (index <= totalText.length) {
                    setTimeout(typeWriter, 100);
                }
            }
            
            // Start typing effect after a short delay
            setTimeout(typeWriter, 500);
        }
    }
});

// Scroll to top functionality (optional)
window.addEventListener('scroll', function() {
    const scrollToTop = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
        if (scrollToTop) {
            scrollToTop.style.opacity = '1';
            scrollToTop.style.visibility = 'visible';
        }
    } else {
        if (scrollToTop) {
            scrollToTop.style.opacity = '0';
            scrollToTop.style.visibility = 'hidden';
        }
    }
});

// Add scroll to top button dynamically
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #6366f1;
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToTopButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#5855eb';
        this.style.transform = 'translateY(-2px)';
    });
    
    scrollToTopButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#6366f1';
        this.style.transform = 'translateY(0)';
    });
    
    document.body.appendChild(scrollToTopButton);
});