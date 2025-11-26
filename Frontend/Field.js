document.getElementById("meterForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let meterID = document.getElementById("meterID").value;
    let meterType = document.getElementById("meterType").value;
    let installation = document.getElementById("installDate").value;
    let initial = document.getElementById("initialReading").value;

    alert("Data Submitted:\n" +
        "Meter ID: " + meterID + "\n" +
        "Meter Type: " + meterType + "\n" +
        "Installation Date: " + installation + "\n" +
        "Initial Reading: " + initial);
});

// Cancel button clears form
document.querySelector(".cancel-btn").addEventListener("click", function () {
    document.getElementById("meterForm").reset();
});