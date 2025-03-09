/**
 * Inisialisasi tombol scroll-to-top
 */
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const progressCircle = document.querySelector('.progress-ring__circle');
  
  if (!scrollToTopBtn || !progressCircle) return;
  
  const circumference = 2 * Math.PI * progressCircle.getAttribute('r');
  progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = scrollTop / scrollHeight;
    
    // Tampilkan tombol jika scroll lebih dari 300px
    if (scrollTop > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.visibility = 'visible';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.visibility = 'hidden';
    }
    
    // Update progress ring
    const offset = circumference - scrollPercentage * circumference;
    progressCircle.style.strokeDashoffset = offset;
  });
  
  // Scroll ke atas saat tombol diklik
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

export { initScrollToTop }; 