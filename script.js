
// MENU RESPONSIVE

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// TUTUP MENU SETELAH DIKLIK

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// TAHUN OTOMATIS DI FOOTER

document.getElementById("year").textContent =
    new Date().getFullYear();

// ANIMASI SAAT BAGIAN WEBSITE TERLIHAT

const revealElements = document.querySelectorAll(
    ".vision-card, .service-card, .project-item, .contact-item"
);

const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
