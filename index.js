// Loading Animation
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  setTimeout(function() {
    loader.classList.add('loader-hidden');
    loader.addEventListener('transitionend', function() {
      document.body.removeChild(loader);
    });
  }, 1500);
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('active');
    document.querySelector('.header').classList.add('scrolled');
  } else {
    backToTopButton.classList.remove('active');
    document.querySelector('.header').classList.remove('scrolled');
  }
});

backToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', function() {
  navbar.classList.toggle('active');
  mobileMenuBtn.innerHTML = navbar.classList.contains('active') ? 
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener('click', function() {
    navbar.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Animate stats counter
function animateStats() {
  const statItems = document.querySelectorAll('.stat-item');
  
  statItems.forEach(item => {
    const numberElement = item.querySelector('.stat-number');
    const target = parseInt(numberElement.getAttribute('data-count'));
    const duration = 2000; // Animation duration in ms
    const step = target / (duration / 16); // 60fps
    
    let current = 0;
    
    const updateNumber = () => {
      current += step;
      if (current < target) {
        numberElement.textContent = Math.floor(current);
        requestAnimationFrame(updateNumber);
      } else {
        numberElement.textContent = target;
      }
    };
    
    // Start animation when element is in viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateNumber();
        observer.unobserve(item);
      }
    });
    
    observer.observe(item);
  });
}

// Initialize particles.js
function initParticles() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#2563eb"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#2563eb",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Initialize particles.js
  if (document.getElementById('particles-js')) {
    initParticles();
  }
  
  // Initialize stats counter animation
  animateStats();
  
  // Add animation classes when elements come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate__animated');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        const animationClass = element.classList[1];
        element.classList.add(animationClass);
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
});