// employee form handler (place in employee.js)
document.addEventListener('DOMContentLoaded', () => {
  // robustly find the form (id or first form on page)
  const form = document.getElementById('employeeRegistrationForm') || document.querySelector('form');
  if (!form) {
    console.warn('No form found on the page.');
    return;
  }

  // helper: show inline error message under an input
  function showError(input, message) {
    clearError(input);
    const err = document.createElement('div');
    err.className = 'input-error';
    err.style.color = '#c0392b';
    err.style.fontSize = '12px';
    err.style.marginTop = '6px';
    err.textContent = message;
    input.insertAdjacentElement('afterend', err);
    input.classList.add('input-invalid');
  }

  function clearError(input) {
    input.classList.remove('input-invalid');
    const next = input.nextElementSibling;
    if (next && next.classList && next.classList.contains('input-error')) {
      next.remove();
    }
  }

  // basic validators
  const validators = {
    required: (v) => v != null && String(v).trim() !== '',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    phone10: (v) => /^\d{10}$/.test(v),
    alnum: (v) => /^[a-zA-Z0-9]+$/.test(v)
  };

  function validateField(input) {
    const id = input.id || input.name || '';
    const val = (input.value || '').trim();

    // clear previous error
    clearError(input);

    if (!validators.required(val)) {
      showError(input, 'This field is required.');
      return false;
    }

    if (/email/i.test(id) && !validators.email(val)) {
      showError(input, 'Please enter a valid email address.');
      return false;
    }

    if (/contact|phone|number/i.test(id) && val && !validators.phone10(val)) {
      showError(input, 'Please enter a 10-digit phone number (digits only).');
      return false;
    }

    if (/employeeid|empid|employee-id/i.test(id) && val && !validators.alnum(val)) {
      showError(input, 'Employee ID should be alphanumeric (no spaces/symbols).');
      return false;
    }

    // passed
    return true;
  }

  // attach live validation clearing
  Array.from(form.querySelectorAll('input')).forEach((inp) => {
    inp.addEventListener('input', () => clearError(inp));
    inp.addEventListener('blur', () => validateField(inp));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // find all relevant inputs (common names/ids used in the HTML)
    const fields = {
      username: form.querySelector('#username') || form.querySelector('[name="username"]'),
      firstName: form.querySelector('#firstName') || form.querySelector('[name="firstName"]'),
      lastName: form.querySelector('#lastName') || form.querySelector('[name="lastName"]'),
      employeeId: form.querySelector('#employeeId') || form.querySelector('[name="employeeId"]'),
      contactNumber: form.querySelector('#contactNumber') || form.querySelector('[name="contactnumber"]') || form.querySelector('[name="contactNumber"]'),
      email: form.querySelector('#email') || form.querySelector('[name="email"]'),
      jobRole: form.querySelector('#jobRole') || form.querySelector('[name="jobRole"]')
    };

    // validate each present field, stop if any invalid
    for (const key in fields) {
      const input = fields[key];
      if (!input) continue; // missing in HTML, skip
      const ok = validateField(input);
      if (!ok) {
        input.focus();
        return;
      }
    }

    // build payload
    const payload = {};
    for (const key in fields) {
      const input = fields[key];
      if (!input) continue;
      payload[key] = input.value.trim();
    }

    // Save to localStorage (demo only) - append to 'employees' array
    try {
      const existing = JSON.parse(localStorage.getItem('employees') || '[]');
      existing.push({
        ...payload,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('employees', JSON.stringify(existing));
    } catch (err) {
      console.error('Failed to save to localStorage', err);
    }

    // success feedback (replace with nicer UI if desired)
    alert('Registration successful!');

    // optional: redirect to login page
    const loginHref = 'LoginScreen.php';
    window.location.href = loginHref;
  });
});