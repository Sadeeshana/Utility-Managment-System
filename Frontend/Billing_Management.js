// 1. Search Logic
function filterTable() {
    let searchInput = document.getElementById('search');
    if (!searchInput) return; 

    let filter = searchInput.value.toLowerCase();
    // Selector for your existing HTML structure
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
            // BOSS: This selects the table body without needing an ID change
            const tableBody = document.querySelector('#billingTable tbody');

            // Safety Check: If it can't find the table, it stops here without crashing
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

// 4. Run
loadBills();
setInterval(loadBills, 3000);