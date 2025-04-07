document.querySelectorAll('.faq-btn').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.closest('.faq-item');
    const answer = faqItem.querySelector('.faq-answer');
    const arrow = button.querySelector('.faq-arrow');

    answer.classList.toggle('hidden');

    arrow.classList.toggle('rotate-180');
  });
});