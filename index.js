// JavaScript code for Fredro

// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile layout handling
document.addEventListener('DOMContentLoaded', function() {
    // Check screen size on load
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Add mobile menu toggle with animation
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav ul');
        if (nav) {
            nav.classList.toggle('show');
            this.classList.toggle('active');
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
            nav.classList.remove('show');
        } else {
            nav.classList.add('show');
        }
    }
}

// Add click handlers for category cards
document.querySelectorAll('.C > div').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.querySelector('.contant').textContent.trim();
        window.location.href = `category.html?type=${encodeURIComponent(category)}`;
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
