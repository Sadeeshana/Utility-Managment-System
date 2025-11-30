document.addEventListener("DOMContentLoaded", () => {

    
    const navButtons = document.querySelectorAll(".nav-button");

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

    
    
    
    const generateBtn = document.getElementById('generateBtn'); 
   
     

    if (generateBtn) {
        generateBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const reportTypeInput = document.getElementById('reportType');
            

            if (!reportTypeInput) {
                alert("Error: Could not find report type dropdown.");
                return;
            }

            const typeValue = reportTypeInput.value;

            const url = `../Backend/ViewReport.php?type=${typeValue}`;
            
            //Open in new tab
            window.open(url, '_blank'); 
        });
    }
});