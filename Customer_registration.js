// Customer_registration.js

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const customerID = document.forms["registerForm"]["CustomerID"].value.trim();
    const name = document.forms["registerForm"]["Customer_Name"].value.trim();
    const address = document.forms["registerForm"]["Address"].value.trim();
    const email = document.forms["registerForm"]["Email"].value.trim();
    const customerType = document.forms["registerForm"]["Customer_Type"].value.trim();

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (!customerID || isNaN(customerID)) {
        alert("Please enter a valid numeric Customer ID.");
        return;
    }
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (!address) {
        alert("Please enter your address.");
        return;
    }
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!customerType) {
        alert("Please enter your customer type.");
        return;
    }

    // If all validations pass
    document.getElementById("responseMessage").innerHTML = "Registration successful!";
    document.getElementById("responseMessage").style.color = "green";

    // Redirect 
    setTimeout(() => {
        window.location.href = "Dashbaord.html";
    }, 2000);
});


document.querySelector(".back-btn").addEventListener("click", function() {
    window.location.href = "LoginPage.html"; // Change this to your login page path
});
