document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple contact form alert
    const contactLink = document.querySelector('#contact a');
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Thank you for visiting my portfolio! Feel free to connect on LinkedIn.');
    });
});
