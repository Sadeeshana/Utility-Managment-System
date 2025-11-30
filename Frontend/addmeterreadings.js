document.addEventListener('DOMContentLoaded', () => {
    const get = id => document.getElementById(id);
    const meterForm = get('meterReadingForm');

    // BACK BUTTON (NO VALIDATION)
    const backBtn = get('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault(); // stop form submit
            window.location.href = "meterreading.php"; // redirect
        });
    }

    // AUTO-CALCULATE UNITS CONSUMED
    const previousInput = get('previousReading');
    const currentInput = get('currentReading');
    const unitsInput = get('unitsConsumed');

    function calculateUnits() {
        const previous = parseFloat(previousInput.value) || 0;
        const current = parseFloat(currentInput.value) || 0;
        unitsInput.value = current - previous;
    }

    if (previousInput && currentInput) {
        previousInput.addEventListener('input', calculateUnits);
        currentInput.addEventListener('input', calculateUnits);
    }

    // FORM SUBMIT HANDLER
    if (meterForm) {
        meterForm.addEventListener('submit', async function(e) {
            e.preventDefault(); 

            // 1. VALIDATION
            const requiredFields = ['employeeId', 'customerId', 'utilityType', 'readingDate', 'currentReading', 'previousReading'];
            let isValid = true;

            requiredFields.forEach(id => {
                const el = get(id);
                if (!el || el.value.trim() === '') {
                    if (el) el.style.borderColor = 'red';
                    isValid = false;
                } else {
                    el.style.borderColor = '#ccc';
                }
            });

            if (!isValid) {
                alert('Please fill all required fields.');
                return;
            }

            // 2. SEND DATA
            const formData = new FormData(this);

            try {
                const response = await fetch('../Backend/AddMeterReading.php', { 
                    method: "POST",
                    body: formData
                });

                const data = await response.text();

                // 3. CHECK RESPONSE
                if (data.includes("successfully")) {
                    alert('Meter reading added successfully!');
                    this.reset();
                    unitsInput.value = ''; // reset units

                    setTimeout(() => {
                        window.location.href = "meterreadings.php"; 
                    }, 1000);
                } else {
                    alert("Failed to add meter reading.\nServer says: " + data);
                    console.error("PHP Error:", data);
                }

            } catch (error) {
                console.error("Error submitting meter reading:", error);
                alert("Network Error. Check console.");
            }
        });
    }
});
