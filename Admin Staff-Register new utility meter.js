document.getElementById("meterForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Meter Registered Successfully!");
});

document.querySelector(".cancel-btn").addEventListener("click", function () {
    document.getElementById("meterForm").reset();
});
