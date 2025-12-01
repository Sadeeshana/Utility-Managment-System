<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Managers Reports & Analytics</title>
    <link rel="stylesheet" href="Genaratereport.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="page">
    
     <!--Navigation bar-->
        <nav class="sidebar">
            <h2 class="sidebar-title">Managers Reports & Analytics</h2>

            <div class="nav-menu">
                <button class="nav-button" >Full Reports (PDF)</button>
                <button class="nav-button">Top Consumers by Utility</button>
                <button class="nav-button" >Unpaid Bills</button>
                
            </div>

            <div class="back-section">
                <button onclick="window.location.href='dashboard.php'" class="back-btn" type="button">Back to Dashboard</button>
            </div>
        </nav>
    
<!--main part-->
        <main class="main-content">
            <header class="main-header">
                <h1>Generate Reports</h1>
                <p>Select your desired report type and data range to download</p>
            </header>

            <div class="content-body">
                
                <section class="card configure-card">
  <h3>Select Your Report</h3>
  <p>Choose the type of report and the period it should cover.</p>

<!-- Utility Selection -->
  <label for="utility">Select Report type:</label>
  <select id="reportType" name="utility" class="report-select">
    <option value="customer">Customer</option>
    <option value="employee">Employee</option>
    <option value="meter">Meter readings</option>
    <option value="complaints">Complaints</option>
  </select>

  <!-- Report Period Selection -->
  <label for="report-period">Select Period:</label>
  <select id="reportperiod" name="report-period" class="report-select">
  <option value="daily">Daily</option>  
  <option value="monthly">Monthly</option>
    <option value="yearly">Yearly</option>
  </select>



  <button class="generate-btn" id="generateBtn">Generate Report</button>
</section>

                
            </div>
        </main>

    </div>
<script src="Genaratereport.js"></script>
</body>
</html>