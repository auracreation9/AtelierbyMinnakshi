document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Initialize Feather Icons
    feather.replace();

    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            // Change icon based on menu state
            const icon = mobileMenuButton.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
        
        // Close menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuButton.querySelector('i');
                icon.setAttribute('data-feather', 'menu');
                feather.replace();
            });
        });
    }

    // Lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const numberText = document.querySelector('.numbertext');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    
    // Open lightbox when clicking on an image
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            openLightbox();
        });
    });
    
    function openLightbox() {
        lightbox.style.display = 'flex';
        updateLightboxImage();
    }
    
    function closeLightbox() {
        lightbox.style.display = 'none';
    }
    
    function updateLightboxImage() {
        // Use higher quality image by removing size parameters from URL
        const imgSrc = galleryItems[currentIndex].src.replace(/&w=\d+&q=\d+/, '&w=800&q=85');
        lightboxImg.src = imgSrc;
        numberText.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
    }
    
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightboxImage();
    }
    
    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightboxImage();
    }
    
    // Event listeners
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);
    
    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });

    // Show subscription popup after 30 seconds
    setTimeout(() => {
        const popup = document.getElementById('subscriptionPopup');
        popup.classList.remove('hidden');
        
        // Auto-hide after 30 seconds
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 30000);
    }, 30000);

    // Close popup functionality
    document.getElementById('closePopup').addEventListener('click', () => {
        document.getElementById('subscriptionPopup').classList.add('hidden');
    });

    // Form submission handlers
    document.getElementById('newsletterForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        // Here you would typically send the email to your backend
        alert('Thank you for subscribing!');
        document.getElementById('subscriptionPopup').classList.add('hidden');
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });

    // GSAP animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Logo Animation
        gsap.to(".logo-3d", {
            y: -5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Add hover effect to logo
        const logo3d = document.querySelector(".logo-3d");
        if (logo3d) {
            logo3d.addEventListener("mouseenter", () => {
                gsap.to(".logo-3d", {
                    scale: 1.1,
                    duration: 0.5,
                    ease: "back.out(2)"
                });
            });
            logo3d.addEventListener("mouseleave", () => {
                gsap.to(".logo-3d", {
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(2)"
                });
            });
        }

        // Smooth section transitions
        gsap.utils.toArray('section').forEach((section, i) => {
            const content = section;
            
            gsap.from(content, {
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "top center",
                    scrub: 1.5
                },
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: "sine.out"
            });
        });

        // Smooth image transitions
        gsap.utils.toArray('.gallery-item').forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none"
                },
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: "back.out(1.2)",
                delay: i * 0.1
            });
        });
    }
});