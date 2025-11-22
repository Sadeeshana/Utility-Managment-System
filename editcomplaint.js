document.addEventListener('DOMContentLoaded', () => {
    const get = id => document.getElementById(id);

    const complaintForm = get('complaintForm');

    if (complaintForm) {
        complaintForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // Prevent default submission

            // reqired fields
            const requiredFields = ['complaintId', 'employeeId', 'customerId', 'complaintDate', 'description', 'status'];
            let isValid = true;

            // Reset borders
            requiredFields.forEach(id => {
                const el = get(id);
                if (el) el.style.borderColor = '#ccc';
            });

            // Check for empty fields
            requiredFields.forEach(id => {
                const el = get(id);
                if (!el || el.value.trim() === '') {
                    if (el) el.style.borderColor = 'red';
                    isValid = false;
                }
            });

            if (!isValid) {
                alert('Please fill all fields.');
                return;
            }

            //  Show success alert 
            alert('You have edited the complaint successfully!');

            // Prepare form data
            const formData = new FormData(this);

            try {
                // Send to PHP backend
                const response = await fetch("Php/editcomplaint.php", {
                    method: "POST",
                    body: formData
                });

                const data = await response.text();

                // Optional: check PHP response
                if (!data.toLowerCase().includes("successful")) {
                    console.warn("PHP message:", data);
                }

                // Clear form
                this.reset();

                // redirect
                setTimeout(() => {
                    window.location.href = "Complaint_Management.html";
                }, 1000);

            } catch (error) {
                console.error("Error editing complaint:", error);
            }
        });
    }
});
