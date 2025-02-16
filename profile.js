// JavaScript code for Profile Page

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
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
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


// Function to handle form submission on profile page

document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const number = document.getElementById('number').value.trim();
            const city = document.getElementById('city').value.trim();

            // Validate inputs
            if (!name || !number || !city) {
                alert('Please fill in all fields');
                return;
            }

            // Show loading state
            const submitBtn = profileForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Saving...';

            // Simulate server request
            setTimeout(() => {
                console.log('Profile updated:', { name, number, city });
                submitBtn.disabled = false;
                submitBtn.textContent = 'Update Profile';
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
    }
});
