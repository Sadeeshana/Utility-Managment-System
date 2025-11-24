document.addEventListener('DOMContentLoaded', function() {

    // --- 1. FETCH DATA FROM PHP ---
    function loadComplaints() {
        // Make sure this path is correct based on where your JS file is
        fetch('/Utility/Backend/Complaint.php') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // FIXED: Select the tbody, not the whole table
            const tableBody = document.querySelector('#complaintTable tbody');
            tableBody.innerHTML = ''; 

            data.forEach(comp => {
                // FIXED: Use the exact column names from your SQL table
                // Assuming your SQL column is "CompliantID" (with an 'i')
                const row = `
                    <tr>
                        <td>${comp.ComplaintID}</td> 
                        <td>${comp.CustomerID}</td>
                        <td>${comp.EmployeeID}</td>
                        <td>${comp.Complaint_date}</td>
                        <td>${comp.Description}</td>
                        <td>${comp.Status_of_Complaint}</td>
                        <td>
                <a href="editcomplant.html?id=${comp.ComplaintID}" class="edit-link">
                    Edit
                </a>
            </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

            filterTable(); // Re-apply filter after loading new data
        })
        .catch(error => console.error('Error loading complaints:', error));
    }

    // --- 2. CALL THE FUNCTION TO LOAD DATA ---
    // FIXED: This was missing. The data wouldn't load without it.
    loadComplaints();
    // Reload every 3 seconds (optional)
    // setInterval(loadComplaints, 3000);


// Search filter
document.getElementById('search').addEventListener('input', function() {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll('#complaintTable tbody tr');
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


document.getElementById('addComplaintBtn').addEventListener('click', () => {
  // Redirect to new complaint page
  window.location.href = 'addnewcomplaint.html'; 
});



});