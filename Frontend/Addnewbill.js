document.addEventListener('DOMContentLoaded', () => {
    const get = id => document.getElementById(id);

    const amountGivenEl = get('amountGiven');
    const amountToPayEl = get('amountToPay');
    const changeEl = get('change');
    const billForm = get('billForm');
   
    
    const backBtn = get('addBackBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault(); // stop form submit
            window.location.href = "Billing_Management.php"; // redirect
        });
    }

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

    if (amountGivenEl) amountGivenEl.addEventListener('input', calculateChange);
    if (amountToPayEl) amountToPayEl.addEventListener('input', calculateChange);

    calculateChange();


    if (billForm) {
        billForm.addEventListener('submit', async function (e) {
            e.preventDefault(); // Stop normal form submission

            // VALIDATION
            const requiredFields = ['customerId', 'billId', 'meterId', 'billingDate', 'dueDate', 'totalBill', 'amountToPay', 'amountGiven'];
            let isValid = true;

            requiredFields.forEach(id => { const el = get(id); if (el) el.style.borderColor = '#ccc'; });

            requiredFields.forEach(id => {
                const input = get(id);
                if (!input || input.value.trim() === '') {
                    if (input) input.style.borderColor = 'red';
                    isValid = false;
                }
            });

            if (!isValid) {
                alert('Please fill all fields.');
                return;
            }

            const amountToPay = parseFloat(amountToPayEl.value) || 0;
            const amountGiven = parseFloat(amountGivenEl.value) || 0;

            if (amountGiven < amountToPay) {
                alert('Amount given must be equal to or larger than amount to pay.');
                amountGivenEl.style.borderColor = 'red';
                return;
            }


            const formData = new FormData(this);

            try {
                const response = await fetch("../Backend/Addbill.php", {
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