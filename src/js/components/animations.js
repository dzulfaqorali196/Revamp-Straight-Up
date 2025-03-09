import { isElementInViewport } from '../utils/helpers.js';

/**
 * Inisialisasi animasi untuk section services
 */
function initServiceAnimations() {
  const servicesSection = document.querySelector('.services');
  if (!servicesSection) return;
  
  const serviceHeader = document.querySelector('.service-header');
  const serviceItems = document.querySelectorAll('.service-item');
 
  let animationTriggered = false;

  function animateServices() {
    if (isElementInViewport(servicesSection)) {
      if (!animationTriggered) {
        serviceHeader.classList.add('animate');
        serviceItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate');
          }, 100 * (index + 1));
        });
        animationTriggered = true;
      }
    } else {
      serviceHeader.classList.remove('animate');
      serviceItems.forEach(item => item.classList.remove('animate'));
      animationTriggered = false;
    }
  }

  window.addEventListener('scroll', animateServices);
  animateServices(); // Panggil sekali untuk inisialisasi
}

/**
 * Inisialisasi ScrollReveal untuk animasi scroll
 */
function initScrollReveal() {
  if (typeof ScrollReveal === 'undefined') {
    console.warn('ScrollReveal tidak tersedia');
    return;
  }
  
  const sr = ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 400,
    reset: false
  });

  // Hero Section
  sr.reveal(".hero-page .gradient-blue");
  sr.reveal(".hero-page .gradient-v", { delay: 400, origin: "left" });
  sr.reveal(".hero-page-headline h1", { delay: 200, origin: "left" });
  sr.reveal(".hero-page-headline button", { delay: 700, origin: "bottom" });
  sr.reveal(".hero-page-headline p", { delay: 500, origin: "left" });
  
  // Tambahkan animasi lain sesuai kebutuhan
}

export { initServiceAnimations, initScrollReveal }; 