document.addEventListener('DOMContentLoaded', () => {
    // Safe element getters
    const get = id => document.getElementById(id);

    const amountGivenEl = get('amountGiven');
    const amountToPayEl = get('amountToPay');
    const changeEl = get('change');
    const billForm = get('billForm');
    // REMOVED: const messageDiv = get('responseMessage');

    // BACK BUTTON (NO VALIDATION)
    
    const backBtn = get('addBackBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault(); // stop form submit
            window.location.href = "Billing_Management.php"; // redirect
        });
    }

    // --- 1. Change Calculation Logic ---
    function calculateChange() {
        const amountToPay = parseFloat(amountToPayEl && amountToPayEl.value) || 0;
        const amountGiven = parseFloat(amountGivenEl && amountGivenEl.value) || 0;
        const delta = amountGiven - amountToPay;

        if (changeEl) {
            if (amountGiven < amountToPay) {
                changeEl.value = '0.00';
                changeEl.style.color = 'red';
            } else {
                changeEl.value = delta.toFixed(2);
                changeEl.style.color = 'black';
            }
        }
    }

    // Attach listeners for calculation
    if (amountGivenEl) amountGivenEl.addEventListener('input', calculateChange);
    if (amountToPayEl) amountToPayEl.addEventListener('input', calculateChange);

    // Initial calculation on page load
    calculateChange();


    // --- 2. Form Submission and Validation Logic ---
    if (billForm) {
        billForm.addEventListener('submit', async function (e) {
            e.preventDefault(); // Stop normal form submission

            // A. VALIDATION
            const requiredFields = ['customerId', 'billId', 'meterId', 'billingDate', 'dueDate', 'totalBill', 'amountToPay', 'amountGiven'];
            let isValid = true;

            // Reset borders
            requiredFields.forEach(id => { const el = get(id); if (el) el.style.borderColor = '#ccc'; });

            // Check empty fields
            requiredFields.forEach(id => {
                const input = get(id);
                if (!input || input.value.trim() === '') {
                    if (input) input.style.borderColor = 'red';
                    isValid = false;
                }
            });

            if (!isValid) {
                // CHANGED: Use alert instead of messageDiv
                alert('Please fill all fields.');
                return;
            }

            // Check Amount Given > Amount To Pay
            const amountToPay = parseFloat(amountToPayEl.value) || 0;
            const amountGiven = parseFloat(amountGivenEl.value) || 0;

            if (amountGiven < amountToPay) {
                // CHANGED: Use alert instead of messageDiv
                alert('Amount given must be equal to or larger than amount to pay.');
                amountGivenEl.style.borderColor = 'red';
                return;
            }


            // B. SEND TO PHP
            const formData = new FormData(this);

            try {
                const response = await fetch("Backend/Addbill.php", {
                    method: "POST",
                    body: formData
                });
                
                const data = await response.text();

                // Check if PHP message contains "successful"
                if (data.toLowerCase().includes("successful")) {
                    // CHANGED: Alert success
                    alert(data); 
                    this.reset(); // Clear form
                    calculateChange(); // Reset change field
                    
                    // Redirect after 1 second
                    setTimeout(() => {
                        window.location.href = "Billing_Management.php";
                    }, 1000);
                } else {
                    // CHANGED: Alert error from PHP
                    alert(data); 
                }

            } catch (error) {
                 // CHANGED: Alert network error
                alert("Error: " + error);
            }
        });
    }
});