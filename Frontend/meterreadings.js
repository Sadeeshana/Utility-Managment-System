document.addEventListener('DOMContentLoaded', () => {

    // 1. Load Meter Readings Immediately
    loadMeterReadings();
    setInterval(loadMeterReadings, 3000); // Refresh every 3 seconds

    // 2. Search Logic
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterTable);
    }

    // 3. Add Reading Button
    const addBtn = document.querySelector('.add-reading-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            window.location.href = 'addmeterreading.php';
        });
    }
});

// --- FUNCTIONS ---

function filterTable() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const filter = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll('#meterReadingTableBody tr');

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
}

function loadMeterReadings() {
    fetch('../Backend/MeterReadingMan.php') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('meterReadingTableBody');
            if (!tableBody) return;

            tableBody.innerHTML = ''; 

            data.forEach((reading, index) => {
                const rowClass = index % 2 === 0 ? 'odd-row' : 'even-row';
                
                const row = `
                    <tr class="${rowClass}">
                        <td>${reading.ReadingID}</td>
                        <td>${reading.CustomerID}</td>
                        <td>${reading.EmployeeID}</td>
                        <td>${reading.UtilityType}</td>
                        <td>${reading.ReadingDate}</td>
                        <td>${reading.CurrentReading}</td>
                        <td>${reading.PreviousReading}</td>
                        <td>${reading.UnitsConsumed}</td>
                        <td>
                            <a href="editmeterreading.php?id=${reading.ReadingID}" class="edit-link">Edit</a>
                        </td>
                        <td>
                            <a href="#" style="color: red; text-decoration: none;" onclick="deleteMeterReading(${reading.ReadingID}); return false;">
                                Delete
                            </a>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

            filterTable(); // Apply search filter after loading
        })
        .catch(error => console.error('Error loading data:', error));
}

function deleteMeterReading(ReadingID) {
    if (confirm("Are you sure you want to delete Reading ID: " + ReadingID + "?")) {
        
        fetch('../Backend/MeterReadingDel.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'reading_id=' + ReadingID
        })
        .then(response => response.text()) 
        .then(data => {
            alert(data);
            loadMeterReadings(); // Refresh the table
        })
        .catch(error => console.error('Error:', error));
    }
}
