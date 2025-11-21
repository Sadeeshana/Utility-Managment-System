

// Wrap behavior in DOMContentLoaded so elements exist
document.addEventListener('DOMContentLoaded', () => {
    // Safe element getters
    const get = id => document.getElementById(id);

    const amountGivenEl = get('amountGiven');
    const amountToPayEl = get('amountToPay');
    const changeEl = get('change');
    const addBtn = get('addBillBtn');

    function calculateChange() {
        const amountToPay = parseFloat(amountToPayEl && amountToPayEl.value) || 0;
        const amountGiven = parseFloat(amountGivenEl && amountGivenEl.value) || 0;
        const delta = amountGiven - amountToPay;

        if (changeEl) {
            if (amountGiven <= amountToPay) {
                changeEl.value = '0.00';
                changeEl.style.color = 'red';
            } else {
                changeEl.value = delta.toFixed(2);
                changeEl.style.color = 'black';
            }
        }
    }

    // Attach listeners only when elements exist
    if (amountGivenEl) amountGivenEl.addEventListener('input', calculateChange);
    if (amountToPayEl) amountToPayEl.addEventListener('input', calculateChange);

    // Add Bill button → Validate form
    if (addBtn) {
        addBtn.addEventListener('click', function () {
            const requiredFields = [
                'customerId',
                'billId',
                'meterId',
                'billingDate',
                'dueDate',
                'totalBill',
                'amountToPay',
                'amountGiven'
            ];

            let isValid = true;

            // Clear previous error outlines safely
            requiredFields.forEach(id => {
                const el = get(id);
                if (el) el.style.borderColor = '#ccc';
            });

            // Check all fields
            requiredFields.forEach(id => {
                const input = get(id);
                if (!input || input.value === '' || input.value === null) {
                    if (input) input.style.borderColor = 'red';
                    isValid = false;
                }
            });

            if (!isValid) {
                alert('Please fill all fields before adding the bill.');
                return;
            }

            // Extra validation: Amount Given must be larger than Amount To Pay
            const amountToPay = parseFloat((get('amountToPay') && get('amountToPay').value) || 0);
            const amountGiven = parseFloat((get('amountGiven') && get('amountGiven').value) || 0);

            if (amountGiven <= amountToPay) {
                alert('Amount given must be larger than amount to pay.');
                const ag = get('amountGiven');
                if (ag) ag.style.borderColor = 'red';
                return;
            }

            // If all ok
            alert('Bill Added Successfully!');
        });
    }

    // initial calculation
    calculateChange();
});
