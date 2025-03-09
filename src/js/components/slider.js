/**
 * Inisialisasi slider untuk tim
 */
function initSlider() {
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');
  const dots = document.querySelectorAll('.slider-dots .dot');
  
  if (!carousel) return;
  
  const cardWidth = carousel.querySelector('.card').offsetWidth + 30; // Lebar card + gap
  const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
  const totalCards = carousel.querySelectorAll('.card').length;
  const maxScrollPosition = (totalCards - visibleCards) * cardWidth;
  
  let currentPosition = 0;
  let currentDot = 0;
  
  // Fungsi untuk mengupdate dot yang aktif
  function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }
  
  // Tambahkan event listener untuk tombol prev
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      if (currentPosition > 0) {
        currentPosition -= cardWidth;
        carousel.scrollTo({
          left: currentPosition,
          behavior: 'smooth'
        });
        
        currentDot = Math.floor(currentPosition / cardWidth);
        updateDots(currentDot);
      }
    });
  }
  
  // Tambahkan event listener untuk tombol next
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      if (currentPosition < maxScrollPosition) {
        currentPosition += cardWidth;
        carousel.scrollTo({
          left: currentPosition,
          behavior: 'smooth'
        });
        
        currentDot = Math.floor(currentPosition / cardWidth);
        updateDots(currentDot);
      }
    });
  }
  
  // Tambahkan event listener untuk dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
      currentPosition = index * cardWidth;
      carousel.scrollTo({
        left: currentPosition,
        behavior: 'smooth'
      });
      
      currentDot = index;
      updateDots(currentDot);
    });
  });
  
  // Inisialisasi dot pertama sebagai aktif
  if (dots.length > 0) {
    dots[0].classList.add('active');
  }
  
  // Tambahkan event listener untuk scroll carousel
  carousel.addEventListener('scroll', function() {
    currentPosition = carousel.scrollLeft;
    currentDot = Math.floor(currentPosition / cardWidth);
    
    if (currentDot >= 0 && currentDot < dots.length) {
      updateDots(currentDot);
    }
  });
}

export { initSlider }; 