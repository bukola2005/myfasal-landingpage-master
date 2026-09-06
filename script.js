document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  const navLinks = mobileNavMenu ? mobileNavMenu.querySelectorAll('a') : [];
  const header = document.querySelector('header');

  function toggleMenu() {
    if (mobileNavMenu) {
      mobileNavMenu.classList.toggle('translate-x-0');
    }
    if (header) {
      header.classList.toggle('menu-open');
    }
  }

  if (mobileMenuBtn && mobileCloseBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
    mobileCloseBtn.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileNavMenu.classList.contains('translate-x-0')) {
          toggleMenu();
        }
      });
    });
  }
});
