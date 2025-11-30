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

            //Get report type
            const reportTypeInput = document.getElementById('reportType');
            const typeValue = reportTypeInput.value;

            //Get time period (Daily, Monthly, Yearly)
            const periodInput = document.getElementById('reportperiod');
            const periodValue = periodInput ? periodInput.value : 'all';

            // Open New Tab
            const url = `../Backend/ViewReport.php?type=${typeValue}&period=${periodValue}`;
            
           
            window.open(url, '_blank'); 
        });
    }
});