const text = "I'm Olorato Nthula";
  const typingSpan = document.getElementById("typing-span");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typingSpan.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // Adjust speed as needed
    }
  }

  window.onload = typeWriter;

// Function to toggle the navigation menu
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.hidden').forEach(el => revealObserver.observe(el));

// Function to toggle the navigation menu
  document.querySelectorAll('.hidden').forEach((el, index) => {
    // Optional staggered delay
    el.style.transitionDelay = `${index * 50}ms`;
    revealObserver.observe(el);
  });


  const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Smooth scroll & manual highlight
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove all active classes
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');

    // Scroll to section
    const targetId = link.getAttribute('href').toLowerCase();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ScrollSpy using IntersectionObserver
const options = {
  threshold: 0.6 // adjust for when a section is "active"
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');
      // Remove all active classes
      navLinks.forEach(link => {
        link.classList.remove('active');
        // Match href with ID
        if (link.getAttribute('href').toLowerCase() === `#${sectionId.toLowerCase()}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, options);

// Observe each section
sections.forEach(section => {
  sectionObserver.observe(section);
});
