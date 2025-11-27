document.addEventListener("DOMContentLoaded", () => {

    const navButtons = document.querySelectorAll(".nav-button");

    // Assign redirects to sidebar buttons
    if (navButtons.length >= 4) {

        navButtons[0].addEventListener("click", () => {
            window.location.href = "Genaratereports.php";   
        });

        navButtons[1].addEventListener("click", () => {
            window.location.href = "Topconsumer.php"; 
        });

        navButtons[2].addEventListener("click", () => {
            window.location.href = "Unpaidbills.php";  
        });

        navButtons[3].addEventListener("click", () => {
            window.location.href = "UtilityUsageAnalytics.php";  
        });
    }

});
