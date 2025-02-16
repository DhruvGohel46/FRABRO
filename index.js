// JavaScript code for Fredro

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
