document.addEventListener('DOMContentLoaded', () => {
    const get = id => document.getElementById(id);
    const complaintForm = get('complaintForm');

    
    const backBtn = get('addBackBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function (e) {
            e.preventDefault(); // stop form submit
            window.location.href = "complaint_management.php"; // redirect
        });
    }

    
    
    if (complaintForm) {
        complaintForm.addEventListener('submit', async function(e) {
            e.preventDefault(); 

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

            const formData = new FormData(this);

            try {
                const response = await fetch('../Backend/Addcomplaint.php', { 
                    method: "POST",
                    body: formData
                });

                const data = await response.text();

                if (data.includes("successfully")) {
                    alert('You have added a complaint successfully!');
                    this.reset();
                    
                    setTimeout(() => {
                        window.location.href = "Complaint_Management.php"; 
                    }, 1000);
                } else {
                    alert("Failed to add complaint.\nServer says: " + data);
                    console.error("PHP Error:", data);
                }

            } catch (error) {
                console.error("Error submitting complaint:", error);
                alert("Network Error. Check console.");
            }
        });
    }
});
