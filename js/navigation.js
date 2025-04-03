document.addEventListener('componentsLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
          navMenu.classList.toggle('hidden');
      });
  } else {
      console.error("Hamburger button or navigation menu not found.");
  }

  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.replace(/^\/|\/$/g, '');
  navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});
