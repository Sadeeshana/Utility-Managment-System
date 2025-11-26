document.addEventListener("DOMContentLoaded", () => {

    const navButtons = document.querySelectorAll(".nav-button");

    // Assign redirects to sidebar buttons
    if (navButtons.length >= 4) {

        navButtons[0].addEventListener("click", () => {
            window.location.href = "Genaratereports.html";   
        });

        navButtons[1].addEventListener("click", () => {
            window.location.href = "Topconsumer.html"; 
        });

        navButtons[2].addEventListener("click", () => {
            window.location.href = "Unpaidbills.html";  
        });

        navButtons[3].addEventListener("click", () => {
            window.location.href = "UtilityUsageAnalytics.html";  
        });
    }

});
