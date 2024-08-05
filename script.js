const menuIcon = document.querySelector('.hamburger-icon');
const menuLinks = document.querySelector('.menu-links');

function toggleMenu() {
  menuLinks.classList.toggle('menu-active');
  menuIcon.classList.toggle('icon-active');
}

menuIcon.addEventListener('click', toggleMenu);


// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
function toggleMenu() {
  console.log("Toggle Menu called");
  menuLinks.classList.toggle('menu-active');
  menuIcon.classList.toggle('icon-active');
}

