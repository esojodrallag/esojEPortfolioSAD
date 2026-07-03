// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const topnav = document.querySelector('.topnav');

navToggle.addEventListener('click', () => {
  const isOpen = topnav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

topnav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    topnav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll-spy: highlight current section in nav
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('[data-nav]');

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

sections.forEach(section => spy.observe(section));

// Footer year
const footerDate = document.getElementById('footerDate');
if (footerDate) {
  footerDate.textContent = new Date().getFullYear();
}
