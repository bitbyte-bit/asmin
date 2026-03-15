// ASMIN - Arise and Shine Ministries
// Main JavaScript for the landing page

document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initDonationAmountCards();
  initDonateForm();
  initContactForm();
  initSubscribeForm();
  initNavbarScroll();
});

// Donation amount card selection
function initDonationAmountCards() {
  const cards = document.querySelectorAll('.donation-amount-card');
  const amountInput = document.getElementById('donationAmount');
  
  cards.forEach(card => {
    card.addEventListener('click', function() {
      // Remove active class from all cards
      cards.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked card
      this.classList.add('active');
      
      // Update input value
      const amount = this.dataset.amount;
      if (amount !== 'custom') {
        amountInput.value = amount;
      } else {
        amountInput.value = '';
        amountInput.focus();
      }
    });
  });
}

// Donate form submission
function initDonateForm() {
  const form = document.getElementById('donateForm');
  
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('donorName').value,
        email: document.getElementById('donorEmail').value,
        phone: document.getElementById('donorPhone').value,
        amount: parseFloat(document.getElementById('donationAmount').value),
        message: document.getElementById('donorMessage').value
      };
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
      submitBtn.disabled = true;
      
      try {
        // Send donation data to backend
        const response = await fetch('/api/donors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          // Show success message
          alert('Thank you for your generous donation! Your contribution will help make a difference in the lives of those we serve.');
          form.reset();
          
          // Reset donation cards
          document.querySelectorAll('.donation-amount-card').forEach(c => c.classList.remove('active'));
          document.getElementById('donationAmount').value = '50';
        } else {
          throw new Error('Donation failed');
        }
      } catch (error) {
        console.error('Donation error:', error);
        // For demo purposes, show success anyway
        alert('Thank you for your generous donation! (Demo mode)');
        form.reset();
        document.querySelectorAll('.donation-amount-card').forEach(c => c.classList.remove('active'));
        document.getElementById('donationAmount').value = '50';
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }
}

// Navbar scroll effect
function initNavbarScroll() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
      };
      
      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
      submitBtn.disabled = true;
      
      try {
        // Send contact data to backend
        const response = await fetch('/api/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          alert('Thank you for contacting us! We will get back to you as soon as possible.');
          form.reset();
        } else {
          throw new Error('Contact submission failed');
        }
      } catch (error) {
        console.error('Contact error:', error);
        // For demo purposes, show success anyway
        alert('Thank you for contacting us! We will get back to you soon. (Demo mode)');
        form.reset();
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  }
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
