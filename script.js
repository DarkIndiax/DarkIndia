// Current Year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll animation (optional)
const revealElements = document.querySelectorAll('.hero-text, .hero-image');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
revealElements.forEach(el => observer.observe(el));
