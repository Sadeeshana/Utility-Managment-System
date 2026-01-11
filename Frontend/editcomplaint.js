document.addEventListener('DOMContentLoaded', async () => {
    
    const get = id => document.getElementById(id);
    const urlParams = new URLSearchParams(window.location.search);
    const complaintID = urlParams.get('id');
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

            // Validation
            const requiredFields = ['complaintId', 'employeeId', 'customerId', 'complaintDate', 'description', 'status'];
            let isValid = true;

            requiredFields.forEach(id => {
                const el = get(id);
                if (el) el.style.borderColor = '#ccc'; // Reset
                if (!el || el.value.trim() === '') {
                    if (el) el.style.borderColor = 'red';
                    isValid = false;
                }
            });

            if (!isValid) {
                alert('Please fill all fields.');
                return;
            }

            // Prepare form data
            const formData = new FormData(this);

            try {
                const response = await fetch("/Utility/Backend/updatecomplaint.php", {
                    method: "POST",
                    body: formData
                });

                const data = await response.text();

                if (data.toLowerCase().includes("successful")) {
                    alert('You have edited the complaint successfully!');
                    
                    // Redirect
                    setTimeout(() => {
                        window.location.href = "complaint_management.php";
                    }, 1000);
                } else {
                    console.warn("PHP message:", data);
                    alert("Update Failed: " + data);
                }

            } catch (error) {
                console.error("Error editing complaint:", error);
                alert("Network Error");
            }
        });
    }

    if (!complaintID) {
        alert("No ID provided!");
        return;
    }

    try {
        const response = await fetch(`/Utility/Backend/editcomplaint.php?id=${complaintID}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();

        if (data.error) {
            alert(data.error);
        } else {
            if(get('complaintId')) get('complaintId').value = data.ComplaintID;
            if(get('employeeId')) get('employeeId').value = data.EmployeeID;
            if(get('customerId')) get('customerId').value = data.CustomerID;
            if(get('complaintDate')) get('complaintDate').value = data.Complaint_date;
            if(get('description')) get('description').value = data.Description;
            if(get('status')) get('status').value = data.Status_of_Complaint;
        }

    } catch (error) {
        console.error("Error loading data:", error);
    }
});