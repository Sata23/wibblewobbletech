// Advanced Fluidic Interactions

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll Spy (Header Glass Effect)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-background-dark/80', 'backdrop-blur-xl', 'shadow-2xl', 'shadow-primary/5', 'border-white/10');
            header.classList.remove('bg-transparent', 'border-transparent');
        } else {
            header.classList.add('bg-transparent', 'border-transparent');
            header.classList.remove('bg-background-dark/80', 'backdrop-blur-xl', 'shadow-2xl', 'shadow-primary/5', 'border-white/10');
        }
    });

    // 2. 3D Tilt Effect on Hero Image
    const heroImageContainer = document.querySelector('.hero-image-container');
    if (heroImageContainer) {
        // Add transition for entering/leaving states
        heroImageContainer.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
        
        heroImageContainer.addEventListener('mousemove', (e) => {
            const rect = heroImageContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -12; // Increased tilt slightly
            const rotateY = ((x - centerX) / centerX) * 12;
            
            // Remove transition during movement for real-time tracking
            heroImageContainer.style.transition = 'none';
            heroImageContainer.style.transform = `perspective(1000px) scale3d(1.05, 1.05, 1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        heroImageContainer.addEventListener('mouseleave', () => {
            // Re-apply transition for smooth return
            heroImageContainer.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            heroImageContainer.style.transform = `perspective(1000px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)`;
        });
    }

    // 3. Scroll Reveal Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                // Optional: stop observing once revealed layout
                // revealObserver.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach(el => revealObserver.observe(el));

    // 4. Custom Blow in/out click effect (from user request)
    const interactiveElements = document.querySelectorAll('section, button, .glass-card');
        
    interactiveElements.forEach(el => {
        el.addEventListener('click', function(e) {
            // Prevent animation if clicking a link inside the element to avoid double triggering
            if(e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;
            
            this.classList.remove('animate-blow');
            void this.offsetWidth; // trigger reflow
            this.classList.add('animate-blow');
            
            setTimeout(() => {
                this.classList.remove('animate-blow');
            }, 400); 
        });
    });

    // 5. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileCloseBtn = document.getElementById('mobile-close-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if(mobileMenuBtn && mobileNav && mobileCloseBtn) {
        // Open
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        // Close
        const closeMenu = () => {
            mobileNav.classList.add('translate-x-full');
            document.body.style.overflow = ''; 
        };

        mobileCloseBtn.addEventListener('click', closeMenu);
        
        // Close when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // 6. Project Carousel Scrolling
    const projectsContainer = document.getElementById('projects-container');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    if (projectsContainer && scrollLeftBtn && scrollRightBtn) {
        // Scroll width is roughly the width of one card + gap (400px + 24px)
        const scrollAmount = 424; 

        scrollLeftBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent blow-in animation from interfering
            projectsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        scrollRightBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent blow-in animation from interfering
            projectsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});
