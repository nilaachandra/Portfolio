// typing effect
var typed = new Typed('#element', {
  strings: ['Nila Chandra Laishram'],
  typeSpeed: 60,
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}