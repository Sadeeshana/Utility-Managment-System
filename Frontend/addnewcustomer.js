
        // --- JAVASCRIPT ---
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('customerForm');
            const createButton = document.getElementById('createButton');
            const cancelButton = document.getElementById('cancelButton');

            // 1. Handle Form Submission
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Collect form data
                const formData = new FormData(form);
                const data = {};
                formData.forEach((value, key) => {
                    // Special handling for checkbox arrays
                    if (data[key]) {
                        if (Array.isArray(data[key])) {
                            data[key].push(value);
                        } else {
                            data[key] = [data[key], value];
                        }
                    } else {
                        data[key] = value;
                    }
                });
                
                // Get checked services only (FormData naturally includes only checked boxes)
                const checkedServices = formData.getAll('services');
                
                // Console output for demonstration
                console.log("--- Customer Data Captured ---");
                console.log("Personal Details:", {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    dob: data.dob,
                });
                console.log("Contact Details:", {
                    email: data.email,
                    contactNumber: data.contactNumber,
                });
                console.log("Service Address:", {
                    streetAddress: data.streetAddress,
                    city: data.city,
                    postalCode: data.postalCode,
                });
                console.log("Utility Services:", checkedServices);

                alert("Customer Profile Created/Updated successfully! (Check console for data)");
                // In a real application, you would send this data to a server using fetch()
            });

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