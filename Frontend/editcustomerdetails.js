// EDIT CUSTOMER DETAILS SCRIPT

document.addEventListener('DOMContentLoaded', async () => {

    const get = id => document.getElementById(id);
    const urlParams = new URLSearchParams(window.location.search);
    const customerID = urlParams.get('id');
    const customerForm = get('customerForm');

    // BACK BUTTON
    const backBtn = get('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "customer_management.php";
        });
    }

    // -------------------------------
    // PART 1: SUBMIT FORM (UPDATE)
    // -------------------------------
    if (customerForm) {
        customerForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // VALIDATION
            const requiredFields = ['customerId', 'customerName', 'address', 'email', 'customerType'];
            let isValid = true;

            requiredFields.forEach(id => {
                const el = get(id);
                if (el) el.style.borderColor = '#ccc'; // reset
                if (!el || el.value.trim() === '') {
                    if (el) el.style.borderColor = 'red';
                    isValid = false;
                }
            });

            // Email validation
            const emailInput = get('email');
            if (emailInput) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailInput.value.trim())) {
                    emailInput.style.borderColor = 'red';
                    isValid = false;
                    alert('Please enter a valid email address.');
                    return;
                }
            }

            if (!isValid) {
                alert('Please fill all fields.');
                return;
            }

            // Prepare form data
            const formData = new FormData(this);

            try {
                const response = await fetch("/Utility/Backend/updatecustomer.php", {
                    method: "POST",
                    body: formData
                });

                const data = await response.text();

                if (data.toLowerCase().includes("successful")) {
                    alert('Customer details updated successfully!');

                    setTimeout(() => {
                        window.location.href = "customer_management.php";
                    }, 1000);
                } else {
                    console.warn("PHP message:", data);
                    alert("Update Failed: " + data);
                }

            } catch (error) {
                console.error("Error updating customer:", error);
                alert("Network Error");
            }
        });
    }

    // -----------------------------------
    // PART 2: FETCH DATA (LOAD DATA)
    // -----------------------------------
    if (!customerID) {
        alert("No ID provided!");
        return;
    }

    try {
        const response = await fetch(`/Utility/Backend/editcustomer.php?id=${customerID}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.error) {
            alert(data.error);
        } else {
            if (get('customerId')) get('customerId').value = data.CustomerID;
            if (get('customerName')) get('customerName').value = data.CustomerName;
            if (get('address')) get('address').value = data.Address;
            if (get('email')) get('email').value = data.Email;
            if (get('customerType')) get('customerType').value = data.CustomerType;
        }

    } catch (error) {
        console.error("Error loading customer data:", error);
    }

});
