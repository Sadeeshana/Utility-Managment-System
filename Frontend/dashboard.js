
        // --- JavaScript Code ---
        document.addEventListener('DOMContentLoaded', () => {

            loadDashboardcards();
            setInterval(loadDashboardcards, 1000);
            // Basic interaction for sidebar (e.g., changing the active state)
            const navLinks = document.querySelectorAll('.sidebar-nav ul li');
            
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    // Remove active class from all
                    navLinks.forEach(item => item.classList.remove('active'));
                    // Add active class to the clicked item
                    e.currentTarget.classList.add('active');
                });
            });

            // Note: For live charts, you would integrate a library like Chart.js here.
            
            console.log("Dashboard loaded successfully.");
        });

        function loadDashboardcards() {
            fetch('../Backend/Dashboardcards.php')
            .then(response => {
                if(!response.ok) throw new Error('Network error');
                return response.json();
            })
            .then(data => {
                // Customers
                const customer = document.getElementById('count-customers');
                if(customer) customer.innerText = data.total_customers;

                //  Pending Bills
            const billsEl = document.getElementById('count-bills');
            if (billsEl) billsEl.innerText = data.pending_bills;

            // Complaints
            const complaintsEl = document.getElementById('count-complaints');
            if (complaintsEl) complaintsEl.innerText = data.open_complaints;

            // Employees
            const employeesEl = document.getElementById('count-employees');
            if (employeesEl) employeesEl.innerText = data.total_employees;


            })
            .catch(error => console.error('Error loading stats',error));
        }