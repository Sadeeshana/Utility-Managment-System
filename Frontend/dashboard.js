
        document.addEventListener('DOMContentLoaded', () => {

            loadDashboardcards();
            setInterval(loadDashboardcards, 1000);
            const navLinks = document.querySelectorAll('.sidebar-nav ul li');
            
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    navLinks.forEach(item => item.classList.remove('active'));
                    e.currentTarget.classList.add('active');
                });
            });

            
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

        //Functions for udf
        function searchUDF(type) {
            let id = "";
            let resultBox = null;

            if(type === 'employee'){
                id = document.getElementById('searchEmpID').value;
                resultBox = document.getElementById('empResult');
            }else {
                id = document.getElementById('searchCustID').value;
                resultBox = document.getElementById('custResult');
            }

            if(!id){
                alert("Please enter an ID");
                return;
            }
            resultBox.innerHTML = "Searching...";

            fetch('../Backend/SearchUDF.php',{
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: `type=${type}&id=${id}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
            resultBox.innerHTML = `<span style="color:red;">${data.error}</span>`;
        } else {
            const info = data.data;
            if (type === 'employee') {
                resultBox.innerHTML = `
                    <strong>Name:&nbsp</strong> ${info.Employee_Name}<br>
                    <strong>Role:</strong> ${info.Role}<br>
                    <strong>Phone:</strong> ${info.Contact_No}<br>
                    <strong>Email:</strong> ${info.Email} 
                `;
            } else {
                resultBox.innerHTML = `
                    <strong>Name:</strong> ${info.Customer_Name}<br>
                    <strong>Type:</strong> ${info.Customer_Type}<br>
                    <strong>Address:</strong> ${info.Address}<br>
                    <strong>Email:</strong> ${info.Email}
                `;
            }
        }
        })
        .catch(error => {
        console.error(error);
        resultBox.innerHTML = "Error loading data";
    });
        }