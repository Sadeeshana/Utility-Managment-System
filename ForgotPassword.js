document.addEventListener('DOMContentLoaded', function () {
  // Get all the needed elements from the page
  const emailInput = document.getElementById('email');
  const sendBtn = document.getElementById('sendBtn');
  const hint = document.getElementById('hint');
  const backBtn = document.getElementById('backBtn');

  // Check if email looks valid
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);        // Simple regex
  }

  // Show a short popup message
  function showToast(message, timeout = 3000) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = message;
    document.body.appendChild(t);
    // Fade out and remove it after a few seconds
    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transition = 'opacity .25s';
      setTimeout(() => t.remove(), 300);
    }, timeout);
  }

  // When "Send Verification Code" button is clicked
  sendBtn.addEventListener('click', async function () {
    const value = emailInput.value.trim();

    // Clear old messages
    hint.textContent = '';

    // Check if input is empty
    if (value.length === 0) {
      hint.textContent = 'Please enter your email.';
      emailInput.focus();
      return;
    }
    
    // Check if email is invalid
    if (!isValidEmail(value)) {
      hint.textContent = 'Please enter a valid email address.';
      emailInput.focus();
      return;
    }

    // Pretend to send the verification
    sendBtn.disabled = true;
    const originalText = sendBtn.textContent;
    sendBtn.textContent = 'Sending...';

    try {
      // Wait for 1.4 seconds to simulate network delay
      await new Promise(res => setTimeout(res, 1400));

      // Success (This is just a demo)
      sendBtn.textContent = 'Sent ✓';
      showToast('Verification code sent to ' + value);

      // Re-enable button after a few seconds
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

  // Pressing Enter triggers the send button
  emailInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendBtn.click();
    }
  });

  // Back to Login button
  backBtn.addEventListener('click', function () {
    // In a real app, this would go back to login page
    showToast('Back to login (demo)');
  });
});