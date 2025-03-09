/**
 * Inisialisasi header/navbar
 */
function initHeader() {
  const header = document.querySelector("header");
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  
  // Efek sticky pada scroll
  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
  // Toggle menu mobile
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      menu.classList.toggle("active");
      
      // Toggle icon
      if (menu.classList.contains("active")) {
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-times");
      } else {
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
      }
    });
  }
  
  // Menutup menu saat link diklik
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", function() {
      menu.classList.remove("active");
      menuBtn.classList.remove("fa-times");
      menuBtn.classList.add("fa-bars");
    });
  });
}

export { initHeader }; 