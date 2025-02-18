// JavaScript code for FRABRO

// Enhanced smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Focus on target for accessibility
            target.setAttribute('tabindex', '-1');
            target.focus();
        }
    });
});


// Enhanced mobile layout handling
document.addEventListener('DOMContentLoaded', function() {
    // Check screen size on load
    checkScreenSize();
    
    // Add event listener for window resize with debounce
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(checkScreenSize, 100);
    });
    
    // Add accessible mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    menuToggle.setAttribute('aria-expanded', 'false');
    
    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        if (nav) {
            const isExpanded = nav.classList.toggle('show');
            this.classList.toggle('active');
            this.setAttribute('aria-expanded', isExpanded);
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
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (nav && menuToggle) {
        if (isMobile) {
            nav.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
        } else {
            nav.classList.add('show');
            menuToggle.setAttribute('aria-expanded', 'true');
        }
    }
    
    // Update body padding to account for fixed header
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    document.body.style.paddingTop = `${headerHeight}px`;
}


// Enhanced click handlers for category cards
document.querySelectorAll('.C > div').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.querySelector('.contant')?.textContent.trim();
        if (category) {
            window.location.href = `category.html?type=${encodeURIComponent(category)}`;
        }
    });
    
    // Add keyboard accessibility
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
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

document.querySelector('.profile-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const city = document.getElementById('city').value;

    // Validate inputs
    if (!name || !number || !city) {
        alert('Please fill all fields');
        return;
    }

    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    // Simulate server request
    setTimeout(() => {
        console.log('Name:', name);
        console.log('Number:', number);
        console.log('City:', city);
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
        alert('Profile updated successfully!');
    }, 1000);


    // Example of an AJAX request to send data to the server
    // fetch('submit-profile.php', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ name, number, city })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
});
