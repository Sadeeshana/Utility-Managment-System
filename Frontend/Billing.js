 // Highlight search input when typing
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => {
    if (searchInput.value.trim() !== "") {
      searchInput.classList.add("typing");
    } else {
      searchInput.classList.remove("typing");
    }
  });

  // Payment method toggle
  const cardBtn = document.getElementById("cardBtn");
  const cashBtn = document.getElementById("cashBtn");

  function setActiveMethod(el) {
    cardBtn.classList.remove('active');
    cashBtn.classList.remove('active');
    el.classList.add('active');
  }

  cardBtn.addEventListener('click', () => setActiveMethod(cardBtn));
  cashBtn.addEventListener('click', () => setActiveMethod(cashBtn));

  // Change calculation
  const amountToPay = document.getElementById("amountToPay");
  const amountGiven = document.getElementById("amountGiven");
  const change = document.getElementById("change");

  function updateChange() {
    const pay = parseFloat(amountToPay.value);
    const given = parseFloat(amountGiven.value);
    if (isNaN(pay) || isNaN(given)) {
      change.value = "";
      return;
    }
    const diff = given - pay;
    change.value = diff >= 0 ? `Rs. ${diff.toFixed(2)}` : "Insufficient";
  }

  amountToPay.addEventListener('input', updateChange);
  amountGiven.addEventListener('input', updateChange);
  updateChange();

  // Process payment with validation
  document.getElementById("processPayment").addEventListener("click", () => {
    const pay = parseFloat(amountToPay.value);
    const given = parseFloat(amountGiven.value);
    const selectedReceipt = document.querySelector('input[name="receiptOption"]:checked');

    if (!selectedReceipt) {
      alert('⚠️ Please select one receipt type before processing payment.');
      return;
    }

    if (amountToPay.value.trim() === "" || isNaN(pay) || pay <= 0) {
      alert('⚠️ Please enter a valid "Amount to Pay".');
      amountToPay.focus();
      return;
    }

    if (amountGiven.value.trim() === "" || isNaN(given)) {
      alert('⚠️ Please enter a valid "Amount Given".');
      amountGiven.focus();
      return;
    }

    if (given < pay) {
      alert('⚠️ "Amount Given" must be greater than or equal to "Amount to Pay".');
      amountGiven.focus();
      return;
    }

    const method = cardBtn.classList.contains('active') ? 'Card' : 'Cash';
    const changeValue = (given - pay).toFixed(2);
    const receiptType = selectedReceipt.value;

    alert(` Payment processed successfully!
Method: ${method}
Amount paid: Rs. ${pay.toFixed(2)}
Amount given: Rs. ${given.toFixed(2)}
Change: Rs. ${changeValue}
Receipt type: ${receiptType.toUpperCase()}`);
  });

