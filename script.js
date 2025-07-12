// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle button clicks
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Floating hearts animation
    function createFloatingHeart() {
        const heartsContainer = document.getElementById('floating-hearts');
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = Math.random() > 0.5 ? '💕' : '💖';
        
        // Random horizontal position
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 10 + 16) + 'px';
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 7000);
    }

    // Create floating hearts periodically
    setInterval(createFloatingHeart, 3000);

    // Video player functionality
    const videoPlayBtn = document.getElementById('video-play-btn');
    const videoPlaceholder = document.getElementById('video-placeholder');
    const videoFrame = document.getElementById('video-frame');
    const youtubePlayer = document.getElementById('youtube-player');
    
    // YouTube video ID 
    const videoId = "T573FrZQgCY";
    
    function playVideo() {
        // Hide placeholder and show video frame
        videoPlaceholder.style.display = 'none';
        videoFrame.style.display = 'block';
        
        // Set the YouTube embed URL with autoplay
        youtubePlayer.src = "https://youtu.be/T573FrZQgCY?si=1--q7fbZCXdLFrT6";
        
        // Add some visual feedback
        videoFrame.style.opacity = '0';
        setTimeout(() => {
            videoFrame.style.transition = 'opacity 0.5s ease';
            videoFrame.style.opacity = '1';
        }, 100);
    }
    
    // Add click event to play button and placeholder
    videoPlayBtn.addEventListener('click', playVideo);
    videoPlaceholder.addEventListener('click', playVideo);

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.feeling-card, .gallery-item, .section-header, .personal-message, .video-player, .closing-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Add staggered animation delay to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.transitionDelay = (index * 0.1) + 's';
    });

    // Add staggered animation delay to feeling cards
    const feelingCards = document.querySelectorAll('.feeling-card');
    feelingCards.forEach((card, index) => {
        card.style.transitionDelay = (index * 0.2) + 's';
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.nav');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add click animations to buttons
    const allButtons = document.querySelectorAll('.btn, .play-button-large');
    allButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Gallery item click effect
    const galleryImages = document.querySelectorAll('.gallery-item');
    galleryImages.forEach(item => {
        item.addEventListener('click', function() {
            // Add a gentle bounce effect
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'bounce-gentle 0.6s ease';
            }, 10);
        });
    });

    // Add hover sound effect simulation (visual feedback)
    const interactiveElements = document.querySelectorAll('.nav-link, .btn, .gallery-item, .feeling-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    });

    // Preload images for better performance
    const imageUrls = [
        'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
        'https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300',
        'https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});

// Additional CSS animation for bounce effect
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce-gentle {
        0%, 100% { 
            transform: translateY(0) scale(1); 
        }
        50% { 
            transform: translateY(-5px) scale(1.02); 
        }
    }
`;
document.head.appendChild(style);
