document.addEventListener('DOMContentLoaded', () => {
    const get = id => document.getElementById(id);
    const complaintForm = get('complaintForm');

    if (complaintForm) {
        complaintForm.addEventListener('submit', async function(e) {
            e.preventDefault(); 

            // 1. VALIDATION
            const requiredFields = ['employeeId', 'customerId', 'complaintDate', 'description'];
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
                alert('Please fill all fields.');
                return;
            }

            // 2. SEND DATA
            const formData = new FormData(this);

            try {
                // FIXED PATH: Adjust this path if your PHP file is in a specific folder
                // Example: /Utility/Backend/AddComplaint.php
                const response = await fetch('/Utility/Backend/Addcomplaint.php', { 
                    method: "POST",
                    body: formData
                });

                const data = await response.text();

                // 3. CHECK RESPONSE
                if (data.includes("successfully")) {
                    alert('You have added a complaint successfully!');
                    this.reset();
                    
                    // Redirect
                    setTimeout(() => {
                        window.location.href = "Complaint_Management.html"; 
                    }, 1000);
                } else {
                    // Show the actual error from PHP
                    alert("Failed to add complaint. \nServer says: " + data);
                    console.error("PHP Error:", data);
                }

            } catch (error) {
                console.error("Error submitting complaint:", error);
                alert("Network Error. Check console.");
            }
        });
    }
});