// JavaScript for navigation bar effect on scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

/* Animation Service Section */
document.addEventListener('DOMContentLoaded', function() {
  const servicesSection = document.querySelector('.services');
  const serviceHeader = document.querySelector('.service-header');
  const serviceItems = document.querySelectorAll('.service-item');
 
  let animationTriggered = false;

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom >= 0
    );
  }

  function animateServices() {
    if (isElementInViewport(servicesSection)) {
      if (!animationTriggered) {
        serviceHeader.classList.add('animate');
        serviceItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate');
          }, 100 * (index + 1)); // +1 to start after header animation
        });
        animationTriggered = true;
      }
    } else {
      serviceHeader.classList.remove('animate');
      serviceItems.forEach(item => item.classList.remove('animate'));
      animationTriggered = false;
    }
  }

  let lastScrollTop = 0;
  
  function handleScroll() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop){
      // Scrolling down
      animateServices();
    } else {
      // Scrolling up
      animationTriggered = false;
      animateServices();
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // Initial check
  animateServices();
});

// JavaScript for modal functionality
// Modal functionality Testimonial
function openModal(img) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;

  // Add event listener for ESC key
  document.addEventListener('keydown', closeModalOnEsc);
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  // Remove event listener for ESC key
  document.removeEventListener('keydown', closeModalOnEsc);
}

function closeModalOnEsc(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

// Close modal when clicking outside the image
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    closeModal();
  }
}

// Scroll animation
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateElement(entry.target);
      } else {
        // Reset animation when element is out of view
        entry.target.classList.remove('animate');
        if (entry.target.classList.contains('section-title')) {
          resetTitleAnimation(entry.target);
        }
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  const animatedElements = document.querySelectorAll('.animate-on-scroll, .section-title');
  animatedElements.forEach(el => observer.observe(el));
});

function animateElement(element) {
  if (element.classList.contains('section-title')) {
    animateTitle(element);
  } else {
    const delay = element.dataset.delay || 0;
    setTimeout(() => {
      element.classList.add('animate');
    }, delay * 1000);
  }
}

function animateTitle(titleElement) {
  titleElement.classList.add('animate');
  const letters = titleElement.querySelectorAll('.animate-letter');
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.animation = `letterAnimation 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards`;
    }, index * 50);
  });
}

function resetTitleAnimation(titleElement) {
  titleElement.classList.remove('animate');
  const letters = titleElement.querySelectorAll('.animate-letter');
  letters.forEach(letter => {
    letter.style.animation = 'none';
    letter.offsetHeight; // Trigger reflow
    letter.style.animation = null;
  });
}

// Add smooth scrolling to all links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        smoothScroll(targetElement, 1000); // 1000ms duration

        // Close mobile menu if open
        const menu = document.querySelector('.menu');
        if (menu && menu.classList.contains('active')) {
          menu.classList.remove('active');
        }
      }
    });
  });

  function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 100; // Adjust offset as needed
    const startPosition = window.pageYOffset;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});

// JavaScript for responsive navigation sidebar menu
document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector(".menu");
  var menuBtn = document.querySelector(".menu-btn");
  var closeBtn = document.querySelector(".close-btn");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menu.classList.remove("active");
    }
  });

  // Optional: Close menu when scrolling
  window.addEventListener('scroll', function() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }
  });
});



// Scroll Reveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 100,
  easing: "ease-in-out",
});

// Count Reveal
let nums = document.querySelectorAll(".num");
let started = false; // prevent multiple starts

// Function to start the counter
function startCounter() {
  nums.forEach((e) => {
    let start = 0;
    let end = parseInt(e.dataset.num);
    let unit = e.textContent.includes('+') ? '+' : e.textContent.includes('x') ? 'x' : ''; // detect the unit

    let count = setInterval(() => {
      start++;
      e.textContent = start + unit;
      if (start === end) {
        clearInterval(count);
      }
    }, 2000 / end);
  });
}

// IntersectionObserver to observe the section containing counters
let observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !started) {
    startCounter(); // Start the counter when section is in view
    started = true; // Ensure it only starts once
  }
}, { threshold: 0.5 }); // Trigger when 50% of the section is in view

// Observe the .about-datas section
observer.observe(document.querySelector('.about-datas'));

// Heropage Section
sr.reveal(".hero-page .gradient-blue");
sr.reveal(".hero-page .gradient-v", { delay: 400, origin: "left" });
sr.reveal(".hero-page-headline h1", { delay: 200, origin: "left" });
sr.reveal(".tagline", { delay: 300, origin: "left" });
sr.reveal(".hero-page-headline p", { delay: 500, origin: "left" });
sr.reveal(".brands", { delay: 500 });
sr.reveal(".btn-blue", { delay: 600 });
sr.reveal(".preview");
sr.reveal("#testimonyPreview", { delay: 500 });

// Service Section
sr.reveal(".services .gradient-lightblue");
sr.reveal(".services h1", { delay: 600 });
sr.reveal(".services p", { delay: 800 });
sr.reveal(".service-box");
sr.reveal(".services .gradient-blue", { delay: 600 });

// About Section
sr.reveal(".about .gradient-lightblue");
sr.reveal(".about h1", { delay: 600 });
sr.reveal("div.about-datas > div.about-data:nth-child(1)", {
  delay: 700,
});
sr.reveal("div.about-datas > div.about-data:nth-child(3)", {
  delay: 800,
});
sr.reveal("div.about-datas > div.about-data:nth-child(5)", {
  delay: 900,
});
sr.reveal(".about-headlines", { origin: "left" });
sr.reveal(".about-image", { origin: "right" });


/* Team Slider */
const carousel = document.querySelector('.carousel');
const cards = carousel.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.slider-dots');

let currentIndex = 0;
let cardWidth, cardsPerView, maxIndex, gapWidth;
let isMobile = window.innerWidth <= 768; // Threshold for mobile devices

function updateSliderMetrics() {
    const computedStyle = window.getComputedStyle(carousel);
    gapWidth = parseInt(computedStyle.getPropertyValue('gap'), 10) || 0;
    cardWidth = cards[0].offsetWidth + gapWidth;
    
    if (isMobile) {
        cardsPerView = 1; // Show one card at a time on mobile
    } else {
        cardsPerView = Math.floor(carousel.offsetWidth / cardWidth);
    }
    
    // Adjust maxIndex calculation
    maxIndex = Math.ceil(cards.length / cardsPerView) - 1;
}

function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = Math.min(Math.max(0, index), maxIndex);
    let scrollPosition;
    if (currentIndex === maxIndex) {
        // For the last slide, ensure we scroll to the very end
        scrollPosition = carousel.scrollWidth - carousel.clientWidth;
    } else {
        scrollPosition = currentIndex * cardWidth * cardsPerView;
    }
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
    updateDots();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        goToSlide(currentIndex + 1);
    }
});

// Improve touch swiping functionality
let touchStartX = 0;
let touchEndX = 0;
let isDragging = false;
let startScrollLeft;

function handleTouchStart(e) {
    isDragging = true;
    touchStartX = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
    startScrollLeft = carousel.scrollLeft;
}

function handleTouchMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
    const diff = touchStartX - currentX;
    carousel.scrollLeft = startScrollLeft + diff;
}

function handleTouchEnd() {
    isDragging = false;
    const movedBy = carousel.scrollLeft - startScrollLeft;

    if (Math.abs(movedBy) > cardWidth / 4) { // Reduced threshold for smoother swipe
        const direction = movedBy > 0 ? 1 : -1;
        const newIndex = Math.min(Math.max(currentIndex + direction, 0), maxIndex);
        goToSlide(newIndex);
    } else {
        goToSlide(currentIndex);
    }
}

carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
carousel.addEventListener('touchend', handleTouchEnd);

carousel.addEventListener('mousedown', handleTouchStart);
carousel.addEventListener('mousemove', handleTouchMove);
carousel.addEventListener('mouseup', handleTouchEnd);
carousel.addEventListener('mouseleave', handleTouchEnd);

// Improved scroll handling for both desktop and mobile
let isScrolling;
carousel.addEventListener('scroll', () => {
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        const scrollPosition = carousel.scrollLeft;
        const newIndex = Math.round(scrollPosition / cardWidth);
        if (newIndex !== currentIndex && newIndex <= maxIndex) {
            currentIndex = newIndex;
            updateDots();
            // Ensure precise alignment after scroll
            goToSlide(currentIndex);
        }
    }, 66); // Debounce scroll events
});



// Handle window resize
window.addEventListener('resize', () => {
    isMobile = window.innerWidth <= 768;
    updateSliderMetrics();
    createDots();
    currentIndex = Math.min(currentIndex, maxIndex);
    goToSlide(currentIndex);
});

// Initial setup
updateSliderMetrics();
createDots();

// Ensure correct initial position
setTimeout(() => {
    goToSlide(0);
}, 100);

/*Our Team Animation Page */
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
  );
}

function animateOnScroll() {
  const section = document.getElementById('our-team');
  const cards = section.querySelectorAll('.card');

  if (isElementInViewport(section)) {
      cards.forEach((card, index) => {
          setTimeout(() => {
              card.classList.add('animate');
          }, index * 100);
      });
      window.removeEventListener('scroll', animateOnScroll);
  }
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
// Trigger animation check on DOMContentLoaded as well
document.addEventListener('DOMContentLoaded', animateOnScroll);



// Scroll to Top Button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

document.getElementById("scrollToTopBtn").onclick = function() {
  scrollToTop();
};

function scrollToTop() {
  const scrollToTop = window.setInterval(function() {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 20); // Adjust the '20' to change the scrolling speed
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 2);
}

/* WA Functionality */
document.addEventListener('DOMContentLoaded', function() {
  const whatsappButton = document.getElementById('whatsappButton');
  const phoneNumber = '6282295560240';
  const message = encodeURIComponent('Hai straightup digital');

  whatsappButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Mobile device
      this.href = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    } else {
      // Desktop
      this.href = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    }
    
    window.open(this.href, '_blank');
  });
});

/* Error Handling Contact Us Form */
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const contactNumberInput = document.getElementById('contactNumber');
  const emailInput = document.getElementById('email');
  const descriptionInput = document.getElementById('description');
  const submitButton = contactForm.querySelector('button[type="submit"]');

  function validateForm() {
    let isValid = true;

    // Validate Name
    if (nameInput.value.trim() === '') {
      document.getElementById('nameError').textContent = 'Name is required';
      document.getElementById('nameError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('nameError').style.display = 'none';
    }

    // Validate Contact Number
    const phoneNumber = contactNumberInput.value.replace(/\D/g, '');
    if (phoneNumber.length < 10) {
      document.getElementById('contactNumberError').textContent = 'Phone number must be at least 12 digits';
      document.getElementById('contactNumberError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('contactNumberError').style.display = 'none';
    }

    // Validate Email
    if (emailInput.value.trim() === '') {
      document.getElementById('emailError').textContent = 'Email is required';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('emailError').style.display = 'none';
    }

    // Validate Description
    if (descriptionInput.value.trim() === '') {
      document.getElementById('descriptionError').textContent = 'Message is required';
      document.getElementById('descriptionError').style.display = 'block';
      isValid = false;
    } else {
      document.getElementById('descriptionError').style.display = 'none';
    }

    return isValid;
  }

  // Prevent non-numeric input
  contactNumberInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '');
    if (this.value.length > 15) {
      this.value = this.value.slice(0, 15);
    }
    updateSubmitButtonState();
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function updateSubmitButtonState() {
    submitButton.disabled = !validateForm();
  }

  // Add input event listeners to all form fields
  [nameInput, contactNumberInput, emailInput, descriptionInput].forEach(input => {
    input.addEventListener('input', updateSubmitButtonState);
  });

  // Prevent form submission and validate on submit
  contactForm.addEventListener('submit', function(e) {
    if (!validateForm()) {
      e.preventDefault(); // Prevent form submission if validation fails
      alert('Please correct the errors in the form before submitting.');
    }
  });

  // Initial validation on page load
  updateSubmitButtonState();
});


/* Subscription Error Handling */
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email-input');
  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', function(e) {
    // Clear previous messages
    formMessage.textContent = '';
    formMessage.className = 'form-message';

    // Validate email
    if (!validateEmail(emailInput.value)) {
      e.preventDefault(); // Prevent form submission only if email is invalid
      showMessage('Please enter a valid email address.', 'error');
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
  }
});

// Scroll Reveal Animations for Contact Section and Footer
document.addEventListener('DOMContentLoaded', function() {
  // Inisialisasi ScrollReveal
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
  });

  // Contact Section
  sr.reveal(".contact .gradient-blue");
  sr.reveal(".contact .gradient-lightblue", { delay: 300 });
  sr.reveal(".reveal-title", { delay: 400 });
  sr.reveal(".reveal-text", { delay: 500 });
  sr.reveal(".reveal-form", { delay: 600 });

  // Footer Section
  sr.reveal(".reveal-hr", { 
    delay: 200, 
    scale: 0.85,
    duration: 1000
  });
  sr.reveal(".reveal-callout", { 
    delay: 400, 
    distance: '50px', 
    origin: 'left'
  });
  sr.reveal(".reveal-bottom", { 
    delay: 600, 
    distance: '50px'
  });
  sr.reveal(".reveal-socials", { 
    delay: 800, 
    scale: 0.85
  });
});

/* Animasi Scroll to Top */
document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const progressRing = document.querySelector('.progress-ring__circle');
  const circumference = 2 * Math.PI * 28; // 2πr

  progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
  progressRing.style.strokeDashoffset = circumference;

  function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    progressRing.style.strokeDashoffset = offset;
  }

  function handleScroll() {
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    const scrollPercentage = (scrolled / scrollTotal) * 100;

    if (scrollPercentage > 5) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }

    setProgress(scrollPercentage);
  }

  window.addEventListener('scroll', handleScroll);

  scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

/* Header Sticky Mobile*/
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const sticky = header.offsetTop;

  function makeHeaderSticky() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  // Check if we're on a mobile device
  if (window.innerWidth <= 767) {
    window.addEventListener('scroll', makeHeaderSticky);
  }

  // Recalculate on resize
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 767) {
      window.addEventListener('scroll', makeHeaderSticky);
    } else {
      window.removeEventListener('scroll', makeHeaderSticky);
      header.classList.remove('sticky');
    }
  });
});