
function filterTable() {
    let filter = document.getElementById('search').value.toLowerCase();
    let rows = document.querySelectorAll('#billingTable tbody tr');

    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
}

document.getElementById('search').addEventListener('input', filterTable);



const buttons = document.querySelectorAll('.pagination .pages button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

document.getElementById('settings').addEventListener('click', () => {
    alert('⚙️ Redirecting to Settings Page...');
});

document.getElementById('logout').addEventListener('click', () => {
    alert('🚪 Logging out...');
});

document.getElementById('addBillBtn').addEventListener('click', () => {
    alert('🧾 Opening Add New Bill Form...');
}); 


function loadBills() {
    fetch('Php/Billing.php') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#billingTable tbody');
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

            filterTable(); 
        })
        .catch(error => console.error('Error loading bills:', error));
}


loadBills();

setInterval(loadBills, 3000);