// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close mobile menu after click
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    });
});

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
});

// Optional: Add any interactive features here if needed