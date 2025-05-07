
// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Current year for copyright
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');
  
  // Check for saved theme preference or use device preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
  
  // Theme toggle functionality
  themeToggleBtn.addEventListener('click', function() {
    const isDark = document.documentElement.classList.toggle('dark');
    
    if (isDark) {
      localStorage.setItem('theme', 'dark');
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
    } else {
      localStorage.setItem('theme', 'light');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  });
  
  // Mobile menu toggle
  const menuToggleBtn = document.getElementById('menu-toggle');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const mobileNav = document.getElementById('mobile-nav');
  
  menuToggleBtn.addEventListener('click', function() {
    const isOpen = mobileNav.classList.toggle('hidden');
    
    if (!isOpen) {
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      closeIcon.classList.add('hidden');
      menuIcon.classList.remove('hidden');
    }
  });
  
  // Close mobile menu when clicking on a nav link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNav.classList.add('hidden');
      closeIcon.classList.add('hidden');
      menuIcon.classList.remove('hidden');
    });
  });
  
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      // Special case for # link (home)
      if (targetId === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = document.getElementById('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // For a static site, we'll just log the values and show an alert
      console.log('Form submission:', { name, email, message });
      
      // Reset the form
      contactForm.reset();
      
      // Show a success message
      alert('Thank you for your message! In a real site, this would be sent to Rohan.');
    });
  }
});
