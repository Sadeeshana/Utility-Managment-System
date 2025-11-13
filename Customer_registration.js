document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registerForm');
  if (!form) {
    console.warn('registerForm element not found.');
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Optional: add field validation here before success action
    alert('Registration Successful!');
    form.reset();
  });
});
