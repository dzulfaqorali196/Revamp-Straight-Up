/**
 * Inisialisasi form dengan Web3Forms
 */
function initForms() {
  const CONFIG = window.CONFIG || {};
  const WEB3FORMS_KEY = CONFIG.WEB3FORMS_KEY || '';
  
  // Fungsi untuk mengatur access key pada form
  function setAccessKey(form) {
    if (!form) return;
    const accessKeyInput = form.querySelector('input[name="access_key"]');
    if (accessKeyInput && WEB3FORMS_KEY) {
      accessKeyInput.value = WEB3FORMS_KEY;
    }
  }
  
  // Set access key untuk form newsletter
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    setAccessKey(newsletterForm);
    
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(newsletterForm);
      const submitButton = newsletterForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.textContent = 'Mengirim...';
      
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          newsletterForm.reset();
          alert('Terima kasih telah berlangganan newsletter kami!');
        } else {
          alert('Terjadi kesalahan. Silakan coba lagi.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
      })
      .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      });
    });
  }
  
  // Set access key untuk form kontak
  const contactForm = document.getElementById('contactform');
  if (contactForm) {
    setAccessKey(contactForm);
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.textContent = 'Mengirim...';
      
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          contactForm.reset();
          alert('Pesan Anda telah terkirim. Kami akan segera menghubungi Anda!');
        } else {
          alert('Terjadi kesalahan. Silakan coba lagi.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
      })
      .finally(() => {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      });
    });
  }
}

export { initForms }; 