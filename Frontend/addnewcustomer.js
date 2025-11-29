
        // --- JAVASCRIPT ---
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('customerForm');
            const createButton = document.getElementById('createButton');
            if(createButton){
                createButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    addNewCustomer();
                });
            }
            const cancelButton = document.getElementById('cancelButton');
            if(cancelButton){
                cancelButton.addEventListener('click', () => {
                    window.location.href = 'Customermanagement.php';
                });
            }

           

            // 2. Handle Cancel Button
            cancelButton.addEventListener('click', () => {
                const confirmed = confirm("Are you sure you want to cancel and clear the form?");
                if (confirmed) {
                    form.reset();
                    console.log("Form cleared.");
                }
            });
            
            // 3. Simple Search Bar Functionality (Optional)
            document.querySelectorAll('.search-field input').forEach(input => {
                input.addEventListener('focus', () => {
                    console.log(`Ready to search by ${input.placeholder.replace('Search by ', '')}...`);
                });
            });
        });

        function addNewCustomer() {
    
    const id      = document.getElementById('id').value;
    const name    = document.getElementById('fullName').value;
    const type    = document.getElementById('customerType').value;
    const email   = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    
    if(id === "" || name === "") {
        alert("Please fill in Customer ID and Full Name.");
        return;
    }

    if (type === "") {
        alert("Please select a Customer Type.");
        return; 
    }

    
    fetch('../Backend/Addcustomer.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        
        body: `id=${id}&fullname=${name}&customerType=${type}&email=${email}&address=${address}`
    })
    .then(response => response.text())
    .then(data => {
        // D. Check Response
        if (data.trim() === "Success") {
            alert("Customer Added Successfully!");
            window.location.href = 'Customermanagement.php'; // Go back to list
        } else {
            // Show the error message from PHP/SQL
            alert("Database Error:\n" + data);
        }
    })
    .catch(error => console.error('Error:', error));
}