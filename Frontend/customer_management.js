        document.addEventListener('DOMContentLoaded', () => {
            // 1. Sample Data (Simulating a database fetch)
            

            const tableBody = document.getElementById('customerTableBody');
            const searchInput = document.getElementById('searchInput');
            
            // Function to render the table rows
            function renderTable(data) {
                tableBody.innerHTML = ''; // Clear existing rows
                data.forEach((customer, index) => {
                    const row = document.createElement('tr');
                    // Use index to apply the correct visual background color from CSS
                    row.className = index % 2 === 0 ? 'odd-row' : 'even-row'; 
                    
                    row.innerHTML = `
                        <td>${customer.name}</td>
                        <td>${customer.id}</td>
                        <td><a href="mailto:${customer.email}">${customer.email}</a></td>
                        <td>${customer.status}</td>
                        <td class="actions">
                            <i class="fas fa-eye" title="View Details" data-id="${customer.id}"></i>
                            <i class="fas fa-edit" title="Edit Customer" data-id="${customer.id}"></i>
                            <i class="fas fa-trash-alt" title="Delete Customer" data-id="${customer.id}"></i>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            }

            // Initial render
            renderTable(CustomerData);


            // 2. Search Functionality
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredData = customerData.filter(customer =>
                    customer.name.toLowerCase().includes(searchTerm) ||
                    customer.id.toLowerCase().includes(searchTerm) ||
                    customer.email.toLowerCase().includes(searchTerm)
                );
                renderTable(filteredData);
            });


            // 3. Actions (View, Edit, Delete) - Delegation
            tableBody.addEventListener('click', (e) => {
                if (e.target.tagName === 'I') {
                    const action = e.target.title.split(' ')[0]; // e.g., "View", "Edit", "Delete"
                    const customerId = e.target.dataset.id;
                    
                    // Simple interaction feedback
                    console.log(`${action} action triggered for Customer ID: ${customerId}`);
                    alert(`${action} customer with ID: ${customerId}`);
                }
            });

            // 4. "Add New Customer" Button Handler
            document.querySelector('.add-customer-btn').addEventListener('click', () => {
                window.location.href = 'addnewcustomer.html';
            });
  });



  function loadCustomers() {
    fetch('../Backend/CustomerMan.php') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#customerTableBody');
            tableBody.innerHTML = ''; 

            data.forEach(cusd => {
                
                const row = `
                    <tr>
                        <td>${cusd.CustomerID}</td>
                        <td>${cusd.Customer_Name}</td>
                        <td>${cusd.Address}</td>
                        <td>${cusd.Email}</td>
                        <td>${cusd.Customer_Type}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

            filterTable(); 
        })
        .catch(error => console.error('Error loading data:', error));
}


loadCustomers();

setInterval(loadCustomers, 3000);