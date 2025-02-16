// JavaScript code for FRABRO


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
