// =============================================
//  SOMUNCU BABA — SCRIPT.JS
// =============================================

const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
const allLinks  = document.querySelectorAll('.nav-links a');

// ── Navbar scroll effect ──────────────────────
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Hamburger toggle ─────────────────────────
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu on link click (mobile)
allLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ── Contact form submission ───────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn');
    btn.textContent = 'Gönderildi ✓';
    btn.style.borderColor = '#c9a84c';
    btn.style.background  = 'rgba(201,168,76,0.15)';
    btn.style.color       = '#e4c97a';
    btn.disabled = true;
    form.reset();
  });
}

// ── Intersection Observer — fade-in sections ──
const sections = document.querySelectorAll('.menu-category, .info-block, .contact-form');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

sections.forEach(el => {
  el.style.opacity  = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.visible, .menu-category, .info-block, .contact-form').forEach(el => {
    el.addEventListener('transitionend', () => {}, { once: true });
  });
});

// Attach visible class via observer
const visibilityObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      visibilityObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

sections.forEach(el => visibilityObserver.observe(el));
