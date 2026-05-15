// MENU TOGGLE

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');

    // Change menu icon
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('ri-menu-line');
        menuIcon.classList.add('ri-close-line');
    } else {
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
    }
};

// CLOSE MENU WHEN CLICKING NAV LINKS

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
    });
});

// ACTIVE NAVBAR LINK ON SCROLL

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            document.querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
        }
    });

    // STICKY HEADER

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

// SIMPLE SCROLL ANIMATION

const cards = document.querySelectorAll(
    '.skill-card, .project-card, .about-content, .home-content'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s ease";

    observer.observe(card);
});

// CONTACT FORM MESSAGE