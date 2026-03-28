document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form[name="reservation"]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value : '';

      if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
      }

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      })
        .then(function () {
          window.location.href = 'https://buy.stripe.com/5kQ5kFfBqaFmb4BfFj87K00';
        })
        .catch(function () {
          alert('Something went wrong. Please try again.');
        });
    });
  });
});
