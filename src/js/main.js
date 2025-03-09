import { initHeader } from './components/header.js';
import { initServiceAnimations, initScrollReveal } from './components/animations.js';
import { initForms } from './components/forms.js';
import { initScrollToTop } from './components/scroll-to-top.js';
import { initModal } from './components/modal.js';
import { initSlider } from './components/slider.js';

/**
 * Inisialisasi semua komponen saat DOM telah dimuat
 */
document.addEventListener('DOMContentLoaded', function() {
  // Inisialisasi header
  initHeader();
  
  // Inisialisasi animasi
  initServiceAnimations();
  initScrollReveal();
  
  // Inisialisasi form
  initForms();
  
  // Inisialisasi scroll-to-top
  initScrollToTop();
  
  // Inisialisasi modal
  initModal();
  
  // Inisialisasi slider
  initSlider();
  
  console.log('StraightUp Digital Agency - Website telah dimuat');
}); 