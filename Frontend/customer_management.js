document.addEventListener('DOMContentLoaded', () => {

    // 1. Load Data Immediately
    loadCustomers();
    setInterval(loadCustomers, 3000);

    // 2. Search Logic
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterTable);
    }

    // 3. Add Customer Button
    const addBtn = document.querySelector('.add-customer-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            window.location.href = 'addnewcustomer.php';
        });
    }
});

// --- FUNCTIONS ---

function filterTable() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const filter = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll('#customerTableBody tr');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
}

function loadCustomers() {
    fetch('../Backend/CustomerMan.php') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('customerTableBody');
            if (!tableBody) return;

            tableBody.innerHTML = ''; 

            data.forEach((customer, index) => {
                const rowClass = index % 2 === 0 ? 'odd-row' : 'even-row';
                
                
                const row = `
                    <tr class="${rowClass}">
                        <td>${customer.CustomerID}</td>
                        <td>${customer.Customer_Name}</td>
                        <td>${customer.Address}</td>
                        <td><a href="mailto:${customer.Email}">${customer.Email}</a></td>
                        <td>${customer.Customer_Type}</td>
                        <td>
                        <a href="editcustomerdetails.php?id=${customer.CustomerID}" class="edit-link">Edit</a>
                    </td>
                    <td>
                        <a href="#" style="color: red; text-decoration: none;" onclick="deleteCustomer(${customer.CustomerID}); return false;">
                            Delete
                        </a>
                    </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

          
            filterTable(); 
        })
        .catch(error => console.error('Error loading data:', error));
}

function deleteCustomer(CustomerID) {
    if (confirm("Are you sure you want to delete Complaint ID: " + CustomerID + "?")) {
        
        fetch('../Backend/CustomerDel.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'customer_id=' + CustomerID
        })
        .then(response => response.text()) 
        .then(data => {
            alert(data);
            loadCustomers(); // Now this will work because the function is global!
        })
        .catch(error => console.error('Error:', error));
    }
}