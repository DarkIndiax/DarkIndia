
// Mobile menu toggle
const hamb = document.getElementById('hamb');
const mobile = document.getElementById('mobileMenu');
hamb?.addEventListener('click', ()=>{
  mobile.classList.toggle('show');
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();
