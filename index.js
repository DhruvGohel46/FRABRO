// JavaScript code for Fredro

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

document.querySelector('.profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const city = document.getElementById('city').value;

    // Here you would typically send the data to the server
    console.log('Name:', name);
    console.log('Number:', number);
    console.log('City:', city);

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
