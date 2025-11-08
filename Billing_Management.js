// Search filter
document.getElementById('search').addEventListener('input', function() {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll('#billingTable tbody tr');
  rows.forEach(row => {
    let text = row.innerText.toLowerCase();
    row.style.display = text.includes(filter) ? '' : 'none';
  });
});

// Pagination buttons
const buttons = document.querySelectorAll('.pagination .pages button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Clickable settings & logout
document.getElementById('settings').addEventListener('click', () => {
  alert('⚙️ Redirecting to Settings Page...');
});

document.getElementById('logout').addEventListener('click', () => {
  alert('🚪 Logging out...');
});

// Clickable "Add new Bill" button
document.getElementById('addBillBtn').addEventListener('click', () => {
  alert('🧾 Opening Add New Bill Form...');
});
