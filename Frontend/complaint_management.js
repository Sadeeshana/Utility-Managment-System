document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Load Data Immediately
    loadComplaints();

    // 2. Event Listeners
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            let filter = this.value.toLowerCase();
            let rows = document.querySelectorAll('#complaintTable tbody tr');
            rows.forEach(row => {
                let text = row.innerText.toLowerCase();
                row.style.display = text.includes(filter) ? '' : 'none';
            });
        });
    }

    // Pagination
    const buttons = document.querySelectorAll('.pagination .pages button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Settings & Logout
    const settingsBtn = document.getElementById('settings');
    if (settingsBtn) settingsBtn.addEventListener('click', () => alert('⚙️ Redirecting...'));

    const logoutBtn = document.getElementById('logout');
    if (logoutBtn) logoutBtn.addEventListener('click', () => alert('🚪 Logging out...'));

    const addBtn = document.getElementById('addComplaintBtn');
    if (addBtn) addBtn.addEventListener('click', () => window.location.href = 'addnewcomplaint.php');
});

// --- FUNCTIONS (MOVED OUTSIDE so they are accessible) ---

function loadComplaints() {
    // Check your path: usually ../Backend/Complaint.php if JS is in Frontend
    fetch('../Backend/Complaint.php') 
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        const tableBody = document.querySelector('#complaintTable tbody');
        if (!tableBody) return;

        tableBody.innerHTML = ''; 

        data.forEach(comp => {
            const row = `
                <tr>
                    <td>${comp.ComplaintID}</td> 
                    <td>${comp.CustomerID}</td>
                    <td>${comp.EmployeeID}</td>
                    <td>${comp.Complaint_date}</td>
                    <td>${comp.Description}</td>
                    <td>${comp.Status_of_Complaint}</td>
                    <td>
                        <a href="editcomplant.html?id=${comp.ComplaintID}" class="edit-link">Edit</a>
                    </td>
                    <td>
                        <a href="#" style="color: red; text-decoration: none;" onclick="deleteComplaint(${comp.ComplaintID}); return false;">
                            Delete
                        </a>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error('Error loading complaints:', error));
}

function deleteComplaint(ComplaintID) {
    if (confirm("Are you sure you want to delete Complaint ID: " + ComplaintID + "?")) {
        
        fetch('../Backend/Deletecomplaint.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'complaint_id=' + ComplaintID
        })
        .then(response => response.text()) 
        .then(data => {
            alert(data);
            loadComplaints(); // Now this will work because the function is global!
        })
        .catch(error => console.error('Error:', error));
    }
}