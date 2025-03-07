document.addEventListener('componentsLoaded', function() {
    // Hamburger Menü
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
      });
    } else {
      console.error("Hamburger button or navigation menu not found.");
    }
  
    // "active" Klasse auf den aktuellen Link
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  