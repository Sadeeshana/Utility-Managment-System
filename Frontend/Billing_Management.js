// 1. Search Logic
function filterTable() {
    let searchInput = document.getElementById('search');
    if (!searchInput) return; 

    let filter = searchInput.value.toLowerCase();
    let rows = document.querySelectorAll('#billingTable tbody tr');

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
}

// 2. Event Listeners (With Safety Checks)
const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('input', filterTable);
}

const buttons = document.querySelectorAll('.pagination .pages button');
if (buttons.length > 0) {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

const settingsBtn = document.getElementById('settings');
if (settingsBtn) {
    settingsBtn.addEventListener('click', () => {
        alert('Redirecting to Settings Page...');
    });
}

const logoutBtn = document.getElementById('logout');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        alert('Logging out...');
    });
}

const addBillBtn = document.getElementById('addBillBtn');
if (addBillBtn) {
    addBillBtn.addEventListener('click', () => {
        alert('Opening Add New Bill Form...');
    });
}

// 3. Load Bills Function
function loadBills() {
    fetch('../Backend/Billing.php') 
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#billingTable tbody');

            // Safety Check
            if (!tableBody) {
                console.error("Error: Could not find '#billingTable tbody'");
                return;
            }

            tableBody.innerHTML = ''; 

            data.forEach(bill => {
                const row = `
                    <tr>
                        <td>${bill.BillID}</td>
                        <td>${bill.CustomerID}</td>
                        <td>${bill.MeterID}</td>
                        <td>${bill.BillingDate}</td>
                        <td>${bill.DueDate}</td>
                        <td>${bill.Payment_Status}</td>
                        <td>
                            <a href="editbill.php?id=${bill.BillID}" class="edit-link">
                                Edit
                            </a>
                        </td>
                        <td>
                            <a href="#" style="color: red; text-decoration: none;" onclick="deleteBill(${bill.BillID}); return false;">
                                Delete
                            </a>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

            if (typeof filterTable === "function") {
                filterTable();
            }
        })
        .catch(error => console.error('Error loading bills:', error));
}


function deleteBill(billID) {
    if (confirm("Are you sure you want to delete Bill ID: " + billID + "?")) {
        
        
        fetch('../Backend/Deletebill.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'bill_id=' + billID
        })
        .then(response => response.text()) 
        .then(data => {
            alert(data);
            loadBills(); 
        })
        .catch(error => console.error('Error:', error));
    }
}

// 5. Run
loadBills();
setInterval(loadBills, 3000);