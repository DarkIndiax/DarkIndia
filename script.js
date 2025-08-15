const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar").querySelector("ul");
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});