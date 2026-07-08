document.addEventListener('DOMContentLoaded', () => {
  if (typeof Typed !== 'undefined') {
    new Typed('#typed-text', {
      strings: ['Web Developer.', 'Web Designer.'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1200,
      loop: true,
    });
  }


  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) topBtn.style.display = 'block';
      else topBtn.style.display = 'none';
    });

    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});


// Active Navbar

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a, .nav-menu a");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});