// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Handle Buy Now button clicks
document.querySelectorAll('.buy-now-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your interest! The feature is coming soon.');
    });
});

// Form validation feedback
document.getElementById('form').addEventListener('submit', function(e) {
    const emailInput = document.getElementById('email').value;
    if (!emailInput.includes('@')) {
        e.preventDefault(); // Stop form submission if email is invalid
        alert('Please enter a valid email address.');
    }
});
