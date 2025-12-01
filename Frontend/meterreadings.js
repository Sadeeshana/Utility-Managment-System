document.addEventListener('DOMContentLoaded', () => {

    loadMeterReadings();
    
    setInterval(loadMeterReadings, 3000);
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterTable);
    }

    const addBtn = document.querySelector('.add-reading-btn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            window.location.href = 'addmeterreading.php';
        });
    }
});


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
    fetch('../Backend/MeterRead.php') 
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('meterReadingTableBody');
            
            if (!tableBody) return;

            tableBody.innerHTML = ''; 

            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="10" style="text-align:center;">No readings found</td></tr>';
                return;
            }

            data.forEach((reading, index) => {
                const rowClass = index % 2 === 0 ? 'odd-row' : 'even-row';
                
                const row = `
                    <tr class="${rowClass}">
                        <td>${reading.ReadingID}</td>
                        <td>${reading.CustomerID}</td>
                        <td>${reading.EmployeeID}</td>
                        <td>${reading.Utility_Type}</td> <td>${reading.Reading_Date}</td> <td>${reading.Current_reading}</td> <td>${reading.Previous_reading}</td> <td>${reading.Units_consumed}</td> <td>
                            
                        </td>
                       
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

            filterTable(); 
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
            loadMeterReadings(); 
        })
        .catch(error => console.error('Error:', error));
    }
}