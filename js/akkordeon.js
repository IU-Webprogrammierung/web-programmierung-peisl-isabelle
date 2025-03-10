document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
      
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });
    });
  });
  