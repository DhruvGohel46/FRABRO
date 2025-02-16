// JavaScript code for About Page

// Mobile layout handling
document.addEventListener('DOMContentLoaded', function() {
    // Check screen size on load
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Add mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        if (nav) {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        }
    });
    
    const nav = document.querySelector('nav');
    if (nav) {
        nav.prepend(menuToggle);
    }
});

function checkScreenSize() {
    const isMobile = window.innerWidth <= 768;
    document.body.classList.toggle('mobile-layout', isMobile);
    
    // Toggle mobile menu visibility
    const nav = document.querySelector('nav ul');
    if (nav) {
        if (isMobile) {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
    }
}
