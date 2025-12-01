document.addEventListener('DOMContentLoaded', () => {

    const addBtn = document.getElementById('addReadingBtn'); 
if (addBtn) {
    addBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        submitReading();
    });
}

    const currInput = document.getElementById('currentReading');
    const prevInput = document.getElementById('previousReading');
    
    if (currInput && prevInput) {
        currInput.addEventListener('input', calculateUnits);
        prevInput.addEventListener('input', calculateUnits);
    }
});


function calculateUnits() {
    const curr = parseFloat(document.getElementById('currentReading').value) || 0;
    const prev = parseFloat(document.getElementById('previousReading').value) || 0;
    const unitsBox = document.getElementById('unitsConsumed');

    if (curr > prev) {
        unitsBox.value = (curr - prev).toFixed(0); // Set value automatically
    } else {
        unitsBox.value = 0;
    }
}

function submitReading() {
    //Get Values
    const r_id  = document.getElementById('readingId').value;
    
    const c_id  = document.getElementById('customerId').value;
    const e_id  = document.getElementById('employeeId').value;
    const type  = document.getElementById('utilityType').value;
    const date  = document.getElementById('readingDate').value;
    const prev  = document.getElementById('previousReading').value;
    const curr  = document.getElementById('currentReading').value;
    const units = document.getElementById('unitsConsumed').value;

    //Validation
    if(r_id === "" || c_id === "" || curr === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Send to PHP
    fetch('../Backend/Addmeter.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `reading_id=${r_id}&employee_id=${e_id}&customer_id=${c_id}&utility_type=${type}&reading_date=${date}&previous_reading=${prev}&current_reading=${curr}&units_consumed=${units}`
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes("Success")) {
            alert("Reading Added Successfully!");
            window.location.href = "meterreadings.php"; // Redirect to list
        } else {
            alert(data); 
        }
    })
    .catch(error => console.error('Error:', error));
}