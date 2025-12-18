/* ==========================================
   Minimal JS for Academic × Modern Website
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* 1. Fade-in safety (in case CSS loads late) */
  document.body.classList.add("js-loaded");

  /* 2. Active nav link fallback (robustness) */
  const links = document.querySelectorAll(".nav-links a");
  const currentPage = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  /* 3. Future-ready mobile menu toggle (optional) */
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

});
