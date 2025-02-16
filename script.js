// JavaScript code for FRABRO

// Mobile layout handling
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

// Initialize mobile layout
document.addEventListener('DOMContentLoaded', function() {
    checkScreenSize();
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

// Function to handle button clicks for navigation

function navigateTo(page) {
    window.location.href = page;
}

// Example of adding event listeners to buttons
document.querySelectorAll('.cta-buttons button').forEach(button => {
    button.addEventListener('click', function() {
        navigateTo(this.getAttribute('onclick').match(/'([^']+)'/)[1]);
    });
});

// Additional functions can be added here as needed
