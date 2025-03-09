/**
 * Inisialisasi modal untuk gambar
 */
function initModal() {
  // Dapatkan semua gambar yang bisa diklik
  const images = document.querySelectorAll('.gallery .img-container img');
  const modal = document.getElementById('imageModal');
  
  if (!modal) return;
  
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('caption');
  const closeBtn = document.querySelector('.close');
  
  // Tambahkan event listener untuk setiap gambar
  images.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      
      // Nonaktifkan scroll pada body
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Tutup modal saat tombol close diklik
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  // Tutup modal saat klik di luar gambar
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  // Tutup modal saat tombol Escape ditekan
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
  
  function closeModal() {
    modal.style.display = 'none';
    
    // Aktifkan kembali scroll pada body
    document.body.style.overflow = 'auto';
  }
}

export { initModal }; 