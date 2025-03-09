/**
 * Memeriksa apakah elemen berada dalam viewport
 * @param {HTMLElement} el - Elemen yang akan diperiksa
 * @returns {boolean} - True jika elemen berada dalam viewport
 */
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom >= 0
  );
}

/**
 * Menambahkan event listener dengan throttling
 * @param {string} eventType - Tipe event
 * @param {Function} callback - Fungsi callback
 * @param {number} delay - Delay dalam milidetik
 */
function addThrottledEventListener(eventType, callback, delay = 100) {
  let lastTime = 0;
  
  function throttled() {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      callback();
      lastTime = now;
    }
  }
  
  window.addEventListener(eventType, throttled);
}

export { isElementInViewport, addThrottledEventListener }; 