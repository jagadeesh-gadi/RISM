
window.addEventListener("scroll", function () {
    document.querySelectorAll(".reveal").forEach((el) => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {
            el.classList.add("active");
        }
    });
});


const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    navToggle.innerHTML = mobileMenu.classList.contains('open')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu on link click
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// contact fomr validation

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevents page refresh
    alert("Your message has been submitted successfully!");
});


