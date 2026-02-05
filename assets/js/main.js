// Mobile menu toggle + hamburger animation
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function setMenu(open) {
  if (!menuBtn || !mobileMenu) return;

  mobileMenu.dataset.open = String(open);
  mobileMenu.style.display = open ? "block" : "none";

  menuBtn.classList.toggle("is-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

if (menuBtn && mobileMenu) {
  // default closed
  setMenu(false);

  menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.dataset.open === "true";
    setMenu(!isOpen);
  });

  // Close menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => setMenu(false));
  });

  // Auto-close if resized to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) setMenu(false);
  });
}


// Scroll reveal
const items = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });
items.forEach(el => io.observe(el));

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
