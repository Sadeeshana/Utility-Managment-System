document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const sendBtn = document.getElementById('sendBtn');
  const hint = document.getElementById('hint');
  const backBtn = document.getElementById('backBtn');

  // Email Validation
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);      
  }

  // Toast Message
  function showToast(message, timeout = 3000) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = message;
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transition = 'opacity .25s';
      setTimeout(() => t.remove(), 300);
    }, timeout);
  }

  // Send Button
  sendBtn.addEventListener('click', async function () {
    const value = emailInput.value.trim();

    // Clear old messages
    hint.textContent = '';

    // Input Validation
    if (value.length === 0) {
      hint.textContent = 'Please enter your email.';
      emailInput.focus();
      return;
    }
    
    if (!isValidEmail(value)) {
      hint.textContent = 'Please enter a valid email address.';
      emailInput.focus();
      return;
    }

    // Simulate Sending Verification
    sendBtn.disabled = true;
    const originalText = sendBtn.textContent;
    sendBtn.textContent = 'Sending...';

    try {
      // Fake Network Request
      await new Promise(res => setTimeout(res, 1400));
      sendBtn.textContent = 'Sent ✓';
      showToast('Verification code sent to ' + value);

      // Re-enable Button
      setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.textContent = originalText;
      }, 3500);
    } catch (err) {
      hint.textContent = 'Something went wrong. Please try again.';
      sendBtn.disabled = false;
      sendBtn.textContent = originalText;
    }
  });

  // Pressing Enter in Input
  emailInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendBtn.click();
    }
  });

  // Back Button
  backBtn.addEventListener('click', function () {
    showToast('Back to login (demo)');
  });
});