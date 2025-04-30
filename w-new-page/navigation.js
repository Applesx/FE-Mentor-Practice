document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('#primary-navigation');
  
    if (navToggle && primaryNav) {
      navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !expanded);
        primaryNav.setAttribute('data-visible', !expanded);
        
        document.body.style.overflow = expanded ? '' : 'hidden';
      });
    }
  });